import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { PROCESS_STEPS } from '../data/services';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const current = PROCESS_STEPS[activeStep];

  return (
    <section id="process" className="py-28 md:py-36 bg-[#FAFAF8] border-b border-black/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/[0.08]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#777777] uppercase tracking-widest mb-3">
              <span className="text-[#7B5AFF]">06</span>
              <span aria-hidden="true">/</span>
              <span>METHODOLOGY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111]">
              Predictable Precision.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#666666] max-w-md">
            No bloated agency committees. No surprise invoices. A clear, disciplined 6-stage roadmap designed to ship award-level work on schedule.
          </p>
        </div>

        {/* Step Progress Bar Navigator */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 border-b border-black/[0.08] pb-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-3 rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] text-[#FAFAF8] shadow-sm'
                    : 'text-[#666666] hover:bg-black/5 hover:text-[#111111]'
                }`}
              >
                <span className="font-mono text-xs block opacity-70 mb-1">PHASE {step.number}</span>
                <span className="font-display text-sm sm:text-base font-bold block">{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Step Detail Presentation */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.number}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 text-xs font-mono text-[#7B5AFF]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>TIMEFRAME: {current.duration}</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight">
                  {current.title} — {current.subtitle}
                </h3>

                <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl">
                  {current.description}
                </p>

                {/* Deliverables List */}
                <div className="pt-4">
                  <h4 className="text-xs font-mono text-[#888888] uppercase tracking-wider mb-3">
                    GUARANTEED OUTPUTS FOR THIS PHASE
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F2F2ED] border border-black/[0.04] text-xs font-medium text-[#222222]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#7B5AFF] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Visual Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-[#F2F2ED] border border-black/[0.08] p-8 flex flex-col justify-between overflow-hidden shadow-inner">
              <div className="flex items-center justify-between text-xs font-mono text-[#777777]">
                <span>STAGE VISUALIZATION</span>
                <span className="text-[#111111] font-semibold">{current.number} OF 06</span>
              </div>

              {/* Minimalist Architectural Geometry Diagram */}
              <div className="relative w-full h-[60%] flex items-center justify-center">
                <svg viewBox="0 0 240 240" className="w-full h-full max-h-[180px]">
                  {/* Outer circle track */}
                  <circle cx="120" cy="120" r="90" stroke="#111111" strokeWidth="0.8" strokeDasharray="4 4" fill="none" opacity="0.3" />
                  
                  {/* Radial step nodes */}
                  {PROCESS_STEPS.map((_, i) => {
                    const angle = (i * 60 * Math.PI) / 180;
                    const cx = 120 + Math.sin(angle) * 90;
                    const cy = 120 - Math.cos(angle) * 90;
                    const isCurrent = i === activeStep;
                    const isPast = i < activeStep;
                    return (
                      <g key={i}>
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isCurrent ? 9 : 5}
                          fill={isCurrent ? '#7B5AFF' : isPast ? '#111111' : '#D5D5CF'}
                          className="transition-all duration-300"
                        />
                        {isCurrent && (
                          <circle cx={cx} cy={cy} r="16" stroke="#7B5AFF" strokeWidth="1" fill="none" opacity="0.5" />
                        )}
                      </g>
                    );
                  })}

                  {/* Central Monogram */}
                  <circle cx="120" cy="120" r="32" fill="#111111" />
                  <text x="120" y="125" textAnchor="middle" fill="#FAFAF8" fontSize="12" fontFamily="'Clash Display', 'Cabinet Grotesk', 'Urbanist', sans-serif" fontWeight="bold">
                    {current.number}
                  </text>
                </svg>
              </div>

              <div className="flex items-center justify-between text-xs font-mono border-t border-black/[0.08] pt-3 text-[#666666]">
                <span>NEONENCY METHOD</span>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length)}
                  className="flex items-center gap-1 text-[#111111] hover:text-[#7B5AFF] font-medium cursor-pointer"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
