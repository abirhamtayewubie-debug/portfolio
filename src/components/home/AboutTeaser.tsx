import Image from "next/image";
import type { Profile } from "@/content/types";
import { Reveal } from "@/components/Reveal";
import { FullCv } from "@/components/about/FullCv";

export function AboutTeaser({ profile }: { profile: Profile }) {
  return (
    <section className="pb-[var(--space-section)] pt-[var(--space-section)]" aria-labelledby="about-teaser">
      <div className="frame">
        <div className="grid-12 gap-y-10 border-t border-ink pt-4">
          <h2 id="about-teaser" className="t-label col-span-full md:col-span-3">
            About
          </h2>
          {profile.portrait && (
            <Reveal className="col-span-3 md:col-span-3 md:col-start-2 md:row-start-2">
              <div
                className="relative bg-mat"
                style={{ aspectRatio: profile.portrait.width / profile.portrait.height }}
              >
                <Image
                  src={profile.portrait.src}
                  alt={profile.portrait.alt}
                  fill
                  sizes="(min-width: 768px) 24vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}
          <Reveal className="col-span-full md:col-span-7 md:col-start-6 md:row-start-2" delay={0.1}>
            <p className="t-lead">{profile.bio[0]}</p>
            <div className="mt-8 space-y-5 text-graphite">
              {profile.bio.slice(1).map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <dl className="t-label mt-10 grid grid-cols-2 gap-x-[var(--gutter)] gap-y-5 md:grid-cols-3">
              <div>
                <dt className="text-graphite">Practice</dt>
                <dd>8+ years</dd>
              </div>
              <div>
                <dt className="text-graphite">Competitions</dt>
                <dd>1st and 2nd place</dd>
              </div>
              <div>
                <dt className="text-graphite">Education</dt>
                <dd>B.Sc. Architecture, EiABC</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
      <div className="mt-[var(--space-block)]">
        <FullCv profile={profile} />
      </div>
    </section>
  );
}
