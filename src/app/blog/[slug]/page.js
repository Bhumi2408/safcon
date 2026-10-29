import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import CommentForm from "@/components/CommentForm";
import posts from "@/data/blog";
import { prose } from "@/lib/prose";
import JsonLd from "@/components/JsonLd";
import { blogPostingSchema, breadcrumbSchema, extractFaqs, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return post ? { ...post.seo, alternates: { canonical: `/blog/${slug}` } } : {};
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="py-[60px]">
      <JsonLd
        data={[
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          faqSchema(extractFaqs(post.content)),
        ]}
      />
      <header className="mx-auto w-[90vw] max-w-[750px] text-center">
        <h1 className="font-heading text-[30px] leading-[1.5] font-bold text-heading">{post.title}</h1>
        <ul className="mt-5 flex flex-wrap items-center justify-center text-[12px] leading-[1.3] font-semibold uppercase">
          <li className="flex items-center gap-2.5 after:mx-2 after:content-['/']">
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-border text-[#a5a5a5]">
              <Icon name="user" className="h-3.5 w-3.5" />
            </span>
            {post.author}
          </li>
          <li className="after:mx-2 after:content-['/']">{post.date}</li>
          <li>
            <Link href="/blog" className="text-text transition-colors hover:text-brand">
              {post.category}
            </Link>
          </li>
        </ul>
      </header>

      <div className={`mx-auto mt-[60px] w-[90vw] max-w-[750px] ${prose}`} dangerouslySetInnerHTML={{ __html: post.content }} />

      <section className="mx-auto mt-[60px] w-[90vw] max-w-[750px] border-t border-border pt-[60px]">
        <h2 className="mb-5 font-heading text-[16px] leading-[1.5] font-bold text-heading">Leave a Reply</h2>
        <CommentForm type="comment" subject={post.title} withWebsite messageLabel="Add Comment" buttonLabel="Post Comment" />
      </section>
    </article>
  );
}
