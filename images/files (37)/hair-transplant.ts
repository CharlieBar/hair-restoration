// src/content/services/hair-transplant.ts
// SURGICAL PILLAR: /katona-hair-restoration/hair-transplant
// Page type: Service Page (Pillar level)
// Word count target: 1,800–2,200

import type {
  SEOMeta, HeroSection, TrustBar, ServiceCard, FAQItem,
  TestimonialItem, ProcessStep, BreadcrumbItem, SchemaObject,
  ComparisonRow, RelatedLink, CTA,
} from "@/types/content";

export const seo: SEOMeta = {
  title: "Hair Transplant Chicago | FUE & FUT by Dr. Katona | Essence MedSpa",
  description:
    "Hair transplant surgery in Chicago by Dr. Arthur Katona — 20,000+ procedures, FUE pioneer since 1996. FUE, FUT, hybrid, beard & eyebrow restoration. Edgebrook.",
  keywords: [
    "hair transplant Chicago",
    "FUE hair transplant Chicago",
    "FUT hair transplant Chicago",
    "Dr. Katona hair transplant",
    "beard transplant Chicago",
    "eyebrow restoration Chicago",
    "hair transplant repair Chicago",
    "best hair surgeon Chicago",
  ],
  canonical: "/katona-hair-restoration/hair-transplant",
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: "Essence MedSpa", href: "/" },
  { label: "Katona Hair Restoration", href: "/katona-hair-restoration" },
  { label: "Hair Transplant", href: "/katona-hair-restoration/hair-transplant" },
];

export const hero: HeroSection = {
  eyebrow: "Surgical Hair Restoration",
  headline: "20,000+ procedures. One surgeon. One patient at a time.",
  subheadline:
    "Hair transplant surgery in Chicago performed personally by Dr. Arthur Katona — pioneer of the FUE technique since 1996, the only hair restoration surgeon licensed in both the United States and the United Kingdom.",
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
  trustLine: "ABHRS Diplomate · ISHRS Fellow · US/UK Licensed",
};

export const trustBar: TrustBar = {
  items: [
    { value: "20,000+", label: "Procedures Performed" },
    { value: "27", label: "Years of Practice" },
    { value: "FUE", label: "Pioneer Since 1996" },
    { value: "1:1", label: "One Patient Per Day" },
  ],
};

export const overviewSection = {
  eyebrow: "Why Surgical Hair Restoration",
  headline: "When non-surgical options aren't enough — surgery is the permanent answer.",
  body: [
    "Hair transplant surgery moves your own healthy hair follicles from areas where they grow densely (usually the back and sides of the scalp) to areas where they have thinned or stopped growing. Because the relocated follicles retain their genetic resistance to DHT, they continue to grow naturally for the rest of your life.",
    "Performed correctly, modern hair transplant results are undetectable. Performed incorrectly, they are obvious for life. The single most important variable is the surgeon — specifically, the volume of cases they have personally performed and the artistry they bring to hairline design and graft placement.",
    "Dr. Katona has performed over 20,000 procedures. He helped pioneer the FUE technique in 1996 and has spent the past 27 years refining it. The Essence operating standard is one patient per day — never the assembly-line approach used by clinics that prioritize volume over outcomes.",
  ],
};

