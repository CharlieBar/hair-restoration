# Claude Code Handoff Prompts — Katona Hair Restoration Sub-Brand

Use these prompts in order. Each one is paste-ready into Claude Code (terminal, VSCode, or wherever you run it from). Run them sequentially — each builds on the prior.

---

## Setup Prompt — Run First

```
We are building the Katona Hair Restoration sub-brand inside the Essence MedSpa Next.js 15 + Tailwind 4 site. This is a premium, distinct sub-brand for our new Medical Director, Dr. Arthur Katona, MD.

Visual direction: Surgical Editorial — deep ink (near-black) primary, warm bone/ivory secondary, single restrained accent color (recommend oxblood, deep gold, or muted forest — pick one and stay consistent). Editorial serif display type, clean grotesk body. Large negative space, vertical editorial rhythm. This is NOT the Essence parent-brand visual language — it is a distinct premium sub-brand.

The content layer is already complete and lives in five files I am about to drop into src/content/ and src/types/. These files are the source of truth — components must read from them, never define their own copy.

Before doing anything, read these skills:
1. /mnt/skills/user/award-winning-design/SKILL.md
2. /mnt/skills/user/premium-hero-builder/SKILL.md
3. /mnt/skills/user/frontend-design/SKILL.md
4. /mnt/skills/user/nextjs-tailwind-builder/SKILL.md
5. /mnt/skills/user/content-architect/SKILL.md

Then read the architecture doc at 00-ARCHITECTURE.md and the CLAUDE.md protection rules.

Do not start building yet. After you've read the skills and the architecture, summarize back to me:
- Your understanding of the visual direction
- Your understanding of the page architecture
- Any clarifying questions before we start with Page 1 (the hub)

Then wait for my go-ahead.
```

---

## Page 1 Prompt — Hub Page

```
Build /katona-hair-restoration/ — the hub page.

Content file: src/content/pages/katona-hub.ts (already in repo)
Page shell: src/app/katona-hair-restoration/page.tsx
Page type: Hub (surgeon-led variant)
Word count target: 800–1,200 (already written in content file)

CRITICAL: This is the entry point to the entire sub-brand. The hero is surgeon-led, not service-led. Lead with Dr. Katona — his portrait, his name, one credential, one number (20,000+ procedures). The services emerge below as "what he does here."

Before building, invoke the premium-hero-builder skill for the hero section. Use the surgical editorial direction — deep ink background, single accent color, large editorial serif display, restrained typography, lots of negative space.

Section order (read content file for exact copy):
1. Hero (premium-hero-builder pattern, surgeon-led)
2. Trust bar — 4 numerical credentials in editorial display treatment
3. Surgeon intro section — short bio, link to /dr-katona
4. Three service category cards — Hair Transplant, Hair Restoration, Advanced Aesthetics
5. The "27 Years, 20,000 Patients" story section
6. Press strip — Chicago Tribune, ESPN, BBC, Fox Sports, etc.
7. Testimonials (2–3)
8. FAQs (8 questions)
9. Final CTA section
10. Schema (JSON-LD from content file's schema export)

Production requirements:
- Every visible string flows from src/content/pages/katona-hub.ts — NO hardcoded copy in components
- Use the page metadata pattern in Next.js 15: export const metadata derived from seo export
- Inject the schema export as a JSON-LD <script> tag in the page
- All CTAs use the CTA objects in the content file (text + href)
- Mobile-first responsive — design for 375px, then enhance to desktop
- Use accent color sparingly — primary CTAs, key numbers, hover states

Run the design-research-agent skill if anything in your design feels generic or copy-paste. The goal is a page Dr. Katona would feel proud to send to celebrity clients.

When complete, show me:
1. The page rendered (via dev server screenshot or working URL)
2. The component file structure you used
3. Anything you flagged or had to assume
```

---

## Page 2 Prompt — Dr. Katona Profile

