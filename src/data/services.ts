import { ServiceItem, ProcessStep } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'Web Design & UI/UX',
    slug: 'web-design',
    tagline: 'Art-directed digital architecture tailored for distinction.',
    description: 'We craft high-conviction visual systems, bespoke design tokens, and fluid user experiences that distinguish premier brands from generic templates. Every pixel is intentional, typographic, and conversion-optimized.',
    deliverables: [
      'Interactive Figma prototypes',
      'Art direction & moodboards',
      'Custom typography hierarchy',
      'Mobile-first responsive systems',
      'Micro-interaction design',
      'Design tokens & component library'
    ],
    technologies: ['Figma', 'Principle', 'Design Systems', 'Adaptive Grids'],
    idealFor: 'High-growth startups, luxury brands, and businesses ready for an authoritative digital presence.',
    averageTimeline: '3–6 Weeks'
  },
  {
    id: 'website-development',
    number: '02',
    title: 'Website Development',
    slug: 'development',
    tagline: 'Engineering speed, pristine clean code, and zero technical debt.',
    description: 'We translate complex designs into flawless, responsive, and blazing-fast web builds. Whether on Webflow, Framer, WordPress, or custom React/Next.js architectures, we build for longevity and effortless editor workflows.',
    deliverables: [
      'Pixel-perfect code translation',
      'Sub-second page loading speed',
      'Semantic HTML5 & WCAG AA accessibility',
      'Full CMS setup for client autonomy',
      'Fluid GSAP & CSS scroll animations',
      'Lighthouse 95+ performance scores'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'GSAP', 'Motion'],
    idealFor: 'Companies demanding high-performance digital builds without bloated dependencies.',
    averageTimeline: '4–8 Weeks'
  },
  {
    id: 'website-redesign',
    number: '03',
    title: 'Website Redesign',
    slug: 'redesign',
    tagline: 'Transform outdated digital baggage into an industry-leading flagship.',
    description: 'If your existing website feels dated, fails to convert, or restricts your team from publishing new ideas, we strip away the noise. We modernize your visual language, restructure your funnel, and dramatically accelerate speed.',
    deliverables: [
      'Comprehensive UX & conversion audit',
      'SEO & link equity preservation map',
      'Information architecture overhaul',
      'Legacy content & asset migration',
      'Performance speed reconstruction',
      'A/B tested conversion funnels'
    ],
    technologies: ['Webflow', 'WordPress', 'Framer', 'Custom Stack'],
    idealFor: 'Established brands outgrowing legacy websites built years ago.',
    averageTimeline: '4–7 Weeks'
  },
  {
    id: 'ecommerce',
    number: '04',
    title: 'E-Commerce Systems',
    slug: 'ecommerce',
    tagline: 'High-converting flagship stores with editorial luxury presence.',
    description: 'We design and engineer bespoke Shopify and custom commerce storefronts that elevate perceived brand value while maximizing average order value, cart velocity, and international currency flexibility.',
    deliverables: [
      'Shopify Plus custom theme engineering',
      'Headless commerce architecture',
      'High-conversion checkout & 1-click buy',
      'Global multi-currency & language localization',
      'ERP & inventory system sync',
      'Cart drawer up-sell flows'
    ],
    technologies: ['Shopify Plus', 'Liquid', 'Hydrogen', 'Next.js', 'Stripe'],
    idealFor: 'DTC, fashion, lifestyle, and high-ticket hardware brands seeking editorial commerce.',
    averageTimeline: '6–10 Weeks'
  },
  {
    id: 'digital-branding',
    number: '05',
    title: 'Digital Branding & Systems',
    slug: 'branding',
    tagline: 'Identity systems engineered specifically for digital environments.',
    description: 'Brands in 2026 live on screens. We develop sharp typographic identities, motion signatures, color palettes, and digital design languages that look extraordinary at 16px and on a 32-inch 4K studio display.',
    deliverables: [
      'Digital brand identity guidelines',
      'Typographic pairings & licensing guidance',
      'Color systems & dark/light palettes',
      'Motion guidelines & logo animations',
      'Digital asset kits & social templates',
      'Figma design system foundation'
    ],
    technologies: ['Vector systems', 'Motion logos', 'Tokens', 'Brand Books'],
    idealFor: 'Founders launching new ventures or repositioning for institutional scale.',
    averageTimeline: '3–5 Weeks'
  },
  {
    id: 'white-label',
    number: '06',
    title: 'White-Label Agency Development',
    slug: 'white-label',
    tagline: 'Your client. Your brand. Our flawless, invisible build.',
    description: 'We act as the trusted technical execution partner for top-tier creative agencies, marketing studios, and design consultancies. Strict non-disclosure agreements, transparent sprint pricing, and direct Slack integration.',
    deliverables: [
      '100% white-label guarantee with strict NDA',
      'Figma-to-Webflow / Framer / Shopify sprints',
      'Dedicated lead developer per engagement',
      'Direct Slack Connect channel integration',
      'Rigorous cross-browser QA & device testing',
      'Client CMS handover recordings'
    ],
    technologies: ['Webflow Partner', 'Framer Expert', 'Shopify Plus', 'WordPress'],
    idealFor: 'Creative agencies seeking reliable, award-level development capacity without hiring overhead.',
    averageTimeline: 'Flexible Sprint Retainers'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Deep business audit & audience telemetry',
    description: 'We strip away assumptions. Through stakeholder workshops, competitive analysis, and audience research, we uncover the exact emotional triggers and commercial goals of your digital flagship.',
    deliverables: ['Audit Findings Report', 'Competitor Landscape Map', 'Scope & Technical Architecture', 'Timeline & Milestones'],
    duration: 'Week 1'
  },
  {
    number: '02',
    title: 'Strategy',
    subtitle: 'Define the structure, positioning and digital direction',
    description: 'We architect the narrative flow, wireframe core screen user journeys, and establish the content strategy before designing a single decorative shape. Clarity precedes beauty.',
    deliverables: ['Interactive Wireframes', 'Information Architecture', 'Content Outline & Copy Framework', 'Technical Stack Spec'],
    duration: 'Week 2'
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'Create the visual system and user experience',
    description: 'We establish high-character typography, art direction, layout grids, and interactive prototypes. You test real motion and responsive states before code begins.',
    deliverables: ['High-Fidelity Figma Artboards', 'Interactive Micro-prototypes', 'Design Tokens & UI Kit', 'Client Review & Signoff'],
    duration: 'Weeks 3–4'
  },
  {
    number: '04',
    title: 'Build',
    subtitle: 'Develop the experience with clean, scalable technology',
    description: 'We write lean, semantic, performant code. Whether custom React, Webflow, Framer, or Shopify, your website is engineered with strict type safety, zero bloat, and sub-second load times.',
    deliverables: ['Staging Environment Deployment', 'CMS Dynamic Collection Setup', 'Scroll & Interaction Triggers', 'Custom API Integrations'],
    duration: 'Weeks 4–6'
  },
  {
    number: '05',
    title: 'Launch',
    subtitle: 'Rigorous multi-device QA, optimize and launch',
    description: 'We test across 30+ physical screen sizes, validate WCAG AA accessibility, verify 301 redirects, test forms, and configure caching for maximum security and global CDN acceleration.',
    deliverables: ['Full Cross-Browser & Mobile QA', 'Lighthouse 95+ Certification', 'SEO Schema & Meta Verification', 'Domain Go-Live & DNS Config'],
    duration: 'Week 7'
  },
  {
    number: '06',
    title: 'Grow',
    subtitle: 'Continue improving the digital experience',
    description: 'Launch is day one. We support your internal team with video CMS guides, monthly optimization sprints, A/B conversion iterations, and feature expansion as your business scales.',
    deliverables: ['Custom CMS Video Walkthroughs', 'Monthly Performance Checkups', 'Conversion Rate Optimization', 'Dedicated Priority SLA'],
    duration: 'Ongoing'
  }
];
