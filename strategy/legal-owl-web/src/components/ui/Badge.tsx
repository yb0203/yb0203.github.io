import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'coral' | 'terra' | 'muted' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'coral', className = '' }) => {
  const variantStyles = {
    coral: 'bg-[#e26a45]/15 text-[#ff7a59] border-[#e26a45]/30',
    terra: 'bg-[#442217]/60 text-[#e26a45] border-[#e26a45]/40',
    muted: 'bg-white/5 text-[#a89f9b] border-white/10',
    outline: 'bg-transparent text-white/80 border-white/20',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium border rounded-full ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
