import { Icon } from "@/shared/ui/icon";
import { cn } from "@/shared/utils/cn";
import { buildWhatsappLink } from "@/entities/umkm/model/whatsapp-link";

interface WhatsappCtaProps {
  /** Stored format: leading "62", no "+" or spaces. */
  phone: string;
  umkmName: string;
  label?: string;
  className?: string;
}

/**
 * The one WhatsApp call-to-action used by both the UMKM card and the detail
 * sidebar — `prd_2.txt §4.7` makes WhatsApp the only contact channel for UMKM,
 * so the brand color and the prefilled message live in a single place.
 */
export function WhatsappCta({
  phone,
  umkmName,
  label = "Hubungi WhatsApp",
  className,
}: WhatsappCtaProps) {
  return (
    <a
      href={buildWhatsappLink(phone, umkmName)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 font-bold text-white transition-all hover:brightness-95 active:scale-95 whitespace-nowrap text-sm",
        className,
      )}
    >
      <Icon name="chat" className="shrink-0 text-base" />
      <span className="truncate">{label}</span>
    </a>
  );
}
