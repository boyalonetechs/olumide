"use client";

import { Magnetic } from "@/components/magnetic";
import { Reveal } from "@/components/reveal";

const SOCIALS = ["LinkedIn", "GitHub", "X / Twitter", "Medium"];

/**
 * Footer — the closing statement. Oversized CTA with an outlined word,
 * a magnetic email pill, location meta, and a clean bottom bar with
 * social links + back-to-top.
 */
export function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden">
      {/* Big CTA */}
      <div className="shell py-24 text-center md:py-36">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
            <span className="text-accent">06</span> / Contact
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mx-auto max-w-5xl font-display text-[clamp(2.6rem,8vw,7rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.02em]">
            Got a <span className="text-outline">vision?</span>
            <br />
            Let&apos;s bring it to life<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Tell me about your data, your goals, and the decision you need to make — I&apos;ll
            handle the rest.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href="mailto:midesanalytics@gmail.com"
                className="group flex h-14 items-center gap-3 rounded-full bg-accent px-7 text-sm font-semibold text-accent-ink transition-shadow duration-300 hover:shadow-[0_0_40px_-8px_var(--accent)]"
              >
                midesanalytics@gmail.com
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="mailto:midesanalytics@gmail.com?subject=Book%20a%20call"
                className="flex h-14 items-center gap-2 rounded-full border border-line px-7 text-sm font-medium transition-colors duration-300 hover:border-foreground"
              >
                Book A Call
                <span className="text-accent">↗</span>
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            Lagos, Nigeria — working worldwide · Remote
          </p>
        </Reveal>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="shell flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            © 2026 Olumide Faleye. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s}
                href="#contact"
                className="text-sm text-muted transition-colors duration-300 hover:text-foreground"
              >
                {s} <span className="text-[10px] text-accent">↗</span>
              </a>
            ))}
          </nav>
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-foreground"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}