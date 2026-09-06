/**
 * Footer / call-to-action — big centered "Got a Vision?" headline,
 * a Book A Call button, and the dark bottom bar with global nav + email.
 */
export function Footer() {
  return (
    <footer id="contact" className="pb-12 pt-24 text-black">
      {/* CTA */}
      <div className="mx-auto mb-20 max-w-4xl space-y-6 text-center">
        <h2 className="text-3xl font-normal tracking-tight md:text-5xl">
          Got a Vision? Let&apos;s Bring It to Life!
        </h2>
        <p className="mx-auto max-w-md text-xs leading-relaxed text-zinc-400">
          I&apos;m always excited to collaborate on new and innovative projects. Whether
          you&apos;re starting from scratch or refining an existing idea, the data holds
          the plan.
        </p>
        <a
          href="mailto:hello@olumidefaleye.com"
          className="inline-block rounded-full border border-zinc-700 px-6 py-2.5 text-xs font-semibold transition hover:bg-black hover:text-white"
        >
          Book A Call ↗
        </a>
      </div>

      {/* Bottom global nav & email */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 bg-zinc-900 px-10 py-8 md:flex-row md:px-16">
        <nav className="flex space-x-6 text-xs text-zinc-400">
          {["Home", "About Me", "Portfolio", "Services", "Blog"].map((label) => (
            <a
              key={label}
              href={label === "Home" ? "#home" : label === "About Me" ? "#about" : label === "Portfolio" ? "#projects" : label === "Blog" ? "#blog" : "#contact"}
              className="transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:hello@olumidefaleye.com"
          className="text-2xl font-normal tracking-tight text-white transition hover:text-zinc-400 md:text-4xl"
        >
          hello@olumidefaleye.com
        </a>
      </div>
    </footer>
  );
}