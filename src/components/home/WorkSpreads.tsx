import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { Reveal } from "@/components/Reveal";

/**
 * Selected work as a run of editorial spreads. Every image is shown whole, at
 * its own proportions, never cropped. Landscape images alternate sides with
 * their text column; upright images get a narrower plate set off-centre, the
 * way a monograph alternates its plates.
 */
type Layout = "plate-right" | "plate-left" | "plate-tall";

export function WorkSpreads({ projects }: { projects: Project[] }) {
  let landscape = 0;
  const layouts = projects.map((p): Layout => {
    const img = p.cover ?? p.hero;
    if (img.width / img.height < 1.3) return "plate-tall";
    return landscape++ % 2 === 0 ? "plate-right" : "plate-left";
  });

  return (
    <section id="work" className="scroll-mt-[var(--header-h)] pt-[var(--space-section)]" aria-labelledby="work-heading">
      <div className="frame grid-12">
        <h2 id="work-heading" className="t-label col-span-full md:col-span-3">
          Selected work
        </h2>
        <p className="t-label col-span-full text-graphite md:col-span-4 md:col-start-9 md:text-right">
          {projects.length} projects · Addis Ababa and Baghdad
        </p>
      </div>
      <div className="mt-[var(--space-block)] flex flex-col gap-[var(--space-section)]">
        {projects.map((p, i) => (
          <Spread key={p.slug} project={p} layout={layouts[i]} />
        ))}
      </div>
    </section>
  );
}

function Spread({ project: p, layout }: { project: Project; layout: Layout }) {
  const image = p.cover ?? p.hero;
  const tall = layout === "plate-tall";

  const plateCols =
    layout === "plate-right"
      ? "col-span-full md:col-start-5 md:col-span-8"
      : layout === "plate-left"
        ? "col-span-full md:col-start-1 md:col-span-8"
        : "col-span-full md:col-start-7 md:col-span-5";
  const textCols =
    layout === "plate-right"
      ? "col-span-full md:col-start-1 md:col-span-4 md:row-start-1 md:self-end"
      : layout === "plate-left"
        ? "col-span-full md:col-start-9 md:col-span-4 md:row-start-1 md:self-end"
        : "col-span-full md:col-start-2 md:col-span-4 md:row-start-1 md:self-start md:pt-[12vh]";

  return (
    <article className="frame" aria-labelledby={`spread-${p.slug}`}>
      <Link href={`/work/${p.slug}`} className="group grid-12 gap-y-6">
        <Reveal className={plateCols}>
          <div className="relative overflow-hidden bg-[var(--paper-2)]" style={{ aspectRatio: `${image.width} / ${image.height}` }}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={tall ? "(min-width: 768px) 42vw, 100vw" : "(min-width: 768px) 67vw, 100vw"}
              quality={90}
              className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out)] group-hover:scale-[1.035]"
            />
          </div>
        </Reveal>
        <Reveal className={textCols} delay={0.1}>
          <div className="flex items-baseline justify-between gap-4 border-t border-ink pt-3">
            <span className="t-label text-[var(--clay-ink)]">{p.number}</span>
            <span className="t-label text-graphite">{p.section.label}</span>
          </div>
          <h3
            id={`spread-${p.slug}`}
            className="t-title mt-5 max-w-[12ch] text-balance transition-colors duration-500 group-hover:text-[var(--clay-ink)]"
          >
            {p.title}
          </h3>
          <p className="t-label mt-5 text-graphite">
            {p.category} · {p.location}
          </p>
          <p className="mt-5 max-w-[42ch] text-graphite">{p.summary}</p>
          <span className="t-label mt-6 inline-flex items-center gap-2">
            <span className="link-underline group-hover:[background-size:100%_1px]">Open project</span>
            <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </span>
        </Reveal>
      </Link>
    </article>
  );
}
