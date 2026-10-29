// Tailwind classes for migrated rich-text HTML (rendered with dangerouslySetInnerHTML).
// Mirrors the old theme's entry-content typography.
export const prose = [
  "[&>*:not(:last-child)]:mb-6",
  "[&_h1]:font-heading [&_h1]:text-[40px] [&_h1]:leading-[1.5] [&_h1]:font-bold [&_h1]:text-heading",
  "[&_h2]:font-heading [&_h2]:text-[35px] [&_h2]:leading-[1.5] [&_h2]:font-bold [&_h2]:text-heading",
  "[&_h3]:font-heading [&_h3]:text-[30px] [&_h3]:leading-[1.5] [&_h3]:font-bold [&_h3]:text-heading",
  "[&_h4]:font-heading [&_h4]:text-[25px] [&_h4]:leading-[1.5] [&_h4]:font-bold [&_h4]:text-heading",
  "[&_h5]:font-heading [&_h5]:text-[20px] [&_h5]:leading-[1.5] [&_h5]:font-bold [&_h5]:text-heading",
  "[&_a]:text-brand [&_a]:underline [&_a]:transition-colors [&_a:hover]:text-brand-light",
  "[&_strong]:font-bold [&_b]:font-bold [&_em]:italic [&_i]:italic",
  "[&_ul]:list-disc [&_ul]:ps-[2.5em] [&_ol]:list-decimal [&_ol]:ps-[2.5em] [&_li:not(:last-child)]:mb-[0.3em]",
  "[&_table]:w-full [&_table]:border-collapse",
  "[&_td]:border [&_td]:border-border [&_td]:px-[1em] [&_td]:py-[0.7em]",
  "[&_th]:border [&_th]:border-border [&_th]:px-[1em] [&_th]:py-[0.7em] [&_th]:text-center [&_th]:font-semibold",
  "[&_img]:h-auto [&_img]:max-w-full",
].join(" ");
