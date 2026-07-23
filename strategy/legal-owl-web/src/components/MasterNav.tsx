export const MasterNav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#121b18] text-white/80 border-b border-white/10 px-4 sm:px-8 py-3 flex items-center gap-4 overflow-x-auto text-xs font-semibold">
      <div className="flex items-center gap-2 pr-4 border-r border-white/20 whitespace-nowrap">
        <span className="w-2.5 h-2.5 rounded-full bg-[#c59e5f] inline-block"></span>
        <span className="text-white font-bold tracking-wider">LEGAL OWL</span>
        <span className="text-white/40 text-[10px] uppercase">US Banking Strategy</span>
      </div>
      <div className="flex items-center gap-1 sm:gap-2 flex-nowrap">
        <a href="#ch1" className="px-3 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">01. Overview</a>
        <a href="#ch2" className="px-3 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">02. 7 Divisions</a>
        <a href="#ch3" className="px-3 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">03. 3 Solutions</a>
        <a href="#ch4" className="px-3 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">04. GTM & SIs</a>
        <a href="#ch5" className="px-3 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">05. Objections</a>
        <a href="#ch6" className="px-3 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">06. Pod Realignment</a>
        <a href="#ch7" className="px-3 py-1.5 rounded hover:text-white hover:bg-white/10 transition whitespace-nowrap">07. Use Case Matrix</a>
      </div>
    </nav>
  );
};
