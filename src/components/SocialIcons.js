import Icon from "@/components/Icon";
import { socials } from "@/data/site";

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap gap-[5px]">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener"
          aria-label={s.name}
          className="flex h-9 w-9 items-center justify-center rounded-[10%] bg-accent text-white transition-colors duration-300 hover:bg-navy-dark"
        >
          <Icon name={s.icon} className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}
