import PageBanner from "@/components/PageBanner";
import Icon from "@/components/Icon";
import SocialIcons from "@/components/SocialIcons";
import EnquiryForm from "@/components/EnquiryForm";
import { contact } from "@/data/site";
import { mapSrc } from "@/data/content";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, localBusinessSchema, webPageSchema } from "@/lib/schema";

export const metadata = {
  alternates: { canonical: "/contact-us" },
  title: "Contact us - Safcon Food Machines",
  description: "Get in touch with Safcon Food Machines Pvt. Ltd., A-66, Sector 8, Noida — pasta plant and food processing machinery manufacturer.",
};

const boxes = [
  { icon: "envelope", title: "EMAIL", text: contact.email },
  { icon: "map-marker-alt", title: "ADDRESS", text: contact.address },
  { icon: "mobile-alt", title: "MOBILE", text: contact.phone },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("ContactPage", { name: metadata.title, description: metadata.description, path: "/contact-us" }),
          localBusinessSchema(),
          breadcrumbSchema([{ name: "Contact Us", path: "/contact-us" }]),
        ]}
      />
      <PageBanner title="CONTACT US" crumb="Contact Us" />

      <section className="bg-white lg:px-[70px] lg:pb-[70px]">
        <div className="flex flex-wrap md:p-5 lg:px-0 lg:pt-[70px] lg:pb-0">
          <div className="w-full lg:w-[35%]">
            <div className="m-2.5 flex flex-col gap-5 border border-transparent bg-white p-2.5 transition-colors hover:border-white md:p-5 lg:py-[30px] lg:pr-[50px] lg:pl-[30px]">
              {boxes.map((b) => (
                <div
                  key={b.title}
                  className="flex flex-col items-center gap-[15px] rounded-[10px] bg-text p-[25px] text-center md:flex-row md:p-[15px] md:text-start"
                >
                  <span className="flex shrink-0 items-center justify-center rounded-[10%] bg-accent p-[0.5em] text-[22px] text-white md:text-[25px]">
                    <Icon name={b.icon} className="h-[1em] w-[1em]" />
                  </span>
                  <div>
                    <h3 className="mb-px font-heading text-[18px] leading-[1.5] font-semibold text-white md:text-[20px]">{b.title}</h3>
                    <p className="text-[16px] break-words text-white md:text-[18px]">{b.text}</p>
                  </div>
                </div>
              ))}
              <div className="py-[15px]">
                <div className="w-1/2 border-t border-[#B7B7B7]" />
              </div>
              <h2 className="-mt-2.5 font-heading text-[22px] leading-none font-semibold text-[#1C1C1C] md:mt-0">GET IN TOUCH</h2>
              <SocialIcons />
            </div>
          </div>
          <div className="w-full bg-white p-5 lg:w-[65%] lg:py-10 lg:pr-[70px] lg:pl-0">
            <div className="-mt-[15px]">
              <EnquiryForm spacing="pt-10" textareaHeight="h-[125px]" button="blue" source="Contact Us page" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-5 md:p-5 lg:px-[70px] lg:pt-0 lg:pb-[70px]">
        <iframe
          src={mapSrc}
          title="Safcon Food Machines location"
          className="block h-[400px] w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </section>
    </>
  );
}
