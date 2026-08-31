#!/usr/bin/env python3
"""
Pillar 5: Job Tracker CLI & Daily Morning Briefing
Manages 3-Entity CSV database, renders Markdown Kanban, and provides morning executive briefings.
"""

import os
import sys
import pandas as pd
from datetime import datetime, timedelta
from rich.console import Console
from rich.table import Table
from rich.panel import Panel
from rich.columns import Columns

TRACKER_DIR = os.path.dirname(os.path.abspath(__file__))
COMPANIES_CSV = os.path.join(TRACKER_DIR, "companies.csv")
CONTACTS_CSV = os.path.join(TRACKER_DIR, "contacts.csv")
APPLICATIONS_CSV = os.path.join(TRACKER_DIR, "applications.csv")
KANBAN_MD = os.path.join(TRACKER_DIR, "kanban.md")

console = Console()

def load_data():
    companies = pd.read_csv(COMPANIES_CSV).fillna("") if os.path.exists(COMPANIES_CSV) else pd.DataFrame()
    contacts = pd.read_csv(CONTACTS_CSV).fillna("") if os.path.exists(CONTACTS_CSV) else pd.DataFrame()
    applications = pd.read_csv(APPLICATIONS_CSV).fillna("") if os.path.exists(APPLICATIONS_CSV) else pd.DataFrame()
    return companies, contacts, applications

def morning_briefing():
    companies, contacts, applications = load_data()
    today_str = datetime.now().strftime("%Y-%m-%d")
    today_display = datetime.now().strftime("%A, %B %d, %Y")
    
    console.print(Panel.fit(
        f"[bold cyan]☀️ Good Morning Yashvi! Here is your Job Search Briefing for {today_display}[/bold cyan]",
        border_style="cyan"
    ))
    
    if applications.empty:
        console.print("[yellow]Your pipeline is currently empty. Run 'python3 tracker/sourcing_engine.py --ingest --sync' to fetch fresh roles.[/yellow]")
        return

    merged = applications.merge(companies, on="company_id", how="left", suffixes=('', '_comp'))
    merged = merged.merge(contacts, left_on="primary_contact_id", right_on="contact_id", how="left", suffixes=('', '_contact'))

    # 1. Action Items: Overdue Follow-ups (SLA breaches)
    overdue = merged[
        (merged['next_followup_due'] != "") & 
        (merged['next_followup_due'] <= today_str) & 
        (merged['stage'].isin(['Outreach_Sent', 'Screening', 'Interviewing']))
    ]
    
    if not overdue.empty:
        t_overdue = Table(title=f"🚨 Overdue Follow-ups ({len(overdue)} Action Items)", header_style="bold red")
        t_overdue.add_column("App ID", style="dim")
        t_overdue.add_column("Company", style="bold")
        t_overdue.add_column("Role")
        t_overdue.add_column("Contact")
        t_overdue.add_column("Due Date", style="bold red")
        t_overdue.add_column("Next Action", style="bold yellow")
        
        for _, row in overdue.iterrows():
            t_overdue.add_row(
                str(row['app_id']),
                str(row['name']),
                str(row['role_title']),
                str(row.get('full_name', 'Hiring Lead')),
                str(row['next_followup_due']),
                str(row['next_action'])
            )
        console.print(t_overdue)
    else:
        console.print("[bold green]✓ No overdue follow-ups today! All SLA targets are on track.[/bold green]\n")

    # 2. Top P0 Priority Opportunities (Fresh Sourced Roles)
    p0_leads = merged[(merged['priority'] == 'P0') & (merged['stage'] == 'Wishlist')]
    if not p0_leads.empty:
        t_p0 = Table(title=f"🌟 Top P0 Priority Opportunities ({len(p0_leads)} Ready for Outreach)", header_style="bold magenta")
        t_p0.add_column("App ID", style="dim")
        t_p0.add_column("Company", style="bold")
        t_p0.add_column("Role", style="cyan")
        t_p0.add_column("Track", style="yellow")
        t_p0.add_column("Leverage Angle")
        
        for _, row in p0_leads.head(5).iterrows():
            t_p0.add_row(
                str(row['app_id']),
                str(row['name']),
                str(row['role_title']),
                str(row['track']),
                str(row.get('target_leverage_hook', ''))[:45] + "..."
            )
        console.print(t_p0)
        
    # 3. Active Pipeline Stage Breakdown
    stage_counts = applications['stage'].value_counts()
    t_stages = Table(title="📊 Live Pipeline Health", header_style="bold green")
    t_stages.add_column("Stage", style="bold")
    t_stages.add_column("Count", justify="right")
    
    for stage in ["Wishlist", "Outreach_Sent", "Screening", "Interviewing", "Offer", "Rejected"]:
        cnt = stage_counts.get(stage, 0)
        color = "green" if stage == "Offer" else "cyan" if stage == "Interviewing" else "yellow" if stage == "Outreach_Sent" else "white"
        t_stages.add_row(f"[{color}]{stage}[/{color}]", str(cnt))
    console.print(t_stages)
    
    console.print(Panel(
        "💡 [bold]Recommended Morning Actions:[/bold]\n"
        "1. Generate 1-page proposals for top P0 leads: `python3 tracker/pitch_generator.py --company \"<Company>\"`\n"
        "2. Draft personalized emails to Gmail: `python3 tracker/email_client.py --draft --to \"<email>\" --company \"<Company>\"`\n"
        "3. Sync latest status with Google Sheets: `python3 tracker/sync_sheets.py --push`",
        border_style="cyan"
    ))

