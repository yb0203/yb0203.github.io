export interface StrategyLayer {
  layer: string;
  name: string;
  focus: string;
  output: string;
}

export interface BankArchetype {
  segment: string;
  teamSize: string;
  decisionSpeed: string;
  aiReadiness: string;
  budgetRange: string;
  priority: 'Tier 1 (Anchor)' | 'Tier 2 (Fast Follow)' | 'Tier 3 (Wait)';
}

export interface RegulatoryItem {
  name: string;
  authority: string;
  rule: string;
  lyzrMoat: string;
}

export interface CompetitorItem {
  name: string;
  targetMarket: string;
  jurisdictionSupport: string;
  deploymentModel: string;
  pricing: string;
  keyDeficit: string;
}

export interface PainPointItem {
  code: string;
  workflow: string;
  specificPain: string;
  whoFeelsIt: string;
  frequency: string;
  severity: 'High' | 'Med' | 'Low';
  currentWorkaround: string;
  score: number;
  rank: number;
  mvpFocus: boolean;
}

export interface BacklogItem {
  id: string;
  featureName: string;
  painPointAddressed: string;
  effort: 'S' | 'M' | 'L';
  priority: 'Must-have' | 'Should-have' | 'Could-have' | 'Won\'t-have';
  phase: 'MVP (Phase 1)' | 'Phase 2' | 'Phase 3' | 'Phase 4';
}

export interface StakeholderPersona {
  title: string;
  workflowsOwned: string;
  keyMotivation: string;
  successMetric: string;
  primaryFear: string;
}

export interface SalesStage {
  stage: string;
  name: string;
  activity: string;
  exitCriteria: string;
  duration: string;
}

export interface CommercialTier {
  name: string;
  target: string;
  scope: string;
  price: string;
  support: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  timeline: string;
  goal: string;
  features: string[];
  metrics: string;
  businessMilestone: string;
}

export interface BankingDivision {
  id: string;
  name: string;
  intensity: 'Low' | 'High' | 'Maximum' | 'Existential';
  legalNeed: string;
  businessImpact: string;
  subcategories: {
    title: string;
    legalWork: string;
    value: string;
  }[];
}

export interface ObjectionItem {
  id: string;
  title: string;
  persona: string;
  objection: string;
  response: string;
}

export interface UseCaseItem {
  id: string;
  divisionId: string;
  divisionName: string;
  useCase: string;
  description: string;
  targetRole: string;
  acvBand: string;
  priority: 'P1' | 'P2' | 'P3';
  connectors: string[];
}

// ----------------------------------------------------
// LAYER DATA DEFINITIONS
// ----------------------------------------------------

export const STRATEGY_LAYERS: StrategyLayer[] = [
  { layer: "Layer 1", name: "Market Intelligence", focus: "US Banking Landscape & Regulatory Frameworks", output: "Target ICP & Security Compliance Moats" },
  { layer: "Layer 2", name: "Problem Space", focus: "5 MECE Workflows & 15 Pain-Point Decompositions", output: "Prioritized Pain-Point Matrix (P1-P15)" },
  { layer: "Layer 3", name: "Solution Space", focus: "Lyzr BFSI Capabilities & Gap Analysis", output: "20-Item MoSCoW Product Backlog" },
  { layer: "Layer 4", name: "Stakeholder Map", focus: "Buying Committee, DACI & Objection Playbook", output: "IT Security Veto Mitigation & Scripts" },
  { layer: "Layer 5", name: "Business Lifecycle", focus: "6-Stage Sales Pipeline & $250K ACV Pricing Tiers", output: "Land-and-Expand GTM & SI Channels" },
  { layer: "Layer 6", name: "Product Lifecycle", focus: "MVP Scope, KPIs & Vertical Pod Realignment", output: "4-Phase Roadmap & Pod Org Structure" }
];

