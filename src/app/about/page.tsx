import type { Metadata } from "next";
import Image from "next/image";
import { profile } from "@/content";
import { FullCv } from "@/components/about/FullCv";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: `${profile.name}: ${profile.descriptor.toLowerCase()} based in ${profile.location}. Biography, experience, education and recognition.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const [first, ...rest] = profile.bio;
  return (
    <>
      <section className="frame grid-12 gap-y-10 pb-[var(--space-block)] pt-[calc(var(--header-h)+clamp(3rem,9vw,8rem))]">
        <div className="col-span-full md:col-span-8">
          <p className="t-label anim-fade">About</p>
          <h1 className="t-title mt-6 max-w-[16ch]">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="anim-rise block">{profile.name}</span>
            </span>
          </h1>
          <p className="t-label anim-fade mt-6 text-graphite [animation-delay:250ms]">
            {profile.descriptor} · {profile.location}
          </p>
        </div>
        {profile.portrait && (
          <div className="anim-fade col-span-3 md:col-span-2 md:col-start-11 md:row-span-2 md:self-end [animation-delay:300ms]">
            <div className="relative bg-mat" style={{ aspectRatio: profile.portrait.width / profile.portrait.height }}>
              <Image src={profile.portrait.src} alt={profile.portrait.alt} fill priority sizes="(min-width: 768px) 16vw, 50vw" className="object-cover" />
            </div>
          </div>
        )}
        <Reveal className="col-span-full md:col-span-6 md:col-start-3">
          <p className="t-lead">{first}</p>
          <div className="prose-body mt-8 text-graphite md:columns-2 md:gap-[var(--gutter)]">
            {rest.map((p) => (
              <p key={p.slice(0, 20)} className="break-inside-avoid">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="pb-[var(--space-section)]">
        <FullCv profile={profile} />
      </div>
    </>
  );
}
