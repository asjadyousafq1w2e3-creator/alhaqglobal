'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { services } from '@/data/services';

const process = [
  {
    step: '01',
    title: 'Discover',
    body: "We get deep into your business, users and goals — and define what success looks like.",
  },
  {
    step: '02',
    title: 'Design',
    body: "Wireframes, prototypes, and a high-fidelity design system you'll actually want to use.",
  },
  {
    step: '03',
    title: 'Build',
    body: 'Modern, scalable engineering with weekly demos and zero black boxes.',
  },
  {
    step: '04',
    title: 'Launch',
    body: 'We sweat the details — performance, SEO, accessibility, analytics — before you go live.',
  },
  {
    step: '05',
    title: 'Support',
    body: 'Ongoing partnership: monitoring, iterations, new features and roadmap planning.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
          <Reveal>
            <p className="text-sm font-medium text-primary">Services</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-display font-semibold tracking-tight max-w-3xl mx-auto">
              Everything you need to ship <span className="gradient-text">premium software.</span>
            </h1>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
              One team, end-to-end. Strategy, design, engineering, and long-term support — without
              the agency hand-offs.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.08}>
              <article className="h-full p-8 rounded-3xl bg-card border border-border/60 shadow-card hover:shadow-glow transition group">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow shrink-0">
                    <s.icon size={22} />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-display font-semibold">{s.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-muted-foreground">
                      <Check size={14} className="text-primary" /> {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">How we work</p>
            <h2 className="mt-2 text-3xl md:text-5xl font-display font-semibold tracking-tight">
              A clear, calm, weekly process.
            </h2>
            <p className="mt-4 text-muted-foreground">
              No surprises, no missed milestones. Just steady weekly progress with you in the loop.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08}>
              <div className="h-full p-6 rounded-2xl bg-card border border-border/60 shadow-soft">
                <div className="text-xs font-mono text-primary">{p.step}</div>
                <h3 className="mt-3 font-display font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl p-10 md:p-14 bg-foreground text-background flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold">
                Ready to scope your project?
              </h2>
              <p className="mt-2 text-background/70">Book a free 30-minute discovery call.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium"
            >
              Start a project <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
