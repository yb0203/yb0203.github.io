import React from 'react';
import { Cpu, Workflow, Building2, Lock, Database, Eye, Zap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const ArchitectureHarness: React.FC = () => {
  return (
    <section className="space-y-6 pb-10 border-b border-[#281c17]">
      <SectionHeader 
        id="architecture"
        number="02"
        title="Grounded Architecture (Lyzr Agentic Harness)"
        subtitle="Agentic Harness Loop Paradigm mapped 1-to-1 to official Lyzr SDK primitives"
        icon={Cpu}
      />

      <div className="p-6 sm:p-8 rounded-2xl bg-[#18100c]/90 border border-[#33221b] space-y-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#33221b] pb-4 text-xs font-mono">
          <span className="text-[#e26a45] font-bold uppercase tracking-wider">MADISON ENTERPRISE HARNESS ARCHITECTURE</span>
          <span className="text-[#a89f9b]">Single-Tenant Bank Private VPC</span>
        </div>

        {/* Handshake Layer */}
        <div className="p-5 rounded-xl bg-[#211410] border border-[#442217] space-y-2">
          <div className="flex items-center gap-2 text-[#ff7a59] font-bold text-xs uppercase font-mono tracking-wider">
            <Workflow className="w-4 h-4 text-[#e26a45]" />
            1. Bank Client & Officer Interaction Handshake (Human-in-the-Loop)
          </div>
          <ul className="text-xs text-[#c4bbb7] space-y-1.5 list-disc list-inside">
            <li>Bank Officer Interface & Co-Pilot Action Cards (`[ Approve ]`, `[ Edit ]`, `[ Reject ]`) via Lyzr Superflow</li>
            <li>Grounded PDF Citation Viewer & Highlighted Bounding Boxes (`x, y, w, h`) with 0% hallucination risk</li>
          </ul>
        </div>

        {/* Application Modules Layer */}
        <div className="p-5 rounded-xl bg-[#211410] border border-[#442217] space-y-3">
          <div className="flex items-center gap-2 text-[#ff7a59] font-bold text-xs uppercase font-mono tracking-wider">
            <Building2 className="w-4 h-4 text-[#e26a45]" />
            2. Templatized BFSI Application Modules
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-[#140d0a] border border-[#33221b]">
              <strong className="text-white block mb-0.5 font-serif">Commercial Lending</strong>
              <span className="text-[#a89f9b]">Title Exceptions, DSCR Spreading, Court Scout</span>
            </div>
            <div className="p-3 rounded-lg bg-[#140d0a] border border-[#33221b]">
              <strong className="text-white block mb-0.5 font-serif">Commercial Sales / RM</strong>
              <span className="text-[#a89f9b]">Pre-Meeting Dossiers, Deal Structuring</span>
            </div>
            <div className="p-3 rounded-lg bg-[#140d0a] border border-[#33221b]">
              <strong className="text-white block mb-0.5 font-serif">Risk, AML & Retail Ops</strong>
              <span className="text-[#a89f9b]">UBO Tracing, SAR Narratives, Garnishments</span>
            </div>
          </div>
        </div>

        {/* Lyzr Harness Core Loop */}
        <div className="p-5 rounded-xl bg-[#211410] border border-[#e26a45]/40 space-y-4 shadow-lg">
          <div className="flex items-center justify-between border-b border-[#33221b] pb-2 text-xs">
            <div className="flex items-center gap-2 text-[#ff7a59] font-bold uppercase font-mono tracking-wider">
              <Lock className="w-4 h-4 text-[#e26a45]" />
              3. Lyzr Governor & Agentic Harness Loop Core
            </div>
            <span className="font-mono text-[#a89f9b]">Fed SR 11-7 MRM Audit Ledger</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-lg bg-[#140d0a] border border-[#33221b] space-y-1">
              <strong className="text-[#ff7a59] flex items-center gap-1.5 font-mono">
                <Cpu className="w-3.5 h-3.5 text-[#e26a45]" /> 1. Model (Brain)
              </strong>
              <p className="text-[#a89f9b]">• Lyzr ADK `Agent()`, Multi-LLM Router, `Task()` graph</p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#140d0a] border border-[#33221b] space-y-1">
              <strong className="text-[#ff7a59] flex items-center gap-1.5 font-mono">
                <Zap className="w-3.5 h-3.5 text-[#e26a45]" /> 2. Action ➔ Tools / Sandbox
              </strong>
              <p className="text-[#a89f9b]">• Lyzr Superflow Node Approvals, E2B Sandbox, Core APIs</p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#140d0a] border border-[#33221b] space-y-1">
              <strong className="text-[#ff7a59] flex items-center gap-1.5 font-mono">
                <Database className="w-3.5 h-3.5 text-[#e26a45]" /> 3. Context & Memory
              </strong>
              <p className="text-[#a89f9b]">• Lyzr ADK Hybrid RAG, Lyzr Cognis Memory Engine</p>
            </div>
            <div className="p-3.5 rounded-lg bg-[#140d0a] border border-[#33221b] space-y-1">
              <strong className="text-[#ff7a59] flex items-center gap-1.5 font-mono">
                <Eye className="w-3.5 h-3.5 text-[#e26a45]" /> 4. Observation & Grounding
              </strong>
              <p className="text-[#a89f9b]">• PDF Bounding-Box Overlay (`x,y,w,h`), Lyzr RAI PII Shield</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
