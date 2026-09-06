"use client";

import { Home } from "lucide-react";
import { Avatar } from "@/components/avatar";

const NAV = [
  { label: "Home", href: "#home", icon: true },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/**
 * Hero — the reference "editorial" concept: soft yellow radial glow,
 * floating black capsule nav, a giant OLUMIDE watermark behind a
 * centered portrait, split left/right intro copy, and a slim footer bar.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-white p-6 font-sans text-zinc-900 antialiased md:p-10"
    >
      {/* Radial yellow glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0" />

      {/* Slight block grid lines — fades in the mid-ground, soft near edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-80 [background-size:56px_56px] "
      />

      {/* Floating capsule navigation — fixed over the viewport */}
      <header className="fixed inset-x-0 top-3 z-50 flex justify-center md:top-5">
        <nav className="flex items-center gap-0.5 rounded-full border border-zinc-800 bg-black p-1.5 text-xs text-white shadow-xl">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                item.label === "Home"
                  ? "flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-medium text-black transition-all"
                  : "rounded-full px-4 py-2 font-normal text-white transition hover:text-zinc-300"
              }
            >
              {item.icon && <Home className="h-3.5 w-3.5" strokeWidth={2} />}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </header>

      {/* Center content — watermark + portrait */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center pb-4 pt-8">
        {/* Giant gradient background typography */}
        <h1
          aria-hidden
          className="pointer-events-none absolute top-85 2xl:top-130 left-1/2 z-0 -translate-x-1/2  select-none text-[15vw] font-black uppercase leading-none tracking-tighter text-transparent opacity-90 md:-translate-y-80 md:text-[16vw]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #27272a, #18181b, #000)",
            WebkitBackgroundClip: "text",
          }}
        >
          Olumide
        </h1>

        {/* Centered portrait */}
        <div className="relative z-10 mt-0 w-full  2xl:translate-y-50 max-w-md md:max-w-lg">
          <Avatar
            src="/hero-t.png"
            alt="Olumide Faleye"
            className="aspect-[4/4.9] w-full xl:scale-110 2xl:scale-125 rounded-2xl  md:bg-transparent"
          />
        </div>

        {/* Split left/right copy blocks */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 xl:top-120 2xl:top-150 hidden -translate-y-1/2 items-center justify-between px-4 md:flex">
          <div className="pointer-events-auto max-w-xs text-xs font-normal leading-relaxed text-zinc-800">
            Hello, I&apos;m{" "}
            <strong className="font-semibold">Olumide Faleye</strong>, a{" "}
            <strong className="font-semibold">Data Analyst</strong>. I transform
            data into smarter decisions and help organizations improve
            performance.
          </div>
          <div className="pointer-events-auto max-w-xs text-right text-xs font-normal leading-relaxed text-zinc-800">
            I build interactive dashboards and reports that enable
            decision-makers to understand their business and uncover growth
            opportunities.
          </div>
        </div>
      </div>

      {/* Footer info bar */}
      <footer className="relative z-30 flex items-center justify-between pt-6 text-xs text-zinc-600">
        <div>© Olumide Faleye 2026</div>
        <div className="sm:hidden">Data · BI · Training</div>
        <div className="hidden sm:block">(Scroll down)</div>
      </footer>
    </section>
  );
}
