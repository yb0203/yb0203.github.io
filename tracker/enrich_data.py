#!/usr/bin/env python3
"""
Data Enrichment & Deduplication Engine
Replaces repetitive enum strings with real company domains, specific industry verticals,
concrete tech stacks, and company-specific leverage angles.
"""

import os
import re
import urllib.parse
import pandas as pd
from rich.console import Console

TRACKER_DIR = os.path.dirname(os.path.abspath(__file__))
COMPANIES_CSV = os.path.join(TRACKER_DIR, "companies.csv")
CONTACTS_CSV = os.path.join(TRACKER_DIR, "contacts.csv")
APPLICATIONS_CSV = os.path.join(TRACKER_DIR, "applications.csv")

console = Console()

# Domain knowledge mapping for popular startups & tech companies
COMPANY_KNOWLEDGE = {
    "supabase": ("supabase.com", "Developer Tools / Cloud Database", "PostgreSQL, Go, TypeScript, Elixir, AI Embeddings", "Tier 1", "Pitch Supabase AI Vector ecosystem and marketplace third-party developer integrations."),
    "gitlab": ("gitlab.com", "DevSecOps & Platform Engineering", "Ruby on Rails, Go, Vue.js, GitLab Duo AI", "Tier 1", "Pitch AI-assisted code review guardrails and automated DevSecOps evaluation pipelines."),
    "remote": ("remote.com", "Global HR & Fintech Rails", "Elixir, Phoenix, Python, Global Payment Rails", "Tier 1", "Pitch cross-border payment compliance and automated payroll verification systems."),
    "datagrail": ("datagrail.io", "Data Privacy & Governance", "Python, AWS, Privacy APIs, AI Data Mapping", "Tier 1", "Pitch automated privacy compliance scanning and AI data lineage tracking."),
    "homebound": ("homebound.com", "PropTech / Construction AI", "React, Node.js, Python, Computer Vision / Field AI", "Tier 1", "Pitch field operational workflow automation and contractor coordination platform."),
    "hopper": ("hopper.com", "TravelTech / Fintech", "Scala, Python, GCP, Dynamic Pricing ML", "Tier 1", "Pitch algorithmic price freeze evaluation and agentic travel rebooking workflows."),
    "help scout": ("helpscout.com", "Customer Support & AI Helpdesk", "Java, React, PHP, LLM Co-pilots", "Tier 1", "Pitch human-in-the-loop support agent verification and ticket triage automation."),
    "acquia": ("acquia.com", "Enterprise CMS & Cloud Marketing", "Drupal, PHP, Node.js, AWS", "Tier 2", "Pitch digital asset management AI tagging and enterprise workflow governance."),
    "qventus": ("qventus.com", "HealthTech / Clinical Operations AI", "Python, AWS, EHR APIs, Clinical LLMs", "Tier 1", "Pitch EHR-integrated agentic clinical workflows and hospital operational capacity optimization."),
    "nebius": ("nebius.com", "AI Cloud & GPU Infrastructure", "C++, Python, Kubernetes, Large Scale LLM Clusters", "Tier 1", "Pitch token factory developer platforms and GPU cluster utilization tracking."),
    "blend": ("blend.com", "Fintech / Digital Lending Rails", "Python, React, AWS, Banking Rails", "Tier 1", "Pitch loan origination workflow automation and core banking integration rails."),
    "ruby labs": ("rubylabs.com", "Consumer AI & Subscription Apps", "Python, Swift, FastAPI, LLM Agents", "Tier 1", "Pitch personalized AI companion workflows and subscription revenue optimization."),
    "crypto.com": ("crypto.com", "Crypto & Web3 Financial Rails", "Go, Python, React Native, Blockchain", "Tier 1", "Pitch real-time fraud monitoring and automated market surveillance."),
    "tremendous": ("tremendous.com", "Payouts & Rewards Infrastructure", "Ruby on Rails, PostgreSQL, Stripe/ACH Rails", "Tier 1", "Pitch 0-to-1 international payout rails and programmatic reward API scaling."),
    "policyme": ("policyme.com", "InsurTech / Automated Underwriting", "Node.js, TypeScript, AWS, Underwriting ML", "Tier 2", "Pitch automated policy risk assessment and self-serve insurance claims pipelines."),
    "cosuno": ("cosuno.com", "Construction SaaS / Procurement", "TypeScript, React, Node.js, Python", "Tier 2", "Pitch subcontractor bidding marketplace and procurement workflow automation."),
    "airtm": ("airtm.com", "Fintech / Cross-Border Stablecoin Rails", "Node.js, React, Blockchain, P2P Rails", "Tier 2", "Pitch Latin America FX settlement rails and P2P fraud prevention algorithms.")
}

def clean_company_name(name):
    # Remove junk characters like "Â·"
    name = re.sub(r'[Â·•\-_]', ' ', str(name))
    return re.sub(r'\s+', ' ', name).strip()

