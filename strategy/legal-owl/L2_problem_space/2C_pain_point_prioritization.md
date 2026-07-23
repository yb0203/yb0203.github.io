# 2C. Pain Point Prioritization

## ⚡ TL;DR
- Pain points are scored based on Frequency (F), Severity (S), and the Platform's Addressability (A).
- The three top-ranked pain points are **Litigation Court tracking (P5)**, **Contract Markup (P1)**, and **Federal Policy Audit (P3)**.
- We will prioritize these top three areas to define the core feature set of the MVP.

## 🗺️ Where This Fits
[Layer 2 Prioritization → Feeds into Layer 3C Product Backlog and Layer 6A MVP Scope]

## 📖 Full Detail

### Prioritization Scoring Matrix
*Scoring Scale: 1 (Low) to 5 (High). Priority Score = F × S × A (Max Score: 125)*

| Code | Pain Point Description | Freq (F) | Severity (S) | Addressability (A) | Priority Score | Rank | MVP Focus? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **P5** | PACER & state court dockets tracking & automated court date alerts | 5 | 5 | 5 | **125** | 1 | **Yes** |
| **P1** | Contract markup & deviation comparison | 5 | 4 | 5 | **100** | 2 | **Yes** |
| **P3** | Auditing credit manuals against new federal regulatory guidelines | 3 | 5 | 5 | **75** | 3 | **Yes** |
| **P8** | Summarizing land title searches and deeds | 4 | 4 | 4 | **64** | 4 | No |
| **P6** | Automated dispute response drafting | 4 | 3 | 4 | **48** | 5 | No |
| **P2** | Detecting missed vendor compliance risks | 3 | 4 | 4 | **48** | 6 | No |
| **P10**| Handling routine internal advisory queries | 4 | 3 | 3 | **36** | 7 | No |
| **P14**| Searching older legal precedents | 3 | 3 | 4 | **36** | 8 | No |
| **P4** | Summarizing new federal regulatory bulletins | 3 | 4 | 3 | **36** | 9 | No |
| **P7** | Panel lawyer performance tracking | 2 | 3 | 3 | **18** | 10 | No |

### Selection Justification
P5 (PACER & state court dockets) ranks highest because the data is public, the check is daily, missing a date results in immediate default judgments (ex-parte orders), and it can be automated completely via scraping API pipelines. P1 (Contract Markup) and P3 (Federal Compliance Audit) follow closely due to their direct connection to risk reduction and time savings.

## 🔑 Key Decisions / Open Questions
- [ ] Determine if the pilot banks will permit direct access to their private litigation databases or if we must pull from public case lists first.

## 🔗 Cross-Links
- Upstream: [L2_problem_space/2B_pain_point_decomposition.md](./2B_pain_point_decomposition.md)
- Downstream: [L3_solution_space/3C_product_backlog.md](../L3_solution_space/3C_product_backlog.md) | [L6_product_lifecycle/6A_mvp_scope.md](../L6_product_lifecycle/6A_mvp_scope.md)\n