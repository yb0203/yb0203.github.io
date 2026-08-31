#!/usr/bin/env python3
"""
Pillar 4: Google Sheets Bi-directional Sync Module with Visual KPI Dashboard & SLA Formatting
Syncs Applications, Companies, Contacts, and renders a live visual 'Dashboard & KPIs' tab.
"""

import os
import sys
import argparse
from datetime import datetime
import pandas as pd
from rich.console import Console
from rich.panel import Panel

TRACKER_DIR = os.path.dirname(os.path.abspath(__file__))
SERVICE_ACCOUNT_FILE = os.path.join(TRACKER_DIR, "credentials.json")
OAUTH_CLIENT_FILE = os.path.join(TRACKER_DIR, "oauth_credentials.json")
TOKEN_FILE = os.path.join(TRACKER_DIR, "token.json")
CONFIG_FILE = os.path.join(TRACKER_DIR, "sheets_config.json")

console = Console()

def get_gspread_client():
    import gspread
    import google.auth
    from google.auth.transport.requests import Request
    from google.oauth2.service_account import Credentials as ServiceAccountCredentials
    from google_auth_oauthlib.flow import InstalledAppFlow
    from google.oauth2.credentials import Credentials as UserCredentials

    scopes = [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive"
    ]

    # 1. Try gcloud Application Default Credentials (ADC)
    try:
        creds, project = google.auth.default(scopes=scopes)
        if not creds.valid:
            creds.refresh(Request())
        if creds.valid:
            return gspread.authorize(creds), "adc"
    except Exception:
        pass

    # 2. Try Service Account
    if os.path.exists(SERVICE_ACCOUNT_FILE):
        creds = ServiceAccountCredentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=scopes)
        return gspread.authorize(creds), "service_account"

    # 3. Try OAuth User Credentials
    user_creds = None
    if os.path.exists(TOKEN_FILE):
        user_creds = UserCredentials.from_authorized_user_file(TOKEN_FILE, scopes)

    if not user_creds or not user_creds.valid:
        if user_creds and user_creds.expired and user_creds.refresh_token:
            user_creds.refresh(Request())
        elif os.path.exists(OAUTH_CLIENT_FILE):
            flow = InstalledAppFlow.from_client_secrets_file(OAUTH_CLIENT_FILE, scopes)
            user_creds = flow.run_local_server(port=0)
            with open(TOKEN_FILE, 'w') as token:
                token.write(user_creds.to_json())
        else:
            return None, "no_credentials"

    return gspread.authorize(user_creds), "oauth"

def get_or_create_config():
    import json
    if os.path.exists(CONFIG_FILE):
        with open(CONFIG_FILE, 'r') as f:
            return json.load(f)
    return {}

def save_config(config):
    import json
    with open(CONFIG_FILE, 'w') as f:
        json.dump(config, f, indent=2)