export const BANK_ARCHETYPES: BankArchetype[] = [
  { segment: "Large National Banks (JPMorgan, Chase, BofA)", teamSize: "50 - 150 lawyers", decisionSpeed: "Slow (6-12 mo)", aiReadiness: "High (Internal AI teams)", budgetRange: "$1M - $5M+", priority: "Tier 1 (Anchor)" },
  { segment: "Large Regional Banks (PNC, Truist, US Bank)", teamSize: "20 - 60 lawyers", decisionSpeed: "Medium (3-6 mo)", aiReadiness: "High (Active AI trials)", budgetRange: "$300K - $1M", priority: "Tier 1 (Anchor)" },
  { segment: "Mid-Tier Regional Banks", teamSize: "10 - 25 lawyers", decisionSpeed: "Fast (2-4 mo)", aiReadiness: "Medium", budgetRange: "$100K - $350K", priority: "Tier 2 (Fast Follow)" },
  { segment: "Community Credit Unions (CUs)", teamSize: "3 - 10 lawyers", decisionSpeed: "Fast (1-3 mo)", aiReadiness: "High", budgetRange: "$30K - $100K", priority: "Tier 2 (Fast Follow)" },
  { segment: "Sponsor Banks / Neobanks (Axos, Cross River)", teamSize: "5 - 15 lawyers", decisionSpeed: "Fast (1-2 mo)", aiReadiness: "Very High", budgetRange: "$75K - $250K", priority: "Tier 1 (Anchor)" }
];

export const REGULATORY_FRAMEWORKS: RegulatoryItem[] = [
  { name: "OCC Bulletin 2011-12", authority: "OCC / Federal Reserve", rule: "Requires explicit model validation, audit trails, and risk controls for AI models.", lyzrMoat: "Pre-built OCC 2011-12 validation pack shipped as product." },
  { name: "OCC Bulletin 2023-17", authority: "OCC / FDIC", rule: "Third-Party Risk Management (TPRM) guidelines for cloud software.", lyzrMoat: "Deployable 100% inside bank private VPC with zero public API leaks." },
  { name: "NYDFS 23 NYCRR 504", authority: "NY Dept of Financial Services", rule: "Mandates transaction monitoring and sanctions screening accuracy audits.", lyzrMoat: "Traceable source citation ledger ensuring zero ungrounded claims." },
  { name: "Uniform Commercial Code (UCC-1)", authority: "State Commercial Law", rule: "Strict filing rules for perfecting liens on business collateral.", lyzrMoat: "Automated UCC-1 filing checks preventing unperfected security losses." },
  { name: "UCP 600 Trade Rules", authority: "International Chamber of Commerce", rule: "Strict compliance for Letters of Credit (LC) shipping paper discrepancy audits.", lyzrMoat: "Automated discrepancy auditor enforcing UCP 600 clause checks." }
];

export const COMPETITORS: CompetitorItem[] = [
  { name: "Harvey.ai", targetMarket: "US/UK Magic Circle", jurisdictionSupport: "US/UK General Law", deploymentModel: "Cloud Only (SaaS)", pricing: "Very High ($200+/user/mo)", keyDeficit: "No local VPC option; lacks banking domain-specific audit engines." },
  { name: "Thomson Reuters CoCounsel", targetMarket: "Global Enterprise", jurisdictionSupport: "US Federal / Westlaw", deploymentModel: "Hybrid", pricing: "High (Seat licenses)", keyDeficit: "Rigid search paradigm; lacks interactive approve-before-act agent primitives." },
  { name: "Spellbook", targetMarket: "Small-Mid US Firms", jurisdictionSupport: "US Contracts", deploymentModel: "MS Word Add-in SaaS", pricing: "Mid ($100/user/mo)", keyDeficit: "Data leaves local network; no automated court docket scraping." },
  { name: "Lexy / Lumio", targetMarket: "Corporate Legal", jurisdictionSupport: "Corporate Law", deploymentModel: "SaaS / VPC", pricing: "Mid", keyDeficit: "Generic legal search; not tailored to complex banking operations." },
  { name: "Eltropy", targetMarket: "Credit Unions", jurisdictionSupport: "CU Comms", deploymentModel: "SaaS", pricing: "Mid", keyDeficit: "Focused on CX comms; lacks deep lending & contract audit capabilities." },
  { name: "Bretton AI", targetMarket: "Compliance & FinCrime", jurisdictionSupport: "US Banking Compliance", deploymentModel: "VPC", pricing: "High ($150K+)", keyDeficit: "Focused exclusively on EDD/AML; lacks cross-department legal ops suite." },
  { name: "Manual Status Quo", targetMarket: "Internal Legal", jurisdictionSupport: "Internal Playbooks", deploymentModel: "On-Prem MS Word/Excel", pricing: "Internal salary cost", keyDeficit: "High error rates; massive document review backlogs; missed court dates." },
  { name: "Lyzr BFSI", targetMarket: "US Banking Legal Ops", jurisdictionSupport: "US Federal & State Banking", deploymentModel: "Private VPC / On-Prem", pricing: "$75K - $250K Tiered", keyDeficit: "Differentiated: Built natively on Lyzr Agent primitives with grounded citation ledgers." }
];

