// src/content/team/dr-katona.ts
// SURGEON PROFILE: /katona-hair-restoration/dr-katona
// Page type: Team / Provider Page (extended depth for surgeon-tier profile)
// Word count target: 1,200–1,800

import type {
  SEOMeta, HeroSection, FAQItem, BreadcrumbItem, SchemaObject,
  CredentialItem, CareerMilestone, PressItem, Stat, CTA,
} from "@/types/content";

export const seo: SEOMeta = {
  title: "Dr. Arthur Katona, MD — Hair Restoration Surgeon | Essence MedSpa Chicago",
  description:
    "Dr. Arthur Katona has performed over 20,000 hair restoration procedures since 1996. Pioneer of FUE. Dual US/UK licensed. ABHRS Diplomate. ISHRS Fellow.",
  keywords: [
    "Dr. Arthur Katona",
    "Dr. Art Katona",
    "Katona hair surgeon",
    "FUE pioneer Chicago",
    "ABHRS hair surgeon",
    "ISHRS Fellow Chicago",
  ],
  canonical: "/katona-hair-restoration/dr-katona",
  ogType: "profile",
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: "Essence MedSpa", href: "/" },
  { label: "Katona Hair Restoration", href: "/katona-hair-restoration" },
  { label: "Dr. Arthur Katona", href: "/katona-hair-restoration/dr-katona" },
];

export const hero: HeroSection = {
  eyebrow: "Medical Director, Essence MedSpa & Wellness Center",
  headline: "Arthur Katona, MD",
  subheadline:
    "Hair restoration surgeon. Pioneer of the Follicular Unit Extraction technique since 1996. Diplomate of the American Board of Hair Restoration Surgeons. Fellow of the International Society of Hair Restoration Surgery.",
  primaryCTA: {
    text: "Book a Consultation",
    href: "/katona-hair-restoration/consultation",
    variant: "primary",
  },
  secondaryCTA: {
    text: "View Services",
    href: "/katona-hair-restoration",
    variant: "ghost",
  },
};

export const careerStats: Stat[] = [
  { value: "20,000+", label: "Procedures Performed" },
  { value: "27", label: "Years Practicing" },
  { value: "1996", label: "First FUE Procedure" },
  { value: "4", label: "Active Medical Licenses" },
  { value: "2x", label: "ISHRS Platinum Follicle Nominee" },
  { value: "Founder", label: "Global Hair Alliance UK" },
];

export const fueStorySection = {
  eyebrow: "1996",
  headline: "He helped invent the procedure that defined a generation of hair restoration.",
  body: [
    "When Dr. Katona performed his first Follicular Unit Extraction in 1996, the technique did not yet have an established name. There were no specialized instruments, no standardized training programs, and no industry consensus that the approach would work at scale. He was one of a small group of physicians who believed it would.",
    "Three decades later, FUE is the dominant method of hair transplantation worldwide. The reason is simple — when performed correctly, it leaves no linear scar, recovery is shorter than strip surgery, and results look indistinguishable from naturally growing hair. The reason it took the industry years to catch up is also simple — performing it correctly is harder than the alternatives. It requires manual extraction of follicular units one at a time, often thousands of them in a single procedure.",
    "Dr. Katona has now performed this procedure over 20,000 times. The pattern recognition that builds across that many cases — knowing how a follicle will behave before extraction, recognizing donor density variations, anticipating healing patterns — is the difference between a surgeon who can perform FUE and a surgeon who has mastered it.",
  ],
};

export const credentialsGrid: CredentialItem[] = [
  {
    category: "Board Certifications",
    items: [
      "Diplomate, American Board of Hair Restoration Surgeons (ABHRS) — recertified by examination",
      "Fellow, International Society of Hair Restoration Surgery (FISHRS) — voting member",
      "Voting member, American Board of Hair Research Society (2010–present)",
    ],
  },
  {
    category: "Active Medical Licenses",
    items: [
      "Illinois — since 2001",
      "Florida — since 1996",
      "Georgia — since 2023",
      "United Kingdom — General Medical Council, since 2010",
    ],
  },
  {
    category: "Professional Memberships",
    items: [
      "International Society of Hair Restoration Surgery (ISHRS) — since 2000",
      "American Medical Association (AMA)",
      "Florida Medical Association",
      "Founder, Global Hair Alliance UK (2010)",
    ],
  },
  {
    category: "Awards & Recognition",
    items: [
      "ISHRS Research Award for Wound Healing (2003)",
      "Platinum Follicle Award nominee, ISHRS (2016, 2018)",
      "AMA Physician's Recognition Award (2003–2006)",
      "American Academy of Cosmetic Surgery (2005)",
    ],
  },
];

