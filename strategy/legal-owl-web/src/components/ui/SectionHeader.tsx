import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ id, number, title, subtitle, icon: Icon }) => {
  return (
    <div id={id} className="space-y-1.5 scroll-mt-20">
      <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider font-mono">
        <Icon className="w-4 h-4 text-emerald-400" />
        Section {number}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};
