import type { MetadataRoute } from "next";
import { capabilitySlugs } from "@/content/services";
import { caseStudySlugs } from "@/content/work";
import { site } from "@/lib/site";

const lastModified = "2026-10-14";

const staticPaths = ["/", "/work", "/services", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...caseStudySlugs().map((slug) => `/work/${slug}`),
    ...capabilitySlugs().map((slug) => `/services/${slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified,
  }));
}
