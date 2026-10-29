import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import ButtonLink from "@/components/ButtonLink";

const leftList = [
  "High-Quality Food Processing Equipment",
  "Advanced Pasta & Food Processing Technology",
  "Experienced Technical Team",
  "Timely Project Execution",
];
const rightList = [
  "Customized Engineering Solutions",
  "Strict Quality Control Standards",
  "Cost-Effective & Durable Products",
  "Nationwide Project Support",
];

function CheckList({ items }) {
  return (
    <ul className="flex flex-col">
      {items.map((t) => (
        <li key={t} className="flex items-center gap-[5px] text-[15px] md:text-[14px]">
          <Icon name="check" className="h-3 w-3 text-[#38CA4C]" />
          <span className="pl-[5px]">{t}</span>
        </li>
      ))}
    </ul>
  );
}

// "Welcome to Safcon" block shared by the home and about pages.
export default function AboutIntro({ showButton = false }) {
  return (
    <section className="p-2.5 md:px-[100px] md:pt-[50px] md:pb-0">
      <div className="flex flex-wrap md:p-2.5">
        <div className="relative w-full md:w-1/2 md:p-2.5">
          <Image
            src="/images/2-1-e1774432405521.png"
            alt=""
            width={1335}
            height={500}
            className="absolute top-0 left-0 z-10 h-auto w-full animate-float"
          />
          <Image
            src="/images/1-8.png"
            alt="SAFCON FOOD MACHINES PVT. LTD"
            width={1537}
            height={1023}
            sizes="(max-width: 767px) 100vw, 50vw"
            className="h-auto w-full"
          />
        </div>

        <div className="w-full pt-5 md:p-2.5 lg:w-1/2">
          <h1 className="font-heading text-[18px] leading-none font-medium text-brand md:text-[22px]">
            WELCOME TO SAFCON FOOD MACHINES PVT. LTD.
          </h1>
          <h2 className="mt-2.5 font-heading text-[25px] leading-[1.3em] font-semibold text-black md:text-[38px] md:leading-none">
            We Deliver Excellence in <span className="text-brand">Industrial Safety &amp; Infrastructure</span> Solutions
          </h2>
          <p className="mt-2.5 font-arial">
            <Link href="/contact-us" className="text-brand transition-colors hover:text-brand-light">
              <strong>Safcon Food Machines Pvt. Ltd.</strong>
            </Link>{" "}
            is a trusted name in delivering high-performance. We Deliver Excellence in Food Processing &amp; Pasta
            Manufacturing Solutions. With years of expertise and a commitment to engineering excellence, we provide
            innovative, durable, and cost-effective solutions tailored to diverse industrial requirements. Our focus
            remains on quality manufacturing, precision, and customer satisfaction across every project we undertake.
          </p>
          <div className="mx-auto flex max-w-[1140px] flex-wrap pt-2.5 md:pt-0">
            <div className="w-full md:w-1/2 md:p-2.5">
              <CheckList items={leftList} />
              {showButton && (
                <div className="mt-5">
                  <ButtonLink href="/about-us">More About Us</ButtonLink>
                </div>
              )}
            </div>
            <div className="w-full pt-2.5 md:w-1/2 md:p-2.5">
              <CheckList items={rightList} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
