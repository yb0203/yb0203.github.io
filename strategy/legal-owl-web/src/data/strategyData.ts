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

export const BANKING_DIVISIONS: BankingDivision[] = [
  {
    id: "lending",
    name: "1. Lending & Credit Operations",
    intensity: "Maximum",
    legalNeed: "Title search, LSTA contract markups, UCC-1 lien filings, foreclosure dockets",
    businessImpact: "Critical (Prevents lien loss & multi-million-dollar deal defaults)",
    subcategories: [
      {
        title: "Category 1.2: Individual Secured Lending (Mortgages)",
        legalWork: "Title search, Schedule B exception resolution, mortgage deed recording, judicial foreclosure PACER dockets",
        value: "Prevents missing tax liens or invalidating bank claims on property upon default"
      },
      {
        title: "Category 1.3: SME Corporate Unsecured Lending",
        legalWork: "Entity authority verification, LSTA/LMA contract drafting, negative covenant audits",
        value: "Primary legal protection on uncollateralized loan facilities"
      },
      {
        title: "Category 1.4: Commercial Real Estate (CRE) & Syndicated Debt",
        legalWork: "UBO offshore tracing, Phase 1 ESA environmental legal audits, bespoke syndicated debt contracts, Companies House / UCC-1 filings",
        value: "Maximum strategic impact ($10M-$500M+ per transaction)"
      }
    ]
  },
  {
    id: "deposits",
    name: "2. Deposits & Retail Branch Ops",
    intensity: "High",
    legalNeed: "Court attachment/garnishment audits, deceased account probate verification",
    businessImpact: "High Value (Prevents bank liability for unpaid customer taxes & heirship lawsuits)",
    subcategories: [
      {
        title: "Category 2.2: Legal Garnishment & Levies",
        legalWork: "Auditing court orders, calculating exempt cash, managing mandatory hold windows",
        value: "Avoids bank legal liability for customer tax obligations"
      },
      {
        title: "Category 2.3: Deceased Account Probate",
        legalWork: "Auditing legal wills, letters of administration, right-of-survivorship rules",
        value: "Prevents multi-claimant family lawsuits"
      }
    ]
  },
  {
    id: "treasury",
    name: "3. Treasury & Capital Markets",
    intensity: "Maximum",
    legalNeed: "ISDA Master Agreements, Credit Support Annex (CSA) margin disputes, GMRA repo contracts",
    businessImpact: "Critical (Prevents multi-million-dollar derivative closeout losses)",
    subcategories: [
      {
        title: "Category 3.2: Interest Rate Derivatives (ISDA Ops)",
        legalWork: "Negotiating ISDA Master Agreements & CSAs, daily margin call calculation disputes",
        value: "Protects against catastrophic derivative market crash losses"
      },
      {
        title: "Category 3.3: Interbank Repo Operations",
        legalWork: "Reviewing GMRA master contracts & collateral haircuts",
        value: "Secures short-term interbank cash borrowing"
      }
    ]
  },
  {
    id: "grc",
    name: "4. Corporate GRC & Compliance",
    intensity: "Existential",
    legalNeed: "Regulator exam defense (MRA findings), OCC 2023-17 cloud vendor risk (TPRM), e-Discovery",
    businessImpact: "Existential (Protects bank operating charter & prevents multi-million fines)",
    subcategories: [
      {
        title: "Category 4.1: Regulatory Audit Defense",
        legalWork: "Formulating legal responses to MRA findings, negotiating consent decrees",
        value: "Existential impact on banking license and charter"
      },
      {
        title: "Category 4.2: Vendor Cloud Risk (TPRM)",
        legalWork: "Drafting OCC 2023-17 compliance clauses, data breach liability terms",
        value: "Prevents vendor security breach fines and operational outages"
      }
    ]
  },
  {
    id: "trade",
    name: "5. Trade Finance & Transactions",
    intensity: "High",
    legalNeed: "UCP 600 document discrepancy checks, Bank Guarantees (URDG 758)",
    businessImpact: "High Value (Prevents payouts on defective shipping bills)",
    subcategories: [
      {
        title: "Category 5.1: Letter of Credit (LC) Ops",
        legalWork: "UCP 600 trade law compliance checks, issuing formal legal notices of refusal for defective shipping bills",
        value: "Prevents paying foreign banks on fraudulent or defective shipping papers"
      }
    ]
  },
  {
    id: "investment",
    name: "6. Investment Banking & M&A",
    intensity: "Maximum",
    legalNeed: "Virtual Data Room (VDR) due diligence, SPAs, HSR antitrust filings, Bond Indentures",
    businessImpact: "Maximum / Strategic (Uncovers hidden target company liabilities)",
    subcategories: [
      {
        title: "Category 6.1: M&A Advisory & Due Diligence",
        legalWork: "VDR contract audits, drafting SPAs, antitrust regulatory filings",
        value: "Identifies hidden legal liabilities before closing multi-hundred-million acquisitions"
      }
    ]
  },
  {
    id: "fincrime",
    name: "7. Financial Crime Compliance",
    intensity: "Existential",
    legalNeed: "Offshore UBO shell unwrapping, Suspicious Activity Reporting (SAR) narratives",
    businessImpact: "Critical (Avoids catastrophic AML/Sanctions fines & criminal liability)",
    subcategories: [
      {
        title: "Category 7.1: Corporate UBO Tracing",
        legalWork: "Unwrapping offshore shell company webs, trust deed audits, PEP clearances",
        value: "Prevents onboarding sanctioned terrorists or political figures"
      }
    ]
  }
];

