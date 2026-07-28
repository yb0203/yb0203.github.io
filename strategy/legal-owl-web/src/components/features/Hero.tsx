import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-[#281c17] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#482317] via-[#140d0a] to-[#0e0907]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 relative z-10 text-center sm:text-left">
        
        {/* Eyebrow Label */}
        <div className="flex items-center justify-center sm:justify-start gap-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#e26a45] uppercase">
            ENTERPRISE AI AGENT PLATFORM
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#e26a45]"></span>
          <span className="text-xs font-mono text-[#a89f9b]">US, CA, UK & EU BANKING</span>
        </div>

        {/* Serif Main Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white leading-[1.1] tracking-tight">
            Take your banking AI agents <br className="hidden sm:block" />
            <em className="italic text-[#ff7a59] font-serif">to production, faster.</em>
          </h1>
          <p className="text-xl sm:text-2xl font-serif text-[#e26a45] font-normal tracking-tight">
            "A Sovereign Agentic Operating System for Enterprise Banking"
          </p>
        </div>

        {/* Lead Paragraph */}
        <p className="text-base sm:text-lg text-[#b8ada8] leading-relaxed max-w-3xl font-normal">
          The control plane your enterprise AI operation has been missing. Built natively on the <strong className="text-white">Lyzr Enterprise Stack</strong> (`Lyzr ADK`, `Automata`, `Cognis`, `RAI`, `Governor`, `Agent Studio`). Agents built on AWS, Azure, GCP, or on-prem are governed, observed, and controlled from a single control plane. Your data stays in your environment. Your IP stays yours. You keep full control.
        </p>

        {/* Pill Badges */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-2">
          <Badge variant="coral">Single-Tenant Bank Private VPC</Badge>
          <Badge variant="terra">$10B–$50B+ AUM Tier 1 Banks</Badge>
          <Badge variant="muted">Fed SR 11-7 MRM Audit Ledger</Badge>
        </div>

        {/* CTA Button Row */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4">
          <a href="#summary" className="inline-flex items-center justify-center gap-2 font-medium text-sm text-white bg-[#3e261f] border border-[#633c30] hover:bg-[#523229] px-7 py-3 rounded-full transition shadow-lg shadow-black/40">
            Talk to Us <ArrowRight className="w-4 h-4 text-[#ff7a59]" />
          </a>

          <a href="#architecture" className="inline-flex items-center justify-center gap-2 font-medium text-sm text-[#a89f9b] hover:text-white border border-white/10 bg-white/5 px-6 py-3 rounded-full transition">
            <Layers className="w-4 h-4 text-[#e26a45]" /> View Full Architecture
          </a>
        </div>

      </div>
    </section>
  );
};
