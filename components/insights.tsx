"use client";

import { INSIGHTS } from "@/lib/data";
import { Reveal } from "@/components/reveal";

/**
 * Insights — three editorial cards with a colored gradient mark, category
 * tag, read time and hover arrow. Links defer to "#contact" so the cards
 * feel complete without inventing blog URLs.
 */
export function Insights() {
  return (
    <section id="insights" className="scroll-mt-24 border-b border-line">
      <div className="shell py-24 md:py-32">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                <span className="text-accent">05</span> / Insights
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight md:text-7xl">
                Notes from
                <br />
                <span className="text-outline">the field</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-xs pb-2 text-sm leading-relaxed text-muted">
              Practical thinking on dashboards, careers in data, and automation —
              straight from real client work.
            </p>
          </Reveal>
        </div>

        {/* Editorial cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {INSIGHTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1} className="h-full">
              <a
                href="#contact"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card transition-colors duration-300 hover:bg-surface"
              >
                {/* Gradient art swatch */}
                <div style={{ minHeight: "170px" }} className={`bg-gradient-to-br ${post.gradient}`}>
                  <div className="relative h-full w-full p-5">
                    <span className="absolute right-4 top-4 font-display text-6xl font-extrabold text-white/70 md:text-7xl">
                      0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    <span className="rounded-full border border-line px-2.5 py-1">
                      {post.category}
                    </span>
                    <span>· {post.readTime}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-accent md:text-2xl">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                      Read article
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-accent transition-all duration-300 group-hover:rotate-45 group-hover:border-accent">
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}