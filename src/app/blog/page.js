import Image from "next/image";
import Link from "next/link";
import posts from "@/data/blog";
import JsonLd from "@/components/JsonLd";
import { blogSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog - Safcon Food Machines",
  description: "Guides and insights on pasta plants and food processing machinery from Safcon Food Machines.",
};

const meta = "flex flex-wrap items-center text-[12px] font-semibold uppercase";

export default function BlogPage() {
  return (
    <section className="mx-auto w-[90vw] max-w-[1290px] py-[60px]">
      <JsonLd data={[blogSchema(posts), breadcrumbSchema([{ name: "Blog", path: "/blog" }])]} />
      <div className="grid grid-cols-1 gap-[30px] min-[690px]:grid-cols-2 min-[1000px]:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col gap-5 rounded-[3px] bg-white p-[30px] shadow-[0px_12px_18px_-6px_rgba(34,56,101,0.04)]"
          >
            <ul className={meta}>
              <li>
                <Link href="/blog" className="text-text transition-colors hover:text-brand">
                  {post.category}
                </Link>
              </li>
            </ul>
            <h2 className="font-heading text-[18px] leading-[1.3] font-bold text-heading min-[690px]:text-[20px]">
              <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-brand">
                {post.title}
              </Link>
            </h2>
            <Link href={`/blog/${post.slug}`} className="relative -mx-[30px] block aspect-[4/3] overflow-hidden">
              <Image src={post.image} alt={post.title} fill sizes="(max-width: 690px) 90vw, 400px" className="object-cover" />
            </Link>
            <p className="line-clamp-4">{post.excerpt}</p>
            <ul className={`${meta} mt-auto gap-0 border-t border-border pt-5`}>
              <li className="after:mx-2 after:content-['/']">{post.author}</li>
              <li>{post.date}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
