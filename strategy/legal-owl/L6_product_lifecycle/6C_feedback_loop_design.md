# 6C. Feedback Loop Design

## ⚡ TL;DR
- Captures real-time human lawyer feedback to continuous fine-tune agentic extraction and drafting models.
- Implements structured logging for **Proposal Approvals/Rejections**, **Text Edit Deltas**, and **Citation Telemetry**.
- Integrates a **Deterministic Rule Engine Fallback** to guarantee 0% AI errors on statutory dates and limitation calculations.

## 🗺️ Where This Fits
[Layer 6 Feedback Loop → Feeds into Layer 3C Product Backlog]

## 📖 Full Detail

### Agentic Human-in-the-Loop Feedback Architecture

```
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │                    HUMAN-IN-THE-LOOP FEEDBACK ARCHITECTURE                  │
  ├─────────────────────────────────────────────────────────────────────────────┤
  │ 1. Agent Proposal Surfaced (Court Scout / Title Vetting / Spreading Agent)  │
  │                                    │                                        │
  │                                    ▼                                        │
  │ 2. Bank Lawyer Action Gate: [ Approve ]  [ Edit & Approve ]  [ Reject ]     │
  │                                    │               │              │         │
  │            ┌───────────────────────┴───────────────┼──────────────┘         │
  │            ▼                                       ▼                        │
  │ 3. Execution Engine                 4. Fine-Tuning & Error Log              │
  │    (DB Write / Notice Dispatch)        (Prompt / Model Weights Calibration) │
  └─────────────────────────────────────────────────────────────────────────────┘
```

### Feedback Ingestion Vectors
1. **Proposal Card Action Logging**: Every time a bank legal officer clicks `Approve`, `Edit`, or `Reject` on an agent proposal (e.g., Court Scout default notice draft or Title Schedule B risk card), the interaction is logged with contextual document metadata.
2. **Redline Delta Analysis**: When a lawyer edits an agent-generated demand letter or LSTA covenant summary, the system calculates the text edit delta ($\Delta$). High-frequency edits trigger automatic prompt tuning and local model retraining.
3. **Citation Verification Telemetry**: Tracks when lawyers click on bounding-box source links. If a user flags an inaccurate citation, the file is automatically queued for OCR/chunking re-indexing.
4. **Deterministic Rule Override Catch**: If an agent attempts to estimate a legal cure window or statutory deadline, the deterministic rule engine overrides the output, logs a critical error, and forces a rule-backed calculation.

### Priority Engineering Escalation Loop
* **P0 (Critical Security / Accuracy Issue)**: Hallucinated fact or incorrect PACER court date. Escalated to engineering within 2 hours; model prompt patch deployed within 24 hours.
* **P1 (Workflow Friction)**: Frequent lawyer edits to standard default notice templates. Queued for weekly prompt calibration.
* **P2 (Feature Enhancement)**: Request for new court docket portal scrapers or regional land registry integrations. Added to bi-weekly sprint backlog.

## 🔑 Key Decisions / Open Questions
- [ ] Determine compliance rules for storing anonymized lawyer edit logs in client-isolated VPC environments.

## 🔗 Cross-Links
- Upstream: [L6_product_lifecycle/6B_success_metrics.md](./6B_success_metrics.md)
- Downstream: [L3_solution_space/3C_product_backlog.md](../L3_solution_space/3C_product_backlog.md)