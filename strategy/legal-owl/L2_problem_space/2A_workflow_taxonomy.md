# 2A. Legal Workflow Taxonomy

## ⚡ TL;DR
- Banking legal tasks are divided into exactly 5 non-overlapping categories.
- This taxonomy covers everything from drafting agreements to tracking court dates and auditing external counsels.
- Grouping tasks this way allows Legal Owl to design modular product components that map directly to department budgets.

## 🗺️ Where This Fits
[Layer 2 Taxonomy → Feeds into Layer 4A Functional Head Mapping]

## 📖 Full Detail

### The 5 MECE Workflow Categories

#### W1. Transactional Legal
Drafting, mark-up, negotiation, and execution of agreements.
- **Key Activities**: Reviewing corporate loan agreements, drafting NDAs, marking up ISDA master agreements, reviewing vendor agreements.
- **Primary Role**: Transaction Legal Managers / SDE Legal Support.
- **Current Tooling**: Microsoft Word, Email, manual comparison.
- **Volume Estimate**: 100 - 300 contracts per month per bank.

#### W2. Regulatory & Compliance
Reviewing operations against central bank regulations and circulars.
- **Key Activities**: Auditing internal manuals against new RBI circulars, preparing SEBI compliance filings, verifying AML/PMLA policy alignments.
- **Primary Role**: Compliance Officers / Audit Teams.
- **Current Tooling**: Legal databases (Manupatra), PDF reader, Excel sheets.
- **Volume Estimate**: 20 - 50 circulars analyzed per month; thousands of loan accounts audited.

#### W3. Litigation & Dispute
Managing ongoing legal cases where the bank is a party or claimant.
- **Key Activities**: Tracking court hearing dates on eCourts India, drafting written statements for debt recovery, managing insolvency notices.
- **Primary Role**: Litigation Managers / Panel Counsel Liaisons.
- **Current Tooling**: Excel, physical diaries, manual checks on government court websites.
- **Volume Estimate**: 500 - 5,000 active cases across regional branches.

#### W4. Risk & Advisory
Providing legal opinions to credit committees and business units.
- **Key Activities**: Writing risk mitigation opinions on complex commercial transactions, checking land title search reports.
- **Primary Role**: Chief Risk Officer (CRO) Team / Legal Advisors.
- **Current Tooling**: MS Word, internal emails.
- **Volume Estimate**: 50 - 150 complex opinions per month.

#### W5. Legal Operations
Internal department management, administration, and vendor oversight.
- **Key Activities**: Managing legal intake requests from business lines, tracking outside panel law firm bills, auditing external SLA compliance.
- **Primary Role**: Head of Legal Operations / COO.
- **Current Tooling**: ERP software, email, spreadsheets.
- **Volume Estimate**: Hundreds of invoices and intake tickets per month.

## 🔑 Key Decisions / Open Questions
- [ ] Determine if debt collection legal notices under Section 138 of the NI Act belong in W1 (Transactional) or W3 (Litigation). We classify it under W3 (Litigation & Dispute) as it initiates recovery litigation.

## 🔗 Cross-Links
- Upstream: [L2_problem_space/README.md](./README.md)
- Downstream: [L4_stakeholder_map/4A_functional_head_mapping.md](../L4_stakeholder_map/4A_functional_head_mapping.md)\n