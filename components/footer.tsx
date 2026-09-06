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
          I&apos;m always excited to collaborate on new and innovative projects.
          Whether you&apos;re starting from scratch or refining an existing
          idea, the data holds the plan.
        </p>
        <a
          href="mailto:olumidedavid375@gmail.com"
          className="inline-block rounded-full border border-zinc-700 px-6 py-2.5 text-xs font-semibold transition hover:bg-black hover:text-white"
        >
          Book A Call ↗
        </a>
      </div>

      {/* Bottom social bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 border-t border-zinc-200 px-10 py-8 md:flex-row md:px-16">
        <p className="text-[11px] uppercase tracking-widest text-zinc-400">
          Follow me
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://x.com/Olumi_dave"
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
            className="text-zinc-900 transition hover:text-zinc-400"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Z" />
            </svg>
          </a>
          <a
            href="https://github.com/Olumidave"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-zinc-900 transition hover:text-zinc-400"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/olumide-david-79b17726"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-900 transition hover:text-zinc-400"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://wa.me/2348158118787"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="text-zinc-900 transition hover:text-zinc-400"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </a>
        </div>

        <a
          href="mailto:olumidedavid375@gmail.com"
          className="text-xs text-zinc-400 transition hover:text-black"
        >
          olumidedavid375@gmail.com
        </a>
      </div>
    </footer>
  );
}
