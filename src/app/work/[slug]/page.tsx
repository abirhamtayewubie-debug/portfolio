import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNextProject, getProject, projects } from "@/content";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { ProjectIntro } from "@/components/project/ProjectIntro";
import { Blocks } from "@/components/project/Blocks";
import { NextProject } from "@/components/project/NextProject";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.summary,
      type: "article",
      images: [{ url: p.hero.src, width: p.hero.width, height: p.hero.height, alt: p.hero.alt }],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  return (
    <article>
      <ProjectHeader project={project} total={projects.length} />
      <ProjectIntro project={project} />
      <Blocks blocks={project.blocks} />
      {next && <NextProject project={next} />}
    </article>
  );
}
