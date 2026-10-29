import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import AboutIntro from "@/components/AboutIntro";
import Carousel from "@/components/Carousel";
import ButtonLink from "@/components/ButtonLink";
import EnquiryForm from "@/components/EnquiryForm";
import Faq from "@/components/Faq";
import { faqs } from "@/data/content";
import JsonLd from "@/components/JsonLd";
import { faqSchema, localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata = {
  alternates: { canonical: "/" },
  title: "Safcon Food Machines Pvt. Ltd. | Pasta Machines Manufacturer",
  description:
    "Safcon Food Machines Pvt. Ltd. – Pasta making machine manufacturer in Delhi NCR. Get automatic pasta plants, static dryers & snack machines. Contact us now!",
  keywords: [
    "Safcon Food Machines",
    "Pasta Machines Manufacturer",
    "Pasta making machine manufacturer in Delhi NCR",
    "Pasta making machine Supplier in Delhi NCR",
  ],
};

// alt = machine shown in each banner
const desktopSlides = [
  { src: "/images/untitled-design-2.jpg.jpeg", alt: "Safcon Batch Roaster Machine" },
  { src: "/images/pasta-dryer-banner-scaled.png", alt: "Safcon Static Tray Dryer for Pasta" },
  { src: "/images/safcon-banner-automatic-machine-scaled.png", alt: "Safcon Automatic Pasta Making Machine" },
  { src: "/images/safcon-2.jpg.jpeg", alt: "Safcon Mini Pasta Making Machine" },
];
const mobileSlides = [
  { src: "/images/untitled-design.jpg.jpeg", alt: "Safcon Batch Roaster Machine" },
  { src: "/images/mob-4.jpg-1-scaled.jpeg", alt: "Safcon Static Tray Dryer for Pasta" },
  { src: "/images/mob-2.jpg-1-scaled.jpeg", alt: "Safcon Automatic Pasta Making Machine" },
  { src: "/images/safcon-3.jpg-scaled.jpeg", alt: "Safcon Mini Pasta Making Machine" },
];

const productSlides = [
  { src: "/images/4.png", alt: "Continuous Conveyor Dryer" },
  { src: "/images/5.png", alt: "Batch Mixer" },
  { src: "/images/6.png", alt: "Mini Pasta Making Machine" },
  { src: "/images/4-2.png", alt: "Rotary Roaster" },
  { src: "/images/1.png", alt: "Screw Conveyor" },
  { src: "/images/3.png", alt: "Belt Conveyor" },
];

const industries = [
  { title: "Pasta Plant", image: "/images/food-textures-03-fusilloni-pasta-texture.jpg" },
  { title: "Macaroni Plant", image: "/images/rda-macaroni-pasta-zoom-24a0aa60.jpeg" },
  { title: "Vermicelli Plant", image: "/images/uncooked-vermicelli-pasta-background_245047-192.jpg" },
  { title: "Penne Pasta Plant", image: "/images/images-1.jpg" },
  { title: "Kurkure Making Machine", image: "/images/low-fat-good-in-taste-kurkure-namkeen-758.jpg" },
  { title: "Noodles Making Machine", image: "/images/201cafffd7c5cd80ae2a2b9d7884ebea.webp" },
  { title: "Namkeen Plant", image: "/images/salty-tasty-flavor-crispy-and-crunchy-fried-mixed-namkeen-575.jpg" },
  { title: "3D Snacks Pellet", image: "/images/b6f0.jpg" },
];

const services = [
  {
    title: "Industrial Safety Systems",
    text: "We deliver high-quality safety systems designed to ensure workplace protection and compliance with industry standards.",
  },
  {
    title: "Engineering & Fabrication",
    text: "Precision-engineered fabrication solutions built for strength, durability, and performance.",
  },
  {
    title: "Customized Project Solutions",
    text: "Tailor-made industrial solutions developed to meet specific client requirements efficiently.",
  },
  {
    title: "Maintenance & Support",
    text: "Reliable maintenance and technical support to ensure smooth and uninterrupted operations.",
  },
];

const clientLogos = [
  "gallery_69328_20230516140508-small.jpg",
  "gallery_69335_20230516140536-small.jpg",
  "gallery_69337_20230516140543-small.jpg",
  "gallery_69338_20230516140547-small.jpg",
  "gallery_69339_20230516140552-small.jpg",
  "gallery_69340_20230516140556-small.jpg",
  "gallery_69327_20230516140504-small.jpg",
  "gallery_69326_20230516140501-small.jpg",
  "gallery_69329_20230516140511-small.jpg",
  "gallery_69330_20230516140515-small.jpg",
  "gallery_69331_20230516140519-small.jpg",
  "gallery_69333_20230516140527-small.jpg",
  "gallery_69334_20230516140531-small.jpg",
  "gallery_69332_20230516140523-small.jpg",
];

const sectionTitle = "font-heading text-[25px] leading-[1.5] font-bold md:text-[40px]";

export default function Home() {
  return (
    <>
      {/* Banner slideshow (separate artwork for mobile) */}
      <section className="hidden md:block">
        <HeroSlider images={desktopSlides} aspect="aspect-[28/12]" />
      </section>
      <section className="md:hidden">
        <HeroSlider images={mobileSlides} aspect="aspect-[13/24]" />
      </section>

      <AboutIntro showButton />

      {/* Our Products */}
      <section className="p-2.5 md:px-[120px] md:pt-0 md:pb-20">
        <div className="p-2.5">
          <h2 className={`${sectionTitle} text-center text-heading`}>Our Products</h2>
          <div className="mt-5">
            <Carousel perView={1} breakpoints={[[689, 2], [999, 3]]} gap={20} delay={2000}>
              {productSlides.map(({ src, alt }) => (
                <div key={src} className="relative h-[370px] w-full md:h-[450px]">
                  <Image src={src} alt={alt} fill sizes="(max-width: 689px) 100vw, (max-width: 999px) 50vw, 33vw" className="object-cover" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="mt-5 text-center">
            <ButtonLink href="/products">View All Product</ButtonLink>
          </div>
        </div>
      </section>

      {/* Working process + videos */}
      <section className="bg-[#E2A750] md:pt-[50px]">
        <h2 className={`${sectionTitle} text-center text-white`}>Safcon Working Process</h2>
      </section>
      <section className="pb-[30px] md:pb-0">
        <video
          src="/videos/panther-banner-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="block aspect-[2.33333] w-full object-cover"
        />
      </section>
      <section className="px-2.5 pb-[30px] md:p-0">
        <video src="/videos/video-1.mp4" autoPlay muted loop playsInline className="block aspect-video w-full object-cover" />
      </section>

      {/* Industries We Serve */}
      <section className="bg-[#23232D] p-2.5 md:px-[120px] md:py-[50px]">
        <div className="p-2.5">
          <h2 className={`${sectionTitle} text-center text-white`}>Industries We Serve</h2>
          <div className="mt-5 flex flex-wrap">
            {industries.map((item, i) => (
              <div key={item.title} className="w-1/2 p-2.5 md:w-1/4">
                <div className="relative h-20">
                  <h3 className="absolute top-20 left-[33px] rounded-full border-[5px] border-[#373435] bg-[#515151] p-[9px] font-arial text-[14px] leading-none font-normal text-white md:top-[50px] md:left-1/2 md:-translate-x-1/2 md:text-[20px]">
                    {String(i + 1).padStart(2, "0")}
                  </h3>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="h-[150px] w-[80%] rounded-[10px] border-[5px] border-white object-cover md:w-[60%]"
                  />
                </div>
                <h3 className="mt-5 text-center font-poppins text-[17px] leading-[1.3em] font-medium text-brand md:text-[22px] md:leading-none">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="mb-[50px] bg-white p-2.5 md:px-0 md:pt-[50px] md:pb-0">
        <h2 className={`${sectionTitle} text-center text-heading`}>Global Presence</h2>
        <div className="mt-5 flex justify-center">
          <Image src="/images/safcon-map.jpg.jpeg" alt="Global Presence" width={1280} height={720} className="h-auto w-full md:w-[90%]" />
        </div>
      </section>

      {/* Core services */}
      <section className="p-2.5 md:px-[120px] md:pt-0 md:pb-[50px]">
        <div className="p-2.5">
          <div className="relative text-center">
            <div className="absolute bottom-0 hidden w-full text-[60px] leading-none font-semibold text-[rgba(156,156,156,0.12)] uppercase min-[960px]:block">
              Reliable Industrial Solutions You Can Trust
            </div>
            <div className="relative z-[1] inline-flex text-[20px] leading-none text-brand md:text-[25px]">Our Core Services</div>
            <h2 className="relative z-[1] font-heading text-[25px] leading-[1.3em] font-semibold text-heading md:text-[35px] md:leading-[1.5]">
              Reliable Food Processing Solutions You Can Trust
            </h2>
          </div>
          <div className="mt-5 pt-[30px]">
            <Carousel perView={1} breakpoints={[[689, 2]]} gap={20} delay={4000} slideClass="flex">
              {services.map((s) => (
                <div key={s.title} className="w-full border border-[#eee] bg-white p-10 transition-all duration-300">
                  <h3 className="m-0 pb-1.5 font-heading text-[22px] leading-[1.5] font-bold text-[#0d0925]">{s.title}</h3>
                  <p className="m-0 font-arial text-[15px] text-[#6d7882]">{s.text}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="bg-[#F2F2F2] p-2.5 md:px-[120px] md:pt-[30px] md:pb-[50px]">
        <div className="p-2.5">
          <h2 className="text-center font-heading text-[25px] leading-[1.3em] font-semibold text-[#313131] md:text-[35px] md:leading-[1.5]">
            Where Do You Find Our Conveyors?
          </h2>
          <div className="mt-5">
            <Carousel
              perView={2}
              breakpoints={[[640, 3], [960, 6]]}
              gap={10}
              delay={4000}
              pauseOnHover
              arrows
              arrowClass="hidden text-[#4B4B4B] transition-colors hover:text-[#DF8528] lg:block"
            >
              {clientLogos.map((file) => (
                <div key={file} className="flex h-[120px] items-center justify-center rounded-[10px] bg-white p-5">
                  <Image src={`/images/${file}`} alt="Client logo" width={350} height={350} className="h-full w-full object-contain" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Founder message */}
      <section className="p-2.5 md:px-[120px] md:py-[50px]">
        <div className="flex flex-wrap">
          <div className="w-full p-2.5 md:w-1/4">
            <div className="rounded-[10px] border border-[#C075161F] bg-white p-2.5">
              <Image src="/images/1-5.png" alt="TAHIR SAIFI" width={1000} height={1000} className="mx-auto h-auto w-[70%] md:w-full" />
              <h3 className="mt-5 text-center font-heading text-[22px] leading-none font-bold text-heading">TAHIR SAIFI - Founder</h3>
            </div>
          </div>
          <div className="w-full p-2.5 md:w-3/4 md:pl-[30px] [&_p:not(:last-child)]:mb-[1.5em]">
            <p>
              <strong>Dear Young Founders,</strong>
            </p>
            <p>
              Congratulations on taking the first step toward your entrepreneurial journey. Starting a business at a young age
              requires courage, passion, and determination.
            </p>
            <p>
              Always believe in your vision, work consistently toward your goals, and never let temporary setbacks discourage
              you. Every challenge is an opportunity to learn, grow, and become stronger.
            </p>
            <p>
              Remember, age is never a limitation. With dedication, creativity, and perseverance, you have the power to build
              something meaningful and create a positive impact on the world.
            </p>
            <p>
              I wish you success, confidence, and endless opportunities as you continue your journey. Keep dreaming, keep
              learning, and keep moving forward.
            </p>
            <p>
              <strong>Best Wishes,</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Get in touch */}
      <section className="bg-brand p-2.5 md:px-[120px] md:py-[50px]">
        <div className="rounded-[10px] bg-white p-2.5 md:p-[30px]">
          <h2 className="text-center font-heading text-[25px] leading-[1.5] font-semibold text-heading md:text-[35px]">GET IN TOUCH</h2>
          <div className="mx-auto mt-5 flex max-w-[1140px] flex-wrap">
            <div className="w-full p-2.5 md:w-[45%]">
              <div className="flex justify-center rounded-[10px] bg-[#FFF8F2] p-2.5 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.07)]">
                <Image
                  src="/images/e2e08da7-98c0-4360-914c-ac21e5f4d098-photoroom-e1782799261896.png"
                  alt="Automatic Pasta Making Machine"
                  width={670}
                  height={803}
                  className="h-auto w-[80%]"
                />
              </div>
            </div>
            <div className="w-full p-2.5 md:w-[55%] md:pl-[50px]">
              <EnquiryForm source="Home - Get in Touch" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1140px]">
        <div className="p-2.5">
          <Faq items={faqs} />
        </div>
      </section>
      <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema(), faqSchema(faqs)]} />
    </>
  );
}