```
Build /katona-hair-restoration/dr-katona — the surgeon profile page.

Content file: src/content/team/dr-katona.ts (already in repo)
Page shell: src/app/katona-hair-restoration/dr-katona/page.tsx
Page type: Team / Provider Page (extended depth — this is a hero-tier surgeon profile, not a typical team page)
Word count target: 1,200–1,800

This page must rank for "Dr. Arthur Katona", "Katona hair surgeon", "Chicago hair transplant surgeon" — give it the editorial depth those queries reward.

Section order (read content file for exact copy):
1. Hero — formal portrait treatment, name in oversized editorial serif, role line below
2. Career stats grid — 6 numerical achievements as editorial display elements
3. The 1996 FUE story section — long-form editorial
4. Credentials grid — 4 categories (board certs, licenses, memberships, awards)
5. Education timeline — 6 milestones, vertical or horizontal timeline pattern
6. Career timeline — 8 milestones spanning 1996–2024
7. Notable cases section with 5 case categories
8. Press appearances — 12 outlet logos/names
9. "Why Chicago, Why Now" connection section
10. FAQs (8 questions)
11. Final CTA
12. Schema (Physician schema from content file)

Design notes:
- This page should feel like a Financial Times Weekend profile, not a typical doctor bio
- Treat numerical credentials as ornamental display type — "20,000+", "27", "1996", "4" should appear large and editorially weighted
- The portrait should be cinematic, not corporate — think Annie Leibovitz, not LinkedIn
- Vertical rhythm should breathe — generous white space between sections
- Press logos in monochrome, restrained presentation

Production requirements (same as hub page):
- All copy from content file, no hardcoded strings
- Schema injection
- Mobile-first responsive
- Accent color used sparingly

When complete, show me the rendered page.
```

---

## Page 3 Prompt — Hair Transplant (Surgical)

```
Build /katona-hair-restoration/hair-transplant — the surgical pillar page.

Content file: src/content/services/hair-transplant.ts (already in repo)
Page shell: src/app/katona-hair-restoration/hair-transplant/page.tsx
Page type: Service Page (Pillar)
Word count target: 1,800–2,200

This is the highest-value commercial page in the section — searches for "hair transplant Chicago" carry intent and budget. Build accordingly.

Section order (read content file for exact copy):
1. Hero — "20,000+ procedures. One surgeon. One patient at a time."
2. Trust bar (4 stats)
3. Why Surgical overview section
4. Procedure cards — 6 cards (FUE, FUT, Hybrid, Beard, Eyebrow, Repair). Each card has highlights array, starting price, duration, CTA.
5. The Dr. Katona Difference section — "assembly line vs. concierge" contrast
6. Process steps — 7 numbered steps with durations
7. FUE vs. FUT comparison table — 8 comparison rows
8. Specialty cases — 5 case categories
9. Pricing transparency section — pricing table with 5 price points
10. Recovery timeline — 6 milestones
11. Testimonials (3)
12. FAQs (10 questions)
13. Related links (3 cross-sell)
14. Final CTA
15. Schema (MedicalProcedure)

Design notes for this page:
- Comparison table is a key conversion moment — design it as an editorial chart, not a generic table
- The pricing section is intentionally transparent ($6K–$15K range) — frame it as confidence, not a barrier
- Specialty cases section deserves visual weight — these are differentiation moments
- Each procedure card should have visual hierarchy that lets a visitor scan and self-select

Production requirements: same as prior pages — all copy from content file, schema injection, mobile-first.

When complete, show me the rendered page.
```

---

## Page 4 Prompt — Hair Restoration (Non-Surgical)

```
Build /katona-hair-restoration/hair-restoration — the non-surgical pillar page.

Content file: src/content/services/hair-restoration.ts (already in repo)
Page shell: src/app/katona-hair-restoration/hair-restoration/page.tsx
Page type: Service Page
Word count target: 1,500–1,800

This page targets a different patient than the surgical pillar — earlier-stage hair loss, post-op maintenance, surgery-hesitant. The tone should feel diagnostic and consultative, not promotional.

Section order (read content file for exact copy):
1. Hero — "Stop the loss. Restore the density. Without surgery."
2. Trust bar (4 stats)
3. Why Non-Surgical overview
4. Treatment cards — 5 cards (PRP, SMP, LLLT, Medical Therapy, ACell+PRP)
5. Who This Is For — 4 candidate profiles
6. Surgical vs. Non-Surgical decision framework — table format with 6 framework rows
7. Diagnostic process — 6 numbered steps
8. Combination protocols section
9. Testimonials (2)
10. FAQs (10)
11. Related links
12. Final CTA
13. Schema

Design notes:
- This page has more content density than the others — pace it carefully with white space
- The decision framework table is a key trust-building moment — make it scannable and diagnostic-feeling
- Treatment cards should feel medical, not commercial — closer to a pharmacy reference than a salon menu

Production requirements: same as prior pages.

When complete, show me the rendered page.
```

