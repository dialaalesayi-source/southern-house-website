import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

// [PLACEHOLDER] Replace with the real production domain once deployed.
const siteUrl = "https://www.example.com";

// Static routes that exist (or are planned) for the site. As new pages are
// built, add their path here so they appear in the sitemap for both locales.
const routes = [
  "", // homepage
  "/about",
  "/brands",
  "/fun-place",
  "/balloons",
  "/toys",
  "/gallery",
  "/branches",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${siteUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}/${l}${route}`])
          ),
        },
      });
    }
  }

  return entries;
}
