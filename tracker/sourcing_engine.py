#!/usr/bin/env python3
"""
Multi-Feed Automated Job Sourcing Engine (100% Free / Zero-SerpAPI)
Prioritizes:
- Remote-First & India-based/Indian Founder Startups
- Small Teams, Early/Mid-Tier Orgs, & Bootstrapped/Series A-B Scaleups
- Contractual, Fractional, Advisory, & Full-Time AI PM / Founder's Office engagements
"""

import os
import sys
import json
import argparse
from datetime import datetime
import requests
import pandas as pd
from rich.console import Console
from rich.table import Table
from rich.panel import Panel

# Import internal modules
from scorer import scorer
from founder_discovery import search_founder_linkedin

TRACKER_DIR = os.path.dirname(os.path.abspath(__file__))
COMPANIES_CSV = os.path.join(TRACKER_DIR, "companies.csv")
CONTACTS_CSV = os.path.join(TRACKER_DIR, "contacts.csv")
APPLICATIONS_CSV = os.path.join(TRACKER_DIR, "applications.csv")

console = Console()

def load_existing():
    comps = pd.read_csv(COMPANIES_CSV).fillna("") if os.path.exists(COMPANIES_CSV) else pd.DataFrame()
    apps = pd.read_csv(APPLICATIONS_CSV).fillna("") if os.path.exists(APPLICATIONS_CSV) else pd.DataFrame()
    contacts = pd.read_csv(CONTACTS_CSV).fillna("") if os.path.exists(CONTACTS_CSV) else pd.DataFrame()
    return comps, contacts, apps

def fetch_remotive():
    url = "https://remotive.com/api/remote-jobs?category=product&limit=60"
    jobs = []
    try:
        r = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=12)
        if r.status_code == 200:
            for item in r.json().get('jobs', []):
                title = item.get('title', '').strip()
                company = item.get('company_name', '').strip()
                desc = item.get('description', '')
                tags = [str(t) for t in item.get('tags', [])]
                loc = item.get('candidate_required_location', 'Remote')
                job_type = item.get('job_type', 'full_time')
                if 'contract' in job_type.lower():
                    tags.append('contract')
                
                score_res = scorer.score_job(title, desc, tags, location=loc)
                if score_res.fit_score >= 60:
                    jobs.append({
                        "company_name": company,
                        "role_title": title,
                        "url": item.get('url', ''),
                        "location": loc,
                        "salary": item.get('salary', 'Competitive Market'),
                        "source": "Remotive (Remote)",
                        "score_result": score_res
                    })
    except Exception as e:
        console.print(f"[yellow]Remotive fetch warning: {e}[/yellow]")
    return jobs

def fetch_jobicy():
    endpoints = [
        ("https://jobicy.com/api/v2/remote-jobs?count=50&tag=product", "Jobicy (Product)"),
        ("https://jobicy.com/api/v2/remote-jobs?count=50&tag=ai", "Jobicy (AI)"),
        ("https://jobicy.com/api/v2/remote-jobs?count=50&tag=contract", "Jobicy (Contract)")
    ]
    jobs = []
    for url, src in endpoints:
        try:
            r = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=12)
            if r.status_code == 200:
                for item in r.json().get('jobs', []):
                    title = item.get('jobTitle', '').strip()
                    company = item.get('companyName', '').strip()
                    desc = item.get('jobDescription', '')
                    loc = item.get('jobGeo', 'Remote')
                    job_type = item.get('jobType', '')
                    tags = [str(t) for t in job_type] if isinstance(job_type, list) else [str(job_type)] if job_type else []
                    
                    score_res = scorer.score_job(title, desc, tags, location=loc)
                    if score_res.fit_score >= 60:
                        jobs.append({
                            "company_name": company,
                            "role_title": title,
                            "url": item.get('url', ''),
                            "location": loc,
                            "salary": item.get('annualSalaryMin', '') or 'Competitive Market',
                            "source": src,
                            "score_result": score_res
                        })
        except Exception as e:
            console.print(f"[yellow]{src} warning: {e}[/yellow]")
    return jobs

