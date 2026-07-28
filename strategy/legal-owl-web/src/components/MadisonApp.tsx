import { Shield } from 'lucide-react';

export const MadisonApp = () => {
  return (
    <div className="min-h-screen bg-[#070a12] text-[#f3f4f6] font-sans antialiased selection:bg-[#6366f1]/30 selection:text-indigo-200">
      
      {/* Sticky Top Navigation */}
      <header className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 via-indigo-500 to-purple-500 p-0.5 flex items-center justify-center">
            <div className="w-full h-full bg-[#070a12] rounded-[6px] flex items-center justify-center">
              <span className="text-emerald-400 font-extrabold text-sm">M</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-white">MADISON</span>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">Internal Strategy</span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Lyzr Enterprise Agentic OS for BFSI</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 text-xs font-semibold text-slate-300">
          <a href="#summary" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition">1. Summary</a>
          <a href="#architecture" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition">2. Architecture</a>
          <a href="#differentiators" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition">3. Differentiators</a>
          <a href="#taxonomy" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition">4. BFSI Taxonomy</a>
          <a href="#gtm" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition">5. GTM Engine</a>
          <a href="#roadmap" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition">6. Roadmap</a>
          <a href="#alignment" className="px-3 py-1.5 rounded-lg text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 transition">7. Alignment</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-14 px-4 sm:px-8 border-b border-white/10 relative overflow-hidden bg-gradient-to-b from-[#0f172a]/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full">Internal Leadership Strategy</span>
            <span className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 rounded-full">Markets: US, CA, UK & EU ($10B-$50B+ AUM)</span>
            <span className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">Lyzr Enterprise Stack</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white leading-tight">
            🏛️ Executive Master Strategy: <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Madison</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-4xl font-normal leading-relaxed mb-8">
            An Enterprise Agentic Operating System built natively on the <strong className="text-white">Lyzr Enterprise Stack</strong> (`Lyzr ADK`, `Automata`, `Cognis`, `RAI`, `Governor`, `Agent Studio`). Transforming slow, document-heavy banking operations into autonomous, zero-hallucination, human-governed workflows.
          </p>

          {/* Core Motto Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-500/30 shadow-xl max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-xl">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">Official Product Motto</span>
                <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">"A Sovereign Agentic Operating System for Enterprise Banking"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-16">

        {/* 1. Executive Summary & Vision */}
        <section id="summary" className="p-6 sm:p-8 rounded-2xl bg-[#0f172a]/60 border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-base">🎯</div>
            <h2 className="text-2xl font-bold text-white tracking-tight">1. Executive Summary & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400">Executive Overview</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Madison is an Enterprise Agentic Operating System built natively on the Lyzr Enterprise Stack. It transforms slow, document-heavy banking operations into autonomous, zero-hallucination, human-governed workflows—starting with high-value Commercial Lending and expanding horizontally into Commercial Sales, Marketing Compliance, Retail Ops, and AML/KYC across the US, Canada, and Europe ($10B–$50B+ AUM banks).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-white/5 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Strategic Vision</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                To establish <strong>Madison</strong> as the premier enterprise agentic product suite for banking—leveraging <strong>Lyzr’s full-stack AI infrastructure</strong> to automate high-friction financial workflows with 100% auditability, bank-grade PII isolation, and zero-hallucination PDF coordinate grounding.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Grounded Architecture */}
        <section id="architecture" className="p-6 sm:p-8 rounded-2xl bg-[#0f172a]/60 border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-base">🚀</div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">2. Grounded Architecture: Powered by Lyzr Stack</h2>
              <p className="text-xs text-slate-400">Agentic Harness Loop Paradigm mapped 1-to-1 to official Lyzr SDK primitives</p>
            </div>
          </div>

          {/* Architecture Visual Box */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
              <span className="font-mono text-emerald-400 font-bold">MADISON ENTERPRISE ARCHITECTURE</span>
              <span className="text-slate-400">Single-Tenant Bank Private VPC</span>
            </div>

            {/* Handshake Box */}
            <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
              <span className="text-xs font-bold text-indigo-300 block">🤝 1. BANK CLIENT & OFFICER INTERACTION HANDSHAKE (HUMAN-IN-THE-LOOP)</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-2.5 rounded bg-slate-900 border border-white/5">• Bank Officer Interface & Co-Pilot Action Cards (`[ Approve ]`, `[ Edit ]`, `[ Reject ]`)</div>
                <div className="p-2.5 rounded bg-slate-900 border border-white/5">• Grounded PDF Citation Viewer & Highlighted Bounding Boxes (`x, y, w, h`)</div>
              </div>
            </div>

            {/* Modules Box */}
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 space-y-2">
              <span className="text-xs font-bold text-purple-300 block">🏦 2. TEMPLATIZED BFSI APPLICATION MODULES</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="p-2.5 rounded bg-slate-900 border border-white/5">
                  <strong className="text-white block">Commercial Lending</strong>
                  <span className="text-slate-400">Title Exceptions, DSCR Spreading, Court Scout</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-white/5">
                  <strong className="text-white block">Commercial Sales / RM</strong>
                  <span className="text-slate-400">Pre-Meeting Dossiers, Deal Structuring</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-white/5">
                  <strong className="text-white block">Risk, AML & Retail Ops</strong>
                  <span className="text-slate-400">UBO Tracing, SAR Narratives, Garnishments</span>
                </div>
              </div>
            </div>

            {/* Harness Loop Core */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-xs">
                <span className="font-bold text-emerald-300">🛡️ 3. LYZR GOVERNOR & PRIVATE VPC HARNESS CORE</span>
                <span className="font-mono text-slate-400">Fed SR 11-7 MRM Audit Ledger</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded bg-slate-900 border border-indigo-500/20">
                  <strong className="text-indigo-300 block mb-1">🧠 1. Model (Brain)</strong>
                  <p className="text-slate-400">• Lyzr ADK `Agent()`, Multi-LLM Router, `Task()` operational graph</p>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-emerald-500/20">
                  <strong className="text-emerald-300 block mb-1">🛠️ 2. Action ➔ Tools / Sandbox</strong>
                  <p className="text-slate-400">• Lyzr Superflow Node Approvals, E2B Code Sandbox, Core APIs</p>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-purple-500/20">
                  <strong className="text-purple-300 block mb-1">💾 3. Context & Memory</strong>
                  <p className="text-slate-400">• Lyzr ADK Hybrid Vector RAG, Lyzr Cognis Memory Engine</p>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-cyan-500/20">
                  <strong className="text-cyan-300 block mb-1">👁️ 4. Observation & Grounding</strong>
                  <p className="text-slate-400">• PDF Bounding-Box Overlay (`x,y,w,h`), Lyzr RAI PII Shield</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Product Differentiators */}
        <section id="differentiators" className="p-6 sm:p-8 rounded-2xl bg-[#0f172a]/60 border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-base">💎</div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">3. Core Product Differentiators Grounded in Lyzr</h2>
              <p className="text-xs text-slate-400">Mapping native Lyzr enterprise primitives directly to high-value banking differentiators</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-indigo-500/30 transition space-y-2">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">Lyzr KB + Citation</span>
              <h3 className="text-sm font-bold text-white">1. Grounded PDF Bounding-Box Ledger</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Visual coordinate links on PDFs (`x, y, w, h`). Clicking any assertion draws a highlighted bounding box directly over the source document (0% hallucination risk).</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-indigo-500/30 transition space-y-2">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded">Lyzr Superflow</span>
              <h3 className="text-sm font-bold text-white">2. "Approve-Before-Act" Cards</h3>
              <p className="text-xs text-slate-300 leading-relaxed">AI agents pause at high-stakes decision gates via Superflow Node Approvals (`running-and-approvals`), surfacing interactive `[ Approve / Reject ]` action cards for bank officers.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-indigo-500/30 transition space-y-2">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded">Lyzr Governor</span>
              <h3 className="text-sm font-bold text-white">3. Native Fed SR 11-7 Audit Ledger</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Maintains an immutable execution audit log (`Execution ID`, `Context Hash`, `Tool Params`) to pass Federal Reserve Model Validation Group (MVG) audits out-of-the-box.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-indigo-500/30 transition space-y-2">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">Lyzr RAI Engine</span>
              <h3 className="text-sm font-bold text-white">4. Edge PII Privacy Shield</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Uses Lyzr RAI policies (`create_policy`) to scrub SSNs, Tax IDs, and account numbers at the local boundary before LLM inference (GLBA & OCC Bulletin 2023-17 compliant).</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-indigo-500/30 transition space-y-2">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">Agent Studio</span>
              <h3 className="text-sm font-bold text-white">5. Git-for-Agents Control Pipeline</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Enables strict Dev ➔ Staging ➔ Production Private VPC promotion pipelines with version rollback for bank Forward-Deployed Engineers.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-indigo-500/30 transition space-y-2">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">Simulation Engine</span>
              <h3 className="text-sm font-bold text-white">6. Scenario Stress-Testing Sandbox</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Pre-tests multi-agent banking workflows against thousands of synthetic stress-test scenarios before live client VPC deployment.</p>
            </div>
          </div>
        </section>

        {/* 4. The 6 BFSI Opportunity Pillars (Taxonomy) */}
        <section id="taxonomy" className="p-6 sm:p-8 rounded-2xl bg-[#0f172a]/60 border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-base">🗺️</div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">4. The 6 BFSI Opportunity Pillars (Taxonomy)</h2>
              <p className="text-xs text-slate-400">Exhaustive opportunity matrix covering core banking verticals across US, CA, UK & EU</p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-slate-300 border-b border-white/10 uppercase font-mono">
                  <th className="p-3.5">Pillar</th>
                  <th className="p-3.5">Focus Area</th>
                  <th className="p-3.5">High-ROI Lyzr AI Agent Modules</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr className="hover:bg-white/5 transition">
                  <td className="p-3.5 font-bold text-emerald-400">1. Lending & Credit</td>
                  <td className="p-3.5 text-slate-400">CRE, SME & Corporate Debt</td>
                  <td className="p-3.5"><strong>Title Vetting Agent</strong> (Schedule B exceptions); <strong>Financial Spreading Agent</strong> (DSCR ≥ 1.25×); <strong>Court Scout Agent</strong> (PACER/foreclosures); <strong>Contract Reconciliation Agent</strong>.</td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="p-3.5 font-bold text-indigo-400">2. Commercial Sales & RM</td>
                  <td className="p-3.5 text-slate-400">RM Productivity & Deal Origination</td>
                  <td className="p-3.5"><strong>RM Pre-Meeting Dossier Agent</strong> (SEC 10-K & news synthesis); <strong>Commercial Deal Structuring Co-Pilot</strong>; <strong>Cross-Sell / Next-Best-Action Agent</strong>.</td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="p-3.5 font-bold text-purple-400">3. Marketing & Growth</td>
                  <td className="p-3.5 text-slate-400">Acquisition & Compliance</td>
                  <td className="p-3.5"><strong>Ad Regulatory Compliance Agent</strong> (auditing ad copy against TILA, RESPA, CFPB, FCA rules); <strong>Hyper-Personalized Campaign Copy Agent</strong>.</td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="p-3.5 font-bold text-cyan-400">4. Retail Operations</td>
                  <td className="p-3.5 text-slate-400">Branch & Customer Servicing</td>
                  <td className="p-3.5"><strong>Garnishment & Levy Execution Agent</strong> (court attachments & exempt cash calculation); <strong>Deceased Account Probate Agent</strong>; <strong>Dispute Resolution Agent</strong>.</td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="p-3.5 font-bold text-amber-400">5. Risk & AML/KYC</td>
                  <td className="p-3.5 text-slate-400">Financial Crime & GRC</td>
                  <td className="p-3.5"><strong>UBO Tracing Agent</strong> (unwrapping offshore shell webs to ≥ 10% owners); <strong>SAR Narrative Writer Agent</strong> (FinCEN/FINTRAC reports); <strong>Vendor TPRM Audit Agent</strong>.</td>
                </tr>
                <tr className="hover:bg-white/5 transition">
                  <td className="p-3.5 font-bold text-rose-400">6. Wealth & Treasury</td>
                  <td className="p-3.5 text-slate-400">Private Banking & Hedging</td>
                  <td className="p-3.5"><strong>ISDA & CSA Master Agreement Auditor</strong>; <strong>Daily Margin Call Agent</strong>; <strong>Wealth Estate Planning Co-Pilot</strong>.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Go-To-Market Enterprise Sales Engine */}
        <section id="gtm" className="p-6 sm:p-8 rounded-2xl bg-[#0f172a]/60 border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-base">💼</div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">5. Go-To-Market (GTM) Enterprise Sales & Delivery Engine</h2>
              <p className="text-xs text-slate-400">5-channel sales & co-sell engine designed for rapid enterprise acquisition & 7-day client onboarding</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">Motion #1</span>
              <h3 className="text-xs font-bold text-white pt-1">Via Banking & Legal Service Partners</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Partner with banking law firms (e.g. Mayer Brown, Latham & Watkins) and compliance consultancies who pitch and co-sell Madison to existing bank clients.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded">Motion #2</span>
              <h3 className="text-xs font-bold text-white pt-1">Via System Integrators (SIs)</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Partner with Accenture Financial Services, Capgemini Banking, PwC, EY, and Infosys who handle custom legacy mainframe API integrations.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded">Motion #3</span>
              <h3 className="text-xs font-bold text-white pt-1">Via Hyperscaler Cloud Co-Sell</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Co-sell on AWS, Azure, and GCP Marketplaces letting bank CIOs draw from pre-committed cloud budgets (AWS EDP / Azure MACC), shortening sales to 3 weeks.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">Motion #4</span>
              <h3 className="text-xs font-bold text-white pt-1">Direct Outbound ABM</h3>
              <p className="text-xs text-slate-300 leading-relaxed">High-touch C-suite outreach targeting Chief Credit Officers (CCOs), Chief Risk Officers (CROs), and General Counsels at $10B–$50B AUM regional banks.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">Motion #5</span>
              <h3 className="text-xs font-bold text-white pt-1">Marketing Inbound Engine</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Executive whitepapers, bank ROI calculators, SR 11-7 Model Risk Management compliance guides, and interactive web showcase demos.</p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-tr from-emerald-950/60 to-slate-900 border border-emerald-500/30 space-y-1">
              <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">Rapid Onboarding</span>
              <h3 className="text-xs font-bold text-emerald-300 pt-1">7-Day FDE Client Onboarding</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Forward-Deployed Engineers (FDEs) use low-code configuration templates to map core APIs, connect SSO, and deploy in under 7 days.</p>
            </div>
          </div>
        </section>

        {/* 6. Near-Term, Mid-Term & Long-Term Execution Roadmap */}
        <section id="roadmap" className="p-6 sm:p-8 rounded-2xl bg-[#0f172a]/60 border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-base">🗓️</div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">6. Near-Term, Mid-Term & Long-Term Execution Roadmap</h2>
              <p className="text-xs text-slate-400">Structured execution roadmap across showcase app, bank pilots, and enterprise scale</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Phase 1: Near-Term</span>
              <h3 className="text-xs font-bold text-white">Showcase Demo & Templatization</h3>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                <li>Build 21-day Commercial Lending Showcase App</li>
                <li>Develop FDE cloning scripts</li>
                <li>Write Sales Storyboard & Pitch Deck</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-indigo-500/30 space-y-2">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">Phase 2: Mid-Term</span>
              <h3 className="text-xs font-bold text-white">Paid Bank Pilots & Governance</h3>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                <li>Execute 3 Paid Bank Pilots ($50K-$100K PoCs)</li>
                <li>Audit SR 11-7 Model Validation compliance</li>
                <li>Measure baseline disbursement speed KPIs</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-purple-500/30 space-y-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block">Phase 3: Long-Term</span>
              <h3 className="text-xs font-bold text-white">Horizontal Expansion & FDE Engine</h3>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                <li>Launch Sales/RM & AML/UBO Skill Bundles</li>
                <li>Formalize FDE Client Onboarding Playbook</li>
                <li>Target Top 25 US Regional Banks</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/30 space-y-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Phase 4: Scaling</span>
              <h3 className="text-xs font-bold text-white">Global Market Expansion</h3>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                <li>Expand to UK/EU & Canada public registries</li>
                <li>Package direct API connectors (Fiserv, FIS)</li>
                <li>Scale ARR & enterprise licensing seats</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Open Discussions & Strategic Alignment */}
        <section id="alignment" className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0f172a] to-slate-950 border border-emerald-500/30 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-base">❓</div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">7. Open Discussions & Strategic Alignment</h2>
              <p className="text-xs text-slate-400">4 recommended strategic positions for internal leadership alignment</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-slate-900/90 border border-emerald-500/30 space-y-2">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">[RECOMMENDED]</span>
              <h3 className="text-sm font-bold text-white pt-1">1. Standalone Product Suite Packaging</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Madison is packaged as a <strong>configurable standalone agentic AI software suite</strong> (the <em>Lyzr Banking Engine</em>) equipped with native banking mainframe connectors, rather than a passive template inside Lyzr Studio.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-emerald-500/30 space-y-2">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">[RECOMMENDED]</span>
              <h3 className="text-sm font-bold text-white pt-1">2. 20% R&D / 80% FDE Resource Flywheel</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Phase 1 Launch</strong>: Resource split is 20% Core R&D / 80% FDEs capturing real-world bank feedback.<br />
                <strong>Phase 2 Scale</strong>: As domain skills are templatized, ratio shifts toward R&D-dominant scaling where FDEs exclusively handle low-code YAML/JSON configurations.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-emerald-500/30 space-y-2">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">[RECOMMENDED]</span>
              <h3 className="text-sm font-bold text-white pt-1">3. Inherited SOC-2 & SR 11-7 Readiness</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Lyzr natively possesses SOC-2 Type-2 and HIPAA/Enterprise Security certifications. Built natively on the Lyzr Enterprise Stack, Madison <strong>inherits SOC-2 compliance out-of-the-box</strong> and satisfies Fed SR 11-7 Model Validation audits on Day 1.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/90 border border-emerald-500/30 space-y-2">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">[RECOMMENDED]</span>
              <h3 className="text-sm font-bold text-white pt-1">4. System Integrator & Partner Co-Sell Motion</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Active co-selling with global banking SIs (Accenture, Capgemini, PwC, EY) and banking legal/advisory partners. Partners manage legacy mainframe integration & client relationships, while Lyzr licenses the Madison agentic core.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-2 font-mono">Lyzr Enterprise Agentic Operating System — Project Madison</p>
          <p>© 2026 Lyzr AI. All Strategy Specifications Grounded in Official Lyzr SDK Primitives.</p>
        </div>
      </footer>

    </div>
  );
};
