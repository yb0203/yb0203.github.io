#!/usr/bin/env python3
"""
Gmail Outreach & Communication Engine (Full Gmail API Access)
Safely drafts, previews, dispatches outreach emails, and checks for replies via Gmail API.
Supports ADC credentials, OAuth 2.0 client credentials, and local drafts.
Automatically updates tracker/applications.csv in the 3-entity model.
"""

import os
import sys
import base64
import argparse
from email.message import EmailMessage
from datetime import datetime, timedelta
import pandas as pd
from rich.console import Console
from rich.panel import Panel
from rich.table import Table

TRACKER_DIR = os.path.dirname(os.path.abspath(__file__))
OAUTH_CLIENT_FILE = os.path.join(TRACKER_DIR, "oauth_credentials.json")
GMAIL_TOKEN_FILE = os.path.join(TRACKER_DIR, "gmail_token.json")
APPLICATIONS_CSV = os.path.join(TRACKER_DIR, "applications.csv")
COMPANIES_CSV = os.path.join(TRACKER_DIR, "companies.csv")
CONTACTS_CSV = os.path.join(TRACKER_DIR, "contacts.csv")

console = Console()

GMAIL_SCOPES = [
    "https://www.googleapis.com/auth/gmail.compose",
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/gmail.readonly",
    "https://www.googleapis.com/auth/gmail.modify"
]

def get_gmail_service():
    import google.auth
    from google_auth_oauthlib.flow import InstalledAppFlow
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from googleapiclient.discovery import build

    # 1. Try Token File
    creds = None
    if os.path.exists(GMAIL_TOKEN_FILE):
        creds = Credentials.from_authorized_user_file(GMAIL_TOKEN_FILE, GMAIL_SCOPES)

    if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request())

    # 2. Try ADC
    if not creds:
        try:
            adc_creds, _ = google.auth.default(scopes=GMAIL_SCOPES)
            if not adc_creds.valid:
                adc_creds.refresh(Request())
            if adc_creds.valid:
                creds = adc_creds
        except Exception:
            pass

    # 3. Try OAuth Client
    if not creds or not creds.valid:
        if os.path.exists(OAUTH_CLIENT_FILE):
            flow = InstalledAppFlow.from_client_secrets_file(OAUTH_CLIENT_FILE, GMAIL_SCOPES)
            creds = flow.run_local_server(port=0)
            with open(GMAIL_TOKEN_FILE, 'w') as token:
                token.write(creds.to_json())
        else:
            return None

    return build('gmail', 'v1', credentials=creds)

def render_outreach_body(recipient_name, company_name, role_title, hook=None):
    if not hook:
        hook = "Architected multi-agent workflows with live database syncing, automated event alerts, and human-in-the-loop validation tools (e.g., Legal Owl with zero-hallucination PDF coordinate grounding)."

    subject = f"Applied AI & Product Operations — Yashvi Bansal (IIT BHU / Kotak Mahindra Bank)"
    
    body = f"""Hi {recipient_name},

I hope this email finds you well. I’ve been following {company_name}'s recent developments and really admire your product vision.

My name is Yashvi Bansal, an IIT-BHU graduate and Software Development Engineer at Kotak Mahindra Bank. I am seeking full-time roles in Applied AI Product Management or Founder’s Office (and am open to starting contractually).

Why I can create immediate leverage for {company_name}:
• Applied AI Architecture: Built multi-agent workflows with live API syncing, nightly event diffing, and citation ledgers to ensure LLM responses are 100% traceable.
• Domain Leverage: {hook}
• Operational Impact: Cut validation cycles by 90% and database reporting storage footprints by 99% at Kotak Bank.

I would love to help take workflow execution load off your plate. If you are open to it, I would be deeply grateful for a quick 10-minute chat to learn more about your roadmap and see how I can support you.

Best regards,

Yashvi Bansal
B.Tech, IIT-BHU (Class of 2023)
+91 62831 62131 | bansaly0203@gmail.com
LinkedIn: linkedin.com/in/yb0203 | GitHub: github.com/yb0203
Portfolio: https://yb0203.github.io/
"""
    return subject, body

def create_draft(recipient_email, subject, body):
    service = get_gmail_service()
    if not service:
        show_auth_instructions()
        return None

    message = EmailMessage()
    message.set_content(body)
    message['To'] = recipient_email
    message['Subject'] = subject

    encoded_message = base64.urlsafe_b64encode(message.as_bytes()).decode()
    create_message = {'message': {'raw': encoded_message}}

    draft = service.users().drafts().create(userId="me", body=create_message).execute()
    console.print(f"[bold green]✓ Gmail Draft created successfully![/bold green] Draft ID: `{draft['id']}`")
    return draft['id']

