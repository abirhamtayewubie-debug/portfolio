"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/content/types";

/**
 * Index of the work as an editorial table of contents. Each row is a link;
 * pointing at one (or focusing it from the keyboard) wipes its opening image
 * into the plate beside the list, over the one before, and names it in the
 * plate's caption with a small section of the building at one storey scale.
 * On narrow screens the plate is dropped and each row carries a thumbnail.
 */
export function WorkIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [pointing, setPointing] = useState(false);
  const current = projects[active];

  const show = (i: number) => {
    setPointing(true);
    if (i === active) return;
    setPrev(active);
    setActive(i);
  };

  return (
    <section id="index" className="frame scroll-mt-4 pt-[var(--space-section)]" aria-labelledby="index-heading">
      <div className="grid-12 items-end gap-y-4 border-b border-ink pb-4">
        <h2 id="index-heading" className="t-label col-span-3 md:col-span-4">
          Index of work
        </h2>
        <p className="t-label col-span-3 text-graphite md:col-span-5 md:col-start-8 md:text-right">
          {projects.length} projects<span className="max-md:hidden"> · towers, housing, masterplans, interiors</span>
        </p>
      </div>

      <div className="grid-12 mt-0 md:mt-10">
        <ol
          className="work-index col-span-full md:col-span-7"
          data-pointing={pointing ? "" : undefined}
          onMouseLeave={() => setPointing(false)}
        >
          {projects.map((p, i) => (
            <li key={p.slug} className="work-row" data-active={i === active ? "" : undefined}>
              <Link
                href={`/work/${p.slug}`}
                className="work-row-link"
                onMouseEnter={() => show(i)}
                onFocus={() => show(i)}
                onBlur={() => setPointing(false)}
              >
                <span className="work-thumb md:hidden" aria-hidden>
                  <Image
                    src={p.hero.src}
                    alt=""
                    fill
                    sizes="96px"
                    quality={75}
                    className="object-cover"
                    style={{ objectPosition: p.hero.focus }}
                  />
                </span>
                <span className="t-label work-number">{p.number}</span>
                <span className="work-title">{p.short ?? p.title}</span>
                <span className="t-label work-meta">
                  {p.category}
                  <span className="max-md:hidden"> · {p.location}</span>
                </span>
                <span className="t-label work-dim">{p.section.label}</span>
              </Link>
            </li>
          ))}
        </ol>

        {/* Plate: every opening image stacked, the active one wiped in over the last. */}
        <div className="col-span-5 col-start-8 hidden md:block" aria-hidden>
          <div className="sticky top-[calc(var(--header-h)+2rem)]">
            <div className="work-plate relative overflow-hidden bg-[var(--paper-2)]">
              {projects.map((p, i) => (
                <div
                  key={p.slug}
                  className="work-plate-image"
                  data-state={i === active ? "active" : i === prev ? "prev" : "idle"}
                >
                  <Image
                    src={p.hero.src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 40vw, 1px"
                    quality={80}
                    loading="eager"
                    className="object-cover"
                    style={{ objectPosition: p.hero.focus }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-start justify-between gap-6 border-t border-ink pt-3">
              <div className="min-w-0">
                <p className="t-label">
                  <span className="text-[var(--clay-ink)]">{current.number}</span> {current.title}
                </p>
                <p className="t-label mt-1 text-graphite">{current.location}</p>
              </div>
              <SectionGlyph project={current} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * The project drawn as a small section at one storey scale: storeys above the
 * ground line, basements hatched below; masterplans and interiors lie flat on
 * the ground with their area. The same scale for every project, so a G+5
 * dormitory reads small beside a thirty-storey tower.
 */
function SectionGlyph({ project }: { project: Project }) {
  const s = project.section;
  const unit = 2.6;
  const ground = 31 * unit + 4;
  const w = 26;
  return (
    <figure className="shrink-0 text-right">
      <svg width="132" aria-hidden height={ground + 4 * unit + 4} viewBox={`0 0 132 ${ground + 4 * unit + 4}`} className="block">
        <defs>
          <pattern id="glyph-hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="0.75" />
          </pattern>
        </defs>
        <line x1="0" x2="132" y1={ground} y2={ground} stroke="currentColor" strokeWidth="1" />
        {s.kind === "building" ? (
          <g key={project.slug} className="glyph-draw" stroke="currentColor" fill="none" strokeWidth="0.6">
            <rect x={132 - w - 2} y={ground - s.above * unit} width={w} height={s.above * unit} fill="var(--paper)" />
            {Array.from({ length: s.above - 1 }, (_, k) => (
              <line key={k} x1={132 - w - 2} x2={130} y1={ground - (k + 1) * unit} y2={ground - (k + 1) * unit} />
            ))}
            {s.below > 0 && (
              <rect x={132 - w - 2} y={ground} width={w} height={s.below * unit} fill="url(#glyph-hatch)" />
            )}
          </g>
        ) : (
          <rect
            key={project.slug}
            className="glyph-draw"
            x={132 - 40 * s.span}
            y={ground - 3}
            width={40 * s.span - 2}
            height={3}
            fill="var(--clay)"
          />
        )}
      </svg>
      <figcaption className="t-label mt-1 text-graphite">{s.label}</figcaption>
    </figure>
  );
}
