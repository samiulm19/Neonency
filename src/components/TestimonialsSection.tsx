import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  };

  const t = TESTIMONIALS[currentIndex];

  return (
    <section className="py-28 md:py-36 bg-[#FAFAF8] border-b border-black/[0.08] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-12 border-b border-black/[0.08]">
          <div className="flex items-center gap-3 text-xs font-mono text-[#777777] uppercase tracking-widest">
            <span className="text-[#7B5AFF]">09</span>
            <span aria-hidden="true">/</span>
            <span>VERIFIED ENDORSEMENTS</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-2.5 rounded-full border border-black/10 hover:border-black text-[#111111] hover:bg-black/5 transition-colors cursor-pointer"
              aria-label="Previous Endorsement"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="p-2.5 rounded-full border border-black/10 hover:border-black text-[#111111] hover:bg-black/5 transition-colors cursor-pointer"
              aria-label="Next Endorsement"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Large Editorial Quote Presentation */}
        <div className="mt-14 min-h-[320px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#111111] leading-[1.2]">
                “{t.quote}”
              </blockquote>

              <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-lg font-bold text-[#111111]">
                      {t.author}
                    </span>
                    <span className="text-xs text-[#777777]">· {t.role}</span>
                  </div>
                  <p className="text-xs font-mono text-[#555555] mt-0.5">
                    {t.company} — {t.location}
                  </p>
                </div>

                <div className="sm:text-right">
                  <span className="text-[11px] font-mono text-[#777777] block uppercase">
                    MEASURABLE BUSINESS IMPACT
                  </span>
                  <span className="font-display text-base sm:text-lg font-bold text-[#7B5AFF]">
                    {t.impactMetric}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Testimonial Index Dots */}
        <div className="flex items-center gap-2 mt-12 pt-6">
          {TESTIMONIALS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-[#111111]' : 'w-2 bg-black/20 hover:bg-black/40'
              }`}
              aria-label={`Jump to endorsement ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