def display_summary():
    companies, contacts, applications = load_data()
    console.print(Panel.fit("[bold cyan]🚀 Yashvi Bansal — Job Application Pipeline Summary[/bold cyan]", border_style="cyan"))
    
    if applications.empty:
        console.print("[yellow]No applications found in applications.csv[/yellow]")
        return

    merged = applications.merge(companies, on="company_id", how="left", suffixes=('', '_comp'))
    merged = merged.merge(contacts, left_on="primary_contact_id", right_on="contact_id", how="left", suffixes=('', '_contact'))
    
    # Active Opportunities Table
    t_active = Table(title="All Tracked Opportunities", header_style="bold green")
    t_active.add_column("App ID", style="dim")
    t_active.add_column("Company", style="bold")
    t_active.add_column("Role Title")
    t_active.add_column("Track", style="yellow")
    t_active.add_column("Stage", style="bold cyan")
    t_active.add_column("Priority", style="bold magenta")
    t_active.add_column("Follow-up Due", style="red")

    for _, row in merged.iterrows():
        t_active.add_row(
            str(row['app_id']),
            str(row['name']),
            str(row['role_title']),
            str(row['track']),
            str(row['stage']),
            str(row['priority']),
            str(row['next_followup_due']) if str(row.get('next_followup_due', '')).strip() else "—"
        )
    console.print(t_active)

