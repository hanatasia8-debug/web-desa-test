import { Icon } from "@/shared/ui/icon";

interface ProductDescriptionSectionProps {
  description?: string;
  productName: string;
  umkmName?: string;
}

export function ProductDescriptionSection({
  description,
  productName,
  umkmName,
}: ProductDescriptionSectionProps) {
  return (
    <div className="space-y-8">
      {/* 1. Main Description */}
      <section className="bg-surface-container-lowest border-outline-variant/20 rounded-3xl border p-6 sm:p-8 shadow-xs">
        <div className="border-outline-variant/20 mb-5 flex items-center gap-2.5 border-b pb-3.5">
          <div className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-xl">
            <Icon name="article" className="text-base" />
          </div>
          <h2 className="font-headline-md text-primary text-lg font-bold sm:text-xl">
            Deskripsi & Rincian Produk
          </h2>
        </div>

        <div className="prose prose-slate max-w-none text-on-surface-variant text-sm sm:text-base leading-relaxed whitespace-pre-line">
          {description?.trim() ? (
            description
          ) : (
            <p className="italic text-on-surface-variant/70">
              Produk unggulan <strong>{productName}</strong> dibuat dan dipasarkan langsung oleh <strong>{umkmName || "pengrajin lokal Desa Pringgodani"}</strong>. Hubungi penjual melalui WhatsApp untuk mengetahui detail spesifikasi, varian rasa, atau kustomisasi khusus.
            </p>
          )}
        </div>
      </section>

      {/* 2. How to Order / Local Purchase Guide */}
      <section className="bg-surface-container-low/80 border-outline-variant/25 rounded-3xl border p-6 sm:p-8 shadow-xs">
        <div className="border-outline-variant/20 mb-6 flex items-center gap-2.5 border-b pb-3.5">
          <div className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-xl">
            <Icon name="assignment_turned_in" className="text-base" />
          </div>
          <h3 className="font-headline-md text-primary text-lg font-bold sm:text-xl">
            Panduan Cara Pemesanan & Pembayaran
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 */}
          <div className="bg-surface-container-lowest border-outline-variant/20 rounded-2xl border p-4 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary text-on-primary flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
                1
              </span>
              <h4 className="font-headline-md text-on-surface text-sm font-bold">
                Klik Pesan via WA
              </h4>
            </div>
            <p className="text-on-surface-variant/80 text-xs leading-relaxed">
              Tentukan jumlah pesanan dan klik tombol WhatsApp. Format pesan pemesanan telah tersusun otomatis.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-surface-container-lowest border-outline-variant/20 rounded-2xl border p-4 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary text-on-primary flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
                2
              </span>
              <h4 className="font-headline-md text-on-surface text-sm font-bold">
                Konfirmasi & Alamat
              </h4>
            </div>
            <p className="text-on-surface-variant/80 text-xs leading-relaxed">
              Diskusikan ketersediaan stok, opsi pengantaran/COD sekitar desa, atau janji temu ambil di lokasi.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-surface-container-lowest border-outline-variant/20 rounded-2xl border p-4 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary text-on-primary flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
                3
              </span>
              <h4 className="font-headline-md text-on-surface text-sm font-bold">
                Pembayaran Langsung
              </h4>
            </div>
            <p className="text-on-surface-variant/80 text-xs leading-relaxed">
              Bayar langsung ke penjual melalui transfer bank/e-wallet atau uang tunai saat COD tanpa biaya admin perantara.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-surface-container-lowest border-outline-variant/20 rounded-2xl border p-4 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary text-on-primary flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
                4
              </span>
              <h4 className="font-headline-md text-on-surface text-sm font-bold">
                Dukung Ekonomi Lokal
              </h4>
            </div>
            <p className="text-on-surface-variant/80 text-xs leading-relaxed">
              Terima produk berkualitas asli desa dan bantu perkembangan UMKM lokal Desa Pringgodani.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
