import Link from "next/link";
import { profile } from "@/content";
import { nav } from "@/lib/site";

/**
 * The closing sheet of every page: the portfolio's own closing quote,
 * then the contact details, set as the last drawing in the set.
 */
export function SiteFooter() {
  return (
    <footer className="surface-night frame pb-6 pt-[var(--space-section)]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Contact
      </h2>
      {profile.quote && (
        <figure className="grid-12 mb-[var(--space-block)]">
          <blockquote className="t-lead col-span-full max-w-[22ch] md:col-span-7 md:col-start-2">
            “{profile.quote.text}”
          </blockquote>
          <figcaption className="t-label col-span-full mt-5 text-[var(--mute)] md:col-span-4 md:col-start-2">
            {profile.quote.author}, quoted in the portfolio
          </figcaption>
        </figure>
      )}

      <div className="grid-12 gap-y-10 border-t border-[var(--rule)] pt-8">
        <p className="t-label col-span-full text-[var(--mute)] md:col-span-2">Write to</p>
        <a
          href={`mailto:${profile.email}`}
          className="link-underline col-span-full w-fit break-all font-[family-name:var(--font-display)] text-[clamp(1.75rem,1rem+3.4vw,4.75rem)] leading-[1] tracking-[-0.02em] md:col-span-10"
        >
          {profile.email}
        </a>

        <dl className="t-label col-span-full grid grid-cols-2 gap-x-[var(--gutter)] gap-y-4 md:col-span-6 md:col-start-3 md:grid-cols-3">
          <div>
            <dt className="text-[var(--mute)]">Telephone</dt>
            <dd>
              <a href={`tel:${profile.phone?.replace(/\s/g, "")}`} className="link-underline">
                {profile.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[var(--mute)]">Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          {profile.links?.map((l) => (
            <div key={l.href}>
              <dt className="text-[var(--mute)]">{l.label}</dt>
              <dd>
                <a href={l.href} className="link-underline" rel="me noopener noreferrer" target="_blank">
                  {l.href.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              </dd>
            </div>
          ))}
        </dl>

        <nav aria-label="Footer" className="t-label col-span-full md:col-span-4 md:col-start-9 md:justify-self-end">
          <ul className="flex gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="t-label mt-[var(--space-block)] flex justify-between gap-4 text-[var(--mute)]">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.descriptor}</span>
      </div>
    </footer>
  );
}