export const educationTimeline: CareerMilestone[] = [
  {
    year: "1992–1996",
    title: "Doctor of Medicine",
    description: "Completed his MD degree, building the foundation for a career in hair restoration and dermatology.",
    location: "Ross University School of Medicine",
  },
  {
    year: "1996–1998",
    title: "Surgical Pathology Residency",
    description: "Two-year residency in surgical pathology, providing the diagnostic and microscopic foundation for follicular unit assessment.",
    location: "Jackson Memorial Hospital, Miami",
  },
  {
    year: "1998–1999",
    title: "General Surgery Residency",
    description: "Built the surgical skill base that hair restoration draws on — tissue handling, wound healing, sterile technique under pressure.",
    location: "Jackson Memorial Hospital, Miami",
  },
  {
    year: "1999–2000",
    title: "Dermatopathology Fellowship",
    description: "Trained under Dr. Bernard Ackerman, one of the most influential dermatopathologists of the 20th century.",
    location: "Ackerman Academy, New York, NY",
  },
  {
    year: "1999–2000",
    title: "Dermatology Fellowship",
    description: "Concentrated training in skin and follicular disorders.",
    location: "University of Puerto Rico — Dr. J. Sanchez",
  },
  {
    year: "2000–2001",
    title: "Hair Restoration Surgery Fellowship",
    description: "Specialized fellowship under Dr. Matt Leavitt at Advanced Dermatology — the formal training that complemented his earlier hands-on FUE work.",
    location: "Advanced Dermatology Institute, Orlando",
  },
];

export const careerTimeline: CareerMilestone[] = [
  {
    year: "1996",
    title: "Began performing FUE hair transplantation",
    description: "Among the first physicians worldwide to adopt the technique that would later become the global standard.",
  },
  {
    year: "2000–2010",
    title: "Medical Hair Restoration",
    description: "Established his US practice, building the case volume and technique refinement that would define his career.",
  },
  {
    year: "2010–2012",
    title: "Associate Medical Director, The Hospital Group, UK",
    description: "Director of Training and Staffing. Led clinic expansion across Birmingham and London — building the largest hair restoration network in the UK.",
    location: "Birmingham & London, UK",
  },
  {
    year: "2010",
    title: "Founded Global Hair Alliance UK",
    description: "Established the professional network connecting top hair restoration surgeons across the United Kingdom.",
  },
  {
    year: "2010–2016",
    title: "Medical Director, Premium Healthcare Solutions",
    description: "Led one of London's premier private healthcare hair restoration practices.",
    location: "London, UK",
  },
  {
    year: "2012–2013",
    title: "Medical Director, Vinci Hair Restoration & Kensington Chambers",
    description: "Concurrent medical directorships at two leading UK clinics.",
    location: "London, UK",
  },
  {
    year: "2013–2021",
    title: "Medical Director, RESTORE & Katona Hair Restoration",
    description: "Directed the largest hair transplant clinic operations in the EU/UK/USA, with locations in Atlanta, Oak Brook, Dallas, and London.",
    location: "Atlanta · Oak Brook · Dallas · London",
  },
  {
    year: "2024",
    title: "Medical Director, Essence MedSpa & Wellness Center",
    description: "Brings 27 years of surgical experience and concierge practice standards to Edgebrook, Chicago.",
    location: "Edgebrook, Chicago",
  },
];

export const notableCasesSection = {
  eyebrow: "Notable Cases",
  headline: "He has worked with the world's top hair surgeons on some of the most complex cases on record.",
  body: [
    "Dr. Katona's case roster includes celebrities, professional athletes, and high-profile executives — many treated under strict privacy and concierge protocols. He is regularly engaged for hair transplant revision work, including the correction of failed surgeries from clinics around the world.",
    "His expertise in challenging case categories — patients with limited donor hair, advanced Norwood-stage hair loss, scarring alopecia, and unsuccessful prior transplants — has earned him peer referrals from other hair restoration surgeons.",
  ],
  caseCategories: [
    {
      title: "Celebrity & Concierge Patients",
      description: "Actors, musicians, and public figures treated under strict privacy protocols. Results designed to be entirely undetectable.",
    },
    {
      title: "Professional Athletes",
      description: "Players from the NFL, NBA, and PGA tours seeking restoration that holds up under high-definition broadcast.",
    },
    {
      title: "Hair Transplant Revision",
      description: "Correction of older plug grafts, visible donor scars, and failed transplants from other surgeons — including failed Turkey and other surgical-tourism procedures.",
    },
    {
      title: "Diverse Hair Types",
      description: "Particular expertise with African American, Afro-textured, Asian, Hispanic, and Middle Eastern hair patterns and donor characteristics.",
    },
    {
      title: "Complex Donor Cases",
      description: "Patients told by other surgeons that they lacked sufficient donor area — successfully restored using FUE/FUT hybrid techniques.",
    },
  ],
};

export const press: PressItem[] = [
  { outlet: "Chicago Tribune" },
  { outlet: "USA Today" },
  { outlet: "Inc." },
  { outlet: "ESPN" },
  { outlet: "CBS Sports" },
  { outlet: "Fox Sports" },
  { outlet: "BBC" },
  { outlet: "The Rich Eisen Show" },
  { outlet: "Modern Luxury" },
  { outlet: "Talk Sport UK" },
  { outlet: "MDTV" },
  { outlet: "WGN — live hair transplant surgery, 2002" },
];