export const PAIN_POINTS: PainPointItem[] = [
  { code: "P5", workflow: "W3 (Litigation)", specificPain: "Missing court hearings or order updates due to manual tracking on PACER & state dockets", whoFeelsIt: "Head of Litigation", frequency: "Daily", severity: "High", currentWorkaround: "Interns check PACER case numbers manually", score: 125, rank: 1, mvpFocus: true },
  { code: "P1", workflow: "W1 (Transactional)", specificPain: "Manual comparison of third-party commercial loan contract drafts against bank playbooks", whoFeelsIt: "Legal Manager / Credit Officer", frequency: "Daily", severity: "High", currentWorkaround: "MS Word 'Compare Documents' + line-by-line review", score: 100, rank: 2, mvpFocus: true },
  { code: "P3", workflow: "W2 (Regulatory)", specificPain: "Manually auditing credit manuals when new federal regulatory circulars are released", whoFeelsIt: "CCO / Compliance Auditor", frequency: "Monthly", severity: "High", currentWorkaround: "Keyword searching PDFs; manual checklist creation", score: 75, rank: 3, mvpFocus: true },
  { code: "P8", workflow: "W4 (Risk Advisory)", specificPain: "Summarizing complex land titles & Schedule B exceptions requires reading hundreds of deed pages", whoFeelsIt: "Credit Officer", frequency: "Daily", severity: "High", currentWorkaround: "Outside title search providers (takes 7-10 days)", score: 64, rank: 4, mvpFocus: false },
  { code: "P6", workflow: "W3 (Litigation)", specificPain: "Drafting repetitive written statements for consumer debt recovery disputes from scratch", whoFeelsIt: "Legal Officer", frequency: "Weekly", severity: "Med", currentWorkaround: "Copy-pasting from older legal drafts", score: 48, rank: 5, mvpFocus: false },
  { code: "P2", workflow: "W1 (Transactional)", specificPain: "Critical deviations in vendor cloud agreements are missed, leading to data security liability", whoFeelsIt: "General Counsel / CRO", frequency: "Weekly", severity: "High", currentWorkaround: "Relying on memory of senior lawyers", score: 48, rank: 6, mvpFocus: false },
  { code: "P10", workflow: "W5 (Legal Ops)", specificPain: "High volume of simple routine legal queries from business teams cluttering legal inbox", whoFeelsIt: "General Counsel", frequency: "Daily", severity: "Med", currentWorkaround: "Automated generic email auto-responders", score: 36, rank: 7, mvpFocus: false },
  { code: "P14", workflow: "W3 (Litigation)", specificPain: "Inability to quickly search older bank legal precedents when handling new litigation suits", whoFeelsIt: "Litigation Manager", frequency: "Weekly", severity: "Med", currentWorkaround: "Searching local network drives and shared folders", score: 36, rank: 8, mvpFocus: false },
  { code: "P4", workflow: "W2 (Regulatory)", specificPain: "Missing compliance timelines due to delay in analyzing complex federal regulatory updates", whoFeelsIt: "Compliance Head", frequency: "Monthly", severity: "Med", currentWorkaround: "Paying external consultancies to summarize updates", score: 36, rank: 9, mvpFocus: false },
  { code: "P7", workflow: "W3 (Litigation)", specificPain: "Lack of visibility into panel law firms' performance, case status, and billing SLA compliance", whoFeelsIt: "Head of Legal Operations", frequency: "Monthly", severity: "Med", currentWorkaround: "Follow-up phone calls and monthly Excel reporting", score: 18, rank: 10, mvpFocus: false }
];

