"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  type MotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Cloud } from "lucide-react";
import { useRef, useState } from "react";
import {
  siCloudflare,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siShopify,
  siStripe,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";
import heroResponsiveDevices from "@/assets/hero-responsive-devices.png";
import { Reveal } from "@/components/Reveal";
import ServiceFlipCard from "@/components/ui/flip-card";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

type TechLogo = {
  name: string;
  icon?: SimpleIcon;
  color?: string;
};

const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "8 yrs", label: "Building software" },
  { value: "99.98%", label: "Average uptime" },
  { value: "40+", label: "Happy clients" },
];

const techLogos: TechLogo[] = [
  { name: "React", icon: siReact },
  { name: "TypeScript", icon: siTypescript },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Postgres", icon: siPostgresql },
  { name: "AWS", color: "#FF9900" },
  { name: "Shopify", icon: siShopify },
  { name: "WordPress", icon: siWordpress },
  { name: "Tailwind", icon: siTailwindcss },
  { name: "Stripe", icon: siStripe },
  { name: "Supabase", icon: siSupabase },
  { name: "Cloudflare", icon: siCloudflare },
];
const marqueeTechLogos = [...techLogos, ...techLogos];

const heroSignals = [
  "Desktop and mobile first",
  "Fast, accessible interfaces",
  "Built for scale and handover",
];

