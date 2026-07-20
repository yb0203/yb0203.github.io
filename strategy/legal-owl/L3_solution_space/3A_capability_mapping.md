# 3A. Capability Mapping

## ⚡ TL;DR
- Legal Owl maps its features directly to the top three prioritized banking pain points.
- Features include automated eCourts sync, template deviation highlight, and semantic policy search.
- Factual grounding is maintained via strict source citation links, ensuring trust with risk teams.

## 🗺️ Where This Fits
[Layer 3 Capabilities → Feeds into Layer 4C Adoption Barriers]

## 📖 Full Detail

### Pain Point to Capability Matrix
| Code | Target Pain Point | Legal Owl Feature / Module | How it Solves the Pain | Technical Confidence |
| :--- | :--- | :--- | :--- | :--- |
| **P5** | Missing court hearings / manual eCourts check | **eCourts Sync Engine** | Automated daily API search of case listings; alerts litigation teams of hearing dates and orders | High (Predictable API & scraping paths) |
| **P1** | Manual contract comparison against bank templates | **Template Deviation Checker** | Compares draft agreements with approved bank playbooks; highlights variance and drafts replacement clauses | High (Standard diff algorithms + LLM matching) |
| **P3** | Auditing credit manuals against new RBI guidelines | **RBI Policy Auditor** | Semantic search across policy PDFs; flags mismatching sections when new RBI guidelines are issued | Medium (Requires highly precise chunking structures) |
| **P8** | Slow land title deed review process | **Title Search Summarizer** | Extracts property descriptions and chains of title deeds; flags encumbrance certificate anomalies | Medium (Document OCR complexity is high) |
| **P6** | Drafting dispute responses from scratch | **Dispute Draft Assistant** | Auto-generates structured replies based on internal transaction records and historical responses | High (Templates match existing library) |

### Key Product Mechanics: Citation & Grounding
To guarantee trust and eliminate hallucinations:
1. **Source Linkage**: Every legal statement, risk warning, or template deviation suggested by Legal Owl is accompanied by a hyperlink to the exact page/paragraph of the source document or RBI circular.
2. **Approve-before-act**: The agent cannot draft a reply or log a court update without the litigation officer verifying the source.
3. **No-Hallucination Guard**: The underlying LLM is instructed to return a "null/unknown" state rather than attempting to guess if a clause is absent in the source documents.

## 🔑 Key Decisions / Open Questions
- [ ] Determine if target banks require integration with legacy systems like FinnOne or SAP.

## 🔗 Cross-Links
- Upstream: [L2_problem_space/2C_pain_point_prioritization.md](../L2_problem_space/2C_pain_point_prioritization.md)
- Downstream: [L4_stakeholder_map/4C_adoption_barriers.md](../L4_stakeholder_map/4C_adoption_barriers.md)\n