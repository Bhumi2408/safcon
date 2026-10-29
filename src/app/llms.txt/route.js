import { contact, siteUrl } from "@/data/site";
import { getSiteRoutes } from "@/lib/routes";
import products from "@/data/products";
import posts from "@/data/blog";

// llms.txt — plain-text site summary for AI crawlers (https://llmstxt.org)
export async function GET() {
  const routes = await getSiteRoutes();
  const url = (path) => `${siteUrl}${path === "/" ? "" : path}`;
  const pages = routes.filter((r) => !r.path.startsWith("/product/") && !r.path.startsWith("/blog/"));

  const body = [
    `# ${contact.company}`,
    "",
    "> Safcon Food Machines Pvt. Ltd. (Noida, India) manufactures pasta making machines, complete pasta and macaroni plants, static and continuous pasta dryers, roasters, mixers and conveyors for the food processing industry, with installation and after-sales support across India.",
    "",
    "## Pages",
    ...pages.map((r) => `- [${r.title}](${url(r.path)})`),
    "",
    "## Products",
    ...products.map((p) => `- [${p.title}](${url(`/product/${p.slug}`)})${p.seo.description ? `: ${p.seo.description}` : ""}`),
    "",
    "## Blog",
    ...posts.map((p) => `- [${p.title}](${url(`/blog/${p.slug}`)}): ${p.seo.description || p.excerpt.slice(0, 160)}`),
    "",
    "## Contact",
    `- Address: ${contact.address}`,
    `- Email: ${contact.email}`,
    `- Phone / WhatsApp: ${contact.phone}`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