def fetch_remoteok():
    endpoints = [
        ("https://remoteok.com/api?tag=product", "RemoteOK (Product)"),
        ("https://remoteok.com/api?tag=contract", "RemoteOK (Contract)"),
        ("https://remoteok.com/api?tag=ai", "RemoteOK (AI)")
    ]
    jobs = []
    for url, src in endpoints:
        try:
            r = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=12)
            if r.status_code == 200:
                data = r.json()
                for item in data[1:]:
                    title = item.get('position', '').strip()
                    company = item.get('company', '').strip()
                    tags = [str(t) for t in item.get('tags', [])]
                    desc = item.get('description', '')
                    loc = item.get('location', 'Remote')
                    
                    if title and company:
                        score_res = scorer.score_job(title, desc, tags, location=loc)
                        if score_res.fit_score >= 60:
                            jobs.append({
                                "company_name": company,
                                "role_title": title,
                                "url": f"https://remoteok.com/remote-jobs/{item.get('id', '')}",
                                "location": loc,
                                "salary": str(item.get('salary', 'Competitive Market')),
                                "source": src,
                                "score_result": score_res
                            })
        except Exception as e:
            console.print(f"[yellow]{src} warning: {e}[/yellow]")
    return jobs

def ingest_jobs(jobs_to_ingest, auto_sync=True, discover_founders=True):
    comps, contacts, apps = load_existing()
    
    company_map = {}
    if not comps.empty and 'name' in comps.columns and 'company_id' in comps.columns:
        for _, row in comps.iterrows():
            if str(row['name']).strip():
                company_map[str(row['name']).lower()] = str(row['company_id'])
                
    existing_app_keys = set((apps['company_id'] + "_" + apps['role_title']).str.lower()) if not apps.empty and 'company_id' in apps.columns and 'role_title' in apps.columns else set()
    
    new_comps = []
    new_contacts = []
    new_apps = []
    
    comp_counter = len(comps) + 1
    app_counter = len(apps) + 1
    contact_counter = len(contacts) + 1
    
    today_str = datetime.now().strftime("%Y-%m-%d")
    
    for job in jobs_to_ingest:
        c_name = job['company_name']
        role = job['role_title']
        score_res = job['score_result']
        
        if not c_name or not role:
            continue
            
        c_name_lower = c_name.lower()
        
        # 1. Determine Company
        if c_name_lower in company_map:
            c_id = company_map[c_name_lower]
        else:
            c_id = f"COMP_{comp_counter:03d}"
            comp_counter += 1
            company_map[c_name_lower] = c_id
            
            from enrich_data import infer_company_details, clean_company_name
            c_clean = clean_company_name(c_name)
            dom, vert, stack, tier, hook = infer_company_details(c_clean, role, job.get('url', ''))
            
            new_comps.append({
                "company_id": c_id,
                "name": c_clean,
                "domain": dom,
                "tier": tier,
                "industry_vertical": vert,
                "hq_location": job.get('location', 'Remote / India'),
                "tech_stack_summary": stack,
                "target_leverage_hook": hook,
                "notes": f"Auto-sourced from {job['source']} on {today_str} (Score: {score_res.fit_score}/100)"
            })
            
        # Check duplicate application
        app_key = f"{c_id}_{role}".lower()
        if app_key in existing_app_keys:
            continue
            
        # 2. Assign Founder / Executive Contact
        contact_id = f"CONT_{contact_counter:03d}"
        contact_counter += 1
        
        import urllib.parse
        clean_company = c_name.replace(" ", "+")
        founder_linkedin_url = f"https://www.linkedin.com/search/results/people/?keywords={urllib.parse.quote(c_name + ' founder')}"
        
        new_contacts.append({
            "contact_id": contact_id,
            "company_id": c_id,
            "full_name": f"{c_name} Founders & Leadership",
            "role_title": "Founder / CEO / Head of Product",
            "channel": "LinkedIn / Email",
            "profile_url": founder_linkedin_url,
            "email": "",
            "phone": "",
            "status": "Active",
            "notes": f"Target for direct {score_res.track} outreach ({score_res.engagement_model})"
        })
            
        # 3. Create Application
        app_id = f"APP_{app_counter:03d}"
        app_counter += 1
        new_apps.append({
            "app_id": app_id,
            "company_id": c_id,
            "primary_contact_id": contact_id,
            "role_title": role,
            "track": score_res.track,
            "stage": "Wishlist",
            "priority": score_res.priority,
            "date_added": today_str,
            "last_contacted_date": "",
            "next_followup_due": "",
            "latest_interaction_type": f"Auto-Sourced ({score_res.fit_score}% Fit &bull; {score_res.engagement_model})",
            "interaction_history": f"[{today_str}] Ingested from {job['source']} - Fit: {score_res.fit_score}/100 ({score_res.priority}) - {score_res.engagement_model}",
            "next_action": f"Prepare {score_res.engagement_model} proposal / pitch from applications/outreach.md",
            "tailored_resume_path": "../resumes/pm_tailored.md",
            "pitch_artifact_path": "",
            "comp_target": str(job.get('salary', 'Competitive Market / Flexible Retainer')),
            "notes": f"Model: {score_res.engagement_model} | Score: {score_res.fit_score} | Highlights: {', '.join(score_res.reasons[:2])} | URL: {job.get('url', '')}"
        })
        existing_app_keys.add(app_key)
        
    if new_comps:
        comps = pd.concat([comps, pd.DataFrame(new_comps)], ignore_index=True) if not comps.empty else pd.DataFrame(new_comps)
        comps.to_csv(COMPANIES_CSV, index=False)
        
    if new_contacts:
        contacts = pd.concat([contacts, pd.DataFrame(new_contacts)], ignore_index=True) if not contacts.empty else pd.DataFrame(new_contacts)
        contacts.to_csv(CONTACTS_CSV, index=False)
        
    if new_apps:
        apps = pd.concat([apps, pd.DataFrame(new_apps)], ignore_index=True) if not apps.empty else pd.DataFrame(new_apps)
        apps.to_csv(APPLICATIONS_CSV, index=False)
        
    console.print(f"[bold green]✓ Ingested {len(new_apps)} qualified startup opportunities into tracker![/bold green]")
    
    # Re-export kanban
    from manage import export_kanban
    export_kanban()
    
    if auto_sync and len(new_apps) > 0:
        from sync_sheets import push_to_sheets
        push_to_sheets()

