'use client';

import { useState } from 'react';
import { Mail, MapPin, Clock, Loader2, CheckCircle2, type LucideIcon } from 'lucide-react';
import { toast } from 'sonner';
import { Reveal } from '@/components/Reveal';

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Marketing sites: 3-6 weeks. Web apps / SaaS MVPs: 10-16 weeks. Larger platforms: 12 weeks and up. We will give you a clear estimate after the discovery call.',
  },
  {
    q: 'What does it cost?',
    a: 'Every project is scoped individually based on goals, features and timeline. After our free discovery call we will share a clear estimate and proposal.',
  },
  {
    q: 'Do you work with existing teams?',
    a: 'Yes. We regularly embed with in-house teams, hand off documentation, or operate independently - whatever suits your setup.',
  },
  {
    q: 'Where are you based?',
    a: 'We are remote-first with team members worldwide. We work async and overlap with your timezone when needed.',
  },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: String(fd.get('name') || ''),
          email: String(fd.get('email') || ''),
          company: String(fd.get('company') || ''),
          service: String(fd.get('service') || ''),
          message: String(fd.get('message') || ''),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setDone(true);
      toast.success('Message sent! We will be in touch within one business day.');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="text-sm font-medium text-primary">Contact</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-display font-semibold tracking-tight max-w-3xl">
              Tell us about your <span className="gradient-text">project.</span>
            </h1>
            <p className="mt-5 text-muted-foreground max-w-2xl text-lg">
              We reply within one business day with next steps and a rough plan. No obligations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid gap-10 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <form
            onSubmit={handle}
            className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-card space-y-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Your name" name="name" required placeholder="Jane Doe" />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
              />
              <Field label="Company" name="company" placeholder="Acme Co." />
              <SelectField label="Service interested in" name="service" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Tell us about your project</label>
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={2000}
                rows={6}
                placeholder="What are you trying to build? Any deadlines, budget range or constraints we should know about?"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading || done}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3 text-sm font-medium shadow-glow disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : done ? (
                <>
                  <CheckCircle2 size={16} /> Message sent
                </>
              ) : (
                'Send message ->'
              )}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="space-y-6">
            <InfoCard icon={Mail} title="Email" body="hello@ayksolutions.com" />
            <InfoCard icon={MapPin} title="Location" body="Remote-first · Worldwide" />
            <InfoCard icon={Clock} title="Response time" body="Within 1 business day" />
          </aside>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-32">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight">
            Frequently asked
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card shadow-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6 open:bg-secondary/30 transition">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <span className="font-display font-medium">{f.q}</span>
                <span className="text-primary text-lg group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 transition"
      />
    </div>
  );
}

function SelectField({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20 transition"
      >
        <option value="">Select...</option>
        <option>Custom Website</option>
        <option>Web Application</option>
        <option>Automation</option>
        <option>WordPress</option>
        <option>Shopify / E-commerce</option>
        <option>Custom Software</option>
        <option>Inventory Management</option>
        <option>Other</option>
      </select>
    </div>
  );
}

function InfoCard({ icon: Icon, title, body }: { icon: LucideIcon; title: string; body: string }) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
      <div className="h-10 w-10 rounded-xl bg-secondary text-primary flex items-center justify-center">
        <Icon size={18} />
      </div>
      <h3 className="mt-4 font-display font-semibold text-sm">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
