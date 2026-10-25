/**
 * Content model. Everything shown on the site comes from these typed objects,
 * so adding a project means adding one file in src/content/projects and its
 * images in public/images/projects/<slug>/.
 *
 * Every field that the source portfolio may not supply is optional. Leave a
 * field out rather than filling it with a guess: components skip what is missing.
 */

export type ImageKind =
  | "render"
  | "photo"
  | "model"
  | "plan"
  | "section"
  | "elevation"
  | "diagram"
  | "detail"
  | "sketch"
  | "site";

export interface ImageAsset {
  /** Path under /public, e.g. /images/projects/<slug>/hero.webp */
  src: string;
  width: number;
  height: number;
  alt: string;
  kind: ImageKind;
  caption?: string;
  /** Focal point for cropped (object-fit: cover) placements, as CSS object-position. */
  focus?: string;
}

const drawingKinds: ImageKind[] = ["plan", "section", "elevation", "diagram", "detail", "site"];

/** Drawings are never cropped; renders and photos may be, around `focus`. */
export const isDrawing = (img: ImageAsset) => drawingKinds.includes(img.kind);

/**
 * A project page is a sequence of blocks. Each block picks a composition, so
 * projects with different material can tell their story differently.
 */
export type Block =
  /** Edge-to-edge image. */
  | { type: "full"; image: ImageAsset }
  /** One image set into the grid, aligned left, right or centred, with an optional side note. */
  | { type: "inset"; image: ImageAsset; align?: "left" | "right" | "center"; note?: string }
  /** Two images side by side; `offset` drops the second one for an editorial stagger. */
  | { type: "pair"; images: [ImageAsset, ImageAsset]; offset?: boolean }
  /** A drawing given room to be read, on a white mat, with a title-block label. */
  | { type: "drawing"; image: ImageAsset; title?: string; note?: string }
  /** A numbered run of drawings or views (concept steps, floor plans, zones). */
  | { type: "sequence"; title?: string; intro?: string; images: ImageAsset[]; columns?: 2 | 3 | 4 | 5 | 6 }
  /** Editorial text. */
  | { type: "text"; heading?: string; body: string[] }
  /** Figures quoted from the portfolio, e.g. land coverage or unit counts. */
  | { type: "figures"; heading?: string; items: { value: string; label: string }[]; note?: string }
  /** A chapter break inside a long project. */
  | { type: "chapter"; title: string; subtitle?: string };

export interface ProjectFact {
  label: string;
  value: string;
}

/**
 * How the project is drawn in the homepage section index.
 * Buildings are drawn by storeys above and below ground; masterplans and
 * interiors are drawn as a ground plate labelled with their area.
 */
export type Section =
  | { kind: "building"; above: number; below: number; label: string }
  | { kind: "plate"; label: string; span: number };

export interface Project {
  slug: string;
  title: string;
  /** Short name for tight spaces (index, next-project link). */
  short?: string;
  /** Curated index number, e.g. "01". Derived from the order if omitted. */
  number?: string;
  category: string;
  location?: string;
  facts?: ProjectFact[];
  /** One sentence, from the portfolio, used in previews and metadata. */
  summary: string;
  /** The project description, from the portfolio. */
  intro: string[];
  section: Section;
  hero: ImageAsset;
  /** Show the hero at the full height of the screen on wide screens. */
  heroFullScreen?: boolean;
  /** Image used for the homepage preview. Falls back to hero. */
  cover?: ImageAsset;
  /** Hero surface: night for renders that read better on black. */
  surface?: "paper" | "night";
  blocks: Block[];
}

export interface CvEntry {
  period?: string;
  title: string;
  place?: string;
  location?: string;
  points?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  descriptor: string;
  statement: string;
  location: string;
  bio: string[];
  portrait?: ImageAsset;
  email: string;
  phone?: string;
  links?: SocialLink[];
  experience: CvEntry[];
  education: CvEntry[];
  recognition: CvEntry[];
  certificates: CvEntry[];
  skills: { heading: string; items: string[] }[];
  quote?: { text: string; author: string };
}
