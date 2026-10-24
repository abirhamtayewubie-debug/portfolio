import Image from "next/image";
import Link from "next/link";
import type { Project, Profile } from "@/content/types";

/**
 * Opening composition. A single tower render stands on the right like a
 * plate in a monograph; the name is set across the edge of the image and
 * changes colour exactly where it crosses it (ink on paper, paper on image).
 * The split is one CSS variable, so both name layers and the image agree.
 *
 * Desktop: the split is vertical (image from --split to the right edge).
 * Mobile:  the split is horizontal (image is the top --split of the screen).
 */
export function HomeHero({ profile, project }: { profile: Profile; project: Project }) {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  const name = (
    <>
      <span className="-mb-[0.16em] block overflow-hidden pb-[0.16em]">
        <span className="anim-rise block [animation-delay:350ms]">{first}</span>
      </span>
      <span className="-mb-[0.16em] block overflow-hidden pb-[0.16em]">
        <span className="anim-rise block [animation-delay:480ms]">{last}</span>
      </span>
    </>
  );

  return (
    <section className="hero relative h-[100svh] min-h-[620px] overflow-hidden" aria-labelledby="hero-name">
      {/* Image plate */}
      <Link
        href={`/work/${project.slug}`}
        className="hero-image absolute block overflow-hidden"
        aria-label={`${project.title}, ${project.location}`}
      >
        <div className="anim-curtain absolute inset-0">
          <Image
            src={project.hero.src}
            alt={project.hero.alt}
            fill
            priority
            sizes="(min-width: 768px) 62vw, 100vw"
            quality={82}
            className="anim-settle object-cover"
            style={{ objectPosition: project.hero.focus }}
          />
        </div>
        <span className="hero-scrim pointer-events-none absolute inset-x-0 bottom-0 h-1/3 md:hidden" aria-hidden />
        <span className="t-label anim-fade absolute bottom-4 right-[var(--margin)] text-white [animation-delay:1200ms] [text-shadow:0_0_12px_rgb(0_0_0/0.35)] max-md:hidden">
          {project.number} · {project.title}
        </span>
      </Link>

      {/* Name: two identical layers, each clipped to one side of the split */}
      <h1 id="hero-name" className="hero-name hero-name--ink t-monument">
        {name}
      </h1>
      <p aria-hidden className="hero-name hero-name--light t-monument">
        {name}
      </p>

      {/* Descriptor and statement */}
      <div className="hero-copy frame absolute inset-x-0 flex flex-col justify-between">
        <p className="t-label anim-fade [animation-delay:700ms]">
          {profile.descriptor}
          <br />
          <span className="text-graphite">{profile.location}</span>
        </p>
        <div className="anim-fade max-w-[23rem] [animation-delay:900ms]">
          <p className="t-lead">{profile.statement}</p>
          <a href="#index" className="t-label link-underline mt-6 inline-block">
            Index of work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
