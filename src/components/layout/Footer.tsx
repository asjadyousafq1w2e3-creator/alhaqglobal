"use client";

import Link from "next/link";
import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="h-1 w-full bg-primary" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="max-w-sm md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground font-display font-bold">
              A
            </div>
            <div className="leading-none">
              <span className="block font-display text-lg font-semibold uppercase tracking-[0.18em]">
                AYK
              </span>
              <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.28em] text-background/60">
                Solutions
              </span>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-background/70">
            We design and build professional digital products for ambitious businesses, from
            high-performing websites to complex internal systems.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-background/70">
            <Mail size={14} /> hello@ayksolutions.com
          </div>
          <div className="mt-2 flex items-center gap-3 text-sm text-background/70">
            <MapPin size={14} /> Remote-first · Worldwide
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-background/50">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li>
              <Link href="/about" className="transition hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="transition hover:text-primary">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-background/50">
            Services
          </h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li>Custom Websites</li>
            <li>Web Applications</li>
            <li>Automation</li>
            <li>E-commerce</li>
            <li>Custom Software</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-background/50 sm:flex-row">
          <span>© {new Date().getFullYear()} AYK Solutions. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="transition hover:text-primary">
              <Linkedin size={16} />
            </a>
            <a href="#" aria-label="GitHub" className="transition hover:text-primary">
              <Github size={16} />
            </a>
            <a href="#" aria-label="Twitter" className="transition hover:text-primary">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
