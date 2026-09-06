"use client";

import { useState } from "react";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Image slot that degrades gracefully: keeps the rounded frame and slides
 * in a styled "OF" monogram when the source photo isn't present yet.
 * Drop a real image into /public (e.g. /hero.jpg) and it renders instantly.
 */
export function Avatar({ src, alt, className }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element -- raw <img> with graceful error fallback for user-supplied local photos
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top contrast-105"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-gradient-to-br from-amber-100 via-stone-200 to-zinc-300 text-zinc-800">
          <span className="font-display text-5xl font-black tracking-tight text-zinc-900 md:text-6xl">
            OF
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] opacity-70">
            Olumide Faleye
          </span>
        </div>
      )}
    </div>
  );
}