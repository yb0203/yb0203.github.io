import { useState, useMemo } from 'react';
import { USE_CASES, BANKING_DIVISIONS } from '../data/strategyData';
import { Search, Filter } from 'lucide-react';

export const MasterUseCaseMatrix = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDivision, setSelectedDivision] = useState<string>("all");
  const [selectedPriority, setSelectedPriority] = useState<string>("all");

  const filteredUseCases = useMemo(() => {
    return USE_CASES.filter((item) => {
      const matchesSearch = 
        item.useCase.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.targetRole.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDivision = 
        selectedDivision === "all" || item.divisionId === selectedDivision;

      const matchesPriority = 
        selectedPriority === "all" || item.priority === selectedPriority;

      return matchesSearch && matchesDivision && matchesPriority;
    });
  }, [searchTerm, selectedDivision, selectedPriority]);

  return (
    <section id="ch7" className="py-12">
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block mb-1">
          Section 07 · Solution Map
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#121b18]">
          Master Banking Use Case Matrix (Filterable)
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mt-1">
          Search and filter through 20+ banking legal use cases mapped by division, priority, ACV, and core system connectors.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm mb-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search use cases, roles, or key terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#466c5b]"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 whitespace-nowrap">
            <Filter className="w-3.5 h-3.5" />
            Division:
          </div>
          <select
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#466c5b]"
          >
            <option value="all">All 7 Divisions</option>
            {BANKING_DIVISIONS.map((div) => (
              <option key={div.id} value={div.id}>{div.name}</option>
            ))}
          </select>

          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#466c5b]"
          >
            <option value="all">All Priorities</option>
            <option value="P1">P1 (MVP / Must)</option>
            <option value="P2">P2 (Expand)</option>
            <option value="P3">P3 (Platform)</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100/70 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-600 tracking-wider">
              <tr>
                <th className="p-3.5">Use Case Name</th>
                <th className="p-3.5">Division</th>
                <th className="p-3.5">Target Role</th>
                <th className="p-3.5">Target ACV</th>
                <th className="p-3.5">Priority</th>
                <th className="p-3.5">Integrations & Connectors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredUseCases.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-400">
                    No matching use cases found. Try adjusting your search query or filter settings.
                  </td>
                </tr>
              ) : (
                filteredUseCases.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition">
                    <td className="p-3.5 font-semibold text-slate-900">
                      {item.useCase}
                      <div className="font-normal text-[11px] text-slate-500 mt-0.5 max-w-sm">
                        {item.description}
                      </div>
                    </td>
                    <td className="p-3.5 text-slate-600 font-medium whitespace-nowrap">
                      {item.divisionName}
                    </td>
                    <td className="p-3.5 text-slate-600 whitespace-nowrap">
                      {item.targetRole}
                    </td>
                    <td className="p-3.5 font-mono font-bold text-[#466c5b] whitespace-nowrap">
                      {item.acvBand}
                    </td>
                    <td className="p-3.5 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.priority === 'P1'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : item.priority === 'P2'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {item.priority}
                      </span>
                    </td>
                    <td className="p-3.5">
                      <div className="flex items-center gap-1 flex-wrap">
                        {item.connectors.map((c, i) => (
                          <span key={i} className="bg-slate-100 border border-slate-200 text-slate-600 text-[10px] px-1.5 py-0.5 rounded">
                            {c}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
