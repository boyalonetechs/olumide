import { INSIGHTS } from "@/lib/data";

/**
 * Blogs & insights — clean 3-up editorial cards with photo cover
 * (from the reference concept), black tag pill, read time and title.
 */
export function Insights() {
  return (
    <section id="blog" className="mx-auto max-w-7xl border-t border-zinc-200 px-8 py-24 md:px-16">
      <div className="mb-16 space-y-2 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
          ● Blogs
        </span>
        <h2 className="text-3xl font-normal tracking-tight md:text-5xl">
          Data Insights &amp; Trends
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {INSIGHTS.map((post) => (
          <article
            key={post.title}
            className="flex flex-col justify-between space-y-4 rounded-3xl border border-zinc-100 bg-zinc-50 p-4"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-500">
                <span className="rounded-full bg-black px-2 py-0.5 text-white">
                  {post.tag}
                </span>
                <span>{post.read}</span>
              </div>
              <h3 className="text-sm font-medium leading-snug text-zinc-900">
                {post.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}