import type { MetadataRoute } from "next";
import { getAllContentPaths } from "@/lib/content";
import { CONTENT_TYPES } from "@/config/navigation";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://clonebuilderswiki.top";

  // Listing pages derive from CONTENT_TYPES (single source of truth) so the
  // sitemap cannot drift when navigation categories change.
  const staticPaths = ["/", ...CONTENT_TYPES.map((ct) => `/${ct}`), "/privacy-policy", "/terms-of-service", "/copyright", "/about"];
  const listingSet = new Set(CONTENT_TYPES.map((ct) => `/${ct}`));

  // Dynamic paths: scan actual MDX content files
  const contentPaths = await getAllContentPaths("en");
  const dynamicPaths = contentPaths.map((item) => `/${[item.contentType, ...item.slug].join("/")}`);

  const paths = [...staticPaths, ...dynamicPaths];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path === "/" ? "" : path}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("daily" as const) : ("weekly" as const),
      priority: path === "/" ? 1 : listingSet.has(path) ? 0.8 : 0.6,
    })),
  );
}
