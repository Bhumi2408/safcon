import PageBanner from "@/components/PageBanner";
import AboutIntro from "@/components/AboutIntro";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, organizationSchema, webPageSchema } from "@/lib/schema";

export const metadata = {
  alternates: { canonical: "/about-us" },
  title: "About us - Safcon Food Machines Pvt Ltd",
  description:
    "Safcon Food Machines Pvt. Ltd. is a trusted name in delivering high-performance. We Deliver Excellence in Food Processing & Pasta Manufacturing Solutions.",
};

const cardHeading = "font-heading text-[20px] leading-none font-bold text-heading md:text-[25px]";
const card =
  "rounded-[10px] border border-[#FFE9BD] bg-[#FFFCF6] p-[15px] transition-colors duration-300 hover:bg-[#FFA22C17] md:p-[25px]";

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("AboutPage", { name: metadata.title, description: metadata.description, path: "/about-us" }),
          organizationSchema(),
          breadcrumbSchema([{ name: "About Us", path: "/about-us" }]),
        ]}
      />
      <PageBanner title="ABOUT US" crumb="About Us" />
      <AboutIntro />

      <section className="-mt-5 px-2.5 pb-2.5 md:mt-0 md:px-5 md:pb-5 lg:px-[120px] lg:pb-[50px]">
        <div className="p-2.5">
          <p className="text-[15px] md:text-[16px]">
            Every story has a beginning, our began at 2025 from an idea-since our inception, we have had a strong desire and
            vivacious hunger to do that well and it is the dedication that has positioned us today as one of the most
            successful Pasta Plant Manufacturers in the world. Located in the National Capital Region of the country, Noida we
            have reached to every corner of the country to provide simple and excellent performing equipment. The design of all
            our products are exclusive and attractive and is such that the is easy to operate and easy to handle with zero or
            minimum wastage, our products effectively deliver the required products each and every time.
          </p>

          <div className="mt-5 flex flex-wrap">
            <div className="w-full md:w-1/2 md:p-2.5">
              <div className={`${card} h-full md:my-[5px] md:mr-[5px]`}>
                <h2 className={cardHeading}>OUR VISION</h2>
                <p className="mt-2.5">
                  To be the preferred global partner for pasta and food processing machinery by setting new benchmarks in
                  innovation, quality, and customer satisfaction. We strive to empower food manufacturers with advanced
                  automation, sustainable production technologies, and dependable machinery that ensures superior product
                  consistency and long-term business success.
                </p>
              </div>
            </div>
            <div className="mt-5 w-full md:mt-0 md:w-1/2 md:p-2.5">
              <div className={`${card} h-full md:my-[5px] md:mr-[5px]`}>
                <h2 className={cardHeading}>OUR MISSION</h2>
                <p className="mt-2.5">
                  At Safcon Food Machines Pvt. Ltd. our mission is to design, manufacture, and deliver technologically advanced
                  pasta plants, macaroni plants, noodle processing lines, and customized food processing equipment that exceed
                  industry expectations. We focus on engineering excellence, precision manufacturing, energy-efficient
                  solutions, and exceptional customer service to help our clients improve productivity, reduce production
                  costs, and achieve profitable growth.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2.5 md:pt-5">
            <h2 className={`${cardHeading} pt-2.5 md:pt-0`}>QUALITY ASSURANCE</h2>
            <p className="mt-2.5 text-[15px] md:text-[16px]">
              Maintaining the quality of our range is one of the major concerns of our company. In order to attain supreme
              quality, we make use of fine quality raw materials, which are procured from our reliable and dependable vendors.
              <br />
              Furthermore, we make sure that all the existing industry standards and norms are followed to maintain the
              flawlessness of the range. Moreover, we conduct multiple tests on the selection, before handing over to the
              customers. From the very beginning, we have been offering high quality and in future, we wish to continue with
              the same.
            </p>
            <h2 className={`${cardHeading} mt-5`}>TEAM SAFCON FOOD MACHINES PVT. LTD.</h2>
            <p className="mt-2.5">
              Coming together is beginning, staying together is progress and working together is success. At Safcon Food
              Machines, our qualified and experienced team is core competency.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
