import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import { formatRelativeTime } from "@/shared/utils/format-date";
import { cn } from "@/shared/utils/cn";
import { WhatsappCta } from "@/features/whatsapp-contact/ui/whatsapp-cta";
import { getUmkmCategoryMeta } from "../model/category-meta";
import type { UmkmListItemDto } from "../model/types";

/**
 * The prototypes draw the same UMKM card three ways: Home ("Produk Unggulan
 * Desa") puts the WhatsApp button right on the card, the /umkm directory grid
 * shows a location line plus a "Lihat Detail" link, and the "UMKM Serupa"
 * strip on the detail page uses a translucent badge with the owner name. One
 * component with three variants — no duplicated card components.
 */
export type UmkmCardVariant = "compact" | "listing" | "similar";

interface UmkmCardProps {
  umkm: UmkmListItemDto;
  variant?: UmkmCardVariant;
  className?: string;
}

export function UmkmCard({
  umkm,
  variant = "compact",
  className,
}: UmkmCardProps) {
  const categoryMeta = getUmkmCategoryMeta(umkm.category);
  const isCompact = variant === "compact";

  return (
    <article
      className={cn(
        "scroll-reveal group visible flex flex-col overflow-hidden border transition-opacity transition-shadow transition-transform duration-300",
        isCompact
          ? "bg-surface-container-lowest border-outline-variant/30 rounded-2xl hover:shadow-xl"
          : "bg-surface-container-lowest border-outline-variant/30 rounded-xl hover:shadow-lg",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          isCompact ? "h-56" : "h-48 w-full",
        )}
      >
        <Link href={`/umkm/${umkm.slug}`}>
          <FallbackImage
            src={umkm.logo}
            alt={umkm.name}
            className={cn(
              "h-full w-full object-cover transition-transform duration-500",
              isCompact ? "group-hover:scale-110" : "group-hover:scale-105",
            )}
            fallbackIcon="storefront"
          />
        </Link>

        {variant === "similar" ? (
          <span className="font-badge-xs text-badge-xs text-primary absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 shadow-sm backdrop-blur">
            {categoryMeta.label}
          </span>
        ) : (
          <span
            className={cn(
              "font-badge-xs text-badge-xs absolute rounded-full px-3 py-1 text-white shadow-md",
              isCompact
                ? "top-4 left-4"
                : "top-3 left-3 tracking-wider uppercase",
              categoryMeta.badgeClass,
            )}
          >
            {categoryMeta.label}
          </span>
        )}
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col",
          variant === "listing" ? "p-5" : "p-6",
        )}
      >
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3
            className={cn(
              "font-headline-md text-headline-md leading-tight",
              isCompact ? "text-on-surface" : "text-primary",
            )}
          >
            <Link href={`/umkm/${umkm.slug}`}>{umkm.name}</Link>
          </h3>

          {isCompact ? (
            <span className="text-on-surface-variant font-label-sm shrink-0">
              {formatRelativeTime(umkm.publishedAt)}
            </span>
          ) : (
            // Every UMKM in the directory is published, which in this project
            // only happens after an admin approves it — hence "Terverifikasi".
            variant === "listing" && (
              <span
                className="shrink-0 leading-none"
                title="Terverifikasi oleh Pemerintah Desa"
              >
                <Icon
                  name="verified"
                  filled
                  className="text-status-verified text-[20px]"
                />
                <span className="sr-only">
                  Terverifikasi oleh Pemerintah Desa
                </span>
              </span>
            )
          )}
        </div>

        <p
          className={cn(
            "text-on-surface-variant line-clamp-2",
            variant === "similar"
              ? "font-label-sm text-label-sm mb-4"
              : "font-body-base text-body-base mb-4",
            isCompact && "mb-6",
          )}
        >
          {umkm.description}
        </p>

        {isCompact && (
          <WhatsappCta
            phone={umkm.whatsappNumber}
            umkmName={umkm.name}
            className="mt-auto"
          />
        )}

        {variant === "listing" && (
          <div className="border-outline-variant/20 mt-auto flex items-center justify-between gap-3 border-t pt-4">
            <span className="text-on-surface-variant flex min-w-0 items-center gap-1.5">
              <Icon name="location_on" className="shrink-0 text-[18px]" />
              <span className="font-label-sm text-label-sm truncate">
                {umkm.address}
              </span>
            </span>
            <Link
              href={`/umkm/${umkm.slug}`}
              className="text-secondary font-label-sm text-label-sm shrink-0 font-bold hover:underline"
            >
              Lihat Detail
            </Link>
          </div>
        )}

        {variant === "similar" && (
          <div className="mt-auto flex items-center justify-between gap-2">
            <span className="font-label-sm text-label-sm text-on-surface truncate font-bold">
              {umkm.ownerName}
            </span>
            <Link
              href={`/umkm/${umkm.slug}`}
              className="text-secondary font-label-sm text-label-sm flex shrink-0 items-center gap-1 font-bold hover:underline"
            >
              Lihat Detail
              <Icon name="chevron_right" className="text-[18px]" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
