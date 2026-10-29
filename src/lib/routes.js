import { cacheLife } from "next/cache";
import products from "@/data/products";
import posts from "@/data/blog";
import landingPages from "@/data/landingPages";

// Every public URL on the site. Cached for a day, so sitemap/llms.txt regenerate daily
// and new products/posts added to src/data show up automatically.
export async function getSiteRoutes() {
  "use cache";
  cacheLife("days");

  const lastModified = new Date().toISOString();
  return [
    { path: "/", title: "Home", priority: 1, lastModified },
    { path: "/about-us", title: "About Us", priority: 0.8, lastModified },
    { path: "/products", title: "Products", priority: 0.9, lastModified },
    { path: "/blog", title: "Blog", priority: 0.7, lastModified },
    { path: "/contact-us", title: "Contact Us", priority: 0.8, lastModified },
    ...landingPages.map((p) => ({ path: `/product/${p.slug}`, title: p.name, priority: 0.9, lastModified })),
    ...products.map((p) => ({ path: `/product/${p.slug}`, title: p.title, priority: 0.8, lastModified })),
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, title: p.title, priority: 0.6, lastModified })),
  ];
}
