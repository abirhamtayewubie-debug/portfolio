import type { Project } from "./types";
import { eeigHeadquarters } from "./projects/eeig-headquarters";
import { imamuAhmedMasjid } from "./projects/imamu-ahmed-masjid";
import { oggc } from "./projects/oggc";
import { eeuHeadquarters } from "./projects/eeu-headquarters";
import { chakaVillas } from "./projects/chaka-villas";
import { aiMuseum } from "./projects/ai-museum";
import { burujMasterplan } from "./projects/buruj-masterplan";
import { realityApartment } from "./projects/reality-apartment";
import { terraceApartment } from "./projects/terrace-apartment";
import { eeuDistrictOffice } from "./projects/eeu-district-office";
import { ecpmiDormitory } from "./projects/ecpmi-dormitory";

/**
 * Order here is the curated order of the site: the homepage index,
 * project numbering and the next-project transition all follow it.
 * To add a project, create a file in ./projects and add it to this list.
 */
const ordered: Project[] = [
  eeigHeadquarters,
  imamuAhmedMasjid,
  oggc,
  eeuHeadquarters,
  chakaVillas,
  aiMuseum,
  burujMasterplan,
  realityApartment,
  terraceApartment,
  eeuDistrictOffice,
  ecpmiDormitory,
];

export const projects: Project[] = ordered.map((p, i) => ({
  ...p,
  number: p.number ?? String(i + 1).padStart(2, "0"),
}));

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1 || projects.length < 2) return undefined;
  return projects[(i + 1) % projects.length];
}

export { profile } from "./profile";
