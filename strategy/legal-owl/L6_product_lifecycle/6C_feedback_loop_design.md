# 6C. Feedback Loop Design

## ⚡ TL;DR
- Legal Owl captures user feedback directly inside the application interface.
- In-app feedback loop captures thumbs up/down, text edits, and user escalations.
- Feedback is prioritized weekly to adjust the product backlog.

## 🗺️ Where This Fits
[Layer 6 Feedback Loop → Feeds into Layer 3C Product Backlog]

## 📖 Full Detail

### User Feedback Mechanics
To capture user feedback without adding friction to their daily workflow, we implement:
1. **Clause-level Rating**: Users can click a checkmark (Accept) or cross (Decline) next to any identified deviation. Declines require selecting a reason (e.g., "False positive", "Incorrect category").
2. **Text Correction Logging**: If a user edits an AI-suggested contract clause, the system logs the original suggestion and the edited final text. This data is used to fine-tune the local model.
3. **Escalation Trigger**: If a date pulled from eCourts looks incorrect, a single-click "Report Date Discrepancy" button flags the case for priority support.

### Priority Feedback Workflow
```
[User Action / Feedback] ──► [Central Error Log] ──► [Weekly Team Review]
                                                            │
                                                            ▼
[Product Release] ◄── [Sprint Backlog Update] ◄── [Prioritization Matrix]
```

All logged errors and edits are aggregated and reviewed weekly. Issues affecting data accuracy or regulatory compliance are escalated directly to the current sprint backlog.

## 🔑 Key Decisions / Open Questions
- [ ] Define the threshold of repeat errors that triggers an automated alert to the Legal Owl development team.

## 🔗 Cross-Links
- Upstream: [L6_product_lifecycle/6B_success_metrics.md](./6B_success_metrics.md)
- Downstream: [L3_solution_space/3C_product_backlog.md](../L3_solution_space/3C_product_backlog.md)\n