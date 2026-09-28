import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'aura-atelier',
    title: 'AURA Architectural Atelier',
    client: 'AURA Studio Zurich & Milan',
    category: 'Web Design',
    year: '2026',
    timeline: '8 Weeks',
    deliverables: ['Creative Direction', 'Brand Digital System', 'Custom Webflow CMS', 'GLSL Fluid Interactions', 'SEO Schema'],
    techStack: ['Webflow', 'JavaScript / GSAP', 'Tailwind', 'Three.js'],
    excerpt: 'An immersive digital flagship for a Swiss architectural studio balancing monumental brutalist minimalism with fluid spatial motion.',
    headline: 'MONUMENTAL ARCHITECTURAL PRESENCE IN THE BROWSER',
    metrics: [
      { label: 'Inbound Project Inquiries', value: '+240%' },
      { label: 'Average Session Duration', value: '4m 18s' },
      { label: 'Lighthouse Performance', value: '99/100' }
    ],
    overview: 'AURA designs private villas, contemporary pavilions, and museum spaces across the Alpine and Mediterranean regions. Their previous portfolio relied on fragmented PDF dossiers and a sluggish legacy CMS that failed to convey their sculptural craft.',
    challenge: 'Architectural photography demands immense photographic fidelity without sacrificing loading speed. The interface needed to feel as deliberate, calm, and heavy as cast-in-place concrete while retaining silky-smooth 60fps transitions on mobile devices.',
    solution: 'Neonency engineered a custom Webflow architecture paired with lightweight custom WebGL shaders for fluid page transitions. We created an asymmetric dual-canvas grid that lets high-resolution photography breathe with generous whitespace and Swiss typographical precision.',
    accentColor: '#7B5AFF',
    layoutVariant: 'hero-split',
    mockupType: 'architecture'
  },
  {
    id: 'verve-horlogerie',
    title: 'VERVE Haute Horlogerie',
    client: 'Verve Timepieces Geneva',
    category: 'E-commerce',
    year: '2025',
    timeline: '12 Weeks',
    deliverables: ['Headless Shopify Storefront', '3D Configurator UX', 'Global Multi-Currency', 'Packaging Micro-site'],
    techStack: ['Shopify Plus', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    excerpt: 'A headless e-commerce experience designed for high-ticket horology collectors, delivering sub-second page transitions and bespoke checkout.',
    headline: 'REDEFINING LUXURY COMMERCE AT SUB-SECOND VELOCITY',
    metrics: [
      { label: 'Direct Checkout Conversion', value: '+185%' },
      { label: 'Average Order Value', value: '€4,850' },
      { label: 'Time to First Byte (TTFB)', value: '180ms' }
    ],
    overview: 'Independent Geneva watchmakers VERVE wanted to transition from exclusive boutique waitlists to a direct-to-collector global digital experience without compromising the aura of bespoke exclusivity.',
    challenge: 'High-ticket e-commerce ($4k - $18k items) requires absolute brand trust, flawless typography, and frictionless payment orchestration across 14 currencies, while keeping the digital atmosphere intimate and quiet.',
    solution: 'We architected a headless Shopify Plus solution with Next.js and micro-animations that emulate the mechanical escapement of a luxury movement. We introduced tactile micro-interactions, an interactive mechanical case breakdown, and concierge booking.',
    accentColor: '#111111',
    layoutVariant: 'asymmetric-large',
    mockupType: 'luxury-fashion'
  },
  {
    id: 'kinetic-spatial',
    title: 'KINETIC Spatial Intelligence',
    client: 'Kinetic AI Labs San Francisco',
    category: 'Development',
    year: '2026',
    timeline: '6 Weeks',
    deliverables: ['Interactive Product Landing', 'Interactive Coordinate Canvas', 'Framer Production Build', 'Brand Refresh'],
    techStack: ['Framer', 'React', 'Motion', 'Canvas API'],
    excerpt: 'Editorial web presence for a Series-B spatial computing platform, translating complex neural telemetry into clear executive narrative.',
    headline: 'CLARIFYING COMPLEX ENTERPRISE DEEP-TECH WITH HUMAN RESTRAINT',
    metrics: [
      { label: 'Enterprise Pilot Bookings', value: '+310%' },
      { label: 'Venture Capital Inbound', value: '$28M Closed' },
      { label: 'Mobile Bounce Rate Drop', value: '-42%' }
    ],
    overview: 'Kinetic bridges autonomous robotics and spatial computer vision for enterprise logistics. Their technical breakthrough was profound, but their pitch was obscured by cluttered AI clichés and generic dark-mode tropes.',
    challenge: 'Communicate sophisticated computer vision algorithms to enterprise Fortune 500 COOs without resorting to glowing neon grids or generic AI assistant tropes.',
    solution: 'Neonency designed a pristine off-white editorial interface featuring high-contrast mathematical typography, interactive real-time spatial canvas diagrams, and a clear problem-to-outcome storytelling structure.',
    accentColor: '#7B5AFF',
    layoutVariant: 'editorial-spread',
    mockupType: 'spatial-tech'
  },
  {
    id: 'monolith-capital',
    title: 'MONOLITH Design Capital',
    client: 'Monolith Partners London & NY',
    category: 'Redesign',
    year: '2025',
    timeline: '5 Weeks',
    deliverables: ['Complete Website Redesign', 'Portfolio CMS Structure', 'Partner Essay Engine', 'Brand Guidelines'],
    techStack: ['Custom Webflow', 'GSAP', 'TypeScript', 'Clean CMS'],
    excerpt: 'An austere, high-typography digital journal and portfolio for an early-stage venture fund investing exclusively in design-led founders.',
    headline: 'ELEVATING VENTURE NARRATIVE THROUGH EDITORIAL PURITY',
    metrics: [
      { label: 'Founder Pitch Submissions', value: '+160%' },
      { label: 'Press & Media Mentions', value: '18 Features' },
      { label: 'Page Load Speed', value: '0.6s' }
    ],
    overview: 'Monolith is an investment fund backing design-first technical founders. They needed a digital home that reflected the aesthetic standard they demand from their portfolio companies.',
    challenge: 'Most VC websites look identical: blue buttons, generic team photos, and endless lists of logos. Monolith required a bold statement of design convictions.',
    solution: 'We developed an editorial journal format with generous white space, bespoke typography, and an interactive portfolio archive where investments are categorized by design impact rather than financial metrics.',
    accentColor: '#111111',
    layoutVariant: 'compact-showcase',
    mockupType: 'venture-capital'
  },
  {
    id: 'solis-acoustics',
    title: 'SOLIS Acoustic Systems',
    client: 'Solis Sound Copenhagen',
    category: 'Web Design',
    year: '2025',
    timeline: '7 Weeks',
    deliverables: ['Interactive Soundscape Landing', 'E-commerce Architecture', 'Sound Frequency Visualizer', 'Design System'],
    techStack: ['React', 'Tailwind', 'Web Audio API', 'Shopify Storefront'],
    excerpt: 'Nordic minimalist acoustic hardware showcase celebrating analog warmth, architectural timber, and acoustic physics.',
    headline: 'TRANSLATING ANALOG ACOUSTIC MASTERY INTO TACTILE DIGITAL FORM',
    metrics: [
      { label: 'Global Pre-orders', value: '4,200 Units' },
      { label: 'Design Award Honors', value: 'Awwwards SOTD Nominee' },
      { label: 'Email Waitlist Signup', value: '24.8% Rate' }
    ],
    overview: 'Solis crafts high-fidelity active acoustic monitors milled from solid Nordic oak and aluminum. They needed an international launch website to debut their flagship speaker system.',
    challenge: 'How do you let customers feel acoustic fidelity through a flat computer screen? The digital experience needed to convey the resonance, material weight, and engineering purity of the speakers.',
    solution: 'We engineered an interactive audio frequency visualizer, tactile dial controls that respond to scroll velocity, and an expansive architectural layout with studio-lit photographic crops.',
    accentColor: '#7B5AFF',
    layoutVariant: 'hero-split',
    mockupType: 'sound-hardware'
  }
];
