---
name: job-tracker
description: >-
  Manage job application pipelines (3-Entity: Companies, Contacts, Applications), query status,
  record interview rounds, export Markdown Kanban boards, and trigger bidirectional sync with Google Sheets.
---

# Job Application Tracker Skill (3-Entity Architecture)

Use this skill to manage Yashvi Bansal's job search pipeline, inspect active applications, log interview interactions, and sync with local CSV tables and Google Sheets.

## Data Layer Architecture (`tracker/`)
- `tracker/companies.csv`: Target companies, domains, tiers, and leverage hooks.
- `tracker/contacts.csv`: Recruiter, founder, and referral contacts.
- `tracker/applications.csv`: Consolidated applications with interaction history, round notes, and follow-up SLAs.
- `tracker/kanban.md`: Auto-rendered Markdown Kanban board.

## Common Workflows

### 1. View Pipeline Summary & Active Status
```bash
python3 tracker/manage.py summary
```

### 2. Export / Re-render Kanban Board
```bash
python3 tracker/manage.py export-kanban
```

### 3. Move an Application Stage
Allowed stages: `Wishlist`, `Outreach_Sent`, `Screening`, `Interviewing`, `Offer`, `Rejected`, `Withdrawn`.
```bash
python3 tracker/manage.py set-stage <APP_ID> <STAGE>
```

### 4. Validate Schema Integrity
```bash
python3 tracker/manage.py validate
```

### 5. Google Sheets Sync
```bash
# Push local CSV tables to live Google Sheet
python3 tracker/sync_sheets.py --push

# Pull updates from live Google Sheet to local CSV tables
python3 tracker/sync_sheets.py --pull
```
