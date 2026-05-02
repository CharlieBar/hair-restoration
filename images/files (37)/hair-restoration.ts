// src/content/services/hair-restoration.ts
// NON-SURGICAL PILLAR: /katona-hair-restoration/hair-restoration
// Page type: Service Page
// Word count target: 1,500–1,800

import type {
  SEOMeta, HeroSection, TrustBar, ServiceCard, FAQItem,
  TestimonialItem, ProcessStep, BreadcrumbItem, SchemaObject,
  RelatedLink, CTA,
} from "@/types/content";

export const seo: SEOMeta = {
  title: "Non-Surgical Hair Restoration Chicago | PRP, SMP & Medical Therapy | Essence",
  description:
    "Non-surgical hair restoration in Chicago by Dr. Katona — PRP, scalp micropigmentation, low-level light therapy, and physician-managed medical hair loss therapy.",
  keywords: [
    "non-surgical hair restoration Chicago",
    "PRP for hair Chicago",
    "scalp micropigmentation Chicago",
    "SMP Chicago",
    "low-level light therapy hair Chicago",
    "hair loss treatment Chicago",
    "Finasteride Minoxidil Chicago",
  ],
  canonical: "/katona-hair-restoration/hair-restoration",
};

export const breadcrumb: BreadcrumbItem[] = [
  { label: "Essence MedSpa", href: "/" },
  { label: "Katona Hair Restoration", href: "/katona-hair-restoration" },
  { label: "Hair Restoration", href: "/katona-hair-restoration/hair-restoration" },
];

export const hero: HeroSection = {
  eyebrow: "Non-Surgical Hair Restoration",
  headline: "Stop the loss. Restore the density. Without surgery.",
  subheadline:
    "Physician-managed non-surgical hair restoration with Dr. Arthur Katona — for early-stage hair loss, post-transplant maintenance, and patients seeking results without surgery.",
  primaryCTA: {
    text: "Book Free Consultation",
    href: "/katona-hair-restoration/consultation",
    variant: "primary",
  },
  secondaryCTA: {
    text: "Compare with Surgery",
    href: "/katona-hair-restoration/hair-transplant",
    variant: "ghost",
  },
};

export const trustBar: TrustBar = {
  items: [
    { value: "Physician-Led", label: "Every Protocol Reviewed by Dr. Katona" },
    { value: "27 Years", label: "Hair Loss Expertise" },
    { value: "FDA-Cleared", label: "Approved Treatments Only" },
    { value: "Custom", label: "Individual Treatment Plans" },
  ],
};

export const overviewSection = {
  eyebrow: "Why Non-Surgical",
  headline: "Surgery is one path. It isn't the only one.",
  body: [
    "Hair restoration surgery is the right answer for many patients — and the wrong answer for many others. Patients in early-stage hair loss, those with active shedding from medical or hormonal causes, and those who simply prefer to begin with non-invasive options have a full spectrum of treatments available before surgery enters the conversation.",
    "Dr. Katona's dermatology background — including fellowships at Advanced Dermatology Institute, the University of Puerto Rico, and Bernard Ackerman's dermatopathology academy — means non-surgical hair loss isn't a side service at Essence. It's a primary specialty, with the same depth of physician oversight as the surgical practice.",
    "Every non-surgical patient receives a complete diagnostic evaluation. Some leave with a treatment plan. Some leave with a referral to address an underlying medical cause. Some leave knowing surgery will eventually be the right answer — but that they have time to wait. The protocol is built around the patient, not around the service menu.",
  ],
};

