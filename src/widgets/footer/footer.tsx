import Link from "next/link";
import { Icon } from "@/shared/ui/icon";
import { SettingsService } from "@/entities/settings/api/settings.service";

const QUICK_LINKS = [
  { href: "/profil", label: "Profil Desa" },
  { href: "/potensi", label: "Potensi Wisata" },
  { href: "/umkm", label: "Direktori UMKM" },
  { href: "/berita", label: "Arsip Berita" },
];

export async function Footer() {
  // Server Component fetch — still goes through the Service → API →
  // Database chain, just invoked at render time instead of client-side.
  let contactEmail = "info@pringgodani.desa.id";
  let contactPhone = "(021) 1234-5678";
  let contactAddress = "Jl. Raya Pringgodani No. 1, Kab. Pringgodani";

  try {
    const { settings } = await SettingsService.getAll();
    if (typeof settings.contact_email === "string")
      contactEmail = settings.contact_email;
    if (typeof settings.contact_phone === "string")
      contactPhone = settings.contact_phone;
    if (typeof settings.contact_address === "string")
      contactAddress = settings.contact_address;
  } catch {
    // Settings unavailable (e.g. DB not migrated yet) — fall back to the
    // defaults above rather than breaking the whole page render.
  }

  return (
    <footer className="bg-surface-container-highest border-outline-variant mt-stack-lg border-t">
      <div className="max-w-container-max gap-gutter px-gutter py-section-padding mx-auto grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6 flex items-center gap-3">
            <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
              <Icon name="eco" className="text-2xl" />
            </div>
            <span className="font-headline-md text-headline-md text-primary font-bold">
              Desa Pringgodani
            </span>
          </div>
          <p className="font-body-base text-on-surface-variant leading-relaxed">
            Portal resmi Pemerintah Desa Pringgodani sebagai wadah informasi dan
            layanan digital bagi seluruh masyarakat.
          </p>
        </div>

        <div>
          <h4 className="font-headline-md text-headline-md text-primary mb-6">
            Tautan Cepat
          </h4>
          <ul className="space-y-4">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-headline-md text-headline-md text-primary mb-6">
            Kontak Kami
          </h4>
          <ul className="font-body-base text-on-surface-variant space-y-4">
            <li className="flex items-center gap-3">
              <Icon name="location_on" className="text-primary text-xl" />
              {contactAddress}
            </li>
            <li className="flex items-center gap-3">
              <Icon name="call" className="text-primary text-xl" />
              {contactPhone}
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" className="text-primary text-xl" />
              {contactEmail}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline-md text-headline-md text-primary mb-6">
            Admin Panel
          </h4>
          <p className="font-label-sm text-on-surface-variant mb-4">
            Hanya untuk akses petugas desa yang berwenang.
          </p>
          <Link
            className="bg-primary/10 text-primary font-label-sm hover:bg-primary hover:text-on-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold transition-all"
            href="/admin/login"
          >
            <Icon name="login" className="text-lg" /> Admin Login
          </Link>
        </div>
      </div>
      <div className="border-outline-variant/30 border-t py-8">
        <div className="max-w-container-max px-gutter mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-label-sm text-on-surface-variant">
            © {new Date().getFullYear()} Pemerintah Desa Pringgodani. Seluruh
            Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6">
            <a
              className="font-label-sm text-on-surface-variant hover:text-primary underline"
              href="#"
            >
              Kebijakan Privasi
            </a>
            <a
              className="font-label-sm text-on-surface-variant hover:text-primary underline"
              href="#"
            >
              Peta Situs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
