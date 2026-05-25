import {
  Code2,
  Workflow,
  LayoutDashboard,
  Globe,
  ShoppingBag,
  Cpu,
  PackageSearch,
} from "lucide-react";

export const services = [
  {
    slug: "custom-websites",
    icon: Code2,
    title: "Custom Website Development",
    short: "Conversion-focused, lightning-fast websites tailored to your brand.",
    description:
      "Hand-crafted websites built with modern frameworks. Pixel-perfect design, SEO-optimised, and built to scale with your business.",
    bullets: ["Bespoke UI/UX design", "Blazing-fast performance", "SEO & analytics ready"],
  },
  {
    slug: "automation",
    icon: Workflow,
    title: "Business Process Automation",
    short: "Eliminate repetitive work with smart automation pipelines.",
    description:
      "We map your daily workflows and replace manual steps with reliable, observable automations — saving hours every week.",
    bullets: ["Zapier / Make / n8n", "Custom scripts & APIs", "Internal tools"],
  },
  {
    slug: "web-apps",
    icon: LayoutDashboard,
    title: "Web Applications",
    short: "Powerful SaaS-grade web apps built for your team and customers.",
    description:
      "Full-stack web applications with secure auth, real-time data, role-based access, and elegant interfaces.",
    bullets: ["React + TypeScript", "Real-time backends", "Role-based access"],
  },
  {
    slug: "wordpress",
    icon: Globe,
    title: "WordPress Websites",
    short: "Premium WordPress sites that are fast, secure and easy to manage.",
    description:
      "From custom themes to headless WordPress — we deliver maintainable sites your team can update with confidence.",
    bullets: ["Custom themes", "WooCommerce", "Speed & security hardening"],
  },
  {
    slug: "shopify-ecommerce",
    icon: ShoppingBag,
    title: "Shopify & E-commerce",
    short: "Storefronts that convert browsers into loyal customers.",
    description:
      "Beautifully crafted Shopify themes, headless commerce builds, and custom checkout experiences that scale.",
    bullets: ["Custom Shopify themes", "Headless commerce", "Conversion optimisation"],
  },
  {
    slug: "custom-software",
    icon: Cpu,
    title: "Custom Software Solutions",
    short: "Tailored software that fits your business — not the other way around.",
    description:
      "End-to-end product engineering for complex domains. Discovery, architecture, build, and long-term support.",
    bullets: ["Cloud-native architecture", "Secure by design", "Maintainable codebase"],
  },
  {
    slug: "inventory",
    icon: PackageSearch,
    title: "Inventory Management",
    short: "Real-time inventory control across every channel and warehouse.",
    description:
      "Stock tracking, barcode scanning, supplier management, multi-location sync, and analytics in one platform.",
    bullets: ["Multi-warehouse", "Barcode / SKU support", "Live dashboards"],
  },
];

export type Service = (typeof services)[number];