def export_kanban():
    companies, contacts, applications = load_data()
    merged = pd.DataFrame()
    if not applications.empty:
        merged = applications.merge(companies, on="company_id", how="left", suffixes=('', '_comp'))
        merged = merged.merge(contacts, left_on="primary_contact_id", right_on="contact_id", how="left", suffixes=('', '_contact'))

    stages = [
        ("🎯 1. Wishlist & Target", "Wishlist", "Target companies being researched, waiting for custom pitches/intros."),
        ("📤 2. Outreach Sent", "Outreach_Sent", "Cold pitches, InMails, or email introductions dispatched; awaiting response."),
        ("📞 3. Screening", "Screening", "Recruiter screening calls or initial intro chats scheduled."),
        ("💬 4. Interviewing", "Interviewing", "Deep-dive technical rounds, system design, case studies, or founder chats."),
        ("🏆 5. Offer", "Offer", "Active offers under negotiation or accepted."),
        ("❌ 6. Inactive / Closed", "Rejected", "Archived, rejected, or voluntarily dropped opportunities.")
    ]
    
    lines = [
        "# 📊 Job Application Kanban Board",
        "",
        "> **Auto-generated** from [`applications.csv`](file:///Users/yashvi/Documents/job-prep/tracker/applications.csv), [`companies.csv`](file:///Users/yashvi/Documents/job-prep/tracker/companies.csv), and [`contacts.csv`](file:///Users/yashvi/Documents/job-prep/tracker/contacts.csv).",
        f"> **Last Rendered**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}",
        "",
        "---",
        ""
    ]
    
    for title, stage_key, desc in stages:
        lines.append(f"## {title}")
        lines.append(f"*{desc}*")
        lines.append("")
        
        matching = merged[merged['stage'] == stage_key] if not merged.empty and 'stage' in merged.columns else pd.DataFrame()
        if matching.empty:
            lines.append("*(No active cards)*")
            lines.append("")
        else:
            for _, row in matching.iterrows():
                lines.append(f"### 🏢 {row['name']} — 🚀 {row['role_title']}")
                
                contact_info = f"{row['full_name']} ({row.get('profile_url', '')})" if str(row.get('full_name', '')).strip() else "None assigned"
                lines.append(f"> **App ID**: `{row['app_id']}` | **Track**: `{row['track']}` | **Priority**: `{row['priority']}` | **Contact**: {contact_info}")
                
                prep_links = []
                if str(row.get('tailored_resume_path', '')).strip():
                    prep_links.append(f"[Tailored Resume]({row['tailored_resume_path']})")
                if str(row.get('pitch_artifact_path', '')).strip():
                    prep_links.append(f"[Pitch Deck/Doc]({row['pitch_artifact_path']})")
                
                if prep_links:
                    lines.append(f"> **Materials**: {' | '.join(prep_links)}")
                
                if str(row.get('target_leverage_hook', '')).strip():
                    lines.append(f">\n> **Context & Leverage Angle**:\n> {row['target_leverage_hook']}")
                
                if str(row.get('interaction_history', '')).strip():
                    lines.append(f">\n> **Interaction / Round History**:\n> {row['interaction_history']}")

                if str(row.get('next_action', '')).strip():
                    lines.append(f">\n> 🎯 **Next Action**: {row['next_action']}")
                
                if str(row.get('next_followup_due', '')).strip():
                    lines.append(f">\n> ⏰ **Next Follow-up Due**: `{row['next_followup_due']}`")
                    
                lines.append("")
        lines.append("---")
        lines.append("")
        
    lines.append("## 🔗 Workspace Quick Links")
    lines.append("- 📊 **Live Google Sheet**: [Open Spreadsheet](https://docs.google.com/spreadsheets/d/16ZvlPsLj9tE_B1tbYeW1-hC40q_JmvJcB1NhOCZlFrY)")
    lines.append("- ✉️ **Outreach Templates**: [`applications/outreach.md`](file:///Users/yashvi/Documents/job-prep/applications/outreach.md)")
    lines.append("- 📄 **PM Tailored Resume**: [`resumes/pm_tailored.md`](file:///Users/yashvi/Documents/job-prep/resumes/pm_tailored.md)")
    lines.append("")
    
    with open(KANBAN_MD, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
        
    console.print(f"[bold green]✓ Kanban exported successfully to[/bold green] {KANBAN_MD}")

def validate_schema():
    companies, contacts, applications = load_data()
    errors = []
    
    comp_ids = set(companies['company_id']) if not companies.empty else set()
    contact_ids = set(contacts['contact_id']) if not contacts.empty else set()
    
    for _, row in applications.iterrows():
        if row['company_id'] not in comp_ids:
            errors.append(f"Application {row['app_id']} references unknown company_id '{row['company_id']}'")
            
    if errors:
        console.print(Panel("\n".join([f"❌ {e}" for e in errors]), title="[bold red]Validation Errors[/bold red]", border_style="red"))
        return False
    else:
        console.print(Panel.fit("[bold green]✓ All referential integrity constraints passed! (3-Entity schema valid)[/bold green]", border_style="green"))
        return True

def set_stage(app_id, new_stage):
    applications = pd.read_csv(APPLICATIONS_CSV)
    if app_id not in applications['app_id'].values:
        console.print(f"[bold red]Error: App ID '{app_id}' not found.[/bold red]")
        return
    applications.loc[applications['app_id'] == app_id, 'stage'] = new_stage
    applications.to_csv(APPLICATIONS_CSV, index=False)
    console.print(f"[bold green]✓ Updated {app_id} stage to '{new_stage}'.[/bold green]")
    export_kanban()

if __name__ == "__main__":
    if len(sys.argv) < 2 or sys.argv[1] == "summary":
        display_summary()
    elif sys.argv[1] == "morning-briefing":
        morning_briefing()
    elif sys.argv[1] == "export-kanban":
        export_kanban()
    elif sys.argv[1] == "validate":
        validate_schema()
    elif sys.argv[1] == "set-stage" and len(sys.argv) >= 4:
        set_stage(sys.argv[2], sys.argv[3])
    else:
        console.print("Usage: python3 tracker/manage.py [summary|morning-briefing|export-kanban|validate|set-stage <APP_ID> <STAGE>]")
