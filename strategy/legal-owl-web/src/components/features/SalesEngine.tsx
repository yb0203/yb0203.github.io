import React from 'react';
import { Briefcase } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const SalesEngine: React.FC = () => {
  const motions = [
    {
      title: 'Motion 1 · Via Financial Advisory, Legal & Service Partners',
      description: 'Partner with third-party banking law firms (e.g. Mayer Brown, Latham & Watkins) and compliance consultancies who pitch and co-sell Madison to their bank clients.',
    },
    {
      title: 'Motion 2 · Via System Integrators (SIs & Consultancies)',
      description: 'Partner with Accenture Financial Services, Capgemini Banking, PwC, EY, and Infosys who handle custom legacy core mainframe API integrations.',
    },
    {
      title: 'Motion 3 · Via Hyperscaler Co-Sell & Cloud Marketplace',
      description: 'Co-sell on AWS, Azure, and GCP Marketplaces letting bank CIOs draw from pre-committed cloud budgets (AWS EDP / Azure MACC commits), shortening sales cycles from 9 months to 3 weeks.',
    },
    {
      title: 'Motion 4 · Direct Outbound Account-Based Marketing (ABM)',
      description: 'High-touch C-suite outreach targeting Chief Credit Officers (CCOs), Chief Risk Officers (CROs), and General Counsels at $10B–$50B AUM regional banks.',
    },
    {
      title: 'Motion 5 · Marketing Inbound Engine',
      description: 'Executive thought leadership whitepapers, bank ROI calculators, SR 11-7 Model Risk Management compliance guides, and interactive web showcase demos.',
    },
  ];

  return (
    <section className="space-y-6 pb-10 border-b border-[#281c17]">
      <SectionHeader 
        id="gtm"
        number="05"
        title="Go-To-Market (GTM) Enterprise Sales & Delivery Engine"
        subtitle="5-channel sales & co-sell engine designed for rapid enterprise acquisition & 7-day client onboarding"
        icon={Briefcase}
      />

      <div className="space-y-4">
        {motions.map((m, i) => (
          <Card key={i} className="space-y-1">
            <span className="text-[10px] font-mono font-bold text-[#e26a45] uppercase tracking-wider">Channel 0{i + 1}</span>
            <h3 className="text-base font-bold text-white font-serif">{m.title}</h3>
            <p className="text-xs text-[#c4bbb7] leading-relaxed">{m.description}</p>
          </Card>
        ))}

        <div className="p-5 rounded-2xl bg-[#211410] border border-[#e26a45]/40 space-y-2 text-xs">
          <Badge variant="coral">Rapid Delivery</Badge>
          <p className="text-white pt-1 leading-relaxed">
            Forward-Deployed Engineers (FDEs) use low-code configuration templates to map core APIs, connect SSO, and deploy into the bank's Private VPC in <strong className="text-[#ff7a59]">under 7 days</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};
