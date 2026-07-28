import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-50">
      {/* Lyzr Top Announcement Bar */}
      <div className="bg-[#24130d] text-white border-b border-[#3d2016] text-xs py-2 px-4 text-center font-sans flex items-center justify-center gap-2">
        <span className="px-2 py-0.5 rounded-full bg-[#e26a45] text-white text-[10px] font-bold uppercase tracking-wider">
          • NEW
        </span>
        <span className="text-[#d8cdcb]">Lyzr launches Sovereign Agentic OS for Enterprise Banking</span>
        <a href="#summary" className="inline-flex items-center gap-1 text-[#ff7a59] font-medium hover:underline ml-1">
          Explore Strategy <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* Main Navbar */}
      <header className="bg-[#0e0907]/95 backdrop-blur-md border-b border-[#281c17] px-6 sm:px-12 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          {/* Official Lyzr Butterfly Grid Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 grid grid-cols-2 gap-0.5 p-1 bg-white/10 rounded-md border border-white/20">
              <div className="bg-[#e26a45] rounded-xs"></div>
              <div className="bg-white/80 rounded-xs"></div>
              <div className="bg-white/80 rounded-xs"></div>
              <div className="bg-[#e26a45] rounded-xs"></div>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white font-sans">lyzr</span>
            <span className="text-[#e26a45] text-xs font-mono font-bold ml-1 uppercase bg-[#e26a45]/15 px-2 py-0.5 rounded border border-[#e26a45]/30">
              / Madison
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-[#a89f9b]">
          <a href="#summary" className="hover:text-white transition">01. Vision</a>
          <a href="#architecture" className="hover:text-white transition">02. Architecture</a>
          <a href="#differentiators" className="hover:text-white transition">03. Differentiators</a>
          <a href="#taxonomy" className="hover:text-white transition">04. Taxonomy</a>
          <a href="#gtm" className="hover:text-white transition">05. GTM Engine</a>
          <a href="#roadmap" className="hover:text-white transition">06. Roadmap</a>
          <a href="#alignment" className="hover:text-white transition">07. Alignment</a>
        </nav>

        <a href="#alignment" className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-[#36241e] border border-[#56362b] text-white hover:bg-[#4a3028] transition shadow-sm">
          Talk to Us <ArrowRight className="w-3.5 h-3.5 text-[#ff7a59]" />
        </a>
      </header>
    </div>
  );
};
