# CLAUDE.md — Katona Hair Restoration Sub-Brand

This file protects the content layer from being overwritten during design changes.

## The Single Rule

**Redesign means rewriting components. Never rewriting content.**

Content for the Katona Hair Restoration sub-brand lives in `src/content/`. Types live in `src/types/content.ts`. These are the source of truth. Components, pages, and styles read from these files — they never define visible strings of their own.

---

## Never modify during a redesign

- `src/content/global/site.ts` — business NAP, hours, booking, reviews
- `src/content/pages/katona-hub.ts` — hub page content
- `src/content/team/dr-katona.ts` — surgeon profile content
- `src/content/services/hair-transplant.ts` — surgical pillar content
- `src/content/services/hair-restoration.ts` — non-surgical pillar content
- `src/content/services/advanced-aesthetics.ts` — advanced aesthetics content (TWO-TIER STRUCTURE IS COMPLIANCE-CRITICAL)
- `src/types/content.ts` — type definitions

If a redesign requires changes to copy, FAQs, or CTAs — a content-architect pass updates the content files first. Components are then updated to match the new shape.

---

## Free to modify during a redesign

- `src/components/**` — all UI components
- `src/app/katona-hair-restoration/**/page.tsx` — page shells (must continue to import from content files)
- `src/app/globals.css`, Tailwind config, design tokens
- `src/lib/**` — utilities, helpers
- Any file in `public/` — images, fonts, assets

---

## Page → Content File Map

| Route | Content File |
|-------|--------------|
| `/katona-hair-restoration` | `src/content/pages/katona-hub.ts` |
| `/katona-hair-restoration/dr-katona` | `src/content/team/dr-katona.ts` |
| `/katona-hair-restoration/hair-transplant` | `src/content/services/hair-transplant.ts` |
| `/katona-hair-restoration/hair-restoration` | `src/content/services/hair-restoration.ts` |
| `/katona-hair-restoration/advanced-aesthetics` | `src/content/services/advanced-aesthetics.ts` |

---

## Compliance-Critical Sections

These sections must NOT be edited or restructured without explicit Islam approval:

### Advanced Aesthetics page — Tier 1 / Tier 2 split
The two-tier structure (services Dr. Katona personally performs vs. those under his medical direction) is a legal/compliance requirement under Illinois medical advertising rules. Do not collapse, merge, or obscure the distinction during redesign. Preserve clear visual separation between Tier 1 and Tier 2 service sections. The FAQ that explains the distinction must remain present.

### Pricing claims
All pricing in content files is marked with `// CONFIRM: pricing` comments. Pricing must be confirmed with Islam before any page goes live. Do not invent or estimate pricing during design work.

### Claim of "20,000+ procedures"
This is Dr. Katona's career total across US/UK practices including his RESTORE/Katona Hair Restoration years. It is not "procedures at Essence." Do not rephrase in ways that imply Essence-specific volume.

### Celebrity client mentions
The source biography lists named celebrities who are "rumored to have had transplants." Do NOT reproduce specific names on the published site without consent. Use generic phrasing — "celebrity clientele," "professional athletes" — only.

---

## Visual Design Direction

The Katona sub-brand uses the **Surgical Editorial** design direction — distinct from the parent Essence MedSpa brand:

- **Palette:** Deep ink (near-black), warm bone/ivory secondary, single restrained accent (oxblood, deep gold, or muted forest)
- **Typography:** Editorial serif for display (Recoleta, GT Sectra, or Canela weight); clean grotesk for body (Söhne, Inter Tight)
- **Photography:** Editorial portraiture, clinical-but-cinematic, large negative space
- **Numerical credentials:** Treated as design elements (large, weighted, often as ornamental display type)
- **Vertical rhythm:** Tall, generous white space; longform feel rather than packed
- **Tone:** Surgical practice meets editorial publication — restrained, confident, evidence-led

When redesigning, preserve the visual separation between this section and the parent Essence brand. The Katona section should feel like a distinct, premium sub-brand — not a styled variant of Essence.

---

## When in Doubt

Ask Islam before:
- Restructuring the URL hierarchy
- Merging or splitting pages
- Changing the Tier 1 / Tier 2 structure on Advanced Aesthetics
- Modifying any pricing
- Rewording compliance-critical claims
