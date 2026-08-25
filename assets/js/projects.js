/* ==========================================================================
   YASHVI BANSAL — PROJECTS & CASE STUDIES DATABASE
   Structured data for project cards, deep-dive modal rendering & interactive lenses
   ========================================================================== */

const PROJECTS_DATA = [
  {
    id: "legal-owl",
    title: "Legal Owl",
    tagline: "AI-Native Legal Workflow Platform for Litigators",
    category: "ai-product",
    categoryLabel: "AI Agent Platform / 0-to-1",
    icon: "⚖️",
    timeframe: "June 2026 – Present",
    summary: "Architected a 4-pillar legal-tech platform integrating live eCourts India APIs, automated CNR tracking, nightly event diffing, and schema-locked multi-agents with zero-hallucination source span citation ledgers.",
    keyMetrics: [
      { label: "Court Sync", value: "Live eCourts API CNR Tracking" },
      { label: "Safety", value: "Approve-Before-Act Multi-Agent Gate" },
      { label: "Accuracy", value: "Zero-Hallucination Citation Ledger" }
    ],
    tags: ["TypeScript", "Next.js", "Supabase", "pgvector", "Vercel AI SDK", "eCourts India API", "Multi-Agent"],
    githubUrl: "https://github.com/yb0203/LegalOwl",
    liveDemoUrl: "",
    problemStatement: "Solo litigators in India manage hundreds of active cases simultaneously across fragmented eCourts portals. Missing court order uploads, limitation dates, or case stage updates creates massive legal liabilities. Existing AI tools hallucinate citations and cannot be trusted in high-stakes legal workflows.",
    solution: "Legal Owl combines automated court registry polling with a strict 'approve-before-act' multi-agent orchestrator. The assistant strictly abstains from answering unless facts are grounded to verbatim bounding-box spans within indexed case files.",
    architecture: `┌─────────────────────────────────────────────────────────────┐
│                    LEGAL OWL ARCHITECTURE                   │
├─────────────────────────────────────────────────────────────┤
│  [eCourts India API] ──► [Court Scout Agent (CNR Sync)]     │
│                                  │                          │
│                                  ▼                          │
│  [Case Files (PDF)]  ──► [pgvector Chunk & Ledger Index]    │
│                                  │                          │
│                                  ▼                          │
│  [Multi-Agent Router] ─┬► [Intake Registrar]               │
│                        ├► [Limitation Clerk]                │
│                        └► [Citation-Grounded Assistant]     │
│                                  │                          │
│                     [Approve-Before-Act Gate]               │
│                                  │                          │
│                                  ▼                          │
│                     [Litigator Action Board]                │
└─────────────────────────────────────────────────────────────┘`,
    productDecisions: [
      "Designed an explicit 'Approve-Before-Act' primitive: AI agents propose drafting/filing motions as staging drafts; actions are never autonomously committed without litigator sign-off.",
      "Implemented a strict Citation Ledger: Responses include exact document coordinate links. If confidence falls below 95% grounding, the agent explicitly returns a refusal state.",
      "Structured nightly court diffing: Litigators receive concise morning briefings highlighting cause-list position changes and fresh order PDFs."
    ]
  },
  {
    id: "gitabae",
    title: "GitaBae",
    tagline: "Contextual RAG AI Wisdom Chatbot with Multi-Turn Memory",
    category: "ai-product",
    categoryLabel: "GenAI & RAG / 0-to-1",
    icon: "🕉️",
    timeframe: "Jan 2026",
    summary: "Built an end-to-end RAG application delivering verse-grounded philosophical insights, featuring conversational multi-turn context retention, Pinecone vector search, and robust AI trust & safety guardrails.",
    keyMetrics: [
      { label: "Grounding", value: "Verse-Anchored Semantic RAG" },
      { label: "Safety", value: "Crisis Detection & Jailbreak Routing" },
      { label: "Memory", value: "Multi-Turn Conversational State" }
    ],
    tags: ["Python", "LangChain", "Pinecone", "OpenAI", "Streamlit", "Trust & Safety", "RAG"],
    githubUrl: "https://github.com/yb0203/GitaBae",
    liveDemoUrl: "",
    problemStatement: "Sacred philosophical texts require high fidelity and deep cultural context. Standard LLM chatbots frequently hallucinate philosophical interpretations, mix up verse commentary, or respond inappropriately to vulnerable user inquiries.",
    solution: "Engineered a dual-pipeline RAG engine combining semantic chapter-verse chunking with strict conversational guardrails. Included automated crisis intervention routing to helpline resources when emotional distress is detected.",
    architecture: `┌─────────────────────────────────────────────────────────────┐
│                    GITABAE RAG & SAFETY LOOP                │
├─────────────────────────────────────────────────────────────┤
│  [User Query] ──► [Prompt Injection & Crisis Filter]        │
│                              │ (Passed)                     │
│                              ▼                              │
│  [Hybrid Retrieval] ──► [Pinecone Verse Embeddings + Meta]   │
│                              │                              │
│                              ▼                              │
│  [Context Formatter] ──► [LangChain Multi-Turn Memory]      │
│                              │                              │
│                              ▼                              │
│  [LLM Synthesis] ──► [Semantic Content Moderation Filter]   │
│                              │                              │
│                              ▼                              │
│                     [Grounded Response]                     │
└─────────────────────────────────────────────────────────────┘`,
    productDecisions: [
      "Selected Pinecone hybrid metadata filtering to ensure retrieved wisdom is strictly attributed to authenticated verses rather than arbitrary internet commentary.",
      "Built multi-tier Trust & Safety guardrails: Semantic content moderation, prompt injection barriers, and crisis keyword routing.",
      "Optimized for conversational continuity: Maintained sliding context windows while minimizing token cost and latency."
    ]
  },
  {
    id: "vibe-check",
    title: "Vibe Check",
    tagline: "Natural Language Git Server via Model Context Protocol",
    category: "developer-tools",
    categoryLabel: "MCP Server / DevEx",
    icon: "⚡",
    timeframe: "May 2025",
    summary: "Designed a Model Context Protocol (MCP) server enabling non-technical PMs, designers, and contributors to perform complex Git operations and automated diff-to-release-notes synthesis using natural language.",
    keyMetrics: [
      { label: "Intent Parsing", value: "95% Natural Language Accuracy" },
      { label: "Productivity", value: "Automated Release Notes Generation" },
      { label: "Protocol", value: "Anthropic MCP Standard" }
    ],
    tags: ["Node.js", "Model Context Protocol", "Git API", "Prompt Engineering", "DevEx"],
    githubUrl: "https://github.com/yb0203/VibeCheck",
    liveDemoUrl: "",
    problemStatement: "Non-technical cross-functional team members (product managers, operations, UX writers) struggle with Git CLI rebases, branch divergence, and tracking changes across fast-moving release branches.",
    solution: "Created an MCP server that exposes safe Git tooling to AI clients (Claude Desktop, Cursor). Users can ask 'What changed on staging since yesterday and draft release notes for sales?' and get verified, deterministic results.",
    architecture: `┌─────────────────────────────────────────────────────────────┐
│                   VIBE CHECK MCP ARCHITECTURE               │
├─────────────────────────────────────────────────────────────┤
│  [AI Client (Claude / Cursor)] ──► [MCP Protocol Stream]    │
│                                           │                 │
│                                           ▼                 │
│  [Vibe Check Tool Registry] ──┬► [Git Diff Parser]          │
│                               ├► [Branch Health Analyzer]   │
│                               └► [Safe Commit / Merge Tool] │
│                                           │                 │
│                                           ▼                 │
│  [Deterministic Git CLI Exec] ◄─ [Sandbox Safety Wrapper]   │
└─────────────────────────────────────────────────────────────┘`,
    productDecisions: [
      "Enforced read-first and dry-run safety modes to prevent unintended branch overwrites or destructive git commands.",
      "Engineered prompt-chaining templates that summarize technical commit diffs into user-centric release announcements.",
      "Built on open Model Context Protocol standards for compatibility across next-generation AI IDEs and assistants."
    ]
  },
  {
    id: "kotak-platforms",
    title: "Enterprise Core Banking & DevEx Platforms",
    tagline: "High-Scale FinTech Infrastructure & AI Error Triage Platform",
    category: "enterprise",
    categoryLabel: "FinTech Platform / High Scale",
    icon: "🏦",
    timeframe: "August 2023 – Present",
    summary: "Led product delivery for mission-critical core cash capabilities (ISO8583/FIXML), built a centralized reporting platform reducing retrieval time by 95%, and deployed an AI agent for automated error triage.",
    keyMetrics: [
      { label: "Error Triage", value: "90% RCA Manual Effort Reduction" },
      { label: "Data Retrieval", value: "95% Latency Reduction" },
      { label: "Storage ROI", value: "99% Storage Footprint Savings" },
      { label: "AI Safety", value: "8+ OWASP Agent Vulnerabilities Prevented" }
    ],
    tags: ["Java", "Spring Boot", "DynamoDB", "ISO8583", "FIXML", "Finacle", "DeepEval", "BDD / CI/CD"],
    githubUrl: "",
    liveDemoUrl: "",
    problemStatement: "High-volume core banking transactions across legacy Finacle and modern TAS systems required multi-team alignment, strict regulatory compliance, and rapid error resolution during live financial settlement flows.",
    solution: "Spearheaded internal platform products: an ISO8583/FIXML Cash Transaction flow, an automated AI error classification agent with confidence scoring, and an org-wide BDD validation platform adopted across 5+ engineering teams.",
    architecture: `┌─────────────────────────────────────────────────────────────┐
│                 KOTAK CORE PLATFORM ECOSYSTEM               │
├─────────────────────────────────────────────────────────────┤
│  [Transaction Flow] ──► [ISO8583 / FIXML Gateway]           │
│                                   │                         │
│                                   ▼                         │
│  [Core Settlement]  ──► [Finacle Core] ◄──► [TAS Engine]     │
│                                   │                         │
│                                   ▼                         │
│  [Cross-Team Telemetry] ──► [SpringBoot + DynamoDB Platform]│
│                                   │                         │
│                                   ▼                         │
│  [AI Error Triage Agent] ──► [Confidence Score & Auto-RCA]  │
└─────────────────────────────────────────────────────────────┘`,
    productDecisions: [
      "Adopted BDD/Gherkin framework to bridge business logic directly to automated test specs, slashing build-to-validation cycles by 90%.",
      "Pioneered AI error triage: classified high-throughput log exceptions to immediately surface root causes for production on-call engineers.",
      "Instituted enterprise AI security evaluation using DeepEval, validating internal models against 100+ banking compliance metrics."
    ]
  },
  {
    id: "madison-ai-os",
    title: "Madison AI Operating System",
    tagline: "Sovereign Agentic Operating System for Enterprise BFSI",
    category: "ai-product",
    categoryLabel: "Enterprise AI Architecture",
    icon: "🏛️",
    timeframe: "2026 Strategy & Architecture",
    summary: "Comprehensive architecture for an enterprise agentic operating system in commercial banking, featuring Fed SR 11-7 compliance, private VPC harness, and human-in-the-loop co-pilot action cards.",
    keyMetrics: [
      { label: "Compliance", value: "Fed SR 11-7 MRM Audit Standard" },
      { label: "Grounding", value: "Bounding Box (x,y,w,h) Verification" },
      { label: "Target", value: "$10B–$50B+ AUM Commercial Banks" }
    ],
    tags: ["Agentic AI", "Lyzr ADK", "Superflow Approvals", "Enterprise Banking", "Fed SR 11-7"],
    githubUrl: "",
    liveDemoUrl: "",
    problemStatement: "Commercial banking workflows (commercial lending, DSCR analysis, KYC/AML, SAR drafting) are bogged down by manual PDF verification and compliance risks, while traditional AI poses hallucination and regulatory failure risks.",
    solution: "Constructed an enterprise agent architecture pairing human-in-the-loop decision cards with zero-hallucination PDF coordinate grounding, fully auditable under Federal Reserve SR 11-7 model risk management guidelines.",
    architecture: `┌─────────────────────────────────────────────────────────────┐
│                    MADISON BFSI AGENT HARNESS               │
├─────────────────────────────────────────────────────────────┤
│  [Bank Officer Interface] ◄──► [Interactive Action Cards]   │
│                                         │                   │
│                                         ▼                   │
│  [Agentic Brain (Router)] ──► [Lyzr Enterprise ADK Engine]  │
│                                         │                   │
│                                         ▼                   │
│  [Grounded Citation Viewer] ◄──► [PDF Bounding Box x,y,w,h] │
│                                         │                   │
│                                         ▼                   │
│  [Fed SR 11-7 Audit Ledger] ◄── [Deterministic Tool Exec]   │
└─────────────────────────────────────────────────────────────┘`,
    productDecisions: [
      "Mandated bounding box (x,y,w,h) coordinate mapping for any financial figure extracted from loan packages or credit memos.",
      "Engineered Superflow node approvals so agents can never trigger disbursements or account modifications without officer sign-off.",
      "Designed private VPC isolation architecture with zero outbound data leak for strict PII isolation."
    ]
  }
];
