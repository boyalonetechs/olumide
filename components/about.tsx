"use client";

import { Reveal } from "@/components/reveal";

const EXPERTISE = [
  "Sales & Revenue Analytics",
  "Financial Analytics",
  "E-commerce Analytics",
  "Operations Analytics",
  "Customer Analytics",
  "Business Intelligence",
  "Data Visualization",
  "Dashboard Development",
  "Data Storytelling",
  "Process Automation",
];

/**
 * About — asymmetric editorial layout. Sticky index/label on the left,
 * oversized story heading + long-form bio on the right, expertise grid
 * and the personal mission statement as a highlight quote card.
 */
export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line">
      <div className="shell grid gap-12 py-24 md:py-32 lg:grid-cols-12">
        {/* Sticky section label */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                <span className="text-accent">01</span> / About
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
                The story
                <br />
                behind <span className="text-outline">the data</span>
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Data Analyst", "Consultant", "BI Analyst", "Trainer"].map((r) => (
                  <span
                    key={r}
                    className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Editorial content */}
        <div className="lg:col-span-8">
          <Reveal>
            <p className="max-w-2xl text-xl leading-relaxed text-muted md:text-2xl">
              I&apos;m <span className="text-foreground">Olumide Faleye</span>, a Data
              Analyst and Data Consultant passionate about helping businesses transform
              data into smarter decisions.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 grid gap-6 border-l border-line pl-6 text-base leading-relaxed text-muted md:grid-cols-2 md:gap-8">
              <p>
                My background is Physics — so patterns, critical thinking, and complex
                problems are second nature. That curiosity led me into data analytics,
                where analytical thinking meets business strategy to improve performance
                and uncover growth opportunities.
              </p>
              <p>
                I specialize in sales, e-commerce, finance, customer behavior, and
                operations — building interactive dashboards and reports that help
                decision-makers see exactly what&apos;s happening and what to do next.
              </p>
            </div>
          </Reveal>

          {/* Expertise grid */}
          <Reveal delay={0.16}>
            <div className="mt-12">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                — Expertise
              </p>
              <div className="grid grid-cols-1 border-l border-line sm:grid-cols-2">
                {EXPERTISE.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-line py-3.5 pr-4 sm:odd:pr-8"
                  >
                    <span className="font-mono text-[10px] text-accent">
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Mission quote */}
          <Reveal delay={0.1}>
            <figure className="relative mt-14 overflow-hidden rounded-3xl border border-line bg-card p-8 md:p-12">
              <div aria-hidden className="absolute inset-0 bg-grid opacity-[0.25] [background-size:40px_40px]" />
              <blockquote className="relative max-w-2xl font-display text-2xl font-bold leading-snug tracking-tight md:text-[2rem]">
                “Data is more than numbers — it tells the story of a business. My role is
                to uncover that story and turn it into decisions that drive growth.”
              </blockquote>
              <figcaption className="relative mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                <span className="h-px w-8 bg-accent" />
                Olumide Faleye — Founder, Mides Analytics
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 text-base leading-relaxed text-muted">
              Beyond consulting, I&apos;m deeply committed to education. Through{" "}
              <span className="text-foreground">Mides Analytics</span> I train students,
              professionals, and organizations in Data Analytics and Digital Literacy —
              helping people build practical skills that create real career and business
              opportunities.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}