import React from 'react';
import { Target } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const ExecutiveSummary: React.FC = () => {
  return (
    <section className="space-y-6 pb-10 border-b border-slate-800/80">
      <SectionHeader 
        id="summary"
        number="01"
        title="Executive Summary & Vision"
        icon={Target}
      />

      <div className="space-y-4">
        <Card glow>
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">Executive Overview</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Madison is an Enterprise Agentic Operating System built natively on the Lyzr Enterprise Stack. It transforms slow, document-heavy banking operations into autonomous, zero-hallucination, human-governed workflows—starting with high-value Commercial Lending and expanding horizontally into Commercial Sales, Marketing Compliance, Retail Ops, and AML/KYC across the US, Canada, and Europe ($10B–$50B+ AUM banks).
          </p>
        </Card>

        <Card glow>
          <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">Strategic Vision</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            To establish <strong>Madison</strong> as the premier enterprise agentic product suite for banking—leveraging <strong>Lyzr’s full-stack AI infrastructure</strong> to automate high-friction financial workflows with 100% auditability, bank-grade PII isolation, and zero-hallucination PDF coordinate grounding.
          </p>
        </Card>
      </div>
    </section>
  );
};
