import type { MetadataRoute } from "next";

// [PLACEHOLDER] Replace with the real production domain once deployed.
const siteUrl = "https://www.example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