export const OBJECTIONS: ObjectionItem[] = [
  {
    id: "security",
    title: "1. IT Security & Data Privacy",
    persona: "Chief Risk Officer / Head of IT Security",
    objection: "We cannot allow our legal documents or customer records to leave our firewall for LLM processing.",
    response: "Legal Owl runs 100% inside your bank's secure network perimeter (AWS VPC or on-premise container cluster). No document, query, or metadata ever leaves your secure firewall. We do not use public APIs like OpenAI."
  },
  {
    id: "hallucination",
    title: "2. LLM Hallucination Risk",
    persona: "Chief Legal Officer (CLO)",
    objection: "AI models hallucinate. If our team misses a clause deviation in a commercial contract, financial damage is massive.",
    response: "Legal Owl operates on a strict 'Approve-Before-Act' paradigm paired with a Grounded Citation Ledger. Every identified deviation or compliance risk points directly to exact page and line coordinates in your approved playbook. If information is missing, the engine explicitly abstains."
  },
  {
    id: "tracking",
    title: "3. Court Date Scraping Reliability",
    persona: "Head of Litigation",
    objection: "We track thousands of foreclosure cases on PACER and state court dockets. If scraping fails, we could miss a critical court date.",
    response: "Our Court Scout engine uses redundant indexing pipelines with automated health monitoring. If a court portal updates its schema, the system alerts legal ops immediately and falls back to manual verification alerts, eliminating silent failures."
  },
  {
    id: "procurement",
    title: "4. Software Abandonment & Friction",
    persona: "Head of Legal Operations / Procurement",
    objection: "We don't want to buy another complex platform that our legal team abandons after a month.",
    response: "Our pilots begin with a paid 30-day trial focused on a single high-pain workflow (e.g., eCourts date tracking or commercial loan markups). We track daily active usage during the pilot and only transition to an enterprise license once user adoption hits 70%+."
  }
];

