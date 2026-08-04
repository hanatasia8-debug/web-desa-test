"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/shared/utils/cn";
import { buildQueryString } from "@/shared/utils/search-params";
import type { NewsCategoryDto } from "@/entities/berita/model/types";

interface BeritaCategoryFilterProps {
  /** Real `NewsCategory` rows from the database — never a hardcoded list. */
  categories: NewsCategoryDto[];
}

/**
 * Category chips for /berita. Like the search box, the active category lives
 * in the URL (`?kategori=<slug>`); the chips are `Link`s so they are
 * shareable and keyboard/SEO friendly, and Next.js navigates client-side
 * without a full reload.
 */
export function BeritaCategoryFilter({
  categories,
}: BeritaCategoryFilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeSlug = searchParams.get("kategori");

  const chipClass = (isActive: boolean) =>
    cn(
      "font-label-sm text-label-sm rounded-full px-5 py-2 transition-colors",
      isActive
        ? "bg-primary text-on-primary font-bold shadow-sm"
        : "border-outline-variant text-on-surface-variant hover:bg-surface-container border bg-white",
    );

  const hrefFor = (slug: string | null) =>
    `${pathname}${buildQueryString(searchParams, { kategori: slug, halaman: null })}`;

  return (
    <div className="flex w-full flex-wrap gap-3 md:w-auto">
      <Link
        href={hrefFor(null)}
        className={chipClass(!activeSlug)}
        scroll={false}
      >
        Semua
      </Link>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={hrefFor(category.slug)}
          className={chipClass(activeSlug === category.slug)}
          scroll={false}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
