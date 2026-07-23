import { Cpu } from 'lucide-react';

export const PodRealignment = () => {
  return (
    <section id="ch6" className="py-12 border-b border-slate-200">
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block mb-1">
          Section 06 · Organization
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#121b18]">
          Team Realignment — 4 Vertical Pods + Shared VPC Platform Team
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mt-1">
          Moving away from generic horizontal PMs into dedicated vertical banking pods that pair legal ops domain experts with Forward-Deployed Engineers (FDEs).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Pod 1 */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-semibold text-sm text-slate-900">Commercial Lending Pod</h3>
          </div>
          <div className="text-xs text-slate-600 space-y-2">
            <div><strong>Owns:</strong> S1 Land Motion & Credit Documents</div>
            <div><strong>Key Focus:</strong> LSTA loan agreements, Schedule B title search, credit spreading audits.</div>
            <div className="pt-2 border-t border-slate-100 text-emerald-700 font-semibold text-[11px]">
              Target: 2 Design Partners in 60 Days
            </div>
          </div>
        </div>

        {/* Pod 2 */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-semibold text-sm text-slate-900">Litigation & Court Ops Pod</h3>
          </div>
          <div className="text-xs text-slate-600 space-y-2">
            <div><strong>Owns:</strong> Court Scout & Foreclosure Tracking</div>
            <div><strong>Key Focus:</strong> PACER court dockets, statutory FDCPA timers, dispute draft responses.</div>
            <div className="pt-2 border-t border-slate-100 text-amber-800 font-semibold text-[11px]">
              Target: Zero Missed Hearing Dates
            </div>
          </div>
        </div>

        {/* Pod 3 */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-red-100 text-red-800 flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="font-semibold text-sm text-slate-900">Risk, GRC & TPRM Pod</h3>
          </div>
          <div className="text-xs text-slate-600 space-y-2">
            <div><strong>Owns:</strong> S2 Compliance Pack & Regulatory Audits</div>
            <div><strong>Key Focus:</strong> Regulator MRA findings, OCC 2023-17 cloud vendor risk, model validation.</div>
            <div className="pt-2 border-t border-slate-100 text-red-700 font-semibold text-[11px]">
              Target: Model Validation Pack Shipped as Product
            </div>
          </div>
        </div>

        {/* Pod 4 */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h3 className="font-semibold text-sm text-slate-900">Panel Counsel Ops Pod</h3>
          </div>
          <div className="text-xs text-slate-600 space-y-2">
            <div><strong>Owns:</strong> Outside Law Firm Billing & SLA Audits</div>
            <div><strong>Key Focus:</strong> Legal invoice reconciliation, fee agreement compliance, panel database.</div>
            <div className="pt-2 border-t border-slate-100 text-indigo-700 font-semibold text-[11px]">
              Target: 15% Reduction in Outside Billing Costs
            </div>
          </div>
        </div>

        {/* Shared Platform Team */}
        <div className="bg-[#121b18] text-white rounded-xl p-5 shadow-sm md:col-span-2 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-[#c59e5f]" />
              <h3 className="font-semibold text-sm text-white">Shared Platform & VPC Security Team</h3>
            </div>
            <p className="text-xs text-white/70 mb-3">
              Cross-functional team building shared primitives: local Docker containers, Supabase RLS policies, 
              grounded PDF bounding-box coordinate engines, and offline vector indexes.
            </p>
          </div>
          <div className="text-[11px] text-[#c59e5f] font-mono font-semibold pt-2 border-t border-white/10">
            Build once, every pod reuses → Ensures 100% on-prem compliance across all banking accounts
          </div>
        </div>
      </div>
    </section>
  );
};
