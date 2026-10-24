import type { MetadataRoute } from "next";
import { projects } from "@/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.6,
  }));
  const work = projects.map((p) => ({
    url: `${siteUrl}/work/${p.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.8,
    images: [`${siteUrl}${p.hero.src}`],
  }));
  return [...pages, ...work];
}
