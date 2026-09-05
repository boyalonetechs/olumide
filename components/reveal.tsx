"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/anim";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/**
 * Fade-up-on-scroll wrapper used for consistent, staggered entrances.
 * `delay` lets orchestrated sections cascade (0.05–0.15s steps).
 */
export function Reveal({ children, delay = 0, y = 30, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}