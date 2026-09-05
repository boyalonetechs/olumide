"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { EASE } from "@/lib/anim";
import { DashboardMock } from "@/components/dashboard-mock";
import type { ChartVariant } from "@/components/dashboard-mock";

/** Chart style per project — keeps each tile personality without extra images. */
const PROJECT_VISUALS: Record<string, { variant: ChartVariant; title: string }> = {
  "001": { variant: "trend", title: "Sales · Weighted Forecast" },
  "002": { variant: "donut", title: "Lending · Portfolio Mix" },
  "003": { variant: "bars", title: "Trips · Hourly Demand" },
  "004": { variant: "donut", title: "Churn · LTV Segments" },
  "005": { variant: "bars", title: "Margin · By Product" },
  "006": { variant: "trend", title: "Payments · Cash Flow" },
  "007": { variant: "kpis", title: "Workflow · Automations" },
  "008": { variant: "bars", title: "Retail · Region Mix" },
};

/**
 * Portfolio showcase — asymmetric editorial layout. First two projects
 * get large feature cards (alternating sides) with full dashboard mocks;
 * the rest become tall list rows with a mini visual thumbnail, tools and
 * an arrow that slides across on hover.
 */
export function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="work" className="scroll-mt-24 border-b border-line">
      <div className="shell py-24 md:py-32">
        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                <span className="text-accent">04</span> / Featured Work
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight md:text-[6.5rem]">
                <span className="text-outline">Projects</span>
                <span className="text-accent">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="flex items-baseline gap-2 pb-2 font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Selected work
              <span className="text-outline text-lg font-bold">0{PROJECTS.length}</span>
            </p>
          </Reveal>
        </div>

        {/* Big feature card — project 001 */}
        <Reveal delay={0.05}>
          <article className="group mt-14 grid cursor-pointer items-center gap-10 overflow-hidden rounded-3xl border border-line bg-card p-6 transition-colors duration-300 hover:bg-surface md:grid-cols-2 md:p-12">
            <div className="order-2 md:order-1">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted">
                <span className="rounded-full border border-line px-3 py-1">
                  {featured.category}
                </span>
                {featured.tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <h3 className="mt-6 font-display text-3xl font-extrabold tracking-tight md:text-5xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
                {featured.desc}
              </p>
              <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-muted">
                <span className="inline-block h-px w-8 bg-accent" />
                {featured.outcome}
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-full border border-line px-6 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-foreground"
              >
                View case study
                <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="order-1 transition-transform duration-500 md:order-2 md:group-hover:-rotate-1 md:group-hover:scale-[1.02]"
            >
              <DashboardMock
                variant={PROJECT_VISUALS[featured.index].variant}
                title={PROJECT_VISUALS[featured.index].title}
              />
            </motion.div>
          </article>
        </Reveal>

        {/* List rows — rest of the projects */}
        <div className="mt-6 border-t border-line">
          {rest.map((p, i) => {
            const visual = PROJECT_VISUALS[p.index];
            return (
              <Reveal key={p.index} delay={i * 0.04}>
                <article className="group grid cursor-pointer grid-cols-1 items-center gap-6 border-b border-line py-8 transition-colors duration-300 hover:bg-surface/40 md:grid-cols-[88px_1fr_auto] md:gap-8 md:px-4">
                  <span className="font-mono text-xs text-muted">
                    <span className="text-accent">{p.index}</span>
                  </span>
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 md:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                        {p.desc}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tools.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted"
                          >
                            {t}
                          </span>
                        ))}
                        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                          {p.category}
                        </span>
                      </div>
                    </div>
                    <div className="hidden w-36 shrink-0 py-1 transition-transform duration-500 group-hover:-translate-y-1 lg:block">
                      <DashboardMock variant={visual.variant} className="!rounded-xl" />
                    </div>
                  </div>
                  <span className="text-3xl text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    ↗
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}