export const PRODUCT_BACKLOG: BacklogItem[] = [
  { id: "F1", featureName: "Secure Local Docker VPC Deployment", painPointAddressed: "Data Safety / IT Security", effort: "S", priority: "Must-have", phase: "MVP (Phase 1)" },
  { id: "F2", featureName: "PACER & State Docket Scraping Engine", painPointAddressed: "P5 (Missing Court Dates)", effort: "M", priority: "Must-have", phase: "MVP (Phase 1)" },
  { id: "F3", featureName: "Side-by-Side Playbook Deviation Highlighter", painPointAddressed: "P1 (Contract Markups)", effort: "M", priority: "Must-have", phase: "MVP (Phase 1)" },
  { id: "F4", featureName: "Standard Contract Deviation Report Exporter", painPointAddressed: "P1, P2 (Deviation Risks)", effort: "S", priority: "Must-have", phase: "MVP (Phase 1)" },
  { id: "F5", featureName: "Coordinate-Level Grounded Citation Ledger", painPointAddressed: "Trust / Zero Hallucination", effort: "M", priority: "Must-have", phase: "MVP (Phase 1)" },
  { id: "F6", featureName: "Semantic Search across Federal Regulatory Database", painPointAddressed: "P3 (Regulatory Audits)", effort: "L", priority: "Should-have", phase: "Phase 2" },
  { id: "F7", featureName: "Panel Counsel Billing Reconciliation Engine", painPointAddressed: "P11 (Outside Counsel Fees)", effort: "M", priority: "Could-have", phase: "Phase 3" },
  { id: "F8", featureName: "Regional Language OCR Parsing (e.g. Spanish/Hindi)", painPointAddressed: "P5 (Regional Court Orders)", effort: "L", priority: "Should-have", phase: "Phase 2" },
  { id: "F9", featureName: "Automated Dispute Written Statement Generator", painPointAddressed: "P6 (Dispute Drafting)", effort: "M", priority: "Should-have", phase: "Phase 2" },
  { id: "F10", featureName: "Human-in-the-Loop Approve-Before-Act Controls", painPointAddressed: "Safety & Reliability", effort: "S", priority: "Must-have", phase: "MVP (Phase 1)" },
  { id: "F11", featureName: "Core Banking Ledger DB Direct Sync", painPointAddressed: "Integration", effort: "L", priority: "Won't-have", phase: "Phase 4" },
  { id: "F12", featureName: "Custom Contract Playbook Builder for Legal Managers", painPointAddressed: "P1 (Custom Rules)", effort: "M", priority: "Should-have", phase: "Phase 2" },
  { id: "F13", featureName: "Audit Trail Logger for Regulatory Compliance", painPointAddressed: "P3, OCC 2011-12", effort: "S", priority: "Must-have", phase: "MVP (Phase 1)" },
  { id: "F14", featureName: "Automated Land Title Chain Reconstruction", painPointAddressed: "P8 (Title Deeds)", effort: "L", priority: "Could-have", phase: "Phase 3" },
  { id: "F15", featureName: "Internal FAQ Bot for Business Unit Queries", painPointAddressed: "P10 (Inbox Clutter)", effort: "M", priority: "Could-have", phase: "Phase 3" },
  { id: "F16", featureName: "Real-time SMS & Calendar Hearing Notifications", painPointAddressed: "P5 (Hearing Alerts)", effort: "S", priority: "Should-have", phase: "Phase 2" },
  { id: "F17", featureName: "Dynamic Vector Database Sync with Federal Register", painPointAddressed: "P3 (Live Reg Updates)", effort: "M", priority: "Should-have", phase: "Phase 2" },
  { id: "F18", featureName: "Single Sign-On (SSO / Okta) Integration", painPointAddressed: "Enterprise Security", effort: "S", priority: "Should-have", phase: "Phase 2" },
  { id: "F19", featureName: "Matter Management Kanban Dashboard", painPointAddressed: "W5 (Legal Ops Workflow)", effort: "M", priority: "Could-have", phase: "Phase 3" },
  { id: "F20", featureName: "Real-Time Collaborative Document Markup Suite", painPointAddressed: "W1 (Negotiation)", effort: "L", priority: "Won't-have", phase: "Phase 4" }
];

