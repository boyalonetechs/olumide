const ITEMS = [
  "Excel",
  "SQL",
  "Power BI",
  "Python",
  "Tableau",
  "Google Sheets",
  "Apps Script",
  "Data Storytelling",
  "Dashboards",
  "Automation",
];

/**
 * Infinite skills marquee — pure CSS animation, row duplicated for a
 * seamless loop with soft edge masking on desktop.
 */
export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-b border-line py-5">
      <div className="flex w-max animate-marquee whitespace-nowrap mask-fade-x">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-6 pr-6">
            <span className="font-display text-sm font-bold uppercase tracking-[0.3em]">
              {item}
            </span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}