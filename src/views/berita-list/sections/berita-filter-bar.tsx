import { BeritaSearchInput } from "@/features/search-berita/ui/berita-search-input";
import { BeritaCategoryFilter } from "@/features/filter-berita/ui/berita-category-filter";
import type { NewsCategoryDto } from "@/entities/berita/model/types";

interface BeritaFilterBarProps {
  categories: NewsCategoryDto[];
}

/** "Search & Filter Bar" from the prototype: keyword box + category chips. */
export function BeritaFilterBar({ categories }: BeritaFilterBarProps) {
  return (
    <section className="max-w-container-max px-gutter mx-auto mb-12">
      <div className="bg-surface-container-low border-outline-variant/30 gap-gutter flex flex-col items-center justify-between rounded-xl border p-6 md:flex-row">
        <BeritaSearchInput />
        <BeritaCategoryFilter categories={categories} />
      </div>
    </section>
  );
}
