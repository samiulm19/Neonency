import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Check, Send, Sparkles } from 'lucide-react';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialService || 'Web Design & UI/UX'
  );
  const [selectedPlatform, setSelectedPlatform] = useState<string>('Webflow');
  const [selectedBudget, setSelectedBudget] = useState<string>('$10,000 – $25,000');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('1–2 Months');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const services = [
    'Web Design & UI/UX',
    'Website Development',
    'Website Redesign',
    'E-Commerce Systems',
    'Digital Branding',
    'White-Label Partnership',
  ];

  const platforms = [
    'Webflow',
    'Framer',
    'Shopify Plus',
    'Custom React / Next.js',
    'WordPress',
    'Open to Recommendation',
  ];

  const budgets = [
    '$5,000 – $10,000',
    '$10,000 – $25,000',
    '$25,000 – $50,000',
    '$50,000+',
  ];

  const timelines = [
    'Immediate (2–4 Weeks)',
    '1–2 Months',
    'Quarter 4 2026',
    'Flexible Exploration',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', company: '', notes: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start p-3 sm:p-6 md:p-10">
      <div className="fixed inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl bg-[#FAFAF8] rounded-2xl shadow-2xl border border-black/10 overflow-hidden z-10 my-6"
      >
        {/* Modal Header */}
        <div className="bg-[#FAFAF8] px-6 sm:px-10 py-6 border-b border-black/[0.08] flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono text-[#7B5AFF] uppercase tracking-wider block">
              INITIAL BRIEF & ESTIMATION
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#111111] mt-0.5">
              Start a Project with Neonency
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#555555] hover:text-[#111111] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
            aria-label="Close Estimator"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 sm:p-16 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#7B5AFF]/10 text-[#7B5AFF] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="font-display text-3xl font-bold text-[#111111]">
              Brief Successfully Received.
            </h3>

            <p className="text-sm sm:text-base text-[#555555] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#111111]">{formData.name || 'Partner'}</span>. Our studio lead will analyze your requirements and follow up at <span className="font-semibold text-[#111111]">{formData.email}</span> within 24 hours with an initial architectural roadmap.
            </p>

            <div className="p-4 rounded-xl bg-[#F2F2ED] border border-black/[0.06] text-xs font-mono text-[#444444] max-w-sm mx-auto text-left space-y-1">
              <div className="flex justify-between">
                <span>SERVICE:</span>
                <span className="text-[#111111] font-semibold">{selectedService}</span>
              </div>
              <div className="flex justify-between">
                <span>PLATFORM:</span>
                <span className="text-[#111111] font-semibold">{selectedPlatform}</span>
              </div>
              <div className="flex justify-between">
                <span>BUDGET TIER:</span>
                <span className="text-[#111111] font-semibold">{selectedBudget}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3.5 text-xs font-bold text-white bg-[#111111] hover:bg-[#7B5AFF] rounded-full transition-colors cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
            {/* Step 1: Service */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-3">
                01. SELECT PRIMARY SERVICE
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {services.map((svc) => (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => setSelectedService(svc)}
                    className={`p-3 text-xs font-medium text-left rounded-lg border transition-all cursor-pointer ${
                      selectedService === svc
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'bg-[#F4F4F0] text-[#444444] border-black/[0.06] hover:border-black/20'
                    }`}
                  >
                    {svc}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Preferred Platform */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-3">
                02. PREFERRED PLATFORM / TECHNOLOGY
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {platforms.map((plat) => (
                  <button
                    key={plat}
                    type="button"
                    onClick={() => setSelectedPlatform(plat)}
                    className={`p-3 text-xs font-medium text-left rounded-lg border transition-all cursor-pointer ${
                      selectedPlatform === plat
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'bg-[#F4F4F0] text-[#444444] border-black/[0.06] hover:border-black/20'
                    }`}
                  >
                    {plat}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Budget Range & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-3">
                  03. ESTIMATED INVESTMENT TIER
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setSelectedBudget(b)}
                      className={`p-2.5 text-xs font-mono text-center rounded-lg border transition-all cursor-pointer ${
                        selectedBudget === b
                          ? 'bg-[#111111] text-white border-[#111111]'
                          : 'bg-[#F4F4F0] text-[#444444] border-black/[0.06] hover:border-black/20'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#666666] block mb-3">
                  04. TARGET TIMELINE
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {timelines.map((tl) => (
                    <button
                      key={tl}
                      type="button"
                      onClick={() => setSelectedTimeline(tl)}
                      className={`p-2.5 text-xs text-center rounded-lg border transition-all cursor-pointer ${
                        selectedTimeline === tl
                          ? 'bg-[#111111] text-white border-[#111111]'
                          : 'bg-[#F4F4F0] text-[#444444] border-black/[0.06] hover:border-black/20'
                      }`}
                    >
                      {tl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Contact Information */}
            <div className="pt-4 border-t border-black/[0.08] space-y-4">
              <label className="text-xs font-mono uppercase tracking-wider text-[#666666] block">
                05. CONTACT & PROJECT BRIEF
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-xs bg-[#F4F4F0] border border-black/[0.08] rounded-lg focus:outline-none focus:border-[#7B5AFF]"
                />
                <input
                  type="email"
                  required
                  placeholder="Work Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 text-xs bg-[#F4F4F0] border border-black/[0.08] rounded-lg focus:outline-none focus:border-[#7B5AFF]"
                />
                <input
                  type="text"
                  placeholder="Company / Website URL"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 text-xs bg-[#F4F4F0] border border-black/[0.08] rounded-lg focus:outline-none focus:border-[#7B5AFF]"
                />
              </div>

              <textarea
                rows={3}
                placeholder="Brief project summary, current challenges, or specific goals..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 text-xs bg-[#F4F4F0] border border-black/[0.08] rounded-lg focus:outline-none focus:border-[#7B5AFF] resize-none"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-[#777777] font-mono">
                NON-DISCLOSURE GUARANTEED · 24-HOUR RESPONSE COMMITMENT
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-wider text-white bg-[#111111] hover:bg-[#7B5AFF] rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md group"
              >
                <span>Submit Project Brief</span>
                <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
