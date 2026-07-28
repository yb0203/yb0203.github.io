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
  TrendingUp, 
  Target, 
  Eye, 
  Database, 
  Zap, 
  BookOpen
} from 'lucide-react';

export const MadisonApp = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#121b18] font-sans antialiased selection:bg-[#c59e5f]/20">
      
      {/* Sticky Top Navigation */}
      <header className="sticky top-0 z-50 bg-[#121b18] text-white border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#c59e5f] p-0.5 flex items-center justify-center text-[#121b18] font-extrabold text-sm shadow">
            M
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-wider text-white">MADISON</span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#c59e5f]/20 text-[#c59e5f] border border-[#c59e5f]/40 rounded">Internal Strategy</span>
            </div>
            <p className="text-[11px] text-white/50 hidden sm:block">A Sovereign Agentic Operating System for Enterprise Banking</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-white/80">
          <a href="#summary" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition">1. Summary</a>
          <a href="#architecture" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition">2. Architecture</a>
          <a href="#differentiators" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition">3. Differentiators</a>
          <a href="#taxonomy" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition">4. BFSI Taxonomy</a>
          <a href="#gtm" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition">5. GTM Sales</a>
          <a href="#roadmap" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition">6. Roadmap</a>
          <a href="#alignment" className="px-2.5 py-1.5 rounded bg-[#c59e5f] text-[#121b18] font-bold hover:bg-[#b08b50] transition">7. Alignment</a>
        </nav>
      </header>

      {/* Hero Header Section */}
      <section className="bg-gradient-to-br from-[#0e1613] via-[#121b18] to-[#253630] text-white px-6 sm:px-16 py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c59e5f] bg-[#c59e5f]/10 border border-[#c59e5f]/30 px-3.5 py-1.5 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#c59e5f]" />
            Lyzr Enterprise Stack · Internal Leadership Strategy Proposal
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif leading-tight font-normal mb-4">
            🏛️ Executive Master Strategy: <em className="italic text-[#c59e5f]">Madison</em>
          </h1>
          
          <p className="text-white/70 max-w-3xl text-sm sm:text-base leading-relaxed mb-10 font-sans">
            An Enterprise Agentic Operating System built natively on the <strong className="text-white">Lyzr Enterprise Stack</strong> (`Lyzr ADK`, `Automata`, `Cognis`, `RAI`, `Governor`, `Agent Studio`). Mapped across US, Canadian, and European banks ($10B–$50B+ AUM).
          </p>

          {/* Official Motto Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-3xl backdrop-blur-md">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#c59e5f]/20 text-[#c59e5f] border border-[#c59e5f]/40">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block mb-1">Official Product Motto</span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                  "A Sovereign Agentic Operating System for Enterprise Banking"
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Strategy Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-12 space-y-12">

        {/* 1. Executive Summary & Vision */}
        <section id="summary" className="py-6 border-b border-[#e2dacb]">
          <div className="mb-6 flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#121b18] text-[#c59e5f]">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block">Section 1</span>
              <h2 className="text-2xl font-serif font-bold text-[#121b18]">Executive Summary & Vision</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#c59e5f] flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                Executive Overview
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Madison is an Enterprise Agentic Operating System built natively on the Lyzr Enterprise Stack. It transforms slow, document-heavy banking operations into autonomous, zero-hallucination, human-governed workflows—starting with high-value Commercial Lending and expanding horizontally into Commercial Sales, Marketing Compliance, Retail Ops, and AML/KYC across the US, Canada, and Europe ($10B–$50B+ AUM banks).
              </p>
            </div>

            <div className="p-6 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#466c5b] flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                Strategic Vision
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                To establish <strong>Madison</strong> as the premier enterprise agentic product suite for banking—leveraging <strong>Lyzr’s full-stack AI infrastructure</strong> to automate high-friction financial workflows with 100% auditability, bank-grade PII isolation, and zero-hallucination PDF coordinate grounding.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Grounded Architecture */}
        <section id="architecture" className="py-6 border-b border-[#e2dacb]">
          <div className="mb-6 flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#121b18] text-[#c59e5f]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block">Section 2</span>
              <h2 className="text-2xl font-serif font-bold text-[#121b18]">Grounded Architecture (Lyzr Agentic Harness)</h2>
            </div>
          </div>

          {/* Architecture Visual Card */}
          <div className="bg-[#121b18] text-white rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
              <span className="font-mono text-[#c59e5f] font-bold">MADISON ENTERPRISE HARNESS ARCHITECTURE</span>
              <span className="text-white/50">Single-Tenant Bank Private VPC</span>
            </div>

            {/* Handshake Layer */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#c59e5f] font-bold text-xs">
                <Workflow className="w-4 h-4" />
                <span>1. BANK CLIENT & OFFICER INTERACTION HANDSHAKE (HUMAN-IN-THE-LOOP)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/80">
                <div className="p-2.5 rounded bg-black/40 border border-white/5">• Bank Officer Interface & Co-Pilot Action Cards (`[ Approve ]`, `[ Edit ]`, `[ Reject ]`)</div>
                <div className="p-2.5 rounded bg-black/40 border border-white/5">• Grounded PDF Citation Viewer & Highlighted Bounding Boxes (`x, y, w, h`)</div>
              </div>
            </div>

            {/* Application Modules Layer */}
            <div className="p-4 rounded-xl bg-[#253630]/60 border border-[#466c5b]/40 space-y-2">
              <div className="flex items-center gap-2 text-[#466c5b] text-emerald-300 font-bold text-xs">
                <Building2 className="w-4 h-4" />
                <span>2. TEMPLATIZED BFSI APPLICATION MODULES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/80">
                <div className="p-2.5 rounded bg-black/40 border border-white/5">
                  <strong className="text-white block">Commercial Lending</strong>
                  <span className="text-white/60">Title Exceptions, DSCR Spreading, Court Scout</span>
                </div>
                <div className="p-2.5 rounded bg-black/40 border border-white/5">
                  <strong className="text-white block">Commercial Sales / RM</strong>
                  <span className="text-white/60">Pre-Meeting Dossiers, Deal Structuring</span>
                </div>
                <div className="p-2.5 rounded bg-black/40 border border-white/5">
                  <strong className="text-white block">Risk, AML & Retail Ops</strong>
                  <span className="text-white/60">UBO Tracing, SAR Narratives, Garnishments</span>
                </div>
              </div>
            </div>

            {/* Harness Loop Core Layer */}
            <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-xs">
                <div className="flex items-center gap-2 text-[#c59e5f] font-bold">
                  <Lock className="w-4 h-4" />
                  <span>3. LYZR GOVERNOR & AGENTIC HARNESS LOOP CORE</span>
                </div>
                <span className="font-mono text-white/50 text-[11px]">Fed SR 11-7 MRM Audit Ledger</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded bg-black/60 border border-white/5 space-y-1">
                  <strong className="text-indigo-300 flex items-center gap-1.5 font-mono">
                    <Cpu className="w-3.5 h-3.5" /> 1. Model (Brain)
                  </strong>
                  <p className="text-white/70">• Lyzr ADK `Agent()`, Multi-LLM Router, `Task()` graph</p>
                </div>
                <div className="p-3 rounded bg-black/60 border border-white/5 space-y-1">
                  <strong className="text-emerald-300 flex items-center gap-1.5 font-mono">
                    <Zap className="w-3.5 h-3.5" /> 2. Action ➔ Tools / Sandbox
                  </strong>
                  <p className="text-white/70">• Lyzr Superflow Node Approvals, E2B Sandbox, Core APIs</p>
                </div>
                <div className="p-3 rounded bg-black/60 border border-white/5 space-y-1">
                  <strong className="text-purple-300 flex items-center gap-1.5 font-mono">
                    <Database className="w-3.5 h-3.5" /> 3. Context & Memory
                  </strong>
                  <p className="text-white/70">• Lyzr ADK Hybrid RAG, Lyzr Cognis Memory Engine</p>
                </div>
                <div className="p-3 rounded bg-black/60 border border-white/5 space-y-1">
                  <strong className="text-cyan-300 flex items-center gap-1.5 font-mono">
                    <Eye className="w-3.5 h-3.5" /> 4. Observation & Grounding
                  </strong>
                  <p className="text-white/70">• PDF Bounding-Box Overlay (`x,y,w,h`), Lyzr RAI PII Shield</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Product Differentiators */}
        <section id="differentiators" className="py-6 border-b border-[#e2dacb]">
          <div className="mb-6 flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#121b18] text-[#c59e5f]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block">Section 3</span>
              <h2 className="text-2xl font-serif font-bold text-[#121b18]">Core Product Differentiators Grounded in Lyzr</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2 hover:border-[#c59e5f]/50 transition">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Lyzr KB + Citation</span>
              <h3 className="font-bold text-sm text-slate-900">1. PDF Citation Bounding-Box</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Visual `x,y,w,h` coordinates on PDF documents. 0% LLM hallucination risk with verifiable proof.</p>
            </div>

            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2 hover:border-[#c59e5f]/50 transition">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Lyzr Superflow</span>
              <h3 className="font-bold text-sm text-slate-900">2. "Approve-Before-Act" Cards</h3>
              <p className="text-xs text-slate-600 leading-relaxed">AI agents pause at decision gates via `running-and-approvals`, surfacing `[ Approve / Reject ]` action cards for officers.</p>
            </div>

            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2 hover:border-[#c59e5f]/50 transition">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Lyzr Governor</span>
              <h3 className="font-bold text-sm text-slate-900">3. Fed SR 11-7 Model Ledger</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Immutable execution audit logging (`Execution ID`, `Context Hash`, `Tool Params`) for Federal Reserve MVG approval.</p>
            </div>

            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2 hover:border-[#c59e5f]/50 transition">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Lyzr RAI Engine</span>
              <h3 className="font-bold text-sm text-slate-900">4. Edge PII Privacy Shield</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Uses Lyzr RAI policies (`create_policy`) to scrub SSNs, Tax IDs, and account numbers at local boundary before LLM inference.</p>
            </div>

            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2 hover:border-[#c59e5f]/50 transition">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Agent Studio</span>
              <h3 className="font-bold text-sm text-slate-900">5. Git-for-Agents Pipeline</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Governs strict Dev ➔ Staging ➔ Production Private VPC promotion pipelines with version rollback for bank FDEs.</p>
            </div>

            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2 hover:border-[#c59e5f]/50 transition">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Simulation Engine</span>
              <h3 className="font-bold text-sm text-slate-900">6. Scenario Stress-Testing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Pre-tests multi-agent banking workflows against 1,000+ synthetic stress-test scenarios before client VPC launch.</p>
            </div>
          </div>
        </section>

        {/* 4. The 6 BFSI Opportunity Pillars (Taxonomy) */}
        <section id="taxonomy" className="py-6 border-b border-[#e2dacb]">
          <div className="mb-6 flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#121b18] text-[#c59e5f]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block">Section 4</span>
              <h2 className="text-2xl font-serif font-bold text-[#121b18]">The 6 BFSI Opportunity Pillars (Taxonomy)</h2>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#e2dacb] bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#121b18] text-white border-b border-white/10 uppercase font-mono text-[11px]">
                  <th className="p-3.5">Pillar</th>
                  <th className="p-3.5">Focus Area</th>
                  <th className="p-3.5">High-ROI Lyzr AI Agent Modules</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2dacb] text-slate-700">
                <tr className="hover:bg-[#fdfbf7] transition">
                  <td className="p-3.5 font-bold text-[#121b18]">1. Lending & Credit</td>
                  <td className="p-3.5 text-slate-500">CRE, SME & Corporate Debt</td>
                  <td className="p-3.5"><strong>Title Vetting Agent</strong> (Schedule B exceptions); <strong>Financial Spreading Agent</strong> (DSCR ≥ 1.25×); <strong>Court Scout Agent</strong> (PACER/foreclosures).</td>
                </tr>
                <tr className="hover:bg-[#fdfbf7] transition">
                  <td className="p-3.5 font-bold text-[#121b18]">2. Commercial Sales & RM</td>
                  <td className="p-3.5 text-slate-500">RM Productivity & Deal Origination</td>
                  <td className="p-3.5"><strong>RM Pre-Meeting Dossier Agent</strong> (SEC 10-K & news synthesis); <strong>Commercial Deal Structuring Co-Pilot</strong>; <strong>Cross-Sell Agent</strong>.</td>
                </tr>
                <tr className="hover:bg-[#fdfbf7] transition">
                  <td className="p-3.5 font-bold text-[#121b18]">3. Marketing & Growth</td>
                  <td className="p-3.5 text-slate-500">Acquisition & Compliance</td>
                  <td className="p-3.5"><strong>Ad Regulatory Compliance Agent</strong> (auditing ad copy against TILA, RESPA, CFPB, FCA rules); <strong>Hyper-Personalized Campaign Agent</strong>.</td>
                </tr>
                <tr className="hover:bg-[#fdfbf7] transition">
                  <td className="p-3.5 font-bold text-[#121b18]">4. Retail Operations</td>
                  <td className="p-3.5 text-slate-500">Branch & Customer Servicing</td>
                  <td className="p-3.5"><strong>Garnishment & Levy Execution Agent</strong> (court attachments & exempt cash calculation); <strong>Deceased Account Probate Agent</strong>.</td>
                </tr>
                <tr className="hover:bg-[#fdfbf7] transition">
                  <td className="p-3.5 font-bold text-[#121b18]">5. Risk & AML/KYC</td>
                  <td className="p-3.5 text-slate-500">Financial Crime & GRC</td>
                  <td className="p-3.5"><strong>UBO Tracing Agent</strong> (unwrapping offshore shell webs to ≥ 10% owners); <strong>SAR Narrative Writer Agent</strong> (FinCEN/FINTRAC).</td>
                </tr>
                <tr className="hover:bg-[#fdfbf7] transition">
                  <td className="p-3.5 font-bold text-[#121b18]">6. Wealth & Treasury</td>
                  <td className="p-3.5 text-slate-500">Private Banking & Hedging</td>
                  <td className="p-3.5"><strong>ISDA & CSA Master Agreement Auditor</strong>; <strong>Daily Margin Call Agent</strong>; <strong>Wealth Estate Planning Co-Pilot</strong>.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. Go-To-Market Enterprise Sales Engine */}
        <section id="gtm" className="py-6 border-b border-[#e2dacb]">
          <div className="mb-6 flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#121b18] text-[#c59e5f]">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block">Section 5</span>
              <h2 className="text-2xl font-serif font-bold text-[#121b18]">Go-To-Market (GTM) Enterprise Sales & Delivery Engine</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Motion #1</span>
              <h3 className="font-bold text-sm text-slate-900">Via Banking & Legal Partners</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Partner with banking law firms (e.g. Mayer Brown, Latham & Watkins) & compliance consultancies who pitch and co-sell Madison directly.</p>
            </div>

            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Motion #2</span>
              <h3 className="font-bold text-sm text-slate-900">Via System Integrators (SIs)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Partner with Accenture Financial Services, Capgemini Banking, PwC, EY, and Infosys who handle custom legacy mainframe API integrations.</p>
            </div>

            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Motion #3</span>
              <h3 className="font-bold text-sm text-slate-900">Via Cloud Marketplace Co-Sell</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Co-sell on AWS, Azure, and GCP Marketplaces letting bank CIOs draw from pre-committed cloud budgets (AWS EDP / Azure MACC commits).</p>
            </div>

            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Motion #4</span>
              <h3 className="font-bold text-sm text-slate-900">Direct Outbound ABM</h3>
              <p className="text-xs text-slate-600 leading-relaxed">High-touch C-suite outreach targeting Chief Credit Officers (CCOs), Chief Risk Officers (CROs), and General Counsels at $10B–$50B AUM regional banks.</p>
            </div>

            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Motion #5</span>
              <h3 className="font-bold text-sm text-slate-900">Marketing Inbound Engine</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Executive whitepapers, bank ROI calculators, SR 11-7 Model Risk Management compliance guides, and interactive web showcase demos.</p>
            </div>

            <div className="p-5 bg-[#466c5b]/10 border border-[#466c5b]/30 rounded-xl shadow-sm space-y-2">
              <span className="text-[10px] font-mono font-bold bg-[#466c5b] text-white px-2 py-0.5 rounded">Rapid Delivery</span>
              <h3 className="font-bold text-sm text-[#466c5b]">7-Day FDE Client Onboarding</h3>
              <p className="text-xs text-slate-700 leading-relaxed">Forward-Deployed Engineers (FDEs) use low-code configuration templates to map core APIs, connect SSO, and deploy in under 7 days.</p>
            </div>
          </div>
        </section>

        {/* 6. Near-Term, Mid-Term & Long-Term Execution Roadmap */}
        <section id="roadmap" className="py-6 border-b border-[#e2dacb]">
          <div className="mb-6 flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#121b18] text-[#c59e5f]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block">Section 6</span>
              <h2 className="text-2xl font-serif font-bold text-[#121b18]">Near-Term, Mid-Term & Long-Term Execution Roadmap</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Phase 1: Near-Term</span>
              <h3 className="font-bold text-sm text-slate-900">Showcase Demo</h3>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                <li>Build 21-day Lending Showcase App</li>
                <li>Develop FDE cloning scripts</li>
                <li>Write Sales Storyboard</li>
              </ul>
            </div>

            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Phase 2: Mid-Term</span>
              <h3 className="font-bold text-sm text-slate-900">Paid Bank Pilots</h3>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                <li>Execute 3 Paid Bank Pilots ($50K-$100K)</li>
                <li>Audit SR 11-7 Model Validation</li>
                <li>Measure baseline KPIs</li>
              </ul>
            </div>

            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Phase 3: Long-Term</span>
              <h3 className="font-bold text-sm text-slate-900">Horizontal Expansion</h3>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                <li>Launch Sales & AML Modules</li>
                <li>Formalize FDE Playbook</li>
                <li>Target Top 25 Regional Banks</li>
              </ul>
            </div>

            <div className="p-5 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Phase 4: Scale</span>
              <h3 className="font-bold text-sm text-slate-900">Global Scaling</h3>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                <li>Expand to UK/EU & CA registries</li>
                <li>Package direct API connectors</li>
                <li>Scale ARR licensing seats</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Open Discussions & Strategic Alignment */}
        <section id="alignment" className="py-6">
          <div className="mb-6 flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#121b18] text-[#c59e5f]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block">Section 7</span>
              <h2 className="text-2xl font-serif font-bold text-[#121b18]">Open Discussions & Strategic Alignment</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-[#466c5b]/10 text-[#466c5b] border border-[#466c5b]/30 rounded">[RECOMMENDED]</span>
              <h3 className="font-bold text-sm text-slate-900 pt-1">1. Standalone Product Suite Packaging</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Madison is packaged as a <strong>configurable standalone agentic AI software suite</strong> (the <em>Lyzr Banking Engine</em>) equipped with native banking mainframe connectors, rather than a passive template inside Lyzr Studio.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-[#466c5b]/10 text-[#466c5b] border border-[#466c5b]/30 rounded">[RECOMMENDED]</span>
              <h3 className="font-bold text-sm text-slate-900 pt-1">2. 20% R&D / 80% FDE Resource Flywheel</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Phase 1 Launch</strong>: Resource split is 20% Core R&D / 80% FDEs capturing real-world bank feedback.<br />
                <strong>Phase 2 Scale</strong>: Ratio shifts toward R&D-dominant scaling where FDEs exclusively handle low-code YAML/JSON configurations.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-[#466c5b]/10 text-[#466c5b] border border-[#466c5b]/30 rounded">[RECOMMENDED]</span>
              <h3 className="font-bold text-sm text-slate-900 pt-1">3. Inherited SOC-2 & SR 11-7 Readiness</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lyzr natively possesses SOC-2 Type-2 and HIPAA/Enterprise Security certifications. Built natively on the Lyzr Enterprise Stack, Madison <strong>inherits SOC-2 compliance out-of-the-box</strong> and satisfies Fed SR 11-7 Model Validation audits on Day 1.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-[#466c5b]/10 text-[#466c5b] border border-[#466c5b]/30 rounded">[RECOMMENDED]</span>
              <h3 className="font-bold text-sm text-slate-900 pt-1">4. System Integrator & Partner Co-Sell Motion</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active co-selling with global banking SIs (Accenture, Capgemini, PwC, EY) and banking legal/advisory partners. Partners manage legacy mainframe integration & client relationships, while Lyzr licenses the Madison agentic core.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#121b18] text-white/50 py-10 px-6 sm:px-16 border-t border-white/10 text-xs mt-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-white mb-1">Project Madison — Lyzr Enterprise Agentic Operating System</div>
            <div>Exhaustively grounded in official Lyzr SDK primitives & <code className="text-xs text-[#c59e5f]">madison_pitch.md</code>.</div>
          </div>
          <div className="text-right text-white/40 font-mono text-[11px]">
            <div>Internal Executive Strategy</div>
            <div>Synced with yb0203/lyzr-bfsi-prep</div>
          </div>
        </div>
      </footer>

    </div>
  );
};
