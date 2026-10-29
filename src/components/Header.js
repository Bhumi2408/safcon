"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import { navLinks } from "@/data/site";

function isActive(pathname, href) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="relative z-40 bg-white">
      <div className="flex h-20 items-center justify-between px-[5vw] min-[690px]:h-[100px] min-[1000px]:px-[30px]">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Safcon">
          <Image
            src="/images/logo.png"
            alt="Safcon"
            width={2560}
            height={869}
            priority
            className="h-auto max-h-20 w-auto min-[690px]:max-h-[70px]"
          />
        </Link>

        <nav aria-label="Main menu" className="absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-center min-[1000px]:flex">
          <ul className="flex h-full items-center gap-[50px]">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href} className="flex h-full items-center">
                  <Link
                    href={link.href}
                    className={`group relative flex h-[33%] items-center font-arial text-[16px] leading-[1.3] font-semibold uppercase transition-colors duration-150 hover:text-accent ${
                      active ? "text-accent" : "text-[#252525]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-0 -bottom-[3px] h-[2px] origin-left bg-accent transition-transform duration-200 group-hover:scale-x-100 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/contact-us"
          className="hidden min-h-10 items-center rounded-[50px] bg-accent px-5 py-[5px] text-[16px] leading-[1.3] font-medium text-white transition-colors duration-150 hover:bg-navy min-[1000px]:inline-flex"
        >
          ENQUIRY NOW
        </Link>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-end text-[#dadada] min-[690px]:text-[#e1e1e1] min-[1000px]:hidden"
        >
          <Icon name="menu" className="h-[14px] w-[18px]" />
        </button>
      </div>

      {/* Off-canvas mobile menu */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 transition-opacity duration-300 min-[1000px]:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute inset-y-0 right-0 flex w-[90vw] flex-col bg-[rgba(18,21,25,0.98)] shadow-[0px_0px_70px_rgba(0,0,0,0.35)] transition-transform duration-300 min-[690px]:w-[65vw] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-[25px]">
            <button
              type="button"
              aria-label="Close drawer"
              onClick={() => setOpen(false)}
              className="flex h-[33px] w-[33px] items-center justify-center rounded-[5px] text-white/50 transition-colors hover:text-white"
            >
              <Icon name="close" className="h-3 w-3" />
            </button>
          </div>
          <nav aria-label="Off Canvas Menu" className="flex flex-1 flex-col px-[35px] pb-[35px]">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-[5px] text-[17px] leading-[1.3] font-semibold transition-colors min-[690px]:text-[20px] ${
                      isActive(pathname, link.href) ? "text-brand-light" : "text-white hover:text-brand-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
