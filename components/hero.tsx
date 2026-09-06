"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { User, FolderKanban, Home, Mail } from "lucide-react";
import { Avatar } from "@/components/avatar";

const NAV = [
  { id: "home", label: "Home", href: "#home", Icon: Home },
  { id: "about", label: "About", href: "#about", Icon: User },
  { id: "projects", label: "Projects", href: "#projects", Icon: FolderKanban },
  { id: "contact", label: "Contact", href: "#contact", Icon: Mail },
];

const SECTION_ORDER = NAV.map((item) => item.id);

/**
 * Hero — the reference "editorial" concept: soft yellow radial glow,
 * floating black capsule nav, a giant OLUMIDE watermark behind a
 * centered portrait, split left/right intro copy, and a slim footer bar.
 */
export function Hero() {
  const [activeId, setActiveId] = useState<string>("home");

  /* Scroll spy — the nav item whose section's top has most recently passed
     under the floating nav is the one highlighted (white box + icon). */
  useEffect(() => {
    const onScroll = () => {
      const line = 140;
      let current: string | null = null;
      for (const id of SECTION_ORDER) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActiveId(current ?? "home");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-4 w-full flex-col justify-between overflow-hidden bg-white p-6 font-sans text-zinc-900 antialiased md:p-10"
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
        <nav className="flex items-center gap-0.5 rounded-full border border-zinc-800 bg-black p-1 text-[11px] text-white shadow-xl sm:text-xs md:p-1.5">
          {NAV.map((item) => {
            const isActive = item.id === activeId;
            return (
              <a
                key={item.id}
                href={item.href}
                className={
                  isActive
                    ? "flex items-center gap-1 rounded-full bg-white px-3 py-1.5 font-medium text-black transition-all md:gap-1.5 md:px-4 md:py-2"
                    : "flex items-center rounded-full px-3 py-1.5 font-normal text-white transition hover:text-zinc-300 md:px-4 md:py-2"
                }
              >
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.span
                      key={`icon-${item.id}`}
                      initial={{ opacity: 0, scale: 0.5, width: 0 }}
                      animate={{ opacity: 1, scale: 1, width: "auto" }}
                      exit={{ opacity: 0, scale: 0.5, width: 0 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <item.Icon
                        className="h-3 w-3 md:h-3.5 md:w-3.5"
                        strokeWidth={2}
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </header>

      {/* Center content — watermark + portrait */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center pb-4 pt-8">
        {/* Giant gradient background typography — desktop watermark */}
        <h1
          aria-hidden
          className="pointer-events-none absolute top-85 2xl:top-130 left-1/2 z-0 -translate-x-1/2 hidden md:block select-none text-[15vw] font-black uppercase leading-none tracking-tighter text-transparent opacity-90 md:-translate-y-80 md:text-[16vw]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #27272a, #18181b, #000)",
            WebkitBackgroundClip: "text",
          }}
        >
          Olumide
        </h1>

        {/* Giant gradient typography — mobile, sits above the portrait */}
        <h1
          aria-hidden
          className="pointer-events-none translate-y-10 md:translate-y-0     z-0 mx-auto select-none text-center text-[17vw] font-black uppercase leading-none tracking-tighter text-transparent opacity-100 md:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #27272a, #18181b, #000)",
            WebkitBackgroundClip: "text",
          }}
        >
          Olumide
        </h1>

        {/* Centered portrait */}
        <div className="relative z-10 mt-0 w-full translate-y-20  2xl:translate-y-50 max-w-md md:max-w-lg">
          <Avatar
            src="/hero-t.png"
            alt="Olumide Faleye"
            className="aspect-[4/4.9] w-full scale-120 xl:scale-110 2xl:scale-125 rounded-2xl  md:bg-transparent"
          />
        </div>

        {/* Intro copy for mobile — stacked under the portrait */}
        <div className="mt-10 w-full space-y-5 md:hidden">
          <p className="max-w-[36ch] hidden text-xs font-normal leading-relaxed text-zinc-800">
            Hello, I&apos;m{" "}
            <strong className="font-semibold">Olumide Faleye</strong>, a{" "}
            <strong className="font-semibold">Data Analyst</strong>. I transform
            data into smarter decisions and help organizations improve
            performance.
          </p>
          <p className="max-w-[36ch] hidden text-xs font-normal leading-relaxed text-zinc-800">
            I build interactive dashboards and reports that enable
            decision-makers to understand their business and uncover growth
            opportunities.
          </p>
        </div>

        {/* Split left/right copy blocks */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 xl:top-120 2xl:top-150 hidden -translate-y-1/2 items-center justify-between px-4 md:flex">
          <div className="pointer-events-auto max-w-[35%] text-xs font-normal leading-relaxed text-zinc-800 lg:max-w-xs">
            Hello, I&apos;m{" "}
            <strong className="font-semibold">Olumide Faleye</strong>, a{" "}
            <strong className="font-semibold">Data Analyst</strong>. I transform
            data into smarter decisions and help organizations improve
            performance.
          </div>
          <div className="pointer-events-auto max-w-[35%] text-right text-xs font-normal leading-relaxed text-zinc-800 lg:max-w-xs">
            I build interactive dashboards and reports that enable
            decision-makers to understand their business and uncover growth
            opportunities.
          </div>
        </div>
      </div>

      {/* Footer info bar */}
      <footer className="relative hidden  z-30 lg:flex items-center justify-between pt-6 text-xs text-zinc-600">
        <div>© Olumide Faleye 2026</div>
        <div className="sm:hidden">Data · BI · Training</div>
        <div className="hidden sm:block">(Scroll down)</div>
      </footer>
    </section>
  );
}
