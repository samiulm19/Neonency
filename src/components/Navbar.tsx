import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Process', href: '#process' },
    { label: 'Partnership', href: '#white-label' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAFAF8]/90 backdrop-blur-md border-b border-black/[0.06] py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-baseline gap-1 text-2xl font-bold tracking-tight text-[#111111] font-display focus-visible:outline-none"
          >
            <span>Neonency</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7B5AFF] group-hover:scale-125 transition-transform" />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide text-[#555555]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-[#555555] hover:text-[#111111] transition-colors whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#111111] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEstimator}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#111111] hover:bg-[#7B5AFF] rounded-full transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#111111] hover:bg-black/5 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#FAFAF8] pt-24 px-6 flex flex-col justify-between pb-10 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-mono tracking-widest text-[#777777] uppercase">INDEX</span>
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-3xl font-bold text-[#111111] flex items-center justify-between py-2 border-b border-black/[0.06] hover:text-[#7B5AFF] transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-sm font-mono font-normal text-[#999999]">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-black/[0.08] flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs text-[#666666]">
                <span>London · Tokyo · New York</span>
                <span className="text-[#7B5AFF] font-mono">AVAILABLE Q4</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full py-4 text-sm font-semibold text-white bg-[#111111] rounded-xl flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#7B5AFF]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
