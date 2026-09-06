/**
 * Dark promotional banner — high-contrast CTA card dropped between the
 * timeline and the works grid, exactly as in the reference concept.
 */
export function Promo() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-12 md:px-16">
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-zinc-950 p-10 text-center text-white md:p-16">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
          (Book Your Free Consultation Now!)
        </span>
        <h2 className="mt-6 max-w-2xl text-3xl font-normal leading-tight tracking-tight md:text-5xl">
          Exclusive Winter Deal Days — Get a Free Consultation!
        </h2>
        <p className="mt-6 max-w-md text-xs leading-relaxed text-zinc-400">
          Take advantage of this limited-time offer to discuss your data analytics needs
          with an experienced Data Consultant.
        </p>
        <a
          href="#contact"
          className="mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold text-black transition hover:bg-zinc-200"
        >
          Let&apos;s talk <span>↗</span>
        </a>
      </div>
    </section>
  );
}