export const treatmentCards: ServiceCard[] = [
  {
    name: "PRP for Hair",
    slug: "prp-hair",
    tagline: "Your own platelets, used to stimulate dormant follicles.",
    description:
      "Platelet-Rich Plasma therapy uses growth factors from your own blood to stimulate hair follicle activity, slow shedding, and improve density in early-stage hair loss. Performed personally by Dr. Katona, drawing on the same regenerative protocols used in his post-surgical recovery work.",
    highlights: [
      "Performed personally by Dr. Katona",
      "Series of 3–4 sessions, spaced 4–6 weeks apart",
      "Maintenance sessions every 6–12 months",
      "Often combined with topical or oral therapy",
    ],
    duration: "60–90 minutes per session",
    cta: {
      text: "Inquire about PRP",
      href: "/katona-hair-restoration/consultation?treatment=prp-hair",
      variant: "outline",
    },
  },
  {
    name: "Scalp Micropigmentation (SMP)",
    slug: "smp",
    tagline: "Permanent illusion of density. No surgery required.",
    description:
      "SMP applies pigment to the scalp using micro-fine needles, creating thousands of tiny impressions that mimic the appearance of hair follicles. Used to enhance density on thinning scalps, define hairlines for shaved heads, camouflage scars, and complement existing hair transplants.",
    highlights: [
      "Visible results in 2–3 sessions",
      "No surgery, no recovery downtime",
      "Suitable for any hair color or skin tone",
      "Excellent for hair transplant patients seeking added density",
    ],
    duration: "2–4 hours per session",
    cta: {
      text: "Inquire about SMP",
      href: "/katona-hair-restoration/consultation?treatment=smp",
      variant: "outline",
    },
  },
  {
    name: "Low-Level Light Therapy (LLLT)",
    slug: "lllt",
    tagline: "FDA-cleared light therapy for androgenetic alopecia.",
    description:
      "Low-level laser therapy stimulates hair follicles using specific wavelengths of red light. FDA-cleared for the treatment of androgenetic alopecia in both men and women. Often combined with PRP and medical therapy as part of a comprehensive non-surgical protocol.",
    highlights: [
      "FDA-cleared for androgenetic alopecia",
      "Non-invasive — no needles, no recovery",
      "Combines well with PRP and medical therapy",
      "In-office and at-home device options",
    ],
    cta: {
      text: "Inquire about LLLT",
      href: "/katona-hair-restoration/consultation?treatment=lllt",
      variant: "outline",
    },
  },
  {
    name: "Medical Hair Loss Therapy",
    slug: "medical-therapy",
    tagline: "Finasteride, Minoxidil, and physician-supervised protocols.",
    description:
      "Dr. Katona prescribes and manages the only two FDA-approved medications for male pattern hair loss — Finasteride and Minoxidil — alongside compounded variations for patients who experience side effects on standard formulations. Female patients receive customized protocols based on hormonal evaluation.",
    highlights: [
      "Physician-prescribed and monitored",
      "Compounded options for sensitivity",
      "Hormonal evaluation for female patients",
      "Long-term protocol management",
    ],
    cta: {
      text: "Inquire about Medical Therapy",
      href: "/katona-hair-restoration/consultation?treatment=medical",
      variant: "outline",
    },
  },
  {
    name: "ACell + PRP Regenerative Combination",
    slug: "acell-prp",
    tagline: "Advanced regenerative protocol — wound healing meets follicular stimulation.",
    description:
      "ACell, an extracellular matrix product, combined with PRP creates a regenerative environment that supports follicular activity and accelerates donor area healing post-surgery. Used both as a standalone non-surgical treatment and as a component of Dr. Katona's surgical recovery protocol.",
    highlights: [
      "Combines ACell with autologous PRP",
      "Used post-FUE for accelerated healing",
      "Standalone treatment for early-stage loss",
      "Single session protocols available",
    ],
    duration: "90–120 minutes",
    cta: {
      text: "Inquire about ACell + PRP",
      href: "/katona-hair-restoration/consultation?treatment=acell-prp",
      variant: "outline",
    },
  },
];

export const candidateSection = {
  eyebrow: "Who This Is For",
  headline: "Four patient profiles where non-surgical works best.",
  profiles: [
    {
      title: "Early-Stage Hair Loss",
      description:
        "Norwood I–II in men, Ludwig I in women. The earlier you intervene, the more options remain available. Combination protocols can stop progression and visibly improve density without surgery.",
    },
    {
      title: "Stabilizing Active Shedding",
      description:
        "Telogen effluvium, post-pregnancy shedding, stress-related hair loss. Non-surgical protocols address the underlying activity before any surgical decision is appropriate.",
    },
    {
      title: "Post-Transplant Maintenance",
      description:
        "After hair transplant surgery, non-surgical therapy preserves and protects both transplanted and native hair. PRP, LLLT, and medical therapy work together to maintain results long-term.",
    },
    {
      title: "Surgery-Hesitant Patients",
      description:
        "Some patients prefer to exhaust non-surgical options before considering surgery. That preference is honored here. If non-surgical produces the result you want, surgery never enters the conversation.",
    },
  ],
};

