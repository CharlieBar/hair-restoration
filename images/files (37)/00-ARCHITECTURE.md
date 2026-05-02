# Dr. Katona Sub-Brand — Page Architecture

**Sub-brand:** Katona Hair Restoration (housed inside Essence MedSpa)
**URL root:** `/katona-hair-restoration/`
**Stack:** Next.js 15 + Tailwind CSS 4
**Visual direction:** Surgical Editorial (deep ink + bone + single accent)
**Created:** Friday, May 01, 2026

---

## Sitemap

```
/katona-hair-restoration/                          ← Hub (surgeon-led)
├── /katona-hair-restoration/dr-katona             ← Surgeon profile
├── /katona-hair-restoration/hair-transplant       ← All surgical procedures
├── /katona-hair-restoration/hair-restoration      ← Non-surgical only
└── /katona-hair-restoration/advanced-aesthetics   ← Two-tier: performs / directs
```

Note: Originally requested 4 pages. The hub at `/katona-hair-restoration/` is delivered as a fifth bonus page since you mentioned introducing him + the services together — that's a hub page job, not a service page job. The `/dr-katona` page is the deep surgeon biography.

If you want only 4 files, collapse `/dr-katona` into the hub page. My recommendation is keep them separate — surgeon profile pages rank well for branded queries ("Dr. Arthur Katona Chicago", "Katona hair surgeon").

---

## Page-by-Page Section Outlines

### 1. `/katona-hair-restoration/` — HUB (Surgeon-Led)
**Page type:** Hub
**Goal:** Anchor the sub-brand. Establish Dr. Katona as the central credential. Route visitors to the right sub-page.
**Word count target:** 800–1,200

Sections in order:
1. SEO + schema (MedicalBusiness, Person nested)
2. Hero — surgeon-led: portrait, name, key credential, primary stat (20,000+ procedures)
3. Trust bar — 4 numerical credentials (years / procedures / countries licensed / training role)
4. Surgeon intro section — short bio, link to full `/dr-katona` page
5. Three service category cards: Hair Transplant · Hair Restoration · Advanced Aesthetics
6. The "27 Years, 20,000 Patients" story section — the differentiator
7. Press & recognition strip — Chicago Tribune, ESPN, BBC, Fox Sports, etc.
8. Patient testimonials (2–3, surgical hair transplant focus)
9. FAQs — high-level (8 questions about Dr. Katona + Essence integration)
10. Closing CTA — book consultation
11. Schema (MedicalBusiness)

---

### 2. `/katona-hair-restoration/dr-katona` — SURGEON PROFILE
**Page type:** Team / Provider Page
**Goal:** Build trust at the surgeon level. Rank for "Dr. Arthur Katona", "Katona hair restoration", "Chicago hair transplant surgeon".
**Word count target:** 1,200–1,800 (deeper than typical team page given his profile)

Sections in order:
1. SEO + schema (Person)
2. Hero — formal portrait, name, "Medical Director, Essence MedSpa & Wellness Center"
3. Career highlights stat block (4–6 numerical achievements)
4. The pioneering FUE story (1996 origin, technique evolution)
5. Credentials grid — board certifications, fellowships, memberships
6. Licenses — IL, FL, GA, UK (this is the rarest signal, give it visual weight)
7. Education & training timeline
8. Career timeline — RESTORE, Vinci, Premium Healthcare, Hospital Group, Global Hair Alliance founding
9. Notable cases — celebrity tier (anonymized), athletes, complex revisions
10. Press appearances
11. Awards & recognition (ISHRS, Platinum Follicle nominations)
12. "Why Chicago, Why Now" — connection to Essence MedSpa
13. FAQs about Dr. Katona specifically
14. Booking CTA
15. Schema (Person + medicalSpecialty)

---

### 3. `/katona-hair-restoration/hair-transplant` — SURGICAL PILLAR
**Page type:** Service Page (Pillar level)
**Goal:** Convert FUE / FUT / beard / eyebrow / repair searchers into consultations.
**Word count target:** 1,800–2,200

Sections in order:
1. SEO + schema (MedicalProcedure + FAQPage)
2. Hero — "20,000+ Procedures. One Surgeon. One Patient at a Time."
3. Trust bar — surgical-specific stats
4. Procedures offered — 6 cards:
   - FUE Hair Transplant
   - FUT Hair Transplant
   - FUE/FUT Hybrid
   - Beard & Goatee Restoration
   - Eyebrow Restoration
   - Hair Transplant Repair / Revision
5. The Dr. Katona difference — assembly-line vs. concierge contrast
6. The procedure experience — 7-step process (consultation → recovery)
7. FUE vs. FUT comparison table
8. Specialty cases callout — African American / Afro-textured, female, traction alopecia
9. Pricing transparency section ($6K–$15K range, what determines cost)
10. Recovery timeline visual
11. Before/after gallery placeholder
12. Patient testimonials (3, surgical specific)
13. FAQs (10 — surgical specific)
14. Related: Hair Restoration (non-surgical), Dr. Katona profile
15. Final CTA — book free consultation
16. Schema (MedicalProcedure + FAQPage)

---