def run_sourcing(ingest=False, auto_sync=True, min_score=75):
    console.print(Panel.fit(
        "[bold cyan]🔍 Scanning Remote, Contract & Indian Founder Startup Feeds (Jobicy + RemoteOK + Remotive)...[/bold cyan]",
        border_style="cyan"
    ))
    
    all_jobs = []
    # 1. Jobicy (Product, AI, Contract)
    jobicy = fetch_jobicy()
    all_jobs.extend(jobicy)
    console.print(f"[cyan]• Jobicy multi-feed qualified:[/cyan] {len(jobicy)}")

    # 2. RemoteOK (Product, Contract, AI)
    remoteok = fetch_remoteok()
    all_jobs.extend(remoteok)
    console.print(f"[cyan]• RemoteOK multi-feed qualified:[/cyan] {len(remoteok)}")

    # 3. Remotive
    remotive = fetch_remotive()
    all_jobs.extend(remotive)
    console.print(f"[cyan]• Remotive API qualified:[/cyan] {len(remotive)}")
    
    # Filter by min_score and deduplicate
    unique_jobs = []
    seen = set()
    for j in all_jobs:
        k = (j['company_name'].lower(), j['role_title'].lower())
        if k not in seen and j['score_result'].fit_score >= min_score:
            seen.add(k)
            unique_jobs.append(j)
            
    # Sort by fit_score descending
    unique_jobs.sort(key=lambda x: x['score_result'].fit_score, reverse=True)
    
    if not unique_jobs:
        console.print("[yellow]No new jobs matched score threshold in this sweep.[/yellow]")
        return
        
    t = Table(title=f"🎯 Startup & Remote Opportunities (Ranked by Fit Score, {len(unique_jobs)} found)", header_style="bold magenta")
    t.add_column("Score", justify="right", style="bold green")
    t.add_column("Tier", style="bold yellow")
    t.add_column("Engagement Model", style="cyan")
    t.add_column("Company", style="bold")
    t.add_column("Role Title")
    t.add_column("Location")
    t.add_column("Source")

    for j in unique_jobs[:15]:
        res = j['score_result']
        color = "green" if res.priority == "P0" else "yellow"
        t.add_row(
            f"[{color}]{res.fit_score}[/{color}]",
            f"[{color}]{res.priority}[/{color}]",
            res.engagement_model[:18],
            j['company_name'],
            j['role_title'],
            j['location'][:18],
            j['source']
        )
        
    console.print(t)
    if len(unique_jobs) > 15:
        console.print(f"[dim]...and {len(unique_jobs) - 15} more roles.[/dim]")
    
    if ingest:
        ingest_jobs(unique_jobs, auto_sync=auto_sync)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Startup & Remote Sourcing Engine (Zero SerpAPI)")
    parser.add_argument("--fetch", action="store_true", help="Fetch and display qualified jobs without saving")
    parser.add_argument("--ingest", action="store_true", help="Fetch, qualify, and ingest matching jobs into tracker CSVs")
    parser.add_argument("--sync", action="store_true", help="Sync to Google Sheets after ingestion")
    parser.add_argument("--min-score", type=int, default=75, help="Minimum fit score (default: 75)")
    args = parser.parse_args()

    if args.ingest:
        run_sourcing(ingest=True, auto_sync=args.sync, min_score=args.min_score)
    else:
        run_sourcing(ingest=False, min_score=args.min_score)
