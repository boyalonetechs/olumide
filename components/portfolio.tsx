import { WORKS } from "@/lib/data";
import { DashboardMock } from "@/components/dashboard-mock";

/**
 * Latest Works — 3×1 portfolio grid. Each square tile is a tinted
 * gradient with a CSS-drawn dashboard atop it and an arrow overlay
 * reminiscent of the reference concept.
 */
export function Portfolio() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-8 py-24 md:px-16">
      <div className="mb-16 space-y-2 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
          ● Portfolio
        </span>
        <h2 className="text-3xl font-normal tracking-tight md:text-5xl">Latest Works</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {WORKS.map((item) => (
          <div key={item.title} className="space-y-3">
            <div
              className={`group relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br p-5 ${item.tile}`}
            >
              <DashboardMock
                variant={item.variant}
                title={item.title}
                chartClassName="h-44"
                className="w-full bg-white/85 backdrop-blur"
              />
              {/* centered arrow overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg text-white/90">
                  ↗
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-zinc-800">{item.title}</span>
              <span className="text-zinc-400">{item.meta}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#contact"
          className="text-xs font-semibold text-zinc-600 transition hover:text-black"
        >
          Check out More → <span className="underline">View More</span>
        </a>
      </div>
    </section>
  );
}