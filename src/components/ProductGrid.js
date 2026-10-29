import Image from "next/image";
import Link from "next/link";

// Orange product cards (Products page and product landing pages).
export default function ProductGrid({ products }) {
  return (
    <section className="bg-white p-2.5 md:p-5 lg:px-[120px] lg:py-[50px]">
      <div className="grid grid-cols-1 gap-5 p-2.5 min-[640px]:grid-cols-2 min-[960px]:grid-cols-3">
        {products.map((p) => (
          <div key={p.slug} className="border border-[#B4B4B4] bg-[#F09827] text-center">
            <Link href={`/product/${p.slug}`} className="relative block aspect-square">
              <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw" className="object-cover" />
            </Link>
            <div className="p-2.5">
              <h2 className="font-poppins text-[16px] leading-[1.5] font-medium text-[#070707] transition-colors hover:text-white md:text-[17px]">
                <Link href={`/product/${p.slug}`}>{p.name}</Link>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
