import PageBanner from "@/components/PageBanner";
import ProductGrid from "@/components/ProductGrid";
import products from "@/data/products";
import { productsSeoHtml } from "@/data/content";
import { prose } from "@/lib/prose";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, extractFaqs, faqSchema, productListSchema, webPageSchema } from "@/lib/schema";

export const metadata = {
  alternates: { canonical: "/products" },
  title: "Best Pasta Plant Manufacturer & Supplier in Noida | Safcon Food Machines",
  description:
    "Safcon Food Machine is a trusted Pasta Plant Manufacturer and Supplier in Noida, offering high-performance pasta processing plants for efficient and large-scale production.",
  keywords: ["Pasta Plant Manufacturer", "Pasta Plant Supplier", "Pasta Plant Manufacturer Noida", "Pasta Plant Supplier in Noida"],
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("CollectionPage", { name: metadata.title, description: metadata.description, path: "/products" }),
          productListSchema(products),
          breadcrumbSchema([{ name: "Products", path: "/products" }]),
          faqSchema(extractFaqs(productsSeoHtml)),
        ]}
      />
      <PageBanner as="h1" title="Best Pasta Plant Manufacturer & Supplier" crumb="Products" />

      <ProductGrid products={products} />

      <section className="mx-auto max-w-[1140px]">
        <div className={`p-2.5 ${prose}`} dangerouslySetInnerHTML={{ __html: productsSeoHtml }} />
      </section>
    </>
  );
}
