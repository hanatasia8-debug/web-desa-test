import Link from "next/link";
import { Icon } from "@/shared/ui/icon";

interface ProductBreadcrumbProps {
  productName: string;
  categoryName?: string;
  categorySlug?: string;
}

export function ProductBreadcrumb({
  productName,
  categoryName,
  categorySlug,
}: ProductBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex flex-wrap items-center justify-between gap-2"
    >
      {/* Breadcrumb Links */}
      <ol className="text-on-surface-variant flex flex-wrap items-center gap-1.5 text-xs font-semibold sm:gap-2">
        <li className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <Icon name="home" className="text-xs" />
            <span>Beranda</span>
          </Link>
        </li>

        <li className="text-outline-variant/60 flex items-center" aria-hidden="true">
          <Icon name="chevron_right" className="text-xs" />
        </li>

        <li className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/produk"
            className="hover:text-primary transition-colors"
          >
            Katalog Produk
          </Link>
        </li>

        {categoryName && (
          <>
            <li className="text-outline-variant/60 flex items-center" aria-hidden="true">
              <Icon name="chevron_right" className="text-xs" />
            </li>
            <li className="flex items-center gap-1.5 sm:gap-2">
              <Link
                href={categorySlug ? `/produk?category=${categorySlug}` : "/produk"}
                className="hover:text-primary transition-colors max-w-[120px] truncate sm:max-w-[200px]"
              >
                {categoryName}
              </Link>
            </li>
          </>
        )}

        <li className="text-outline-variant/60 flex items-center" aria-hidden="true">
          <Icon name="chevron_right" className="text-xs" />
        </li>

        <li aria-current="page" className="max-w-[140px] truncate sm:max-w-[260px] md:max-w-[360px]">
          <span className="text-primary font-bold">{productName}</span>
        </li>
      </ol>

      {/* Quick Back Button on Top Right */}
      <Link
        href="/produk"
        className="text-on-surface-variant hover:text-primary bg-surface-container-low hover:bg-surface-container border-outline-variant/30 inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold transition-all"
      >
        <Icon name="arrow_back" className="text-xs" />
        <span>Katalog</span>
      </Link>
    </nav>
  );
}
