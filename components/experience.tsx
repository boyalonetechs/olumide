"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/data";
import { DashboardMock } from "@/components/dashboard-mock";

/**
 * Experiences timeline — bordered list rows (company, role, date, tags)
 * with an expandable image gallery on the final row, plus header copy.
 */
export function Experience() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-7xl py-24 px-2 md:px-16">
      {/* Section header */}
      <div className="mb-16 px-4 flex items-start justify-between">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            ● Experiences
          </span>
          <h2 className="mt-2 text-3xl font-normal tracking-tight md:text-5xl">
            Explore My Data Journey
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="hidden max-w-xs text-xs leading-relaxed text-zinc-500 md:block"
        >
          Over the years, I&apos;ve worked on data projects across sales, finance,
          e-commerce, and operations — for clients who wanted decisions, not just
          numbers.
        </motion.p>
      </div>

      {/* Timeline rows */}
      <div className="space-y-4">
        {EXPERIENCES.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
            className="rounded-xl px-4 pb-6 pt-4 transition hover:bg-zinc-50/60"
          >
            <div className="grid grid-cols-1 items-center gap-4 border-b border-zinc-200 pb-6 md:grid-cols-12">
              <div className="md:col-span-4">
                <h3 className="text-base font-semibold text-zinc-900">{item.company}</h3>
                <span className="text-xs text-zinc-400">{item.date}</span>
              </div>
              <p className="text-xs leading-relaxed text-zinc-500 md:col-span-5">
                {item.role}
              </p>
              <div className="flex justify-start gap-2 md:col-span-3 md:justify-end">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-[10px] text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Expandable gallery on the final row */}
            {item.hasGallery && (
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
                <DashboardMock variant="trend" title="Analytics Mindset" chartClassName="h-32" />
                <DashboardMock variant="donut" title="Patterns & Systems" chartClassName="h-32" />
                <DashboardMock variant="bars" title="Curiosity First" chartClassName="h-32" />
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="flex h-full min-h-[140px] cursor-pointer items-center justify-center rounded-2xl bg-black text-white transition hover:bg-zinc-800"
                  aria-expanded={open}
                >
                  <span className={`text-xl transition-transform duration-300 ${open ? "rotate-45" : ""}`}>↗</span>
                </button>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}