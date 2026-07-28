# 🏛️ Madison — Executive Master Pitch & Strategy

> **Project Codename**: Madison  
> **Target Role**: Lead Product Manager & Architect — BFSI Vertical  
> **Target Markets**: United States, Canada, United Kingdom & Europe  
> **Grounded Infrastructure**: Lyzr Enterprise ADK, Lyzr Automata, Lyzr Cognis Memory, Lyzr RAI Guardrails, Lyzr Governor & Lyzr Agent Studio

---

## 📑 Table of Contents
- [🎯 1. Executive Summary & Vision](#-1-executive-summary--vision)
- [🚀 2. Grounded Architecture: Powered by Lyzr Enterprise SDK & ADK](#-2-grounded-architecture-powered-by-lyzr-enterprise-sdk--adk)
  - [Layer 1: Base Infrastructure & Enterprise Banking Connectors](#layer-1-base-infrastructure--enterprise-banking-connectors)
  - [Layer 2: Cross-Cutting Governance, Security & Compliance Stack](#layer-2-cross-cutting-governance-security--compliance-stack-sidecar-wrapper)
  - [Layer 3: Lyzr Agent Runtime Engine & Execution Core](#layer-3-lyzr-agent-runtime-engine--execution-core)
  - [Layer 4: Templatized Banking Application Layer](#layer-4-templatized-banking-application-layer-bank-manifestjson)
- [💎 3. Core Product Differentiators Grounded in Lyzr](#-3-core-product-differentiators-grounded-in-lyzr)
- [🗺️ 4. The 6 BFSI Opportunity Pillars (Taxonomy)](#%EF%B8%8F-4-the-6-bfsi-opportunity-pillars-taxonomy)
- [🏗️ 5. Modular Assembly & FDE Delivery Engine (`bank-manifest.json`)](#%EF%B8%8F-5-modular-assembly--fde-delivery-engine-bank-manifestjson)
- [💼 6. Go-To-Market (GTM) Enterprise Sales Motions](#-6-go-to-market-gtm-enterprise-sales-motions)
- [🗓️ 7. Near-Term, Mid-Term & Long-Term Execution Roadmap](#%EF%B8%8F-7-near-term-mid-term--long-term-execution-roadmap)
- [❓ 8. Open Discussions & Strategic Alignment](#-8-open-discussions--strategic-alignment)

---

## 🎯 1. Executive Summary & Vision

> **TL;DR**: Madison is an Enterprise Agentic Operating System built natively on the Lyzr Enterprise Stack. It transforms slow, document-heavy banking operations into autonomous, zero-hallucination, human-governed workflows—starting with high-value Commercial Lending and expanding horizontally into Commercial Sales, Marketing Compliance, Retail Ops, and AML/KYC across the US, Canada, and Europe ($10B–$50B+ AUM banks).

### Vision
To establish **Madison** as the premier enterprise agentic product suite for banking—leveraging **Lyzr’s full-stack AI infrastructure** to automate high-friction financial workflows with 100% auditability, bank-grade PII isolation, and zero-hallucination PDF coordinate grounding.

### Core Motto
> **"Build the Core Once, Templatize Domain Skills, Deploy to Private VPCs in Days."**

---

## 🚀 2. Grounded Architecture: Powered by Lyzr Enterprise SDK & ADK

> **TL;DR**: An intuitive, enterprise 4-layer architecture: Layer 1 (Private VPC & Mainframe Core Connectors), Layer 2 (Cross-Cutting Lyzr RAI Edge Security, Superflow Approve-Before-Act gates, and Lyzr Governor SR 11-7 Audit Ledger), Layer 3 (Lyzr Agent Runtime Engine with `lyzr-automata` DAGs, `KnowledgeBase` RAG, `Cognis` memory, and deterministic rule fallbacks), and Layer 4 (Templatized Banking Applications activated via `bank-manifest.json`).

Madison is constructed directly on top of official **Lyzr Enterprise Modules and SDK Primitives**:

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                MADISON ENTERPRISE ARCHITECTURE                           │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│ ┌──────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ LAYER 4: TEMPLATIZED BANKING APPLICATION LAYER (`bank-manifest.json`)                 │ │
│ │  ┌─────────────────────┐  ┌──────────────────────┐  ┌───────────────────────────────┐  │ │
│ │  │ Commercial Lending │  │ Commercial Sales/RM  │  │ Risk, AML & Retail Operations │  │ │
│ │  └─────────────────────┘  └──────────────────────┘  └───────────────────────────────┘  │ │
│ └──────────────────────────────────────────▲───────────────────────────────────────────┘ │
│                                            │ (Executes via Skill Primitives)             │
│ ┌──────────────────────────────────────────┴───────────────────────────────────────────┐ │
│ │ LAYER 3: LYZR AGENT RUNTIME ENGINE & DETERMINISTIC CORE                              │ │
│ │  • Orchestration: `Agent()` & `Task()` Nodes via `lyzr-automata` (DAG Pipeline)      │ │
│ │  • Multi-LLM Router: Dynamic routing across Claude 3.5, GPT-4o, Bedrock              │ │
│ │  • Memory Systems: `KnowledgeBase` RAG + `Cognis` Episodic & Graph Memory            │ │
│ │  • Hardcoded Rule Engine: FDCPA legal date math, UK 21-day rules, DSCR math          │ │
│ └──────────────────────┬─────────────────────────────────────────────────┬─────────────┘ │
│                        │                                                 │               │
│                        │ (Enforces Policies & Logs)                      │ (Deploys via) │
│ ┌──────────────────────▼──────────────────────────┐ ┌────────────────────▼────────────┐ │
│ │ LAYER 2: CROSS-CUTTING GOVERNANCE & SECURITY     │ │ LAYER 1: PRIVATE VPC INFRASTRUCTURE│ │
│ │ • Lyzr RAI: Edge PII Redaction & Prompt Shield  │ │ • Single-Tenant AWS/Azure/GCP VPC  │ │
│ │ • Lyzr Superflow: Approve-Before-Act Action Cards│ │ • Lyzr Agent Studio Git-for-Agents │ │
│ │ • Lyzr Governor: SR 11-7 Immutable Audit Ledger │ │ • Banking Core SDK (Fiserv/FIS)    │ │
│ └─────────────────────────────────────────────────┘ └──────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

### Layer 1: Base Infrastructure & Enterprise Banking Connectors
* **Single-Tenant Private VPC Deployment**: Helm Charts & Terraform scripts deploy Madison inside the bank's isolated AWS, Azure, GCP, or On-Premise OpenShift VPC.
* **Core Banking Mainframe Connectors**: Pre-built read/write integration adapters for legacy mainframes (**Fiserv, FIS, Jack Henry, Temenos**), CRMs (**Salesforce FSC**), and document repositories (**SharePoint, S3**).
* **Lyzr Agent Studio & Control Plane**: Manages environment configuration, API keys, and `git-for-agents` Dev $\rightarrow$ Staging $\rightarrow$ Production promotion pipelines.

### Layer 2: Cross-Cutting Governance, Security & Compliance Stack (Sidecar Wrapper)
* **Input Security (`Lyzr RAI Engine`)**: Edge PII/NPI Anonymizer (`create_policy`) scrubs SSNs, Tax IDs, and account numbers at the boundary before LLM inference, paired with a Prompt Injection Shield.
* **Execution Governance (`Lyzr Superflow`)**: Pauses agent execution at high-stakes decision gates via Superflow Node Approvals (`running-and-approvals`), surfacing interactive **Approve-Before-Act** Co-Pilot Cards.
* **Output Grounding**: Coordinate Bounding-Box Overlay Engine ($x, y, w, h$) mapping assertions directly to original PDFs, plus `zod`/Pydantic schema enforcers.
* **Model Risk Management (`Lyzr Governor`)**: Immutable audit log recording context hashes, prompt versions, tool parameters, guardrail flags, and human sign-off IDs to pass Federal Reserve **SR 11-7** MVG audits out-of-the-box.

### Layer 3: Lyzr Agent Runtime Engine & Execution Core
* **Agent & Task Orchestration (`lyzr-automata`)**: `Agent()` nodes and `Task()` definitions chained into deterministic execution graphs via `LinearSyncPipeline` and `DAGPipeline`.
* **Dynamic Multi-LLM Router**: Multi-provider task routing (Claude 3.5 Sonnet, GPT-4o, AWS Bedrock) with automatic rate-limit failover.
* **Dual Context & Memory Engine**: `KnowledgeBase()` hybrid RAG (PDFs, 10-Ks, title commitments) paired with `Cognis` episodic and graph memory (`add/search/get-memories`).
* **Hardcoded Deterministic Fallbacks**: Overrides LLMs with hardcoded Python rule engines for statutory legal date math (FDCPA 30-day cure, UK 21-day Companies House deadlines) and financial ratios ($\text{DSCR} \ge 1.25\times$) to guarantee zero math errors.

### Layer 4: Templatized Banking Application Layer (`bank-manifest.json`)
* **Declarative Skill Provisioning**: Micro-skill primitives activated out-of-the-box via a clean deployment manifest (`bank-manifest.json`).
* **Pre-Packaged Banking Bundles**: Commercial Lending (Title Vetting, Spreading, Court Scout), Commercial Sales/RM (Pre-Meeting Dossiers), Ad Marketing Compliance (TILA/RESPA), Retail Operations (Garnishments/Probate), Risk & AML/KYC (UBO Tracing/SAR narratives).

---

## 💎 3. Core Product Differentiators Grounded in Lyzr

> **TL;DR**: 6 killer differentiators mapping Lyzr features to banking value: zero-hallucination PDF coordinate grounding, Approve-Before-Act Superflow cards, native Fed SR 11-7 Governor audit logging, Lyzr RAI edge PII redaction, Git-for-Agents VPC promotion, and Agent Simulation stress-testing.

Madison turns native Lyzr enterprise primitives directly into high-value banking differentiators:

```
 ┌──────────────────────────────────────────────────────────────────────────────────┐
 │               6 KILLER DIFFERENTIATORS (LYZR FEATURE ➔ BANKING VALUE)            │
 ├─────────────────────────┬───────────────────────────┬────────────────────────────┤
 │ LYZR NATIVE FEATURE     │ MADISON MODULE            │ BANKING BUSINESS VALUE     │
 ├─────────────────────────┼───────────────────────────┼────────────────────────────┤
 │ 1. Lyzr KB +            │ Grounded Bounding-Box     │ 0% LLM Hallucination Risk; │
 │    Structured Outputs   │ Citation Ledger           │ Verifiable PDF Proof       │
 ├─────────────────────────┼───────────────────────────┼────────────────────────────┤
 │ 2. Lyzr Superflow Node  │ Approve-Before-Act        │ Human Officer Governance   │
 │    Approvals            │ Co-Pilot Action Cards     │ for High-Stakes Actions    │
 ├─────────────────────────┼───────────────────────────┼────────────────────────────┤
 │ 3. Lyzr Governor        │ SR 11-7 Model Risk        │ Out-of-the-Box Fed Audit   │
 │    Observability        │ Audit Ledger              │ Approval for Bank MVGs     │
 ├─────────────────────────┼───────────────────────────┼────────────────────────────┤
 │ 4. Lyzr Responsible AI  │ Edge PII Isolation &      │ GLBA & OCC 2023-17         │
 │    (RAI Engine)         │ Data Privacy Shield       │ Data Privacy Compliance    │
 ├─────────────────────────┼───────────────────────────┼────────────────────────────┤
 │ 5. Lyzr Git-for-Agents  │ Enterprise Promotion      │ Safe Dev ➔ Staging ➔ Prod  │
 │    Control Plane        │ Pipeline (`bank-manifest`)│ VPC Deployment Engine      │
 ├─────────────────────────┼───────────────────────────┼────────────────────────────┤
 │ 6. Lyzr Simulation      │ Pre-Deployment Banking    │ Stress-Testing Workflows   │
 │    Engine               │ Scenario Sandbox          │ Against 1,000+ Cases       │
 └─────────────────────────┴───────────────────────────┴────────────────────────────┘
```

1. **Grounded Bounding-Box Citation Ledger** *(Powered by Lyzr KB & Structured Outputs)*: Visual coordinate links on PDFs ($x, y, w, h$). Clicking any assertion (e.g., *"Unpaid Tax Lien $12k"*) opens the PDF and **draws a highlighted bounding box** directly over the exact line item on the original bank document (0% hallucination risk).
2. **"Approve-Before-Act" Co-Pilot Action Cards** *(Powered by Lyzr Superflow Node Approvals)*: AI agents run in the background and pause at decision gates, surfacing interactive action cards with `[ Approve ]`, `[ Edit ]`, and `[ Reject ]` controls. Bank legal/credit officers retain 100% decision authority.
3. **Native SR 11-7 Model Governance & Audit Ledger** *(Powered by Lyzr Governor)*: Maintains an immutable execution audit log (`Execution ID`, `Prompt Version`, `Model & Temp`, `Context Hash`, `Tool Parameters`, `Guardrail Flags`, `Human Sign-Off ID`) to pass Federal Reserve Model Validation Group (MVG) audits out-of-the-box.
4. **Edge PII/NPI Isolation & Privacy Shield** *(Powered by Lyzr RAI Engine)*: Uses Lyzr RAI policies (`create_policy`) to scrub SSNs, Tax IDs, and account numbers at the local boundary before LLM inference (GLBA & OCC Bulletin 2023-17 compliant).
5. **Git-for-Agents Enterprise Promotion Pipeline** *(Powered by Lyzr Agent Studio)*: Enables strict Dev $\rightarrow$ Staging $\rightarrow$ Production Private VPC promotion pipelines with version rollback for bank Forward-Deployed Engineers (`bank-manifest.json`).
6. **Pre-Deployment Banking Scenario Sandbox** *(Powered by Lyzr Agent Simulation Engine)*: Pre-tests multi-agent banking workflows against thousands of synthetic stress-test scenarios before live client VPC deployment.

---

## 🗺️ 4. The 6 BFSI Opportunity Pillars (Taxonomy)

> **TL;DR**: An exhaustive banking taxonomy spanning 6 pillars: Commercial Lending (Title Vetting/Spreading), Commercial Sales & RM (Pre-Meeting Dossiers), Ad Marketing Compliance (TILA/RESPA), Retail Operations (Garnishments/Probate), Risk & AML/KYC (UBO Tracing/SAR narratives), and Wealth & Treasury (ISDA Master Agreements).

| Pillar | Focus Area | High-ROI Lyzr AI Agent Modules |
| :--- | :--- | :--- |
| **1. Lending & Credit** | CRE, SME & Corporate Debt | **Title Vetting Agent** (Schedule B exceptions); **Financial Spreading Agent** (DSCR $\ge 1.25\times$); **Court Scout Agent** (PACER/foreclosures); **Contract Reconciliation Agent** (LSTA/LMA agreements). |
| **2. Commercial Sales & RM**| RM Productivity & Deal Origination | **RM Pre-Meeting Dossier Agent** (SEC 10-K & news synthesis); **Commercial Deal Structuring Co-Pilot**; **Cross-Sell / Next-Best-Action Agent**. |
| **3. Marketing & Growth** | Acquisition & Compliance | **Ad Regulatory Compliance Agent** (auditing ad copy against TILA, RESPA, CFPB, FCA rules); **Hyper-Personalized Campaign Copy Agent**. |
| **4. Retail Operations** | Branch & Customer Servicing | **Garnishment & Levy Execution Agent** (court attachments & exempt cash calculation); **Deceased Account Probate Agent** (will/estate auditing); **Dispute Resolution Agent**. |
| **5. Risk & AML/KYC** | Financial Crime & GRC | **UBO Tracing Agent** (unwrapping offshore shell webs to $\ge 10\%$ owners); **SAR Narrative Writer Agent** (FinCEN/FINTRAC reports); **Vendor TPRM Audit Agent** (OCC 2023-17 compliance). |
| **6. Wealth & Treasury** | Private Banking & Hedging | **ISDA & CSA Master Agreement Auditor**; **Daily Margin Call Agent**; **Wealth Estate Planning Co-Pilot**. |

---

## 🏗️ 5. Modular Assembly & FDE Delivery Engine (`bank-manifest.json`)

> **TL;DR**: Templatizes micro-skill primitives into a single declarative deployment manifest (`bank-manifest.json`). Enables Forward-Deployed Engineers (FDEs) to execute `./scripts/clone-client.sh` and provision client-isolated Lyzr agent instances into private bank VPCs within 7 days.

Madison treats every banking capability as a **Micro-Skill Primitive**. Bank administrators activate solution modules out-of-the-box via a single manifest (`bank-manifest.json`):

```json
{
  "project": "Madison",
  "bank_id": "us-regional-bank-01",
  "deployment_mode": "private_vpc",
  "lyzr_core_version": "2.4.0",
  "active_modules": [
    "module.commercial_lending_v2",
    "module.commercial_sales_rm_v1",
    "module.aml_ubo_tracing_v1",
    "module.retail_garnishment_v1"
  ],
  "guardrails": {
    "pii_redaction": true,
    "mrm_sr11_7_ledger": true,
    "human_in_the_loop": "mandatory"
  }
}
```

### Forward-Deployed Engineer (FDE) Client Handoff:
Once a bank signs a PoC, FDEs execute a single command:
```bash
./scripts/clone-client.sh --config=bank-manifest.json --vpc=aws-us-east-1
```
The script provisions a client-isolated Lyzr Agent Workspace, maps core mainframe APIs (Fiserv/FIS/Salesforce FSC), connects client SSO (Okta), and deploys into the bank's **Private VPC in under 7 days**.

---

## 💼 6. Go-To-Market (GTM) Enterprise Sales Motions

> **TL;DR**: Madison scales across US, Canadian, and European commercial banks ($10B–$50B+ AUM) using 4 complementary sales channels: System Integrators (SIs), Hyperscaler Marketplace Co-Selling (AWS/Azure), Direct Outbound ABM, and Marketing Inbound Thought Leadership.

```
 ┌──────────────────────────────────────────────────────────────────────────────────┐
 │                       MADISON 4-CHANNEL SALES ENGINE                             │
 ├─────────────────────────┬───────────────────────────┬────────────────────────────┤
 │ SALES MOTION            │ TARGET PARTNER / CHANNEL  │ STRATEGIC BENEFIT FOR BANK │
 ├─────────────────────────┼───────────────────────────┼────────────────────────────┤
 │ 1. Via System           │ Accenture, Capgemini,     │ SIs handle legacy core API │
 │    Integrators (SIs)    │ PwC, EY Banking Advisory  │ integration & deployment   │
 ├─────────────────────────┼───────────────────────────┼────────────────────────────┤
 │ 2. Via Hyperscalers     │ AWS, Azure & GCP          │ Draws down from bank's     │
 │    Co-Sell              │ Financial Services        │ pre-committed cloud spend  │
 ├─────────────────────────┼───────────────────────────┼────────────────────────────┤
 │ 3. Direct Outbound ABM  │ Target C-Suite Outbound   │ High-touch enterprise sales│
 │                         │ (CCO, CRO, General Counsel│ targeting $10B-$50B AUM    │
 ├─────────────────────────┼───────────────────────────┼────────────────────────────┤
 │ 4. Marketing Inbounds   │ ROI Calculators, Webinars │ Inbound lead engine via    │
 │                         │ & SR 11-7 Compliance Guides│ executive thought leadership│
 └─────────────────────────┴───────────────────────────┴────────────────────────────┘
```

1. **Via System Integrators (SIs & Banking Consultancies)**: Partner with global banking System Integrators (Accenture Financial Services, Capgemini Banking, PwC, EY, Infosys). SIs handle custom legacy core mainframe API integrations (Fiserv, FIS, Jack Henry), while Madison delivers the templatized agentic AI software engine.
2. **Via Hyperscaler Co-Sell & Cloud Marketplace (AWS / Azure / GCP)**: Co-sell with AWS Financial Services, Microsoft Azure for Financial Services, and GCP Banking. Listing Madison on AWS/Azure Marketplace allows bank CIOs to purchase software using pre-committed cloud spending accounts (AWS EDP / Azure MACC commits), shortening procurement cycles from 9 months to 3 weeks.
3. **Direct Outbound Account-Based Marketing (ABM)**: High-touch outreach targeting Chief Credit Officers (CCOs), Chief Risk Officers (CROs), General Counsels, and Heads of Commercial Lending at $10B–$50B AUM regional banks with tailored benchmark reports.
4. **Marketing Inbound Engine**: Executive thought leadership whitepapers, bank ROI calculators, SR 11-7 Model Risk Management compliance guides, and interactive web showcase demos driving inbound C-suite meeting requests.

---

## 🗓️ 7. Near-Term, Mid-Term & Long-Term Execution Roadmap

> **TL;DR**: Near-Term delivers the 21-day Commercial Lending Showcase App & FDE cloning scripts; Mid-Term executes 3 paid bank pilots ($50K–$100K PoCs) and audits SR 11-7 compliance; Long-Term & Enterprise Scaling expands horizontally to Sales/RM & AML modules across top 25 regional banks.

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       NEAR-TERM, MID-TERM & LONG-TERM EXECUTION PLAN                                   │
├──────────────────────────┬──────────────────────────┬──────────────────────────┬───────────────────────────────────────┤
│ NEAR-TERM: Showcase Demo │ MID-TERM: Initial Bank   │ LONG-TERM: Horizontal    │ ENTERPRISE SCALING: Global            │
│ & Core Templatization    │ Pilots & Model Governance│ Expansion & FDE Engine   │ Market Expansion & Scale              │
├──────────────────────────┼──────────────────────────┼──────────────────────────┼───────────────────────────────────────┤
│ • Build & freeze 21-day  │ • Execute 3 Paid Bank    │ • Launch Sales/RM Co-    │ • Expand to UK/EU & Canada            │
│   Commercial Lending     │   Pilots ($50K–$100K PoC)│   Pilot & AML/UBO Skill  │   registries (Companies House,        │
│   Showcase Demo App      │ • Audit SR 11-7 Model    │   Bundles                │   PPSA, CERSAI)                       │
│ • Develop FDE cloning    │   scripts (`clone.sh`)   │ • Formalize FDE Client   │ • Package direct API connectors       │
│   scripts (`clone.sh`)   │   bank Model Validation  │   Onboarding Playbook    │   for Fiserv, FIS, Jack Henry         │
│ • Write Sales Storyboard │ • Measure baseline KPIs  │ • Target Top 25 US       │ • Scale ARR & enterprise              │
│   & Pitch Deck           │   (Disbursement speed)   │   Regional Banks         │   licensing seats                     │
└──────────────────────────┴──────────────────────────┴──────────────────────────┴───────────────────────────────────────┘
```

---

## ❓ 8. Open Discussions & Strategic Alignment

> **TL;DR**: Four core recommended strategic principles for founder review: Madison as a standalone suite, initial 20% R&D / 80% FDE flywheel shifting to R&D-dominant scaling, inherited SOC-2 Type-2 & SR 11-7 compliance readiness, and active SI co-selling.

Madison's product strategy incorporates the following **4 recommended strategic positions**:

1. **[RECOMMENDED] Standalone Product Suite Packaging**:
   * Madison is packaged as a **configurable standalone software suite** (the *Lyzr Banking Engine*) equipped with native banking mainframe connectors, rather than a passive template inside Lyzr Studio.

2. **[RECOMMENDED] 20% R&D / 80% FDE Resource Flywheel**:
   * **Phase 1 Launch**: Resource split is **20% Core Product R&D / 80% Forward-Deployed Engineering (FDE)**. FDEs capture real-world problem-solution feedback directly from client bank deployments and feed edge cases back to R&D.
   * **Phase 2 Scale**: As banking domain skills are progressively templatized, the ratio shifts toward **R&D-dominant scaling**, where FDEs exclusively handle low-code YAML/JSON configurations (`bank-manifest.json`).

3. **[RECOMMENDED] Inherited SOC-2 Type-2 & SR 11-7 Compliance Readiness**:
   * Lyzr natively possesses **SOC-2 Type-2 and HIPAA/Enterprise Security certifications**. Because Madison is built directly on top of the Lyzr Enterprise Stack (Lyzr Governor + Lyzr RAI), Madison **inherits SOC-2 Type-2 compliance out-of-the-box** and passes bank Model Validation Group (MVG) & Federal Reserve SR 11-7 audits on Day 1.

4. **[RECOMMENDED] System Integrator (SI) Partner Motion**:
   * Active co-selling with global banking SIs (Accenture Financial Services, Capgemini Banking, PwC, EY). SIs handle complex legacy core mainframe API integrations (Fiserv/FIS/Jack Henry), while Lyzr owns and licenses the Madison agentic software core.
