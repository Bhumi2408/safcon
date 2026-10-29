import Link from "next/link";
import Icon from "@/components/Icon";

export default function ButtonLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-[5px] bg-accent px-[15px] py-2.5 text-[14px] leading-none text-white transition-colors duration-300 hover:bg-navy md:px-6 md:py-3"
    >
      <span>{children}</span>
      <Icon name="long-arrow-alt-right" className="h-[1em] w-[1em]" />
    </Link>
  );
}