---

## Page 5 Prompt — Advanced Aesthetics

```
Build /katona-hair-restoration/advanced-aesthetics — the Advanced Aesthetics page.

Content file: src/content/services/advanced-aesthetics.ts (already in repo)
Page shell: src/app/katona-hair-restoration/advanced-aesthetics/page.tsx
Page type: Service Page (Two-Tier)
Word count target: 1,500–1,800

⚠️ COMPLIANCE-CRITICAL PAGE ⚠️

This page has a strict two-tier structure that protects against misleading-advertising exposure under Illinois medical advertising rules:

- **Tier 1 — Performed Personally by Dr. Katona** (6 services): PRP/PRF, Medical Peels, Skin Screening, Sclerotherapy, Acne/Rosacea, Melasma
- **Tier 2 — Under Dr. Katona's Medical Direction** (7 services): Neuromodulators, Fillers, Bio-stimulators, Threads, Microneedling, Lasers, Kybella

The visual separation between Tier 1 and Tier 2 must be unmistakable. A patient must be able to tell at a glance which services Dr. Katona personally performs and which are performed by Essence's aesthetic team under his oversight. Do NOT collapse these into one menu. Do NOT obscure the distinction with similar styling.

Section order (read content file for exact copy):
1. Hero — "Aesthetic medicine under physician oversight that most medspas don't have"
2. Trust bar (4 stats)
3. Dermatology Credentials Block — 3 fellowships listed prominently
4. Tier 1 section header + 6 service cards (clearly labeled as Dr. Katona personally performs)
5. Tier 2 section header + 7 service cards (clearly labeled as performed under medical direction)
6. The Essence + Katona Model section — explains medical directorship
7. Why Dermatology Background Matters — 4 examples (with vs. without dermatology training)
8. Testimonials (2)
9. FAQs (10) — several specifically address the tier distinction
10. Related links
11. Final CTA
12. Schema

Design notes:
- Use distinct visual treatment for Tier 1 vs. Tier 2 — different background, different card style, or clear typographic hierarchy. The point is unambiguous distinction.
- The Tier 1 section can feel slightly more premium / surgical — these are the services his personal expertise applies to most directly
- The Tier 2 section should feel professional and clearly labeled — this is the broader Essence menu, not Dr. Katona's personal services
- The "with vs. without dermatology training" comparison section is a key trust-building moment — design it as an editorial comparison, not a generic feature grid

Production requirements: same as prior pages, plus extra care on the tier separation.

When complete, show me the rendered page AND highlight specifically how you visually distinguished Tier 1 from Tier 2. I want to verify the compliance-critical separation is clear.
```

---

## Final Polish Prompt — Run After All Pages Built

```
All five Katona Hair Restoration pages are now built. Run a final polish pass:

1. **Cross-page consistency** — verify the Surgical Editorial visual language is consistent across all 5 pages. Hero treatments, typography, accent color usage, button styles should all feel like one cohesive sub-brand.

2. **Internal linking audit** — verify every related-links section actually links correctly, and that the breadcrumb hierarchy is consistent on every page.

3. **Schema validation** — paste each page's JSON-LD into Google's Rich Results Test (https://search.google.com/test/rich-results). Fix any errors.

4. **Mobile audit** — open every page at 375px viewport. Hero text should not overflow. CTAs should be thumb-reachable. Tables (FUE vs FUT, decision framework, dermatology comparison) should be readable on mobile — convert to stacked card view if needed.

5. **CONFIRM-flagged items** — search the codebase for "// CONFIRM:" comments. Compile a list and send to Islam for confirmation before launch:
   - All pricing
   - Phone number
   - Email addresses
   - Street address
   - Hours
   - Booking URLs
   - Google review count and rating
   - Social handles
   - Geo coordinates

6. **Compliance final check on Advanced Aesthetics** — verify Tier 1 / Tier 2 separation reads unambiguously. If a layperson can't tell at a glance which services Dr. Katona personally performs vs. which are under medical direction, redesign that section until they can.

7. **Performance audit** — Lighthouse scores. Aim for 95+ on Performance, 100 on Accessibility, 100 on SEO, 100 on Best Practices for each page.

When complete, send me:
- Lighthouse scores per page
- Compiled list of CONFIRM items needing my input
- Any flags or concerns
```
