import { SALES_STAGES, COMMERCIAL_TIERS } from '../data/strategyData';
import { DollarSign, Rocket, Network } from 'lucide-react';

export const Layer5BusinessLifecycle = () => {
  return (
    <section id="layer5" className="py-12 border-b border-slate-200">
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block mb-1">
          Layer 5 · Business Lifecycle
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#121b18]">
          6-Stage Sales Cycle & Tiered Commercial Pricing Model
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mt-1">
          Governing the GTM motion from direct outbound discovery to $15K paid pilots, enterprise VPC contracts ($150K–$250K+), and GSI partner channels.
        </p>
      </div>

      {/* 6-Stage Sales Pipeline */}
      <div className="mb-10">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Rocket className="w-4 h-4 text-[#466c5b]" />
          5B / 5C. 6-Stage Banking Sales Conversion Pipeline
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SALES_STAGES.map((s, idx) => (
            <div key={idx} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold bg-[#121b18] text-[#c59e5f] px-2 py-0.5 rounded">
                  {s.stage}
                </span>
                <span className="text-[11px] text-slate-500">{s.duration}</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900">{s.name}</h4>
              <p className="text-xs text-slate-600">{s.activity}</p>
              <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-800 font-semibold">
                Exit: {s.exitCriteria}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Commercial Tiers */}
      <div className="mb-10">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-[#c59e5f]" />
          5D. Commercial Pricing Tiers (USD Annual License)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COMMERCIAL_TIERS.map((t, idx) => (
            <div key={idx} className="p-5 bg-white border-2 border-slate-200 hover:border-[#466c5b] rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-base text-slate-900 mb-1">{t.name}</h4>
                <div className="text-xl font-bold font-mono text-[#466c5b] mb-3">{t.price}</div>
                <div className="text-xs text-slate-600 space-y-2 mb-4">
                  <div><strong>Target:</strong> {t.target}</div>
                  <div><strong>Scope:</strong> {t.scope}</div>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                Support SLA: {t.support}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GSI Partnerships */}
      <div>
        <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Network className="w-4 h-4 text-[#c77363]" />
          5B (Channel). Global Systems Integrator (GSI) Partnerships
        </h3>
        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-xs text-slate-700 space-y-2">
          <p>
            Large banks work through preferred IT vendors for software deployment. Lyzr BFSI builds co-sell programs with GSIs serving US banking accounts:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded font-semibold text-[#121b18]">
              Persistent Systems
              <div className="font-normal text-[11px] text-slate-500">Core banking integration partner</div>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded font-semibold text-[#121b18]">
              Accenture Financial Services
              <div className="font-normal text-[11px] text-slate-500">Enterprise VPC cloud deployment</div>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded font-semibold text-[#121b18]">
              PwC / EY Legal Ops
              <div className="font-normal text-[11px] text-slate-500">Regulatory compliance auditing partner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
