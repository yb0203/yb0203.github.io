import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', glow = false }) => {
  return (
    <div className={`p-6 rounded-xl bg-slate-900/60 border border-slate-800 transition duration-200 hover:border-slate-700 ${glow ? 'hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5' : ''} ${className}`}>
      {children}
    </div>
  );
};
