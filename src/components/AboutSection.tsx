import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const convictions = [
    {
      title: 'Restraint Over Noise',
      text: 'Every decorative gradient or gratuitous animation that doesn’t serve comprehension is noise. We edit mercilessly until only essential elegance remains.',
    },
    {
      title: 'Typography is Voice',
      text: 'Before someone reads a single sentence, the weight, scale, and spacing of your typography has already established your perceived standard.',
    },
    {
      title: 'Velocity as a Feature',
      text: 'A website that takes 3 seconds to load has failed before it began. We engineer clean code architectures that execute instantaneously on mobile networks.',
    },
    {
      title: 'Client Autonomy',
      text: 'We never hold your digital assets hostage. We configure intuitive visual CMS schemas so your team can publish case studies and launch campaigns independently.',
    },
  ];

  return (
    <section id="about" className="py-28 md:py-36 bg-[#FAFAF8] border-b border-black/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono text-[#777777] uppercase tracking-widest mb-10">
          <span className="text-[#7B5AFF]">08</span>
          <span aria-hidden="true">/</span>
          <span>THE STUDIO ETHOS</span>
        </div>

        {/* Narrative Two-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.08]">
              Strategy + Design + Technology.
            </h2>
            <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
              We don’t simply build websites. We create digital experiences that help businesses establish credibility, communicate clearly, and convert attention into enduring commercial action.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-6 text-sm sm:text-base text-[#666666] leading-relaxed pt-2">
            <p>
              Founded in 2016, Neonency was born out of frustration with two extremes in the agency landscape: marketing consultancies that generate dry, uninspired templates, and artistic boutiques that produce fragile, unmaintainable eye-candy.
            </p>
            <p>
              We sit at the exact intersection. We bring the visual discipline and typographic rigor of an elite European design studio, backed by the rigorous engineering standards of modern software practices.
            </p>

            <div className="pt-6 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono text-[#777777]">
              <span>CORE HUBS: LONDON · TOKYO · NEW YORK</span>
              <span className="text-[#111111] font-semibold">10+ YEARS IN PRACTICE</span>
            </div>
          </div>
        </div>

        {/* Studio Convictions Matrix */}
        <div className="mt-24 pt-12 border-t border-black/[0.08]">
          <span className="text-xs font-mono text-[#7B5AFF] uppercase tracking-widest block mb-8">
            OUR OPERATING CONVICTIONS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {convictions.map((c, i) => (
              <div key={c.title} className="space-y-3">
                <span className="font-mono text-xs text-[#888888]">CONVICTION 0{i + 1}</span>
                <h3 className="font-display text-lg font-bold text-[#111111]">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
