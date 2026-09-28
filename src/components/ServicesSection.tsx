import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/services';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-28 md:py-36 bg-[#FAFAF8] border-b border-black/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/[0.08]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#777777] uppercase tracking-widest mb-3">
              <span className="text-[#7B5AFF]">03</span>
              <span aria-hidden="true">/</span>
              <span>SPECIALIZED CAPABILITIES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111]">
              Engineered for Impact.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#666666] max-w-md">
            We don’t offer generic marketing packages. We specialize in high-end design, custom development, and brand systems for ambitious operators.
          </p>
        </div>

        {/* Interactive List-Based Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Editorial Service List */}
          <div className="lg:col-span-7 divide-y divide-black/[0.08]">
            {SERVICES.map((service) => {
              const isActive = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className="group py-6 sm:py-8 cursor-pointer transition-all duration-300 select-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm text-[#888888] group-hover:text-[#7B5AFF] transition-colors">
                        {service.number}
                      </span>
                      <h3
                        className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight transition-all duration-300 ${
                          isActive
                            ? 'text-[#111111] translate-x-2'
                            : 'text-[#555555] group-hover:text-[#111111] group-hover:translate-x-1'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isActive ? 'bg-[#7B5AFF] scale-125' : 'bg-transparent'
                        }`}
                      />
                      <ArrowUpRight
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive
                            ? 'text-[#7B5AFF] translate-x-0.5 -translate-y-0.5'
                            : 'text-[#999999] opacity-40 group-hover:opacity-100'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Compact description on mobile */}
                  <p className="mt-2 text-xs text-[#666666] lg:hidden pl-8 sm:pl-12">
                    {service.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Live Spec & Deliverables Panel */}
          <div className="lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="p-8 sm:p-10 rounded-2xl bg-[#F2F2ED] border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.02)] space-y-6"
              >
                {/* Header index */}
                <div className="flex items-center justify-between text-xs font-mono text-[#777777] border-b border-black/[0.08] pb-4">
                  <span>DISCIPLINE {activeService.number}</span>
                  <span className="text-[#7B5AFF]">{activeService.averageTimeline}</span>
                </div>

                <div>
                  <h4 className="font-display text-2xl font-bold text-[#111111]">
                    {activeService.title}
                  </h4>
                  <p className="text-sm text-[#444444] mt-2 leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#666666] block">
                    CORE DELIVERABLES
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {activeService.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-[#222222]">
                        <Check className="w-3.5 h-3.5 text-[#7B5AFF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For Note */}
                <div className="pt-4 border-t border-black/[0.08] text-xs text-[#555555]">
                  <span className="font-medium text-[#111111]">Ideal For: </span>
                  {activeService.idealFor}
                </div>

                {/* Direct Action Trigger */}
                <button
                  onClick={() => onSelectService(activeService.title)}
                  className="w-full py-3.5 px-5 text-xs font-semibold text-white bg-[#111111] hover:bg-[#7B5AFF] rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                >
                  <span>Inquire for {activeService.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
