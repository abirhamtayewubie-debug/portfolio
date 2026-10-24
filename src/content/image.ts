import sizes from "./image-sizes.json";
import type { ImageAsset, ImageKind } from "./types";

const table: Record<string, number[]> = sizes;

/**
 * Builds an ImageAsset for /public/images/projects/<slug>/<name>.webp, reading
 * its pixel size from image-sizes.json (written by the extraction script).
 */
export function projectImage(
  slug: string,
  name: string,
  kind: ImageKind,
  alt: string,
  extra: Partial<Pick<ImageAsset, "caption" | "focus">> = {},
): ImageAsset {
  const key = `${slug}/${name}.webp`;
  const size = table[key];
  if (!size) throw new Error(`Unknown image ${key}; add it to image-sizes.json`);
  return { src: `/images/projects/${key}`, width: size[0], height: size[1], kind, alt, ...extra };
}

/** Shorthand bound to one project. */
export const imagesFor =
  (slug: string) =>
  (name: string, kind: ImageKind, alt: string, extra?: Partial<Pick<ImageAsset, "caption" | "focus">>) =>
    projectImage(slug, name, kind, alt, extra);
