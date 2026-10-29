import { Inter, Cormorant_Garamond, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteUrl } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["700"],
});

const poppins = Poppins({
  variable: "--font-poppins-family",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Safcon Food Machines Pvt. Ltd | Pasta Machines Manufacturer",
  description:
    "Safcon Food Machine — trusted Pasta Making Machine Manufacturer in Delhi. Automatic plants from 50 kg/h to 500 kg/h. Pan-India supply & support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${poppins.variable} antialiased`}>
      <body suppressHydrationWarning className="flex min-h-screen flex-col overflow-x-hidden bg-page font-sans text-[16px] leading-[1.65] text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