def send_email(recipient_email, subject, body):
    service = get_gmail_service()
    if not service:
        show_auth_instructions()
        return None

    message = EmailMessage()
    message.set_content(body)
    message['To'] = recipient_email
    message['Subject'] = subject

    encoded_message = base64.urlsafe_b64encode(message.as_bytes()).decode()
    send_message = {'raw': encoded_message}

    sent = service.users().messages().send(userId="me", body=send_message).execute()
    console.print(f"[bold green]✓ Email sent successfully![/bold green] Message ID: `{sent['id']}`")
    return sent['id']

def update_application_after_outreach(app_id, subject, recipient_name, recipient_email, is_sent=False):
    if not os.path.exists(APPLICATIONS_CSV):
        return

    df = pd.read_csv(APPLICATIONS_CSV).fillna("")
    if app_id not in df['app_id'].values:
        return

    today_str = datetime.now().strftime("%Y-%m-%d")
    followup_date = (datetime.now() + timedelta(days=4)).strftime("%Y-%m-%d")
    
    action_type = "Cold Email Sent" if is_sent else "Cold Email Drafted"
    new_interaction_note = f"[{today_str}] {action_type} to {recipient_name} ({recipient_email}) - Subject: {subject}"
    
    # Update row
    idx = df[df['app_id'] == app_id].index[0]
    df.at[idx, 'last_contacted_date'] = today_str
    df.at[idx, 'next_followup_due'] = followup_date
    df.at[idx, 'latest_interaction_type'] = action_type
    
    existing_history = str(df.at[idx, 'interaction_history']).strip()
    if existing_history and existing_history != "(No prior interactions)":
        df.at[idx, 'interaction_history'] = f"{existing_history} | {new_interaction_note}"
    else:
        df.at[idx, 'interaction_history'] = new_interaction_note

    if is_sent and df.at[idx, 'stage'] == 'Wishlist':
        df.at[idx, 'stage'] = 'Outreach_Sent'
        
    df.at[idx, 'next_action'] = f"Check reply or follow up after {followup_date}"
    
    df.to_csv(APPLICATIONS_CSV, index=False)
    console.print(f"[bold green]✓ Updated application {app_id} in applications.csv (Follow-up due: {followup_date})[/bold green]")
    
    # Re-export kanban
    from manage import export_kanban
    export_kanban()

def check_recent_messages(query="subject:Yashvi Bansal OR subject:Madison"):
    service = get_gmail_service()
    if not service:
        show_auth_instructions()
        return

    results = service.users().messages().list(userId='me', q=query, maxResults=10).execute()
    messages = results.get('messages', [])

    if not messages:
        console.print("[yellow]No recent outreach messages found matching query.[/yellow]")
        return

    t = Table(title="📬 Recent Gmail Outreach Messages & Threads", header_style="bold cyan")
    t.add_column("Message ID", style="dim")
    t.add_column("Snippet")

    for msg in messages:
        m = service.users().messages().get(userId='me', id=msg['id'], format='minimal').execute()
        t.add_row(msg['id'], m.get('snippet', ''))

    console.print(t)

def show_auth_instructions():
    help_text = """
[bold yellow]⚠️ Gmail API Authorization Required[/bold yellow]

To enable Gmail drafting and sending:

1. Download OAuth credentials from Google Cloud Console as:
   [bold]tracker/oauth_credentials.json[/bold]
2. Run: [bold]python3 tracker/authenticate_gmail.py[/bold]
"""
    console.print(Panel(help_text, title="Gmail Setup", border_style="yellow"))

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Gmail Outreach Engine CLI (3-Entity Pipeline)")
    parser.add_argument("--to", type=str, default="founder@target.com", help="Recipient Email")
    parser.add_argument("--name", type=str, default="Founder / Hiring Lead", help="Recipient Name")
    parser.add_argument("--company", type=str, default="Target AI Company", help="Company Name")
    parser.add_argument("--role", type=str, default="AI Product Manager", help="Target Role")
    parser.add_argument("--hook", type=str, default="", help="Custom leverage hook")
    parser.add_argument("--app-id", type=str, default="APP_002", help="Application ID")
    parser.add_argument("--draft", action="store_true", help="Create draft in Gmail")
    parser.add_argument("--send", action="store_true", help="Send email via Gmail API")
    parser.add_argument("--preview", action="store_true", help="Preview email in terminal")
    parser.add_argument("--check-replies", action="store_true", help="Check recent Gmail threads")
    args = parser.parse_args()

    if args.check_replies:
        check_recent_messages()
        sys.exit(0)

    subject, body = render_outreach_body(args.name, args.company, args.role, args.hook)

    if args.preview or (not args.draft and not args.send):
        console.print(Panel(f"[bold]To:[/bold] {args.to}\n[bold]Subject:[/bold] {subject}\n\n{body}", title="✉️ Email Preview", border_style="cyan"))

    if args.draft:
        draft_id = create_draft(args.to, subject, body)
        if draft_id:
            update_application_after_outreach(args.app_id, subject, args.name, args.to, is_sent=False)
            
    if args.send:
        sent_id = send_email(args.to, subject, body)
        if sent_id:
            update_application_after_outreach(args.app_id, subject, args.name, args.to, is_sent=True)
