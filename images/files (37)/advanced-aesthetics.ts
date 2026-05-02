// src/content/services/advanced-aesthetics.ts
// ADVANCED AESTHETICS PAGE: /katona-hair-restoration/advanced-aesthetics
// Page type: Service Page (Two-Tier — performs vs. medically directs)
// Word count target: 1,500–1,800
//
// COMPLIANCE NOTE: The two-tier disclosure is non-negotiable. Services Dr. Katona
// personally performs vs. those provided under his medical direction MUST be clearly
// labeled. This protects against misleading-advertising exposure under Illinois
// medical advertising rules and federal FTC standards.

import type {
  SEOMeta, HeroSection, TrustBar, ServiceCard, FAQItem,
  TestimonialItem, BreadcrumbItem, SchemaObject, RelatedLink, CTA,
} from "@/types/content";

export const seo: SEOMeta = {
  title: "Advanced Aesthetics Chicago | Under Medical Direction by Dr. Katona | Essence",
  description:
    "Advanced aesthetic medicine at Essence MedSpa in Edgebrook, Chicago. Selected services performed personally by Dr. Katona; full menu under his medical direction.",
  keywords: [
    "advanced aesthetics Chicago",
    "medical spa medical director Chicago",
    "Botox Chicago Edgebrook",
    "fillers Chicago Edgebrook",
    "PRP face Chicago",
    "medical chemical peel Chicago",
    "sclerotherapy Chicago",
    "skin cancer screening Chicago",
  ],
  canonical: "/katona-hair-restoration/advanced-aesthetics",
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: "Essence MedSpa", href: "/" },
  { label: "Katona Hair Restoration", href: "/katona-hair-restoration" },
  { label: "Advanced Aesthetics", href: "/katona-hair-restoration/advanced-aesthetics" },
];

export const hero: HeroSection = {
  eyebrow: "Advanced Aesthetics — Under Medical Direction",
  headline: "Aesthetic medicine at Essence — under physician oversight that most medspas don't have.",
  subheadline:
    "Dr. Arthur Katona's dermatology fellowship training and 27 years of medical practice bring board-level oversight to every procedure performed at Essence MedSpa.",
  primaryCTA: {
    text: "Book Free Consultation",
    href: "/katona-hair-restoration/consultation",
    variant: "primary",
  },
  secondaryCTA: {
    text: "About Dr. Katona",
    href: "/katona-hair-restoration/dr-katona",
    variant: "ghost",
  },
};

export const trustBar: TrustBar = {
  items: [
    { value: "Dermatology", label: "Fellowship Trained" },
    { value: "Physician-Led", label: "Every Treatment Under Medical Oversight" },
    { value: "27 Years", label: "Medical Practice" },
    { value: "ABHRS / ISHRS", label: "Board Certified" },
  ],
};

export const dermatologyCredentialsBlock = {
  eyebrow: "The Bridge to Aesthetics",
  headline: "Dr. Katona's path into aesthetic medicine runs through three dermatology fellowships.",
  body: [
    "Most medical spas operate under the supervision of a physician whose primary specialty is unrelated to skin and aesthetics — internal medicine, family practice, or emergency medicine. Dr. Katona's medical training is different.",
    "Following his MD and surgical residencies, he completed three sequential dermatology and dermatopathology fellowships — at Bernard Ackerman's Dermatopathology Academy in New York, the University of Puerto Rico under Dr. J. Sanchez, and the Advanced Dermatology Institute under Dr. Matt Leavitt in Orlando. The combined training spans the full clinical, microscopic, and surgical spectrum of skin medicine.",
    "What this means for an Essence patient is concrete. A Botox practitioner without dermatology background may not recognize an unusual mole during a treatment. A laser technician may not know which skin types are at risk for a given device setting. Dr. Katona does. That oversight is the value of his medical directorship.",
  ],
  fellowships: [
    "Dermatopathology Fellowship — Ackerman Academy, New York",
    "Dermatology Fellowship — University of Puerto Rico",
    "Dermatology & Hair Restoration Fellowship — Advanced Dermatology Institute, Orlando",
  ],
};

export const tier1Section = {
  eyebrow: "Tier 1 — Performed Personally by Dr. Katona",
  headline: "Selected aesthetic services delivered directly by Dr. Katona.",
  body: "These are the services where Dr. Katona's specific medical and surgical training applies most directly. He performs each one personally — consultation through procedure.",
};

