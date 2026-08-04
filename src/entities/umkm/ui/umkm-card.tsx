import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import { formatRelativeTime } from "@/shared/utils/format-date";
import { getUmkmCategoryMeta } from "../model/category-meta";
import { buildWhatsappLink } from "../model/whatsapp-link";
import type { UmkmListItemDto } from "../model/types";

interface UmkmCardProps {
  umkm: UmkmListItemDto;
}

export function UmkmCard({ umkm }: UmkmCardProps) {
  const categoryMeta = getUmkmCategoryMeta(umkm.category);

  return (
    <div className="bg-surface-container-lowest border-outline-variant/30 scroll-reveal group overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <Link href={`/umkm/${umkm.slug}`}>
          <FallbackImage
            src={umkm.logo}
            alt={umkm.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            fallbackIcon="storefront"
          />
        </Link>
        <div className="absolute top-4 left-4">
          <span
            className={`${categoryMeta.badgeClass} font-badge-xs text-badge-xs rounded-full px-3 py-1 text-white shadow-md`}
          >
            {categoryMeta.label}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-start justify-between">
          <h3 className="font-headline-md text-headline-md text-on-surface">
            <Link href={`/umkm/${umkm.slug}`}>{umkm.name}</Link>
          </h3>
          <span className="text-on-surface-variant font-label-sm shrink-0">
            {formatRelativeTime(umkm.publishedAt)}
          </span>
        </div>
        <p className="font-body-base text-body-base text-on-surface-variant mb-6 line-clamp-2">
          {umkm.description}
        </p>
        <a
          href={buildWhatsappLink(umkm.whatsappNumber, umkm.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-bold text-white transition-all hover:brightness-95"
        >
          <Icon name="chat" /> Hubungi WhatsApp
        </a>
      </div>
    </div>
  );
}
