"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Project } from "@/content/types";

/**
 * The signature of the site: an index of the work drawn as one section.
 * Every building stands on a shared ground line at one storey scale, its
 * basements below and its storeys above, read straight from the floor counts
 * in the portfolio (4B+G+30, G+5, ...). Masterplans and the interior, which
 * have no height to draw, lie on the ground as plates labelled with their area.
 *
 * Each column is a real link. Hover or focus brings one project forward and
 * names it in the legend; on touch, the always-visible labels do the same job.
 * Below 768px the section turns on its side and becomes a list.
 */
export function SectionIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string | null>(null);
  const current = projects.find((p) => p.slug === active);
  const listRef = useRef<HTMLOListElement>(null);
  const [state, setState] = useState<"static" | "waiting" | "drawn">("static");

  // Draw the masses up from the ground line the first time the index scrolls into view.
  useEffect(() => {
    const el = listRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight * 0.85) return;
    setState("waiting");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("drawn");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -20% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const buildings = projects.flatMap((p) => (p.section.kind === "building" ? [p.section] : []));
  const tracks = projects.reduce((n, p) => n + (p.section.kind === "plate" ? p.section.span : 1), 0);
  const frame = {
    "--max-above": Math.max(...buildings.map((b) => b.above)),
    "--max-below": Math.max(...buildings.map((b) => b.below)),
    "--tracks": tracks,
  } as CSSProperties;

  return (
    <section id="index" className="frame scroll-mt-4 pt-[var(--space-section)]" aria-labelledby="index-heading">
      <div className="grid-12 items-end gap-y-4">
        <h2 id="index-heading" className="t-label col-span-3 md:col-span-2">
          Index of work
        </h2>
        <p className="t-label col-span-3 text-graphite md:col-span-4 md:col-start-9 md:text-right">
          Section through {projects.length} projects
          <br />
          One storey scale · ground line ±0.00
        </p>
      </div>

      <ol
        ref={listRef}
        className="section-index mt-10"
        style={frame}
        data-state={state}
        onMouseLeave={() => setActive(null)}
      >
        {projects.map((p, i) => {
          const s = p.section;
          const style =
            s.kind === "building"
              ? ({ "--above": s.above, "--below": s.below, "--i": i } as CSSProperties)
              : ({ "--span": s.span, "--i": i } as CSSProperties);
          return (
            <li
              key={p.slug}
              className="section-col"
              data-kind={s.kind}
              data-dim={active !== null && active !== p.slug ? "" : undefined}
              style={style}
            >
              <Link
                href={`/work/${p.slug}`}
                className="section-link"
                onMouseEnter={() => setActive(p.slug)}
                onFocus={() => setActive(p.slug)}
                onBlur={() => setActive(null)}
              >
                <span className="section-above" aria-hidden>
                  <span className="section-mass" />
                </span>
                <span className="section-below" aria-hidden>
                  <span className="section-mass" />
                </span>
                <span className="section-label">
                  <span className="t-label section-number">{p.number}</span>
                  <span className="section-title">{p.short ?? p.title}</span>
                  <span className="t-label section-dim">{s.label}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>

      {/* Legend: names the project under the pointer, like a drawing's key. */}
      <div className="section-legend t-label mt-6 hidden min-h-[2.9em] md:block" aria-live="polite">
        {current ? (
          <p>
            <span className="text-[var(--clay-ink)]">{current.number}</span> {current.title} · {current.category} ·{" "}
            {current.location} · <span className="text-graphite">{current.section.label}</span>
          </p>
        ) : (
          <p className="text-graphite">Point to a building to read it. Every column opens its project.</p>
        )}
      </div>
    </section>
  );
}
