import type { MetadataRoute } from "next";

// Note: manifest.json is inherently single-language. This defaults to the
// Arabic name/description since Arabic is the site's primary locale — if a
// locale-aware manifest is needed later, generate one per-locale at
// /[locale]/manifest.ts instead.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "شركة بيت الجنوب | Southern House Company",
    short_name: "Southern House",
    description:
      "الشركة الأم لمكان المرح والبالونات والألعاب — Home of Fun Place, Balloons & Party Solutions, and Toys.",
    start_url: "/ar",
    display: "standalone",
    background_color: "#F4EFE9",
    theme_color: "#1B3A5C",
    icons: [
      {
        // [PLACEHOLDER] Replace with real 192x192 / 512x512 PNG icons
        // exported from the final logo before production launch.
        src: "/images/placeholder-brand-funplace.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
