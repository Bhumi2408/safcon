import Link from "next/link";
import Icon from "@/components/Icon";

// Cream title banner with breadcrumb used on inner pages.
export default function PageBanner({ title, crumb, as: Tag = "h2" }) {
  const size = Tag === "h1" ? "md:text-[40px]" : "md:text-[35px]";
  return (
    <section className="bg-[#FFF9ED]">
      <div className="mx-auto flex min-h-[250px] max-w-[1140px] flex-col items-center justify-center text-center md:min-h-[300px]">
        <Tag className={`font-heading text-[30px] leading-none font-semibold text-heading ${size}`}>{title}</Tag>
        <nav aria-label="Breadcrumb" className="mt-5">
          <ul className="flex flex-wrap items-center justify-center text-[15px] md:text-[20px]">
            <li className="mr-2.5 flex items-center gap-[5px]">
              <Icon name="home" className="h-[1em] w-[1em] text-black" />
              <Link href="/" className="text-brand transition-colors hover:text-brand-light">
                Home
              </Link>
            </li>
            <li className="mr-2.5">»</li>
            <li className="mr-2.5">{crumb}</li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