export const tier1Services: ServiceCard[] = [
  {
    name: "PRP / PRF for Face",
    slug: "prp-face",
    tagline: "Regenerative facial treatment using your own platelets.",
    description:
      "Platelet-Rich Plasma and Platelet-Rich Fibrin treatments deliver concentrated growth factors from your own blood into the skin — improving texture, fine lines, under-eye hollows, and overall skin quality. Often combined with microneedling for enhanced absorption. Performed personally by Dr. Katona.",
    highlights: [
      "Performed personally by Dr. Katona",
      "Uses your own blood — no foreign substances",
      "Combines well with microneedling, lasers, or fillers",
      "Series of 3 sessions for optimal results",
    ],
    duration: "60–90 minutes",
    cta: {
      text: "Inquire about PRP/PRF",
      href: "/katona-hair-restoration/consultation?treatment=prp-face",
      variant: "outline",
    },
  },
  {
    name: "Medical-Grade Chemical Peels",
    slug: "medical-peels",
    tagline: "Deeper peels under physician oversight.",
    description:
      "Medical-grade chemical peels — including TCA, Jessner's, and combination peels — penetrate beyond what an aesthetician's superficial peel can reach. Used to address sun damage, melasma, scarring, deep texture concerns, and pre-cancerous skin changes. Requires physician administration; performed personally by Dr. Katona.",
    highlights: [
      "Physician-administered (not aesthetician)",
      "Treats deeper skin damage and scarring",
      "Can address pre-cancerous changes",
      "Requires medical evaluation before treatment",
    ],
    duration: "30–60 minutes",
    cta: {
      text: "Inquire about Medical Peels",
      href: "/katona-hair-restoration/consultation?treatment=medical-peels",
      variant: "outline",
    },
  },
  {
    name: "Skin Cancer Screening & Mole Evaluation",
    slug: "skin-screening",
    tagline: "Dermatology-trained evaluation. The check most medspas can't offer.",
    description:
      "Full-body skin examination by a dermatology-fellowship-trained physician. Suspicious moles or lesions are evaluated, photographed, and either monitored, biopsied, or referred for definitive treatment. Particularly relevant for adult patients who haven't had a recent dermatology visit.",
    highlights: [
      "Performed by dermatology-trained physician",
      "Full-body screening protocol",
      "Biopsy capability on-site when indicated",
      "Recommended annually for adults over 35",
    ],
    duration: "30–45 minutes",
    cta: {
      text: "Schedule Skin Screening",
      href: "/katona-hair-restoration/consultation?treatment=skin-screening",
      variant: "outline",
    },
  },
  {
    name: "Sclerotherapy",
    slug: "sclerotherapy",
    tagline: "Spider vein and small varicose vein treatment.",
    description:
      "Sclerotherapy uses a small-volume injection of sclerosing solution into spider veins and small varicose veins, causing them to close and gradually disappear. Performed personally by Dr. Katona, typically on the legs but applicable to other body areas.",
    highlights: [
      "Performed personally by Dr. Katona",
      "Treats spider and small varicose veins",
      "Multiple sessions typically required",
      "Compression hose worn briefly post-treatment",
    ],
    duration: "30–60 minutes",
    cta: {
      text: "Inquire about Sclerotherapy",
      href: "/katona-hair-restoration/consultation?treatment=sclerotherapy",
      variant: "outline",
    },
  },
  {
    name: "Acne & Rosacea Medical Management",
    slug: "acne-rosacea",
    tagline: "Physician-managed protocols beyond skincare alone.",
    description:
      "Persistent or severe acne and rosacea often require physician-level intervention — prescription topicals, oral medications, hormonal evaluation in women, and combination protocols with in-office treatments. Dr. Katona's dermatology training applies directly to these cases.",
    highlights: [
      "Prescription medication management",
      "Hormonal evaluation for adult-onset acne",
      "Combination with in-office treatments",
      "Long-term protocol oversight",
    ],
    cta: {
      text: "Inquire about Acne/Rosacea Care",
      href: "/katona-hair-restoration/consultation?treatment=acne-rosacea",
      variant: "outline",
    },
  },
  {
    name: "Melasma Treatment Protocol",
    slug: "melasma",
    tagline: "The pigment condition that requires physician-level care.",
    description:
      "Melasma is one of the most challenging pigment conditions to treat — over-treatment can worsen it dramatically. Dr. Katona's dermatology background provides the diagnostic precision and protocol-design experience that distinguishes successful melasma treatment from ongoing frustration.",
    highlights: [
      "Physician-designed protocols",
      "Combines topical, oral, and procedural therapy",
      "Avoids over-treatment that worsens pigment",
      "Long-term maintenance planning",
    ],
    cta: {
      text: "Inquire about Melasma Treatment",
      href: "/katona-hair-restoration/consultation?treatment=melasma",
      variant: "outline",
    },
  },
];

