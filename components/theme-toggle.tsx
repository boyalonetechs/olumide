"use client";

import { useSyncExternalStore } from "react";

/**
 * Tiny external store — reads the <html> class directly whenever it
 * changes, so the toggle stays in sync without setState-in-effect.
 */
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());
const subscribe = (onChange: () => void) => {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
};

function applyTheme(light: boolean) {
  document.documentElement.classList.toggle("dark", !light);
  try {
    localStorage.setItem("theme", light ? "light" : "dark");
  } catch {
    /* storage unavailable — keep theme in memory only */
  }
  emit();
}

export function ThemeToggle() {
  const light = useSyncExternalStore(
    subscribe,
    () => !document.documentElement.classList.contains("dark"),
    () => false
  );

  const toggle = () => applyTheme(!light);

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color mode"
      className="group flex h-10 w-[72px] items-center rounded-full border border-line bg-card px-1 transition-colors duration-300 hover:border-foreground/40"
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          light ? "translate-x-[32px]" : "translate-x-0"
        }`}
      >
        {light ? "☀" : "☾"}
      </span>
    </button>
  );
}