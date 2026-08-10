import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import { formatIndonesianDate } from "@/shared/utils/format-date";
import { cn } from "@/shared/utils/cn";
import { getNewsCategoryBadgeClass } from "../model/category-meta";
import type { NewsListItemDto } from "../model/types";

/**
 * The three prototype screens draw the same news card slightly differently:
 * Home ("Berita Terbaru") has no badge and no byline, the /berita grid adds a
 * colored category badge plus an "Oleh: …" footer row, and the related-news
 * strip on the detail page uses a wider image with a translucent badge. One
 * component with three variants — no duplicated card components.
 */
export type NewsCardVariant = "compact" | "listing" | "related";

interface NewsCardProps {
  news: NewsListItemDto;
  variant?: NewsCardVariant;
  className?: string;
}

export function NewsCard({
  news,
  variant = "compact",
  className,
}: NewsCardProps) {
  const isCompact = variant === "compact";

  return (
    <article
      className={cn(
        "scroll-reveal group visible flex flex-col overflow-hidden rounded-2xl border transition-opacity transition-shadow transition-transform",
        isCompact
          ? "bg-surface border-outline-variant/20 shadow-sm hover:shadow-md"
          : "bg-surface-container-lowest border-outline-variant/30 shadow-sm hover:shadow-xl",
        className,
      )}
    >
      <div className="relative overflow-hidden">
        <Link href={`/berita/${news.slug}`}>
          <FallbackImage
            src={news.coverImage}
            alt={news.title}
            className={cn(
              "w-full object-cover",
              isCompact
                ? "h-48"
                : "h-56 transition-transform duration-500 group-hover:scale-105",
            )}
            fallbackIcon="newspaper"
          />
        </Link>

        {variant === "listing" && (
          <span
            className={cn(
              "font-badge-xs text-badge-xs absolute top-4 left-4 rounded px-3 py-1 uppercase shadow-sm",
              getNewsCategoryBadgeClass(news.categorySlug),
            )}
          >
            {news.categoryName}
          </span>
        )}
        {variant === "related" && (
          <span className="font-badge-xs text-badge-xs text-primary glass-effect absolute top-4 left-4 rounded-lg bg-white/90 px-3 py-1 uppercase shadow-sm">
            {news.categoryName}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          {variant !== "related" && (
            <Icon name="calendar_today" className="text-primary text-sm" />
          )}
          <time className="font-label-sm text-label-sm text-on-surface-variant">
            {formatIndonesianDate(news.publishedAt)}
          </time>
        </div>

        <h3
          className={cn(
            "font-headline-md text-headline-md mb-3 line-clamp-2 cursor-pointer transition-colors",
            variant === "related"
              ? "text-on-surface group-hover:text-primary"
              : "hover:text-primary",
          )}
        >
          <Link href={`/berita/${news.slug}`}>{news.title}</Link>
        </h3>

        <p
          className={cn(
            "font-body-base text-body-base text-on-surface-variant mb-4",
            variant === "related" ? "line-clamp-2" : "line-clamp-3",
          )}
        >
          {news.summary}
        </p>

        {variant === "listing" && (
          <div className="border-outline-variant/20 mt-auto flex items-center justify-between border-t pt-4">
            <span className="text-on-surface-variant font-label-sm text-label-sm">
              Oleh: {news.authorName ?? "Admin Desa Pringgodani"}
            </span>
            <Link
              className="text-secondary font-label-sm text-label-sm flex items-center gap-1 font-bold hover:underline"
              href={`/berita/${news.slug}`}
            >
              Selengkapnya
              <Icon name="chevron_right" className="text-[18px]" />
            </Link>
          </div>
        )}

        {variant === "related" && (
          <Link
            href={`/berita/${news.slug}`}
            className="text-primary font-label-sm text-label-sm mt-auto flex items-center gap-1 font-bold hover:underline"
          >
            Baca Selengkapnya
            <Icon name="chevron_right" className="text-[18px]" />
          </Link>
        )}

        {isCompact && (
          <Link
            className="text-primary font-label-sm inline-flex items-center gap-1 font-bold hover:underline"
            href={`/berita/${news.slug}`}
          >
            Selengkapnya <Icon name="arrow_right_alt" className="text-base" />
          </Link>
        )}
      </div>
    </article>
  );
}
