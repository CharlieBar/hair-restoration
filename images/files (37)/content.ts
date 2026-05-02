// src/types/content.ts
// Content data contracts for the Katona Hair Restoration sub-brand
// All visible strings on the site flow through these types.

export interface SEOMeta {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  noIndex?: boolean;
}

export interface CTA {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "link";
  icon?: string;
  external?: boolean;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface Stat {
  value: string;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface HeroSection {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  body?: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
  badge?: string;
  image?: ImageAsset;
  stats?: Stat[];
  trustLine?: string;
}

export interface TrustBar {
  items: Array<{
    value: string;
    label: string;
    icon?: string;
  }>;
}

export interface ServiceCard {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon?: string;
  image?: ImageAsset;
  highlights?: string[];
  startingPrice?: string;
  duration?: string;
  cta: CTA;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration?: string;
  icon?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  location?: string;
  rating?: number;
  treatmentReceived?: string;
  date?: string;
  image?: ImageAsset;
}

export interface CredentialItem {
  category: string;
  items: string[];
}

export interface CareerMilestone {
  year: string;
  title: string;
  description: string;
  location?: string;
}

export interface PressItem {
  outlet: string;
  description?: string;
  logo?: ImageAsset;
}

export interface ComparisonRow {
  label: string;
  optionA: string;
  optionB: string;
}

export interface RelatedLink {
  title: string;
  description: string;
  href: string;
  image?: ImageAsset;
}

export interface SchemaObject {
  "@context": "https://schema.org";
  "@type": string;
  [key: string]: unknown;
}
