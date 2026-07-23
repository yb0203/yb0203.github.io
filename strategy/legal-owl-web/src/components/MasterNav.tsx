export const MasterNav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#121b18] text-white/80 border-b border-white/10 px-4 sm:px-8 py-3 flex items-center gap-4 overflow-x-auto text-xs font-semibold">
      <div className="flex items-center gap-2 pr-4 border-r border-white/20 whitespace-nowrap">
        <span className="w-2.5 h-2.5 rounded-full bg-[#c59e5f] inline-block"></span>
        <span className="text-white font-bold tracking-wider">LYZR BFSI</span>
        <span className="text-white/40 text-[10px] uppercase">US Banking Strategy</span>
      </div>
      <div className="flex items-center gap-1 sm:gap-2 flex-nowrap">
        <a href="#overview" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">00. Hierarchy</a>
        <a href="#layer1" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">L1. Market & Regs</a>
        <a href="#layer2" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">L2. Problem Space</a>
        <a href="#layer3" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">L3. Solution Space</a>
        <a href="#layer4" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">L4. Stakeholders</a>
        <a href="#layer5" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">L5. Business & GTM</a>
        <a href="#layer6" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">L6. Product Lifecycle</a>
        <a href="#ch7" className="px-2.5 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">Master Use Cases</a>
      </div>
    </nav>
  );
};
