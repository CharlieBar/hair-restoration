// src/content/pages/katona-hub.ts
// HUB PAGE: /katona-hair-restoration/
// Surgeon-led introduction to Dr. Katona + the three service pillars
// Page type: Hub (surgeon-led variant)
// Word count target: 800–1,200

import type {
  SEOMeta, HeroSection, TrustBar, ServiceCard, FAQItem,
  TestimonialItem, PressItem, BreadcrumbItem, SchemaObject, CTA,
} from "@/types/content";

export const seo: SEOMeta = {
  title: "Katona Hair Restoration at Essence MedSpa | Chicago, Edgebrook",
  description:
    "Dr. Arthur Katona, MD — pioneer of FUE since 1996, 20,000+ procedures, US/UK licensed. Now Medical Director at Essence MedSpa in Edgebrook, Chicago.",
  keywords: [
    "Dr. Arthur Katona",
    "Katona hair restoration Chicago",
    "hair transplant Chicago",
    "FUE surgeon Chicago",
    "Essence MedSpa medical director",
    "Edgebrook hair restoration",
  ],
  canonical: "/katona-hair-restoration",
  ogType: "website",
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: "Essence MedSpa", href: "/" },
  { label: "Katona Hair Restoration", href: "/katona-hair-restoration" },
];

export const hero: HeroSection = {
  eyebrow: "Now at Essence MedSpa, Edgebrook",
  headline: "Dr. Arthur Katona has performed over 20,000 hair restoration procedures. He has come home to Chicago.",
  subheadline:
    "A pioneer of the Follicular Unit Extraction technique since 1996. The only US/UK dual-licensed hair restoration surgeon. Now Medical Director at Essence MedSpa & Wellness Center.",
  primaryCTA: {
    text: "Book a Consultation with Dr. Katona",
    href: "/katona-hair-restoration/consultation",
    variant: "primary",
  },
  secondaryCTA: {
    text: "Read Dr. Katona's Story",
    href: "/katona-hair-restoration/dr-katona",
    variant: "ghost",
  },
  trustLine: "Featured in Chicago Tribune · ESPN · BBC · Fox Sports · USA Today",
};

export const trustBar: TrustBar = {
  items: [
    { value: "20,000+", label: "Procedures Performed" },
    { value: "27", label: "Years of Practice" },
    { value: "1996", label: "FUE Pioneer" },
    { value: "US + UK", label: "Dual Licensed" },
  ],
};

export const surgeonIntro = {
  eyebrow: "Medical Director",
  headline: "Why Essence is different now.",
  body: [
    "Most medical spas advertise board-certified providers. Few are led by a surgeon who trained the people other clinics call when their cases are complex.",
    "Dr. Katona was performing FUE hair restoration in 1996 — before most of his current peers had completed medical school. Over the past 27 years, he has built and led the largest hair restoration practices in the US, the UK, and continental Europe. He has trained hundreds of surgeons in the techniques that are now considered industry standard.",
    "He chose Essence MedSpa because it is the rare clinic that pairs concierge attention with the discipline of a surgical practice. One patient at a time. No assembly-line procedures. The same standard of care he has held for nearly three decades — now available to patients in Chicago.",
  ],
  cta: {
    text: "Read his full story",
    href: "/katona-hair-restoration/dr-katona",
    variant: "outline" as const,
  } satisfies CTA,
};

