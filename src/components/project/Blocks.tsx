import type { Block } from "@/content/types";
import { isDrawing } from "@/content/types";
import { Figure } from "@/components/Figure";
import { Reveal } from "@/components/Reveal";

/** Renders a project's block sequence; each block type is its own composition. */
export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-[var(--space-block)] pb-[var(--space-section)]">
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </div>
  );
}

function BlockView({ block: b }: { block: Block }) {
  switch (b.type) {
    case "full":
      return (
        <Reveal>
          <Figure image={b.image} sizes="100vw" caption={false} />
          {b.image.caption && <p className="t-caption frame mt-3">{b.image.caption}</p>}
        </Reveal>
      );

    case "inset": {
      const align = b.align ?? "center";
      const imageCols =
        align === "left"
          ? "md:col-span-8 md:col-start-1"
          : align === "right"
            ? "md:col-span-7 md:col-start-6"
            : "md:col-span-8 md:col-start-3";
      const noteCols = align === "left" ? "md:col-span-3 md:col-start-10" : "md:col-span-3 md:col-start-2 md:row-start-1";
      return (
        <div className="frame grid-12 items-end gap-y-6">
          <Reveal className={`col-span-full ${imageCols}`}>
            <Figure image={b.image} sizes="(min-width: 768px) 66vw, 100vw" zoom={isDrawing(b.image)} />
          </Reveal>
          {b.note && (
            <Reveal className={`col-span-full ${noteCols}`} delay={0.1}>
              <p className="t-lead text-[1.25rem] md:text-[1.375rem]">{b.note}</p>
            </Reveal>
          )}
        </div>
      );
    }

    case "pair":
      return (
        <div className="frame grid-12 gap-y-8">
          {b.images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 0.08}
              className={`col-span-full md:col-span-6 ${b.offset && i === 1 ? "md:mt-[18vh]" : ""} ${b.offset && i === 0 ? "md:mb-[6vh]" : ""}`}
            >
              <Figure image={img} sizes="(min-width: 768px) 50vw, 100vw" zoom={isDrawing(img)} />
            </Reveal>
          ))}
        </div>
      );

    case "drawing":
      return (
        <div className="frame">
          <Reveal>
            <div className="bg-mat p-[clamp(0.75rem,3vw,3rem)]">
              <Figure image={b.image} sizes="100vw" caption={false} zoom />
            </div>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-[var(--rule)] pb-3">
              {b.title && <p className="t-label">{b.title}</p>}
              {b.note && <p className="t-label text-[var(--graphite)]">{b.note}</p>}
            </div>
          </Reveal>
        </div>
      );

    case "sequence": {
      const cols = b.columns ?? 3;
      const grid: Record<number, string> = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
        5: "md:grid-cols-5",
        6: "md:grid-cols-3 lg:grid-cols-6",
      };
      const sizes = `(min-width: 768px) ${Math.round(100 / cols)}vw, ${cols >= 3 ? 50 : 100}vw`;
      return (
        <section className="frame" aria-label={b.title}>
          {(b.title || b.intro) && (
            <div className="grid-12 mb-8 gap-y-3 border-t border-[var(--rule)] pt-3">
              {b.title && <h3 className="t-label col-span-full md:col-span-3">{b.title}</h3>}
              {b.intro && <p className="t-caption col-span-full md:col-span-6 md:col-start-5">{b.intro}</p>}
            </div>
          )}
          <ol className={`grid gap-x-[var(--gutter)] gap-y-10 ${cols >= 3 ? "grid-cols-2" : "grid-cols-1"} ${grid[cols]}`}>
            {b.images.map((img, i) => (
              <li key={img.src}>
                <Reveal delay={(i % cols) * 0.06}>
                  <Figure image={img} sizes={sizes} zoom index={String(i + 1).padStart(2, "0")} />
                </Reveal>
              </li>
            ))}
          </ol>
        </section>
      );
    }

    case "text":
      return (
        <section className="frame grid-12 gap-y-6">
          {b.heading && <h3 className="t-label col-span-full text-[var(--clay-ink)] md:col-span-2">{b.heading}</h3>}
          <Reveal className="prose-body col-span-full md:col-span-6 md:col-start-3">
            {b.body.map((para, i) => (
              <p key={i} className={i === 0 ? "t-lead" : "text-[var(--graphite)]"}>
                {para}
              </p>
            ))}
          </Reveal>
        </section>
      );

    case "figures":
      return (
        <section className="frame">
          <div className="grid-12 gap-y-3 border-t border-ink pt-3">
            {b.heading && <h3 className="t-label col-span-full md:col-span-3">{b.heading}</h3>}
            {b.note && <p className="t-caption col-span-full md:col-span-5 md:col-start-8">{b.note}</p>}
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-x-[var(--gutter)] gap-y-8 md:grid-cols-4 lg:grid-cols-6">
            {b.items.map((f) => (
              <div key={f.label} className="border-l border-[var(--rule)] pl-3">
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="block font-[family-name:var(--font-display)] text-[clamp(1.75rem,1.2rem+1.6vw,2.75rem)] leading-none tracking-[-0.02em]">
                    {f.value}
                  </span>
                  <span aria-hidden className="t-caption mt-2 block">
                    {f.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      );

    case "chapter":
      return (
        <div className="frame">
          <div className="grid-12 items-baseline gap-y-2 border-t border-ink pt-4">
            <h2 className="t-title col-span-full md:col-span-7">{b.title}</h2>
            {b.subtitle && <p className="t-label col-span-full text-[var(--graphite)] md:col-span-4 md:col-start-9 md:text-right">{b.subtitle}</p>}
          </div>
        </div>
      );
  }
}
