import { ShieldCheck, Layers, Target, TrendingUp } from 'lucide-react';

export const HeroHeader = () => {
  return (
    <header className="bg-gradient-to-br from-[#0e1613] via-[#121b18] to-[#253630] text-white px-6 sm:px-16 py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c59e5f] bg-[#c59e5f]/10 border border-[#c59e5f]/30 px-3 py-1 rounded-full mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          Master Strategy & Execution Blueprint
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-serif leading-tight font-normal mb-4">
          Legal Owl — <em className="italic text-[#e8a382]">US Banking Strategy</em> & Legal Operations
        </h1>
        
        <p className="text-white/70 max-w-3xl text-sm sm:text-base leading-relaxed mb-10 font-sans">
          An exhaustive, MECE product strategy mapping 7 core banking divisions, 20+ legal touchpoints, 
          a 3-solution build order (S1 Land → S2 Expand → S3 Platform), and forward-deployed pod realignment 
          built natively for on-prem VPC data security and OCC 2011-12 compliance.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/10">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#c59e5f]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-mono">$1.8M - $2.5M</div>
              <div className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">12-Month ARR Target</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#466c5b]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-mono">7 Divisions</div>
              <div className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">MECE Banking Touchpoints</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#c77363]">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-mono">3 Solutions</div>
              <div className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">S1 Land → S2 Expand → S3 Platform</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#c59e5f]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-mono">4 Pods + VPC</div>
              <div className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">Vertical Team Realignment</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
