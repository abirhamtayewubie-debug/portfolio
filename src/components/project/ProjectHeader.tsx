import Image from "next/image";
import type { Project } from "@/content/types";

/**
 * Project opening: the title and a title block of verified facts, set like
 * the corner of a drawing sheet, then the hero plate edge to edge.
 */
export function ProjectHeader({ project: p, total }: { project: Project; total: number }) {
  if (p.heroFullScreen) return <FullScreenHeader project={p} total={total} />;
  const night = p.surface === "night";
  return (
    <header className={night ? "surface-night" : undefined}>
      <div className="frame grid-12 gap-y-10 pb-10 pt-[calc(var(--header-h)+clamp(3rem,9vw,8rem))]">
        <div className="col-span-full md:col-span-7">
          <p className="t-label anim-fade">
            <span className="text-[var(--clay)]">{p.number}</span>
            <span className="text-[var(--mute)]"> / {String(total).padStart(2, "0")}</span>
            <span className="ml-4">{p.category}</span>
          </p>
          <h1 className="t-title mt-6 max-w-[14ch] text-balance">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="anim-rise block [animation-delay:120ms]">{p.title}</span>
            </span>
          </h1>
          {p.location && (
            <p className="t-label anim-fade mt-6 text-[var(--graphite)] [animation-delay:300ms]">{p.location}</p>
          )}
        </div>

        {p.facts && (
          <dl className="anim-fade col-span-full self-end border-t border-[var(--rule)] [animation-delay:400ms] md:col-span-4 md:col-start-9">
            {p.facts.map((f) => (
              <div key={f.label} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-[var(--rule)] py-2.5">
                <dt className="t-label pt-[0.2em] text-[var(--mute)]">{f.label}</dt>
                <dd className="text-[0.9375rem] leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <div className="relative h-[min(88svh,62vw)] min-h-[320px] overflow-hidden max-md:h-[70svh]">
        <div className="anim-curtain absolute inset-0 [animation-delay:150ms]">
          <Image
            src={p.hero.src}
            alt={p.hero.alt}
            fill
            priority
            sizes="100vw"
            quality={90}
            className="anim-settle object-cover"
            style={{ objectPosition: p.hero.focus }}
          />
        </div>
      </div>
    </header>
  );
}

/**
 * Variant for projects whose opening image carries the page: the whole hero,
 * uncropped, edge to edge below the bar, with the title set on it (below it on
 * phones), and the title block of facts in a row underneath.
 */
function FullScreenHeader({ project: p, total }: { project: Project; total: number }) {
  return (
    <header>
      <div className="relative mt-[var(--header-h)]">
        <div className="relative overflow-hidden" style={{ aspectRatio: `${p.hero.width} / ${p.hero.height}` }}>
          <div className="anim-curtain absolute inset-0 [animation-delay:150ms]">
            <Image
              src={p.hero.src}
              alt={p.hero.alt}
              fill
              priority
              sizes="100vw"
              quality={90}
              className="anim-settle object-contain"
            />
          </div>
          <span
            className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[rgb(18_17_16/0.72)] via-[rgb(18_17_16/0.28)] to-transparent max-md:hidden"
            aria-hidden
          />
        </div>
        <div className="frame bottom-0 pb-[clamp(2rem,6vh,4.5rem)] max-md:pt-8 md:absolute md:inset-x-0 md:text-[var(--paper)]">
          <p className="t-label anim-fade [animation-delay:500ms]">
            <span>{p.number}</span>
            <span className="opacity-70"> / {String(total).padStart(2, "0")}</span>
            <span className="ml-4">{p.category}</span>
          </p>
          <h1 className="t-title mt-5 max-w-[16ch] text-balance">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="anim-rise block [animation-delay:600ms]">{p.title}</span>
            </span>
          </h1>
          {p.location && <p className="t-label anim-fade mt-5 [animation-delay:800ms]">{p.location}</p>}
        </div>
      </div>

      {p.facts && (
        <div className="frame grid-12 pt-10">
          <dl className="col-span-full grid border-t border-[var(--rule)] sm:grid-cols-2 md:col-span-12 md:grid-cols-5">
            {p.facts.map((f) => (
              <div key={f.label} className="border-b border-[var(--rule)] py-3 md:border-b-0 md:pr-6">
                <dt className="t-label text-[var(--mute)]">{f.label}</dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </header>
  );
}
