import React from 'react';
import { motion } from 'motion/react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      number: '800+',
      label: 'Projects Delivered',
      detail: 'From custom boutique platforms to high-traffic flagships.',
    },
    {
      number: '50+',
      label: 'Global Clients',
      detail: 'Founders, luxury houses, and ambitious creative agencies.',
    },
    {
      number: '10+',
      label: 'Years of Craft',
      detail: 'A decade refining typography, interaction, and clean code.',
    },
    {
      number: '20+',
      label: 'Countries Reached',
      detail: 'Serving clients in London, New York, Zurich, Tokyo & beyond.',
    },
  ];

  return (
    <section className="py-28 md:py-36 bg-[#FAFAF8] border-b border-black/[0.08] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#777777] uppercase tracking-widest mb-16">
          <span className="text-[#7B5AFF]">04</span>
          <span aria-hidden="true">/</span>
          <span>MEASURABLE RECORD</span>
        </div>

        {/* Large Editorial Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08]">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col justify-between pt-8 sm:pt-0 ${idx > 0 ? 'sm:pl-8 lg:pl-10' : ''}`}
            >
              <div>
                <span className="font-mono text-xs text-[#888888] block mb-4">
                  INDEX 0{idx + 1}
                </span>
                <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold text-[#111111] tracking-tight tabular-nums block leading-none">
                  {stat.number}
                </span>
                <h3 className="font-display text-lg font-bold text-[#111111] mt-5">
                  {stat.label}
                </h3>
              </div>

              <p className="text-xs text-[#666666] mt-3 leading-relaxed max-w-[240px]">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Editorial Footnote Banner */}
        <div className="mt-20 pt-8 border-t border-black/[0.06] flex flex-col md:flex-row items-baseline justify-between text-xs text-[#777777] font-mono gap-4">
          <span>ALL STATS VERIFIED ACROSS 2016–2026 CLIENT ENGAGEMENTS</span>
          <span className="text-[#111111] font-semibold">14 INTERNATIONAL AWARDS & SPECIAL MENTIONS</span>
        </div>
      </div>
    </section>
  );
};