export const PERSONAS: StakeholderPersona[] = [
  { title: "Chief Legal Officer (CLO) / General Counsel", workflowsOwned: "W1 (Transactional), W3 (Litigation), W4 (Risk), W5 (Ops)", keyMotivation: "Lower outside counsel billings, shorten contract turnarounds, prevent major litigation defaults.", successMetric: "Average contract cycle time; annual law firm fee spend reduction.", primaryFear: "A missed court date or contract oversight resulting in multi-million-dollar liability." },
  { title: "Head of Litigation", workflowsOwned: "W3 (Litigation & Dispute)", keyMotivation: "Prevent ex-parte default judgments, track PACER dockets, optimize panel lawyers.", successMetric: "Case resolution rate; percentage of dates tracked with zero manual error.", primaryFear: "An intern missing a court docket filing, leading to an automated default judgment." },
  { title: "Chief Compliance Officer (CCO)", workflowsOwned: "W2 (Regulatory & Compliance)", keyMotivation: "Maintain clean regulatory audits with OCC/Fed; update internal credit manuals.", successMetric: "Number of audit MRAs per quarter; speed of regulatory circular implementation.", primaryFear: "Getting fined by regulators for non-compliance with a new circular." },
  { title: "Chief Risk Officer (CRO)", workflowsOwned: "W4 (Risk & Advisory)", keyMotivation: "Standardize risk assessments; restrict data access to secure local networks.", successMetric: "Zero data residency audit failures; zero PII data leaks to public LLMs.", primaryFear: "Bank customer data leaking to third-party public AI APIs." },
  { title: "Head of Legal Operations", workflowsOwned: "Head of Legal Operations / COO", keyMotivation: "Streamline legal tech tools, verify outside counsel bills, manage intake tickets.", successMetric: "User adoption rates; software ROI; SLA compliance.", primaryFear: "Purchasing expensive software that the internal legal team refuses to adopt." }
];

export const SALES_STAGES: SalesStage[] = [
  { stage: "Stage 1", name: "Discovery & Qualification", activity: "Identify bank size, legal team setup, and core pain points (Transactional vs. Litigation).", exitCriteria: "CLO agrees to schedule a technical product demo with their team.", duration: "1 - 2 weeks" },
  { stage: "Stage 2", name: "Technical Demo & Scoping", activity: "Demonstrate template deviation checker and PACER Court Scout. Share security package.", exitCriteria: "Agreement on a 30-day paid pilot scope and signed pilot agreement.", duration: "2 - 3 weeks" },
  { stage: "Stage 3", name: "Paid Pilot (30 Days)", activity: "Deploy Lyzr BFSI inside bank sandbox. Upload approved playbooks and active case list.", exitCriteria: "System achieves 70%+ daily active usage with 95%+ date scraping accuracy.", duration: "4 weeks (Fixed)" },
  { stage: "Stage 4", name: "IT Security & Compliance Audit", activity: "Security review by bank's IT Risk team. Verify data isolation, logging, and access control.", exitCriteria: "Formally signed-off IT security compliance approval.", duration: "3 - 6 weeks" },
  { stage: "Stage 5", name: "Enterprise MSA & Commercials", activity: "Finalize seat licensing tiers, SLA response times, support terms, and pricing.", exitCriteria: "Signed Master Services Agreement (MSA) and Purchase Order (PO).", duration: "2 - 4 weeks" },
  { stage: "Stage 6", name: "Customer Success & Expansion", activity: "Onboard remaining legal team members; monitor usage and pitch secondary modules.", exitCriteria: "Expand user seats by 50% or secure secondary module upsell.", duration: "Continuous" }
];

