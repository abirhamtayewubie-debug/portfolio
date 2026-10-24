"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import type { ImageAsset } from "@/content/types";

/**
 * Opens an image at full size in a native <dialog>: focus is trapped and
 * restored by the browser, Escape closes it, and it works by tap or keyboard.
 */
export function Zoomable({ image, children }: { image: ImageAsset; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className="group relative block w-full cursor-zoom-in text-left"
        aria-label={`Enlarge: ${image.alt}`}
      >
        {children}
        <span
          aria-hidden
          className="t-label absolute right-2 top-2 bg-ink/80 px-2 py-1 text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          Enlarge +
        </span>
      </button>
      <dialog
        ref={ref}
        className="m-0 h-[100dvh] max-h-none w-screen max-w-none bg-mat p-0 backdrop:bg-ink/80"
        onClick={(e) => {
          if (e.target === e.currentTarget) ref.current?.close();
        }}
        aria-label={image.alt}
      >
        <div className="relative h-full w-full p-[var(--margin)] pt-14">
          <Image src={image.src} alt={image.alt} fill sizes="100vw" quality={90} className="object-contain p-[var(--margin)] pt-14" />
        </div>
        <form method="dialog" className="fixed right-[var(--margin)] top-3">
          <button type="submit" className="t-label bg-ink px-3 py-2 text-paper" autoFocus>
            Close ×
          </button>
        </form>
        {image.caption && (
          <p className="t-caption fixed bottom-3 left-[var(--margin)] max-w-[60ch] bg-mat/90 px-2 py-1">{image.caption}</p>
        )}
      </dialog>
    </>
  );
}
