import PageBanner from "@/components/PageBanner";
import ProductGrid from "@/components/ProductGrid";
import JsonLd from "@/components/JsonLd";
import products from "@/data/products";
import { prose } from "@/lib/prose";
import { breadcrumbSchema, extractFaqs, faqSchema, productListSchema, webPageSchema } from "@/lib/schema";

// Category-style landing page: banner (H1), selected product cards, then SEO content.
export default function LandingPage({ page }) {
  const items = page.products.map((slug) => products.find((p) => p.slug === slug)).filter(Boolean);
  const path = `/product/${page.slug}`;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema("CollectionPage", { name: page.seo.title, description: page.seo.description, path }),
          productListSchema(items),
          breadcrumbSchema([{ name: page.name, path }]),
          faqSchema(extractFaqs(page.content)),
        ]}
      />
      <PageBanner as="h1" title={page.name} crumb={page.name} />
      <ProductGrid products={items} />
      <section className="mx-auto max-w-[1140px]">
        <div className={`p-2.5 ${prose}`} dangerouslySetInnerHTML={{ __html: page.content }} />
      </section>
    </>
  );
}