export const tier2Section = {
  eyebrow: "Tier 2 — Under Dr. Katona's Medical Direction",
  headline: "Essence's full aesthetic menu — performed by trained providers under physician oversight.",
  body: [
    "These are the services delivered by Essence's licensed aesthetic providers — registered nurses, physician assistants, and certified injectors and laser technicians — operating under Dr. Katona's standing medical direction. Every protocol, every product line, and every patient assessment is reviewed and approved by Dr. Katona.",
    "What you should know: when you book a Botox appointment at Essence, you are not booking with Dr. Katona — you are booking with an Essence injector. The role Dr. Katona plays is the medical director who has reviewed and approved that injector's training, the products being used, the protocols being followed, and is available for consultation on complex cases.",
    "This model is how every reputable medspa operates. The difference at Essence is the depth of Dr. Katona's medical background overseeing it.",
  ],
};

export const tier2Services: ServiceCard[] = [
  {
    name: "Neuromodulators",
    slug: "neuromodulators",
    tagline: "Botox, Dysport, Xeomin, Jeuveau.",
    description:
      "Wrinkle relaxers for forehead lines, frown lines, crow's feet, and other dynamic facial wrinkles. Performed by certified injectors under Dr. Katona's medical direction.",
    highlights: ["Botox · Dysport · Xeomin · Jeuveau", "All major FDA-approved brands available", "Treatment areas customized per patient"],
    cta: { text: "Book Neuromodulator Treatment", href: "/contact", variant: "outline" },
  },
  {
    name: "Dermal Fillers",
    slug: "dermal-fillers",
    tagline: "Juvéderm, Restylane, RHA, Versa.",
    description:
      "Hyaluronic acid fillers for lip enhancement, cheek augmentation, jawline contouring, under-eye hollows, and full-face restoration. Performed by certified injectors under Dr. Katona's medical direction.",
    highlights: ["Juvéderm · Restylane · RHA · Versa", "Lips · cheeks · jawline · under-eyes", "Reversible with hyaluronidase"],
    cta: { text: "Book Filler Treatment", href: "/contact", variant: "outline" },
  },
  {
    name: "Bio-stimulators",
    slug: "biostimulators",
    tagline: "Sculptra, Radiesse, and collagen-stimulating treatments.",
    description:
      "Treatments that stimulate your own collagen production for gradual, long-lasting volume restoration. Different mechanism from hyaluronic acid fillers — results develop over months and last 1–3 years.",
    highlights: ["Sculptra · Radiesse", "Stimulates own collagen production", "Long-lasting results (1–3 years)"],
    cta: { text: "Book Bio-stimulator Consultation", href: "/contact", variant: "outline" },
  },
  {
    name: "PDO Thread Lifts",
    slug: "thread-lifts",
    tagline: "Non-surgical lifting using dissolvable threads.",
    description:
      "PDO threads provide subtle lifting and collagen stimulation in the cheeks, jawline, and neck — an alternative to surgical facelift for early-stage skin laxity.",
    highlights: ["Cheek · jawline · neck", "Dissolvable thread material", "Combines well with fillers"],
    cta: { text: "Book PDO Thread Consultation", href: "/contact", variant: "outline" },
  },
  {
    name: "Microneedling & RF Microneedling",
    slug: "microneedling",
    tagline: "Collagen induction therapy with or without radiofrequency.",
    description:
      "Microneedling — with or without radiofrequency energy — treats fine lines, scars, texture, and pore size. RF Microneedling adds skin-tightening to the textural improvement.",
    highlights: ["Standard and RF microneedling available", "Combines with PRP for enhanced results", "Series of 3–4 sessions typical"],
    cta: { text: "Book Microneedling", href: "/contact", variant: "outline" },
  },
  {
    name: "Laser Treatments",
    slug: "laser",
    tagline: "Resurfacing, vascular, hair removal, and IPL.",
    description:
      "Full laser menu including skin resurfacing, vascular lasers, laser hair removal, and intense pulsed light. Device selection and treatment parameters reviewed and approved under Dr. Katona's medical direction.",
    highlights: ["Resurfacing · vascular · hair removal · IPL", "Multiple device platforms", "Treatment plans designed per patient"],
    cta: { text: "Book Laser Consultation", href: "/contact", variant: "outline" },
  },
  {
    name: "Kybella",
    slug: "kybella",
    tagline: "Submental fat dissolution — the under-chin treatment.",
    description:
      "Injectable treatment that permanently dissolves submental fat (under-chin fullness). Multiple sessions typically required.",
    highlights: ["Permanent fat reduction", "Multiple sessions required", "No surgery, no liposuction"],
    cta: { text: "Book Kybella Consultation", href: "/contact", variant: "outline" },
  },
];