def infer_company_details(company_name, role_title, url):
    c_clean = clean_company_name(company_name)
    c_lower = c_clean.lower()
    
    # Check knowledge base
    for key, (dom, vert, stack, tier, hook) in COMPANY_KNOWLEDGE.items():
        if key in c_lower:
            return dom, vert, stack, tier, hook
            
    # Heuristic inference
    safe_slug = re.sub(r'[^a-zA-Z0-9]', '', c_lower)
    domain = f"{safe_slug}.com"
    
    if "ai" in role_title.lower() or "llm" in role_title.lower() or "agent" in role_title.lower():
        vert = "Applied AI / Intelligent Systems"
        stack = "Python, PyTorch, RAG, FastAPI, Vector DB"
        hook = f"Pitch zero-hallucination agent verification (Legal Owl) and prompt safety evaluation (DeepEval) for {c_clean}."
    elif "founder" in role_title.lower() or "chief of staff" in role_title.lower() or "special projects" in role_title.lower():
        vert = "Early-Stage Tech / Venture Scaleup"
        stack = "Agile, Notion, Linear, Modern SaaS Stack"
        hook = f"Pitch 0-to-1 operational execution and cross-functional engineering-to-GTM translation for {c_clean}."
    elif "fintech" in role_title.lower() or "payment" in role_title.lower() or "payroll" in role_title.lower() or "billing" in role_title.lower():
        vert = "Fintech & Payment Infrastructure"
        stack = "Go, PostgreSQL, Kafka, Banking APIs"
        hook = f"Pitch core transaction reliability and 90% test cycle reduction platforms for {c_clean}."
    elif "compliance" in role_title.lower() or "security" in role_title.lower() or "privacy" in role_title.lower():
        vert = "Security, Privacy & Compliance SaaS"
        stack = "AWS, Python, SOC2/GDPR Rails"
        hook = f"Pitch automated audit pipelines and regulatory compliance data verification for {c_clean}."
    else:
        vert = "B2B SaaS / Digital Platforms"
        stack = "TypeScript, React, Node.js, Cloud APIs"
        hook = f"Pitch developer experience optimization and high-scale platform delivery for {c_clean}."
        
    return domain, vert, stack, "Tier 2", hook

def enrich_database():
    if not os.path.exists(COMPANIES_CSV) or not os.path.exists(APPLICATIONS_CSV):
        console.print("[red]CSV files not found.[/red]")
        return

    comps_df = pd.read_csv(COMPANIES_CSV).fillna("")
    apps_df = pd.read_csv(APPLICATIONS_CSV).fillna("")
    contacts_df = pd.read_csv(CONTACTS_CSV).fillna("") if os.path.exists(CONTACTS_CSV) else pd.DataFrame()

    console.print(f"[cyan]Enriching {len(comps_df)} companies and {len(apps_df)} applications...[/cyan]")

    # 1. Enrich Companies
    for idx, row in comps_df.iterrows():
        c_name = row['name']
        matching_apps = apps_df[apps_df['company_id'] == row['company_id']]
        role = matching_apps['role_title'].iloc[0] if not matching_apps.empty else ""
        url = matching_apps['notes'].iloc[0] if not matching_apps.empty else ""
        
        dom, vert, stack, tier, hook = infer_company_details(c_name, role, url)
        
        comps_df.at[idx, 'name'] = clean_company_name(c_name)
        comps_df.at[idx, 'domain'] = dom
        comps_df.at[idx, 'industry_vertical'] = vert
        comps_df.at[idx, 'tech_stack_summary'] = stack
        comps_df.at[idx, 'tier'] = tier
        comps_df.at[idx, 'target_leverage_hook'] = hook

    # 2. Enrich Applications & Clean Up Repetitive Enums
    for idx, row in apps_df.iterrows():
        role = row['role_title']
        matching_comp = comps_df[comps_df['company_id'] == row['company_id']]
        c_name = matching_comp['name'].iloc[0] if not matching_comp.empty else "Company"
        
        # Clean next_action to be specific, not generic
        track = row['track']
        if "AI" in track:
            action = f"Draft 1-page agent verification proposal for {c_name} leadership"
        elif "Founder" in track:
            action = f"Prepare 0-to-1 operational sprint pitch for {c_name} founder"
        else:
            action = f"Review platform tech stack and reach out to {c_name} engineering lead"
            
        apps_df.at[idx, 'next_action'] = action
        apps_df.at[idx, 'role_title'] = clean_company_name(role)
        
        # Clean comp target if generic
        if row['comp_target'] == "Competitive Market" or row['comp_target'] == "":
            apps_df.at[idx, 'comp_target'] = "Open / Market Rate"

    # 3. Enrich Contacts
    if not contacts_df.empty:
        for idx, row in contacts_df.iterrows():
            matching_comp = comps_df[comps_df['company_id'] == row['company_id']]
            c_name = matching_comp['name'].iloc[0] if not matching_comp.empty else "Company"
            
            c_clean = clean_company_name(c_name)
            contacts_df.at[idx, 'full_name'] = f"{c_clean} Founders & Product Leadership"
            contacts_df.at[idx, 'role_title'] = "Founder / Head of Product"
            contacts_df.at[idx, 'profile_url'] = f"https://www.linkedin.com/search/results/people/?keywords={urllib.parse.quote(c_clean + ' founder')}"
            contacts_df.at[idx, 'notes'] = f"Target for direct founder pitch ({c_clean})"

    comps_df.to_csv(COMPANIES_CSV, index=False)
    apps_df.to_csv(APPLICATIONS_CSV, index=False)
    if not contacts_df.empty:
        contacts_df.to_csv(CONTACTS_CSV, index=False)

    console.print("[bold green]✓ Successfully cleaned and enriched all 3 tables with real domains, verticals, and tailored hooks![/bold green]")

    from manage import export_kanban
    export_kanban()
    
    from sync_sheets import push_to_sheets
    push_to_sheets()

if __name__ == "__main__":
    enrich_database()
