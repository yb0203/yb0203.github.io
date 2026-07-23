import { STRATEGY_LAYERS } from '../data/strategyData';
import { Layers, ArrowRight } from 'lucide-react';

export const StrategyLayersOverview = () => {
  return (
    <section id="overview" className="py-12 border-b border-slate-200">
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block mb-1">
          Architectural Framework
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#121b18]">
          The 6-Layer Strategy Hierarchy
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mt-1">
          Every document in the <code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-emerald-800">/strategy/legal-owl</code> repository 
          maps to one of these 6 MECE execution layers leading directly into the product and business lifecycle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {STRATEGY_LAYERS.map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-[#466c5b] transition flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#121b18] text-[#c59e5f] text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                  {item.layer}
                </span>
                <Layers className="w-4 h-4 text-slate-400" />
              </div>
              <h3 className="font-semibold text-base text-slate-900 mb-1">{item.name}</h3>
              <p className="text-xs text-slate-600 mb-3">{item.focus}</p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-[11px] text-[#466c5b] font-semibold flex items-center justify-between">
              <span>Output: {item.output}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
