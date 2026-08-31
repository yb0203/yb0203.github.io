#!/usr/bin/env python3
"""
Gmail & Google Sheets OAuth Interactive Authenticator
Initiates the local browser OAuth flow to grant full Gmail and Google Sheets permissions.
"""

import os
import sys
from google_auth_oauthlib.flow import InstalledAppFlow
from rich.console import Console
from rich.panel import Panel

TRACKER_DIR = os.path.dirname(os.path.abspath(__file__))
OAUTH_CLIENT_FILE = os.path.join(TRACKER_DIR, "oauth_credentials.json")
GMAIL_TOKEN_FILE = os.path.join(TRACKER_DIR, "gmail_token.json")
SHEETS_TOKEN_FILE = os.path.join(TRACKER_DIR, "token.json")

console = Console()

SCOPES = [
    "https://www.googleapis.com/auth/gmail.compose",
    "https://www.googleapis.com/auth/gmail.send",
    "https://www.googleapis.com/auth/gmail.readonly",
    "https://www.googleapis.com/auth/gmail.modify",
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive"
]

def authenticate():
    if not os.path.exists(OAUTH_CLIENT_FILE):
        console.print(Panel(f"""
[bold red]Missing OAuth Credentials File[/bold red]

Please place your OAuth 2.0 Client ID credentials JSON at:
[bold yellow]{OAUTH_CLIENT_FILE}[/bold yellow]

[cyan]How to generate this in Google Cloud Console:[/cyan]
1. Go to https://console.cloud.google.com/apis/credentials
2. Click '+ CREATE CREDENTIALS' -> 'OAuth client ID'
3. Application type: 'Desktop App' -> Name: 'Job Prep Outreach'
4. Download the JSON and move/rename it to 'tracker/oauth_credentials.json'.
""", title="OAuth Setup Guide", border_style="red"))
        return False

    console.print("[bold cyan]🌐 Opening browser to authorize Gmail and Google Sheets access...[/bold cyan]")
    flow = InstalledAppFlow.from_client_secrets_file(OAUTH_CLIENT_FILE, SCOPES)
    creds = flow.run_local_server(port=0)

    # Save to both token files
    with open(GMAIL_TOKEN_FILE, 'w') as f:
        f.write(creds.to_json())
    with open(SHEETS_TOKEN_FILE, 'w') as f:
        f.write(creds.to_json())

    console.print(Panel.fit(f"""
[bold green]✓ Authentication Successful![/bold green]

Tokens saved to:
• [bold]{GMAIL_TOKEN_FILE}[/bold] (Gmail Drafts, Sending & Thread Monitoring)
• [bold]{SHEETS_TOKEN_FILE}[/bold] (Google Sheets Push/Pull Sync)
""", border_style="green"))
    return True

if __name__ == "__main__":
    authenticate()
