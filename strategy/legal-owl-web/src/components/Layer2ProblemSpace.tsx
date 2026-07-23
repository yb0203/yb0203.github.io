import { PAIN_POINTS } from '../data/strategyData';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export const Layer2ProblemSpace = () => {
  return (
    <section id="layer2" className="py-12 border-b border-slate-200">
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block mb-1">
          Layer 2 · Problem Space
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#121b18]">
          5 MECE Workflows & Scored Pain-Point Prioritization Matrix
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mt-1">
          Deconstructing bank legal friction across 5 operational workflows (W1–W5) and scoring pain points by Frequency × Severity × Addressability.
        </p>
      </div>

      {/* Scored Pain Point Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-900 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            Pain Point Prioritization Matrix (Ranked by Impact Score)
          </span>
          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono">
            Green = MVP Focus
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100/70 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-600">
              <tr>
                <th className="p-3">Rank</th>
                <th className="p-3">Code</th>
                <th className="p-3">Workflow</th>
                <th className="p-3">Specific Operational Pain Point</th>
                <th className="p-3">Who Feels It</th>
                <th className="p-3">Freq</th>
                <th className="p-3">Severity</th>
                <th className="p-3">Score</th>
                <th className="p-3">MVP Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {PAIN_POINTS.map((pp) => (
                <tr key={pp.code} className={pp.mvpFocus ? 'bg-emerald-50/40 font-semibold' : 'hover:bg-slate-50'}>
                  <td className="p-3 font-mono text-slate-500">#{pp.rank}</td>
                  <td className="p-3 font-mono font-bold text-slate-900">{pp.code}</td>
                  <td className="p-3 text-slate-600 whitespace-nowrap">{pp.workflow}</td>
                  <td className="p-3 text-slate-900 max-w-xs">{pp.specificPain}</td>
                  <td className="p-3 text-slate-600">{pp.whoFeelsIt}</td>
                  <td className="p-3">{pp.frequency}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      pp.severity === 'High' ? 'bg-red-100 text-red-800' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {pp.severity}
                    </span>
                  </td>
                  <td className="p-3 font-mono font-bold text-[#466c5b]">{pp.score}</td>
                  <td className="p-3 whitespace-nowrap">
                    {pp.mvpFocus ? (
                      <span className="inline-flex items-center gap-1 text-emerald-800 text-[10px] font-bold bg-emerald-100 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3" /> MVP Core
                      </span>
                    ) : (
                      <span className="text-slate-400 text-[10px]">Phase 2+</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
