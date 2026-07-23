# 6D. Product Roadmap

## ⚡ TL;DR
- A 4-phase, agentic-first roadmap guides the evolution of the Platform into an enterprise legal operations infrastructure for global banking.
- Phase 1 (MVP) establishes the **Agentic Core**: Court Scout (PACER foreclosure tracking) and Title Vetting Agents operating under an **Approve-Before-Act** paradigm.
- Phase 2 expands to **Financial Spreading** and **LSTA Contract Reconciliation** agents.
- Phase 3 & 4 scale to **Corporate UBO Tracing**, **SAR Reporting**, and cross-border international banking registries (Canada PPSA, UK Companies House, India CERSAI).

## 🗺️ Where This Fits
[Layer 6 Roadmap → Outlines the overall execution path]

## 📖 Full Detail

### Phased Agentic Roadmap Timeline

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                             4-PHASE AGENTIC ROADMAP                                                    │
├──────────────────────────┬──────────────────────────┬──────────────────────────┬───────────────────────────────────────┤
│ Phase 1: Core Agentic    │ Phase 2: Spreading &     │ Phase 3: Corporate UBO   │ Phase 4: Global Banking               │
│ (Months 0 - 3)           │ Contracts (Months 3 - 9) │ & Compliance (9 - 18 M)  │ Ecosystem (18 Months+)                │
├──────────────────────────┼──────────────────────────┼──────────────────────────┼───────────────────────────────────────┤
│ • Court Scout Agent      │ • Financial Spreading    │ • Corporate UBO Graph    │ • Cross-Border Registries             │
│   (PACER Foreclosures)   │   Agent (DSCR / LTV)     │   Tracing Agent          │   (PPSA, Companies House, CERSAI)     │
│ • Title Vetting Agent    │ • LSTA Contract Redline  │ • FinCEN SAR Narrative   │ • Autonomous Syndicated Lead          │
│   (Schedule B Exceptions)│   Reconciliation Agent   │   Drafting Agent         │   Arranger Agent Suite                │
│ • Grounded Citation      │ • Lien Perfection Agent  │ • Vendor TPRM Audit      │ • Bi-Directional Core Mainframe       │
│   Ledger                 │   (UCC-1 / County)       │   Agent (OCC 2023-17)    │   Integrations (Fiserv/Jack Henry)    │
└──────────────────────────┴──────────────────────────┴──────────────────────────┴───────────────────────────────────────┘
```

#### Phase 1: Core Agentic Engine & Docket Scout (0 - 3 Months)
- **Goal**: Deploy core agentic workflow primitives and validate zero-hallucination citation precision in 3 paid bank pilots ($5,000 PoC).
- **Key Modules**:
  * **Court Scout Agent**: Automated PACER & State Docket sync, foreclosure calendar tracking, auto-drafting statutory default demand notes (FDCPA/State cure laws).
  * **Title Vetting Agent**: Parses Title Commitments/Deeds, extracts Schedule B exceptions (unpaid taxes, prior mortgages).
  * **Trust Rails**: Grounded Citation Ledger (coordinate-level PDF bounding boxes) + Approve-Before-Act UI cards.
- **Target Metrics**: 0 missed court dates; title vetting time < 15 mins; > 99.5% citation accuracy.
- **Business Milestone**: Complete 3 bank pilots; secure first annual recurring revenue (ARR) enterprise contract ($75,000+).

#### Phase 2: Credit Spreading & Contract Reconciliation Agent (3 - 9 Months)
- **Goal**: Expand into commercial lending desks and credit underwriting operations.
- **Key Modules**:
  * **Financial Spreading Agent**: Ingests PDF audited balance sheets, calculates DSCR ($\ge 1.25\times$) and debt capacity models.
  * **Contract Reconciliation Agent**: Audits LSTA/LMA credit agreement redlines against approved Credit Memos.
  * **Lien Perfection Agent**: Generates state UCC-1 financing statements and County Mortgage filing payloads.
- **Target Metrics**: Financial spreading processing time < 5 mins; contract review time reduced by 75%.
- **Business Milestone**: Convert 5 additional regional commercial banks ($10B–$50B AUM).

#### Phase 3: Corporate UBO & Compliance Agent (9 - 18 Months)
- **Goal**: Scale into corporate compliance, AML, and vendor risk management.
- **Key Modules**:
  * **Corporate UBO Tracing Agent**: Unwraps multi-layered offshore shell company webs to identify natural person owners ($\ge 10\% / \ge 25\%$).
  * **SAR Narrative Drafting Agent**: Auto-drafts confidential Suspicious Activity Report narratives for FinCEN filing.
  * **Vendor TPRM Audit Agent**: Audits vendor cloud contracts against OCC Bulletin 2023-17 and GLBA data privacy rules.
- **Target Metrics**: UBO graph tracing time < 10 mins; 0% regulatory audit compliance penalties.
- **Business Milestone**: Expand into top 25 US regional banks; reach $2M+ ARR.

#### Phase 4: Global Banking Ecosystem (18 Months+)
- **Goal**: Establish the Platform as the global standard for legal-banking operations across multi-jurisdictional frameworks.
- **Key Modules**:
  * **Cross-Border Registry Adaptors**: Native integrations for Canada PPSA, UK Companies House (21-day charge rule), and India CERSAI / ROC portals.
  * **Autonomous Syndicated Loan Suite**: Multi-bank lead arranger coordination and syndication covenant monitoring agents.
  * **Core Mainframe Integrations**: Direct bi-directional API adapters for Fiserv, FIS, Jack Henry, Temenos, and Finacle core mainframes.
- **Target Metrics**: > 100 enterprise banking customers; 95%+ net revenue retention (NRR).
- **Business Milestone**: International expansion into UK, Canadian, and European commercial banking markets.

## 🔑 Key Decisions / Open Questions
- [ ] Determine technical team expansion required (NLP/Agentic engineers, banking legal ops specialists) for Phase 2 scaling.

## 🔗 Cross-Links
- Upstream: [L3_solution_space/3C_product_backlog.md](../L3_solution_space/3C_product_backlog.md) | [L5_business_lifecycle/5E_revenue_expansion.md](../L5_business_lifecycle/5E_revenue_expansion.md)
- Downstream: [Root README.md](../README.md)