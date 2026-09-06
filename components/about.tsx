import { Globe, ArrowUpRight, Sparkles } from "lucide-react";
import { Avatar } from "@/components/avatar";

/**
 * About — asymmetric editorial grid: left title+arrow, a tall white card
 * with globe metric + portrait, and a right column with avatar + feature
 * bullets using Sparkles chips.
 */
export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-28"
    >
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
        {/* LEFT: title + paragraph + decorative arrow */}
        <div className="flex flex-col justify-between pt-2 lg:col-span-4">
          <div className="max-w-sm space-y-6">
            <h2 className="text-4xl font-normal tracking-tight text-zinc-900 md:text-5xl">
              About Me
            </h2>
            <p className="text-sm font-normal leading-relaxed text-zinc-500">
              I&apos;m Olumide Faleye, a Data Analyst passionate about helping
              businesses transform data into smarter decisions. With a
              background in Physics, I&apos;ve always been fascinated by
              patterns and solving complex problems.
            </p>
          </div>

          {/* Curved arrow graphic */}
          <div className="hidden pl-8 pt-12 opacity-20 lg:block">
            <svg
              width="180"
              height="180"
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              className="text-zinc-600"
            >
              <path
                d="M 30,170 C 50,110 110,60 170,80"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 145,65 L 175,80 L 160,110"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* MIDDLE: tall white card — globe metric + portrait */}
        <div className="flex flex-col justify-between space-y-8 rounded-3xl lg:border border-zinc-100 bg-white py-8 px-2 lg:p-8 lg:shadow-sm lg:col-span-4">
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100">
              <Globe className="h-5 w-5 text-zinc-800" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-5xl font-normal tracking-tight text-zinc-900">
                120%
              </div>
              <p className="mt-3 max-w-[220px] text-xs leading-relaxed text-zinc-500">
                Average increase in data-driven insights and operational
                efficiency
              </p>
            </div>
          </div>

          {/* Portrait at bottom of card */}
          <Avatar
            src="/hero.jpg"
            alt="Olumide portrait"
            className="aspect-square w-full rounded-2xl bg-zinc-100"
          />
        </div>

        {/* RIGHT: avatar + sparkles bullets */}
        <div className="flex flex-col justify-between space-y-8 pt-2 lg:col-span-4">
          {/* Top-right square avatar with overlay circle button */}
          <div className="hidden md:flex  justify-start lg:justify-end">
            <div className="group relative h-36 w-36 cursor-pointer overflow-hidden rounded-2xl shadow-sm">
              <Avatar
                src="/background.jpg"
                alt="Olumide square portrait"
                className="h-full w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black shadow-md backdrop-blur-sm transition group-hover:scale-110">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Feature bullets */}
          <div className="max-w-md space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
                <Sparkles className="h-3.5 w-3.5 fill-white" />
              </div>
              <p className="pt-1 text-xs leading-relaxed text-zinc-500">
                I specialize in analyzing data across sales, e-commerce,
                finance, customer behavior, and operations — combining
                analytical thinking with business strategy.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
                <Sparkles className="h-3.5 w-3.5 fill-white" />
              </div>
              <p className="pt-1 text-xs leading-relaxed text-zinc-500">
                My mission: helping individuals and businesses make confident,
                data-driven decisions that improve efficiency, profitability,
                and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
