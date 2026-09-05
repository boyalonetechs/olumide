"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { EASE } from "@/lib/anim";

const ROLES = [
  {
    tag: "Analytics",
    title: "Data Analyst",
    org: "Independent — Remote",
    status: "Present",
    desc: "Turning raw business data into dashboards, reports, and decisions across sales, finance, e-commerce, customer, and operations.",
  },
  {
    tag: "Consulting",
    title: "Data Consultant & BI Analyst",
    org: "Client Projects",
    status: "Present",
    desc: "Designing BI roadmaps, building automated reporting systems, and guiding teams on what to measure — and why it matters.",
  },
  {
    tag: "Education",
    title: "Data Analytics Trainer",
    org: "Mides Analytics",
    status: "Present",
    desc: "Training students, professionals, and organizations in Data Analytics & Digital Literacy — real skills that open doors.",
  },
];

const TOOLBOX = [
  { name: "SQL", level: 95 },
  { name: "Power BI", level: 95 },
  { name: "Excel", level: 94 },
  { name: "Google Sheets", level: 92 },
  { name: "Python", level: 88 },
  { name: "Tableau", level: 84 },
];

/**
 * Experience — oversized list rows for the career snapshot (with hover
 * arrow + category pill), followed by an animated "toolbox" proficiency
 * band that fills on scroll.
 */
export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-line">
      <div className="shell py-24 md:py-32">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            <span className="text-accent">03</span> / Experience
          </p>
        </Reveal>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight md:text-7xl">
              Where I&apos;ve
              <br />
              <span className="text-outline">added value</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-xs pb-2 text-sm leading-relaxed text-muted">
              Three lanes, one mission: making data work harder for people and
              businesses.
            </p>
          </Reveal>
        </div>

        {/* Role rows */}
        <div className="mt-14 border-t border-line">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <div className="group grid grid-cols-1 items-center gap-4 border-b border-line py-8 transition-colors duration-300 hover:bg-surface/40 md:grid-cols-[60px_1fr_auto] md:gap-8 md:px-4">
                <span className="font-mono text-xs text-muted">
                  /0{i + 1}·<span className="text-accent">{r.tag}</span>
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-4xl">
                    {r.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {r.org}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {r.desc}
                  </p>
                </div>
                <div className="flex items-center gap-4 md:flex-col md:items-end">
                  <span className="flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                    {r.status}
                  </span>
                  <span className="text-2xl text-accent opacity-0 transition-all duration-300 group-hover:opacity-100 md:text-3xl">
                    ↗
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Toolbox proficiency band */}
        <div className="mt-20 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                — The toolbox
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Tools I reach
                <br />
                for daily<span className="text-accent">.</span>
              </h3>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6">
              {TOOLBOX.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.05}>
                  <div className="flex items-center gap-4">
                    <span className="w-40 shrink-0 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                      {t.name}
                    </span>
                    <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
                      <motion.div
                        className="absolute inset-y-0 left-0 rounded-full bg-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${t.level}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
                      />
                    </div>
                    <span className="w-12 shrink-0 text-right font-display text-sm font-bold">
                      {t.level}%
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}