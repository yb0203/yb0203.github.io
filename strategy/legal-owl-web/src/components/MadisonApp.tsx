import { 
  ShieldCheck, 
  Cpu, 
  Lock, 
  Layers, 
  Building2, 
  Sparkles, 
  Workflow, 
  Briefcase, 
  Calendar, 
  Target, 
  Eye, 
  Database, 
  Zap
} from 'lucide-react';

export const MadisonApp = () => {
  return (
    <div className="min-h-screen bg-[#080c14] text-[#f8fafc] font-sans antialiased selection:bg-[#10b981]/30 selection:text-emerald-200">
      
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-[#080c14] font-black text-base shadow-lg shadow-emerald-500/20">
            L
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-white">LYZR</span>
              <span className="text-slate-400 font-normal text-sm">/</span>
              <span className="font-bold text-sm text-emerald-400">Madison</span>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-300">
          <a href="#summary" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition">Summary</a>
          <a href="#architecture" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition">Architecture</a>
          <a href="#differentiators" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition">Differentiators</a>
          <a href="#taxonomy" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition">Taxonomy</a>
          <a href="#gtm" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition">GTM Sales</a>
          <a href="#roadmap" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition">Roadmap</a>
          <a href="#alignment" className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold hover:bg-emerald-500/20 transition">Alignment</a>
        </nav>
      </header>

      {/* Main Single Column Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">

        {/* Hero Section */}
        <section className="space-y-6 pt-4 pb-8 border-b border-slate-800/80">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Lyzr Enterprise Stack · Internal Leadership Strategy Proposal
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Madison
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight leading-snug">
            "A Sovereign Agentic Operating System for Enterprise Banking"
          </p>

          <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
            Built natively on the <strong className="text-white">Lyzr Enterprise Stack</strong> (`Lyzr ADK`, `Automata`, `Cognis`, `RAI`, `Governor`, `Agent Studio`). Transforming slow, document-heavy banking workflows into autonomous, zero-hallucination, human-governed execution pipelines.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium text-slate-400">
            <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md">Target Markets: US, CA, UK & EU</span>
            <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md">Tier 1 Target: $10B–$50B+ AUM Banks</span>
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">Single-Tenant Security</span>
          </div>
        </section>

        {/* 1. Executive Summary & Vision */}
        <section id="summary" className="space-y-6 pb-10 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
            <Target className="w-4 h-4" />
            Section 01
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Executive Summary & Vision
          </h2>

          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Executive Overview</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Madison is an Enterprise Agentic Operating System built natively on the Lyzr Enterprise Stack. It transforms slow, document-heavy banking operations into autonomous, zero-hallucination, human-governed workflows—starting with high-value Commercial Lending and expanding horizontally into Commercial Sales, Marketing Compliance, Retail Ops, and AML/KYC across the US, Canada, and Europe ($10B–$50B+ AUM banks).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Strategic Vision</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                To establish <strong>Madison</strong> as the premier enterprise agentic product suite for banking—leveraging <strong>Lyzr’s full-stack AI infrastructure</strong> to automate high-friction financial workflows with 100% auditability, bank-grade PII isolation, and zero-hallucination PDF coordinate grounding.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Grounded Architecture */}
        <section id="architecture" className="space-y-6 pb-10 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            Section 02
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Grounded Architecture (Lyzr Agentic Harness)
          </h2>
          <p className="text-sm text-slate-400">
            Agentic Harness Loop Paradigm mapped 1-to-1 to official Lyzr SDK primitives
          </p>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-xs">
              <span className="font-mono text-emerald-400 font-bold uppercase">MADISON ENTERPRISE ARCHITECTURE HARNESS</span>
              <span className="text-slate-400">Single-Tenant Bank Private VPC</span>
            </div>

            {/* Handshake Layer */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Workflow className="w-4 h-4" />
                1. Bank Client & Officer Interaction Handshake (Human-in-the-Loop)
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li>Bank Officer Interface & Co-Pilot Action Cards (`[ Approve ]`, `[ Edit ]`, `[ Reject ]`) via Lyzr Superflow</li>
                <li>Grounded PDF Citation Viewer & Highlighted Bounding Boxes (`x, y, w, h`) with 0% hallucination risk</li>
              </ul>
            </div>

            {/* Application Modules Layer */}
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                2. Templatized BFSI Application Modules
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <strong className="text-white block mb-0.5">Commercial Lending</strong>
                  <span className="text-slate-400">Title Exceptions, DSCR Spreading, Court Scout</span>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <strong className="text-white block mb-0.5">Commercial Sales / RM</strong>
                  <span className="text-slate-400">Pre-Meeting Dossiers, Deal Structuring</span>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <strong className="text-white block mb-0.5">Risk, AML & Retail Ops</strong>
                  <span className="text-slate-400">UBO Tracing, SAR Narratives, Garnishments</span>
                </div>
              </div>
            </div>

            {/* Lyzr Harness Core Loop */}
            <div className="p-5 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider">
                  <Lock className="w-4 h-4" />
                  3. Lyzr Governor & Agentic Harness Loop Core
                </div>
                <span className="font-mono text-slate-400">Fed SR 11-7 MRM Audit Ledger</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <strong className="text-emerald-400 flex items-center gap-1.5 font-mono">
                    <Cpu className="w-3.5 h-3.5" /> 1. Model (Brain)
                  </strong>
                  <p className="text-slate-400">• Lyzr ADK `Agent()`, Multi-LLM Router, `Task()` graph</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <strong className="text-cyan-400 flex items-center gap-1.5 font-mono">
                    <Zap className="w-3.5 h-3.5" /> 2. Action ➔ Tools / Sandbox
                  </strong>
                  <p className="text-slate-400">• Lyzr Superflow Node Approvals, E2B Sandbox, Core APIs</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <strong className="text-purple-400 flex items-center gap-1.5 font-mono">
                    <Database className="w-3.5 h-3.5" /> 3. Context & Memory
                  </strong>
                  <p className="text-slate-400">• Lyzr ADK Hybrid RAG, Lyzr Cognis Memory Engine</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <strong className="text-indigo-400 flex items-center gap-1.5 font-mono">
                    <Eye className="w-3.5 h-3.5" /> 4. Observation & Grounding
                  </strong>
                  <p className="text-slate-400">• PDF Bounding-Box Overlay (`x,y,w,h`), Lyzr RAI PII Shield</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Product Differentiators */}
        <section id="differentiators" className="space-y-6 pb-10 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Section 03
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Core Product Differentiators Grounded in Lyzr
          </h2>
          <p className="text-sm text-slate-400">
            Mapping native Lyzr enterprise primitives directly to high-value banking differentiators
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">Diff #1 · Lyzr KB + Citation</span>
                <span className="text-xs text-slate-500">0% Hallucination</span>
              </div>
              <h3 className="text-base font-bold text-white">1. Grounded PDF Citation Bounding-Box Ledger</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Visual coordinate links on PDFs (`x, y, w, h`). Clicking any assertion (e.g. *"Unpaid Tax Lien $12k"*) draws a highlighted bounding box directly over the exact line item on the source document with 0% LLM hallucination risk.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">Diff #2 · Lyzr Superflow</span>
                <span className="text-xs text-slate-500">Human Governance</span>
              </div>
              <h3 className="text-base font-bold text-white">2. "Approve-Before-Act" Co-Pilot Action Cards</h3>
              <p className="text-xs text-slate-300 leading-relaxed">AI agents pause at high-stakes decision gates via Superflow Node Approvals (`running-and-approvals`), surfacing interactive `[ Approve ]`, `[ Edit ]`, and `[ Reject ]` action cards for human bank officers.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">Diff #3 · Lyzr Governor</span>
                <span className="text-xs text-slate-500">Fed Compliance</span>
              </div>
              <h3 className="text-base font-bold text-white">3. Native Fed SR 11-7 Model Governance Ledger</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Maintains an immutable execution audit log (`Execution ID`, `Prompt Version`, `Context Hash`, `Tool Parameters`, `Guardrail Flags`, `Human Sign-Off ID`) to pass Federal Reserve Model Validation Group (MVG) audits out-of-the-box.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">Diff #4 · Lyzr RAI Engine</span>
                <span className="text-xs text-slate-500">GLBA / OCC Compliant</span>
              </div>
              <h3 className="text-base font-bold text-white">4. Edge PII/NPI Isolation & Data Privacy Shield</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Uses Lyzr RAI policies (`create_policy`) to scrub SSNs, Tax IDs, and account numbers at the local boundary before LLM inference (GLBA & OCC Bulletin 2023-17 compliant).</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">Diff #5 · Agent Studio</span>
                <span className="text-xs text-slate-500">Git-for-Agents</span>
              </div>
              <h3 className="text-base font-bold text-white">5. Git-for-Agents Enterprise Promotion Pipeline</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Enables strict Dev ➔ Staging ➔ Production Private VPC promotion pipelines with version rollback for bank Forward-Deployed Engineers.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">Diff #6 · Simulation Engine</span>
                <span className="text-xs text-slate-500">Pre-Testing</span>
              </div>
              <h3 className="text-base font-bold text-white">6. Pre-Deployment Banking Scenario Sandbox</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Pre-tests multi-agent banking workflows against thousands of synthetic stress-test scenarios before live client VPC deployment.</p>
            </div>
          </div>
        </section>

        {/* 4. The 6 BFSI Opportunity Pillars (Taxonomy) */}
        <section id="taxonomy" className="space-y-6 pb-10 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            Section 04
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            The 6 BFSI Opportunity Pillars (Taxonomy)
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-950 text-slate-300 border-b border-slate-800 font-mono text-[11px] uppercase">
                  <th className="p-4">Pillar</th>
                  <th className="p-4">Focus Area</th>
                  <th className="p-4">High-ROI Lyzr AI Agent Modules</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-bold text-emerald-400">1. Lending & Credit</td>
                  <td className="p-4 text-slate-400">CRE, SME & Corporate Debt</td>
                  <td className="p-4"><strong>Title Vetting Agent</strong> (Schedule B exceptions); <strong>Financial Spreading Agent</strong> (DSCR ≥ 1.25×); <strong>Court Scout Agent</strong> (PACER/foreclosures).</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-bold text-indigo-400">2. Commercial Sales & RM</td>
                  <td className="p-4 text-slate-400">RM Productivity & Deal Origination</td>
                  <td className="p-4"><strong>RM Pre-Meeting Dossier Agent</strong> (SEC 10-K & news synthesis); <strong>Commercial Deal Structuring Co-Pilot</strong>; <strong>Cross-Sell Agent</strong>.</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-bold text-purple-400">3. Marketing & Growth</td>
                  <td className="p-4 text-slate-400">Acquisition & Compliance</td>
                  <td className="p-4"><strong>Ad Regulatory Compliance Agent</strong> (auditing ad copy against TILA, RESPA, CFPB, FCA rules); <strong>Hyper-Personalized Campaign Copy Agent</strong>.</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-bold text-cyan-400">4. Retail Operations</td>
                  <td className="p-4 text-slate-400">Branch & Customer Servicing</td>
                  <td className="p-4"><strong>Garnishment & Levy Execution Agent</strong> (court attachments & exempt cash calculation); <strong>Deceased Account Probate Agent</strong>.</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-bold text-amber-400">5. Risk & AML/KYC</td>
                  <td className="p-4 text-slate-400">Financial Crime & GRC</td>
                  <td className="p-4"><strong>UBO Tracing Agent</strong> (unwrapping offshore shell webs to ≥ 10% owners); <strong>SAR Narrative Writer Agent</strong> (FinCEN/FINTRAC reports).</td>
                </tr>
                <tr className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-bold text-rose-400">6. Wealth & Treasury</td>
                  <td className="p-4 text-slate-400">Private Banking & Hedging</td>
                  <td className="p-4"><strong>ISDA & CSA Master Agreement Auditor</strong>; <strong>Daily Margin Call Agent</strong>; <strong>Wealth Estate Planning Co-Pilot</strong>.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Go-To-Market Enterprise Sales Engine */}
        <section id="gtm" className="space-y-6 pb-10 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            Section 05
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Go-To-Market (GTM) Enterprise Sales & Delivery Engine
          </h2>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono font-bold text-emerald-400">Motion 1</span>
              <h3 className="text-sm font-bold text-white">Via Financial Advisory, Legal & Professional Service Partners</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Partner with third-party banking law firms (e.g. Mayer Brown, Latham & Watkins) and compliance consultancies who pitch and co-sell Madison to their bank clients.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono font-bold text-indigo-400">Motion 2</span>
              <h3 className="text-sm font-bold text-white">Via System Integrators (SIs & Banking Consultancies)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Partner with Accenture Financial Services, Capgemini Banking, PwC, EY, and Infosys who handle custom legacy core mainframe API integrations.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono font-bold text-purple-400">Motion 3</span>
              <h3 className="text-sm font-bold text-white">Via Hyperscaler Co-Sell & Cloud Marketplace (AWS / Azure / GCP)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Co-sell on AWS, Azure, and GCP Marketplaces letting bank CIOs draw from pre-committed cloud budgets (AWS EDP / Azure MACC commits), shortening sales from 9 months to 3 weeks.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono font-bold text-cyan-400">Motion 4</span>
              <h3 className="text-sm font-bold text-white">Direct Outbound Account-Based Marketing (ABM)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">High-touch C-suite outreach targeting Chief Credit Officers (CCOs), Chief Risk Officers (CROs), and General Counsels at $10B–$50B AUM regional banks.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono font-bold text-amber-400">Motion 5</span>
              <h3 className="text-sm font-bold text-white">Marketing Inbound Engine</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Executive thought leadership whitepapers, bank ROI calculators, SR 11-7 Model Risk Management compliance guides, and interactive web showcase demos.</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1 text-xs">
              <span className="font-bold text-emerald-400 uppercase tracking-wider block">Rapid Delivery</span>
              <p className="text-slate-200">Forward-Deployed Engineers (FDEs) use low-code configuration templates to map core APIs, connect SSO, and deploy into the bank's Private VPC in <strong>under 7 days</strong>.</p>
            </div>
          </div>
        </section>

        {/* 6. Near-Term, Mid-Term & Long-Term Execution Roadmap */}
        <section id="roadmap" className="space-y-6 pb-10 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            Section 06
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Near-Term, Mid-Term & Long-Term Execution Roadmap
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Phase 1: Near-Term</span>
                <span className="text-xs font-mono text-slate-500">Showcase Demo & Templatization</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                <li>Build and freeze 21-day Commercial Lending Showcase Demo App</li>
                <li>Develop FDE cloning scripts</li>
                <li>Write Sales Storyboard & Pitch Deck</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Phase 2: Mid-Term</span>
                <span className="text-xs font-mono text-slate-500">Paid Bank Pilots & Model Governance</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                <li>Execute 3 Paid Bank Pilots ($50K–$100K PoCs)</li>
                <li>Audit SR 11-7 Model Validation Group compliance</li>
                <li>Measure baseline disbursement speed KPIs</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Phase 3: Long-Term</span>
                <span className="text-xs font-mono text-slate-500">Horizontal Expansion & FDE Engine</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                <li>Launch Sales/RM Co-Pilot & AML/UBO Skill Bundles</li>
                <li>Formalize FDE Client Onboarding Playbook</li>
                <li>Target Top 25 US Regional Banks</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Phase 4: Scaling</span>
                <span className="text-xs font-mono text-slate-500">Global Market Expansion</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                <li>Expand to UK/EU & Canada public registries</li>
                <li>Package direct API connectors for Fiserv, FIS, Jack Henry</li>
                <li>Scale ARR & enterprise licensing seats</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Open Discussions & Strategic Alignment */}
        <section id="alignment" className="space-y-6">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            Section 07
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Open Discussions & Strategic Alignment
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-emerald-500/30 space-y-1.5">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">[RECOMMENDED]</span>
              <h3 className="text-sm font-bold text-white pt-1">1. Standalone Product Suite Packaging</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Madison is packaged as a <strong>configurable standalone agentic AI software suite</strong> (the <em>Lyzr Banking Engine</em>) equipped with native banking mainframe connectors, rather than a passive template inside Lyzr Studio.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-emerald-500/30 space-y-1.5">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">[RECOMMENDED]</span>
              <h3 className="text-sm font-bold text-white pt-1">2. 20% R&D / 80% FDE Resource Flywheel</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Phase 1 Launch</strong>: Resource split is 20% Core R&D / 80% FDEs capturing real-world bank feedback.<br />
                <strong>Phase 2 Scale</strong>: Ratio shifts toward R&D-dominant scaling where FDEs exclusively handle low-code YAML/JSON configurations.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-emerald-500/30 space-y-1.5">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">[RECOMMENDED]</span>
              <h3 className="text-sm font-bold text-white pt-1">3. Inherited SOC-2 & SR 11-7 Readiness</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Lyzr natively possesses SOC-2 Type-2 and HIPAA/Enterprise Security certifications. Built natively on the Lyzr Enterprise Stack, Madison <strong>inherits SOC-2 compliance out-of-the-box</strong> and satisfies Fed SR 11-7 Model Validation audits on Day 1.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-emerald-500/30 space-y-1.5">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">[RECOMMENDED]</span>
              <h3 className="text-sm font-bold text-white pt-1">4. System Integrator & Partner Co-Sell Motion</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Active co-selling with global banking SIs (Accenture, Capgemini, PwC, EY) and banking legal/advisory partners. Partners manage legacy mainframe integration & client relationships, while Lyzr licenses the Madison agentic core.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#080c14] py-8 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-1 font-mono text-slate-400">Lyzr Enterprise Agentic OS — Project Madison</p>
          <p>© 2026 Lyzr AI. Grounded in Official Lyzr Enterprise SDK Primitives.</p>
        </div>
      </footer>

    </div>
  );
};
