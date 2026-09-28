/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Statement } from './components/Statement';
import { SelectedWork } from './components/SelectedWork';
import { ServicesSection } from './components/ServicesSection';
import { StatsSection } from './components/StatsSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhiteLabelSection } from './components/WhiteLabelSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [estimatorOpen, setEstimatorOpen] = useState<boolean>(false);
  const [initialEstimatorService, setInitialEstimatorService] = useState<string>('');

  const handleOpenEstimator = (serviceName?: string) => {
    if (serviceName) {
      setInitialEstimatorService(serviceName);
    }
    setEstimatorOpen(true);
  };

  const handleCloseEstimator = () => {
    setEstimatorOpen(false);
    setInitialEstimatorService('');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#111111] selection:bg-[#7B5AFF]/15 selection:text-[#111111] relative">
      {/* 3-Zone Navigation Header */}
      <Navbar onOpenEstimator={() => handleOpenEstimator()} />

      {/* Main Single Continuous Visual Story */}
      <main>
        {/* Minimalist Hero with Kinetic Compass & Massive Typography */}
        <Hero onOpenEstimator={() => handleOpenEstimator()} />

        {/* Editorial Positioning Manifesto */}
        <Statement />

        {/* Selected Work Archive with Case Study Triggers */}
        <SelectedWork
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenEstimator={() => handleOpenEstimator()}
        />

        {/* Interactive List-Based Services */}
        <ServicesSection onSelectService={(svc) => handleOpenEstimator(svc)} />

        {/* Measurable Record & Stats */}
        <StatsSection />

        {/* Capabilities & Technical Standards */}
        <CapabilitiesSection />

        {/* 6-Stage Methodology Process */}
        <ProcessSection />

        {/* Dedicated White-Label Agency Partnership Section */}
        <WhiteLabelSection onOpenEstimator={() => handleOpenEstimator('White-Label Partnership')} />

        {/* Editorial About & Studio Ethos */}
        <AboutSection />

        {/* Large Editorial Endorsements */}
        <TestimonialsSection />

        {/* Final Monumental CTA */}
        <FinalCTA onOpenEstimator={() => handleOpenEstimator()} />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer onOpenEstimator={() => handleOpenEstimator()} />

      {/* Deep Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenEstimator={() => {
          setSelectedProject(null);
          handleOpenEstimator();
        }}
      />

      {/* Interactive Project Estimator & Brief Builder Modal */}
      <ProjectEstimatorModal
        isOpen={estimatorOpen}
        onClose={handleCloseEstimator}
        initialService={initialEstimatorService}
      />
    </div>
  );
}