### 4. `/katona-hair-restoration/hair-restoration` — NON-SURGICAL PILLAR
**Page type:** Service Page
**Goal:** Convert early-stage hair loss patients, post-op patients seeking thickening, and surgical-shy candidates.
**Word count target:** 1,500–1,800

Sections in order:
1. SEO + schema (MedicalProcedure + FAQPage)
2. Hero — "Stop the Loss. Restore the Density. Without Surgery."
3. Trust bar — non-surgical stats
4. Treatments offered — 5 cards:
   - PRP for Hair (Platelet-Rich Plasma)
   - Scalp Micropigmentation (SMP)
   - Low-Level Light Therapy (LLLT)
   - Medical Hair Loss Therapy (Finasteride / Minoxidil)
   - ACell + PRP Regenerative Combination
5. Who is this for? — 4 ideal candidate profiles
6. Surgical vs. non-surgical decision framework
7. The diagnostic process — Norwood scale, Ludwig scale, donor density
8. Treatment cycles & expectations
9. Combination protocols — how non-surgical complements transplant
10. Patient testimonials (2)
11. FAQs (10 — non-surgical specific)
12. Related: Hair Transplant (surgical), Dr. Katona profile
13. Final CTA
14. Schema (MedicalProcedure + FAQPage)

---

### 5. `/katona-hair-restoration/advanced-aesthetics` — ADVANCED AESTHETICS
**Page type:** Service Page (Two-Tier)
**Goal:** Bring Dr. Katona's medical authority to Essence's aesthetic services. Compliance-clean on what he personally performs vs. directs.
**Word count target:** 1,500–1,800

Sections in order:
1. SEO + schema (MedicalBusiness + FAQPage)
2. Hero — "Advanced Aesthetics Under Medical Direction"
3. The dermatology fellowship credentials block (this is the bridge)
4. **Tier 1: Performed by Dr. Katona** — 5–6 services:
   - PRP / PRF for Face
   - Medical-Grade Chemical Peels (TCA, Jessner's)
   - Skin Cancer Screening & Mole Evaluation
   - Sclerotherapy
   - Acne / Rosacea Medical Management
   - Melasma Treatment Protocol
5. **Tier 2: Under Dr. Katona's Medical Direction** — performed by trained injectors / RNs:
   - Neuromodulators (Botox, Dysport, Xeomin)
   - Dermal Fillers (Juvéderm, Restylane, RHA)
   - Bio-stimulators (Sculptra, Radiesse)
   - PDO Thread Lifts
   - Microneedling / RF Microneedling
   - Laser Treatments
   - Kybella
6. The Essence + Katona model — what medical directorship actually means for patients
7. The consultation process — how Dr. Katona reviews complex cases
8. Why dermatology training matters — the differentiator vs. medspas without MD oversight
9. Patient testimonials (2)
10. FAQs (10 — addresses tier confusion directly)
11. Related: Hair services
12. Final CTA
13. Schema

---

## Internal Linking Map

```
HUB ────────────┬──────► dr-katona
                ├──────► hair-transplant
                ├──────► hair-restoration
                └──────► advanced-aesthetics

dr-katona ──────┬──────► hair-transplant
                ├──────► hair-restoration
                └──────► advanced-aesthetics

hair-transplant ──────► hair-restoration (cross-sell non-surgical complement)
                ──────► dr-katona

hair-restoration ─────► hair-transplant (upgrade path)
                 ─────► dr-katona

advanced-aesthetics ──► dr-katona
                    ──► hair-transplant (cross-sell)
```

Every sub-page also links back to:
- Essence main site `/` (parent brand)
- Essence `/contact` and booking flow
- Relevant Essence service pages (e.g., advanced-aesthetics page links to Essence's facials, Essence's body treatments)

---

## Schema Strategy

- **Hub:** `MedicalBusiness` with `subOrganizationOf` Essence MedSpa
- **Dr. Katona profile:** `Physician` schema with full credentials, `worksFor` Essence
- **Hair Transplant:** `MedicalProcedure` + `FAQPage` + `Service`
- **Hair Restoration:** `MedicalProcedure` + `FAQPage`
- **Advanced Aesthetics:** `MedicalBusiness` department + `FAQPage`

All pages share breadcrumb schema rooting at Essence homepage → Katona Hair Restoration → page.

---

## Compliance Notes

1. **Two-tier disclosure on Advanced Aesthetics page must be explicit.** "Under medical direction" copy is non-negotiable for services he doesn't personally perform. This protects Essence from misleading-advertising exposure under Illinois medical advertising rules.

2. **"20,000+ procedures" claim** — this is Dr. Katona's stated career total across US/UK including RESTORE years. Should be sourced/footnoted on the surgeon profile page. Don't claim "20,000 procedures at Essence."

3. **Celebrity client mentions** — source file lists names ("rumored to have had transplants"). Do NOT name specific celebrities on Essence's site without their consent. Use "celebrity clientele" / "professional athletes" generically.

4. **Pricing range** — $6K–$15K is from his existing clinic. Confirm Essence pricing matches before publishing. Flagged in content with `// CONFIRM: pricing` comments.
