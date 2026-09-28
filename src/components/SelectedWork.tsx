import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { ProjectMockup } from './ProjectMockup';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
  onOpenEstimator: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectProject,
  onOpenEstimator,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Web Design', 'Development', 'E-commerce', 'Redesign'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-28 md:py-36 bg-[#FAFAF8] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-black/[0.08]">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[#777777] uppercase tracking-widest mb-3">
              <span className="text-[#7B5AFF]">02</span>
              <span aria-hidden="true">/</span>
              <span>SELECTED ARCHIVE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111]">
              Crafted with Conviction.
            </h2>
          </div>

          {/* Interactive filter controls - zero pills, clean segmented tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F0F0EB] rounded-lg self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#111111] text-[#FAFAF8] shadow-sm'
                    : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Showcase - Varied Layout Rhythms */}
        <div className="mt-16 flex flex-col gap-24 md:gap-36">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Alternate layouts for dynamic editorial cadence
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer"
                >
                  {/* Top metadata row with clean typographic separators (Zero Pill) */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#777777] pb-4 mb-6 border-b border-black/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#111111] font-semibold">0{index + 1}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#111111]">{project.client}</span>
                      <span aria-hidden="true" className="hidden sm:inline">·</span>
                      <span className="hidden sm:inline text-[#7B5AFF]">{project.category}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span>{project.year}</span>
                      <span className="flex items-center gap-1 text-[#111111] font-medium group-hover:text-[#7B5AFF] transition-colors">
                        <span>Read Case</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>

                  {/* Asymmetric / Dynamic Visual & Text Grid */}
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Visual Container */}
                    <div className={`lg:col-span-7 ${isEven ? '' : 'lg:col-start-6'}`}>
                      <ProjectMockup project={project} aspect="aspect-[16/10]" />
                    </div>

                    {/* Editorial Details & Proof */}
                    <div className={`lg:col-span-5 flex flex-col justify-between ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111111] group-hover:text-[#7B5AFF] transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="mt-4 text-sm sm:text-base text-[#555555] leading-relaxed">
                          {project.excerpt}
                        </p>

                        {/* Deliverables unboxed tags */}
                        <div className="mt-6 flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#777777]">
                          <span className="text-[#111111] font-medium">Deliverables:</span>
                          {project.deliverables.slice(0, 3).map((d, i) => (
                            <React.Fragment key={d}>
                              <span>{d}</span>
                              {i < 2 && <span aria-hidden="true">/</span>}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      {/* Adjacent Proof Metric (frontend-design Claim-to-Proof Adjacency) */}
                      <div className="mt-8 pt-6 border-t border-black/[0.06] grid grid-cols-3 gap-4">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <p className="font-display text-lg sm:text-xl font-bold text-[#111111] tracking-tight">
                              {m.value}
                            </p>
                            <p className="text-[11px] text-[#777777] font-sans mt-0.5 leading-tight">
                              {m.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Work Callout */}
        <div className="mt-28 p-8 md:p-12 rounded-2xl bg-[#F4F4F0] border border-black/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-[#7B5AFF] uppercase tracking-wider block mb-1">
              CUSTOM BUILDS & CONFIDENTIAL ARCHIVES
            </span>
            <p className="font-display text-xl md:text-2xl font-bold text-[#111111]">
              Looking for industry-specific case studies under NDA?
            </p>
            <p className="text-sm text-[#666666] mt-1">
              We maintain an extensive private portfolio of enterprise and fintech platforms.
            </p>
          </div>

          <button
            onClick={onOpenEstimator}
            className="px-6 py-3 text-xs font-semibold tracking-wide text-white bg-[#111111] hover:bg-[#7B5AFF] rounded-full transition-colors whitespace-nowrap cursor-pointer"
          >
            Request Private Dossier →
          </button>
        </div>
      </div>
    </section>
  );
};
