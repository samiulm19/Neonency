import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail } from 'lucide-react';

interface FinalCTAProps {
  onOpenEstimator: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEstimator }) => {
  return (
    <section className="py-32 md:py-48 bg-[#FAFAF8] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3 text-xs font-mono text-[#777777] uppercase tracking-widest mb-8">
          <span className="text-[#7B5AFF]">10</span>
          <span aria-hidden="true">/</span>
          <span>COMMENCE ENGAGEMENT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-[-0.04em] leading-[0.88] text-[#111111] uppercase">
              HAVE A PROJECT
              <br />
              <span className="italic font-serif font-normal lowercase tracking-normal text-[#555555] mr-2">worth</span>
              BUILDING?
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <p className="text-lg sm:text-xl text-[#444444] font-normal leading-relaxed">
              Let’s create something that deserves attention. We review new project inquiries within one business day.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto px-8 py-4 text-sm font-semibold tracking-wide text-white bg-[#111111] hover:bg-[#7B5AFF] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="mailto:inquiries@neonency.com"
                className="w-full sm:w-auto px-6 py-4 text-xs font-mono text-[#111111] hover:text-[#7B5AFF] flex items-center justify-center gap-2 transition-colors border border-black/10 rounded-full hover:border-[#7B5AFF]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>inquiries@neonency.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
