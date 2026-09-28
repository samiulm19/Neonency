export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Web Design' | 'Development' | 'E-commerce' | 'Redesign' | 'Branding';
  year: string;
  timeline: string;
  deliverables: string[];
  techStack: string[];
  excerpt: string;
  headline: string;
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  accentColor: string;
  layoutVariant: 'hero-split' | 'asymmetric-large' | 'editorial-spread' | 'compact-showcase';
  mockupType: 'architecture' | 'luxury-fashion' | 'spatial-tech' | 'venture-capital' | 'sound-hardware';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  idealFor: string;
  averageTimeline: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  impactMetric: string;
}
