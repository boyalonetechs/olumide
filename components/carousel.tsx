"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { X } from "lucide-react";

/**
 * Horizontal gallery built into the existing UI: the Full-Width Featured
 * Image stays exactly where it is, but once the user scrolls it into view
 * it pins and scrolls sideways through more screenshots. When the strip
 * ends, normal vertical scrolling resumes.
 */
const SLIDES = [
  {
    src: "/dashboard-preview.jpg",
    alt: "Olumide Faleye - Data Analyst",
  },
  { src: "/IMG-20260716-WA0020.jpg", alt: "Sales Performance Overview" },
  { src: "/IMG-20260716-WA0017.jpg", alt: "Google Sheets Automation" },
  { src: "/IMG-20260716-WA0019.jpg", alt: "Payment & Revenue Analysis" },
  { src: "/IMG-20260716-WA0021.jpg", alt: "Financial Insights Dashboard" },
  { src: "/IMG-20260716-WA0024.jpg", alt: "Business Performance Dashboard" },
  { src: "/IMG-20260716-WA0012.jpg", alt: "Sales Pipeline Dashboard" },
  { src: "/IMG-20260716-WA0026.jpg", alt: "Customer & Revenue Insights" },
  { src: "/IMG-20260716-WA0013.jpg", alt: "Bank Loan Analysis" },
  { src: "/IMG-20260716-WA0023.jpg", alt: "Operations Analytics" },
  { src: "/IMG-20260716-WA0016.jpg", alt: "Uber Trip Analysis" },
  { src: "/IMG-20260716-WA0018.jpg", alt: "Customer Churn & LTV" },
  { src: "/IMG-20260716-WA0025.jpg", alt: "Executive Overview" },
];

export default function Carousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState<number | null>(null);
  const [sectionHeight, setSectionHeight] = useState(300);

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

  /* Size the section so its scrollable distance matches the horizontal
     strip distance exactly (1px vertical = 1px horizontal). That way every
     slide is revealed one by one instead of being raced past. */
  useLayoutEffect(() => {
    const measure = () => {
      const card = cardRef.current;
      if (!card) return;
      const distance = Math.max(0, card.scrollWidth - card.clientWidth);
      setSectionHeight(Math.max(300, distance + window.innerHeight));
    };
    measure();
    window.addEventListener("resize", measure);
    const timer = window.setTimeout(measure, 500);
    return () => {
      window.removeEventListener("resize", measure);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImg(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12 md:py-10">
        {/* Hero Section */}
        <main className="mb-16">
          <span className="mb-6 block text-base font-medium tracking-wide text-gray-800">
            Explore my Works
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
                Transforming complex, raw datasets into actionable insights and
                strategic decisions that drive global business growth.
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
        <section
          ref={sectionRef}
          className="relative"
          style={{ height: sectionHeight }}
        >
          <div className="sticky top-8 xl:top-16 2xl:top-20 pt-1">
            <div
              ref={cardRef}
              className="relative h-[500px] w-full md:h-[650px]"
            >
              <motion.div
                style={{ x }}
                className="flex lg:h-140 xl:h-full  items-stretch lg:gap-30 xl:gap-50 2xl:gap-100"
              >
                {SLIDES.map((slide, i) => (
                  <button
                    key={`${slide.src}-${i}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Open ${slide.alt} in full size`}
                    className="relative h-full w-full flex-shrink-0 cursor-zoom-in rounded-3xl text-left shadow-sm transition hover:brightness-95"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- keep provided markup */}
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full w-full object-cover rounded-3xl object-top"
                    />
                    {i === 0 && (
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t rounded-3xl from-black/30 to-transparent"
                      />
                    )}
                  </button>
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

      {/* Full-image modal */}
      <AnimatePresence>
        {activeImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-10"
          >
            <button
              onClick={() => setActiveImg(null)}
              aria-label="Close"
              className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.div
              key={activeImg}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-full w-full items-center justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- modal image */}
              <img
                src={SLIDES[activeImg].src}
                alt={SLIDES[activeImg].alt}
                className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
              />

              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/60 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                {SLIDES[activeImg].alt}
                <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-white/60">
                  {activeImg + 1} / {SLIDES.length}
                </span>
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
