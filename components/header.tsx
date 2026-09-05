"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";
import { EASE } from "@/lib/anim";
import { ThemeToggle } from "@/components/theme-toggle";
import { Magnetic } from "@/components/magnetic";

/**
 * Sticky header — transparent over the hero, then frosted once the
 * page scrolls. Minimal logotype left, links center, pill CTA + toggle right.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line-soft bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="shell flex h-[76px] items-center justify-between">
        {/* Logotype */}
        <Link
          href="#top"
          className="group flex items-center gap-2 text-sm font-bold tracking-tight"
          aria-label="Olumide Faleye — home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-foreground text-background transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-ink">
            {"</>"}
          </span>
          <span className="hidden sm:inline">
            OF<span className="text-muted">.data</span>
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-line bg-card/60 p-1 backdrop-blur md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Magnetic className="hidden sm:block">
            <a
              href="#contact"
              className="group flex h-10 items-center gap-2 rounded-full bg-accent px-4 font-medium text-accent-ink transition-shadow duration-300 hover:shadow-[0_0_28px_-4px_var(--accent)]"
            >
              Book A Call
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </Magnetic>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-line bg-card md:hidden"
          >
            <span
              className={`h-px w-4 bg-foreground transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-foreground transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="border-b border-line-soft bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="shell flex flex-col py-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line-soft py-4 text-2xl font-semibold tracking-tight"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-5 flex h-12 items-center justify-center gap-2 rounded-full bg-accent font-medium text-accent-ink"
              >
                Book A Call ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}