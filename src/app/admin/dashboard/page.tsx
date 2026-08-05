import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Admin — Desa Pringgodani",
  description: "Ringkasan dashboard admin Desa Pringgodani.",
};

const sections = [
  {
    title: "Banner",
    description: "Kelola banner halaman depan.",
    href: "/admin/banner",
  },
  {
    title: "Berita",
    description: "Kelola publikasi berita desa.",
    href: "/admin/berita",
  },
  {
    title: "Pengajuan",
    description: "Tinjau pengajuan konten dan UMKM.",
    href: "/admin/pengajuan",
  },
  {
    title: "Peta",
    description: "Kelola daftar peta dan koordinat.",
    href: "/admin/peta",
  },
  {
    title: "Potensi",
    description: "Kelola informasi potensi desa.",
    href: "/admin/potensi",
  },
  {
    title: "UMKM",
    description: "Kelola data UMKM Desa Pringgodani.",
    href: "/admin/umkm",
  },
  {
    title: "Profil",
    description: "Kelola profil desa dan informasi utama.",
    href: "/admin/profil",
  },
  {
    title: "Settings",
    description: "Konfigurasi pengaturan aplikasi.",
    href: "/admin/settings",
  },
  {
    title: "Pengguna",
    description: "Kelola akun admin dan hak akses.",
    href: "/admin/users",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
        <div className="space-y-3">
          <p className="text-sm tracking-[0.24em] text-slate-400 uppercase">
            Dashboard Admin
          </p>
          <h2 className="text-3xl font-semibold text-white">Ringkasan Panel</h2>
          <p className="max-w-2xl text-slate-300">
            Halaman dashboard admin dasar telah dibangun. Selanjutnya, tambahkan
            modul manajemen konten untuk setiap area (Berita, UMKM, Potensi, dan
            lain-lain).
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-6">
            <p className="text-sm font-medium tracking-[0.24em] text-slate-400 uppercase">
              Status Admin
            </p>
            <p className="mt-4 text-2xl font-semibold text-white">Login Demo</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Autentikasi penuh belum diintegrasikan; klik salah satu area untuk
              menyiapkan halaman admin.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-6">
            <p className="text-sm font-medium tracking-[0.24em] text-slate-400 uppercase">
              Konten Publik
            </p>
            <p className="mt-4 text-2xl font-semibold text-white">
              Tahap 4 selesai
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Home, Berita, UMKM, Profil, Potensi, dan Submit Flow sudah
              tersedia.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-6">
            <p className="text-sm font-medium tracking-[0.24em] text-slate-400 uppercase">
              Langkah selanjutnya
            </p>
            <p className="mt-4 text-2xl font-semibold text-white">Tahap 5</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Lengkapi otentikasi admin, lalu bangun modul CRUD untuk setiap
              sub-halaman.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-slate-900/90 p-6">
          <div>
            <p className="text-sm tracking-[0.24em] text-slate-400 uppercase">
              Area admin
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Modul yang bisa dibuat
            </h3>
          </div>
          <p className="text-sm text-slate-300">
            Folder sudah ada; halaman CRUD tinggal ditambahkan.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <a
              key={section.title}
              href={section.href}
              className="group rounded-3xl border border-white/10 bg-slate-950/90 p-6 transition hover:-translate-y-1 hover:bg-slate-900/90"
            >
              <h4 className="text-lg font-semibold text-white">
                {section.title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {section.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition group-hover:text-emerald-300">
                Buka modul →
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
