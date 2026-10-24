import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { profile, projects } from "@/content";
import { siteUrl } from "@/lib/site";
import "./globals.css";

// Display: high-contrast editorial serif, used large and sparingly.
const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

// Text: a compact grotesk that stays readable at small sizes.
const text = Inter_Tight({
  variable: "--font-text",
  subsets: ["latin"],
  display: "swap",
});

// Labels: monospaced, the voice of the drawing title block.
const label = IBM_Plex_Mono({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteName = profile.name;
const description = `${profile.descriptor} based in ${profile.location}. ${profile.statement}`;
const ogImage = projects[0].hero;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${siteName}, ${profile.descriptor}`, template: `%s · ${siteName}` },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    siteName,
    type: "website",
    description,
    images: [{ url: ogImage.src, width: ogImage.width, height: ogImage.height, alt: ogImage.alt }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f3f0ea",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable} ${label.variable}`}>
      <body className="antialiased">
        <a href="#main" className="skip-link t-label">
          Skip to content
        </a>
        <SiteHeader
          name={profile.name}
          nightPaths={projects.filter((p) => p.surface === "night").map((p) => `/work/${p.slug}`)}
        />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
