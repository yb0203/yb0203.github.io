import { Shield, Sparkles, Cpu, Lock, Building, Layers3 } from 'lucide-react';

export const MadisonMasterPitch = () => {
  return (
    <section id="madison-pitch" className="py-12 border-b border-[#e2dacb] scroll-mt-16">
      {/* Header Banner */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c59e5f] bg-[#c59e5f]/10 border border-[#c59e5f]/30 px-3 py-1 rounded-full mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Master Product Strategy & Architecture Proposal
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#121b18] font-bold">
          Project Madison — <em className="italic text-[#c59e5f]">Executive Master Pitch</em>
        </h2>
        <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
          An Enterprise Agentic Operating System built natively on the <strong>Lyzr Enterprise Stack</strong> (`Lyzr ADK`, `Automata`, `Cognis`, `RAI`, `Governor`, `Agent Studio`). Mapped for internal leadership review across US, CA, UK & EU banks ($10B–$50B+ AUM).
        </p>
      </div>

      {/* Motto Card */}
      <div className="bg-[#121b18] text-white p-6 rounded-2xl mb-10 shadow-lg border border-white/10 relative overflow-hidden">
        <div className="flex items-start gap-4 relative z-10">
          <div className="p-3 bg-[#c59e5f]/20 border border-[#c59e5f]/40 rounded-xl text-[#c59e5f]">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#c59e5f] mb-1">Official Product Motto</div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              "A Sovereign Agentic Operating System for Enterprise Banking"
            </div>
            <div className="text-xs text-white/60 mt-2">
              Ensures total data isolation, 100% auditability, zero-hallucination PDF coordinate grounding, and rapid deployment across any bank infrastructure.
            </div>
          </div>
        </div>
      </div>

      {/* 1. Executive Summary & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#c59e5f]">1. Executive Overview</h3>
          <p className="text-xs text-slate-700 leading-relaxed">
            Madison transforms slow, document-heavy banking operations into autonomous, zero-hallucination, human-governed workflows—starting with high-value Commercial Lending and expanding horizontally into Commercial Sales, Marketing Compliance, Retail Ops, and AML/KYC ($10B–$50B+ AUM banks).
          </p>
        </div>

        <div className="p-6 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700">2. Strategic Vision</h3>
          <p className="text-xs text-slate-700 leading-relaxed">
            To establish <strong>Madison</strong> as the premier enterprise agentic product suite for banking—leveraging Lyzr’s full-stack AI infrastructure to automate high-friction financial workflows with 100% auditability, bank-grade PII isolation, and zero-hallucination PDF coordinate grounding.
          </p>
        </div>
      </div>

      {/* 2. Grounded Architecture Harness Box */}
      <div className="mb-10 bg-[#121b18] text-white rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#c59e5f]" />
            <h3 className="text-lg font-bold font-serif text-white">2. Grounded Architecture (Lyzr Agentic Harness)</h3>
          </div>
          <span className="text-xs font-mono text-[#c59e5f]">Single-Tenant Bank Private VPC</span>
        </div>

        {/* Handshake Box */}
        <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-[#c59e5f] font-bold text-xs">
            <span>🤝 BANK CLIENT & OFFICER INTERACTION HANDSHAKE (HUMAN-IN-THE-LOOP)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/80">
            <div className="bg-black/40 p-2.5 rounded border border-white/5">• Bank Officer Interface & Co-Pilot Action Cards (`[ Approve ]`, `[ Edit ]`, `[ Reject ]`)</div>
            <div className="bg-black/40 p-2.5 rounded border border-white/5">• Grounded PDF Viewer & Highlighted Bounding Boxes (`x, y, w, h`)</div>
          </div>
        </div>

        {/* Application Modules Box */}
        <div className="p-4 bg-indigo-950/40 border border-indigo-500/30 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs">
            <span>🏦 TEMPLATIZED BFSI APPLICATION MODULES</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-indigo-100">
            <div className="bg-black/40 p-2.5 rounded border border-white/5">
              <strong className="text-white block mb-0.5">Commercial Lending</strong>
              <span className="text-white/60">Title Exceptions, DSCR Spreading, Court Scout</span>
            </div>
            <div className="bg-black/40 p-2.5 rounded border border-white/5">
              <strong className="text-white block mb-0.5">Commercial Sales/RM</strong>
              <span className="text-white/60">Pre-Meeting Dossiers, Deal Structuring</span>
            </div>
            <div className="bg-black/40 p-2.5 rounded border border-white/5">
              <strong className="text-white block mb-0.5">Risk, AML & Retail Ops</strong>
              <span className="text-white/60">UBO Tracing, SAR Narratives, Garnishments</span>
            </div>
          </div>
        </div>

        {/* Agentic Harness Loop Core */}
        <div className="p-4 bg-emerald-950/30 border border-emerald-500/30 rounded-xl space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
              <Lock className="w-4 h-4" />
              <span>LYZR GOVERNOR & PRIVATE VPC HARNESS (Fed SR 11-7 MRM Audit Ledger)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-black/50 p-3 rounded border border-white/5 space-y-1">
              <strong className="text-indigo-300 block">🧠 1. Model (Brain)</strong>
              <p className="text-white/70">• Lyzr ADK `Agent()`, Multi-LLM Router, `Task()` operational graph</p>
            </div>
            <div className="bg-black/50 p-3 rounded border border-white/5 space-y-1">
              <strong className="text-emerald-300 block">🛠️ 2. Action ➔ Tools / Sandbox</strong>
              <p className="text-white/70">• Lyzr Superflow Node Approvals, E2B Code Sandbox, Core APIs</p>
            </div>
            <div className="bg-black/50 p-3 rounded border border-white/5 space-y-1">
              <strong className="text-purple-300 block">💾 3. Context & Memory</strong>
              <p className="text-white/70">• Lyzr ADK Hybrid RAG, Lyzr Cognis Memory Engine</p>
            </div>
            <div className="bg-black/50 p-3 rounded border border-white/5 space-y-1">
              <strong className="text-cyan-300 block">👁️ 4. Observation & Grounding</strong>
              <p className="text-white/70">• PDF Bounding-Box Overlay (`x,y,w,h`), Lyzr RAI PII Shield</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Core Product Differentiators */}
      <div className="mb-10">
        <div className="mb-4">
          <h3 className="text-xl font-serif font-bold text-[#121b18]">3. 6 Core Product Differentiators Grounded in Lyzr</h3>
          <p className="text-xs text-slate-500">Mapping native Lyzr enterprise primitives directly to banking value</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
            <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Lyzr KB + Citation</span>
            <h4 className="font-bold text-sm text-slate-900">1. PDF Citation Bounding-Box</h4>
            <p className="text-xs text-slate-600">Visual `x,y,w,h` coordinates on PDF documents. 0% LLM hallucination risk with verifiable proof.</p>
          </div>

          <div className="p-4 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
            <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Superflow Node</span>
            <h4 className="font-bold text-sm text-slate-900">2. Approve-Before-Act Cards</h4>
            <p className="text-xs text-slate-600">Agents pause at decision gates via `running-and-approvals`, surfacing `[ Approve / Reject ]` cards for officers.</p>
          </div>

          <div className="p-4 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
            <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Lyzr Governor</span>
            <h4 className="font-bold text-sm text-slate-900">3. Fed SR 11-7 Model Ledger</h4>
            <p className="text-xs text-slate-600">Immutable execution audit logging (`Execution ID`, `Context Hash`, `Tool Params`) for Federal Reserve MVG approval.</p>
          </div>

          <div className="p-4 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
            <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Lyzr RAI Engine</span>
            <h4 className="font-bold text-sm text-slate-900">4. Edge PII Privacy Shield</h4>
            <p className="text-xs text-slate-600">Scrubs SSNs, Tax IDs, and NPI data locally before LLM inference (GLBA & OCC Bulletin 2023-17 compliant).</p>
          </div>

          <div className="p-4 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
            <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Agent Studio</span>
            <h4 className="font-bold text-sm text-slate-900">5. Git-for-Agents Pipeline</h4>
            <p className="text-xs text-slate-600">Governs strict Dev ➔ Staging ➔ Production Private VPC promotion pipelines with version rollback for bank FDEs.</p>
          </div>

          <div className="p-4 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-2">
            <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">Simulation Engine</span>
            <h4 className="font-bold text-sm text-slate-900">6. Scenario Sandbox</h4>
            <p className="text-xs text-slate-600">Pre-tests multi-agent banking workflows against 1,000+ synthetic stress-test scenarios before client VPC launch.</p>
          </div>
        </div>
      </div>

      {/* 4. 5-Channel GTM Engine */}
      <div className="mb-10 p-6 bg-white border border-[#e2dacb] rounded-xl shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Building className="w-5 h-5 text-[#c59e5f]" />
          <h3 className="text-xl font-serif font-bold text-[#121b18]">4. Go-To-Market 5-Channel Sales & Co-Sell Engine</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          <div className="p-3 bg-[#fdfbf7] border border-[#e2dacb] rounded-lg text-xs space-y-1">
            <strong className="text-[#c59e5f] block font-mono">1. Legal Partners</strong>
            <p className="text-slate-600">Law firms & consultancies pitch and co-sell Madison to bank clients.</p>
          </div>
          <div className="p-3 bg-[#fdfbf7] border border-[#e2dacb] rounded-lg text-xs space-y-1">
            <strong className="text-[#c59e5f] block font-mono">2. System Integrators</strong>
            <p className="text-slate-600">Accenture, Capgemini, PwC & EY manage core API integrations.</p>
          </div>
          <div className="p-3 bg-[#fdfbf7] border border-[#e2dacb] rounded-lg text-xs space-y-1">
            <strong className="text-[#c59e5f] block font-mono">3. Cloud Marketplace</strong>
            <p className="text-slate-600">AWS/Azure EDP drawdowns shorten procurement to 3 weeks.</p>
          </div>
          <div className="p-3 bg-[#fdfbf7] border border-[#e2dacb] rounded-lg text-xs space-y-1">
            <strong className="text-[#c59e5f] block font-mono">4. Direct ABM</strong>
            <p className="text-slate-600">High-touch C-suite outreach targeting CCOs & General Counsels.</p>
          </div>
          <div className="p-3 bg-[#fdfbf7] border border-[#e2dacb] rounded-lg text-xs space-y-1">
            <strong className="text-[#c59e5f] block font-mono">5. Inbound Engine</strong>
            <p className="text-slate-600">SR 11-7 compliance guides & bank ROI calculators.</p>
          </div>
        </div>

        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 flex items-center justify-between">
          <span>⚡ <strong>Rapid Client Onboarding:</strong> Forward-Deployed Engineers (FDEs) deploy into bank Private VPCs in <strong>under 7 days</strong> using low-code configuration templates.</span>
        </div>
      </div>

      {/* 5. Open Discussions & Strategic Alignment */}
      <div className="p-6 bg-[#fdfbf7] border border-[#c59e5f]/40 rounded-xl space-y-4">
        <div className="flex items-center gap-2">
          <Layers3 className="w-5 h-5 text-[#c59e5f]" />
          <h3 className="text-xl font-serif font-bold text-[#121b18]">5. Open Discussions & Recommended Directives</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-white border border-[#e2dacb] rounded-lg space-y-1">
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px]">[RECOMMENDED]</span>
            <strong className="text-slate-900 block pt-1">1. Standalone Product Packaging</strong>
            <p className="text-slate-600">Packaged as a <strong>configurable standalone agentic AI software suite</strong> (the <em>Lyzr Banking Engine</em>) with native mainframe connectors.</p>
          </div>

          <div className="p-4 bg-white border border-[#e2dacb] rounded-lg space-y-1">
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px]">[RECOMMENDED]</span>
            <strong className="text-slate-900 block pt-1">2. 20% R&D / 80% FDE Resource Flywheel</strong>
            <p className="text-slate-600">Phase 1 FDE-led feedback loop shifting to R&D-dominant low-code scaling in Phase 2.</p>
          </div>

          <div className="p-4 bg-white border border-[#e2dacb] rounded-lg space-y-1">
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px]">[RECOMMENDED]</span>
            <strong className="text-slate-900 block pt-1">3. Inherited SOC-2 & SR 11-7 Readiness</strong>
            <p className="text-slate-600">Inherits Lyzr's native SOC-2 Type-2 & HIPAA certifications out-of-the-box on Day 1 for Fed MVG approval.</p>
          </div>

          <div className="p-4 bg-white border border-[#e2dacb] rounded-lg space-y-1">
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded text-[10px]">[RECOMMENDED]</span>
            <strong className="text-slate-900 block pt-1">4. SI & Partner Co-Sell Motion</strong>
            <p className="text-slate-600">Active co-selling with global SIs & legal partners who handle core API integrations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