export const procedureCards: ServiceCard[] = [
  {
    name: "FUE Hair Transplant",
    slug: "fue",
    tagline: "The flagship procedure. No linear scar.",
    description:
      "Follicular Unit Extraction. Individual follicles are extracted one at a time from the donor area and transplanted to thinning regions. No strip incision, no stitches, no linear scar. Recovery is fast and the donor area looks normal within days.",
    highlights: [
      "No linear scar — donor area shows micro-dot scarring only",
      "4–8 hour procedure under local anesthesia",
      "Suitable for patients who wear short hairstyles",
      "Results visible at 3–6 months, final at 12 months",
    ],
    startingPrice: "From $6,000", // CONFIRM: pricing
    duration: "4–8 hours",
    cta: {
      text: "Inquire about FUE",
      href: "/katona-hair-restoration/consultation?procedure=fue",
      variant: "outline",
    },
  },
  {
    name: "FUT Hair Transplant",
    slug: "fut",
    tagline: "Strip technique. Higher graft yield in a single session.",
    description:
      "Follicular Unit Transplantation. A narrow strip of donor scalp is removed and the individual follicular units are dissected from it under microscope. Higher graft yield per session than FUE — preferred for patients with extensive hair loss who don't plan to wear short hairstyles. Closed with trichophytic technique to minimize scarring.",
    highlights: [
      "Higher graft volume in a single procedure",
      "Lower cost per graft than FUE",
      "Linear donor scar — concealed by surrounding hair",
      "Often preferred by women who don't want their head shaved",
    ],
    startingPrice: "From $6,000", // CONFIRM
    duration: "5–8 hours",
    cta: {
      text: "Inquire about FUT",
      href: "/katona-hair-restoration/consultation?procedure=fut",
      variant: "outline",
    },
  },
  {
    name: "FUE/FUT Hybrid",
    slug: "hybrid",
    tagline: "Maximum graft yield for advanced hair loss.",
    description:
      "For patients with extensive hair loss requiring exceptional graft volume in a single procedure, Dr. Katona combines FUE and FUT techniques in one session. Dr. Katona is among the few surgeons offering this hybrid approach — drawing on the scale of his prior practice operations.",
    highlights: [
      "Maximum graft yield in one surgical day",
      "Best for advanced Norwood-stage hair loss",
      "Optimizes use of available donor area",
      "Reduces total number of procedures needed",
    ],
    startingPrice: "From $10,000", // CONFIRM
    duration: "6–10 hours",
    cta: {
      text: "Inquire about Hybrid",
      href: "/katona-hair-restoration/consultation?procedure=hybrid",
      variant: "outline",
    },
  },
  {
    name: "Beard & Goatee Restoration",
    slug: "beard",
    tagline: "Fill in patchy beards. Cover scars.",
    description:
      "Beard hair transplantation uses FUE to relocate follicles from the scalp to the beard, mustache, or sideburn area. Used to fill patchy facial hair, build density on a sparse beard, or camouflage facial scars. Results blend with existing facial hair as it grows.",
    highlights: [
      "Fills patchy or sparse beard areas",
      "Covers facial scars or burn scars",
      "Permanent — transplanted hair grows for life",
      "Single 4–8 hour FUE session",
    ],
    startingPrice: "From $5,000", // CONFIRM
    duration: "4–8 hours",
    cta: {
      text: "Inquire about Beard Restoration",
      href: "/katona-hair-restoration/consultation?procedure=beard",
      variant: "outline",
    },
  },
  {
    name: "Eyebrow Restoration",
    slug: "eyebrow",
    tagline: "Restore over-plucked or damaged brows. Permanent solution.",
    description:
      "Eyebrow hair transplantation uses fine FUE grafts to restore eyebrows lost to over-plucking, trichotillomania, scarring, chemotherapy, or thyroid disease. Hair is selected from donor sites that match eyebrow texture as closely as possible and placed at the precise angles required for natural appearance.",
    highlights: [
      "Permanent restoration — no daily makeup",
      "Single morning or afternoon session",
      "Corrects partial or complete loss",
      "Suitable for women and men",
    ],
    startingPrice: "From $3,000", // CONFIRM
    duration: "3–5 hours",
    cta: {
      text: "Inquire about Eyebrow Restoration",
      href: "/katona-hair-restoration/consultation?procedure=eyebrow",
      variant: "outline",
    },
  },
  {
    name: "Hair Transplant Repair & Revision",
    slug: "repair",
    tagline: "Fix bad transplants. From plug grafts to failed Turkey procedures.",
    description:
      "Many patients arrive at Essence after a transplant elsewhere left them with unnatural results — visible plug grafts, obvious donor scars, hairlines that look implanted, or failed grafts that never grew. Dr. Katona specializes in revision work, drawing on the same techniques that produce his primary cases.",
    highlights: [
      "Plug graft camouflage and removal",
      "Donor scar repair via FUE into scar tissue",
      "Hairline softening and refinement",
      "Correction of failed surgical-tourism procedures",
    ],
    startingPrice: "From $2,000 (scar repair)", // CONFIRM
    duration: "Varies by case",
    cta: {
      text: "Inquire about Revision",
      href: "/katona-hair-restoration/consultation?procedure=repair",
      variant: "outline",
    },
  },
];

