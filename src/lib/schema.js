// JSON-LD builders. Everything is derived from src/data, so editing a product, post,
// FAQ or contact detail updates the structured data automatically.
import { contact, siteUrl, socials } from "@/data/site";
import { mapSrc } from "@/data/content";

const abs = (path = "/") => (path.startsWith("http") ? path : `${siteUrl}${path === "/" ? "" : path}`);

const decode = (s) =>
  s
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#215;/g, "×")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;|&#038;/g, "&");

export const stripHtml = (html = "") =>
  decode(html.replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();

const ORG_ID = `${siteUrl}/#organization`;
const BUSINESS_ID = `${siteUrl}/#localbusiness`;

// lat/lng read from the Google Maps embed URL (…!2d<lng>!3d<lat>…)
function geo() {
  const lng = mapSrc.match(/!2d(-?[\d.]+)/)?.[1];
  const lat = mapSrc.match(/!3d(-?[\d.]+)/)?.[1];
  return lat && lng ? { "@type": "GeoCoordinates", latitude: Number(lat), longitude: Number(lng) } : undefined;
}

function postalAddress() {
  // "A-66, Sector 8, Noida 201301, Uttar Pradesh, India"
  const [street, sector, cityPin, region, country] = contact.address.split(",").map((s) => s.trim());
  const [, city, pin] = cityPin.match(/^(.*?)\s+(\d{6})$/) || [null, cityPin, ""];
  return {
    "@type": "PostalAddress",
    streetAddress: `${street}, ${sector}`,
    addressLocality: city,
    addressRegion: region,
    postalCode: pin,
    addressCountry: country === "India" ? "IN" : country,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: contact.company,
    alternateName: "Safcon Food Machines",
    url: abs("/"),
    logo: abs("/images/logo.png"),
    email: contact.email,
    telephone: contact.phone,
    address: postalAddress(),
    sameAs: socials.map((s) => s.href),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone,
      email: contact.email,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: contact.company,
    url: abs("/"),
    image: abs("/images/logo.png"),
    logo: abs("/images/logo.png"),
    email: contact.email,
    telephone: contact.phone,
    address: postalAddress(),
    geo: geo(),
    hasMap: mapSrc,
    areaServed: "IN",
    parentOrganization: { "@id": ORG_ID },
    sameAs: socials.map((s) => s.href),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: abs("/"),
    name: "Safcon Food Machines",
    publisher: { "@id": ORG_ID },
  };
}

// crumbs: [{ name, path }] — "Home" is added automatically
export function breadcrumbSchema(crumbs) {
  const items = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.path) })),
  };
}

export function webPageSchema(type, { name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: abs(path),
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": ORG_ID },
  };
}

// FAQs from [{ q, a }] (a may be HTML). Returns null when empty so pages can skip it.
export function faqSchema(items) {
  const list = items
    .map(({ q, a }) => ({ q: stripHtml(q).replace(/^(Q?\d+[.)]\s*)/i, ""), a: stripHtml(a) }))
    .filter((f) => f.q && f.a);
  if (!list.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

// Finds FAQs inside rich-text HTML. Only the part after a "FAQs" / "Frequently Asked Questions"
// heading is read, so ordinary question-style section titles are never marked up as FAQs.
// Each bold text ending in "?" is a question; its answer is everything up to the next question
// (or the next heading), so <p>, <br> and <li> layouts all work.
export function extractFaqs(html = "") {
  const start = html.search(/<(h[1-6]|p)>\s*(<(strong|b)>)?\s*([^<]{0,20}\s)?(FAQs?|Frequently Asked Questions)\b/i);
  if (start < 0) return [];
  let section = html.slice(start);
  // the FAQ block ends at the next heading — a real <h*> or a paragraph that is entirely bold
  // and not a question (e.g. "<p><b>Conclusion</b></p>")
  const firstTagEnd = section.indexOf(">") + 1;
  const end = [...section.slice(firstTagEnd).matchAll(/<h[1-6][\s>]|<p>\s*<(strong|b)>((?:(?!<\/?(?:strong|b)>)[\s\S])*?)<\/\1>\s*<\/p>/g)].find(
    (m) => m[0].startsWith("<h") || !stripHtml(m[2]).endsWith("?") && !/^(FAQs?|Frequently Asked Questions)$/i.test(stripHtml(m[2]))
  );
  if (end) section = section.slice(0, firstTagEnd + end.index);
  const questions = [...section.matchAll(/<(strong|b)>([\s\S]*?)<\/\1>/g)].filter((m) => stripHtml(m[2]).endsWith("?"));
  return questions
    .map((m, i) => {
      const from = m.index + m[0].length;
      let body = section.slice(from, questions[i + 1]?.index ?? section.length);
      const heading = body.search(/<h[1-6][\s>]/);
      if (heading >= 0) body = body.slice(0, heading);
      return { q: stripHtml(m[2]), a: stripHtml(body) };
    })
    .filter((f) => f.a);
}

// Spec table rows (<td>label</td><td>value</td>) -> [[label, value]]
export function extractSpecs(html = "") {
  return [...html.matchAll(/<tr>\s*<td>([\s\S]*?)<\/td>\s*<td>([\s\S]*?)<\/td>\s*<\/tr>/g)].map((m) => [stripHtml(m[1]), stripHtml(m[2])]);
}

export function productSchema(product) {
  const specs = extractSpecs(product.short);
  const description =
    product.seo?.description || stripHtml(product.description).slice(0, 300) || stripHtml(product.short).slice(0, 300) || product.title;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${abs(`/product/${product.slug}`)}#product`,
    name: product.title,
    description,
    image: [abs(product.image)],
    url: abs(`/product/${product.slug}`),
    category: "Food Processing Machinery",
    brand: { "@type": "Brand", name: "Safcon" },
    manufacturer: { "@id": ORG_ID },
    ...(specs.length && {
      additionalProperty: specs.map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
    }),
  };
}

export function productListSchema(products) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Products",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: abs(`/product/${p.slug}`),
      name: p.title,
      image: abs(p.image),
    })),
  };
}

export function blogPostingSchema(post) {
  const date = new Date(`${post.date} 00:00:00 GMT+0530`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo?.description || post.excerpt,
    image: [abs(post.image)],
    url: abs(`/blog/${post.slug}`),
    mainEntityOfPage: abs(`/blog/${post.slug}`),
    datePublished: Number.isNaN(date.getTime()) ? undefined : date.toISOString(),
    author: { "@type": "Organization", name: post.author, url: abs("/") },
    publisher: { "@id": ORG_ID },
  };
}

export function blogSchema(posts) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Safcon Food Machines Blog",
    url: abs("/blog"),
    publisher: { "@id": ORG_ID },
    blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, url: abs(`/blog/${p.slug}`) })),
  };
}
