import Image from "next/image";
import type { Project } from "@/content/types";

/**
 * Project opening: the title and a title block of verified facts, set like
 * the corner of a drawing sheet, then the hero plate edge to edge.
 */
export function ProjectHeader({ project: p, total }: { project: Project; total: number }) {
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
          {p.location && <p className="t-label anim-fade mt-6 text-[var(--graphite)] [animation-delay:300ms]">{p.location}</p>}
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