export const differenceSection = {
  eyebrow: "The Dr. Katona Difference",
  headline: "Most clinics run multiple surgeries per day. We run one.",
  body: [
    "The standard model in commercial hair transplant practices — and the universal model in surgical-tourism destinations — is to perform multiple procedures simultaneously. Surgeons rotate between rooms. Technicians do the bulk of extraction and placement. The doctor's name is on the website; the doctor's hands are on a small fraction of the procedure.",
    "Dr. Katona has rejected this model for the entirety of his 27-year career. At Essence, only one hair transplant patient is scheduled per surgical day. Dr. Katona personally performs the consultation, the planning, the donor extraction, the recipient site creation, and the final graft placement. The same hands begin and end the procedure.",
    "The result is what hair restoration is supposed to be — surgery done by a surgeon, not surgery managed by one.",
  ],
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "Dr. Katona conducts the consultation personally. He evaluates the type and stage of hair loss, donor area density, and your aesthetic goals — and provides an honest assessment of whether surgery is the right path.",
    duration: "60–90 minutes",
  },
  {
    step: "02",
    title: "Surgical Plan & Quote",
    description:
      "You receive a written surgical plan including the recommended technique, estimated graft count, expected outcome timeline, and complete pricing. No hidden fees. No high-pressure sales.",
    duration: "Same day or follow-up",
  },
  {
    step: "03",
    title: "Pre-Operative Preparation",
    description:
      "Detailed instructions for the days before surgery — medication adjustments, scalp preparation, what to eat, what to wear. We confirm your transportation and recovery support.",
    duration: "1–2 weeks before",
  },
  {
    step: "04",
    title: "Procedure Day",
    description:
      "You arrive in the morning. Local anesthesia is administered — most patients describe minimal discomfort. Dr. Katona personally performs donor extraction, recipient site creation, and graft placement. You can watch movies, read, or rest. Lunch is provided.",
    duration: "4–8 hours",
  },
  {
    step: "05",
    title: "Same-Day Discharge",
    description:
      "You leave the same day with detailed aftercare instructions. Most patients drive themselves home; some prefer to be picked up. Pain is typically minimal — over-the-counter medication is sufficient for most.",
    duration: "End of procedure day",
  },
  {
    step: "06",
    title: "Next-Day Follow-Up",
    description:
      "A check-in appointment the morning after surgery — Dr. Katona reviews healing, answers questions, and confirms aftercare. Out-of-town patients receive virtual follow-up.",
    duration: "Day 1 post-op",
  },
  {
    step: "07",
    title: "Growth & Long-Term Results",
    description:
      "Transplanted hair sheds within 2–3 weeks (this is normal). New growth begins around month 3. Significant density appears at 6 months. Final results visible at 12 months.",
    duration: "3–12 months",
  },
];

export const fueVsFutComparison = {
  eyebrow: "Choosing the Right Technique",
  headline: "FUE vs. FUT — what actually matters.",
  body: "Both techniques transplant the same biological material — your own follicular units. The differences are in extraction method, scarring, recovery, and which hairstyles you can wear afterward. Dr. Katona reviews both options with every candidate and recommends the technique that fits your specific donor area, hair loss pattern, and lifestyle.",
  rows: [
    { label: "Donor extraction", optionA: "Individual follicles, one at a time", optionB: "Single strip, follicles dissected after" },
    { label: "Donor scarring", optionA: "Tiny dot-pattern micro-scars", optionB: "Linear scar (concealable)" },
    { label: "Hairstyle compatibility", optionA: "Any length, including buzzed", optionB: "Hair must cover scar line" },
    { label: "Procedure length", optionA: "4–8 hours", optionB: "5–8 hours" },
    { label: "Graft yield per session", optionA: "Moderate", optionB: "Higher" },
    { label: "Recovery", optionA: "Fast — 5–7 days", optionB: "Moderate — 10–14 days" },
    { label: "Cost per graft", optionA: "Higher", optionB: "Lower" },
    { label: "Best for", optionA: "Short hairstyles, lower volume needs, women avoiding shaved heads", optionB: "High graft counts, advanced hair loss, patients wearing longer hair" },
  ] as ComparisonRow[],
  comparisonHeaders: { optionA: "FUE", optionB: "FUT" },
};

export const specialtyCasesSection = {
  eyebrow: "Specialty Expertise",
  headline: "Cases other clinics decline — Dr. Katona has built his career on.",
  cases: [
    {
      title: "African American & Afro-Textured Hair",
      description:
        "Curly and tightly-coiled hair requires modified FUE technique — different angles, different graft selection, and a deeper understanding of follicular geometry. Dr. Katona's expertise with African American patients includes some of the most publicly recognizable cases in the field.",
    },
    {
      title: "Female Hair Loss",
      description:
        "Female pattern hair loss is more diffuse than male pattern baldness, and most women prefer not to have their head shaved for surgery. FUT strip technique is often the better choice — Dr. Katona offers both, and uses trichophytic closure to minimize donor scarring.",
    },
    {
      title: "Traction Alopecia",
      description:
        "Hair loss along the hairline from years of tight braids, weaves, ponytails, or extensions. Dr. Katona's hairline restoration work for traction alopecia rebuilds the natural hairline without obvious transplant signatures.",
    },
    {
      title: "Limited Donor Area",
      description:
        "Patients told elsewhere that they don't have enough donor hair are often reassessed differently here. The combination of FUE/FUT hybrid technique and 27 years of donor optimization experience produces options that less experienced surgeons miss.",
    },
    {
      title: "Burn & Trauma Scars",
      description:
        "Hair restoration into scar tissue — from burns, surgical scars, or accidents. Requires specialized graft selection and incision technique. Dr. Katona has performed scar-area transplantation throughout his career.",
    },
  ],
};

