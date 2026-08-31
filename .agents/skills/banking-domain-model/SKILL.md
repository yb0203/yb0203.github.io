---
name: banking-domain-model
description: Enterprise MECE taxonomy, formal data models, and workflow specifications for global banking systems (US, CA, UK/EU, IN), legal operations, and agentic AI automation.
---

# Banking Domain Model & Workflow Engine Skill

This skill equips AI agents with the foundational domain knowledge, MECE classification frameworks, and execution specifications required to model, audit, and automate global banking entities and operational workflows.

---

## 🏛️ Core Architectural Framework

### 1. Bank Entity Classification Vector
Every banking institution is deterministically modeled as a unique 10-attribute Enum vector:
$$\text{BankEntity} = \langle \text{Charter}, \text{Segment}, \text{RegTier}, \text{Jurisdiction}, \text{OperatingModel}, \text{FundingStructure}, \text{AssetClass}, \text{CapitalRegime}, \text{CoreTech}, \text{PrivacyBoundary} \rangle$$

Reference the full taxonomy in [`banking_domain.md`](file:///Users/yashvi/Documents/job-prep/interview_prep/banking_domain.md#section-2-step-1--exhaustive-mece-bank-entity-taxonomy).

### 2. Workflow State Machine (15 Lifecycle Stages)
Every financial workflow executes across 15 sequential stages:
1. `INTAKE_APPLICATION`
2. `KYC_AML_UBO_VERIFICATION`
3. `CREDIT_ANALYSIS_SPREADING`
4. `COLLATERAL_VALUATION_APPRAISAL`
5. `LEGAL_TITLE_ENTITY_VETTING`
6. `CREDIT_COMMITTEE_APPROVAL`
7. `DOCUMENT_GENERATION_NEGOTIATION`
8. `STIPULATION_CONDITION_CLEARING`
9. `SECURITY_REGISTRATION_FILING`
10. `DISBURSEMENT_FUNDING`
11. `COVENANT_SERVICING_MONITORING`
12. `RENEWAL_RESTRUCTURING`
13. `DELINQUENCY_NOTICE_DEMAND`
14. `LITIGATION_FORECLOSURE_RECOVERY`
15. `WRITE_OFF_ASSET_RESOLUTION`

---

## ⚡ Agentic Action Protocol (Approve-Before-Act)

When executing legal, financial, or regulatory tasks within banking workflows:

1. **Extraction & Spreading**:
   * Parse financial balance sheets, 10-K filings, or tax returns.
   * Map line items to standardized DSCR, LTV, and DTI financial models.
   * Provide exact PDF coordinate bounding-box citations for every extracted number.

2. **Legal Vetting & Title Searches**:
   * Parse land registry abstracts (`County Recorder`, `CERSAI`, `PPSA`, `Companies House`).
   * Flag Schedule B exceptions, prior liens, and corporate authorization defects.
   * Never issue legal conclusions; flag exceptions for Human Counsel approval.

3. **Docket Tracking & Recovery Notices**:
   * Query court portals (`PACER`, `eCourts`, local court dockets).
   * Calculate statutory cure windows deterministically (never via LLM arithmetic).
   * Draft `DEFAULT_DEMAND_LETTER` payloads for human sign-off.

---

## 📚 Master Reference Specification

For full Enum space definitions, complete MECE matrices, atomic workflow execution steps, and cross-jurisdictional rules (US, CA, UK/EU, IN), inspect:
👉 **[banking_domain.md](file:///Users/yashvi/Documents/job-prep/interview_prep/banking_domain.md)**
