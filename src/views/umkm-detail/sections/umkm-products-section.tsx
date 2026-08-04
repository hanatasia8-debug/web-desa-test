import { FallbackImage } from "@/shared/ui/fallback-image";
import { formatRupiah } from "@/shared/utils/format-currency";
import type { UmkmProductDto } from "@/entities/umkm/model/types";

/**
 * "Produk Unggulan" grid. `UmkmProduct` has no description column in the
 * schema, so the prototype's per-product blurb is left out rather than
 * fabricated; a product without a price shows the agreed placeholder
 * ("Harga menyesuaikan") because `price` is nullable.
 */
export function UmkmProductsSection({
  products,
}: {
  products: UmkmProductDto[];
}) {
  return (
    <section>
      <h2 className="font-headline-md text-headline-md text-primary border-outline-variant/30 mb-4 border-b pb-3">
        Produk Unggulan
      </h2>

      {products.length === 0 ? (
        <p className="font-body-base text-body-base text-on-surface-variant border-outline-variant/30 bg-surface-container-low rounded-lg border border-dashed px-6 py-10 text-center">
          Pelaku usaha belum menambahkan daftar produk. Hubungi langsung melalui
          WhatsApp untuk menanyakan ketersediaan produk.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-surface-container border-outline-variant/10 rounded-lg border p-4 transition-shadow hover:shadow-md"
            >
              <FallbackImage
                src={product.productPhoto}
                alt={product.productName}
                className="mb-3 h-32 w-full rounded-md object-cover"
                fallbackIcon="inventory_2"
              />
              <div className="mb-1 flex items-start justify-between gap-3">
                <h3 className="font-headline-md text-body-lg text-on-surface font-bold">
                  {product.productName}
                </h3>
                <span className="font-label-sm text-primary shrink-0 font-bold">
                  {formatRupiah(product.price)}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
