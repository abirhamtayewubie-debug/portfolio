import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";

/**
 * The hand-off to the next project: its title at monumental size over a
 * letterbox of its hero, which opens to full height on hover.
 */
export function NextProject({ project: p }: { project: Project }) {
  return (
    <nav aria-label="Next project" className="border-t border-ink">
      <Link href={`/work/${p.slug}`} className="group block">
        <div className="frame flex items-baseline justify-between pb-6 pt-5">
          <span className="t-label">Next project</span>
          <span className="t-label text-[var(--clay-ink)]">{p.number}</span>
        </div>
        <p className="frame t-monument pb-8 text-[clamp(3rem,1rem+9vw,11rem)] transition-colors duration-500 group-hover:text-[var(--clay-ink)]">
          {p.short ?? p.title}
          <span aria-hidden className="ml-[0.15em] inline-block transition-transform duration-700 group-hover:translate-x-3">
            →
          </span>
        </p>
        <div className="relative h-[28vh] overflow-hidden transition-[height] duration-[1100ms] ease-[var(--ease-inout)] group-hover:h-[52vh] max-md:h-[30vh] max-md:group-hover:h-[30vh]">
          <Image
            src={p.hero.src}
            alt=""
            fill
            sizes="100vw"
            quality={75}
            className="object-cover"
            style={{ objectPosition: p.hero.focus }}
          />
        </div>
      </Link>
    </nav>
  );
}
