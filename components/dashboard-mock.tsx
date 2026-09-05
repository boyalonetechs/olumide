"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/anim";

export type ChartVariant = "trend" | "donut" | "bars" | "kpis";

interface DashboardMockProps {
  variant: ChartVariant;
  title?: string;
  className?: string;
}

const BARS = [38, 62, 46, 80, 58, 92, 70, 100, 74, 88, 64, 96];

/**
 * Pure CSS/SVG "dashboard" art direction — lets the portfolio show off
 * analyst work without relying on stock screenshots. Every panel shares
 * the same browser chrome + hairline grid for a cohesive Dribbble look.
 */
export function DashboardMock({ variant, title, className }: DashboardMockProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-line bg-card ${className ?? ""}`}
    >
      {/* Fake browser / tool chrome */}
      <div className="flex items-center justify-between border-b border-line bg-surface/60 px-3 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-foreground/25" />
          <span className="h-2 w-2 rounded-full bg-foreground/25" />
          <span className="h-2 w-2 rounded-full bg-foreground/25" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {title ?? "Power BI — Live"}
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
          live
        </span>
      </div>

      <div className="relative bg-grid p-4 [background-size:44px_44px]">
        {/* Chart body, sized small inside the desktop card */}
        <div className="h-40 sm:h-48">
          {variant === "trend" && <TrendChart />}
          {variant === "donut" && <DonutChart />}
          {variant === "bars" && <BarsChart />}
          {variant === "kpis" && <KpiGrid />}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-line px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
        <span>Last refresh · 2m ago</span>
        <span className="flex gap-3">
          <span>Rows 8.4k</span>
          <span>QoQ ↑</span>
        </span>
      </div>
    </div>
  );
}

/* ---------- Trend / area chart ---------- */
function TrendChart() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full" preserveAspectRatio="none" role="img" aria-label="Trend chart">
      <defs>
        <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line
          key={f}
          x1="0"
          x2="320"
          y1={180 * f}
          y2={180 * f}
          stroke="var(--line)"
          strokeWidth="1"
        />
      ))}
      <path
        d="M0,150 C30,138 52,100 82,104 C114,108 122,132 152,120 C182,108 198,62 232,66 C266,70 292,40 320,28 L320,180 L0,180 Z"
        fill="url(#areaFill)"
      />
      <path
        d="M0,150 C30,138 52,100 82,104 C114,108 122,132 152,120 C182,108 198,62 232,66 C266,70 292,40 320,28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-accent"
      />
      {[[82, 104], [198, 62], [320, 28]].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="10" fill="currentColor" opacity="0.15" className="text-accent" />
          <circle cx={cx} cy={cy} r="4" fill="currentColor" className="text-accent" />
          <circle cx={cx} cy={cy} r="4" fill="var(--background)" />
        </g>
      ))}
    </svg>
  );
}

/* ---------- Donut / composition chart ---------- */
function DonutChart() {
  const C = 2 * Math.PI * 42;
  return (
    <div className="grid h-full grid-cols-[1fr_1fr] items-center gap-4">
      <div className="relative mx-auto aspect-square w-full max-w-[150px]">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line)" strokeWidth="11" />
          <motion.circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="currentColor"
            strokeWidth="11"
            strokeLinecap="round"
            className="text-accent"
            strokeDasharray={`${C * 0.62} ${C}`}
            initial={{ strokeDashoffset: C }}
            whileInView={{ strokeDashoffset: C - C * 0.62 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold tracking-tight">62%</span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">
            healthy
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        {[
          { label: "Funded", pct: "62%", w: "62%" },
          { label: "Risk", pct: "24%", w: "24%" },
          { label: "Review", pct: "14%", w: "14%" },
        ].map((r) => (
          <div key={r.label}>
            <div className="mb-1 flex justify-between font-mono text-[10px] uppercase tracking-wider text-muted">
              <span>{r.label}</span>
              <span>{r.pct}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
              <span
                className={`block h-full rounded-full ${r.label === "Funded" ? "bg-accent" : "bg-muted/50"}`}
                style={{ width: r.w }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Vertical bar chart ---------- */
function BarsChart() {
  return (
    <div className="flex h-full items-end justify-between gap-1.5 sm:gap-2.5">
      {BARS.map((h, i) => (
        <motion.span
          key={i}
          className={`w-full origin-bottom rounded-t-[4px] ${i % 3 === 1 ? "bg-muted/45" : "bg-accent"}`}
          style={{ height: `${h}%`, transformOrigin: "bottom" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: i * 0.045, ease: EASE }}
        />
      ))}
    </div>
  );
}

/* ---------- KPI tile grid ---------- */
function KpiGrid() {
  const kpis = [
    { label: "Revenue", value: "$1.24M", delta: "+18%", up: true },
    { label: "Conversion", value: "4.2%", delta: "+0.6%", up: true },
    { label: "Churn", value: "2.1%", delta: "−0.4%", up: false },
    { label: "Orders", value: "8,432", delta: "+12%", up: true },
  ];
  return (
    <div className="grid h-full grid-cols-2 gap-2.5 sm:gap-3">
      {kpis.map((k) => (
        <motion.div
          key={k.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: EASE }}
          className="flex flex-col justify-between rounded-xl border border-line bg-surface/50 p-3 sm:p-3.5"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
            {k.label}
          </span>
          <span className="text-lg font-bold tracking-tight sm:text-2xl">{k.value}</span>
          <span
            className={`font-mono text-[10px] ${k.up ? "text-accent" : "text-muted"}`}
          >
            {k.delta} {k.up ? "▲" : "▼"}
          </span>
        </motion.div>
      ))}
    </div>
  );
}