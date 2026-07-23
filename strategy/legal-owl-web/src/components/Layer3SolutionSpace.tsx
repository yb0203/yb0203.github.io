import { useState, useMemo } from 'react';
import { PRODUCT_BACKLOG } from '../data/strategyData';
import { CheckSquare, Filter } from 'lucide-react';

export const Layer3SolutionSpace = () => {
  const [priorityFilter, setPriorityFilter] = useState<string>('all');

  const filteredBacklog = useMemo(() => {
    if (priorityFilter === 'all') return PRODUCT_BACKLOG;
    return PRODUCT_BACKLOG.filter(item => item.priority === priorityFilter);
  }, [priorityFilter]);

  return (
    <section id="layer3" className="py-12 border-b border-slate-200">
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#c59e5f] block mb-1">
          Layer 3 · Solution Space
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#121b18]">
          Lyzr BFSI Capabilities & 20-Item MoSCoW Product Backlog
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mt-1">
          Translating pain points into explicit software features prioritized using the MoSCoW framework and mapped to build phases.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
          <CheckSquare className="w-4 h-4 text-[#466c5b]" />
          Feature Backlog ({filteredBacklog.length} items)
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500">Priority:</span>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded px-2.5 py-1 text-xs text-slate-800 focus:outline-none"
          >
            <option value="all">All Priorities</option>
            <option value="Must-have">Must-have (MVP)</option>
            <option value="Should-have">Should-have</option>
            <option value="Could-have">Could-have</option>
            <option value="Won't-have">Won't-have</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100/70 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-600">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Feature Name</th>
                <th className="p-3">Pain Point Addressed</th>
                <th className="p-3">Effort</th>
                <th className="p-3">MoSCoW Priority</th>
                <th className="p-3">Release Phase</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredBacklog.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-bold text-slate-900">{item.id}</td>
                  <td className="p-3 font-semibold text-slate-900">{item.featureName}</td>
                  <td className="p-3 text-slate-600">{item.painPointAddressed}</td>
                  <td className="p-3 font-mono">{item.effort}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      item.priority === 'Must-have'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        : item.priority === 'Should-have'
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="p-3 text-slate-600 font-medium">{item.phase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
