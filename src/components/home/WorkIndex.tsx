"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/content/types";

/**
 * Index of the work as an editorial table of contents, set in two columns on
 * wide screens and one on phones. Each row is a link; pointing at one (or
 * focusing it from the keyboard) brings it forward and fades the rest back.
 * On narrow screens each row carries a thumbnail of the project.
 */
export function WorkIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<number | null>(null);

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

      <ol
        className="work-index md:mt-6"
        data-pointing={active !== null ? "" : undefined}
        onMouseLeave={() => setActive(null)}
      >
        {projects.map((p, i) => (
          <li key={p.slug} className="work-row" data-active={i === active ? "" : undefined}>
            <Link
              href={`/work/${p.slug}`}
              className="work-row-link"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
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
    </section>
  );
}
