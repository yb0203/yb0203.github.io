---
name: email-outreach-engine
description: >-
  Generate hyper-tailored outreach pitches, create drafts in Gmail via Google Cloud API,
  preview cold emails, check incoming threads/replies, and auto-update applications.csv.
---

# Email & Outreach Engine Skill (Gmail API Integrated)

Use this skill to draft, preview, stage, and track cold outreach and follow-up emails for Yashvi Bansal.

## Core Templates Reference
- Multi-Channel Templates (WhatsApp, LinkedIn, Mail): [`applications/outreach.md`](file:///Users/yashvi/Documents/job-prep/applications/outreach.md)
- Follow-up Pitch Deck Template: [`email_draft.md`](file:///Users/yashvi/Documents/job-prep/email_draft.md)
- Madison Executive Pitch: [`madison_pitch.md`](file:///Users/yashvi/Documents/job-prep/madison_pitch.md)

## Safe Dispatch Protocol
1. **Always preview first**: Render the interpolated email in the terminal.
2. **Draft Mode by Default**: Use `--draft` to create a draft in Gmail for user review.
3. **Automatic Application Pipeline Updates**: Creating a draft or sending an email automatically updates `last_contacted_date`, sets `next_followup_due` (+4 days), and logs the note into `tracker/applications.csv`.

## CLI Usage

### Preview Outreach Email in Terminal
```bash
python3 tracker/email_client.py --preview --company "Company Name" --name "Contact Name" --role "Role Title" --hook "Custom leverage hook"
```

### Create Draft in Gmail
```bash
python3 tracker/email_client.py --draft --to "founder@company.com" --name "Founder Name" --company "Company Name" --app-id "APP_002"
```

### Check Recent Gmail Threads / Outreach Replies
```bash
python3 tracker/email_client.py --check-replies
```
