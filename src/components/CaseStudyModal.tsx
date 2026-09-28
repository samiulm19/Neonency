import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenEstimator: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenEstimator,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start p-2 sm:p-4 md:p-8">
        {/* Background dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#FAFAF8] rounded-2xl shadow-2xl border border-black/10 overflow-hidden z-10 my-8"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-30 bg-[#FAFAF8]/95 backdrop-blur-md px-6 md:px-10 py-5 border-b border-black/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs font-mono text-[#666666]">
              <span>PROJECT ARCHIVE</span>
              <span aria-hidden="true">/</span>
              <span className="text-[#111111] font-semibold">{project.year}</span>
              <span aria-hidden="true">/</span>
              <span className="text-[#7B5AFF]">{project.category}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#555555] hover:text-[#111111] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-12 space-y-12">
            {/* Title & Headline */}
            <div>
              <span className="text-xs font-mono tracking-wider text-[#7B5AFF] uppercase">
                {project.client}
              </span>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight mt-2 leading-[1.05]">
                {project.title}
              </h1>
              <p className="mt-4 text-base sm:text-xl text-[#555555] max-w-3xl leading-relaxed">
                {project.excerpt}
              </p>
            </div>

            {/* Visual Showcase Feature */}
            <div className="rounded-xl overflow-hidden shadow-sm">
              <ProjectMockup project={project} aspect="aspect-[16/9]" />
            </div>

            {/* Metadata & Key Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl bg-[#F2F2ED] border border-black/[0.06]">
              <div>
                <span className="text-[11px] font-mono text-[#777777] block uppercase">TIMELINE</span>
                <span className="font-display text-lg font-bold text-[#111111]">{project.timeline}</span>
              </div>
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <span className="text-[11px] font-mono text-[#777777] block uppercase">{m.label}</span>
                  <span className="font-display text-lg font-bold text-[#111111]">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Narrative Split: Overview, Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-6 border-t border-black/[0.08]">
              <div className="md:col-span-4 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#777777] tracking-wider mb-2">
                    TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-[#EAEAE5] text-[#222222] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-[#777777] tracking-wider mb-2">
                    DELIVERABLES
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#444444]">
                    {project.deliverables.map((del) => (
                      <li key={del} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7B5AFF]" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-8 space-y-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#111111] mb-2">
                    The Context & Challenge
                  </h3>
                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-[#111111] mb-2">
                    Our Architecture & Execution
                  </h3>
                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA Bar */}
            <div className="pt-8 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-display text-lg font-bold text-[#111111]">
                  Need a similar standard of digital craft?
                </p>
                <p className="text-xs text-[#666666]">
                  We schedule discovery consultations within 24 hours.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    onClose();
                    onOpenEstimator();
                  }}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-[#111111] hover:bg-[#7B5AFF] rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Commission Similar Build</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
