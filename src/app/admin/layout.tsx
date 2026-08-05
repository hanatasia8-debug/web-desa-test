import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Admin — Desa Pringgodani",
  description:
    "Panel admin Desa Pringgodani untuk manajemen konten dan pengajuan.",
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto min-h-screen max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <p className="text-sm tracking-[0.22em] text-slate-400 uppercase">
            Admin Panel
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Desa Pringgodani — Admin Dashboard
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            Halaman administrasi dasar untuk mengelola konten desa. Login untuk
            masuk ke dashboard dan lihat ringkasan awal sistem admin.
          </p>
        </header>

        <main className="rounded-[2rem] bg-slate-950/90 p-6 ring-1 ring-white/10">
          {children}
        </main>
      </div>
    </div>
  );
}
