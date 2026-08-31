#!/usr/bin/env python3
"""
Pillar 3: Company Micro-Pitch & Teardown Proposal Generator
Generates high-converting 1-page strategy teardowns and product proposals for target companies.
Supports Full-time, Contractual, Fractional, and 30-Day Sprint engagements.
"""

import os
import sys
import argparse
from datetime import datetime
import pandas as pd
from rich.console import Console
from rich.panel import Panel

TRACKER_DIR = os.path.dirname(os.path.abspath(__file__))
PITCHES_DIR = os.path.join(TRACKER_DIR, "pitches")
APPLICATIONS_CSV = os.path.join(TRACKER_DIR, "applications.csv")

console = Console()

def generate_pitch(company_name: str, role_title: str, track: str = "AI PM", engagement_model: str = "Contractual / Full-time", app_id: str = None) -> str:
    os.makedirs(PITCHES_DIR, exist_ok=True)
    today_str = datetime.now().strftime("%B %Y")
    
    # Engagement Model Framing
    if "contract" in engagement_model.lower() or "fractional" in engagement_model.lower() or "sprint" in engagement_model.lower():
        engagement_section = f"""## ⚡ Flexible Engagement Model: High-Velocity Sprint / Fractional
I offer high-conviction flexibility tailored for early/mid-stage startups:
- **Option A: 2-Week Paid Trial / Proof of Concept Sprint**: Ship a scoped deliverable (e.g. AI agent evaluation suite, PRD & architecture spec, or platform integration) with zero hiring friction.
- **Option B: Fractional / Retainer PM (15–20 hrs/week)**: Direct fractional ownership of product sprints, PRDs, and DevEx platforms.
- **Option C: Contract-to-Hire / Full-time**: Seamless transition to full-time ownership as roadmap velocity accelerates."""
    else:
        engagement_section = f"""## ⚡ Engagement Model: High-Agency Full-Time / Contract-to-Hire
Ready to dive into full-time product ownership or a rapid contract-to-hire evaluation sprint with zero ramp-up lag."""

    # Track Tailoring
    if "AI" in track or "AI" in role_title:
        pillar_title = "Applied AI Architecture & Zero-Hallucination Guardrails"
        teardown_text = f"""### 1. The Bottleneck for {company_name}
For high-velocity AI startups, shipping agents that hallucinate or fail silently damages user trust and stalls enterprise pilots.

### 2. Concrete Primitives I Will Ship for {company_name}
- **Deterministic Citation Ledgers**: Coordinate-level source verification ($x, y, w, h$) guaranteeing zero-hallucination agent responses (proven in **Legal Owl**).
- **Automated Regression Suite (DeepEval)**: Integrate 100+ domain safety & hallucination metrics to auto-evaluate prompts and responses before production releases.
- **Human-in-the-Loop Safeguards**: Structured co-pilot review interfaces for sensitive customer workflows."""
    elif "Founder" in track or "Staff" in role_title:
        pillar_title = "0-to-1 Operational Leverage & Sprint Acceleration"
        teardown_text = f"""### 1. The Bottleneck for {company_name}
Founders spend 40%+ of their week managing cross-functional chaos, translating business needs to engineers, and untangling manual operational friction.

### 2. High-Agency Levers I Bring to {company_name}
- **Founder Bandwidth Expansion**: Take full ownership of PRDs, technical specs, customer feedback loops, and sprint tracking.
- **Internal Tooling & DevEx**: Scaled internal BDD platforms cutting regression cycles by 90% at Kotak Bank; build self-serve operational reporting.
- **Rapid Cross-Functional Execution**: Unblock sales/GTM and engineering friction with rigorous, high-speed execution."""
    else:
        pillar_title = "Core Platform Reliability & Transaction Rails"
        teardown_text = f"""### 1. Platform Scaling for {company_name}
Scaling fintech & SaaS platforms require rock-solid API interoperability, low-latency transaction processing, and automated reporting.

### 2. Platform Architecture Levers
- **Core Banking & Transaction Rails**: Hands-on experience shipping mission-critical capabilities across Finacle/TAS rails using ISO8583 standards.
- **Data Footprint & Query Optimization**: Built log-control reporting systems reducing database footprints by 99% and query times by 95%."""

    content = f"""# 🚀 Product & Sprint Proposal: {company_name}
**Candidate**: Yashvi Bansal (IIT BHU &bull; Kotak Mahindra Bank Platforms)  
**Target Focus**: {role_title} ({track})  
**Engagement Preference**: {engagement_model}  
**Date**: {today_str}  

---

## 🎯 Executive Summary
{company_name} is building in a fast-moving space where execution speed and platform reliability determine market leadership. I am offering my background as an IIT-BHU engineer and high-agency product builder to unblock your roadmap immediately.

---

{teardown_text}

---

{engagement_section}

---

## 💎 Why Yashvi Bansal? (Tangible Assets & Track Record)
1. **0-to-1 Product Architect**: Built **Legal Owl** (AI-native legal workflow platform with coordinate-level citation ledgers) and **GitaBae** (RAG chatbot with multi-turn memory).
2. **AI Trust & Evaluation Standard**: Deployed DeepEval into enterprise AI pipelines, validating LLM responses across 100+ domain metrics.
3. **High-Scale Platform Delivery**: Shipped core transaction systems and reporting engines at Kotak Mahindra Bank (query times cut by 95%, test cycles by 90%).

---

## 📬 Contact & Portfolio Links
- 🌐 **Interactive Portfolio**: [https://yb0203.github.io/](https://yb0203.github.io/)
- 💻 **GitHub**: [github.com/yb0203](https://github.com/yb0203)
- 🔗 **LinkedIn**: [linkedin.com/in/yb0203](https://linkedin.com/in/yb0203)
- 📱 **WhatsApp / Mobile**: +91 62831 62131 | 📧 **Email**: bansaly0203@gmail.com
"""

    safe_name = company_name.lower().replace(" ", "_").replace("/", "_")
    pitch_file = os.path.join(PITCHES_DIR, f"{safe_name}_pitch.md")
    
    with open(pitch_file, "w", encoding="utf-8") as f:
        f.write(content)
        
    console.print(f"[bold green]✓ Generated tailored proposal:[/bold green] {pitch_file}")
    
    if app_id and os.path.exists(APPLICATIONS_CSV):
        df = pd.read_csv(APPLICATIONS_CSV).fillna("")
        if app_id in df['app_id'].values:
            rel_path = f"../tracker/pitches/{safe_name}_pitch.md"
            df.loc[df['app_id'] == app_id, 'pitch_artifact_path'] = rel_path
            df.to_csv(APPLICATIONS_CSV, index=False)
            console.print(f"[bold green]✓ Linked proposal in applications.csv for {app_id}[/bold green]")
            
    return pitch_file

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Micro-Pitch & Sprint Proposal Generator")
    parser.add_argument("--company", type=str, required=True, help="Company Name")
    parser.add_argument("--role", type=str, default="AI Product Manager", help="Role Title")
    parser.add_argument("--track", type=str, default="AI PM", help="Track (AI PM / Founder's Office / Technical PM)")
    parser.add_argument("--engagement-model", type=str, default="Contractual / Sprint / Full-time", help="Engagement Model")
    parser.add_argument("--app-id", type=str, help="Application ID to link in CSV")
    args = parser.parse_args()

    generate_pitch(args.company, args.role, args.track, args.engagement_model, args.app_id)
