import { useState } from 'react';
import { BANKING_DIVISIONS, type BankingDivision } from '../data/strategyData';
import { ChevronDown, AlertCircle, FileText, Scale } from 'lucide-react';

export const DivisionAccordion = () => {
  const [openId, setOpenId] = useState<string>("lending");

  const getIntensityBadge = (intensity: BankingDivision['intensity']) => {
    switch (intensity) {
      case 'Existential':
        return <span className="bg-red-500/10 text-red-700 border border-red-200 px-2.5 py-0.5 rounded text-[11px] font-bold">Existential</span>;
      case 'Maximum':
        return <span className="bg-amber-500/10 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded text-[11px] font-bold">Maximum Risk</span>;
      case 'High':
        return <span className="bg-emerald-500/10 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded text-[11px] font-bold">High Intensity</span>;
      default:
        return <span className="bg-slate-500/10 text-slate-700 border border-slate-200 px-2.5 py-0.5 rounded text-[11px] font-bold">Low / Standard</span>;
    }
  };

  return (
    <section id="ch2" className="py-12 border-b border-slate-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block mb-1">
            Section 02 · Taxonomy
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#121b18]">
            The 7 Operating Divisions & Legal Intensity Map
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mt-1">
            Synthesized directly from <code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-emerald-800">understand_banking.md</code>. 
            Every legal workflow in a bank falls into one of these MECE divisions.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {BANKING_DIVISIONS.map((div) => {
          const isOpen = openId === div.id;
          return (
            <div 
              key={div.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition hover:border-slate-300"
            >
              <button
                onClick={() => setOpenId(isOpen ? "" : div.id)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition"
              >
                <div className="flex items-center gap-3">
                  <Scale className="w-4 h-4 text-[#466c5b] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm text-slate-900">{div.name}</h3>
                    <p className="text-xs text-slate-500 line-clamp-1">{div.legalNeed}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  {getIntensityBadge(div.intensity)}
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/30 text-xs text-slate-700 space-y-4">
                  <div className="p-3 rounded-lg bg-[#fdfbf7] border border-[#c59e5f]/30 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-[#c59e5f] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">Strategic Impact: </span>
                      {div.businessImpact}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">
                      Mapped Workflows & Legal Assistance Touchpoints:
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {div.subcategories.map((sub, idx) => (
                        <div key={idx} className="p-3 bg-white border border-slate-200 rounded-lg">
                          <div className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-[#466c5b]" />
                            {sub.title}
                          </div>
                          <div className="text-slate-600 mb-2">{sub.legalWork}</div>
                          <div className="text-[11px] text-emerald-800 font-medium bg-emerald-50 p-1.5 rounded">
                            💡 {sub.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
