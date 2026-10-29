import { siteUrl } from "@/data/site";
import { getSiteRoutes } from "@/lib/routes";

export default async function sitemap() {
  const routes = await getSiteRoutes();
  return routes.map((r) => ({
    url: `${siteUrl}${r.path === "/" ? "" : r.path}`,
    lastModified: r.lastModified,
    changeFrequency: "daily",
    priority: r.priority,
  }));
}
