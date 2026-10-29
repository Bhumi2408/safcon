"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Full-width banner slideshow. images: [{ src, alt }]; `aspect` keeps the original 28:12 / 13:24 ratio.
export default function HeroSlider({ images, aspect, sizes = "100vw" }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className={`relative w-full overflow-hidden ${aspect}`}>
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {images.map(({ src, alt }, i) => (
          <div key={src} className="relative h-full w-full shrink-0">
            <Image src={src} alt={alt} fill priority={i === 0} sizes={sizes} className="object-cover" />
          </div>
        ))}
      </div>
      <ul className="absolute bottom-0 left-1/2 flex -translate-x-1/2 -translate-y-[30px] gap-3">
        {images.map(({ src }, i) => (
          <li key={src}>
            <button
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`block h-2 w-2 rounded-full transition-colors ${i === active ? "bg-brand" : "bg-border"}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
