import { PERSONAS } from '../data/strategyData';
import { Users, ShieldAlert } from 'lucide-react';

export const Layer4StakeholderMap = () => {
  return (
    <section id="layer4" className="py-12 border-b border-slate-200">
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block mb-1">
          Layer 4 · Stakeholder Map
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#121b18]">
          Buying Committee Personas & DACI Decision Matrix
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mt-1">
          Mapping functional heads across economic buying power, primary motivators, and technical veto powers (IT Security & Risk).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PERSONAS.map((p, idx) => (
          <div key={idx} className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#466c5b]" />
              <h3 className="font-bold text-sm text-slate-900">{p.title}</h3>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <div><strong>Workflows Owned:</strong> {p.workflowsOwned}</div>
              <div><strong>Key Motivation:</strong> {p.keyMotivation}</div>
              <div className="text-emerald-800 font-medium bg-emerald-50 p-1.5 rounded text-[11px]">
                🎯 <strong>Success Metric:</strong> {p.successMetric}
              </div>
              <div className="text-amber-900 bg-amber-50 p-1.5 rounded text-[11px] flex items-start gap-1">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-700 flex-shrink-0 mt-0.5" />
                <span><strong>Primary Fear:</strong> {p.primaryFear}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
