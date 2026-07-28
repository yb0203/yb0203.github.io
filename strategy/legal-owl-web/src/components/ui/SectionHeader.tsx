import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ id, number, title, subtitle }) => {
  return (
    <div id={id} className="space-y-1.5 scroll-mt-24">
      <div className="flex items-center gap-2 text-[#e26a45] font-mono text-xs font-bold tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-[#e26a45] inline-block"></span>
        LAYER {number}
      </div>
      <h2 className="text-2xl sm:text-4xl font-serif font-normal text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-[#a89f9b] font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
