"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";


/**
 * Compact fixed header, a thin bar like the border strip of a drawing sheet.
 * It takes the surface of the page beneath it: paper, or night on projects
 * whose opening is dark.
 */
export function SiteHeader({ name, nightPaths }: { name: string; nightPaths: string[] }) {
  const pathname = usePathname();
  const night = nightPaths.includes(pathname);

  const isActive = (href: string) =>
    href === "/#work" ? pathname.startsWith("/work") : pathname.startsWith(href);

  return (
    <header
      className={`frame fixed inset-x-0 top-0 z-50 flex h-[var(--header-h)] items-center justify-between border-b backdrop-blur-md ${
        night ? "surface-night border-[var(--night-rule)] !bg-[rgb(18_17_16/0.92)]" : "border-[var(--rule)] bg-[rgb(243_240_234/0.92)]"
      }`}
    >
      <Link href="/" className="t-label link-underline">
        {name}
        <span className="sr-only">, home</span>
      </Link>
      <nav aria-label="Primary">
        <ul className="flex gap-5 sm:gap-9">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="t-label link-underline"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
