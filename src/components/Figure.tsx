import Image from "next/image";
import { isDrawing, type ImageAsset } from "@/content/types";
import { Zoomable } from "./Zoomable";

/**
 * Every image on the site goes through this component.
 * - The intrinsic aspect ratio is reserved, so nothing shifts as images load.
 * - Drawings are shown whole on a white mat and are never cropped.
 * - Renders may be cropped to a given ratio around their focal point.
 * - `zoom` lets the visitor open the image at full size (used for drawings).
 */
export function Figure({
  image,
  sizes,
  priority = false,
  ratio,
  caption = true,
  zoom = false,
  index,
  className = "",
  frameClassName = "",
}: {
  image: ImageAsset;
  sizes: string;
  priority?: boolean;
  /** Force a crop ratio (width / height). Ignored for drawings. */
  ratio?: number;
  caption?: boolean | string;
  zoom?: boolean;
  /** Sheet-style number shown before the caption, e.g. "03". */
  index?: string;
  className?: string;
  frameClassName?: string;
}) {
  const drawing = isDrawing(image);
  const aspect = !drawing && ratio ? ratio : image.width / image.height;
  const text = typeof caption === "string" ? caption : caption ? image.caption : undefined;

  const picture = (
    <div
      className={`relative w-full overflow-hidden ${drawing ? "bg-mat" : "bg-[var(--paper-2)]"} ${frameClassName}`}
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={drawing ? 90 : 80}
        className={drawing ? "object-contain" : "object-cover"}
        style={image.focus && !drawing ? { objectPosition: image.focus } : undefined}
      />
    </div>
  );

  return (
    <figure className={className}>
      {zoom ? <Zoomable image={image}>{picture}</Zoomable> : picture}
      {(text || index) && (
        <figcaption className="t-caption mt-3 flex max-w-[52ch] gap-3">
          {index && <span className="t-label shrink-0 pt-[0.15em] text-[var(--clay-ink)]">{index}</span>}
          {text && <span>{text}</span>}
        </figcaption>
      )}
    </figure>
  );
}
