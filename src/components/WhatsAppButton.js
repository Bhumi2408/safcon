import Icon from "@/components/Icon";
import { contact } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      className="fixed right-[25px] bottom-[25px] z-30 flex items-center gap-2.5"
    >
      <span className="rounded-[10px] bg-white px-3 py-1.5 text-[16px] whitespace-nowrap text-[#333] shadow-[0_0_10px_rgba(0,0,0,0.12)]">
        Contact us
      </span>
      <span className="flex h-[54px] w-[54px] animate-jump items-center justify-center rounded-full bg-[#49E670] text-white shadow-[0_0_10px_rgba(0,0,0,0.15)]">
        <Icon name="whatsapp" className="h-[28px] w-[28px]" />
      </span>
    </a>
  );
}
