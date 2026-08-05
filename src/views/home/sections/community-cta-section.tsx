import Link from "next/link";
import { Icon } from "@/shared/ui/icon";

export function CommunityCtaSection() {
  return (
    <section className="max-w-container-max pb-section-padding px-gutter mx-auto">
      <div className="scroll-reveal grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="group bg-secondary text-on-secondary relative flex h-64 items-center overflow-hidden rounded-3xl p-10 shadow-xl">
          <div className="absolute -right-10 -bottom-10 opacity-10 transition-transform group-hover:scale-110">
            <Icon name="storefront" filled className="text-[200px]" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="font-headline-lg text-headline-lg">
              Punya Usaha Lokal?
            </h3>
            <p className="font-body-base max-w-sm opacity-90">
              Daftarkan UMKM Anda untuk mendapatkan akses promosi gratis di
              portal resmi desa.
            </p>
            <Link
              href="/umkm/daftar"
              className="bg-on-secondary text-secondary font-label-sm inline-block rounded-full px-6 py-3 font-bold transition-shadow hover:shadow-lg"
            >
              Daftarkan UMKM
            </Link>
          </div>
        </div>

        <div className="group bg-primary text-on-primary relative flex h-64 items-center overflow-hidden rounded-3xl p-10 shadow-xl">
          <div className="absolute -right-10 -bottom-10 opacity-10 transition-transform group-hover:scale-110">
            <Icon name="edit_square" filled className="text-[200px]" />
          </div>
          <div className="relative z-10 space-y-4">
            <h3 className="font-headline-lg text-headline-lg">Punya Berita?</h3>
            <p className="font-body-base max-w-sm opacity-90">
              Bagikan kegiatan atau aspirasi Anda melalui platform kontribusi
              warga kami.
            </p>
            <Link
              href="/submit/berita"
              className="bg-on-primary text-primary font-label-sm inline-block rounded-full px-6 py-3 font-bold transition-shadow hover:shadow-lg"
            >
              Tulis Berita Desa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
