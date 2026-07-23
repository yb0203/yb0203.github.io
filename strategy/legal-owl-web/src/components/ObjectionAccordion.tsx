import { useState } from 'react';
import { OBJECTIONS } from '../data/strategyData';
import { ShieldCheck, MessageSquare, CheckCircle } from 'lucide-react';

export const ObjectionAccordion = () => {
  const [activeId, setActiveId] = useState<string>("security");

  const activeObjection = OBJECTIONS.find(o => o.id === activeId) || OBJECTIONS[0];

  return (
    <section id="ch5" className="py-12 border-b border-slate-200">
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block mb-1">
          Section 05 · Decision Engine
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#121b18]">
          Objection Handling & Security Playbook
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mt-1">
          Direct, concrete responses to the primary technical and risk objections raised by banking IT Security, General Counsel, and Procurement teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Objection Tabs */}
        <div className="space-y-2">
          {OBJECTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`w-full p-4 rounded-xl text-left border transition text-xs font-semibold flex items-center justify-between ${
                activeId === item.id
                  ? 'bg-[#121b18] text-white border-[#121b18]'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{item.title}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded ${activeId === item.id ? 'bg-[#c59e5f] text-slate-950 font-bold' : 'bg-slate-100 text-slate-500'}`}>
                {item.persona.split('/')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Response Detail */}
        <div className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#c59e5f]">
              <MessageSquare className="w-4 h-4" />
              Target Persona: {activeObjection.persona}
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs mb-4">
              <strong>The Buyer's Objection: </strong> "{activeObjection.objection}"
            </div>

            <div className="p-5 rounded-xl bg-[#fdfbf7] border border-[#466c5b]/30 text-slate-800 text-xs leading-relaxed">
              <div className="flex items-center gap-2 text-[#466c5b] font-bold mb-2 uppercase tracking-wider text-[10px]">
                <CheckCircle className="w-4 h-4" />
                Lyzr BFSI's Proven Counter:
              </div>
              <p className="text-slate-700 text-sm font-sans">{activeObjection.response}</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-[#466c5b]" />
            <span>Pre-packaged in our Security & Compliance Vendor Kit</span>
          </div>
        </div>
      </div>
    </section>
  );
};
