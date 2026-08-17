import { notFound } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { FallbackImage } from "@/shared/ui/fallback-image";
import { formatRupiah } from "@/shared/utils/format-currency";
import { createWhatsappUrl } from "@/entities/umkm/model/whatsapp-link";
import { ProdukService } from "@/entities/produk/api/produk.service";
import { ProductCard } from "@/entities/produk/ui/product-card";

interface ProdukDetailPageProps {
  id: string;
}

export async function ProdukDetailPage({ id }: ProdukDetailPageProps) {
  const product = await ProdukService.getById(id);
  if (!product) notFound();

  const umkm = product.umkm;
  const waUrl = product.whatsappLink || (umkm?.phone
    ? createWhatsappUrl(
        umkm.phone,
        `Halo ${umkm.name || "Penjual"}, saya tertarik ingin membeli produk "${product.name}" (${formatRupiah(product.price)}) yang saya temukan di katalog Lokal Pringgodani. Apakah produk ini tersedia?`,
      )
    : null);

  return (
    <div className="pb-section-padding pt-24">
      <div className="max-w-container-max px-gutter mx-auto">
        {/* Breadcrumbs */}
        <div className="text-on-surface-variant mb-6 flex items-center gap-2 text-xs font-semibold">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Icon name="chevron_right" className="text-sm" />
          <Link href="/produk" className="hover:text-primary transition">
            Produk
          </Link>
          <Icon name="chevron_right" className="text-sm" />
          <span className="text-primary truncate">{product.name}</span>
        </div>

        {/* Product Detail Card */}
        <div className="bg-surface-container-lowest border-outline-variant/20 overflow-hidden rounded-[2.5rem] border p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-surface-container shadow-md">
              <FallbackImage
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover"
                fallbackIcon="inventory_2"
              />
              {umkm?.category && (
                <div className="absolute top-4 left-4">
                  <span className="bg-surface/95 text-primary border-outline-variant/30 rounded-full border px-3.5 py-1 text-xs font-bold shadow-md backdrop-blur-md">
                    {umkm.category.name}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h1 className="font-display-hero text-on-surface text-2xl font-extrabold sm:text-3xl lg:text-4xl">
                  {product.name}
                </h1>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-on-surface-variant text-xs uppercase tracking-wider font-semibold">
                    Harga:
                  </span>
                  <span className="font-display-hero text-primary text-2xl font-extrabold sm:text-3xl">
                    {formatRupiah(product.price)}
                  </span>
                </div>

                <div className="border-outline-variant/20 my-6 border-t pt-6 space-y-3">
                  <h3 className="font-headline-md text-on-surface text-sm font-bold uppercase tracking-wider">
                    Deskripsi Produk
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed whitespace-pre-line">
                    {product.description || "Tidak ada deskripsi detail untuk produk ini."}
                  </p>
                </div>
              </div>

              {/* Toko / UMKM Info Box */}
              {umkm && (
                <div className="bg-surface-container-low border-outline-variant/20 rounded-3xl border p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-label-sm text-xs font-bold uppercase tracking-wider">
                      Diproduksi Oleh
                    </span>
                    <Link
                      href={`/umkm/${umkm.slug}`}
                      className="text-primary hover:underline text-xs font-bold flex items-center gap-1"
                    >
                      Kunjungi Toko <Icon name="arrow_forward" className="text-sm" />
                    </Link>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon name="storefront" className="text-2xl" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate font-headline-md text-base font-bold text-on-surface">
                        {umkm.name}
                      </h4>
                      {umkm.address && (
                        <p className="truncate text-xs text-on-surface-variant mt-0.5">
                          {umkm.address}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              {waUrl && (
                <div className="pt-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-on-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2.5 rounded-2xl py-4 text-sm font-bold shadow-lg transition active:scale-[0.98]"
                  >
                    <Icon name="chat" className="text-xl" />
                    Pesan Produk Ini via WhatsApp
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Other Products from same UMKM */}
        {product.otherProducts && product.otherProducts.length > 0 && (
          <section className="mt-16 border-t pt-10">
            <h2 className="font-headline-lg text-primary text-xl font-bold mb-6">
              Produk Lain dari {umkm?.name || "Toko Ini"}
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {product.otherProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
