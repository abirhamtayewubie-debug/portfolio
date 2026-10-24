import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { Reveal } from "@/components/Reveal";

/**
 * Selected work as a run of editorial spreads. Three compositions alternate so
 * the rhythm changes with every project, the way a monograph alternates a
 * full plate, a plate with a text column and a tall plate set off-centre.
 */
const layouts = ["plate-right", "plate-wide", "plate-tall"] as const;
type Layout = (typeof layouts)[number];

export function WorkSpreads({ projects }: { projects: Project[] }) {
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
          <Spread key={p.slug} project={p} layout={layouts[i % layouts.length]} />
        ))}
      </div>
    </section>
  );
}

function Spread({ project: p, layout }: { project: Project; layout: Layout }) {
  const image = p.cover ?? p.hero;
  const tall = layout === "plate-tall";
  const ratio = tall ? 4 / 5 : layout === "plate-wide" ? 2.1 : 3 / 2;

  const plateCols =
    layout === "plate-right"
      ? "col-span-full md:col-start-5 md:col-span-8"
      : layout === "plate-wide"
        ? "col-span-full"
        : "col-span-full md:col-start-7 md:col-span-5";
  const textCols =
    layout === "plate-right"
      ? "col-span-full md:col-start-1 md:col-span-4 md:row-start-1 md:self-end"
      : layout === "plate-wide"
        ? "col-span-full md:grid md:grid-cols-12 md:gap-x-[var(--gutter)] [&>*]:col-span-full md:[&>h3]:col-span-7 md:[&>h3]:row-span-4 md:[&>p]:col-span-4 md:[&>p]:col-start-9 md:[&>span]:col-span-4 md:[&>span]:col-start-9 md:[&>span]:w-fit"
        : "col-span-full md:col-start-2 md:col-span-4 md:row-start-1 md:self-start md:pt-[12vh]";

  return (
    <article className="frame" aria-labelledby={`spread-${p.slug}`}>
      <Link href={`/work/${p.slug}`} className="group grid-12 gap-y-6">
        <Reveal className={plateCols}>
          <div className="relative overflow-hidden bg-[var(--paper-2)]" style={{ aspectRatio: ratio }}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={tall ? "(min-width: 768px) 42vw, 100vw" : layout === "plate-wide" ? "100vw" : "(min-width: 768px) 67vw, 100vw"}
              quality={80}
              className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out)] group-hover:scale-[1.035]"
              style={{ objectPosition: image.focus }}
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