export const COMMERCIAL_TIERS: CommercialTier[] = [
  { name: "Starter Tier (Boutiques / Neobanks)", target: "Legal teams of 5-10 users", scope: "Litigations up to 500 cases; standard contract playbooks", price: "$15,000 / year (SaaS or Private Cloud)", support: "Email & Slack support (24hr SLA)" },
  { name: "Growth Tier (Regional Banks)", target: "Legal teams of 10-25 users", scope: "Litigations up to 2,000 cases; custom playbooks; SSO integration", price: "$45,000 - $95,000 / year (Private AWS/Azure VPC)", support: "Dedicated account manager (4hr SLA)" },
  { name: "Enterprise Tier (Large National Banks)", target: "Legal teams of 25-80+ users", scope: "Unlimited cases; multiple playbooks; Federal Policy Auditor; local server install", price: "$150,000 - $250,000+ / year (On-Prem / Air-Gapped)", support: "24/7 dedicated support (1hr SLA)" }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "MVP & Core Verification",
    timeline: "0 - 3 Months",
    goal: "Validate core value proposition and secure initial banking reference accounts.",
    features: ["Local Docker VPC deployment", "PACER docket daily scraping engine", "Template deviation highlighting", "Grounded citation ledger"],
    metrics: "70%+ user adoption; zero missed court dates; under 2 minutes per deviation check.",
    businessMilestone: "Complete 3 bank pilots; secure first ARR contract."
  },
  {
    phase: "Phase 2",
    title: "Platform Expansion",
    timeline: "3 - 9 Months",
    goal: "Expand user seats and introduce compliance auditing tools.",
    features: ["Federal Regulatory Policy Auditor", "Regional language OCR engine", "SSO integration", "Custom playbook builder"],
    metrics: "50% increase in active users; under 30 minutes to review regulatory circulars.",
    businessMilestone: "Standardize sales sequences; convert 5 additional banks."
  },
  {
    phase: "Phase 3",
    title: "Segment Diversification",
    timeline: "9 - 18 Months",
    goal: "Expand from banking to corporate law firms and consultancies.",
    features: ["Panel Counsel billing auditing", "Automated title chain reconstruction", "Internal legal FAQ chatbot"],
    metrics: "Under 2 hours to summarize land titles; billing audit error identification > 95%.",
    businessMilestone: "Launch self-serve SaaS portal; acquire 20 corporate law firms."
  },
  {
    phase: "Phase 4",
    title: "Enterprise Ecosystem",
    timeline: "18 Months+",
    goal: "Establish Lyzr BFSI as the standard legal operations infrastructure.",
    features: ["Automated document ingestion API integrations", "Advanced collaborative editing suite", "Multi-tenant compliance networks"],
    metrics: "Over 100 enterprise customers; 95% retention rate.",
    businessMilestone: "International expansion scoping (UK/EU markets)."
  }
];

