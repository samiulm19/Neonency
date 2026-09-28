import React from 'react';
import { motion } from 'motion/react';

export const Statement: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 bg-[#FAFAF8] border-b border-black/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section kicker */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#777777] uppercase tracking-widest mb-10">
          <span className="text-[#7B5AFF]">01</span>
          <span aria-hidden="true">/</span>
          <span>POSITIONING MANIFESTO</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-10">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.12]">
              We design and build digital experiences that make brands{' '}
              <span className="relative inline-block text-[#111111] underline decoration-[#7B5AFF] decoration-2 underline-offset-8">
                look better
              </span>
              ,{' '}
              <span className="italic font-serif font-normal text-[#333333]">
                perform better
              </span>
              , and{' '}
              <span className="relative inline-block bg-[#111111] text-[#FAFAF8] px-3 py-0.5 rounded-sm">
                grow
              </span>
              .
            </h2>
          </div>
        </div>

        {/* Supporting three pillars with clean typographic math */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-20 pt-12 border-t border-black/[0.06]">
          <div>
            <span className="font-mono text-xs text-[#7B5AFF] block mb-2">01.01 — DISCIPLINE</span>
            <h3 className="font-display text-xl font-bold text-[#111111] mb-3">
              Radical Typography & Whitespace
            </h3>
            <p className="text-sm text-[#555555] leading-relaxed">
              We reject the sea of generic SaaS card templates and gratuitous decoration. Every layout is calibrated with architectural grid math and typography that commands instant authority.
            </p>
          </div>

          <div>
            <span className="font-mono text-xs text-[#7B5AFF] block mb-2">01.02 — VELOCITY</span>
            <h3 className="font-display text-xl font-bold text-[#111111] mb-3">
              Sub-Second Technical Purity
            </h3>
            <p className="text-sm text-[#555555] leading-relaxed">
              Beauty without performance is a liability. Our headless architectures, clean Webflow setups, and custom Framer builds load in milliseconds, optimizing Google Core Web Vitals and conversion.
            </p>
          </div>

          <div>
            <span className="font-mono text-xs text-[#7B5AFF] block mb-2">01.03 — ENDURANCE</span>
            <h3 className="font-display text-xl font-bold text-[#111111] mb-3">
              Built to Scale & Be Remembered
            </h3>
            <p className="text-sm text-[#555555] leading-relaxed">
              We build systems your team can effortlessly manage and scale for years. Intuitive CMS models, clean component abstractions, and zero tangled dependencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
