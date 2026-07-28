import React from 'react';
import { Sparkles } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const Hero: React.FC = () => {
  return (
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

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Badge variant="slate">Target Markets: US, CA, UK & EU</Badge>
        <Badge variant="slate">Tier 1 Target: $10B–$50B+ AUM Banks</Badge>
        <Badge variant="emerald">Single-Tenant Security</Badge>
      </div>
    </section>
  );
};
