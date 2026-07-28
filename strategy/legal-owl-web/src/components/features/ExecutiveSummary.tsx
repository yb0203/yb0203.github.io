import React from 'react';
import { Target } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export const ExecutiveSummary: React.FC = () => {
  return (
    <section className="space-y-6 pb-10 border-b border-[#281c17]">
      <SectionHeader 
        id="summary"
        number="01"
        title="Executive Summary & Vision"
        subtitle="Automating high-friction financial workflows with zero-hallucination PDF coordinate grounding"
        icon={Target}
      />

      <div className="space-y-4">
        <Card glow>
          <div className="text-xs font-mono font-bold uppercase text-[#e26a45] mb-2 tracking-wider">
            Executive Overview
          </div>
          <p className="text-sm text-[#c4bbb7] leading-relaxed">
            Madison is an Enterprise Agentic Operating System built natively on the Lyzr Enterprise Stack. It transforms slow, document-heavy banking operations into autonomous, zero-hallucination, human-governed workflows—starting with high-value Commercial Lending and expanding horizontally into Commercial Sales, Marketing Compliance, Retail Ops, and AML/KYC across the US, Canada, and Europe ($10B–$50B+ AUM banks).
          </p>
        </Card>

        <Card glow>
          <div className="text-xs font-mono font-bold uppercase text-[#ff7a59] mb-2 tracking-wider">
            Strategic Vision
          </div>
          <p className="text-sm text-[#c4bbb7] leading-relaxed">
            To establish <strong className="text-white">Madison</strong> as the premier enterprise agentic product suite for banking—leveraging <strong className="text-white">Lyzr’s full-stack AI infrastructure</strong> to automate high-friction financial workflows with 100% auditability, bank-grade PII isolation, and zero-hallucination PDF coordinate grounding.
          </p>
        </Card>
      </div>
    </section>
  );
};
