import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, FileCheck, Lock, MessageSquare, Shield, Users } from 'lucide-react';

interface WhiteLabelSectionProps {
  onOpenEstimator: () => void;
}

export const WhiteLabelSection: React.FC<WhiteLabelSectionProps> = ({ onOpenEstimator }) => {
  const agencyBenefits = [
    {
      icon: Lock,
      title: '100% Invisible White-Label',
      description: 'Strict non-disclosure agreements. We never showcase your client’s work on our portfolio unless explicitly invited.',
    },
    {
      icon: MessageSquare,
      title: 'Direct Slack Connect Channel',
      description: 'Our lead developer embeds directly into your agency Slack or Teams. Real-time updates without bureaucratic delays.',
    },
    {
      icon: FileCheck,
      title: 'Pixel-Perfect Figma Translation',
      description: 'Your design team works hard on typography and spacing. We match your Figma files 1:1 down to the exact rem units.',
    },
    {
      icon: Shield,
      title: 'Fixed Sprint Rates',
      description: 'Predictable weekly sprint pricing. Scale development up or down with zero overhead, hiring headaches, or payroll bloat.',
    },
  ];

  return (
    <section id="white-label" className="py-28 md:py-36 bg-[#111111] text-[#FAFAF8] relative overflow-hidden">
      {/* Subtle geometric line texture */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#888888] uppercase tracking-widest mb-10">
          <span className="text-[#7B5AFF]">07</span>
          <span aria-hidden="true">/</span>
          <span>AGENCY INFRASTRUCTURE</span>
        </div>

        {/* Monumental Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.92] uppercase text-white">
              YOUR CLIENT.
              <br />
              <span className="text-[#7B5AFF]">YOUR BRAND.</span>
              <br />
              OUR BUILD.
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed">
              We operate as the dedicated white-label engineering division for world-class design studios, branding shops, and marketing agencies.
            </p>
            <p className="text-xs text-[#777777] font-mono">
              Figma → Webflow · Framer · Shopify · Custom React
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/[0.1]">
          {agencyBenefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-[#7B5AFF]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Agency Partner Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-white/[0.03] border border-white/[0.1] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono text-[#7B5AFF] uppercase tracking-wider block mb-2">
              EXCLUSIVE AGENCY SPRINT CAPACITY
            </span>
            <p className="font-display text-2xl sm:text-3xl font-bold text-white">
              Book steady engineering firepower for your studio.
            </p>
            <p className="text-xs sm:text-sm text-[#999999] mt-2 max-w-xl">
              We maintain active partnerships with only 6 partner agencies simultaneously to guarantee immediate turnaround and senior-only engineering attention.
            </p>
          </div>

          <button
            onClick={onOpenEstimator}
            className="px-8 py-4 text-xs font-bold tracking-wider text-[#111111] bg-white hover:bg-[#7B5AFF] hover:text-white rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg whitespace-nowrap"
          >
            <span>Become an Agency Partner</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
