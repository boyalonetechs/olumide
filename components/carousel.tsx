"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Horizontal gallery built into the existing UI: the Full-Width Featured
 * Image stays exactly where it is, but once the user scrolls it into view
 * it pins and scrolls sideways through more screenshots. When the strip
 * ends, normal vertical scrolling resumes.
 */
const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1600",
    alt: "Olumide Faleye - Data Analyst",
  },
  { src: "/IMG-20260716-WA0012.jpg", alt: "Sales Pipeline Dashboard" },
  { src: "/IMG-20260716-WA0013.jpg", alt: "Bank Loan Analysis" },
  { src: "/IMG-20260716-WA0016.jpg", alt: "Uber Trip Analysis" },
  { src: "/dashboard-preview.jpg", alt: "Retail Analytics" },
];

export default function Carousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  /* Vertical scroll through the tall section drives the horizontal slide */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, (progress) => {
    const card = cardRef.current;
    if (!card) return 0;
    const distance = Math.max(0, card.scrollWidth - card.clientWidth);
    return -progress * distance;
  });

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12 md:py-10">
        {/* Hero Section */}
        <main className="mb-16">
          <span className="mb-6 block text-base font-medium tracking-wide text-gray-800">
            About Me
          </span>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
            {/* Main Headline Left */}
            <div className="md:col-span-8 lg:col-span-8">
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-[80px]">
                Data Analyst for a{" "}
                <span className="text-gray-400">digital age</span>
              </h1>
            </div>

            {/* Bio & CTA Right */}
            <div className="flex h-full flex-col justify-between pt-2 md:col-span-4 lg:col-span-4">
              <p className="mb-8 text-base leading-relaxed text-gray-600 md:text-lg">
                I&apos;m Olumide Faleye, a Data Analyst passionate about turning raw data
                into smarter decisions for businesses around the world.
              </p>
              <div>
                <button className="flex items-center gap-3 rounded-full bg-black px-8 py-4 text-base font-medium text-white shadow-sm transition hover:bg-gray-800">
                  Let&apos;s Talk <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Full-Width Featured Image — pinned horizontal scroller */}
        <section ref={sectionRef} className="relative overflow-x-clip" style={{ height: "350vh" }}>
          <div className="sticky top-0 pt-1">
            <div
              ref={cardRef}
              className="relative h-[500px] w-full md:h-[650px]"
            >
              <motion.div style={{ x }} className="flex h-full items-stretch gap-8">
                {SLIDES.map((slide, i) => (
                  <div
                    key={slide.src}
                    className="relative h-full w-full flex-shrink-0 overflow-hidden rounded-3xl shadow-sm"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- keep provided markup */}
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full w-full object-cover object-top"
                    />
                    {i === 0 && (
                      <div
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent"
                      />
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Progress track */}
              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
                {SLIDES.map((_, i) => (
                  <span
                    key={i}
                    className="h-1 rounded-full bg-white/80 transition-all duration-300"
                    style={{ width: i === 0 ? 22 : 10 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}