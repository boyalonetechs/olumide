"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/anim";
import { Counter } from "@/components/counter";
import { Magnetic } from "@/components/magnetic";
import { DashboardMock } from "@/components/dashboard-mock";

const STAGGER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const WORD: Parameters<typeof motion.span>[0]["variants"] = {
  hidden: { y: "110%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

const HERO_ONE = ["RAW", "DATA", "IN,"];
const HERO_TWO = ["GROWTH", "DECISIONS", "OUT."];

const SPECIALTIES = [
  "Sales Analytics",
  "Financial Analytics",
  "E-commerce",
  "Customer Behavior",
  "Operations",
  "BI & Visualization",
];

const STATS = [
  { value: 30, suffix: "+", label: "Projects Delivered" },
  { value: 120, suffix: "%", label: "Avg. Insight Lift" },
  { value: 10, suffix: "+", label: "Tools Mastered" },
  { value: 100, suffix: "+", label: "Students Trained" },
];

/**
 * Hero — oversized outline/solid display type, staggered mask reveal
 * per word, a stat counter band, and an asymmetric "live dashboard"
 * composition with floating KPI chips + a rotating circular badge.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* faint film grain + hairline grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-noise opacity-[0.05]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-grid opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="shell relative pt-32 md:pt-40">
        {/* Meta row */}
        <motion.div
          variants={STAGGER}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted"
        >
          <motion.span variants={WORD} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            Data Analyst — Nigeria
          </motion.span>
          <motion.span variants={WORD} className="flex items-center gap-2">
            Available for projects
            <span className="rounded-full border border-line px-2 py-0.5">2026</span>
          </motion.span>
        </motion.div>

        {/* Giant heading with per-word clip reveal */}
        <div className="mt-10 md:mt-14">
          <h1 className="font-display text-[clamp(3.2rem,11vw,10rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.03em]">
            <motion.span
              variants={STAGGER}
              initial="hidden"
              animate="show"
              className="flex flex-wrap"
            >
              {HERO_ONE.map((w) => (
                <span key={w} className="inline-block overflow-hidden pb-1 pr-[0.12em]">
                  <motion.span variants={WORD} className="inline-block text-outline">
                    {w}
                  </motion.span>
                </span>
              ))}
            </motion.span>
            <motion.span
              variants={STAGGER}
              initial="hidden"
              animate="show"
              className="flex flex-wrap"
            >
              {HERO_TWO.map((w) => (
                <span key={w} className="inline-block overflow-hidden pb-1 pr-[0.12em]">
                  <motion.span
                    variants={WORD}
                    className={`inline-block ${w === "GROWTH" ? "text-accent" : ""}`}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </motion.span>
          </h1>
        </div>

        {/* Blurb + CTAs + dashboard composition */}
        <div className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:items-center">
          {/* Left: intro copy */}
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
              className="max-w-md text-base leading-relaxed text-muted md:text-lg"
            >
              Hey, I&apos;m <span className="text-foreground">Olumide Faleye</span> — a Data
              Analyst &amp; BI Consultant helping businesses turn messy numbers into
              confident, profitable decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.72 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {SPECIALTIES.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors duration-300 hover:border-accent hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.84, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <a
                  href="#work"
                  className="group flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-accent-ink transition-shadow duration-300 hover:shadow-[0_0_36px_-6px_var(--accent)]"
                >
                  Explore My Work
                  <span className="transition-transform duration-300 group-hover:translate-y-[2px]">
                    ↓
                  </span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="group flex h-12 items-center gap-2 rounded-full border border-line px-6 font-medium text-foreground transition-colors duration-300 hover:border-foreground"
                >
                  Book A Call
                  <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right: dashboard composition */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            className="relative lg:col-span-7"
          >
            <DashboardMock
              variant="trend"
              title="Mides Analytics · Executive"
              className="shadow-[0_40px_80px_-24px_rgba(0,0,0,0.5)]"
            />

            {/* Floating yield chip */}
            <div className="absolute -left-4 -top-8 md:-left-10 animate-float">
              <div className="rounded-2xl border border-line bg-surface p-4 shadow-lg">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                  Insight Lift
                </span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-bold text-accent">
                    <Counter to={120} suffix="%" />
                  </span>
                  <span className="text-muted">▲</span>
                </div>
              </div>
            </div>

            {/* Floating tool chip */}
            <div className="absolute -bottom-6 right-6 md:-right-8 animate-float-delay">
              <div className="rounded-2xl border border-line bg-surface px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted">
                  {["SQL", "Power BI", "Python"].map((t) => (
                    <span key={t} className="rounded-full border border-line px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Rotating circular badge */}
            <div className="absolute -left-8 bottom-16 hidden h-28 w-28 md:block">
              <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow text-muted">
                <defs>
                  <path
                    id="circlePath"
                    d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="fill-current font-mono text-[8px] uppercase tracking-[0.28em]">
                  <textPath href="#circlePath">
                    · data · analyst · consultant · trainer ·
                  </textPath>
                </text>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xl text-accent">
                ✦
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stat counters band */}
      <div className="shell">
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="mt-20 grid grid-cols-2 border-t border-line md:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`border-b border-t-0 border-line px-2 py-8 md:border-b-0 ${
                i % 2 === 1 ? "border-l" : ""
              } ${i >= 2 ? "md:border-l-0" : ""} ${i > 0 ? "md:border-l" : ""}`}
            >
              <div className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <dd className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Scroll indicator */}
      <div className="relative">
        <a
          href="#about"
          className="absolute bottom-6 right-6 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted transition-colors hover:text-foreground lg:flex"
        >
          <span className="inline-block h-px w-10 bg-muted transition-all duration-300 group-hover:bg-foreground" />
          Scroll down ↓
        </a>
      </div>
    </section>
  );
}