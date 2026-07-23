# 3C. Product Backlog (MoSCoW)

## ⚡ TL;DR
- The backlog prioritizing MVP requirements is structured using the MoSCoW framework.
- Core focus (Must-haves) targets safe local deployment, PACER & state court dockets tracking, and template deviations.
- Integrations with internal email clients or legacy ticketing tools are deferred to Phase 2.

## 🗺️ Where This Fits
[Layer 3 Backlog → Feeds into Layer 6A MVP Scope and Layer 6D Roadmap]

## 📖 Full Detail

### Backlog Item Catalog
*Priorities: Must-have (M), Should-have (S), Could-have (C), Won't-have (W)*

| ID | Feature Name | Target Pain Point | Effort (S/M/L) | Priority | Phase Tag |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **F1** | Secure local Docker Compose deployment | P3, Data Safety | S | **M** | MVP (Phase 1) |
| **F2** | court docket date scraping and email alert engine | P5 | M | **M** | MVP (Phase 1) |
| **F3** | Side-by-side template deviation highlighter | P1 | M | **M** | MVP (Phase 1) |
| **F4** | Standard contract deviation reports (PDF export) | P1, P2 | S | **M** | MVP (Phase 1) |
| **F5** | Grounded citation linking to source PDF page | Trust, P3 | M | **M** | MVP (Phase 1) |
| **F6** | Semantic search across federal regulatory database | P3 | L | **S** | Phase 2 |
| **F7** | Panel Counsel billing reconciliation tool | P11 | M | **C** | Phase 3 |
| **F8** | Layout-aware OCR parsing (e.g., scanned title deeds) | P5 | L | **S** | Phase 2 |
| **F9** | Auto-drafting standard case responses | P6 | M | **S** | Phase 2 |
| **F10**| Human-in-the-loop "approve-before-act" gate | Safety, Trust | S | **M** | MVP (Phase 1) |
| **F11**| Integration with Core Banking Document Store | Integration | L | **W** | Phase 3 |
| **F12**| Custom playbook builder for Legal Managers | P1 | M | **S** | Phase 2 |
| **F13**| Audit trail logging for compliance teams | P3, W2 | S | **M** | MVP (Phase 1) |
| **F14**| Automated land title chain reconstruction | P8 | L | **C** | Phase 3 |
| **F15**| Internal FAQ bot for business team queries | P10 | M | **C** | Phase 3 |
| **F16**| Real-time Slack & MS Teams alerts for dates | P5 | S | **S** | Phase 2 |
| **F17**| Dynamic vector database sync with federal regulatory portals | P3 | M | **S** | Phase 2 |
| **F18**| Single Sign-On (SSO) bank Active Directory sync | Enterprise | S | **S** | Phase 2 |
| **F19**| Matter management Kanban dashboard | W5 | M | **C** | Phase 3 |
| **F20**| Collaborative annotation on contract drafts | W1 | L | **W** | Phase 4 |

## 🔑 Key Decisions / Open Questions
- [ ] Confirm if SSO integration (F18) is a hard blocker for bank IT teams to permit pilot access.

## 🔗 Cross-Links
- Upstream: [L2_problem_space/2C_pain_point_prioritization.md](../L2_problem_space/2C_pain_point_prioritization.md)
- Downstream: [L6_product_lifecycle/6A_mvp_scope.md](../L6_product_lifecycle/6A_mvp_scope.md) | [L6_product_lifecycle/6D_roadmap.md](../L6_product_lifecycle/6D_roadmap.md)\n