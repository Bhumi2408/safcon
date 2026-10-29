"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

export default function Faq({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center border-b border-[#d5d8dc] p-[15px] text-left leading-none font-bold text-text"
            >
              <Icon name={isOpen ? "caret-up" : "caret-right"} className="mr-[1em] h-[1em] w-[1em] text-black" />
              <span className="leading-none">{item.q}</span>
            </button>
            <div
              className={`border-b border-[#d5d8dc] p-[15px] [&_p]:m-0 [&_strong]:font-bold ${isOpen ? "block" : "hidden"}`}
              dangerouslySetInnerHTML={{ __html: item.a }}
            />
          </div>
        );
      })}
    </div>
  );
}
