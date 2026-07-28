import React from 'react';
import { Calendar } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const ExecutionRoadmap: React.FC = () => {
  const phases = [
    {
      badge: 'Phase 1: Near-Term',
      subtitle: 'Showcase Demo & Templatization',
      items: [
        'Build and freeze 21-day Commercial Lending Showcase Demo App',
        'Develop FDE cloning scripts',
        'Write Sales Storyboard & Pitch Deck',
      ],
    },
    {
      badge: 'Phase 2: Mid-Term',
      subtitle: 'Paid Bank Pilots & Model Governance',
      items: [
        'Execute 3 Paid Bank Pilots ($50K–$100K PoCs)',
        'Audit SR 11-7 Model Validation Group compliance',
        'Measure baseline disbursement speed KPIs',
      ],
    },
    {
      badge: 'Phase 3: Long-Term',
      subtitle: 'Horizontal Expansion & FDE Engine',
      items: [
        'Launch Sales/RM Co-Pilot & AML/UBO Skill Bundles',
        'Formalize FDE Client Onboarding Playbook',
        'Target Top 25 US Regional Banks',
      ],
    },
    {
      badge: 'Phase 4: Scaling',
      subtitle: 'Global Market Expansion',
      items: [
        'Expand to UK/EU & Canada public registries',
        'Package direct API connectors for Fiserv, FIS, Jack Henry',
        'Scale ARR & enterprise licensing seats',
      ],
    },
  ];

  return (
    <section className="space-y-6 pb-10 border-b border-[#281c17]">
      <SectionHeader 
        id="roadmap"
        number="06"
        title="Near-Term, Mid-Term & Long-Term Execution Roadmap"
        subtitle="Structured execution roadmap across showcase app, bank pilots, and enterprise scale"
        icon={Calendar}
      />

      <div className="space-y-4">
        {phases.map((p, i) => (
          <Card key={i} className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge variant="coral">{p.badge}</Badge>
              <span className="text-xs font-mono text-[#a89f9b]">{p.subtitle}</span>
            </div>
            <ul className="text-xs text-[#c4bbb7] space-y-1.5 list-disc list-inside pt-1">
              {p.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};
