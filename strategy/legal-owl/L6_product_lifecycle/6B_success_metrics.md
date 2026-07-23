# 6B. Success Metrics & KPIs

## ⚡ TL;DR
- Quantifies the business ROI of agentic automation across US banking legal operations.
- Key metrics focus on **Agent Execution Speedup**, **Citation Grounding Accuracy**, and **Outside Counsel Fee Reduction**.
- Establishes leading telemetry indicators (proposal approval speed) and lagging outcomes (reduced legal spend) for bank pilots.

## 🗺️ Where This Fits
[Layer 6 Metrics → Feeds into Layer 6C Feedback Loop]

## 📖 Full Detail

### Agentic Metric Definition Matrix

| Workflow / Pain Point | Agentic Module | KPI / Metric | Measurement Method | Manual Baseline | Agentic Target |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Foreclosure Docket Sync** | **Court Scout Agent** | Docket Sync Accuracy | PACER / County docket cross-audit | 90% (Manual check) | **> 99.9% (0 missed dates)** |
| **Default Notice Draft** | **Court Scout Agent** | Proposal Approval Speed | Time for lawyer to review & execute notice | 3 - 5 hours | **< 60 seconds** |
| **Title & Deed Vetting** | **Title Vetting Agent**| Title Exception Extraction Speed | Duration to extract Schedule B exceptions | 5 business days | **< 15 minutes** |
| **Financial Spreading** | **Spreading Agent** | DSCR / Financial Model Processing | Duration to ingest financial audit PDFs | 4 hours per file | **< 5 minutes** |
| **LSTA Contract Audit** | **Reconciliation Agent**| Contract Redline Audit Time | Duration to highlight non-standard covenants | 120 minutes | **< 10 minutes** |
| **Grounding Precision** | **Citation Ledger** | Bounding-Box Citation Accuracy | Verified coordinate link clickthrough audit | N/A (Manual hallucination risk) | **> 99.5% Accuracy** |

### Leading vs. Lagging Indicators
- **Leading Indicators** (Early signals of agent trust and active usage):
  * **Proposal Acceptance Rate**: > 85% of agent-suggested default notices and task proposals approved without major edits.
  * **Citation Clickthrough Rate**: 100% initial audit verification on bounding-box source links by bank legal officers.
  * **Daily Active Agents Executions**: > 50 autonomous background runs per active matter per week.
- **Lagging Indicators** (Quantifiable business outcomes proving ROI to bank leadership):
  * **Outside Counsel Spend**: 15% to 25% reduction in annual outside legal fees within 6 months.
  * **Loan Disbursement Acceleration**: Time-to-disbursement shortened by 40% (closing loans in 48 hours instead of 10 days).
  * **Litigation Dismissal Rate**: 0% recovery lawsuit dismissals due to improper statutory cure notices.

## 🔑 Key Decisions / Open Questions
- [ ] Define telemetry data schema for tracking agent proposal accept/reject ratios in private VPC installations.

## 🔗 Cross-Links
- Upstream: [L5_business_lifecycle/5D_commercial_model.md](../L5_business_lifecycle/5D_commercial_model.md) | [L6_product_lifecycle/6A_mvp_scope.md](./6A_mvp_scope.md)
- Downstream: [L6_product_lifecycle/6C_feedback_loop_design.md](./6C_feedback_loop_design.md)