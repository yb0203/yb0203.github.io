import { BANK_ARCHETYPES, REGULATORY_FRAMEWORKS, COMPETITORS } from '../data/strategyData';
import { ShieldCheck, Building2, Scale } from 'lucide-react';

export const Layer1MarketIntel = () => {
  return (
    <section id="layer1" className="py-12 border-b border-slate-200">
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block mb-1">
          Layer 1 · Market Intelligence
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#121b18]">
          US Banking Landscape & Regulatory Security Moats
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mt-1">
          Grounding Legal Owl's market focus across bank tiers, federal compliance mandates (OCC, Fed, NYDFS), and competitive positioning.
        </p>
      </div>

      {/* Target Bank Archetypes */}
      <div className="mb-10">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Building2 className="w-4 h-4 text-[#466c5b]" />
          1A. Bank Tier Archetypes & Priority Target Segments
        </h3>
        <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100/80 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-600">
              <tr>
                <th className="p-3">Bank Segment</th>
                <th className="p-3">Legal Team Size</th>
                <th className="p-3">Sales Speed</th>
                <th className="p-3">AI Readiness</th>
                <th className="p-3">Budget Range</th>
                <th className="p-3">Strategy Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {BANK_ARCHETYPES.map((b, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-900">{b.segment}</td>
                  <td className="p-3">{b.teamSize}</td>
                  <td className="p-3">{b.decisionSpeed}</td>
                  <td className="p-3">{b.aiReadiness}</td>
                  <td className="p-3 font-mono font-semibold text-emerald-800">{b.budgetRange}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      b.priority.includes('Tier 1')
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : 'bg-amber-100 text-amber-800 border border-amber-200'
                    }`}>
                      {b.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regulatory Moats */}
      <div className="mb-10">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#c59e5f]" />
          1B. Regulatory Frameworks & Compliance Moats
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REGULATORY_FRAMEWORKS.map((r, i) => (
            <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-slate-900">{r.name}</span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">{r.authority}</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">{r.rule}</p>
              <div className="text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 p-2 rounded font-medium">
                🛡️ <strong>Legal Owl Moat:</strong> {r.legalOwlMoat}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competitor Benchmarking Matrix */}
      <div>
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Scale className="w-4 h-4 text-[#c77363]" />
          1C. Competitive Benchmarking Matrix
        </h3>
        <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl shadow-sm">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100/80 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-600">
              <tr>
                <th className="p-3">Competitor</th>
                <th className="p-3">Target Market</th>
                <th className="p-3">Deployment Model</th>
                <th className="p-3">Pricing Tier</th>
                <th className="p-3">Core Deficit / Weakness</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {COMPETITORS.map((c, i) => (
                <tr key={i} className={c.name === 'Legal Owl' ? 'bg-[#fdfbf7] font-semibold border-l-4 border-l-[#466c5b]' : 'hover:bg-slate-50'}>
                  <td className="p-3 font-bold text-slate-900">{c.name}</td>
                  <td className="p-3">{c.targetMarket}</td>
                  <td className="p-3 font-mono text-[11px]">{c.deploymentModel}</td>
                  <td className="p-3 font-mono">{c.pricing}</td>
                  <td className={`p-3 text-[11px] ${c.name === 'Legal Owl' ? 'text-[#466c5b] font-bold' : 'text-slate-600'}`}>{c.keyDeficit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
