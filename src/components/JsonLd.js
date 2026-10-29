// Renders one or more JSON-LD blocks; null entries (e.g. a page without FAQs) are skipped.
export default function JsonLd({ data }) {
  return [data]
    .flat()
    .filter(Boolean)
    .map((d, i) => (
      <script
        key={i}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }}
      />
    ));
}
