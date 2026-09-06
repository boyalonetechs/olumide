"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  "Data Analytics Consulting",
  "Business Intelligence & Dashboard Development",
  "Sales & Revenue Analysis",
  "Financial Analytics",
  "Operations Analytics",
  "Customer & E-commerce Analytics",
  "Data Cleaning & Transformation",
  "Google Sheets Automation",
  "Corporate Data Analytics Training",
  "Digital Literacy Training",
];

const STACK = [
  { tool: "Excel", level: 100 },
  { tool: "Power BI", level: 96 },
  { tool: "Google Sheets", level: 95 },
  { tool: "SQL", level: 92 },
  { tool: "Google Apps Script", level: 90 },
  { tool: "Python", level: 88 },
  { tool: "Tableau", level: 82 },
];

/**
 * Core Services — editorial numbered services grid followed by the
 * tech-stack bar chart. Each service sits on a hairline rule with a
 * mono index and a hover arrow, keeping the human/editorial tone.
 */
export function Portfolio() {
  return (
    <section id="works" className="mx-auto max-w-7xl px-8 py-24 md:px-16">
      <div className="mb-16 space-y-2 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
          ● Core Services
        </span>
        <h2 className="text-3xl font-normal tracking-tight md:text-5xl">
          What I deliver
        </h2>
      </div>

      {/* Services — indexed grid on hairlines */}
      <div className="mb-24 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: (i % 3) * 0.06 }}
            className="group border-t border-zinc-200 pt-5"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs text-zinc-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <ArrowUpRight className="h-4 w-4 text-zinc-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-900" />
            </div>
            <h3 className="mt-8 max-w-[20ch] text-base font-medium tracking-tight text-zinc-900 transition-colors group-hover:text-zinc-600">
              {service}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack — horizontal bar chart */}
      <div className="grid grid-cols-1 items-center gap-10 border-t border-zinc-200 pt-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            ● Tech Stack
          </span>
          <h2 className="mt-4 text-3xl font-normal tracking-tight text-zinc-900 md:text-4xl">
            Tools I use daily
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
            I work with tools such as Excel, SQL, Power BI, Python, Tableau,
            Google Sheets, and Google Apps Script to transform raw data into
            meaningful insights.
          </p>
        </div>

        <div className="space-y-4 md:col-span-8">
          {STACK.map((item, i) => (
            <div key={item.tool} className="flex items-center gap-4">
              <div className="h-10 flex-1 overflow-hidden rounded-lg bg-zinc-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
                  className="flex h-full items-center whitespace-nowrap rounded-lg bg-zinc-900 pr-4 text-white"
                  style={{ minWidth: "7rem" }}
                >
                  <span className="pl-4 text-xs font-medium">{item.tool}</span>
                </motion.div>
              </div>
              <span className="w-9 shrink-0 text-right font-mono text-xs text-zinc-400">
                {item.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}