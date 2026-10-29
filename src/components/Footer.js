import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import SocialIcons from "@/components/SocialIcons";
import { contact, footerProducts } from "@/data/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact-us" },
];

function FooterHeading({ children }) {
  return <h4 className="m-0 font-heading text-[22px] leading-none font-medium text-black md:text-[25px]">{children}</h4>;
}

function LinkList({ links, textSize, gap }) {
  return (
    <ul className={`flex flex-col ${gap}`}>
      {links.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className={`flex items-center gap-2 text-[#1B1B1B] ${textSize}`}>
            <Icon name="chevron-right" className="h-[11px] w-[11px]" />
            <span>{l.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const contactItems = [
    { icon: "map-marker-alt", text: contact.address },
    { icon: "envelope-open", text: contact.email },
    { icon: "phone-alt", text: contact.phone },
  ];

  return (
    <footer className="bg-[#EFEFEF] p-2.5 md:p-5 lg:px-[100px] lg:pt-[50px] lg:pb-2.5">
      <div className="flex flex-wrap">
        <div className="w-full p-2.5 md:w-1/2 lg:w-[30%]">
          <Image src="/images/logo.png" alt="Safcon" width={2560} height={869} className="mb-5 h-auto w-1/2 md:w-[60%]" />
          <p className="mb-5 font-arial text-[15px] text-[#1F1F1F] md:pr-[50px] md:text-[16px]">
            <strong>{contact.company}</strong> established in 2025, is a trusted manufacturer and retailer of Pasta Making
            Machines, Static Pasta Dryers, and a wide range of food processing equipment, delivering efficient and durable
            solutions for modern food production.
          </p>
          <SocialIcons />
        </div>

        <div className="w-full p-2.5 md:w-1/2 lg:w-[20%]">
          <FooterHeading>Quick Links</FooterHeading>
          <div className="mt-5">
            <LinkList links={quickLinks} textSize="text-[16px] md:text-[18px]" gap="gap-[10px] md:gap-3" />
          </div>
        </div>

        <div className="w-full p-2.5 md:w-1/2 lg:w-[20%]">
          <FooterHeading>Products</FooterHeading>
          <div className="mt-5">
            <LinkList links={footerProducts} textSize="text-[16px]" gap="gap-[10px]" />
          </div>
        </div>

        <div className="w-full p-2.5 md:w-1/2 lg:w-[30%]">
          <FooterHeading>Contact Us</FooterHeading>
          <ul className="mt-5 flex flex-col gap-[10px] md:gap-[15px]">
            {contactItems.map((item) => (
              <li key={item.icon} className="flex items-start gap-[5px] text-[16px] text-[#1B1B1B] md:text-[18px]">
                <Icon name={item.icon} className="mt-[5px] h-[17px] w-[17px] text-[#1B1B1B]" />
                <span className="pl-[5px]">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-[3px]">
        <div className="border-t border-[#8A8A8A]" />
      </div>
      <p className="mt-2.5 text-center text-[16px] text-[#202020]">
        Copyright © 2026 SAFCON FOOD MACHINES PVT. LTD. All Right Reserved | Powered by{" "}
        <a href="https://www.cybertricksmedia.com/" className="text-brand transition-colors hover:text-brand-light" target="_blank">
          Cybertricksmedia Pvt Ltd
        </a>
      </p>
    </footer>
  );
}
