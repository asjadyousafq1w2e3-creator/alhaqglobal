"use client";

import Link from "next/link";
import { ArrowRight, Heart, Target, Sparkles, Shield } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const values = [
  {
    icon: Heart,
    title: "Craft first",
    body: "Beautiful code, beautiful interfaces. We sweat the details others skip.",
  },
  {
    icon: Target,
    title: "Outcomes over output",
    body: "Pretty doesn't pay rent. We measure success by your business metrics.",
  },
  {
    icon: Sparkles,
    title: "Calm communication",
    body: "Weekly demos, no surprises, no jargon. You always know what's next.",
  },
  {
    icon: Shield,
    title: "Built to last",
    body: "Maintainable architectures and clear documentation. Future-you will thank us.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="text-sm font-medium text-primary">About AYK Solutions</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-display font-semibold tracking-tight max-w-3xl">
              A small studio that ships <span className="gradient-text">serious software.</span>
            </h1>
            <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
              We're a senior, remote-first team building premium websites, web applications and
              custom software for businesses that care about quality.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 space-y-12">
        <Reveal>
          <div>
            <h2 className="text-3xl font-display font-semibold">Our story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              AYK Solutions started with a simple frustration: too many software projects ship late,
              over budget, and underwhelming. We knew we could do better — by working closely with a
              small number of clients we believe in, and treating their software like it's our own.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              Today, we're a tight-knit team of engineers and designers helping startups, retailers
              and operators ship products that customers love. From a one-page marketing site to a
              full SaaS platform, we bring the same level of craft and care.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <h2 className="text-3xl font-display font-semibold">What we believe</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-card border border-border/60 shadow-soft h-full">
                    <div className="h-10 w-10 rounded-xl bg-secondary text-primary flex items-center justify-center">
                      <v.icon size={18} />
                    </div>
                    <h3 className="mt-4 font-display font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl p-10 md:p-14 bg-gradient-primary text-primary-foreground shadow-glow flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold">
                Let's build something great together.
              </h2>
              <p className="mt-2 text-primary-foreground/90">
                Tell us about your project — we'd love to hear from you.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