const featuredCaseStudies = caseStudies.slice(0, 4);

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroCopyY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const heroPreviewY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const heroGridOpacity = useTransform(scrollYProgress, [0, 1], [0.65, 0.22]);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-border bg-background lg:min-h-[calc(100svh-5rem)]"
      >
        <div className="absolute inset-0 -z-20 bg-gradient-hero" />
        <motion.div
          style={{ opacity: heroGridOpacity }}
          className="absolute inset-0 -z-10 brand-grid [mask-image:linear-gradient(180deg,black,transparent_85%)]"
        />
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[38%] border-l border-border/70 bg-secondary/40 lg:block" />
        <div className="absolute right-0 top-0 -z-10 h-56 w-56 bg-primary/8 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 pt-6 pb-12 md:pt-8 md:pb-16 lg:flex lg:min-h-[calc(100svh-5rem)] lg:flex-col lg:justify-center">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center lg:gap-12">
            <motion.div style={{ y: heroCopyY }}>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="section-kicker"
              >
                AYK Solutions
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-5 max-w-5xl text-4xl font-display font-semibold tracking-tight md:text-5xl lg:text-[4.25rem]"
              >
                Professional websites, software, and automation{" "}
                <span className="gradient-text">built to perform.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
                className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg"
              >
                We help growing businesses launch better digital systems with thoughtful design,
                solid engineering, and a delivery process that stays calm and predictable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-[#b80309]"
                >
                  Start a project
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-foreground px-6 py-3 text-sm font-semibold transition hover:bg-foreground hover:text-background"
                >
                  View case studies
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-8 grid gap-3 sm:max-w-2xl sm:grid-cols-3"
              >
                {heroSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-2xl border border-border bg-background/90 px-4 py-3.5 text-sm font-medium text-foreground shadow-soft"
                  >
                    {signal}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div style={{ y: heroPreviewY }}>
              <Reveal delay={0.25}>
                <aside
                  data-cursor="focus"
                  className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-foreground p-4 text-background shadow-card sm:p-5"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(205,4,11,0.18),transparent_30%),linear-gradient(180deg,#161616_0%,#0f0f10_100%)]" />

                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="max-w-sm">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-primary/90">
                          Responsive software systems
                        </p>
                        <h2 className="mt-3 text-2xl font-display font-semibold text-white sm:text-[1.8rem]">
                          Designed for laptop and mobile from day one.
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-background/65">
                          Dashboards, client portals, and operations tools that stay clear and
                          usable across every screen size.
                        </p>
                      </div>
                      <span className="rounded-full border border-white/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-background/65">
                        Live preview
                      </span>
                    </div>

                    <div className="relative mt-6">
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="rounded-[2rem] border border-white/10 bg-[#171717] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.3)] sm:p-4"
                      >
                        <div className="screen-panel overflow-hidden rounded-[1.6rem] border border-black/10 p-3 sm:p-4">
                          <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                                Responsive product preview
                              </span>
                            </div>
                            <div className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-soft">
                              Web app + mobile app
                            </div>
                          </div>

                          <div className="overflow-hidden rounded-[1.35rem] border border-black/8 bg-white">
                            <Image
                              src={heroResponsiveDevices}
                              alt="Laptop and mobile phone showing a responsive business software dashboard."
                              className="block h-auto w-full object-cover"
                              priority
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </aside>
              </Reveal>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:mt-12 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="bg-background px-6 py-5">
                  <div className="text-2xl font-display font-semibold text-foreground md:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH LIST */}
      <section className="border-b border-border bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Reveal>
            <div className="max-w-2xl">
              <p className="section-kicker">Platforms and systems</p>
              <h2 className="mt-4 text-3xl font-display font-semibold tracking-tight md:text-4xl">
                A modern stack, chosen to fit the work.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                We work comfortably across modern product stacks, e-commerce platforms, and business
                integrations.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="overflow-hidden border-y border-border/80 bg-white/45 py-5 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max animate-marquee-reverse items-center gap-2 pr-2 hover:[animation-play-state:paused]">
              {marqueeTechLogos.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex shrink-0 items-center gap-3 px-5 py-2"
                  aria-hidden={index >= techLogos.length}
                >
                  <BrandIcon icon={tech.icon} color={tech.color} name={tech.name} />
                  <span className="whitespace-nowrap text-sm font-semibold text-foreground">
                    {tech.name}
                  </span>
                  <span className="ml-1 h-1.5 w-1.5 rounded-full bg-primary/45" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="section-kicker">Services</p>
              <h2 className="mt-4 text-3xl font-display font-semibold tracking-tight md:text-5xl">
                Digital work that still feels solid after launch.
              </h2>
              <p className="mt-5 max-w-md text-base leading-8 text-muted-foreground">
                From marketing websites to internal operations software, we design and build tools
                that look sharp, load fast, and stay maintainable.
              </p>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
              >
                Explore all services <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.08}>
                <ServiceFlipCard
                  index={i}
                  title={s.title}
                  subtitle={s.short}
                  description={s.description}
                  features={s.bullets}
                  icon={s.icon}
                  color="#CD040B"
                  cta={
                    <Link
                      href="/services"
                      className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                    >
                      Learn more
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="border-y border-border bg-secondary">
        <MobileCaseStudyStack studies={featuredCaseStudies} />
        <DesktopCaseStudyStack studies={featuredCaseStudies} />
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="section-kicker">Client perspective</p>
            <h2 className="mt-4 text-3xl font-display font-semibold tracking-tight md:text-5xl">
              Trusted because the work is clear, useful, and dependable.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between rounded-[1.75rem] border border-border bg-card p-8 shadow-soft">
                <div>
                  <div className="h-1 w-16 bg-primary" />
                  <blockquote className="mt-6 text-sm leading-8 text-foreground">
                    "{t.quote}"
                  </blockquote>
                </div>
                <figcaption className="mt-8 border-t border-border pt-5 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="mt-1 text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <div className="overflow-hidden rounded-[2.25rem] bg-foreground text-background shadow-card">
            <div className="grid gap-10 px-8 py-10 md:px-12 md:py-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-background/70">
                  <span className="h-px w-10 bg-background" />
                  Start a conversation
                </div>
                <h2 className="mt-4 text-3xl font-display font-semibold tracking-tight md:text-5xl">
                  Have a project in mind?
                </h2>
                <p className="mt-5 max-w-lg text-base leading-8 text-background/72">
                  Tell us what you need to build. We'll reply within one business day with next
                  steps and a practical direction.
                </p>
              </div>

              <div>
                <ul className="grid gap-3 text-sm text-background/78">
                  {[
                    "Free 30-minute discovery call",
                    "Clear estimate and realistic timeline",
                    "Straightforward advice, no pressure",
                  ].map((x) => (
                    <li key={x} className="flex items-center gap-3">
                      <Check size={16} className="text-primary" /> {x}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-[#b80309]"
                >
                  Start a project <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function BrandIcon({ icon, color }: TechLogo) {
  if (!icon) {
    return <Cloud aria-hidden="true" className="h-[1.05rem] w-[1.05rem]" style={{ color }} />;
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[1.05rem] w-[1.05rem]"
      style={{ color: color ?? `#${icon.hex}` }}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}

function MobileCaseStudyStack({ studies }: { studies: CaseStudy[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:hidden"
      style={{ height: `calc(${studies.length} * 52svh + 16rem)` }}
    >
      <div className="sticky top-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="section-kicker">Selected work</p>
            <h2 className="mt-4 text-3xl font-display font-semibold tracking-tight">
              Outcomes our clients can measure.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Each engagement is built around a business problem first, then designed and engineered
              to solve it cleanly.
            </p>
          </div>
        </div>

        <Link
          href="/projects"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
        >
          All case studies <ArrowRight size={15} />
        </Link>

        <div className="relative mt-7 h-[25.5rem] overflow-visible sm:h-[26rem]">
          {studies.map((study, index) => (
            <StackedCaseStudyDeckCard
              key={study.slug}
              study={study}
              index={index}
              total={studies.length}
              progress={scrollYProgress}
              reducedMotion={prefersReducedMotion}
              mobile
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DesktopCaseStudyStack({ studies }: { studies: CaseStudy[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="mx-auto hidden max-w-7xl grid-cols-[minmax(280px,0.38fr)_minmax(0,0.62fr)] gap-12 px-6 py-24 lg:grid"
      style={{ height: `calc(${studies.length} * 56svh + 10rem)` }}
    >
      <div className="sticky top-28 h-fit self-start">
        <div className="max-w-md">
          <p className="section-kicker">Selected work</p>
          <h2 className="mt-4 text-4xl font-display font-semibold tracking-tight xl:text-5xl">
            Outcomes our clients can measure.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Scroll through a small set of representative engagements. Each panel focuses on the
            business problem, the system we built, and the result the client could actually measure
            after launch.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          <div className="rounded-[1.75rem] border border-border bg-white/80 p-5 shadow-soft">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Delivery focus
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground">
              Each new card comes over the previous one at full opacity, so the stack stays clean,
              legible, and intentional while you scroll.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
          >
            All case studies <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="sticky top-28 relative h-[clamp(31rem,66vh,36rem)] overflow-visible">
        {studies.map((study, index) => (
          <StackedCaseStudyDeckCard
            key={study.slug}
            study={study}
            index={index}
            total={studies.length}
            progress={scrollYProgress}
            reducedMotion={prefersReducedMotion}
          />
        ))}
      </div>
    </section>
  );
}

function CaseStudyStoryCard({
  study,
  index,
  mobile = false,
  interactive = true,
}: {
  study: CaseStudy;
  index: number;
  mobile?: boolean;
  interactive?: boolean;
}) {
  return (
    <Link
      href={`/projects/${study.slug}`}
      data-cursor={mobile ? undefined : "focus"}
      className={[
        "group overflow-hidden rounded-[1.9rem] border border-border bg-card shadow-card",
        interactive ? "pointer-events-auto" : "pointer-events-none",
        mobile
          ? "flex h-full w-full flex-col"
          : "grid h-[clamp(31rem,66vh,36rem)] w-full max-w-[54rem] grid-cols-[minmax(0,1.08fr)_minmax(300px,0.92fr)]",
      ].join(" ")}
    >
      <CaseStudyVisual study={study} index={index} compact={mobile} />

      <div
        className={["flex flex-1 flex-col justify-between", mobile ? "p-5" : "p-8 xl:p-10"].join(
          " ",
        )}
      >
        <div>
          {!mobile && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Case study 0{index + 1}
            </p>
          )}

          <h3
            className={[
              "font-display font-semibold leading-tight text-foreground",
              mobile ? "text-[1.75rem]" : "text-[2rem] xl:text-[2.45rem]",
              mobile ? "" : "mt-4 max-w-md",
            ].join(" ")}
          >
            {study.title}
          </h3>

          {!mobile && (
            <p className="mt-4 max-w-md overflow-hidden text-sm leading-7 text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
              {study.summary}
            </p>
          )}
        </div>

        <div
          className={[
            "border-t border-border pt-4",
            mobile ? "mt-5 flex justify-end" : "mt-6 flex",
          ].join(" ")}
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition group-hover:text-primary">
            Learn more <ArrowUpRight size={15} />
          </div>
        </div>
      </div>
    </Link>
  );
}

function StackedCaseStudyDeckCard({
  study,
  index,
  total,
  progress,
  reducedMotion,
  mobile = false,
}: {
  study: CaseStudy;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reducedMotion: boolean;
  mobile?: boolean;
}) {
  const [interactive, setInteractive] = useState(index === 0);
  const step = total > 1 ? 1 / (total - 1) : 1;
  const center = step * index;
  const prev = Math.max(0, center - step);
  const next = Math.min(1, center + step);

  const entryY = mobile ? "122%" : "116%";
  const restY = mobile ? "2.5%" : "2%";
  const exitScale = mobile ? 0.988 : 0.982;
  const entryRotate = mobile ? 7 : 10;
  const revealPoint = Math.min(center, prev + step * 0.18);

  const y = useTransform(
    progress,
    [prev, center, next],
    reducedMotion ? ["0%", "0%", "0%"] : [index === 0 ? "0%" : entryY, "0%", restY],
    { clamp: true },
  );
  const scale = useTransform(
    progress,
    [prev, center, next],
    reducedMotion ? [1, 1, 1] : [1, 1, exitScale],
    { clamp: true },
  );
  const rotate = useTransform(
    progress,
    [prev, center, next],
    reducedMotion ? [0, 0, 0] : [index === 0 ? 0 : entryRotate, 0, 0],
    { clamp: true },
  );
  const opacity = useTransform(
    progress,
    [prev, revealPoint, center, next],
    reducedMotion ? [1, 1, 1, 1] : index === 0 ? [1, 1, 1, 1] : [0, 1, 1, 1],
    { clamp: true },
  );

  useMotionValueEvent(progress, "change", (latest) => {
    const lowerBound = Math.max(0, center - step * 0.45);
    const upperBound = index === total - 1 ? 1.01 : center + step * 0.45;
    setInteractive(latest >= lowerBound && latest < upperBound);
  });

  return (
    <motion.div
      style={{ y, scale, rotate, opacity, zIndex: index + 1 }}
      className="absolute inset-0 origin-bottom will-change-transform"
    >
      <CaseStudyStoryCard study={study} index={index} mobile={mobile} interactive={interactive} />
    </motion.div>
  );
}

function CaseStudyVisual({
  study,
  index,
  compact = false,
}: {
  study: CaseStudy;
  index: number;
  compact?: boolean;
}) {
  return (
    <div
      className={[
        `relative overflow-hidden border-border ${study.cover}`,
        compact ? "h-56 border-b" : "h-full border-r",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.82),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.74))]" />

      <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {study.industry}
          </p>
          <p className="mt-1 text-sm font-semibold text-foreground">{study.client}</p>
        </div>

        <span className="rounded-full border border-black/10 bg-white/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/80">
          0{index + 1}
        </span>
      </div>

      <div className={compact ? "absolute inset-x-4 bottom-4" : "absolute inset-x-6 bottom-6"}>
        <div
          className={[
            "screen-panel border border-black/10",
            compact ? "rounded-[1.25rem] p-3.5" : "rounded-[1.6rem] p-5",
          ].join(" ")}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Software preview
              </span>
            </div>
            <div className="h-2 w-14 rounded-full bg-black/8" />
          </div>

          <div className="mt-4 grid gap-3">
            <div className="grid grid-cols-[1.15fr_0.85fr] gap-3">
              <div className="rounded-[1rem] bg-white/94 p-3">
                <div className="h-2.5 w-20 rounded-full bg-primary/18" />
                <div className="mt-3 h-2.5 w-full rounded-full bg-black/8" />
                <div className="mt-2 h-2.5 w-3/4 rounded-full bg-black/8" />
              </div>
              <div className="rounded-[1rem] bg-white/90 p-3">
                <div className="h-10 rounded-[0.9rem] bg-gradient-to-br from-primary/16 via-white to-primary/8" />
                <div className="mt-3 h-2.5 w-12 rounded-full bg-black/8" />
              </div>
            </div>

            <div className="rounded-[1rem] bg-white/92 p-3">
              <div className="flex items-end gap-2">
                <span className="h-8 w-3 rounded-full bg-primary/25" />
                <span className="h-12 w-3 rounded-full bg-primary/35" />
                <span className="h-6 w-3 rounded-full bg-black/10" />
                <span className="h-10 w-3 rounded-full bg-primary/22" />
                <span className="h-14 w-3 rounded-full bg-primary/42" />
                <span className="h-7 w-3 rounded-full bg-black/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
