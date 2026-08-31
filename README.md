# Yashvi Bansal – Job Prep Workspace

Welcome to your structured job preparation workspace! This repository is designed to support your transition from Software Engineering to **Product Management (PM)**, **AI Product Management**, and **Founder's Office / Strategy** roles. It organizes your profile audit, tailored resumes, behavioral frameworks, case study preparation materials, domain architecture references, application pipelines, and Google Cloud / Sheets sync engine.

---

## 📂 Workspace Index

| Category | File / Module | Description | Direct Link |
| :--- | :--- | :--- | :--- |
| **🌐 Portfolio Website** | `index.html` & `assets/` | Interactive static portfolio optimized for GitHub Pages (Dark/Light themes, terminal, role switchers). | [index.html](file:///Users/yashvi/Documents/job-prep/index.html) &bull; [Guide](file:///Users/yashvi/Documents/job-prep/GITHUB_PAGES_SETUP.md) |
| **📊 Live Google Sheet** | Google Sheets Sync | Live, bi-directionally synced cloud spreadsheet of your applications & companies. | **[Live Google Sheet](https://docs.google.com/spreadsheets/d/16ZvlPsLj9tE_B1tbYeW1-hC40q_JmvJcB1NhOCZlFrY)** |
| **🎯 Strategy & Positioning** | `audit_report.md` | In-depth critique of strengths, bridging engineering-to-product gaps, and transition strategy. | [audit_report.md](file:///Users/yashvi/Documents/job-prep/audit_report.md) |
| **📄 Resumes** | `pm_tailored.md` | Resume version optimized for PM, AI PM, and Founder's Office roles. | [pm_tailored.md](file:///Users/yashvi/Documents/job-prep/resumes/pm_tailored.md) |
| | `generalist.md` / `.docx` | Generalist SDE/PM resume (in Markdown and Microsoft Word DOCX). | [generalist.md](file:///Users/yashvi/Documents/job-prep/resumes/generalist.md) &bull; [generalist.docx](file:///Users/yashvi/Documents/job-prep/resumes/generalist.docx) |
| **📊 Pipeline & CSV Tracker** | `tracker/` | Relational CSV store, Google Sheets sync, Gmail engine, and auto-rendered Kanban. | [tracker/](file:///Users/yashvi/Documents/job-prep/tracker/) &bull; [kanban.md](file:///Users/yashvi/Documents/job-prep/tracker/kanban.md) |
| | `outreach.md` | Multi-channel outreach templates (LinkedIn, WhatsApp, Email) tailored for founders and hiring managers. | [outreach.md](file:///Users/yashvi/Documents/job-prep/applications/outreach.md) |
| **🧠 Interview Preparation** | `behavioral.md` | STAR-format stories highlighting cross-functional leadership, high-stakes incidents, and AI safety. | [behavioral.md](file:///Users/yashvi/Documents/job-prep/interview_prep/behavioral.md) |
| | `pm_cases.md` | Frameworks for product sense, execution metrics, and AI system design (RAG, MCP, multi-agent). | [pm_cases.md](file:///Users/yashvi/Documents/job-prep/interview_prep/pm_cases.md) |
| | `understand_banking.md` | Comprehensive guide on core banking topologies, global payment rails (US/UK/CA/IN), and AI use-cases. | [understand_banking.md](file:///Users/yashvi/Documents/job-prep/understand_banking.md) |
| **🤖 Custom Agent Skills** | `job-tracker` | Skill to manage pipeline status, query active leads, and sync with Google Sheets. | [SKILL.md](file:///Users/yashvi/Documents/job-prep/.agents/skills/job-tracker/SKILL.md) |
| | `email-outreach-engine` | Skill to generate tailored cold outreach pitches and stage Gmail drafts via Google Cloud. | [SKILL.md](file:///Users/yashvi/Documents/job-prep/.agents/skills/email-outreach-engine/SKILL.md) |
| | `banking-domain-model` | MECE taxonomy and data model specifications for banking workflows & legal operations. | [SKILL.md](file:///Users/yashvi/Documents/job-prep/.agents/skills/banking-domain-model/SKILL.md) |

---

## 🏗️ Repository Architecture

```text
job-prep/
├── 🌐 index.html & assets/       # Interactive GitHub Pages Portfolio Website
├── 📄 GITHUB_PAGES_SETUP.md      # Setup guide for GitHub Pages deployment
├── 📄 README.md                  # Master index and workspace documentation
├── 📄 audit_report.md            # Profile audit & positioning strategy
│
├── 📁 tracker/                   # Relational CSV Data Layer & Engine
│   ├── applications.csv          # Active roles, pipeline stages & follow-ups
│   ├── companies.csv             # Target company accounts & leverage hooks
│   ├── contacts.csv              # Stakeholders, founders & recruiters
│   ├── kanban.md                 # Auto-rendered Markdown Kanban board
│   ├── manage.py                 # Pipeline CLI & summary tool
│   ├── sync_sheets.py            # Bidirectional Google Sheets sync
│   ├── email_client.py           # Gmail draft & preview outreach engine
│   └── sheets_config.json        # Google Spreadsheet ID & URL
│
├── 📁 resumes/                   # Multi-track resumes
│   ├── pm_tailored.md            # AI PM & Product Leadership
│   ├── generalist.md             # SDE / Technical Generalist
│   └── generalist.docx
│
├── 📁 applications/              # Multi-channel outreach templates
│   └── outreach.md               # LinkedIn, WhatsApp, Cold Email templates
│
├── 📁 interview_prep/            # Interview frameworks & case study guides
│   ├── behavioral.md             # STAR leadership & conflict stories
│   └── pm_cases.md               # Product sense & AI system design
│
└── 📁 .agents/                   # Custom agent domain skills & rules
    ├── skills/
    │   ├── job-tracker/          # Pipeline management skill
    │   ├── email-outreach-engine/# Gmail outreach & drafting skill
    │   └── banking-domain-model/ # Banking taxonomy skill
    └── rules/
        └── job-pipeline-rules.md # Entity integrity & safe email rules
```
