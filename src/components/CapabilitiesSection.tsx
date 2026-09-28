import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Code2, Globe2, ShieldCheck, Zap } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  focus: string;
  description: string;
  standards: string;
}

export const CapabilitiesSection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<number>(0);

  const technologies: TechItem[] = [
    {
      name: 'Webflow',
      category: 'CMS & Fluid Production',
      focus: 'Architectural precision & visual CMS autonomy',
      description: 'We build enterprise-grade Webflow sites using clean Client-First naming conventions, lightweight custom code embeds, and dynamic CMS collections that clients actually enjoy editing.',
      standards: 'Client-First v2 · Custom JavaScript · Lighthouse 98+ · Zero Code Bloat',
    },
    {
      name: 'Framer',
      category: 'High-Velocity Interactive',
      focus: 'Silky smooth motion & design-first iteration',
      description: 'Ideal for venture-backed startups and product launches that need rapid speed to market with bespoke page transitions, kinetic typography, and reactive canvas elements.',
      standards: 'Custom React Components · Breakpoint Fluidity · Global CMS · 60fps Curves',
    },
    {
      name: 'Shopify Plus',
      category: 'Luxury E-Commerce',
      focus: 'High-ticket conversion & headless capability',
      description: 'From bespoke Liquid themes with modular sections to fully headless Hydrogen/Next.js storefronts, we build commerce machines that look like luxury art books while driving maximum conversion.',
      standards: 'Sub-200ms TTFB · Multi-Currency · Custom Cart Drawers · ERP Integration',
    },
    {
      name: 'React & Next.js',
      category: 'Custom Architecture',
      focus: 'Full-stack freedom & bespoke micro-services',
      description: 'For ambitious digital products requiring interactive spatial logic, WebGL canvas shaders, or proprietary API integrations that off-the-shelf site builders cannot support.',
      standards: 'Server-Side Rendering · Strict TypeScript · Tailwind Architecture · Edge Deploys',
    },
    {
      name: 'WordPress',
      category: 'Custom Headless & Enterprise',
      focus: 'High-volume publishing with headless speed',
      description: 'We do not touch slow page-builder plugins. We engineer custom, ultra-lightweight WordPress themes and headless WP REST/GraphQL configurations for high-volume editorial teams.',
      standards: 'Custom Gutenberg Blocks · Security Hardened · Redis Object Caching · Zero Bloat',
    },
    {
      name: 'Motion & GSAP',
      category: 'Choreography',
      focus: 'Intentional cinematic scroll dynamics',
      description: 'Animations are never an afterthought. We orchestrate smooth text reveals, masked clipping planes, and scroll-scrubbed typography that feel calm, weighted, and natural.',
      standards: 'Compositor Properties Only · prefers-reduced-motion Compliant · GPU Accelerated',
    },
  ];

  return (
    <section id="capabilities" className="py-28 md:py-36 bg-[#FAFAF8] border-b border-black/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/[0.08]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#777777] uppercase tracking-widest mb-3">
              <span className="text-[#7B5AFF]">05</span>
              <span aria-hidden="true">/</span>
              <span>TECHNICAL PURITY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111]">
              Tools Without Dogma.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#666666] max-w-md">
            We select the exact technical stack that solves your business challenge — not whatever tool is easiest for us.
          </p>
        </div>

        {/* Interactive Capability List & Inspection */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Tech selector items */}
          <div className="lg:col-span-6 flex flex-col divide-y divide-black/[0.06]">
            {technologies.map((tech, idx) => {
              const isSelected = selectedTech === idx;
              return (
                <div
                  key={tech.name}
                  onClick={() => setSelectedTech(idx)}
                  className={`py-5 px-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    isSelected ? 'bg-[#F2F2ED]' : 'hover:bg-black/[0.02]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#888888]">0{idx + 1}</span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111111]">
                          {tech.name}
                        </h3>
                      </div>
                      <p className="text-xs text-[#666666] mt-1 pl-7">
                        {tech.category}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#7B5AFF] hidden sm:inline">
                        {isSelected ? 'ACTIVE SPEC' : 'INSPECT'}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'text-[#7B5AFF] rotate-45' : 'text-[#888888]'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Spec Deep-Dive Box */}
          <div className="lg:col-span-6 sticky top-28 p-8 md:p-12 rounded-2xl bg-[#F2F2ED] border border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between text-xs font-mono text-[#777777] border-b border-black/[0.08] pb-4 mb-6">
              <span>PLATFORM STANDARD</span>
              <span className="text-[#7B5AFF] font-semibold">{technologies[selectedTech].name}</span>
            </div>

            <h4 className="font-display text-2xl sm:text-3xl font-bold text-[#111111]">
              {technologies[selectedTech].focus}
            </h4>

            <p className="text-sm text-[#444444] mt-4 leading-relaxed">
              {technologies[selectedTech].description}
            </p>

            <div className="mt-8 pt-6 border-t border-black/[0.08]">
              <span className="text-xs font-mono text-[#666666] uppercase tracking-wider block mb-2">
                VERIFIED ARCHITECTURAL BENCHMARKS
              </span>
              <div className="p-4 rounded-xl bg-[#FAFAF8] border border-black/[0.06] text-xs font-mono text-[#222222]">
                {technologies[selectedTech].standards}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between text-xs text-[#777777]">
              <span>Zero third-party tracker bloat</span>
              <span className="text-[#111111] font-medium">Standard on all builds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
