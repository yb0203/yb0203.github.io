# 🚀 Job Search & Career Operating System (5 Pillars)

An automated, data-driven career operating system for **Product Management (AI PM / Technical PM)** and **Founder's Office** opportunities.

---

## 📊 Live Cloud Sync
- 🔗 **Google Sheet**: [Open Live Spreadsheet (Dashboard + 3 Data Tabs)](https://docs.google.com/spreadsheets/d/16ZvlPsLj9tE_B1tbYeW1-hC40q_JmvJcB1NhOCZlFrY)

---

## 🏛️ The 5 Pillars of the Engine

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                   THE 5 PILLARS OF THE CAREER OPERATING SYSTEM                         │
└────────────────────────────────────────────────────────────────────────────────────────┘
                                            │
   ┌────────────────┬───────────────┼───────────────┬────────────────┐
   ▼                ▼               ▼               ▼                ▼
[1. Fit Scorer]  [2. Free Founder [3. Micro-Pitch [4. Google Sheets [5. Daily Morning
 & P0 Match       Discovery]       Teardown Gen]    KPI Dashboard]   Briefing & SLAs]
 • tracker/       • tracker/       • tracker/       • tracker/       • tracker/
   scorer.py        founder_         pitch_           sync_sheets.py   manage.py
                    discovery.py     generator.py                      morning-briefing
```

---

## 🛠️ CLI Command Reference

### 1. Daily Morning Briefing
```bash
python3 tracker/manage.py morning-briefing
```
*Displays overdue follow-up SLAs (4-day rule), fresh P0 high-fit opportunities, and pipeline health.*

### 2. Multi-Feed Sourcing Sweep (100% Free / Unlimited)
```bash
# Fetch and preview live roles ranked by 0-100 fit score:
python3 tracker/sourcing_engine.py --fetch

# Ingest qualified roles and push to Google Sheets:
python3 tracker/sourcing_engine.py --ingest --sync
```

### 3. Generate 1-Page Micro-Pitch / Teardown Proposal
```bash
python3 tracker/pitch_generator.py --company "Anthropic" --role "AI Product Manager" --track "AI PM"
```
*Creates a tailored product strategy proposal linking your real assets (DeepEval, Legal Owl, Kotak banking rails).*

### 4. Direct Founder / Executive Discovery
```bash
python3 tracker/founder_discovery.py "Supabase"
```
*Finds founder/executive names, titles, and LinkedIn profile URLs.*

### 5. Google Sheets Sync & KPI Dashboard
```bash
python3 tracker/sync_sheets.py --push
```
*Pushes all CSVs and renders the visual `📊 Dashboard & KPIs` tab.*

### 6. Gmail Outreach & Reply Checker
```bash
# Preview outreach email in terminal:
python3 tracker/email_client.py --preview --to "founder@company.com" --company "Startup"

# Create draft directly in Gmail inbox:
python3 tracker/email_client.py --draft --to "founder@company.com" --company "Startup"

# Check for incoming replies:
python3 tracker/email_client.py --check-replies
```

---

## 🗄️ Relational 3-Entity Schema
- [`companies.csv`](file:///Users/yashvi/Documents/job-prep/tracker/companies.csv): Target accounts with tiering, domain, and leverage angles.
- [`contacts.csv`](file:///Users/yashvi/Documents/job-prep/tracker/contacts.csv): Founder / hiring lead profiles, channels, and statuses.
- [`applications.csv`](file:///Users/yashvi/Documents/job-prep/tracker/applications.csv): Application lifecycle, merged interaction history, and follow-up SLAs.
- [`kanban.md`](file:///Users/yashvi/Documents/job-prep/tracker/kanban.md): Auto-rendered Markdown Kanban board.
