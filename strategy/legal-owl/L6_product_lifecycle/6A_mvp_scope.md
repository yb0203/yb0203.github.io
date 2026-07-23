# 6A. MVP Scope

## ⚡ TL;DR
- The Phase 1 MVP is built around an **Agentic-First Legal Operations Engine** targeting US Regional & Commercial Banks ($10B–$50B AUM).
- Focuses on 3 autonomous agent modules operating under an **Approve-Before-Act** paradigm: **Court Scout Agent** (PACER/foreclosure tracking), **Title Vetting Agent** (Schedule B exception parsing), and **Financial Spreading Agent** (DSCR/covenant modeling).
- All agent actions are backed by a **Grounded Citation Ledger** featuring coordinate-level PDF bounding-box provenance and zero tolerance for LLM hallucinations.

## 🗺️ Where This Fits
[Layer 6 MVP → Feeds into Layer 6B Success Metrics]

## 📖 Full Detail

### Agentic MVP Boundary Matrix

| Module / Layer | In-Scope (Must-Have MVP) | Out-of-Scope (Deferred to Phase 2+) |
| :--- | :--- | :--- |
| **Court & Litigation Ops** | **Court Scout Agent**: Queries PACER & county dockets, tracks foreclosure calendars, auto-drafts statutory default demand notes under FDCPA/State cure laws, surfaces approval cards. | Automated out-of-court asset repossession dispatch; direct court filing execution. |
| **Collateral Vetting** | **Title Vetting Agent**: Parses Title Commitments/Deeds, extracts Schedule B exceptions (unpaid taxes, prior liens), generates cited risk briefs. | Automated title insurance underwriting policy issuance. |
| **Credit & Spreading** | **Financial Spreading Agent**: Ingests PDF balance sheets/income statements, models DSCR ($\ge 1.25\times$) & LTV, audits quarterly covenant compliance against LSTA agreements. | Bi-directional core banking mainframe write-back (Fiserv, FIS, Jack Henry). |
| **Trust & Security Layer** | **Grounded Citation Ledger**: Multi-layer PDF bounding-box citation links; **Approve-Before-Act** schema-locked typed action primitives (`zod`). | Full air-gapped on-premise hardware deployment (SaaS / Private VPC preferred). |

### Successful Agentic Pilot Thresholds
A 30-day paid bank pilot ($5,000) is declared successful when it meets the following operational criteria:
1. **Zero Missed Court Dates**: 100% docket tracking accuracy across all active foreclosure cases via Court Scout Agent.
2. **Title Vetting Velocity**: Reduction in commercial title exception review time from 5 business days to **< 15 minutes** per file.
3. **Citation Precision**: **> 99.5% citation accuracy** across extracted financial metrics and title exceptions, with 0 ungrounded assertions.
4. **Lawyer Action Rate**: **> 80% daily active engagement** on agent proposal cards by bank legal officers.

## 🔑 Key Decisions / Open Questions
- [ ] Confirm if target pilot banks will provide anonymized historical title reports and foreclosure case logs for agent fine-tuning.

## 🔗 Cross-Links
- Upstream: [L2_problem_space/2C_pain_point_prioritization.md](../L2_problem_space/2C_pain_point_prioritization.md) | [L3_solution_space/3C_product_backlog.md](../L3_solution_space/3C_product_backlog.md)
- Downstream: [L6_product_lifecycle/6B_success_metrics.md](./6B_success_metrics.md)