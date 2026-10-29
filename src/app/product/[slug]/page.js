import Image from "next/image";
import { notFound } from "next/navigation";
import ProductTabs from "@/components/ProductTabs";
import products from "@/data/products";
import { prose } from "@/lib/prose";
import JsonLd from "@/components/JsonLd";
import LandingPage from "@/components/LandingPage";
import landingPages from "@/data/landingPages";
import { breadcrumbSchema, extractFaqs, faqSchema, productSchema } from "@/lib/schema";

// /product/<slug> serves both single products and product landing pages
export function generateStaticParams() {
  return [...products, ...landingPages].map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = products.find((p) => p.slug === slug) || landingPages.find((p) => p.slug === slug);
  return page ? { ...page.seo, alternates: { canonical: `/product/${slug}` } } : {};
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const landing = landingPages.find((p) => p.slug === slug);
  if (landing) return <LandingPage page={landing} />;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <article className="pt-[60px] pb-[60px]">
      <JsonLd
        data={[
          productSchema(product),
          breadcrumbSchema([
            { name: "Products", path: "/products" },
            { name: product.title, path: `/product/${product.slug}` },
          ]),
          faqSchema(extractFaqs(product.description)),
        ]}
      />
      <div className="mx-auto flex w-[90vw] max-w-[1290px] flex-col gap-10 min-[1000px]:flex-row">
        {/* gallery: 40% wide, sticks while a long spec table scrolls past (original "sticky-gallery") */}
        <div className="relative aspect-square w-full shrink-0 min-[1000px]:sticky min-[1000px]:top-[50px] min-[1000px]:w-[calc(40%-16px)] min-[1000px]:self-start">
          <Image src={product.image} alt={product.title} fill priority sizes="(max-width: 999px) 90vw, 500px" className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="font-heading text-[30px] leading-[1.5] font-semibold text-brand">{product.title}</h1>
          <div className={`mt-2.5 ${prose}`} dangerouslySetInnerHTML={{ __html: product.short }} />
          <div className="mt-[60px] border-t border-border" />
        </div>
      </div>
      <ProductTabs product={product} />
    </article>
  );
}
