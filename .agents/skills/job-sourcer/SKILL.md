---
name: job-sourcer
description: >-
  Automated job sourcing skill to search multi-feed APIs and web sources for open AI PM, Founder's Office,
  and Chief of Staff roles, qualify fit (0-100 score), discover founders, and sync to Google Sheets.
---

# Job Sourcing & Fit Qualification Skill

Use this skill to autonomously source, qualify, and ingest open job opportunities matching Yashvi Bansal's transition to **Product Management (AI PM / Technical PM)** and **Founder's Office**.

## Sourcing Workflow

### 1. Multi-Feed Automated Ingestion (Zero SerpAPI)
```bash
# Fetch and ingest live job postings with fit scoring and founder discovery:
python3 tracker/sourcing_engine.py --ingest --sync
```

### 2. Fit Scoring & Priority Tiers
Every job is scored (0–100) via [`tracker/scorer.py`](file:///Users/yashvi/Documents/job-prep/tracker/scorer.py):
- **P0 Priority (Score >= 80)**: Immediate outreach with tailored 1-page proposals.
- **P1 Priority (Score 65–79)**: High-quality target opportunities.
- **P2 Priority (Score < 65)**: Standard backlog.

### 3. Founder Discovery & Micro-Pitches
- Run founder discovery: `python3 tracker/founder_discovery.py "<Company Name>"`
- Generate customized product proposal: `python3 tracker/pitch_generator.py --company "<Company Name>" --role "<Role>"`

### 4. Morning Briefing & Follow-Up SLAs
```bash
# Review daily action items, overdue SLAs, and fresh P0 leads:
python3 tracker/manage.py morning-briefing
```