export const pricingSection = {
  eyebrow: "Transparent Pricing",
  headline: "What a hair transplant costs at Essence.",
  body: [
    "Hair transplant pricing is determined primarily by the number of grafts your case requires. Procedures generally range from $6,000 to $15,000 per session. Beard restoration starts at $5,000; eyebrow restoration starts at $3,000; donor scar repair starts at $2,000.", // CONFIRM all pricing
    "Some patients require a single session. Others — typically those with more advanced hair loss — benefit from a staged approach across two or three sessions over time. Dr. Katona's consultation includes a complete written quote for the total recommended treatment plan, with no hidden fees and no high-pressure sales tactics.",
    "Hair restoration is generally not covered by insurance, with rare exceptions for hair loss caused by accident or medical condition. Financing options are available — ask during consultation.",
  ],
  pricePoints: [
    { range: "$6,000 – $15,000", description: "Standard FUE or FUT hair transplant per session" },
    { range: "From $5,000", description: "Beard, mustache, or goatee restoration" },
    { range: "From $3,000", description: "Eyebrow restoration" },
    { range: "From $2,000", description: "Donor scar repair only" },
    { range: "From $10,000", description: "FUE/FUT hybrid for advanced hair loss" },
  ],
};

export const recoveryTimeline = {
  eyebrow: "Recovery Expectations",
  headline: "What to expect, week by week.",
  milestones: [
    { time: "Day 0–1", description: "Procedure complete. Mild swelling possible. Most patients return to desk work in 2–3 days." },
    { time: "Day 7–10", description: "Scabs in the recipient area dissolve. FUE donor area appears normal. FUT sutures removed." },
    { time: "Week 2–3", description: "Transplanted hair sheds — this is normal and expected. New follicles remain in place beneath the scalp." },
    { time: "Month 3", description: "New hair growth begins. Initial appearance is fine and thin — texture and thickness develop over the next several months." },
    { time: "Month 6", description: "Significant density visible. Most patients are comfortable with their appearance in any social setting." },
    { time: "Month 12", description: "Final results. Transplanted hair grows naturally and permanently for the rest of your life." },
  ],
};

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "I researched for two years before deciding. The reason I chose Dr. Katona was simple — he had done more procedures than any other surgeon I interviewed by a factor of ten. The result speaks for itself. No one knows.",
    author: "Patient",
    role: "FUE Hair Transplant",
    rating: 5,
    treatmentReceived: "FUE Hair Transplant",
  },
  {
    quote:
      "I had a transplant done in Turkey three years ago and was miserable about the result. Dr. Katona's revision work gave me a natural hairline for the first time since I was 22. I should have come to him originally.",
    author: "Patient",
    role: "Hair Transplant Revision",
    rating: 5,
    treatmentReceived: "Hair Transplant Repair",
  },
  {
    quote:
      "Dr. Katona and his staff are of the highest caliber of professionalism with the perfect blend of friendliness. He put me at ease with both his knowledge and presence. My HIGHEST recommendation.",
    author: "Patient",
    role: "FUE Hair Transplant",
    rating: 5,
    treatmentReceived: "FUE Hair Transplant",
  },
  // ASSUMPTION: Replace with real Essence-era patient testimonials post-launch.
];

