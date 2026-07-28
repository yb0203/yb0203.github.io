import React from 'react';
import { Layers } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const TaxonomyMatrix: React.FC = () => {
  const rows = [
    {
      pillar: '1. Lending & Credit',
      color: 'text-emerald-400',
      focus: 'CRE, SME & Corporate Debt',
      modules: 'Title Vetting Agent (Schedule B exceptions); Financial Spreading Agent (DSCR ≥ 1.25×); Court Scout Agent (PACER/foreclosures).',
    },
    {
      pillar: '2. Commercial Sales & RM',
      color: 'text-indigo-400',
      focus: 'RM Productivity & Deal Origination',
      modules: 'RM Pre-Meeting Dossier Agent (SEC 10-K & news synthesis); Commercial Deal Structuring Co-Pilot; Cross-Sell Agent.',
    },
    {
      pillar: '3. Marketing & Growth',
      color: 'text-purple-400',
      focus: 'Acquisition & Compliance',
      modules: 'Ad Regulatory Compliance Agent (auditing ad copy against TILA, RESPA, CFPB, FCA rules); Hyper-Personalized Campaign Copy Agent.',
    },
    {
      pillar: '4. Retail Operations',
      color: 'text-cyan-400',
      focus: 'Branch & Customer Servicing',
      modules: 'Garnishment & Levy Execution Agent (court attachments & exempt cash calculation); Deceased Account Probate Agent.',
    },
    {
      pillar: '5. Risk & AML/KYC',
      color: 'text-amber-400',
      focus: 'Financial Crime & GRC',
      modules: 'UBO Tracing Agent (unwrapping offshore shell webs to ≥ 10% owners); SAR Narrative Writer Agent (FinCEN/FINTRAC reports).',
    },
    {
      pillar: '6. Wealth & Treasury',
      color: 'text-rose-400',
      focus: 'Private Banking & Hedging',
      modules: 'ISDA & CSA Master Agreement Auditor; Daily Margin Call Agent; Wealth Estate Planning Co-Pilot.',
    },
  ];

  return (
    <section className="space-y-6 pb-10 border-b border-slate-800/80">
      <SectionHeader 
        id="taxonomy"
        number="04"
        title="The 6 BFSI Opportunity Pillars (Taxonomy)"
        subtitle="Exhaustive opportunity matrix covering core banking verticals across US, CA, UK & EU"
        icon={Layers}
      />

      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-950 text-slate-300 border-b border-slate-800 font-mono text-[11px] uppercase">
              <th className="p-4">Pillar</th>
              <th className="p-4">Focus Area</th>
              <th className="p-4">High-ROI Lyzr AI Agent Modules</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300">
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-slate-800/40 transition">
                <td className={`p-4 font-bold ${r.color}`}>{r.pillar}</td>
                <td className="p-4 text-slate-400">{r.focus}</td>
                <td className="p-4">{r.modules}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