def build_dashboard_tab(sh, apps_df, comps_df):
    """Creates a visual KPI summary tab with live formulas and styled metric cards."""
    dash_title = "📊 Dashboard & KPIs"
    try:
        worksheet = sh.worksheet(dash_title)
    except Exception:
        worksheet = sh.add_worksheet(title=dash_title, rows=30, cols=10, index=0)
        
    worksheet.clear()
    
    total_apps = len(apps_df)
    total_comps = len(comps_df)
    
    wishlist_cnt = len(apps_df[apps_df['stage'] == 'Wishlist']) if not apps_df.empty else 0
    outreach_cnt = len(apps_df[apps_df['stage'] == 'Outreach_Sent']) if not apps_df.empty else 0
    interview_cnt = len(apps_df[apps_df['stage'].isin(['Screening', 'Interviewing'])]) if not apps_df.empty else 0
    offer_cnt = len(apps_df[apps_df['stage'] == 'Offer']) if not apps_df.empty else 0
    
    ai_pm_cnt = len(apps_df[apps_df['track'] == 'AI PM']) if not apps_df.empty else 0
    fo_cnt = len(apps_df[apps_df['track'] == "Founder's Office"]) if not apps_df.empty else 0
    tech_pm_cnt = len(apps_df[apps_df['track'] == 'Technical PM']) if not apps_df.empty else 0
    
    now_str = datetime.now().strftime("%Y-%m-%d %H:%M")
    
    dashboard_data = [
        ["🚀 YASHVI BANSAL — JOB SEARCH PIPELINE & METRICS DASHBOARD", "", "", "", ""],
        [f"Last Synced: {now_str}", "", "", "", ""],
        ["", "", "", "", ""],
        ["🎯 EXECUTIVE PIPELINE METRICS", "", "💼 TARGET TRACKS BREAKDOWN", "", ""],
        ["Metric", "Count", "Track Category", "Count", "Share"],
        ["Total Opportunities", total_apps, "Applied AI / AI PM", ai_pm_cnt, f"{ai_pm_cnt/max(1,total_apps):.0%}"],
        ["Target Companies", total_comps, "Founder's Office & Strategy", fo_cnt, f"{fo_cnt/max(1,total_apps):.0%}"],
        ["Wishlist (Needs Pitch)", wishlist_cnt, "Technical / Platform PM", tech_pm_cnt, f"{tech_pm_cnt/max(1,total_apps):.0%}"],
        ["Outreach In-Flight", outreach_cnt, "", "", ""],
        ["Active Interviews", interview_cnt, "", "", ""],
        ["Offers", offer_cnt, "", "", ""],
        ["", "", "", "", ""],
        ["📌 PIPELINE CONVERSION FUNNEL", "", "", "", ""],
        ["Funnel Stage", "Volume", "Conversion %", "", ""],
        ["1. Sourced & Wishlist", wishlist_cnt, "100%", "", ""],
        ["2. Outreach Sent", outreach_cnt, f"{outreach_cnt/max(1,total_apps):.1%}", "", ""],
        ["3. Interviewing", interview_cnt, f"{interview_cnt/max(1,outreach_cnt):.1%}" if outreach_cnt > 0 else "0%", "", ""],
        ["4. Offers", offer_cnt, f"{offer_cnt/max(1,interview_cnt):.1%}" if interview_cnt > 0 else "0%", "", ""]
    ]
    
    worksheet.update(values=dashboard_data)
    
    # Format Title Header
    worksheet.format("A1:E1", {
        "backgroundColor": {"red": 0.1, "green": 0.15, "blue": 0.25},
        "textFormat": {"bold": True, "fontSize": 12, "foregroundColor": {"red": 1.0, "green": 1.0, "blue": 1.0}}
    })
    # Format Section Headers
    worksheet.format("A4:E4", {
        "backgroundColor": {"red": 0.2, "green": 0.3, "blue": 0.45},
        "textFormat": {"bold": True, "foregroundColor": {"red": 1.0, "green": 1.0, "blue": 1.0}}
    })
    worksheet.format("A13:C13", {
        "backgroundColor": {"red": 0.2, "green": 0.3, "blue": 0.45},
        "textFormat": {"bold": True, "foregroundColor": {"red": 1.0, "green": 1.0, "blue": 1.0}}
    })

