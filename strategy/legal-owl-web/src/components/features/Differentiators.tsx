import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const Differentiators: React.FC = () => {
  const diffs = [
    {
      badge: 'Diff #1 · Lyzr KB + Citation',
      tag: '0% Hallucination',
      title: '1. Grounded PDF Citation Bounding-Box Ledger',
      description: 'Visual coordinate links on PDFs (x, y, w, h). Clicking any assertion (e.g. "Unpaid Tax Lien $12k") draws a highlighted bounding box directly over the exact line item on the source document with 0% LLM hallucination risk.',
    },
    {
      badge: 'Diff #2 · Lyzr Superflow',
      tag: 'Human Governance',
      title: '2. "Approve-Before-Act" Co-Pilot Action Cards',
      description: 'AI agents pause at high-stakes decision gates via Superflow Node Approvals (running-and-approvals), surfacing interactive [ Approve ], [ Edit ], and [ Reject ] action cards for human bank officers.',
    },
    {
      badge: 'Diff #3 · Lyzr Governor',
      tag: 'Fed Compliance',
      title: '3. Native Fed SR 11-7 Model Governance Ledger',
      description: 'Maintains an immutable execution audit log (Execution ID, Prompt Version, Context Hash, Tool Parameters, Guardrail Flags, Human Sign-Off ID) to pass Federal Reserve Model Validation Group (MVG) audits out-of-the-box.',
    },
    {
      badge: 'Diff #4 · Lyzr RAI Engine',
      tag: 'GLBA / OCC Compliant',
      title: '4. Edge PII/NPI Isolation & Data Privacy Shield',
      description: 'Uses Lyzr RAI policies (create_policy) to scrub SSNs, Tax IDs, and account numbers at the local boundary before LLM inference (GLBA & OCC Bulletin 2023-17 compliant).',
    },
    {
      badge: 'Diff #5 · Agent Studio',
      tag: 'Git-for-Agents',
      title: '5. Git-for-Agents Enterprise Promotion Pipeline',
      description: 'Enables strict Dev → Staging → Production Private VPC promotion pipelines with version rollback for bank Forward-Deployed Engineers.',
    },
    {
      badge: 'Diff #6 · Simulation Engine',
      tag: 'Pre-Testing',
      title: '6. Pre-Deployment Banking Scenario Sandbox',
      description: 'Pre-tests multi-agent banking workflows against thousands of synthetic stress-test scenarios before live client VPC deployment.',
    },
  ];

  return (
    <section className="space-y-6 pb-10 border-b border-slate-800/80">
      <SectionHeader 
        id="differentiators"
        number="03"
        title="Core Product Differentiators Grounded in Lyzr"
        subtitle="Mapping native Lyzr enterprise primitives directly to high-value banking differentiators"
        icon={ShieldCheck}
      />

      <div className="space-y-4">
        {diffs.map((item, i) => (
          <Card key={i} glow className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Badge variant="emerald">{item.badge}</Badge>
              <span className="text-xs text-slate-500 font-mono">{item.tag}</span>
            </div>
            <h3 className="text-base font-bold text-white pt-1">{item.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
