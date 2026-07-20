import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Static routes for the marketing site. Product detail lives in an on-page
// modal (not its own URL), so there are no per-product entries yet — add them
// here if products move to dedicated `/gallery/[slug]` pages.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/gallery", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
