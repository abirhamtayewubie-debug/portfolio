import type { Metadata } from "next";
import Link from "next/link";
import { profile, projects } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${profile.name}, ${profile.descriptor.toLowerCase()} in ${profile.location}.`,
  alternates: { canonical: "/contact" },
};

/**
 * Contact is short on purpose: the footer below carries the full details,
 * so this page states the invitation and the two direct routes.
 */
export default function ContactPage() {
  return (
    <section className="frame grid-12 gap-y-12 pb-[var(--space-block)] pt-[calc(var(--header-h)+clamp(3rem,9vw,8rem))]">
      <div className="col-span-full md:col-span-9">
        <p className="t-label anim-fade">Contact</p>
        <h1 className="t-title mt-6 max-w-[15ch] text-balance">
          <span className="block overflow-hidden pb-[0.08em]">
            <span className="anim-rise block">For commissions, competitions and collaboration</span>
          </span>
        </h1>
      </div>
      <dl className="anim-fade col-span-full grid gap-y-6 border-t border-ink pt-4 [animation-delay:300ms] md:col-span-6 md:col-start-3 md:grid-cols-2">
        <div>
          <dt className="t-label text-graphite">Email</dt>
          <dd className="mt-2">
            <a href={`mailto:${profile.email}`} className="link-underline break-all text-[1.25rem]">
              {profile.email}
            </a>
          </dd>
        </div>
        {profile.phone && (
          <div>
            <dt className="t-label text-graphite">Telephone</dt>
            <dd className="mt-2">
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="link-underline text-[1.25rem]">
                {profile.phone}
              </a>
            </dd>
          </div>
        )}
        <div>
          <dt className="t-label text-graphite">Based in</dt>
          <dd className="mt-2 text-[1.25rem]">{profile.location}</dd>
        </div>
        <div>
          <dt className="t-label text-graphite">Work</dt>
          <dd className="mt-2 text-[1.25rem]">
            <Link href="/#index" className="link-underline">
              {projects.length} projects in the index
            </Link>
          </dd>
        </div>
      </dl>
    </section>
  );
}
