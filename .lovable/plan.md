# AYK Solutions — Premium Software Company Website

A professional, light-themed multi-page marketing site with scroll animations, case studies, and an AI chatbot.

## Design direction

- **Palette (light):** off-white background `#fafbfc`, soft surface `#e8ecf1`, slate text, electric blue `#3b82f6` accent + softer indigo for depth. Subtle gradient washes, glassy cards, generous whitespace.
- **Typography:** Space Grotesk (display/headings) + Inter (body) — modern tech feel, distinctive but professional.
- **Motion:** Framer Motion for scroll-reveal, staggered fades, marquee logo strip, subtle parallax on hero, magnetic hover on CTAs.
- **Components:** rounded-2xl cards, hairline borders, soft shadows, gradient orbs in hero, animated number counters for stats.
- **Responsive:** mobile-first, hamburger nav on small screens, fluid type scale.

## Pages (separate routes, each with own SEO meta)

1. **/ Home** — hero with animated headline + CTA, services snapshot, stats counters, featured case studies, tech-stack marquee, testimonials, CTA band.
2. **/services** — 7 service cards (custom web dev, automation, web apps, WordPress, Shopify/e-commerce, custom software, inventory management) with detail blocks, process timeline (Discover → Design → Build → Launch → Support).
3. **/projects** — case study grid; clicking opens a detail layout (challenge, solution, stack, outcome metrics). 4–6 fictional but realistic case studies across the service areas.
4. **/about** — company story, mission/values, team approach, why-choose-us.
5. **/contact** — contact form (stored to Cloud DB), email/phone/location, social links, FAQ accordion.

Shared header (logo + nav + "Start a project" CTA) and footer (links, services, contact, newsletter input) in `__root.tsx`.

## AI Chatbot

- Floating bottom-right launcher on every page, expands to a chat panel.
- Streams via Lovable AI Gateway (`google/gemini-3-flash-preview`) through a TanStack server route `/api/public/chat`.
- System prompt grounds it in AYK Solutions: services, process, pricing approach, how to book a consultation. Refuses off-topic gracefully.
- Markdown rendering, typing indicator, handles 429/402 with friendly toast.

## Backend (Lovable Cloud)

- Enable Lovable Cloud + Lovable AI Gateway (LOVABLE_API_KEY).
- One table: `contact_submissions` (id, name, email, company, message, created_at) with RLS allowing public insert only.
- Server route `src/routes/api/public/chat.ts` streams chat completions.
- Server function for contact form submission.

## Technical structure

```
src/routes/
  __root.tsx           (shell + header + footer + chatbot mount)
  index.tsx            (Home)
  services.tsx
  projects.tsx
  projects.$slug.tsx   (case study detail)
  about.tsx
  contact.tsx
  api/public/chat.ts   (streaming SSE)
src/components/
  layout/Header.tsx, Footer.tsx
  chat/ChatWidget.tsx
  sections/ (Hero, ServicesGrid, Stats, CaseStudies, Testimonials, CTA, ...)
  ui/ (shadcn)
src/data/
  services.ts, caseStudies.ts, testimonials.ts
src/lib/
  contact.functions.ts
```

Design tokens in `src/styles.css` (oklch), Tailwind utility classes only via semantic tokens. Framer Motion installed for animations.

## Out of scope (ask later if needed)

- Blog/CMS, careers page, pricing page, multi-language, admin dashboard for submissions.
