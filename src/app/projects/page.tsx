'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { caseStudies } from '@/data/caseStudies';

export default function ProjectsPage() {
  return (
    <>
      <section className="relative bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="text-sm font-medium text-primary">Case studies</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-display font-semibold tracking-tight max-w-3xl">
              Work we're <span className="gradient-text">proud of.</span>
            </h1>
            <p className="mt-5 text-muted-foreground max-w-2xl">
              A selection of recent projects across SaaS, e-commerce, retail, logistics and the
              public sector.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 0.1}>
              <Link
                href={`/projects/${c.slug}`}
                className="group block rounded-3xl overflow-hidden border border-border/60 bg-card shadow-card hover:shadow-glow transition"
              >
                <div className={`aspect-[16/10] ${c.cover} relative`}>
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2">
                      {c.services.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-card/80 backdrop-blur text-foreground/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {c.industry}
                      </p>
                      <h2 className="mt-1 text-2xl md:text-3xl font-display font-semibold">
                        {c.client}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-display font-medium">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.summary}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-6">
                      {c.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <div className="text-xl font-display font-semibold text-primary">
                            {m.value}
                          </div>
                          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:gap-2 transition-all">
                      Read case study <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
