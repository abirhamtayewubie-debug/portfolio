import type { Project } from "@/content/types";
import { Reveal } from "@/components/Reveal";

export function ProjectIntro({ project: p }: { project: Project }) {
  const [lead, ...rest] = p.intro;
  return (
    <section className="frame grid-12 gap-y-8 py-[var(--space-block)]" aria-label="Project description">
      <p className="t-label col-span-full text-[var(--clay-ink)] md:col-span-2">Project</p>
      <Reveal className="col-span-full md:col-span-6 md:col-start-3">
        <p className="t-lead">{lead}</p>
      </Reveal>
      {rest.length > 0 && (
        <Reveal className="prose-body col-span-full text-[var(--graphite)] md:col-span-3 md:col-start-10 md:pt-2" delay={0.1}>
          {rest.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </Reveal>
      )}
    </section>
  );
}