export const BANKING_DIVISIONS: BankingDivision[] = [
  {
    id: "lending",
    name: "1. Lending & Credit Operations",
    intensity: "Maximum",
    legalNeed: "Title search, LSTA contract markups, UCC-1 lien filings, foreclosure dockets",
    businessImpact: "Critical (Prevents lien loss & multi-million-dollar deal defaults)",
    subcategories: [
      { title: "Category 1.2: Individual Secured Lending (Mortgages)", legalWork: "Title search, Schedule B exception resolution, mortgage deed recording, judicial foreclosure PACER dockets", value: "Prevents missing tax liens or invalidating bank claims on property upon default" },
      { title: "Category 1.3: SME Corporate Unsecured Lending", legalWork: "Entity authority verification, LSTA/LMA contract drafting, negative covenant audits", value: "Primary legal protection on uncollateralized loan facilities" },
      { title: "Category 1.4: Commercial Real Estate (CRE) & Syndicated Debt", legalWork: "UBO offshore tracing, Phase 1 ESA environmental legal audits, bespoke syndicated debt contracts, Companies House / UCC-1 filings", value: "Maximum strategic impact ($10M-$500M+ per transaction)" }
    ]
  },
  {
    id: "deposits",
    name: "2. Deposits & Retail Branch Ops",
    intensity: "High",
    legalNeed: "Court attachment/garnishment audits, deceased account probate verification",
    businessImpact: "High Value (Prevents bank liability for unpaid customer taxes & heirship lawsuits)",
    subcategories: [
      { title: "Category 2.2: Legal Garnishment & Levies", legalWork: "Auditing court orders, calculating exempt cash, managing mandatory hold windows", value: "Avoids bank legal liability for customer tax obligations" },
      { title: "Category 2.3: Deceased Account Probate", legalWork: "Auditing legal wills, letters of administration, right-of-survivorship rules", value: "Prevents multi-claimant family lawsuits" }
    ]
  },
  {
    id: "treasury",
    name: "3. Treasury & Capital Markets",
    intensity: "Maximum",
    legalNeed: "ISDA Master Agreements, Credit Support Annex (CSA) margin disputes, GMRA repo contracts",
    businessImpact: "Critical (Prevents multi-million-dollar derivative closeout losses)",
    subcategories: [
      { title: "Category 3.2: Interest Rate Derivatives (ISDA Ops)", legalWork: "Negotiating ISDA Master Agreements & CSAs, daily margin call calculation disputes", value: "Protects against catastrophic derivative market crash losses" },
      { title: "Category 3.3: Interbank Repo Operations", legalWork: "Reviewing GMRA master contracts & collateral haircuts", value: "Secures short-term interbank cash borrowing" }
    ]
  },
  {
    id: "grc",
    name: "4. Corporate GRC & Compliance",
    intensity: "Existential",
    legalNeed: "Regulator exam defense (MRA findings), OCC 2023-17 cloud vendor risk (TPRM), e-Discovery",
    businessImpact: "Existential (Protects bank operating charter & prevents multi-million fines)",
    subcategories: [
      { title: "Category 4.1: Regulatory Audit Defense", legalWork: "Formulating legal responses to MRA findings, negotiating consent decrees", value: "Existential impact on banking license and charter" },
      { title: "Category 4.2: Vendor Cloud Risk (TPRM)", legalWork: "Drafting OCC 2023-17 compliance clauses, data breach liability terms", value: "Prevents vendor security breach fines and operational outages" }
    ]
  },
  {
    id: "trade",
    name: "5. Trade Finance & Transactions",
    intensity: "High",
    legalNeed: "UCP 600 document discrepancy checks, Bank Guarantees (URDG 758)",
    businessImpact: "High Value (Prevents payouts on defective shipping bills)",
    subcategories: [
      { title: "Category 5.1: Letter of Credit (LC) Ops", legalWork: "UCP 600 trade law compliance checks, issuing formal legal notices of refusal for defective shipping bills", value: "Prevents paying foreign banks on fraudulent or defective shipping papers" }
    ]
  },
  {
    id: "investment",
    name: "6. Investment Banking & M&A",
    intensity: "Maximum",
    legalNeed: "Virtual Data Room (VDR) due diligence, SPAs, HSR antitrust filings, Bond Indentures",
    businessImpact: "Maximum / Strategic (Uncovers hidden target company liabilities)",
    subcategories: [
      { title: "Category 6.1: M&A Advisory & Due Diligence", legalWork: "VDR contract audits, drafting SPAs, antitrust regulatory filings", value: "Identifies hidden legal liabilities before closing multi-hundred-million acquisitions" }
    ]
  },
  {
    id: "fincrime",
    name: "7. Financial Crime Compliance",
    intensity: "Existential",
    legalNeed: "Offshore UBO shell unwrapping, Suspicious Activity Reporting (SAR) narratives",
    businessImpact: "Critical (Avoids catastrophic AML/Sanctions fines & criminal liability)",
    subcategories: [
      { title: "Category 7.1: Corporate UBO Tracing", legalWork: "Unwrapping offshore shell company webs, trust deed audits, PEP clearances", value: "Prevents onboarding sanctioned terrorists or political figures" }
    ]
  }
];

export const OBJECTIONS: ObjectionItem[] = [
  { id: "security", title: "1. IT Security & Data Privacy", persona: "Chief Risk Officer / Head of IT Security", objection: "We cannot allow our legal documents or customer records to leave our firewall for LLM processing.", response: "Lyzr BFSI runs 100% inside your bank's secure network perimeter (AWS VPC or on-premise container cluster). No document, query, or metadata ever leaves your secure firewall. We do not use public APIs like OpenAI." },
  { id: "hallucination", title: "2. LLM Hallucination Risk", persona: "Chief Legal Officer (CLO)", objection: "AI models hallucinate. If our team misses a clause deviation in a commercial contract, financial damage is massive.", response: "Lyzr BFSI operates on a strict 'Approve-Before-Act' paradigm paired with a Grounded Citation Ledger. Every identified deviation or compliance risk points directly to exact page and line coordinates in your approved playbook. If information is missing, the engine explicitly abstains." },
  { id: "tracking", title: "3. Court Date Scraping Reliability", persona: "Head of Litigation", objection: "We track thousands of foreclosure cases on PACER and state court dockets. If scraping fails, we could miss a critical court date.", response: "Our Court Scout engine uses redundant indexing pipelines with automated health monitoring. If a court portal updates its schema, the system alerts legal ops immediately and falls back to manual verification alerts, eliminating silent failures." },
  { id: "procurement", title: "4. Software Abandonment & Friction", persona: "Head of Legal Operations / Procurement", objection: "We don't want to buy another complex platform that our legal team abandons after a month.", response: "Our pilots begin with a paid 30-day trial focused on a single high-pain workflow (e.g., eCourts date tracking or commercial loan markups). We track daily active usage during the pilot and only transition to an enterprise license once user adoption hits 70%+." }
];

