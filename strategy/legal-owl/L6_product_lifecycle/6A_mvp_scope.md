# 6A. MVP Scope

## ⚡ TL;DR
- The MVP is constrained to target Private Banks and NBFCs, focusing on **eCourts Tracking** and **Contract playbooks**.
- Complex integrations, multi-language processing, and custom reporting tools are excluded from the MVP.
- A 30-day pilot target of 70%+ user adoption and zero missed court dates defines a successful launch.

## 🗺️ Where This Fits
[Layer 6 MVP → Feeds into Layer 6B Success Metrics]

## 📖 Full Detail

### MVP Boundary Matrix
- **In-Scope (Must-haves)**:
  - Local Docker VPC deployment framework.
  - Automated eCourts case scraping & daily email alert dashboard.
  - Side-by-side contract playbooks highlighter (finding deviation risks).
  - Traceable source-citation links.
  - Basic audit trail logger.
- **Out-of-Scope (Won't-have for MVP)**:
  - Direct integration with core banking systems.
  - Support for local regional languages (OCR).
  - Panel counsel billing audits.
  - Collaborative contract editor inside the platform.

### Successful Pilot Thresholds
A pilot is declared successful when it meets the following operational criteria during its 30-day run:
1. **Adoption**: 70%+ of the onboarded litigation team logs in daily.
2. **Reliability**: Zero missed court dates across the tracked case list.
3. **Efficiency**: Under 2 minutes to run a deviation report on a standard loan contract.

## 🔑 Key Decisions / Open Questions
- [ ] Verify if target banks will allow us to use synthetic/mock contract data for the initial sandbox setup.

## 🔗 Cross-Links
- Upstream: [L2_problem_space/2C_pain_point_prioritization.md](../L2_problem_space/2C_pain_point_prioritization.md) | [L3_solution_space/3C_product_backlog.md](../L3_solution_space/3C_product_backlog.md)
- Downstream: [L6_product_lifecycle/6B_success_metrics.md](./6B_success_metrics.md)\n