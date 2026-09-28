import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';

interface ProjectMockupProps {
  project: Project;
  aspect?: string;
  isHovered?: boolean;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  project,
  aspect = 'aspect-[16/10]',
  isHovered = false,
}) => {
  const [internalHover, setInternalHover] = useState(false);
  const activeHover = isHovered || internalHover;

  return (
    <div
      onMouseEnter={() => setInternalHover(true)}
      onMouseLeave={() => setInternalHover(false)}
      className={`relative w-full ${aspect} overflow-hidden rounded-xl border border-black/[0.06] bg-[#F4F4F0] select-none group transition-all duration-700`}
    >
      {/* Subtle paper / fine grain overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40 z-10" />

      {/* Render bespoke architectural/editorial artwork based on mockupType */}
      {project.mockupType === 'architecture' && (
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between bg-gradient-to-br from-[#EFEFEA] via-[#E9E9E2] to-[#DFDFD6] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
          {/* Top indices */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#666666] uppercase z-20">
            <span>CH · 47.3769° N, 8.5417° E</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7B5AFF]" />
              ATELIER ARCHIVE VOL. 04
            </span>
          </div>

          {/* Architectural Drawing & Spatial Geometry */}
          <div className="relative w-full h-[60%] flex items-center justify-center my-auto">
            {/* SVG Architectural Wireframe & Shading */}
            <svg
              viewBox="0 0 500 300"
              className="w-full h-full max-h-[220px] transition-transform duration-700 group-hover:rotate-[0.5deg]"
              fill="none"
              stroke="currentColor"
            >
              {/* Ground horizon line */}
              <line x1="20" y1="240" x2="480" y2="240" stroke="#111111" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
              
              {/* Concrete Pavilion Massing */}
              <rect x="70" y="90" width="220" height="150" fill="#E4E4DC" stroke="#111111" strokeWidth="1.2" />
              <rect x="230" y="60" width="180" height="180" fill="#ECECE4" stroke="#111111" strokeWidth="1.2" />
              
              {/* Cantilever roof line */}
              <polygon points="50,90 310,90 290,75 30,75" fill="#111111" />
              
              {/* Glass curtain grid */}
              <g stroke="#111111" strokeWidth="0.6" opacity="0.6">
                <line x1="100" y1="90" x2="100" y2="240" />
                <line x1="140" y1="90" x2="140" y2="240" />
                <line x1="180" y1="90" x2="180" y2="240" />
                <line x1="220" y1="90" x2="220" y2="240" />
                
                <line x1="270" y1="60" x2="270" y2="240" />
                <line x1="310" y1="60" x2="310" y2="240" />
                <line x1="350" y1="60" x2="350" y2="240" />
                <line x1="390" y1="60" x2="390" y2="240" />
              </g>

              {/* Architectural dimension annotations */}
              <text x="75" y="82" fill="#7B5AFF" fontSize="9" fontFamily="monospace" letterSpacing="1">14.60m CANTILEVER</text>
              <line x1="70" y1="85" x2="290" y2="85" stroke="#7B5AFF" strokeWidth="0.8" />
              
              {/* Subtle light angle ray */}
              <line x1="420" y1="20" x2="320" y2="180" stroke="#7B5AFF" strokeWidth="0.8" opacity="0.3" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Bottom editorial caption */}
          <div className="flex items-end justify-between z-20 border-t border-black/[0.08] pt-3">
            <div>
              <p className="font-display text-sm font-semibold text-[#111111] tracking-tight">VILLA BERGHOF · ENGADIN</p>
              <p className="text-xs text-[#666666]">Monolithic Cast-in-Place Concrete & Alpine Larch</p>
            </div>
            <span className="text-[11px] font-mono text-[#7B5AFF] uppercase tracking-wider">Lighthouse 99</span>
          </div>
        </div>
      )}

      {project.mockupType === 'luxury-fashion' && (
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between bg-gradient-to-br from-[#181818] via-[#111111] to-[#0A0A0A] text-[#FAFAF8] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
          {/* Top indices */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-[#999999] uppercase z-20">
            <span>GENÈVE · CALIBRE 8820</span>
            <span className="text-[#FAFAF8] tracking-widest">EDITION: 08 / 25</span>
          </div>

          {/* Horological Dial Artwork */}
          <div className="relative w-full h-[65%] flex items-center justify-center my-auto">
            <svg viewBox="0 0 320 320" className="w-full h-full max-h-[220px]">
              {/* Outer bezel */}
              <circle cx="160" cy="160" r="140" stroke="#333333" strokeWidth="1" fill="#141414" />
              <circle cx="160" cy="160" r="132" stroke="#444444" strokeWidth="0.7" fill="none" />
              
              {/* Dial indices */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 160 + Math.sin(angle) * 120;
                const y1 = 160 - Math.cos(angle) * 120;
                const x2 = 160 + Math.sin(angle) * 128;
                const y2 = 160 - Math.cos(angle) * 128;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={i % 3 === 0 ? '#FAFAF8' : '#666666'}
                    strokeWidth={i % 3 === 0 ? '2' : '1'}
                  />
                );
              })}

              {/* Sub-dials */}
              <circle cx="160" cy="120" r="32" stroke="#333333" strokeWidth="0.8" fill="#181818" />
              <circle cx="120" cy="180" r="26" stroke="#333333" strokeWidth="0.8" fill="#181818" />
              <circle cx="200" cy="180" r="26" stroke="#333333" strokeWidth="0.8" fill="#181818" />

              {/* Hands */}
              <line x1="160" y1="160" x2="160" y2="85" stroke="#FAFAF8" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="160" y1="160" x2="215" y2="175" stroke="#FAFAF8" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="160" y1="180" x2="160" y2="60" stroke="#7B5AFF" strokeWidth="1" />
              <circle cx="160" cy="160" r="4" fill="#7B5AFF" />

              {/* Brand Typography */}
              <text x="160" y="225" textAnchor="middle" fill="#FAFAF8" fontSize="10" fontFamily="'Clash Display', 'Cabinet Grotesk', 'Urbanist', sans-serif" letterSpacing="4">VERVE</text>
              <text x="160" y="238" textAnchor="middle" fill="#777777" fontSize="6.5" fontFamily="monospace" letterSpacing="1.5">CHRONOMÈTRE OFFICIEL</text>
            </svg>
          </div>

          {/* Bottom caption */}
          <div className="flex items-end justify-between z-20 border-t border-white/[0.08] pt-3">
            <div>
              <p className="font-display text-sm font-semibold text-white tracking-tight">HEADLESS SHOPIFY PLUS</p>
              <p className="text-xs text-[#999999]">Sub-second transitions · 14 Currencies</p>
            </div>
            <span className="text-[11px] font-mono text-[#FAFAF8] uppercase tracking-wider">+185% Conv.</span>
          </div>
        </div>
      )}

      {project.mockupType === 'spatial-tech' && (
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between bg-[#F8F8F5] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
          {/* Top indices */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#666666] uppercase z-20">
            <span>KINETIC · SPATIAL PIPELINE</span>
            <span className="text-[#7B5AFF]">LATENCY: 4.2ms</span>
          </div>

          {/* Vector spatial coordinate graph */}
          <div className="relative w-full h-[65%] flex items-center justify-center my-auto">
            <svg viewBox="0 0 460 260" className="w-full h-full max-h-[220px]">
              {/* Subtle background coordinate grid */}
              <g stroke="#111111" strokeWidth="0.3" opacity="0.15">
                <line x1="40" y1="20" x2="40" y2="240" />
                <line x1="120" y1="20" x2="120" y2="240" />
                <line x1="200" y1="20" x2="200" y2="240" />
                <line x1="280" y1="20" x2="280" y2="240" />
                <line x1="360" y1="20" x2="360" y2="240" />
                <line x1="440" y1="20" x2="440" y2="240" />

                <line x1="20" y1="60" x2="440" y2="60" />
                <line x1="20" y1="130" x2="440" y2="130" />
                <line x1="20" y1="200" x2="440" y2="200" />
              </g>

              {/* Spatial Bézier curve wave */}
              <path
                d="M 40 180 C 120 70, 200 230, 280 120 C 340 40, 390 150, 430 90"
                fill="none"
                stroke="#111111"
                strokeWidth="2"
              />
              <path
                d="M 40 190 C 120 100, 200 210, 280 140 C 340 70, 390 170, 430 110"
                fill="none"
                stroke="#7B5AFF"
                strokeWidth="1.2"
                strokeDasharray="4 3"
              />

              {/* Spatial bounding target nodes */}
              <circle cx="280" cy="120" r="5" fill="#7B5AFF" />
              <circle cx="280" cy="120" r="14" stroke="#7B5AFF" strokeWidth="0.8" fill="none" opacity="0.5" />
              <text x="295" y="115" fill="#111111" fontSize="9" fontFamily="monospace">NODE_VECTOR [X:48, Y:92, Z:14]</text>

              <circle cx="120" cy="115" r="4" fill="#111111" />
              <rect x="180" y="85" width="80" height="26" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="0.8" />
              <text x="188" y="102" fill="#111111" fontSize="8.5" fontFamily="monospace">ACCURACY 99.8%</text>
            </svg>
          </div>

          {/* Bottom caption */}
          <div className="flex items-end justify-between z-20 border-t border-black/[0.08] pt-3">
            <div>
              <p className="font-display text-sm font-semibold text-[#111111] tracking-tight">SERIES-B ENTERPRISE PLATFORM</p>
              <p className="text-xs text-[#666666]">Framer & Custom React Canvas · $28M Raised</p>
            </div>
            <span className="text-[11px] font-mono text-[#7B5AFF] uppercase tracking-wider">+310% Bookings</span>
          </div>
        </div>
      )}

      {project.mockupType === 'venture-capital' && (
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between bg-[#F2F2ED] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
          {/* Top indices */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#666666] uppercase z-20">
            <span>MONOLITH CAPITAL · LDN / NYC</span>
            <span>FUND II · $120M</span>
          </div>

          {/* Editorial Broadsheet Specimen */}
          <div className="relative w-full h-[65%] flex flex-col justify-center my-auto px-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#7B5AFF] mb-1">THESIS STATEMENT</span>
            <h4 className="font-display text-2xl md:text-3xl font-extrabold text-[#111111] leading-tight tracking-tighter">
              WE BACK FOUNDERS WHO TREAT DESIGN AS INFRASTRUCTURE.
            </h4>
            <div className="grid grid-cols-3 gap-4 mt-4 pt-3 border-t border-black/[0.1] text-xs">
              <div>
                <p className="font-mono text-[10px] text-[#777777]">ACTIVE PORTFOLIO</p>
                <p className="font-semibold text-[#111111]">34 Investments</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-[#777777]">CHECK SIZE</p>
                <p className="font-semibold text-[#111111]">$1.5M – $4.0M</p>
              </div>
              <div>
                <p className="font-mono text-[10px] text-[#777777]">STAGE</p>
                <p className="font-semibold text-[#111111]">Pre-Seed & Seed</p>
              </div>
            </div>
          </div>

          {/* Bottom caption */}
          <div className="flex items-end justify-between z-20 border-t border-black/[0.08] pt-3">
            <div>
              <p className="font-display text-sm font-semibold text-[#111111] tracking-tight">EDITORIAL JOURNAL & ARCHIVE</p>
              <p className="text-xs text-[#666666]">Custom Webflow CMS · 0.6s Load Time</p>
            </div>
            <span className="text-[11px] font-mono text-[#111111] uppercase tracking-wider">SiteInspire Feature</span>
          </div>
        </div>
      )}

      {project.mockupType === 'sound-hardware' && (
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between bg-gradient-to-br from-[#EAE6DE] via-[#E2DDCF] to-[#D5CFC0] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
          {/* Top indices */}
          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#555555] uppercase z-20">
            <span>SOLIS COPENHAGEN</span>
            <span>20Hz – 24kHz DUAL-CHAMBER</span>
          </div>

          {/* Acoustic Waveform & Hardware Diagram */}
          <div className="relative w-full h-[65%] flex items-center justify-center my-auto">
            <svg viewBox="0 0 400 240" className="w-full h-full max-h-[220px]">
              {/* Concentric sound emission rings */}
              <circle cx="200" cy="120" r="100" stroke="#111111" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
              <circle cx="200" cy="120" r="75" stroke="#111111" strokeWidth="0.8" opacity="0.4" />
              <circle cx="200" cy="120" r="50" stroke="#7B5AFF" strokeWidth="1.2" opacity="0.6" />
              <circle cx="200" cy="120" r="28" fill="#111111" />
              <circle cx="200" cy="120" r="10" fill="#7B5AFF" />

              {/* Nordic Timber grain lines */}
              <line x1="30" y1="40" x2="370" y2="40" stroke="#111111" strokeWidth="0.4" opacity="0.2" />
              <line x1="30" y1="70" x2="370" y2="70" stroke="#111111" strokeWidth="0.4" opacity="0.2" />
              <line x1="30" y1="170" x2="370" y2="170" stroke="#111111" strokeWidth="0.4" opacity="0.2" />
              <line x1="30" y1="200" x2="370" y2="200" stroke="#111111" strokeWidth="0.4" opacity="0.2" />

              <text x="200" y="195" textAnchor="middle" fill="#111111" fontSize="9" fontFamily="monospace">SOLID OAK MONOLITHIC ENCLOSURE</text>
            </svg>
          </div>

          {/* Bottom caption */}
          <div className="flex items-end justify-between z-20 border-t border-black/[0.08] pt-3">
            <div>
              <p className="font-display text-sm font-semibold text-[#111111] tracking-tight">FLAGSHIP SOUNDSCAPE LAUNCH</p>
              <p className="text-xs text-[#666666]">Interactive Web Audio API & Shopify</p>
            </div>
            <span className="text-[11px] font-mono text-[#7B5AFF] uppercase tracking-wider">Awwwards Nominee</span>
          </div>
        </div>
      )}

      {/* Hover action banner */}
      <div className={`absolute bottom-4 right-4 z-30 transition-all duration-300 ${activeHover ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <div className="px-3 py-1.5 bg-[#111111] text-[#FAFAF8] text-xs font-medium rounded-full shadow-lg flex items-center gap-1.5">
          <span>Inspect Case Study</span>
          <span className="text-[#7B5AFF]">→</span>
        </div>
      </div>
    </div>
  );
};
