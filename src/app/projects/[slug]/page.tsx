"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/data/caseStudies";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-3xl font-display font-semibold">Case study not found</h1>
        <Link href="/projects" className="mt-6 inline-flex items-center gap-2 text-primary">
          <ArrowLeft size={14} /> Back to projects
        </Link>
      </div>
    );
  }

  const idx = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <section className={`relative ${study.cover}`}>
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft size={14} /> All projects
          </Link>
          <Reveal>
            <p className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
              {study.industry}
            </p>
            <h1 className="mt-2 text-4xl md:text-6xl font-display font-semibold tracking-tight">
              {study.client}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-foreground/80 max-w-3xl">{study.title}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 -mt-10">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 md:p-8 rounded-3xl bg-card border border-border shadow-card">
            {study.metrics.map((m: { label: string; value: string }) => (
              <div key={m.label}>
                <div className="text-3xl md:text-4xl font-display font-semibold gradient-text">
                  {m.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 space-y-14">
        {[
          { h: "The challenge", b: study.challenge },
          { h: "Our solution", b: study.solution },
          { h: "The outcome", b: study.outcome },
        ].map((s) => (
          <Reveal key={s.h}>
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-semibold">{s.h}</h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                {s.b}
              </p>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.stack.map((t: string) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6 p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-glow transition"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Next case study
              </p>
              <h3 className="mt-2 text-2xl font-display font-semibold">
                {next.client} — {next.title}
              </h3>
            </div>
            <ArrowRight className="shrink-0 group-hover:translate-x-1 transition" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
