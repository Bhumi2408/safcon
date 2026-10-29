"use client";

import { useState } from "react";

const field =
  "block h-10 w-full rounded-[3px] border border-border bg-white px-3 text-[16px] text-text outline-none transition-colors focus:border-brand";
const label = "mb-2 block text-[15px] text-text";

// Review form (product pages) and comment form (blog posts).
export default function CommentForm({ type, subject, withRating = false, withWebsite = false, messageLabel, buttonLabel }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [sent, setSent] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, subject, rating, ...data }),
    }).catch(() => {});
    setSent(true);
  }

  if (sent) {
    return <p className="rounded-[3px] bg-[#F0F1F3] px-5 py-[15px]">Your {type} is awaiting approval. Thank you!</p>;
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <p className="text-[14px]">
        Your email address will not be published. Required fields are marked <span className="text-[#d63637]">*</span>
      </p>

      {withRating && (
        <div>
          <span className={label}>
            Your rating&nbsp;<span className="text-[#d63637]">*</span>
          </span>
          <div className="flex gap-1 text-[20px]" onMouseLeave={() => setHover(0)}>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                aria-label={`${n} of 5 stars`}
                onMouseEnter={() => setHover(n)}
                onClick={() => setRating(n)}
                className={`leading-none transition-colors ${(hover || rating) >= n ? "text-brand-light" : "text-[#d5d8dc]"}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <p>
          <label className={label} htmlFor={`${type}-name`}>
            Name&nbsp;<span className="text-[#d63637]">*</span>
          </label>
          <input id={`${type}-name`} name="name" required className={field} />
        </p>
        <p>
          <label className={label} htmlFor={`${type}-email`}>
            Email&nbsp;<span className="text-[#d63637]">*</span>
          </label>
          <input id={`${type}-email`} name="email" type="email" required className={field} />
        </p>
        {withWebsite && (
          <p className="md:col-span-2">
            <label className={label} htmlFor={`${type}-url`}>
              Website
            </label>
            <input id={`${type}-url`} name="website" className={field} />
          </p>
        )}
      </div>

      <p>
        <label className={label} htmlFor={`${type}-message`}>
          {messageLabel}&nbsp;<span className="text-[#d63637]">*</span>
        </label>
        <textarea id={`${type}-message`} name="message" required className={`${field} h-[170px] resize-y py-3`} />
      </p>

      <p className="flex items-center gap-2.5 text-[14px]">
        <input id={`${type}-consent`} name="consent" type="checkbox" className="h-4 w-4 accent-brand" />
        <label htmlFor={`${type}-consent`}>Save my name, email, and website in this browser for the next time I comment.</label>
      </p>

      <p>
        <button
          type="submit"
          className="min-h-10 rounded-[3px] bg-brand px-5 py-[5px] text-[15px] font-medium text-white transition-colors hover:bg-brand-light"
        >
          {buttonLabel}
        </button>
      </p>
    </form>
  );
}
