import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#281c17] bg-[#0e0907] py-10 text-center text-xs text-[#a89f9b] mt-16 font-sans">
      <div className="max-w-4xl mx-auto px-4 space-y-2">
        <p className="font-mono text-white text-sm">Lyzr Enterprise Agentic OS — Project Madison</p>
        <p>© 2026 Lyzr AI. Grounded in Official Lyzr Enterprise Stack Primitives.</p>
        <div className="pt-2 text-[11px] text-[#786e6a]">
          Confidential · Internal Executive Strategy Proposal
        </div>
      </div>
    </footer>
  );
};
