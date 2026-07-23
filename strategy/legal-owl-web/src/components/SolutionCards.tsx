import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const SolutionCards = () => {
  return (
    <section id="ch3" className="py-12 border-b border-slate-200">
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block mb-1">
          Section 03 · Product Strategy
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#121b18]">
          The Three Solutions Wedge (S1 → S2 → S3)
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mt-1">
          A land-and-expand build arc modeled on Lyzr's banking play: entering via high-volume operational document review, expanding to compliance risk, and scaling to cross-vendor platform governance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* S1 Card */}
        <div className="bg-white border-2 border-[#466c5b] rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#466c5b] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            Phase 1 · Land
          </div>
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#466c5b]/10 text-[#466c5b] flex items-center justify-center font-mono font-bold text-lg mb-4">
              S1
            </div>
            <h3 className="font-semibold text-base text-slate-900 mb-1">
              Legal Document Intake & Deviation Audit Suite
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Target ACV: $75K - $150K · Build Weeks 1–8
            </p>

            <ul className="space-y-2 text-xs text-slate-700 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#466c5b] flex-shrink-0 mt-0.5" />
                <span><strong>Commercial Loan Markups:</strong> Automated deviation checks against LSTA/LMA bank playbooks.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#466c5b] flex-shrink-0 mt-0.5" />
                <span><strong>Title & Deed Clearance:</strong> Schedule B exception auditing and title clearance lists.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#466c5b] flex-shrink-0 mt-0.5" />
                <span><strong>Court Scout Engine:</strong> PACER court docket sync and foreclosure hearing alerts.</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100 text-[11px] text-[#466c5b] font-semibold flex items-center justify-between">
            <span>Primary Buyer: COO / Legal Ops</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* S2 Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-slate-100 text-slate-700 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            Phase 2 · Expand
          </div>
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#c59e5f]/10 text-[#c59e5f] flex items-center justify-center font-mono font-bold text-lg mb-4">
              S2
            </div>
            <h3 className="font-semibold text-base text-slate-900 mb-1">
              Compliance & Vendor (TPRM) Advisory Pack
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Target ACV: $125K - $200K · Sold Month 4+
            </p>

            <ul className="space-y-2 text-xs text-slate-700 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59e5f] flex-shrink-0 mt-0.5" />
                <span><strong>Regulator MRA Auditor:</strong> Audits internal credit manuals against new OCC & Fed circulars.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59e5f] flex-shrink-0 mt-0.5" />
                <span><strong>Cloud Vendor Risk (TPRM):</strong> Verifies OCC 2023-17 compliance clauses & SOC 2 alignment.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59e5f] flex-shrink-0 mt-0.5" />
                <span><strong>Model Validation Pack:</strong> OCC 2011-12 audit-ready documentation shipped as product.</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100 text-[11px] text-[#c59e5f] font-semibold flex items-center justify-between">
            <span>Primary Buyer: CCO / BSA Lead</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* S3 Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-slate-100 text-slate-700 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            Phase 3 · Platform
          </div>
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#c77363]/10 text-[#c77363] flex items-center justify-center font-mono font-bold text-lg mb-4">
              S3
            </div>
            <h3 className="font-semibold text-base text-slate-900 mb-1">
              Enterprise Legal Ops & AI Agent Control Plane
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Target ACV: $200K - $250K+ · Sold Months 6–12
            </p>

            <ul className="space-y-2 text-xs text-slate-700 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c77363] flex-shrink-0 mt-0.5" />
                <span><strong>Grounded Citation Ledger:</strong> Coordinate-level bounding boxes pointing to PDF sources.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c77363] flex-shrink-0 mt-0.5" />
                <span><strong>Outside Counsel Audit:</strong> Panel law firm invoice reconciliation & SLA tracking.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c77363] flex-shrink-0 mt-0.5" />
                <span><strong>VPC Containerization:</strong> 100% on-premise execution with zero external data calls.</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100 text-[11px] text-[#c77363] font-semibold flex items-center justify-between">
            <span>Primary Buyer: CLO / General Counsel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </section>
  );
};