export const faqs: FAQItem[] = [
  {
    question: "How much does a hair transplant cost at Essence?",
    answer:
      "Hair transplant cost depends on the number of grafts required. Typical procedures range from $6,000 to $15,000 per session. Beard restoration starts at $5,000, eyebrow restoration at $3,000, and donor scar repair at $2,000. You receive a complete written quote at consultation with no hidden fees.",
  },
  {
    question: "Does a hair transplant hurt?",
    answer:
      "The procedure itself is performed under local anesthesia — most patients report minimal discomfort and many describe it as easier than a dental appointment. Some mild tenderness or tightness may be felt for a few days afterward, typically managed with over-the-counter medication.",
  },
  {
    question: "How long does the procedure take?",
    answer:
      "FUE typically takes 4–8 hours. FUT takes 5–8 hours. FUE/FUT hybrid procedures can run 6–10 hours. The exact length depends on the number of grafts being transplanted. Lunch and breaks are built into the day.",
  },
  {
    question: "Will I have a visible scar?",
    answer:
      "FUE leaves only tiny dot-pattern micro-scars in the donor area — invisible at any normal hair length, including very short cuts. FUT leaves a fine linear scar that is hidden by surrounding hair as long as you don't shave the back of your head completely. Trichophytic closure technique minimizes the FUT scar significantly.",
  },
  {
    question: "When will I see results?",
    answer:
      "Transplanted hairs shed at 2–3 weeks (this is normal — the follicles remain). New growth begins around month 3, becomes visibly noticeable at month 6, and reaches final maturity at 12 months. The pattern is gradual, which is why no one tends to notice anything other than that you look better.",
  },
  {
    question: "How long do hair transplant results last?",
    answer:
      "Permanent. The transplanted follicles are biologically resistant to DHT — the hormone responsible for genetic hair loss — and will continue to grow for the rest of your life. However, your non-transplanted hair may continue to thin over time, which is why some patients return for a second session years later.",
  },
  {
    question: "Am I a candidate for hair transplant surgery?",
    answer:
      "The two key factors are how much hair you've lost and how much donor hair you have available. Dr. Katona evaluates both during consultation. Patients in good general health with stabilized hair loss patterns are typically good candidates. Some patients told they aren't candidates elsewhere — particularly those with limited donor area — find that hybrid technique opens options.",
  },
  {
    question: "What's the difference between FUE and FUT?",
    answer:
      "FUE extracts individual follicles from the donor area and leaves no linear scar — it's preferred for patients who wear short hair. FUT removes a strip of donor scalp and dissects the follicles afterward, yielding more grafts per session but leaving a fine linear scar concealed by surrounding hair. Dr. Katona reviews both with every candidate and recommends based on your specific case.",
  },
  {
    question: "Can Dr. Katona repair a hair transplant from another clinic?",
    answer:
      "Yes — hair transplant revision is a specialty area for Dr. Katona. He regularly corrects outdated plug grafts, visible donor scars, unnatural hairlines, and failed surgeries from other clinics including failed Turkey transplants. Most patients can be significantly improved; many can be completely revised.",
  },
  {
    question: "Is hair transplant surgery safe for African American or Afro-textured hair?",
    answer:
      "Yes. Dr. Katona has extensive experience with African American patients and other ethnic hair types. Curly and tightly-coiled hair requires modified extraction angles and specialized graft selection, but produces excellent results in experienced hands. His African American case work includes some of the most publicly recognizable patients in the field.",
  },
];

export const relatedLinks: RelatedLink[] = [
  {
    title: "Hair Restoration (Non-Surgical)",
    description: "PRP, scalp micropigmentation, low-level light therapy, and medical hair loss therapy.",
    href: "/katona-hair-restoration/hair-restoration",
  },
  {
    title: "About Dr. Katona",
    description: "27 years of experience, 20,000+ procedures, dual US/UK licensure.",
    href: "/katona-hair-restoration/dr-katona",
  },
  {
    title: "Advanced Aesthetics",
    description: "PRP, medical chemical peels, sclerotherapy, and the broader Essence aesthetics menu under medical direction.",
    href: "/katona-hair-restoration/advanced-aesthetics",
  },
];

export const finalCTA = {
  eyebrow: "Begin",
  headline: "Schedule a free hair transplant consultation.",
  body: "Dr. Katona conducts every consultation personally. Available in person at Essence MedSpa in Edgebrook, or remotely via FaceTime, Zoom, or WhatsApp.",
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
  "@type": "MedicalProcedure",
  name: "Hair Transplant Surgery",
  alternateName: ["Hair Restoration Surgery", "FUE Hair Transplant", "FUT Hair Transplant"],
  procedureType: "Surgical",
  bodyLocation: "Scalp",
  preparation: "Consultation, medical history review, donor area assessment",
  followup: "Post-operative care, recovery monitoring, growth tracking at 3, 6, and 12 months",
  performer: {
    "@type": "Physician",
    name: "Arthur Katona, MD",
    medicalSpecialty: "DermatologySurgery",
  },
  url: "https://essencemedspachicago.com/katona-hair-restoration/hair-transplant",
};
