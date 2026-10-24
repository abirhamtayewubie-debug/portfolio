import { projects, profile } from "@/content";
import { HomeHero } from "@/components/home/HomeHero";
import { SectionIndex } from "@/components/home/SectionIndex";
import { WorkSpreads } from "@/components/home/WorkSpreads";
import { AboutTeaser } from "@/components/home/AboutTeaser";

export default function Home() {
  return (
    <>
      <HomeHero profile={profile} project={projects[0]} />
      <SectionIndex projects={projects} />
      <WorkSpreads projects={projects} />
      <AboutTeaser profile={profile} />
    </>
  );
}
