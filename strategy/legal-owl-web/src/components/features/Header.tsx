import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-[#080c14] font-black text-base shadow-lg shadow-emerald-500/20">
          L
        </div>
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-base tracking-tight text-white">LYZR</span>
          <span className="text-slate-500 font-normal text-sm">/</span>
          <span className="font-bold text-sm text-emerald-400">Madison</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-300">
        <a href="#summary" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition">Summary</a>
        <a href="#architecture" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition">Architecture</a>
        <a href="#differentiators" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition">Differentiators</a>
        <a href="#taxonomy" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition">Taxonomy</a>
        <a href="#gtm" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition">GTM Sales</a>
        <a href="#roadmap" className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition">Roadmap</a>
        <a href="#alignment" className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold hover:bg-emerald-500/20 transition">Alignment</a>
      </nav>
    </header>
  );
};
