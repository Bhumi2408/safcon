"use client";

import { useState } from "react";

const input =
  "block h-[43px] w-full rounded-[3px] border border-black/25 bg-white px-[14px] text-[16px] leading-[19px] text-black/70 outline-none transition-shadow placeholder:text-black/35 focus:border-[#066aab] focus:shadow-[0_0_0_1px_#066aab]";

// Enquiry form (home "Get in touch" + contact page). Posts to /api/enquiry.
const buttons = {
  // home form picks up the theme button style, contact page keeps the form's own blue button
  theme: "min-h-10 rounded-[3px] bg-brand px-5 py-[5px] text-[15px] font-medium text-white transition-colors hover:bg-brand-light",
  blue: "h-[41px] rounded-[3px] bg-[#066aab] px-[15px] text-[17px] leading-none font-medium text-white transition-colors hover:bg-[#055080]",
};

export default function EnquiryForm({ spacing = "pt-[30px]", textareaHeight = "h-[120px]", button = "theme" }) {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[3px] border border-[#b4d39b] bg-[#e0ffc7] px-5 py-[15px] text-[16px] text-black/70">
        Thanks for contacting us! We will be in touch with you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <fieldset className="flex gap-5 pt-[15px]">
        <legend className="sr-only">Name</legend>
        <input name="firstName" required placeholder="First Name" aria-label="First Name" className={input} />
        <input name="lastName" required placeholder="Last Name" aria-label="Last Name" className={input} />
      </fieldset>
      <div className={spacing}>
        <input type="email" name="email" required placeholder="Email" aria-label="Email" className={input} />
      </div>
      <div className={spacing}>
        <input type="number" name="mobile" required placeholder="Mobile" aria-label="Mobile" className={input} />
      </div>
      <div className={spacing}>
        <textarea
          name="message"
          placeholder="Message"
          aria-label="Message"
          className={`${input} ${textareaHeight} max-w-full resize-y py-[10px]`}
        />
      </div>
      <div className="pt-[25px]">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`${buttons[button]} disabled:opacity-70`}
        >
          {status === "sending" ? "Sending..." : "Submit"}
        </button>
        {status === "error" && <p className="mt-2.5 text-[14px] text-[#d63637]">Something went wrong. Please try again.</p>}
      </div>
    </form>
  );
}