export const USE_CASES: UseCaseItem[] = [
  {
    id: "uc-1",
    divisionId: "lending",
    divisionName: "Lending & Credit",
    useCase: "Commercial Loan Agreement Deviation Audit",
    description: "Compares third-party draft loan contracts against LSTA/LMA bank playbooks; highlights deviation risks in real-time.",
    targetRole: "Transaction Legal Manager / Credit Officer",
    acvBand: "$100K - $150K",
    priority: "P1",
    connectors: ["Fiserv", "Jack Henry", "SharePoint", "nCino"]
  },
  {
    id: "uc-2",
    divisionId: "lending",
    divisionName: "Lending & Credit",
    useCase: "Schedule B Title Clearance & Exception Audit",
    description: "Extracts title report risks (prior mortgages, tax liens, easements) and drafts clearance checklists for mortgage closing.",
    targetRole: "Mortgage Legal Specialist / Title Officer",
    acvBand: "$75K - $125K",
    priority: "P1",
    connectors: ["Encompass", "County Land Records", "OnBase"]
  },
  {
    id: "uc-3",
    divisionId: "lending",
    divisionName: "Lending & Credit",
    useCase: "PACER Foreclosure Docket Sync & Court Scout",
    description: "Scans state and federal court dockets daily for foreclosure hearing updates, statutory cure countdowns, and default notices.",
    targetRole: "Litigation Manager / Panel Counsel Liaison",
    acvBand: "$80K - $150K",
    priority: "P1",
    connectors: ["PACER", "State Court API", "Outlook/Google Calendar"]
  },
  {
    id: "uc-4",
    divisionId: "deposits",
    divisionName: "Deposits & Branch Ops",
    useCase: "Legal Garnishment & Tax Levy Execution Audit",
    description: "Ingests court attachment orders, verifies legally exempt vs. non-exempt cash, and enforces mandatory hold timelines.",
    targetRole: "Branch Legal Ops Lead / Compliance Auditor",
    acvBand: "$75K - $120K",
    priority: "P2",
    connectors: ["Core Ledger (FIS/Fiserv)", "Court Filing API"]
  },
  {
    id: "uc-5",
    divisionId: "grc",
    divisionName: "Corporate GRC",
    useCase: "Regulator Circular & MRA Gap Auditor",
    description: "Audits internal policy manuals when new OCC, Fed, or CFPB circulars are released; flags non-compliant clauses.",
    targetRole: "Chief Compliance Officer (CCO) / Audit Lead",
    acvBand: "$125K - $200K",
    priority: "P1",
    connectors: ["Federal Reserve Feed", "OCC Circulars", "VPC Vector Index"]
  },
  {
    id: "uc-6",
    divisionId: "grc",
    divisionName: "Corporate GRC",
    useCase: "Vendor Cloud Risk & TPRM Contract Review",
    description: "Inspects vendor software agreements for OCC 2023-17 data security compliance, SOC 2 alignment, and breach liability caps.",
    targetRole: "Head of TPRM / General Counsel",
    acvBand: "$100K - $175K",
    priority: "P2",
    connectors: ["ServiceNow", "Ironclad", "Salesforce"]
  },
  {
    id: "uc-7",
    divisionId: "fincrime",
    divisionName: "Financial Crime (AML/KYC)",
    useCase: "Offshore Shell UBO Structure Unwrapping",
    description: "Traces multi-layered offshore holding company ownership graphs to identify natural persons holding >10% voting rights.",
    targetRole: "BSA Officer / FinCrime Analyst",
    acvBand: "$150K - $250K",
    priority: "P1",
    connectors: ["LexisNexis WorldCheck", "State Registries", "Verafin"]
  },
  {
    id: "uc-8",
    divisionId: "treasury",
    divisionName: "Treasury & Derivatives",
    useCase: "ISDA Master Agreement & CSA Margin Review",
    description: "Audits counterparty derivative master contracts and variation margin rules to mitigate closeout risk.",
    targetRole: "Head of Treasury Operations / Legal Counsel",
    acvBand: "$150K - $250K",
    priority: "P3",
    connectors: ["Bloomberg Terminal", "ISDA Digital Register"]
  }
];
