import { Icon } from "@/shared/ui/icon";
import { ProdukService } from "@/entities/produk/api/produk.service";
import { UmkmService } from "@/entities/umkm/api/umkm.service";
import { ProductCard } from "@/entities/produk/ui/product-card";
import { Pagination } from "@/widgets/pagination/pagination";
import { buildQueryString } from "@/shared/utils/search-params";

const PAGE_SIZE = 18;

type SearchParamsRecord = Record<string, string | string[] | undefined>;

interface ProdukListPageProps {
  searchParams: Promise<SearchParamsRecord>;
}

function firstValue(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value) ?? "";
}

export async function ProdukListPage({ searchParams }: ProdukListPageProps) {
  const params = await searchParams;
  const search = firstValue(params.cari).trim();
  const categorySlug = firstValue(params.kategori).trim();
  const pageNumber = Number.parseInt(firstValue(params.halaman), 10);
  const page = Number.isFinite(pageNumber) && pageNumber > 0 ? pageNumber : 1;

  const [categoriesResult, productsResult] = await Promise.all([
    UmkmService.getCategories(),
    ProdukService.getPaginated({
      page,
      limit: PAGE_SIZE,
      search: search || undefined,
      categorySlug: categorySlug || undefined,
    }),
  ]);

  const categories = categoriesResult.items || [];
  const products = productsResult.items || [];
  const totalPages = productsResult.totalPages || 1;

  return (
    <div className="pb-section-padding pt-24">
      {/* Header Katalog */}
      <header className="max-w-container-max px-gutter mx-auto mb-8 text-center">
        <span className="bg-primary/10 text-primary mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold tracking-wider uppercase">
          <Icon name="storefront" className="text-sm" />
          Katalog Resmi Desa Pringgodani
        </span>
        <h1 className="font-display-hero text-primary text-3xl font-extrabold sm:text-4xl">
          Katalog Produk &amp; Hasil Bumi
        </h1>
        <p className="font-body-base text-on-surface-variant mx-auto mt-2 max-w-2xl text-xs sm:text-sm">
          Beli aneka olahan pangan, kerajinan tangan, dan hasil panen pertanian
          langsung dari pelaku UMKM dan petani Desa Pringgodani.
        </p>

        {/* Search Bar */}
        <div className="mx-auto mt-6 max-w-lg">
          <form
            method="GET"
            action="/produk"
            className="border-outline-variant/40 bg-surface-container-lowest focus-within:border-primary focus-within:ring-primary/20 relative flex items-center overflow-hidden rounded-full border shadow-sm focus-within:ring-2"
          >
            <Icon
              name="search"
              className="text-on-surface-variant/70 ml-4 text-lg"
            />
            <input
              type="text"
              name="cari"
              defaultValue={search}
              placeholder="Cari produk keripik, madu, kerajinan..."
              className="w-full bg-transparent px-3 py-3 text-xs outline-none sm:text-sm"
            />
            {categorySlug && (
              <input type="hidden" name="kategori" value={categorySlug} />
            )}
            <button
              type="submit"
              className="bg-primary text-on-primary hover:bg-primary/90 mr-1.5 rounded-full px-4 py-2 text-xs font-bold shadow-xs transition"
            >
              Cari
            </button>
          </form>
        </div>
      </header>

      {/* Filter Category Chips */}
      <section className="max-w-container-max px-gutter mx-auto mb-8">
        <div className="scrollbar-hide flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
          <a
            href={`/produk${search ? `?cari=${search}` : ""}`}
            className={`rounded-full px-3.5 py-1.5 text-xs font-bold shadow-xs transition-all ${
              !categorySlug
                ? "bg-primary text-on-primary"
                : "border-outline-variant/30 bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container border"
            }`}
          >
            Semua Kategori
          </a>
          {categories.map((cat) => (
            <a
              key={cat.slug}
              href={`/produk?kategori=${cat.slug}${search ? `&cari=${search}` : ""}`}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold shadow-xs transition-all ${
                categorySlug === cat.slug
                  ? "bg-primary text-on-primary"
                  : "border-outline-variant/30 bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container border"
              }`}
            >
              {cat.label || cat.name}
            </a>
          ))}
        </div>
      </section>

      {/* Product Marketplace Grid */}
      <section className="max-w-container-max px-gutter mx-auto">
        {products.length === 0 ? (
          <div className="border-outline-variant/30 bg-surface-container-lowest rounded-3xl border border-dashed px-6 py-16 text-center">
            <Icon
              name="search_off"
              className="text-on-surface-variant mx-auto mb-3 text-5xl opacity-40"
            />
            <h3 className="font-headline-md text-on-surface text-lg font-bold">
              Tidak Ada Produk Ditemukan
            </h3>
            <p className="text-on-surface-variant mt-1 text-xs sm:text-sm">
              Coba cari dengan kata kunci lain atau pilih kategori yang berbeda.
            </p>
            {hasActiveFilters(search, categorySlug) && (
              <a
                href="/produk"
                className="text-primary mt-4 inline-flex items-center gap-1 text-xs font-bold hover:underline"
              >
                <Icon name="refresh" className="text-sm" /> Reset Pencarian
              </a>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              buildHref={(targetPage) =>
                `/produk${buildQueryString(
                  {
                    ...(search ? { cari: search } : {}),
                    ...(categorySlug ? { kategori: categorySlug } : {}),
                  },
                  { halaman: targetPage === 1 ? null : targetPage },
                )}`
              }
            />
          </>
        )}
      </section>
    </div>
  );
}

function hasActiveFilters(search: string, category: string) {
  return Boolean(search || category);
}
