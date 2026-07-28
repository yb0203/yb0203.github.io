import React from 'react';
import { Layers } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const TaxonomyMatrix: React.FC = () => {
  const rows = [
    {
      pillar: '1. Lending & Credit',
      focus: 'CRE, SME & Corporate Debt',
      modules: 'Title Vetting Agent (Schedule B exceptions); Financial Spreading Agent (DSCR ≥ 1.25×); Court Scout Agent (PACER/foreclosures).',
    },
    {
      pillar: '2. Commercial Sales & RM',
      focus: 'RM Productivity & Deal Origination',
      modules: 'RM Pre-Meeting Dossier Agent (SEC 10-K & news synthesis); Commercial Deal Structuring Co-Pilot; Cross-Sell Agent.',
    },
    {
      pillar: '3. Marketing & Growth',
      focus: 'Acquisition & Compliance',
      modules: 'Ad Regulatory Compliance Agent (auditing ad copy against TILA, RESPA, CFPB, FCA rules); Hyper-Personalized Campaign Copy Agent.',
    },
    {
      pillar: '4. Retail Operations',
      focus: 'Branch & Customer Servicing',
      modules: 'Garnishment & Levy Execution Agent (court attachments & exempt cash calculation); Deceased Account Probate Agent.',
    },
    {
      pillar: '5. Risk & AML/KYC',
      focus: 'Financial Crime & GRC',
      modules: 'UBO Tracing Agent (unwrapping offshore shell webs to ≥ 10% owners); SAR Narrative Writer Agent (FinCEN/FINTRAC reports).',
    },
    {
      pillar: '6. Wealth & Treasury',
      focus: 'Private Banking & Hedging',
      modules: 'ISDA & CSA Master Agreement Auditor; Daily Margin Call Agent; Wealth Estate Planning Co-Pilot.',
    },
  ];

  return (
    <section className="space-y-6 pb-10 border-b border-[#281c17]">
      <SectionHeader 
        id="taxonomy"
        number="04"
        title="The 6 BFSI Opportunity Pillars (Taxonomy)"
        subtitle="Exhaustive opportunity matrix covering core banking verticals across US, CA, UK & EU"
        icon={Layers}
      />

      <div className="overflow-x-auto rounded-2xl border border-[#33221b] bg-[#18100c]/90 shadow-xl">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-[#211410] text-[#e26a45] border-b border-[#33221b] font-mono text-[11px] uppercase tracking-wider">
              <th className="p-4">Pillar</th>
              <th className="p-4">Focus Area</th>
              <th className="p-4">High-ROI Lyzr AI Agent Modules</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#33221b] text-[#c4bbb7]">
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-[#211410]/50 transition">
                <td className="p-4 font-bold text-white font-serif">{r.pillar}</td>
                <td className="p-4 text-[#a89f9b]">{r.focus}</td>
                <td className="p-4">{r.modules}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