def push_to_sheets(spreadsheet_id_or_url=None):
    client, auth_type = get_gspread_client()
    if not client:
        show_credential_help()
        return

    config = get_or_create_config()
    target = spreadsheet_id_or_url or config.get("spreadsheet_url") or config.get("spreadsheet_id")

    if not target:
        console.print("[yellow]No target spreadsheet found. Creating a new spreadsheet...[/yellow]")
        sh = client.create("Yashvi Bansal - Job Search Pipeline (Live Sync)")
        config["spreadsheet_id"] = sh.id
        config["spreadsheet_url"] = sh.url
        save_config(config)
        console.print(f"[bold green]✓ Created new spreadsheet:[/bold green] {sh.url}")
    else:
        try:
            if "docs.google.com" in str(target):
                sh = client.open_by_url(target)
            else:
                sh = client.open_by_key(target)
            config["spreadsheet_url"] = sh.url
            save_config(config)
        except Exception as e:
            console.print(f"[bold red]Error opening spreadsheet:[/bold red] {e}")
            return

    apps_df = pd.read_csv(os.path.join(TRACKER_DIR, "applications.csv")).fillna("") if os.path.exists(os.path.join(TRACKER_DIR, "applications.csv")) else pd.DataFrame()
    comps_df = pd.read_csv(os.path.join(TRACKER_DIR, "companies.csv")).fillna("") if os.path.exists(os.path.join(TRACKER_DIR, "companies.csv")) else pd.DataFrame()
    contacts_df = pd.read_csv(os.path.join(TRACKER_DIR, "contacts.csv")).fillna("") if os.path.exists(os.path.join(TRACKER_DIR, "contacts.csv")) else pd.DataFrame()

    csv_mapping = {
        "Applications": (apps_df, {"red": 0.15, "green": 0.25, "blue": 0.35}),
        "Companies": (comps_df, {"red": 0.15, "green": 0.3, "blue": 0.25}),
        "Contacts": (contacts_df, {"red": 0.3, "green": 0.2, "blue": 0.3})
    }

    for sheet_name, (df, header_color) in csv_mapping.items():
        try:
            worksheet = sh.worksheet(sheet_name)
        except Exception:
            worksheet = sh.add_worksheet(title=sheet_name, rows=len(df)+50, cols=max(15, len(df.columns)+2))
            
        worksheet.clear()
        if not df.empty:
            values = [df.columns.values.tolist()] + df.values.tolist()
            worksheet.update(values=values)
            worksheet.format("A1:Z1", {
                "backgroundColor": header_color,
                "textFormat": {"bold": True, "foregroundColor": {"red": 1.0, "green": 1.0, "blue": 1.0}}
            })
        console.print(f"[bold green]✓ Synced {sheet_name}[/bold green] ({len(df)} rows)")

    # Build KPI Dashboard Tab
    build_dashboard_tab(sh, apps_df, comps_df)
    console.print(f"[bold green]✓ Updated 📊 Dashboard & KPIs tab[/bold green]")

    console.print(f"\n[bold cyan]🎉 Sync Complete! Live Sheet URL:[/bold cyan] {sh.url}")

def pull_from_sheets(spreadsheet_id_or_url=None):
    client, auth_type = get_gspread_client()
    if not client:
        show_credential_help()
        return

    config = get_or_create_config()
    target = spreadsheet_id_or_url or config.get("spreadsheet_url") or config.get("spreadsheet_id")

    if not target:
        console.print("[bold red]No spreadsheet URL configured. Run push first or supply URL.[/bold red]")
        return

    sh = client.open_by_url(target) if "docs.google.com" in str(target) else client.open_by_key(target)

    csv_mapping = {
        "Applications": os.path.join(TRACKER_DIR, "applications.csv"),
        "Companies": os.path.join(TRACKER_DIR, "companies.csv"),
        "Contacts": os.path.join(TRACKER_DIR, "contacts.csv")
    }

    for sheet_name, csv_path in csv_mapping.items():
        try:
            worksheet = sh.worksheet(sheet_name)
            records = worksheet.get_all_records()
            if records:
                df = pd.DataFrame(records)
                df.to_csv(csv_path, index=False)
                console.print(f"[bold green]✓ Pulled {sheet_name}[/bold green] -> {csv_path}")
        except Exception as e:
            console.print(f"[yellow]Skipping {sheet_name}: {e}[/yellow]")

    from manage import export_kanban
    export_kanban()

def show_credential_help():
    console.print("[bold red]Google Authentication required. Run 'gcloud auth login --update-adc --enable-gdrive-access'[/bold red]")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Sync local CSV tracker with Google Sheets & KPI Dashboard")
    parser.add_argument("--push", action="store_true", help="Push local CSV data to Google Sheets")
    parser.add_argument("--pull", action="store_true", help="Pull latest rows from Google Sheets to local CSV")
    parser.add_argument("--url", type=str, help="Google Spreadsheet URL or ID")
    args = parser.parse_args()

    if args.pull:
        pull_from_sheets(args.url)
    else:
        push_to_sheets(args.url)
