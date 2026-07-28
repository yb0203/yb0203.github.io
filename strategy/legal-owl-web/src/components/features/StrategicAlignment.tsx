import React from 'react';
import { Layers } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const StrategicAlignment: React.FC = () => {
  const directives = [
    {
      title: '1. Standalone Product Suite Packaging',
      description: 'Madison is packaged as a configurable standalone agentic AI software suite (the Lyzr Banking Engine) equipped with native banking mainframe connectors, rather than a passive template inside Lyzr Studio.',
    },
    {
      title: '2. 20% R&D / 80% FDE Resource Flywheel',
      description: 'Phase 1 Launch: Resource split is 20% Core R&D / 80% FDEs capturing real-world bank feedback. Phase 2 Scale: Ratio shifts toward R&D-dominant scaling where FDEs exclusively handle low-code YAML/JSON configurations.',
    },
    {
      title: '3. Inherited SOC-2 & SR 11-7 Readiness',
      description: 'Lyzr natively possesses SOC-2 Type-2 and HIPAA/Enterprise Security certifications. Built natively on the Lyzr Enterprise Stack, Madison inherits SOC-2 compliance out-of-the-box and satisfies Fed SR 11-7 Model Validation audits on Day 1.',
    },
    {
      title: '4. System Integrator & Partner Co-Sell Motion',
      description: 'Active co-selling with global banking SIs (Accenture, Capgemini, PwC, EY) and banking legal/advisory partners. Partners manage legacy mainframe integration & client relationships, while Lyzr licenses the Madison agentic core.',
    },
  ];

  return (
    <section className="space-y-6">
      <SectionHeader 
        id="alignment"
        number="07"
        title="Open Discussions & Strategic Alignment"
        subtitle="4 recommended strategic positions for internal leadership alignment"
        icon={Layers}
      />

      <div className="space-y-4">
        {directives.map((d, i) => (
          <Card key={i} className="border-emerald-500/30 space-y-1.5">
            <Badge variant="emerald">[RECOMMENDED]</Badge>
            <h3 className="text-sm font-bold text-white pt-1">{d.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{d.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