export const serviceCards: ServiceCard[] = [
  {
    name: "Hair Transplant",
    slug: "hair-transplant",
    tagline: "Permanent restoration through advanced surgical technique",
    description:
      "FUE, FUT, and hybrid hair transplant procedures. Beard, eyebrow, and facial hair restoration. Revision of failed transplants from other clinics. All procedures performed personally by Dr. Katona.",
    highlights: [
      "FUE Hair Transplant",
      "FUT (Strip) Hair Transplant",
      "FUE/FUT Hybrid",
      "Beard & Eyebrow Restoration",
      "Hair Transplant Repair & Revision",
    ],
    startingPrice: "From $6,000", // CONFIRM: pricing
    cta: {
      text: "Explore Hair Transplant",
      href: "/katona-hair-restoration/hair-transplant",
      variant: "primary",
    },
  },
  {
    name: "Hair Restoration",
    slug: "hair-restoration",
    tagline: "Non-surgical solutions to slow, stop, and reverse hair loss",
    description:
      "PRP, scalp micropigmentation, low-level light therapy, and physician-managed medical protocols. For early-stage hair loss, post-transplant maintenance, and patients who prefer non-surgical paths.",
    highlights: [
      "PRP for Hair (Platelet-Rich Plasma)",
      "Scalp Micropigmentation (SMP)",
      "Low-Level Light Therapy",
      "Medical Hair Loss Therapy",
      "ACell Regenerative Protocols",
    ],
    cta: {
      text: "Explore Hair Restoration",
      href: "/katona-hair-restoration/hair-restoration",
      variant: "primary",
    },
  },
  {
    name: "Advanced Aesthetics",
    slug: "advanced-aesthetics",
    tagline: "Aesthetic medicine under board-level medical direction",
    description:
      "Dr. Katona's dermatology fellowship training brings physician-level oversight to Essence's full advanced aesthetics menu. Selected services performed personally; the broader treatment menu delivered under his medical direction.",
    highlights: [
      "PRP / PRF for Face",
      "Medical-Grade Chemical Peels",
      "Skin Cancer Screening",
      "Sclerotherapy",
      "Neuromodulators & Fillers (under medical direction)",
    ],
    cta: {
      text: "Explore Advanced Aesthetics",
      href: "/katona-hair-restoration/advanced-aesthetics",
      variant: "primary",
    },
  },
];

export const storySection = {
  eyebrow: "27 Years. 20,000 Patients.",
  headline: "The difference experience makes is impossible to fake.",
  body: [
    "In 1996, when Dr. Katona began performing Follicular Unit Extraction, the technique was experimental. There were no certifications, no training programs, and no industry consensus on how it should be done. Dr. Katona helped create those things.",
    "He went on to direct the largest hair transplant clinic in the EU/UK/USA, founded the Global Hair Alliance UK in 2010, and trained many of the surgeons who now lead competing practices around the world. The International Society of Hair Restoration Surgery has nominated him for its highest honor — the Platinum Follicle Award — twice.",
    "What this means for a patient is simple: when something unexpected happens during a procedure, Dr. Katona has almost certainly seen it before. The techniques he uses today are the result of nearly three decades of refinement on real patients with real stakes — celebrities, athletes, and the everyday women and men who travel to him from around the world.",
  ],
  stats: [
    { value: "20,000+", label: "Surgical procedures completed" },
    { value: "1996", label: "First FUE procedure performed" },
    { value: "2x", label: "ISHRS Platinum Follicle Award nominee" },
    { value: "Founder", label: "Global Hair Alliance UK, 2010" },
  ],
};

export const press: PressItem[] = [
  { outlet: "Chicago Tribune" },
  { outlet: "USA Today" },
  { outlet: "ESPN" },
  { outlet: "Fox Sports" },
  { outlet: "BBC" },
  { outlet: "CBS Sports" },
  { outlet: "Modern Luxury" },
  { outlet: "The Rich Eisen Show" },
];

export const pressSection = {
  eyebrow: "Recognized by",
  headline: "Where Dr. Katona's work has been featured.",
  body: "Dr. Katona's hair restoration work has been profiled in national publications and broadcast media. His patients include actors, professional athletes from the NFL, NBA, and PGA tours, and high-profile executives — many of whom he treats under strict privacy protocols.",
};

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Dr. Katona and his staff are of the highest caliber of professionalism with the perfect blend of friendliness. I feel you need to really educate yourself before committing to these sorts of decisions and he put me at ease with both his knowledge and presence. Dr. Katona has my HIGHEST recommendation!",
    author: "Patient",
    role: "FUE Hair Transplant Patient",
    rating: 5,
    treatmentReceived: "FUE Hair Transplant",
  },
  {
    quote:
      "I researched for two years before deciding. The reason I chose Dr. Katona was simple — he had done more procedures than any other surgeon I interviewed by a factor of ten. The result speaks for itself. No one knows.",
    author: "Patient",
    role: "Hair Transplant Revision Patient",
    rating: 5,
    treatmentReceived: "Hair Transplant Repair",
  },
  // ASSUMPTION: Above quotes adapted from source bio. Replace with real Essence-specific testimonials post-launch.
];