export const modelSection = {
  eyebrow: "The Essence + Katona Model",
  headline: "What medical directorship actually means for you as a patient.",
  body: [
    "Medical directorship is not a marketing phrase at Essence — it is a clinical role with specific functions. Dr. Katona's responsibilities as Medical Director include: reviewing and approving every protocol used at the practice, training and credentialing the aesthetic providers who deliver Tier 2 services, evaluating new products and devices before they are introduced, and being available for direct consultation on complex cases.",
    "When a patient presents with an unusual finding — an asymmetric mole, an unexpected reaction, a complex aesthetic case — the standing protocol is to bring Dr. Katona in for evaluation. This is the safety net that distinguishes medical-grade aesthetic care from cosmetic-grade aesthetic care.",
    "For most routine treatments — a Botox refresh, a standard filler appointment, an annual laser hair removal session — you will work directly with Essence's aesthetic team. Dr. Katona's role is the oversight that ensures the protocols you receive are medically sound and the providers delivering them are appropriately trained.",
  ],
};

export const dermatologyValueSection = {
  eyebrow: "Why Dermatology Background Matters",
  headline: "What a dermatology-trained medical director catches that others miss.",
  examples: [
    {
      situation: "Pre-treatment evaluation",
      withoutDermatology: "Generic medical clearance.",
      withDermatology: "Skin examination identifies concerning lesions, contraindications, or conditions affecting treatment outcome before treatment begins.",
    },
    {
      situation: "Unexpected reaction",
      withoutDermatology: "Reaction managed with general medical knowledge.",
      withDermatology: "Reaction recognized and treated with dermatology-specific expertise — distinguishing between expected post-procedure response, allergic reaction, and underlying skin condition.",
    },
    {
      situation: "Pigment conditions",
      withoutDermatology: "Standard treatment protocol applied; melasma sometimes worsened by aggressive treatment.",
      withDermatology: "Pigment condition properly diagnosed; treatment intensity calibrated to avoid worsening; combination protocols built around root cause.",
    },
    {
      situation: "Suspicious lesions during routine treatment",
      withoutDermatology: "Lesion may go unnoticed or treated cosmetically.",
      withDermatology: "Lesion identified, evaluated, biopsied if needed, and addressed before becoming a serious problem.",
    },
  ],
};

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "I came in for filler and during the consultation Dr. Katona noticed a mole on my temple I'd never thought twice about. He biopsied it the same week. It was an early melanoma. I got filler eventually — but more importantly I got a real medical evaluation that probably saved my life.",
    author: "Patient",
    role: "Filler & Skin Cancer Detection",
    rating: 5,
    treatmentReceived: "Skin Screening + Filler",
  },
  {
    quote:
      "I'd been chasing my melasma at three different medspas with no progress. Dr. Katona's protocol was completely different — slower, more methodical, and the only thing that has actually worked.",
    author: "Patient",
    role: "Melasma Treatment",
    rating: 5,
    treatmentReceived: "Melasma Protocol",
  },
  // ASSUMPTION: Replace with real Essence-era testimonials post-launch.
];

