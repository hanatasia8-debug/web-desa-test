/**
 * Konfigurasi Prisma CLI (Prisma 7).
 *
 * Prisma 7 TIDAK lagi menerima `url`/`directUrl` di dalam blok `datasource`
 * pada `schema.prisma` (error P1012) — connection string untuk Migrate /
 * Introspect / Studio wajib pindah ke file ini. Ini murni adaptasi tooling:
 * struktur model/relasi di `schema.prisma` tidak berubah sama sekali.
 *
 * Prisma 7 juga tidak lagi memuat file `.env` secara otomatis, dan project ini
 * memakai konvensi Next.js (`.env.local`) yang memang tidak pernah dibaca
 * Prisma CLI. Karena itu env-nya dimuat manual di bawah.
 */
import { defineConfig, env } from "prisma/config";

try {
  process.loadEnvFile(".env.local");
} catch {
  // `.env.local` belum ada (mis. di CI) — pakai env dari shell apa adanya.
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    // Migrate/Introspect harus lewat koneksi direct (non-pooled). Di Docker
    // lokal DIRECT_URL == DATABASE_URL; saat pindah ke Supabase/Neon,
    // DIRECT_URL yang dipakai di sini, bukan URL pooler.
    url: process.env.DIRECT_URL ?? env("DATABASE_URL"),
  },
});
