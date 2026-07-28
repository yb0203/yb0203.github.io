import React from 'react';
import { Cpu, Workflow, Building2, Lock, Database, Eye, Zap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const ArchitectureHarness: React.FC = () => {
  return (
    <section className="space-y-6 pb-10 border-b border-slate-800/80">
      <SectionHeader 
        id="architecture"
        number="02"
        title="Grounded Architecture (Lyzr Agentic Harness)"
        subtitle="Agentic Harness Loop Paradigm mapped 1-to-1 to official Lyzr SDK primitives"
        icon={Cpu}
      />

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
  );
};
