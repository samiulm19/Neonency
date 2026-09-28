import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';

interface HeroProps {
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  const [timeLondon, setTimeLondon] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeLondon(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] pt-36 md:pt-44 pb-16 flex flex-col justify-between overflow-hidden bg-[#FAFAF8]"
    >
      {/* Subtle coordinate grid lines - very quiet */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Top unboxed status telemetry - strictly zero pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#666666] tracking-wide mb-8 md:mb-12 border-b border-black/[0.06] pb-4"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7B5AFF] animate-pulse" />
            <span className="text-[#111111] font-medium">STUDIO STATUS</span>
            <span aria-hidden="true" className="text-black/20">/</span>
            <span>AVAILABLE FOR SELECTIVE Q4 COMMISSIONS</span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span>LONDON {timeLondon || '12:00:00'} GMT</span>
            <span aria-hidden="true" className="text-black/20">/</span>
            <span>INDEPENDENT DIGITAL PRACTICE</span>
          </div>
        </motion.div>

        {/* Main Massive Editorial Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[13vw] sm:text-[11vw] lg:text-[88px] xl:text-[98px] font-extrabold tracking-[-0.04em] leading-[0.88] text-[#111111] uppercase"
            >
              WE BUILD DIGITAL
              <br />
              <span className="inline-block relative">
                EXPERIENCES
                <span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#7B5AFF] ml-2 align-baseline transform translate-y-[-0.1em]" />
              </span>
              <br />
              <span className="italic font-serif font-normal lowercase tracking-normal text-[#444444] mr-3">that</span>
              THAT MOVE.
            </motion.h1>
          </div>

          {/* Interactive tactile element: Dynamic Spatial Compass & Micro Gyroscope */}
          <div className="lg:col-span-3 flex lg:flex-col justify-between items-start lg:items-end gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl border border-black/[0.08] bg-[#F4F4F0] p-4 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              style={{
                transform: `perspective(600px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-[#777777]">
                <span>ORBIT 01</span>
                <Compass className="w-3.5 h-3.5 text-[#7B5AFF]" />
              </div>

              {/* Kinetic Compass Rings */}
              <div className="relative w-full h-16 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full border border-black/20 flex items-center justify-center transition-transform duration-300"
                  style={{ transform: `rotate(${mousePos.x * 80}deg)` }}
                >
                  <div className="w-12 h-12 rounded-full border border-[#7B5AFF]/30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7B5AFF]" />
                  </div>
                </div>
              </div>

              <div className="text-[10px] font-mono text-[#555555] flex justify-between">
                <span>EST. 2016</span>
                <span className="text-[#111111] font-semibold">NEONENCY</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Narrative Subtext & Action Row */}
        <div className="mt-12 md:mt-20 pt-8 border-t border-black/[0.08] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="text-base sm:text-lg text-[#444444] font-normal leading-relaxed">
              Neonency is a digital agency designing and building premium websites, brands, and digital experiences for ambitious businesses and creative agencies worldwide.
            </p>
          </div>

          <div className="md:col-span-6 lg:col-span-7 flex flex-wrap items-center md:justify-end gap-4 sm:gap-6">
            <button
              onClick={onOpenEstimator}
              className="px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#111111] hover:bg-[#7B5AFF] rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href="#work"
              className="px-6 py-3.5 text-sm font-medium tracking-wide text-[#111111] hover:text-[#7B5AFF] transition-colors flex items-center gap-2 group"
            >
              <span>Explore Selected Work</span>
              <span className="text-xs font-mono text-[#888888] group-hover:text-[#7B5AFF] transition-colors">[05]</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full mt-10 flex items-center justify-between text-xs text-[#888888] font-mono">
        <span className="flex items-center gap-2">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          <span>SCROLL TO EXPLORE ARCHIVE</span>
        </span>
        <span className="hidden sm:inline">AWWWARDS & CSSDA NOMINEE</span>
      </div>
    </section>
  );
};
