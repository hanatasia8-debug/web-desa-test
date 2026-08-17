import { FallbackImage } from "@/shared/ui/fallback-image";
import { Icon } from "@/shared/ui/icon";
import { formatRupiah } from "@/shared/utils/format-currency";
import { createWhatsappUrl } from "@/entities/umkm/model/whatsapp-link";
import type { UmkmProductDto } from "@/entities/umkm/model/types";

export function UmkmProductsSection({
  products,
  umkmName,
  phone,
}: {
  products: UmkmProductDto[];
  umkmName?: string;
  phone?: string;
}) {
  return (
    <section>
      <h2 className="font-headline-md text-primary border-outline-variant/30 mb-4 flex items-center justify-between border-b pb-3 text-lg font-bold">
        <span>Katalog Produk Unggulan</span>
        <span className="text-on-surface-variant text-xs font-semibold">
          {products.length} Produk
        </span>
      </h2>

      {products.length === 0 ? (
        <p className="font-body-base text-on-surface-variant border-outline-variant/30 bg-surface-container-low rounded-2xl border border-dashed px-6 py-10 text-center text-xs sm:text-sm">
          Pelaku usaha belum menambahkan daftar produk secara spesifik. Hubungi
          langsung melalui WhatsApp untuk menanyakan katalog lengkap produk.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            const name = product.name || product.productName || "Produk UMKM";
            const photo = product.imageUrl || product.productPhoto;
            const waMessage = phone
              ? createWhatsappUrl(
                  phone,
                  `Halo ${umkmName || "Penjual"}, saya melihat produk "${name}" di katalog Lokal Pringgodani dan tertarik untuk memesan. Apakah produk ini tersedia?`,
                )
              : null;

            return (
              <article
                key={product.id}
                className="bg-surface-container-lowest border-outline-variant/30 hover:border-primary/50 hover:shadow-lg relative flex flex-col justify-between overflow-hidden rounded-2xl border p-3 shadow-xs transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="bg-surface-container relative mb-2.5 aspect-square w-full overflow-hidden rounded-xl">
                    <FallbackImage
                      src={photo}
                      alt={name}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      fallbackIcon="inventory_2"
                    />
                  </div>
                  <h3 className="text-on-surface line-clamp-2 min-h-[2.25rem] text-xs font-bold sm:text-sm">
                    {name}
                  </h3>
                  {product.description && (
                    <p className="text-on-surface-variant/80 mt-1 line-clamp-1 text-[11px]">
                      {product.description}
                    </p>
                  )}
                </div>

                <div className="border-outline-variant/15 mt-3 flex flex-col gap-2 border-t pt-2.5">
                  <span className="text-primary font-headline-md text-xs font-extrabold sm:text-sm">
                    {formatRupiah(product.price)}
                  </span>
                  {waMessage && (
                    <a
                      href={waMessage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center gap-1 rounded-xl py-1.5 text-center text-xs font-bold shadow-xs transition-all active:scale-98"
                    >
                      <Icon name="chat" className="text-sm" />
                      <span>Pesan</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