export const decisionFramework = {
  eyebrow: "Surgical vs. Non-Surgical",
  headline: "How Dr. Katona helps you decide.",
  body: [
    "There is no universal correct answer. The right path depends on your hair loss stage, donor area density, age, expectations, lifestyle, and personal preferences. What Dr. Katona offers is a 27-year frame of reference for what works in which case.",
    "In broad terms — non-surgical is generally first-line for early hair loss, active shedding, and patients with strong native hair to preserve. Surgery is generally first-line for advanced hair loss with stable patterns, hairline reconstruction, or filling areas where follicles no longer exist. Many patients benefit from both, sequenced thoughtfully over time.",
  ],
  framework: [
    { label: "Norwood I–II / Ludwig I (early)", recommendation: "Non-surgical first" },
    { label: "Norwood III–IV / Ludwig II (moderate)", recommendation: "Non-surgical alone or combined with surgery" },
    { label: "Norwood V–VII / Ludwig III (advanced)", recommendation: "Surgery primary, non-surgical supportive" },
    { label: "Active shedding from medical cause", recommendation: "Non-surgical and medical workup first" },
    { label: "Recent hair transplant", recommendation: "Non-surgical maintenance protocol" },
    { label: "Strong donor + advanced loss + good health", recommendation: "Surgery candidate evaluation" },
  ],
};

export const diagnosticProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Hair Loss Classification",
    description:
      "Dr. Katona uses the Norwood scale (men) and Ludwig scale (women) to classify your current hair loss stage and predict likely progression based on family history and hair loss onset timing.",
  },
  {
    step: "02",
    title: "Donor Area Assessment",
    description:
      "Even for non-surgical patients, donor area density is informative — it reveals genetic potential and helps predict how aggressively to treat. Trichoscopy and clinical assessment are performed in-office.",
  },
  {
    step: "03",
    title: "Medical & Hormonal Workup",
    description:
      "Hair loss often has medical components — thyroid disease, iron deficiency, hormonal imbalance, medication effects. Dr. Katona orders relevant labs when indicated and refers for further workup when appropriate.",
  },
  {
    step: "04",
    title: "Personalized Protocol Design",
    description:
      "Based on the diagnostic findings, Dr. Katona designs a personalized protocol — typically combining 2–3 modalities (e.g., PRP + medical therapy, LLLT + ACell + Minoxidil). Single-modality plans are rare.",
  },
  {
    step: "05",
    title: "Treatment Initiation",
    description:
      "First treatment session is performed in-office. Take-home supplies and detailed protocol instructions are provided. Follow-up scheduling is set in advance to maintain treatment cadence.",
  },
  {
    step: "06",
    title: "Quarterly Reassessment",
    description:
      "Progress is reassessed every 3 months — clinical photos, density measurements, and protocol adjustments. Most protocols evolve over time as the patient's response becomes clearer.",
  },
];

export const combinationSection = {
  eyebrow: "Combination Protocols",
  headline: "How non-surgical complements transplant surgery.",
  body: [
    "Non-surgical and surgical hair restoration are not mutually exclusive — they are complementary. The most successful hair restoration outcomes typically combine both, sequenced over time.",
    "Pre-surgery: PRP and medical therapy are often started 3–6 months before transplant to maximize donor area health and stabilize ongoing shedding. This protects both the donor area and the surrounding native hair the transplant will be placed into.",
    "During surgery: ACell + PRP is incorporated into the surgical protocol itself, accelerating donor area healing and supporting graft survival.",
    "Post-surgery: Long-term maintenance with PRP, LLLT, and medical therapy preserves both transplanted and native hair. Without ongoing maintenance, native hair can continue to thin around healthy transplanted follicles — producing the appearance of dense islands within thinning surroundings.",
  ],
};

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "I came in expecting to be told I needed surgery. Dr. Katona's evaluation showed I had an underlying thyroid issue contributing to my shedding. Six months on a combined protocol — surgery wasn't needed. I appreciate the honesty.",
    author: "Patient",
    role: "Female Hair Loss",
    rating: 5,
    treatmentReceived: "PRP + Medical Therapy",
  },
  {
    quote:
      "I'd been doing PRP elsewhere for two years with mediocre results. Dr. Katona reviewed my protocol on the first visit and made changes that produced more visible improvement in three months than I'd seen in two years.",
    author: "Patient",
    role: "Early-Stage Male Pattern",
    rating: 5,
    treatmentReceived: "PRP + LLLT + Finasteride",
  },
  // ASSUMPTION: Replace with real Essence-era testimonials post-launch.
];

