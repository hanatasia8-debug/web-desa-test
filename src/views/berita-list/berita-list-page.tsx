import { Suspense } from "react";

import { BeritaService } from "@/entities/berita/api/berita.service";
import { NewsCard } from "@/entities/berita/ui/news-card";
import { Pagination } from "@/widgets/pagination/pagination";
import { buildQueryString } from "@/shared/utils/search-params";
import { FeaturedNewsHero } from "./sections/featured-news-hero";
import { BeritaFilterBar } from "./sections/berita-filter-bar";
import { NewsGridSkeleton } from "./ui/news-grid-skeleton";
import { NewsEmptyState, NewsErrorState } from "./ui/results-state";

/** `prd_2.txt §4.6.1`: "Paginated Grid: 6 articles per page". */
const PAGE_SIZE = 6;

type SearchParamsRecord = Record<string, string | string[] | undefined>;

interface BeritaListPageProps {
  searchParams: Promise<SearchParamsRecord>;
}

function firstValue(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value) ?? "";
}

/**
 * `views/berita-list` — the /berita listing view, rendered thinly from
 * `app/(public)/berita/page.tsx`.
 *
 * Search, category and page all live in the URL query string
 * (`?cari=&kategori=&halaman=`) rather than in client state: the filter
 * controls push a new URL, Next.js re-renders this Server Component in place
 * (client-side navigation, no full reload), and every result set stays
 * shareable and back-button friendly. Data still flows strictly
 * Page → Service → API → Database.
 */
export async function BeritaListPage({ searchParams }: BeritaListPageProps) {
  const params = await searchParams;
  const search = firstValue(params.cari).trim();
  const categorySlug = firstValue(params.kategori).trim();
  const pageNumber = Number.parseInt(firstValue(params.halaman), 10);
  const page = Number.isFinite(pageNumber) && pageNumber > 0 ? pageNumber : 1;
  const hasFilters = Boolean(search || categorySlug);

  const [categoriesResult, featuredResult] = await Promise.allSettled([
    BeritaService.getCategories(),
    // The featured slot always shows the newest article overall, so it is
    // irrelevant (and confusing) while a filter or keyword is active.
    hasFilters ? null : BeritaService.getLatestPublished({ limit: 1 }),
  ]);

  const categories =
    categoriesResult.status === "fulfilled" ? categoriesResult.value.items : [];
  const featured =
    featuredResult.status === "fulfilled"
      ? (featuredResult.value?.items[0] ?? null)
      : null;

  // A hand-typed/stale `?kategori=` that matches no row is an empty result,
  // not an error — but only trust that verdict when the category list itself
  // loaded (an empty list here means the API call failed).
  const unknownCategory =
    Boolean(categorySlug) &&
    categories.length > 0 &&
    !categories.some((category) => category.slug === categorySlug);

  return (
    <div className="pb-section-padding pt-24">
      {featured && page === 1 ? (
        <FeaturedNewsHero news={featured} />
      ) : (
        <header className="max-w-container-max px-gutter mx-auto mb-12">
          <h1 className="font-headline-lg text-headline-lg text-primary">
            Berita Desa Pringgodani
          </h1>
          <p className="font-body-base text-body-base text-on-surface-variant mt-2">
            Kabar terkini, pengumuman resmi, dan kegiatan warga Desa
            Pringgodani.
          </p>
        </header>
      )}

      <BeritaFilterBar categories={categories} />

      <section className="max-w-container-max px-gutter mx-auto">
        {unknownCategory ? (
          <NewsEmptyState hasFilters />
        ) : (
          <Suspense
            key={`${search}|${categorySlug}|${page}`}
            fallback={<NewsGridSkeleton count={PAGE_SIZE} />}
          >
            <BeritaResults
              search={search}
              categorySlug={categorySlug}
              page={page}
              excludeId={featured?.id ?? null}
              hasFilters={hasFilters}
            />
          </Suspense>
        )}
      </section>
    </div>
  );
}

interface BeritaResultsProps {
  search: string;
  categorySlug: string;
  page: number;
  /** Featured article id — kept out of the grid so it is not shown twice. */
  excludeId: string | null;
  hasFilters: boolean;
}

async function BeritaResults({
  search,
  categorySlug,
  page,
  excludeId,
  hasFilters,
}: BeritaResultsProps) {
  let result;
  try {
    result = await BeritaService.getPaginated({
      page,
      limit: PAGE_SIZE,
      category: categorySlug || undefined,
      search: search || undefined,
      exclude: excludeId ?? undefined,
    });
  } catch (err) {
    console.error("Gagal memuat daftar berita:", err);
    return <NewsErrorState />;
  }

  if (result.items.length === 0) {
    return <NewsEmptyState hasFilters={hasFilters} />;
  }

  const totalPages = Math.max(1, Math.ceil(result.total / PAGE_SIZE));

  return (
    <>
      <div className="gap-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {result.items.map((news) => (
          <NewsCard key={news.id} news={news} variant="listing" />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        buildHref={(targetPage) =>
          `/berita${buildQueryString(
            {
              ...(search ? { cari: search } : {}),
              ...(categorySlug ? { kategori: categorySlug } : {}),
            },
            { halaman: targetPage === 1 ? null : targetPage },
          )}`
        }
      />
    </>
  );
}
