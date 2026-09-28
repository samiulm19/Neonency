import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEstimator }) => {
  return (
    <footer className="pt-24 pb-16 bg-[#FAFAF8] border-t border-black/[0.08] text-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-black/[0.08]">
          {/* Brand & Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="font-display text-3xl font-extrabold tracking-tight text-[#111111] inline-block">
              Neonency<span className="text-[#7B5AFF]">.</span>
            </a>
            <p className="text-sm text-[#555555] max-w-sm leading-relaxed">
              We design and build digital experiences that make brands look better, perform better, and grow. High-conviction engineering for ambitious clients worldwide.
            </p>
            <div className="text-xs font-mono text-[#888888] space-y-1">
              <p>OPERATING GLOBALLY FROM LONDON & ZURICH</p>
              <p>ESTABLISHED IN 2016 · ALL CODE CRAFTED INTERNALLY</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono text-[#888888] uppercase tracking-wider block">
              DIRECTORY
            </span>
            <ul className="space-y-2.5 text-xs text-[#444444]">
              {['Work', 'Services', 'Capabilities', 'Process', 'Partnership', 'About'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace('partnership', 'white-label')}`}
                    className="hover:text-[#7B5AFF] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono text-[#888888] uppercase tracking-wider block">
              DISCIPLINES
            </span>
            <ul className="space-y-2.5 text-xs text-[#444444]">
              {[
                'Web Design & UI/UX',
                'Custom Web Development',
                'Website Redesign',
                'E-Commerce & Shopify',
                'Digital Brand Systems',
                'White-Label Agency Partner',
              ].map((item) => (
                <li key={item} className="hover:text-[#111111] transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono text-[#888888] uppercase tracking-wider block">
              CONNECT
            </span>
            <ul className="space-y-2.5 text-xs text-[#444444]">
              {[
                { name: 'Awwwards', href: '#' },
                { name: 'X / Twitter', href: '#' },
                { name: 'LinkedIn', href: '#' },
                { name: 'GitHub', href: '#' },
                { name: 'ReadCV', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#7B5AFF] transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Timezone Row */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#777777] font-mono">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} NEONENCY DIGITAL LTD.</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>LONDON 12:00</span>
            <span>ZURICH 13:00</span>
            <span>TOKYO 21:00</span>
          </div>

          <button
            onClick={onOpenEstimator}
            className="text-[#111111] hover:text-[#7B5AFF] font-medium flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
