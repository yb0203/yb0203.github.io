import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', glow = false }) => {
  return (
    <div className={`p-6 sm:p-7 rounded-2xl bg-[#18100c]/90 border border-[#33221b] transition-all duration-300 hover:border-[#e26a45]/40 hover:shadow-xl hover:shadow-[#e26a45]/5 ${glow ? 'border-[#e26a45]/30 bg-gradient-to-b from-[#211410] to-[#160d0a]' : ''} ${className}`}>
      {children}
    </div>
  );
};
