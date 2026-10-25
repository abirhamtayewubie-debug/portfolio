import type { Profile } from "@/content/types";
import { CvSection } from "@/components/about/CvSection";

/** The whole CV: experience, education, recognition, certificates and skills. */
export function FullCv({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col gap-[var(--space-block)]">
      <CvSection heading="Experience" entries={profile.experience} />
      <CvSection heading="Education" entries={profile.education} />
      <CvSection heading="Recognition" entries={profile.recognition} />
      <CvSection heading="Certificates" entries={profile.certificates} />

      <section className="frame" aria-labelledby="cv-skills">
        <div className="grid-12 gap-y-8 border-t border-ink pt-4">
          <h2 id="cv-skills" className="t-label col-span-full md:col-span-2">
            Skills
          </h2>
          {profile.skills.map((s) => (
            <div key={s.heading} className="col-span-3 md:col-span-3 md:[&:nth-child(2)]:col-start-3">
              <h3 className="t-label text-graphite">{s.heading}</h3>
              <ul className="mt-3 space-y-1">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
