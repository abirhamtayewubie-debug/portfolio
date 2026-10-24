import type { CvEntry } from "@/content/types";

/** A chronological CV list: period, role and place, with optional detail points. */
export function CvSection({ heading, entries }: { heading: string; entries: CvEntry[] }) {
  const id = `cv-${heading.toLowerCase()}`;
  return (
    <section className="frame" aria-labelledby={id}>
      <div className="grid-12 gap-y-6 border-t border-ink pt-4">
        <h2 id={id} className="t-label col-span-full md:col-span-2">
          {heading}
        </h2>
        <ol className="col-span-full md:col-span-10 md:col-start-3">
          {entries.map((e) => (
            <li
              key={`${e.title}-${e.place}`}
              className="grid grid-cols-6 gap-x-[var(--gutter)] gap-y-2 border-b border-[var(--rule)] py-5 first:pt-0 md:grid-cols-10"
            >
              <p className="t-label col-span-full pt-[0.3em] text-[var(--clay-ink)] md:col-span-2">{e.period ?? "—"}</p>
              <div className="col-span-full md:col-span-4">
                <p className="font-[family-name:var(--font-display)] text-[1.5rem] leading-tight">{e.title}</p>
                {e.place && <p className="mt-1 text-graphite">{e.place}</p>}
                {e.location && <p className="t-label mt-2 text-mute">{e.location}</p>}
              </div>
              {e.points && (
                <ul className="t-caption col-span-full space-y-1 md:col-span-4 md:pt-[0.4em]">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