export const faqs: FAQItem[] = [
  {
    question: "Does non-surgical hair restoration actually work?",
    answer:
      "For the right patient, yes — particularly in early-stage hair loss. PRP, low-level light therapy, and FDA-approved medications (Finasteride, Minoxidil) all have published evidence of efficacy. Combination protocols typically outperform any single modality. The honest answer for advanced hair loss, however, is that non-surgical alone usually cannot fully restore lost density — that's where surgery enters the conversation.",
  },
  {
    question: "How much does non-surgical hair restoration cost?",
    answer:
      "Costs vary by treatment. PRP packages typically run $1,500–$3,500 for an initial 3–4 session series. SMP runs $2,000–$5,000 depending on coverage area. LLLT and medical therapy have ongoing monthly costs ($50–$200/month range). Dr. Katona provides complete pricing during consultation along with a recommended protocol.", // CONFIRM: pricing
  },
  {
    question: "How long until I see results?",
    answer:
      "Hair grows slowly — meaningful results from any non-surgical protocol typically appear at 3–6 months and continue developing for 12 months. SMP shows results within 24 hours of the first session. Medical therapy often shows reduced shedding within 1–2 months but takes 6–12 months for visible density improvement.",
  },
  {
    question: "Is PRP for hair painful?",
    answer:
      "Most patients describe PRP as mildly uncomfortable rather than painful. The blood draw is a standard needle stick. Scalp injections are performed with very fine needles — topical numbing cream and cold air can further reduce sensation. The procedure typically lasts 60–90 minutes.",
  },
  {
    question: "What's the difference between PRP and SMP?",
    answer:
      "PRP is a medical treatment that stimulates your own hair follicles using growth factors from your blood — the result is your own hair growing more densely. SMP is a cosmetic procedure that creates the visual appearance of follicles using pigment — your actual hair density doesn't change, but the scalp looks fuller. Many patients use them together: PRP to maintain follicular activity, SMP to enhance visual density.",
  },
  {
    question: "Can I do non-surgical treatments instead of a hair transplant?",
    answer:
      "For early-stage hair loss, often yes. For advanced hair loss with significant follicular miniaturization, non-surgical treatments can stabilize and improve density but typically cannot fully restore lost hair. Dr. Katona's consultation gives you an honest assessment of where non-surgical can take you for your specific case.",
  },
  {
    question: "Are there side effects?",
    answer:
      "PRP uses your own blood and has minimal side effects — temporary tenderness or mild swelling at injection sites. Finasteride has documented potential side effects in a small percentage of users — Dr. Katona discusses these in detail before prescribing. Minoxidil can cause scalp irritation in some patients. SMP is essentially side-effect-free when performed by trained practitioners.",
  },
  {
    question: "How is medical therapy different from over-the-counter Rogaine?",
    answer:
      "Over-the-counter Minoxidil is the same active ingredient available by prescription — but Dr. Katona's protocols often involve compounded formulations addressing scalp absorption issues, side effect minimization, or combination with other ingredients. Medical therapy also includes Finasteride (prescription only) and ongoing physician monitoring of effectiveness and tolerance.",
  },
  {
    question: "Does insurance cover non-surgical hair restoration?",
    answer:
      "Generally no — hair loss treatment is considered cosmetic in most cases. Exceptions exist for hair loss caused by accident, surgery, or specific medical conditions. Most patients pay out-of-pocket; financing options are available.",
  },
  {
    question: "Can I do non-surgical treatments if I've already had a transplant?",
    answer:
      "Yes — this is one of the most common reasons patients pursue non-surgical maintenance. PRP, LLLT, and medical therapy preserve transplanted and native hair, preventing the appearance of dense transplanted islands within thinning surroundings. Long-term post-transplant maintenance is recommended for nearly all transplant patients.",
  },
];

export const relatedLinks: RelatedLink[] = [
  {
    title: "Hair Transplant Surgery",
    description: "FUE, FUT, and hybrid surgical hair restoration procedures performed personally by Dr. Katona.",
    href: "/katona-hair-restoration/hair-transplant",
  },
  {
    title: "About Dr. Katona",
    description: "27 years of experience, dermatology fellowship training, dual US/UK licensure.",
    href: "/katona-hair-restoration/dr-katona",
  },
  {
    title: "Advanced Aesthetics",
    description: "PRP/PRF for face, medical chemical peels, sclerotherapy, and aesthetic medicine under medical direction.",
    href: "/katona-hair-restoration/advanced-aesthetics",
  },
];

export const finalCTA = {
  eyebrow: "Begin",
  headline: "Schedule a non-surgical hair loss consultation.",
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
  name: "Non-Surgical Hair Restoration",
  alternateName: ["PRP for Hair", "Scalp Micropigmentation", "Low-Level Light Therapy", "Medical Hair Loss Therapy"],
  procedureType: "Noninvasive",
  bodyLocation: "Scalp",
  performer: {
    "@type": "Physician",
    name: "Arthur Katona, MD",
    medicalSpecialty: "DermatologySurgery",
  },
  url: "https://essencemedspachicago.com/katona-hair-restoration/hair-restoration",
};
