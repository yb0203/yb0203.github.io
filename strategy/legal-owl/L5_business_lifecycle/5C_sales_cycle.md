# 5C. Sales Cycle Design

## ⚡ TL;DR
- The enterprise sales pipeline consists of 6 structured stages, spanning 3 to 6 months.
- Technical validation (IT Security Review) is run in parallel with product discovery to prevent deal delays.
- Clear entry and exit criteria are established for each stage to ensure the pipeline is predictable.

## 🗺️ Where This Fits
[Layer 5 Sales Cycle → Feeds into Layer 5D Commercial Model]

## 📖 Full Detail

### Six-Stage Sales Pipeline

```
[1. Discovery] ──► [2. Technical Demo] ──► [3. Paid Pilot (30d)]
                                                 │
                                                 ▼
[6. Expansion] ◄── [5. Enterprise Deal] ◄── [4. IT Security Review]
```

### Stage-by-Stage Breakdown
1. **Stage 1: Discovery & Qualification**
   - *Activity*: Identify bank size, legal team setup, and core pain points (Transactional vs. Litigation tracking).
   - *Exit Criteria*: CLO agrees to schedule a product demo with their team.
   - *Duration*: 1 - 2 weeks.

2. **Stage 2: Technical Demo & Scoping**
   - *Activity*: Demonstrate template deviation checker and eCourts sync modules. Share the security package.
   - *Exit Criteria*: Agreement on a 30-day pilot scope and sign-off on the pilot agreement.
   - *Duration*: 2 - 3 weeks.

3. **Stage 3: Paid Pilot (30 Days)**
   - *Activity*: Deploy Legal Owl inside the bank's sandbox environment. Upload approved templates and litigation lists.
   - *Exit Criteria*: System achieves 70%+ daily active usage with 95%+ accuracy on date scraping.
   - *Duration*: 4 weeks (Fixed).

4. **Stage 4: IT Security & Compliance Audit**
   - *Activity*: Security review by the bank's IT Risk team. Verify data isolation, logging, and user access controls.
   - *Exit Criteria*: Formally signed-off IT compliance approval.
   - *Duration*: 3 - 6 weeks.

5. **Stage 5: Enterprise Commercial Negotiations**
   - *Activity*: Finalize seat licensing tiers, SLA response times, support terms, and pricing in INR.
   - *Exit Criteria*: Signed master services agreement (MSA) and purchase order (PO).
   - *Duration*: 2 - 4 weeks.

6. **Stage 6: Customer Success & Expansion**
   - *Activity*: Onboard the remaining legal team members; monitor usage and pitch secondary modules (e.g., RBI Policy Auditor).
   - *Exit Criteria*: Expand user seats by 50% or secure secondary module upsell.
   - *Duration*: Continuous.

## 🔑 Key Decisions / Open Questions
- [ ] Define the legal template language needed to protect Legal Owl's intellectual property when hosted locally on bank servers.

## 🔗 Cross-Links
- Upstream: [L4_stakeholder_map/4B_decision_matrix.md](../L4_stakeholder_map/4B_decision_matrix.md) | [L5_business_lifecycle/5B_gtm_motion.md](./5B_gtm_motion.md)
- Downstream: [L5_business_lifecycle/5D_commercial_model.md](./5D_commercial_model.md)\n