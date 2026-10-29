import { prose } from "@/lib/prose";

// Description tab under the product summary (reviews are intentionally not shown).
export default function ProductTabs({ product }) {
  if (!product.description) return null;

  return (
    <div className="mt-[60px]">
      <ul className="mx-auto flex w-[90vw] max-w-[1290px] justify-center border-b border-border">
        <li>
          <span className="relative block px-[18px] py-5 text-[12px] leading-none font-semibold text-brand uppercase after:absolute after:inset-x-0 after:-bottom-px after:h-[2px] after:bg-brand">
            Description
          </span>
        </li>
      </ul>

      <div className="mx-auto w-[90vw] max-w-[1290px] pt-[50px]">
        <div className={prose} dangerouslySetInnerHTML={{ __html: product.description }} />
      </div>
    </div>
  );
}
