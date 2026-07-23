import { ROADMAP_PHASES } from '../data/strategyData';
import { CheckCircle2, Target } from 'lucide-react';

export const Layer6ProductLifecycle = () => {
  return (
    <section id="layer6" className="py-12 border-b border-slate-200">
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block mb-1">
          Layer 6 · Product Lifecycle
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#121b18]">
          4-Phase Roadmap & Quantitative Success Metrics
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mt-1">
          Scaling Lyzr BFSI from initial MVP verification to multi-market segment expansion and enterprise ecosystem dominance.
        </p>
      </div>

      {/* 4-Phase Roadmap Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {ROADMAP_PHASES.map((p, idx) => (
          <div key={idx} className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">
                {p.phase}
              </span>
              <span className="text-xs font-semibold text-slate-500">{p.timeline}</span>
            </div>
            <h3 className="font-bold text-base text-slate-900">{p.title}</h3>
            <p className="text-xs text-slate-600"><strong>Strategic Goal:</strong> {p.goal}</p>

            <div className="space-y-1 text-xs">
              <div className="font-bold text-slate-900 text-[11px] uppercase tracking-wider">Key Features:</div>
              <ul className="space-y-1">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#466c5b]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 text-[11px] space-y-1">
              <div className="text-emerald-800 font-medium bg-emerald-50 p-1.5 rounded flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-emerald-700" />
                <span><strong>Target KPI:</strong> {p.metrics}</span>
              </div>
              <div className="text-slate-600 font-semibold">
                Milestone: {p.businessMilestone}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
