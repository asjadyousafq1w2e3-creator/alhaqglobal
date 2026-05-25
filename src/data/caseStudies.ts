export const caseStudies = [
  {
    slug: "northwind-retail",
    client: "Northwind Retail",
    industry: "Multi-store retail",
    title: "Real-time inventory across 14 stores",
    summary:
      "A unified inventory platform that replaced 3 disconnected systems and cut stockouts by 62%.",
    cover: "bg-gradient-to-br from-white via-[#f4f4f4] to-[#f8d9da]",
    metrics: [
      { label: "Stockout reduction", value: "62%" },
      { label: "Time saved / week", value: "40h" },
      { label: "Locations synced", value: "14" },
    ],
    challenge:
      "Northwind ran three legacy systems with nightly batch syncs, causing constant overselling and tedious manual reconciliation across 14 stores.",
    solution:
      "We built a real-time inventory platform with barcode scanning, multi-warehouse transfers, and a dashboard for managers. Integrated with their existing POS and accounting tools.",
    outcome:
      "Stockouts dropped 62% in the first quarter. Managers reclaimed 40 hours per week previously spent on reconciliation.",
    stack: ["React", "TypeScript", "Postgres", "Real-time sync", "Barcode SDK"],
    services: ["Inventory Management", "Custom Software"],
  },
  {
    slug: "atlas-automation",
    client: "Atlas Logistics",
    industry: "Logistics",
    title: "Document automation that saved 30 hours/week",
    summary:
      "Replaced manual data entry with an OCR + workflow engine — 99.2% accuracy across 8,000 docs/month.",
    cover: "bg-gradient-to-br from-[#f4f4f4] via-white to-[#fdeaea]",
    metrics: [
      { label: "Hours saved / week", value: "30h" },
      { label: "Accuracy", value: "99.2%" },
      { label: "Docs / month", value: "8,000" },
    ],
    challenge:
      "Operations staff were re-typing data from PDF invoices and shipping documents into multiple systems — slow, expensive and error-prone.",
    solution:
      "An automated intake pipeline: OCR extraction, validation rules, human-in-the-loop review queue, and direct sync into their ERP.",
    outcome:
      "30 hours/week reclaimed, accuracy up to 99.2%, and a clear audit trail for every document.",
    stack: ["Python", "OCR pipeline", "Workflow engine", "ERP integration"],
    services: ["Automation", "Custom Software"],
  },
  {
    slug: "verde-shopify",
    client: "Verde Living",
    industry: "Home & garden e-commerce",
    title: "Headless Shopify rebuild — 3.4× faster",
    summary:
      "A custom storefront on top of Shopify boosted conversion by 38% and slashed load time to under 1s.",
    cover: "bg-gradient-to-br from-white via-[#f7f7f7] to-[#f5d5d6]",
    metrics: [
      { label: "Conversion lift", value: "+38%" },
      { label: "LCP", value: "0.9s" },
      { label: "Revenue / visitor", value: "+47%" },
    ],
    challenge:
      "Verde's existing theme was slow, hard to customise, and bleeding mobile conversions despite strong traffic.",
    solution:
      "Headless Shopify storefront with custom product pages, predictive search, cart drawer, and editorial CMS for content-led merchandising.",
    outcome:
      "Conversion up 38%, LCP down to 0.9s, and the marketing team ships landing pages without engineering.",
    stack: ["Shopify Hydrogen", "React", "Algolia", "Sanity CMS"],
    services: ["Shopify & E-commerce", "Custom Websites"],
  },
  {
    slug: "civic-portal",
    client: "Civic Connect",
    industry: "Public sector",
    title: "Citizen services portal with 220K users",
    summary: "A modern web app replacing paper forms — accessible, multilingual, and audit-ready.",
    cover: "bg-gradient-to-br from-white via-[#f4f4f4] to-[#fce6e7]",
    metrics: [
      { label: "Active users", value: "220K" },
      { label: "Forms digitised", value: "84" },
      { label: "WCAG", value: "AA" },
    ],
    challenge:
      "Citizens had to visit offices and fill paper forms. Staff entered them manually into legacy databases.",
    solution:
      "A multilingual, WCAG AA-compliant web portal with single sign-on, e-signatures, and a workflow engine for staff review.",
    outcome: "84 services digitised, 220K active users, and a 78% drop in in-person visits.",
    stack: ["React", "TypeScript", "Postgres", "SSO", "i18n"],
    services: ["Web Applications", "Custom Software"],
  },
  {
    slug: "harbor-wp",
    client: "Harbor Studio",
    industry: "Creative agency",
    title: "WordPress redesign with Awwwards-level polish",
    summary:
      "A custom WordPress theme that the team can edit themselves — without breaking the design.",
    cover: "bg-gradient-to-br from-[#f4f4f4] via-white to-[#f9dddd]",
    metrics: [
      { label: "PageSpeed", value: "98" },
      { label: "Bounce rate", value: "−41%" },
      { label: "Inbound leads", value: "+3.1×" },
    ],
    challenge:
      "Harbor's old WordPress site looked dated and was painful to update. The team avoided publishing because edits often broke layouts.",
    solution:
      "A custom block-based WordPress theme with locked components, design tokens, and an editorial guide. Heavy attention to typography and motion.",
    outcome: "PageSpeed score 98, bounce rate down 41%, and inbound leads tripled within 4 months.",
    stack: ["WordPress", "ACF Blocks", "GSAP", "Tailwind"],
    services: ["WordPress", "Custom Websites"],
  },
  {
    slug: "lumen-saas",
    client: "Lumen Analytics",
    industry: "SaaS analytics",
    title: "From prototype to product-market fit",
    summary:
      "An end-to-end SaaS build — auth, billing, dashboards, and integrations — shipped in 14 weeks.",
    cover: "bg-gradient-to-br from-white via-[#f5f5f5] to-[#f6d7d8]",
    metrics: [
      { label: "Time to MVP", value: "14w" },
      { label: "Customers", value: "120+" },
      { label: "Uptime", value: "99.98%" },
    ],
    challenge:
      "Lumen's founders had a strong hypothesis but no engineering team. They needed a production-ready SaaS, not a demo.",
    solution:
      "Full product build: auth, RBAC, billing, customer dashboards, integration framework, and an admin console — all on a scalable architecture.",
    outcome: "Shipped in 14 weeks. 120+ paying customers within 6 months. 99.98% uptime.",
    stack: ["React", "TypeScript", "Postgres", "Stripe", "Webhooks"],
    services: ["Web Applications", "Custom Software"],
  },
];

export type CaseStudy = (typeof caseStudies)[number];
