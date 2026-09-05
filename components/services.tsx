"use client";

import { SERVICES } from "@/lib/data";
import { Reveal } from "@/components/reveal";

/**
 * Services — a bordered card grid where each card carries an index,
 * a refined one-liner, and an arrow that slides in on hover alongside
 * an accent corner tick.
 */
export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-b border-line">
      <div className="shell py-24 md:py-32">
        {/* Section eyebrow */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
                <span className="text-accent">02</span> / Services
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight md:text-7xl">
                What I
                <br />
                <span className="text-outline">deliver</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-xs pb-2 text-sm leading-relaxed text-muted">
              Ten ways I help teams stop guessing and start deciding — from one-off
              analyses to platforms and training.
            </p>
          </Reveal>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.08} className="h-full">
              <article className="group relative flex h-full flex-col justify-between gap-8 bg-card p-6 transition-colors duration-300 hover:bg-surface md:p-8">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted">{s.id}</span>
                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-accent opacity-0 transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100"
                  >
                    ↗
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
                <span className="h-px w-full bg-line transition-all duration-500 group-hover:bg-accent" />
              </article>
            </Reveal>
          ))}

          {/* Merits footer tile */}
          <Reveal delay={0.16} className="h-full">
            <div className="flex h-full flex-col justify-between gap-8 bg-accent p-6 text-accent-ink md:p-8">
              <span className="font-mono text-xs">10/10</span>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                  Starter alone won&apos;t cut it.
                </h3>
                <p className="mt-3 text-sm leading-relaxed opacity-80">
                  Every engagement ends with an action plan — because insight without
                  action is just decoration.
                </p>
              </div>
              <a href="#contact" className="flex items-center gap-2 text-sm font-semibold">
                Start a project <span>↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}