export const whyChicagoSection = {
  eyebrow: "Why Chicago. Why Now.",
  headline: "After more than two decades of building practices in London, Atlanta, and beyond, Dr. Katona is bringing his work home.",
  body: [
    "Dr. Katona's roots are in Chicago. He attended Walt Disney Magnet School on the city's North Side, then Loyola Academy in Wilmette before pursuing his medical training. His Illinois medical license has been active continuously since 2001.",
    "The decision to make Essence MedSpa his clinical home was deliberate. The Edgebrook neighborhood is precisely the kind of practice setting he prefers — discreet, accessible, and focused on individualized care rather than volume. The Essence team operates with the same standard he has held throughout his career: one patient at a time, no exceptions.",
    "For Chicago patients, the practical implication is significant. Until now, the city's most experienced hair restoration option required travel to Atlanta or London. That has changed.",
  ],
};

export const faqs: FAQItem[] = [
  {
    question: "How many hair transplants has Dr. Katona performed?",
    answer:
      "Over 20,000 procedures across the United States and the United Kingdom over a 27-year career. By industry standards this places him in an exceptionally small group — many board-certified hair restoration surgeons retire before reaching 10,000 procedures.",
  },
  {
    question: "Where did Dr. Katona train?",
    answer:
      "He earned his MD at Ross University School of Medicine, completed surgical pathology and general surgery residencies at Jackson Memorial Hospital in Miami, and pursued three fellowships — dermatopathology under Dr. Bernard Ackerman in New York, dermatology at the University of Puerto Rico, and hair restoration surgery under Dr. Matt Leavitt in Orlando.",
  },
  {
    question: "Is Dr. Katona board certified?",
    answer:
      "Yes. He is a Diplomate of the American Board of Hair Restoration Surgeons, recertified by examination, and a Fellow of the International Society of Hair Restoration Surgery (FISHRS). He is also a voting member of the American Board of Hair Research Society.",
  },
  {
    question: "Where is Dr. Katona licensed to practice?",
    answer:
      "He holds active medical licenses in Illinois, Florida, Georgia, and the United Kingdom (registered with the General Medical Council). He is the only hair restoration surgeon currently licensed to practice in both the US and the UK.",
  },
  {
    question: "Has Dr. Katona trained other hair surgeons?",
    answer:
      "Yes. As Medical Director of practices in the US and UK — including The Hospital Group, RESTORE, and Premium Healthcare Solutions — he has trained surgeons who now lead competing hair restoration clinics around the world. The International Society of Hair Restoration Surgery has formally recognized his contributions to surgical education.",
  },
  {
    question: "Does Dr. Katona accept new patients?",
    answer:
      "Yes. Essence MedSpa is now his primary clinical home. Consultations are available in person at the Edgebrook location and remotely via FaceTime, Zoom, or WhatsApp for patients traveling from outside Chicago.",
  },
  {
    question: "What does Dr. Katona personally perform vs. medically supervise?",
    answer:
      "Dr. Katona personally performs all hair transplant surgeries — FUE, FUT, hybrid, beard, and eyebrow procedures. He also personally delivers selected advanced aesthetics services that draw on his dermatology training, including PRP/PRF, medical chemical peels, sclerotherapy, and skin cancer screening. The broader Essence aesthetics menu (neuromodulators, fillers, lasers, microneedling) is performed by Essence's licensed aesthetic providers under his medical direction.",
  },
  {
    question: "What is Dr. Katona's approach to consultations?",
    answer:
      "He conducts consultations himself, not through a delegate or sales coordinator. The consultation includes a complete hair loss evaluation, donor area assessment, review of medical history, and a frank discussion of realistic outcomes. Many patients leave their first consultation with a recommendation against surgery — that is the point of an honest evaluation.",
  },
];

export const finalCTA = {
  eyebrow: "Begin",
  headline: "Speak with Dr. Katona directly.",
  body: "Free consultation. No pressure. Available in person at Essence MedSpa in Edgebrook, or remotely via FaceTime, Zoom, or WhatsApp.",
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
  "@type": "Physician",
  name: "Arthur Katona, MD",
  alternateName: ["Dr. Arthur Katona", "Dr. Art Katona"],
  jobTitle: "Medical Director, Hair Restoration Surgeon",
  medicalSpecialty: ["DermatologySurgery", "PlasticSurgery"],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Ross University School of Medicine" },
    { "@type": "CollegeOrUniversity", name: "University of Minnesota" },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Diplomate, American Board of Hair Restoration Surgeons (ABHRS)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Fellow, International Society of Hair Restoration Surgery (FISHRS)",
    },
  ],
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Essence MedSpa & Wellness Center",
    url: "https://essencemedspachicago.com",
  },
  url: "https://essencemedspachicago.com/katona-hair-restoration/dr-katona",
};