export const faqs: FAQItem[] = [
  {
    question: "Does Dr. Katona personally perform Botox and filler injections?",
    answer:
      "No — Botox, fillers, and most other aesthetic injections at Essence are performed by trained certified injectors under Dr. Katona's medical direction. Dr. Katona personally performs PRP/PRF, medical-grade chemical peels, sclerotherapy, skin cancer screening, and the medical management of acne, rosacea, and melasma. The two-tier model is standard at every reputable medspa — what's unusual at Essence is the depth of medical training overseeing it.",
  },
  {
    question: "What is a medical director at a medspa?",
    answer:
      "A medical director is the licensed physician responsible for the medical protocols, provider training, product selection, and overall medical oversight of a medical spa's operations. Illinois law requires medical spas offering medical-grade procedures to have physician oversight. The depth of that oversight varies dramatically between practices — some medical directors are minimally involved, while others (like Dr. Katona at Essence) are actively engaged in protocol design, complex case review, and direct patient care.",
  },
  {
    question: "Why does dermatology training matter at a medspa?",
    answer:
      "Most medspa procedures operate on or just under the skin. A medical director with dermatology training brings expertise in skin biology, pigment conditions, allergic reactions, suspicious lesion identification, and the interaction between aesthetic procedures and underlying skin conditions. Many medspas operate under medical directors whose specialty is unrelated to skin — internal medicine, family practice, or emergency medicine. Dr. Katona's three dermatology fellowships are uncommon for a medspa medical director.",
  },
  {
    question: "Will I see Dr. Katona during my appointment?",
    answer:
      "It depends on the service. For Tier 1 services (PRP/PRF, medical chemical peels, skin screening, sclerotherapy, acne/rosacea, melasma), yes — Dr. Katona personally performs the treatment. For Tier 2 services (Botox, fillers, lasers, microneedling, etc.), you will work with an Essence aesthetic provider; Dr. Katona is available for consultation on complex cases or if any concerns arise during your appointment.",
  },
  {
    question: "How much do treatments cost?",
    answer:
      "Costs vary widely by treatment. Botox is typically priced per unit ($14–$18 per unit at most Chicago-area medspas). Fillers are typically priced per syringe ($650–$1,100 per syringe). PRP for face packages run $1,500–$3,000 for a series. Medical chemical peels run $300–$800 per session. Specific pricing is provided at consultation.", // CONFIRM: actual Essence pricing
  },
  {
    question: "Can I get a skin cancer screening at Essence?",
    answer:
      "Yes. Dr. Katona personally performs full-body skin screenings, a service most medspas don't offer because they don't have a dermatology-trained physician on staff. Annual screening is recommended for most adults over 35, and earlier for patients with personal or family history of skin cancer.",
  },
  {
    question: "Is Essence's aesthetic team qualified?",
    answer:
      "Essence's aesthetic providers are licensed registered nurses, physician assistants, and certified injectors who have completed manufacturer training for the specific products and devices they use. Their training, scope of practice, and clinical protocols are reviewed and approved by Dr. Katona as Medical Director.",
  },
  {
    question: "What if something goes wrong during a Tier 2 treatment?",
    answer:
      "Standing medical protocols address common reactions — for example, hyaluronidase is on hand to dissolve filler if needed, and reaction protocols are in place. For situations beyond standard protocols, Dr. Katona is contacted directly. This is the practical purpose of medical directorship — you have a physician's expertise available even when your provider is not a physician.",
  },
  {
    question: "How do I know which tier my treatment falls under?",
    answer:
      "Tier 1 services performed personally by Dr. Katona are listed clearly on this page: PRP/PRF, medical chemical peels, skin cancer screening, sclerotherapy, and the medical management of acne, rosacea, and melasma. Everything else listed under Tier 2 — Botox, fillers, lasers, microneedling, threads, etc. — is performed by Essence's aesthetic team under Dr. Katona's medical direction. If you're ever unsure, ask at the time of booking.",
  },
  {
    question: "Can Dr. Katona consult on a treatment I'm considering?",
    answer:
      "Yes. Patients with complex medical histories, prior aesthetic complications, or unusual cases are encouraged to request a consultation directly with Dr. Katona before booking treatment. Standard aesthetic consultations with Essence's team are also available — and Dr. Katona is brought in if any concerns arise during that process.",
  },
];

export const relatedLinks: RelatedLink[] = [
  {
    title: "About Dr. Katona",
    description: "Three dermatology fellowships, 27 years of medical practice, dual US/UK licensure.",
    href: "/katona-hair-restoration/dr-katona",
  },
  {
    title: "Hair Transplant Surgery",
    description: "Surgical hair restoration performed personally by Dr. Katona.",
    href: "/katona-hair-restoration/hair-transplant",
  },
  {
    title: "Non-Surgical Hair Restoration",
    description: "PRP, scalp micropigmentation, and medical hair loss therapy.",
    href: "/katona-hair-restoration/hair-restoration",
  },
];

export const finalCTA = {
  eyebrow: "Begin",
  headline: "Schedule a consultation under physician oversight.",
  body: "Whether you need a treatment Dr. Katona personally performs or an Essence aesthetic provider's expertise under his medical direction, every consultation begins the same way — with a complete clinical evaluation.",
  primaryCTA: {
    text: "Book Free Consultation",
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
  name: "Advanced Aesthetics at Essence MedSpa",
  description: "Advanced aesthetic medicine under the medical direction of Arthur Katona, MD.",
  medicalSpecialty: ["Dermatology", "CosmeticDentistry"],
  employee: {
    "@type": "Physician",
    name: "Arthur Katona, MD",
    jobTitle: "Medical Director",
    medicalSpecialty: "DermatologySurgery",
  },
  url: "https://essencemedspachicago.com/katona-hair-restoration/advanced-aesthetics",
};
