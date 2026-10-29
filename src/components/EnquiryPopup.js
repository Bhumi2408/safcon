"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import EnquiryForm from "@/components/EnquiryForm";

const SHOWN_KEY = "safcon-enquiry-popup-shown";
const DELAY_MS = 5000;
const CLOSE_AFTER_SUBMIT_MS = 2000; // keep the thank-you message visible briefly, then close

// Enquiry popup shown 5s after landing on any page, once per browser tab
// (sessionStorage is per-tab, so a new tab/window shows it again).
export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SHOWN_KEY)) return;
    } catch {}
    const t = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SHOWN_KEY, "1");
      } catch {}
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-popup-title"
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-[880px] overflow-y-auto rounded-[10px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-heading shadow-[0_0_8px_rgba(0,0,0,0.15)] transition-colors hover:bg-accent hover:text-white"
        >
          <Icon name="close" className="h-3 w-3" />
        </button>

        <div className="hidden w-[42%] shrink-0 items-center justify-center rounded-l-[10px] bg-[#FFF8F2] p-5 md:flex">
          <Image
            src="/images/e2e08da7-98c0-4360-914c-ac21e5f4d098-photoroom-e1782799261896.png"
            alt="Automatic Pasta Making Machine"
            width={670}
            height={803}
            className="h-auto w-full"
          />
        </div>

        <div className="w-full p-5 md:p-[30px]">
          <h2 id="enquiry-popup-title" className="font-heading text-[25px] leading-none font-semibold text-heading md:text-[35px]">
            GET IN TOUCH
          </h2>
          <p className="mt-2.5 text-[15px]">Share your requirement and our team will get back to you with the right machine and a free quote.</p>
          <EnquiryForm
            source="Popup"
            spacing="pt-5"
            textareaHeight="h-[90px]"
            onSuccess={() => setTimeout(() => setOpen(false), CLOSE_AFTER_SUBMIT_MS)}
          />
        </div>
      </div>
    </div>
  );
}