export const USE_CASES: UseCaseItem[] = [
  { id: "uc-1", divisionId: "lending", divisionName: "Lending & Credit", useCase: "Commercial Loan Agreement Deviation Audit", description: "Compares third-party draft loan contracts against LSTA/LMA bank playbooks; highlights deviation risks in real-time.", targetRole: "Transaction Legal Manager / Credit Officer", acvBand: "$100K - $150K", priority: "P1", connectors: ["Fiserv", "Jack Henry", "SharePoint", "nCino"] },
  { id: "uc-2", divisionId: "lending", divisionName: "Lending & Credit", useCase: "Schedule B Title Clearance & Exception Audit", description: "Extracts title report risks (prior mortgages, tax liens, easements) and drafts clearance checklists for mortgage closing.", targetRole: "Mortgage Legal Specialist / Title Officer", acvBand: "$75K - $125K", priority: "P1", connectors: ["Encompass", "County Land Records", "OnBase"] },
  { id: "uc-3", divisionId: "lending", divisionName: "Lending & Credit", useCase: "PACER Foreclosure Docket Sync & Court Scout", description: "Scans state and federal court dockets daily for foreclosure hearing updates, statutory cure countdowns, and default notices.", targetRole: "Litigation Manager / Panel Counsel Liaison", acvBand: "$80K - $150K", priority: "P1", connectors: ["PACER", "State Court API", "Outlook/Google Calendar"] },
  { id: "uc-4", divisionId: "deposits", divisionName: "Deposits & Branch Ops", useCase: "Legal Garnishment & Tax Levy Execution Audit", description: "Ingests court attachment orders, verifies legally exempt vs. non-exempt cash, and enforces mandatory hold timelines.", targetRole: "Branch Legal Ops Lead / Compliance Auditor", acvBand: "$75K - $120K", priority: "P2", connectors: ["Core Ledger (FIS/Fiserv)", "Court Filing API"] },
  { id: "uc-5", divisionId: "grc", divisionName: "Corporate GRC", useCase: "Regulator Circular & MRA Gap Auditor", description: "Audits internal policy manuals when new OCC, Fed, or CFPB circulars are released; flags non-compliant clauses.", targetRole: "Chief Compliance Officer (CCO) / Audit Lead", acvBand: "$125K - $200K", priority: "P1", connectors: ["Federal Reserve Feed", "OCC Circulars", "VPC Vector Index"] },
  { id: "uc-6", divisionId: "grc", divisionName: "Corporate GRC", useCase: "Vendor Cloud Risk & TPRM Contract Review", description: "Inspects vendor software agreements for OCC 2023-17 data security compliance, SOC 2 alignment, and breach liability caps.", targetRole: "Head of TPRM / General Counsel", acvBand: "$100K - $175K", priority: "P2", connectors: ["ServiceNow", "Ironclad", "Salesforce"] },
  { id: "uc-7", divisionId: "fincrime", divisionName: "Financial Crime (AML/KYC)", useCase: "Offshore Shell UBO Structure Unwrapping", description: "Traces multi-layered offshore holding company ownership graphs to identify natural persons holding >10% voting rights.", targetRole: "BSA Officer / FinCrime Analyst", acvBand: "$150K - $250K", priority: "P1", connectors: ["LexisNexis WorldCheck", "State Registries", "Verafin"] },
  { id: "uc-8", divisionId: "treasury", divisionName: "Treasury & Derivatives", useCase: "ISDA Master Agreement & CSA Margin Review", description: "Audits counterparty derivative master contracts and variation margin rules to mitigate closeout risk.", targetRole: "Head of Treasury Operations / Legal Counsel", acvBand: "$150K - $250K", priority: "P3", connectors: ["Bloomberg Terminal", "ISDA Digital Register"] }
];