export const faqs: FAQItem[] = [
  {
    question: "Who is Dr. Arthur Katona?",
    answer:
      "Dr. Arthur Katona is a board-certified hair restoration surgeon and a pioneer of the Follicular Unit Extraction (FUE) technique since 1996. He has performed over 20,000 hair restoration procedures across the United States and the United Kingdom and is the only hair restoration surgeon currently licensed to practice in both countries. He serves as Medical Director at Essence MedSpa & Wellness Center in Edgebrook, Chicago.",
  },
  {
    question: "Why is Dr. Katona now at Essence MedSpa?",
    answer:
      "Dr. Katona joined Essence MedSpa as Medical Director to bring concierge-level surgical hair restoration and physician-overseen aesthetic medicine to Chicago. The partnership combines Essence's premium clinical environment with Dr. Katona's nearly three decades of surgical experience.",
  },
  {
    question: "What services does Dr. Katona personally perform?",
    answer:
      "Dr. Katona personally performs all hair transplant surgeries — FUE, FUT, hybrid, beard, and eyebrow restoration. He also personally delivers selected advanced aesthetic procedures, including PRP/PRF treatments, medical-grade chemical peels, sclerotherapy, and skin cancer screening. The broader Essence aesthetics menu — neuromodulators, fillers, lasers — is provided by trained injectors and laser specialists under Dr. Katona's medical direction.",
  },
  {
    question: "How do I know if I'm a candidate for hair restoration?",
    answer:
      "The only reliable answer comes from a personal evaluation. Dr. Katona offers complimentary consultations during which he assesses the type and stage of hair loss, donor area density, and your goals. He will recommend a treatment path — surgical, non-surgical, or combination — based on what will produce the best long-term result for you specifically.",
  },
  {
    question: "What does a hair transplant cost at Essence?",
    answer:
      "Hair transplant pricing depends on the number of grafts required, which is determined by the extent of hair loss and your aesthetic goals. Procedures generally range from $6,000 to $15,000 per session. Some patients require a single session; others benefit from a staged approach across two or three sessions. Pricing is transparent — Dr. Katona provides a complete written quote at consultation with no hidden fees.",
  },
  {
    question: "Can I have a virtual consultation?",
    answer:
      "Yes. Dr. Katona offers FaceTime, Zoom, and WhatsApp consultations for patients traveling from outside Chicago or those who prefer to begin remotely. In-person consultations are also available at the Edgebrook location.",
  },
  {
    question: "Does Dr. Katona treat patients of all ethnicities?",
    answer:
      "Yes. Dr. Katona has particular expertise in hair restoration for African American and Afro-textured hair, as well as patients of Asian, Hispanic, and Middle Eastern descent. Different hair textures require different transplant techniques — angle, density, and graft selection all change. Decades of work across diverse patient populations inform his approach.",
  },
  {
    question: "What if I had a hair transplant elsewhere that I'm not happy with?",
    answer:
      "Hair transplant repair is one of Dr. Katona's specialties. He regularly corrects results from older procedures — outdated plug grafts, visible donor scars, unnatural hairlines — and from inexperienced clinics, including failed surgeries performed abroad. Most patients can be significantly improved; some can be completely revised.",
  },
];

export const finalCTA = {
  eyebrow: "Begin",
  headline: "Schedule a confidential consultation with Dr. Katona.",
  body: "Free. No obligation. Available in person at Essence MedSpa in Edgebrook, or remotely via FaceTime, Zoom, or WhatsApp.",
  primaryCTA: {
    text: "Book Consultation",
    href: "/katona-hair-restoration/consultation",
    variant: "primary",
  } satisfies CTA,
  secondaryCTA: {
    text: "Call (773) XXX-XXXX",
    href: "tel:+1773XXXXXXX",
    variant: "outline",
  } satisfies CTA,
};

export const schema: SchemaObject = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Katona Hair Restoration at Essence MedSpa",
  url: "https://essencemedspachicago.com/katona-hair-restoration",
  parentOrganization: {
    "@type": "MedicalBusiness",
    name: "Essence MedSpa & Wellness Center",
    url: "https://essencemedspachicago.com",
  },
  medicalSpecialty: ["DermatologySurgery", "PlasticSurgery"],
  employee: {
    "@type": "Physician",
    name: "Arthur Katona, MD",
    jobTitle: "Medical Director",
    medicalSpecialty: "DermatologySurgery",
    alumniOf: "Ross University School of Medicine",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "5418 W. Devon Avenue", // CONFIRM
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60646",
    addressCountry: "US",
  },
  areaServed: ["Chicago", "Edgebrook", "Jefferson Park", "Cook County", "Illinois"],
};
