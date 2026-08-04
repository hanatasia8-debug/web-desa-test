# Website Resmi Desa Pringgodani

Status: **Tahap 4 — Halaman Publik**, langkah 1/6 (**Home**) selesai dan sudah
tervalidasi jalan di mesin lokal (DB + build + browser). Lihat
`01-architecture-plan.md` (di luar repo ini) untuk dokumen master perencanaan.

## Stack

- Next.js (App Router, TypeScript strict, Turbopack)
- TailwindCSS v4 + shadcn/ui (komponen di-setup manual — lihat catatan di bawah)
- Prisma 7 + PostgreSQL (schema lengkap, sudah ter-migrasi — butuh driver adapter
  `@prisma/adapter-pg` dan `prisma.config.ts`)
- Supabase Auth + Supabase Storage (Tahap 3)
- TanStack Query, React Hook Form + Zod, Axios
- React Leaflet, Framer Motion
- Vitest + Testing Library (unit test service layer & validasi Zod, Tahap 6)
- ESLint + Prettier + Husky + lint-staged

## Arsitektur

Feature-Sliced Design: `app/ → processes/ → views/ → widgets/ → features/ → entities/ → shared/`.
Alur data wajib: **Page → Service → API → Database** — tidak ada fetch langsung dari
`page.tsx`/komponen ke database atau ke luar lewat Service Layer.

> **Catatan penamaan:** layer FSD "pages" di `01-architecture-plan.md §7` diberi nama
> folder **`views/`**, bukan `pages/`, di project ini. Next.js otomatis mendeteksi
> `src/pages/` sebagai direktori Pages Router (konvensi lama, tetap dikenali walau
> project ini pakai App Router) dan memvalidasi setiap file di dalamnya harus punya
> default export bertipe halaman — ini bentrok langsung dengan konvensi FSD yang
> file-nya named export biasa. Ini baru ketahuan saat build sungguhan gagal di Tahap 4
> (lihat catatan lengkap di bawah). Perannya di arsitektur tetap identik dengan layer
> "pages" FSD, cuma nama foldernya beda.

## Menjalankan project

```bash
npm install
cp .env.local.example .env.local   # isi DATABASE_URL & Supabase vars
npm run dev
```

Perintah lain:

```bash
npm run lint          # ESLint
npm run lint:fix
npm run format         # Prettier write
npm run format:check
npm run test            # Vitest (--passWithNoTests; test asli dibuat di Tahap 6)
npm run prisma:generate
npm run prisma:migrate  # butuh PostgreSQL lokal jalan (docker-compose, Tahap 2)
npm run prisma:studio
```

## Catatan setup (penting dibaca)

- **shadcn/ui di-setup manual**, bukan lewat `npx shadcn init/add`. CLI shadcn perlu
  akses ke `ui.shadcn.com` yang tidak tersedia di sandbox tempat scaffold ini dibuat.
  `components.json`, `src/shared/utils/cn.ts`, token CSS di `globals.css`, dan
  `src/shared/ui/button.tsx` sudah mengikuti konvensi resmi shadcn (style `new-york`,
  alias mengarah ke `@/shared/ui` sesuai FSD) — komponen shadcn lain tinggal ditambah
  dengan pola yang sama, atau jalankan `npx shadcn@latest add <component>` di mesin
  lokal Anda yang punya akses internet penuh.
- ~~Token desain di `globals.css` masih placeholder default shadcn~~ — sudah diganti ke
  token final Pringgodani di Tahap 4 (`#003527`/`#064E3B` Forest Authority,
  `#006399` Civic Blue).
- ~~Font `Geist`/`Geist Mono` masih placeholder~~ — sudah diganti ke Hanken Grotesk +
  Inter (`next/font/google`) + Material Symbols di Tahap 4, dan sudah terbukti ter-load
  di build/browser asli.
- ~~`prisma/schema.prisma` masih placeholder~~ — schema lengkap `prd_2.txt §6.2` (+ `Banner`
  dan `Settings`) sudah masuk di Tahap 2 dan sudah ter-migrasi ke PostgreSQL asli.
- ~~`prisma generate`/`migrate` belum bisa dijalankan~~ — sudah dijalankan sungguhan di
  mesin lokal, lihat [Hasil validasi](#hasil-validasi-di-mesin-lokal-3-agustus-2026).
- Folder FSD yang masih kosong berisi `.gitkeep` agar strukturnya tetap ter-track di git
  walau isinya belum ada.
- Beberapa slice `entities/` dan `features/` ditambah sedikit di luar daftar literal
  `01-architecture-plan.md §7` (`produk`, `fasilitas`, `pengajuan`, `audit-log` sebagai
  entities tambahan; beberapa feature CRUD/filter admin) supaya selaras dengan model
  database di §5. Beri tahu jika ini perlu dipangkas kembali ke daftar §7 secara literal.

## Roadmap tahap berikutnya

1. ~~Tahap 1 — Scaffold~~ ✅
2. ~~Tahap 2 — Database~~ ✅
3. ~~Tahap 3 — Auth & Storage Setup~~ ✅ (lihat catatan wajib di bawah — perlu project Supabase asli untuk dites penuh)
4. Tahap 4 — Halaman Publik: 🟡 **Home selesai**, sisanya (Berita → UMKM → Potensi → Peta → Submit flow) belum
5. Tahap 5 — Admin Panel
6. Tahap 6 — 404 final, SEO, testing, deployment

## Tahap 2 — Database: langkah wajib di mesin Anda ✅ SUDAH DIJALANKAN

Langkah-langkah di bawah **sudah dijalankan sungguhan di mesin lokal (3 Agustus 2026)**
— migrasi, seed, dan build semuanya berhasil. Perbaikan yang diperlukan agar bisa jalan
dicatat di [Hasil validasi di mesin lokal](#hasil-validasi-di-mesin-lokal-3-agustus-2026).

```bash
cp .env.local.example .env.local   # jika belum
docker compose up -d               # start PostgreSQL 16 lokal
npm run prisma:migrate -- --name init   # generate + jalankan migrasi pertama
npm run prisma:seed                # isi data dummy dev
npm run prisma:studio              # opsional: cek data lewat Prisma Studio
```

Migrasi pertama tersimpan di `prisma/migrations/20260803105313_init/`. Seed menghasilkan
6 berita, 4 UMKM, 5 produk, 3 potensi, 4 kategori berita, 5 fasilitas, 2 banner,
7 settings, 1 profil desa, dan **0 user** (memang disengaja — akun admin lewat Supabase
Auth di Tahap 3, bukan seed Prisma).

### Catatan schema.prisma

- Disalin **verbatim** dari `prd_2.txt §6.2` — semua model, enum, field, index, dan
  `@map`/`@@map` tidak diubah.
- Ditambahkan `Banner` (`id, imageUrl, title, linkUrl, order, isActive`) dan `Settings`
  (`id, key, value` + `description` opsional, key-value store) sesuai
  `01-architecture-plan.md §5`.
- Penyesuaian tooling (bukan perubahan struktur data) yang dibutuhkan **Prisma 7**:
  1. `generator client` diberi `output = "../src/generated/prisma"` secara eksplisit —
     Prisma 7 mewajibkan custom output path, beda dari Prisma <7 yang otomatis
     re-export lewat `@prisma/client`.
  2. `url`/`directUrl` **dikeluarkan dari blok `datasource`** dan dipindah ke
     `prisma.config.ts` — Prisma 7 menolaknya di schema (error `P1012`).
  3. Client wajib pakai **driver adapter** (`@prisma/adapter-pg`); `new PrismaClient()`
     tanpa `adapter` sudah tidak jalan lagi.

  Import client lewat `src/shared/lib/prisma.ts` (singleton), jangan `new PrismaClient()`
  di tempat lain. Semua model, enum, field, relasi, index, dan `@map`/`@@map` tetap
  tidak berubah dari PRD.

- **`passwordHash` — SUDAH DIPUTUSKAN (3 Agustus 2026): opsi (a).** Model `User` di PRD
  punya kolom `passwordHash` (asumsi auth JWT manual), padahal brief mewajibkan
  **Supabase Auth** — kredensial sebenarnya dikelola Supabase di skema `auth.users`
  miliknya sendiri, bukan di tabel `users` Prisma kita. Keputusan: **kolomnya dibiarkan
  ada (PRD §6.2 tetap verbatim) tapi tidak pernah diisi**, dan `users.id` disamakan
  dengan Supabase Auth user id. Jangan hapus kolom ini, dan jangan pernah menulis
  password/hash ke tabel `users`.
- Seed data (`prisma/seed.ts`) **sengaja tidak membuat baris `User`/admin** — akun admin
  akan dibuat lewat Supabase Auth di Tahap 3, bukan lewat seed Prisma.
- Path gambar di seed data adalah **placeholder key** mengikuti taxonomy folder di
  `prd_2.txt §7.1` (belum ada file asli — Supabase Storage baru disiapkan Tahap 3).

## Tahap 3 — Auth & Storage Setup

Yang dibuat:

- `src/shared/lib/supabase/client.ts` — Supabase client untuk Client Components.
- `src/shared/lib/supabase/server.ts` — Supabase client untuk Server Components/Route
  Handlers/Server Actions (cookie-based session, pola resmi `@supabase/ssr`).
- `src/shared/lib/supabase/admin.ts` — service-role client (bypass RLS) untuk upload &
  operasi admin server-side. **Jangan pernah** diimpor ke Client Component.
- `src/shared/lib/supabase/middleware.ts` + `src/proxy.ts` — proteksi route `/admin/*`:
  redirect ke `/admin/login` jika belum login, redirect ke `/admin/dashboard` jika
  sudah login tapi membuka halaman login.
- `src/shared/lib/storage/` — helper upload gambar lengkap dengan pipeline dari
  `prd_2.txt §7.2`: validasi _magic bytes_ (bukan percaya ekstensi/MIME dari client),
  resize + convert ke WebP + strip EXIF via Sharp (preset `cover`/`avatar`/`gallery`
  sesuai §7.2), lalu upload ke Supabase Storage. **Fallback otomatis ke
  `public/uploads/`** kalau `SUPABASE_SERVICE_ROLE_KEY` belum diisi, jadi bisa dites
  tanpa project Supabase asli — sudah saya validasi manual pipeline resize/WebP/local
  write-nya jalan benar di sandbox saya (2000px → 1200px cover, 400×400 avatar,
  penolakan file bukan gambar, dll).

### ⚠️ `middleware.ts` → `proxy.ts` (temuan penting)

Next.js 16 (versi yang ter-install, 16.2.12) **mendeprecate file convention
`middleware.ts`** dan menggantinya dengan `proxy.ts` (export function `proxy`,
bukan `middleware`) — di versi terbaru Next.js bahkan **tidak lagi mendeteksi**
`middleware.ts` sama sekali (bukan cuma warning). Saya sudah pakai `src/proxy.ts` dari
awal, bukan `middleware.ts`, supaya proteksi `/admin/*` benar-benar jalan. Kalau nanti
ada referensi lain (tutorial, AI agent lain) yang bikin `middleware.ts`, itu file yang
salah nama untuk versi Next.js ini.

### Konfigurasi env yang perlu Anda isi

Sebelum `/admin/*` atau fitur upload bisa dites sungguhan, buat project di
[supabase.com](https://supabase.com) lalu isi di `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL="https://xxxxx.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
SUPABASE_SERVICE_ROLE_KEY="..."   # Project Settings > API > service_role (rahasia!)
```

Lalu buat bucket **`villagecms-media-bucket`** di Supabase Storage (nama ini di-hardcode
di `src/shared/lib/storage/config.ts`).

Validasi env-nya **lazy** (baru dicek saat benar-benar dipakai, bukan saat server start)
supaya halaman publik tetap jalan normal walau Supabase belum dikonfigurasi — tapi kalau
Anda buka `/admin/*` atau memanggil `uploadImage()` tanpa env terisi, akan muncul error
yang jelas menyebutkan variabel mana yang kurang.

### Belum bisa saya validasi di sandbox ini

- Login/redirect sungguhan lewat `src/proxy.ts` — perlu project Supabase asli + halaman
  `/admin/login` (baru dibangun UI-nya di Tahap 5). Logikanya sudah saya tulis mengikuti
  pola resmi Supabase untuk Next.js App Router, tapi belum diuji end-to-end.
- Upload sungguhan ke Supabase Storage (baru bisa dites setelah Anda isi env + buat
  bucket). Pipeline resize/validasi/local-fallback-nya sudah saya uji manual dan jalan.

### Aturan untuk login UI Tahap 5 (sudah diputuskan)

Kolom `passwordHash` di tabel `users` **tetap ada tapi tidak pernah diisi** (keputusan
3 Agustus 2026, lihat catatan Tahap 2 di atas). Saat membangun form login Tahap 5,
`User.id` **wajib** disamakan dengan Supabase Auth user id — bukan generate UUID baru —
supaya relasi `News.author`/`AuditLog.user`/dst tetap konsisten.

## Tahap 4 — Halaman Publik: Home (langkah 1/6)

Yang dibuat:

- **Design system nyata** di `globals.css` — palet warna, skala tipografi
  (`display-hero`/`headline-lg`/`body-base`/dst dengan line-height, weight, letter-spacing
  masing-masing), skala spacing (`gutter`, `section-padding`, `stack-sm/md/lg`) — disalin
  persis dari `tailwind.config` di setiap `code.html` prototype, disilangkan dengan
  `DESIGN.md`. Token semantik shadcn/ui (`--color-primary`, dst) dipetakan ke palet yang
  sama supaya komponen shadcn otomatis konsisten secara visual.
- Font asli: **Hanken Grotesk** (heading) + **Inter** (body) lewat `next/font/google`,
  plus **Material Symbols Outlined** lewat stylesheet link (tidak didukung `next/font`).
- `Icon`, `FallbackImage` (gambar dengan empty-state kalau `src` kosong/gagal dimuat —
  dipakai di mana pun ada gambar dari storage), `useScrollReveal` (port React dari
  animasi scroll-reveal prototype).
- Data layer lengkap untuk Home: entity `berita`, `umkm`, `desa`, `fasilitas`, `banner`,
  `settings` — masing-masing DTO type + Service (`entities/*/api/*.service.ts`) + Route
  Handler (`app/api/*/route.ts`) yang query Prisma langsung. Page **tidak pernah**
  import Prisma langsung — selalu lewat Service → API.
- `widgets/navbar`, `widgets/footer`, `widgets/hero` + seluruh section Home di
  `src/views/home/` (Welcome/Sambutan Kepala Desa, Statistik, UMKM showcase, Berita
  Terbaru, Peta preview, Community CTA).

### ⚠️ Temuan penting: `pages/` bentrok dengan Next.js Pages Router

Next.js **otomatis mendeteksi** `src/pages/` sebagai direktori Pages Router (konvensi
lama) — walaupun project ini 100% App Router — dan memvalidasi setiap file di
dalamnya harus punya default export bertipe halaman. Ini baru ketahuan lewat `npm run
build` sungguhan di sandbox saya (build gagal dengan error TypeScript yang membingungkan
kalau tidak diselidiki). Layer FSD "pages" karena itu saya beri nama folder **`views/`**
di project ini — perannya di arsitektur (Page → Service → API → Database, komposisi
tampilan) tetap identik dengan yang dimaksud `01-architecture-plan.md §7`, cuma nama
foldernya beda karena Next.js reserve nama itu. Kalau ada alat/panduan lain yang bikin
`src/pages/...`, itu akan bentrok — pakai `src/views/...`.

### Dua keputusan (1 sudah dikonfirmasi, 1 asumsi yang berjalan)

1. **Format route API — SUDAH DIKONFIRMASI (3 Agustus 2026): pakai `/api/berita`.**
   `prd_2.txt §9.1` memakai prefix `/api/v1/` dan nama resource Inggris
   (`/api/v1/news`), tapi struktur route dari sitemap `01-architecture-plan.md`
   (`/api/berita`, tanpa prefix versi) yang dipertahankan — dokumen itu dinyatakan final
   untuk struktur folder/route. Jangan diubah ke `/api/v1/*` di tahap berikutnya. Yang
   diambil dari PRD §9 hanyalah **format envelope response**-nya (`{success, statusCode,
message, data}` / format error dengan `validationErrors`) — lihat
   `src/shared/api/response.ts`.
2. **Hero pakai Banner, bukan gambar statis**: prototype `beranda_desa_pringgodani_1`
   memakai satu gambar latar hardcode (wajar, mockup statis tidak bisa mendemokan
   banner dinamis). Karena brief awal minta model `Banner` ditambahkan, saya sambungkan
   hero ke banner aktif pertama (urutan `order`), fallback ke warna primary polos kalau
   belum ada banner — bukan cuma dekorasi mati. Layout, copy, dan kedua tombol CTA tetap
   identik dengan prototype.

Asumsi kecil lain (tidak butuh keputusan, tapi dicatat): tombol hero "Eksplorasi Desa" →
`/potensi`, "Layanan Publik" → `/profil` (prototype tidak menentukan target link-nya);
nama Kepala Desa/foto diambil dari `VillageProfile.officials` (cari entri yang
`position`-nya mengandung "kepala desa") karena skema tidak punya field nama kepala desa
terpisah; "Sekilas Sejarah" di Home adalah potongan ~200 karakter pertama dari
`historyText` (skema tidak punya field ringkasan terpisah).

## Hasil validasi di mesin lokal (3 Agustus 2026)

Semua langkah yang di sandbox sebelumnya "belum tervalidasi" sudah dijalankan sungguhan
di mesin lokal: Docker Postgres, `prisma generate`, `migrate dev --name init`, seed,
`npm run build` **tanpa stub apa pun** (Prisma client & Google Fonts asli),
`npm run start`, plus verifikasi visual lewat screenshot browser headless.

Status perintah: `lint` ✅ bersih, `format:check` ✅ bersih, `tsc --noEmit` ✅ bersih,
`build` ✅ sukses, `test` ✅ (masih 0 test file — lihat catatan di bawah).

### Yang harus diperbaiki agar bisa jalan

1. **Prisma 7 menolak `url`/`directUrl` di `schema.prisma`** (`P1012`) → dibuat
   `prisma.config.ts` (datasource url, path migrasi, seed command). Prisma 7 juga tidak
   lagi auto-load file `.env`, dan project ini pakai `.env.local` (konvensi Next.js) yang
   memang tidak pernah dibaca Prisma CLI — jadi env dimuat manual lewat
   `process.loadEnvFile(".env.local")` di `prisma.config.ts` dan `prisma/seed.ts`.
2. **Prisma 7 mewajibkan driver adapter** → `@prisma/adapter-pg` ditambahkan sebagai
   dependency, dipakai di `src/shared/lib/prisma.ts` dan `prisma/seed.ts`.
3. **Dua type error yang sebelumnya tertutup oleh Prisma client stub**: di
   `app/api/peta/route.ts` dan `app/api/umkm/route.ts`, hasil validasi `category` tidak
   ter-narrow ke enum Prisma karena guard-nya berbentuk `if (param && !isValid(param))`.
   Diperbaiki dengan nested guard + variabel yang sudah bertipe enum. Validasi runtime-nya
   sendiri tidak berubah.
4. **Home tampil kosong walau DB penuh data** (temuan terpenting). Home sebelumnya
   ter-_prerender_ statis, sedangkan Service Layer memanggil Route Handler app ini sendiri
   lewat HTTP — saat build tidak ada server yang mendengar, jadi keempat request gagal,
   ditelan `Promise.allSettled`, dan HTML kosong ikut "dibekukan" ke hasil build. Dua
   perbaikan: `export const dynamic = "force-dynamic"` di `app/(public)/layout.tsx` (semua
   route publik memang menampilkan konten CMS live), dan base URL server sekarang
   diturunkan dari header `Host` tiap request di `shared/api/axios-instance.ts` — bukan
   `http://localhost:3000` yang di-hardcode, yang diam-diam salah begitu app jalan di
   port/domain lain. Override tetap tersedia lewat `INTERNAL_API_BASE_URL`.
   Catatan Next 16: `dynamic` hilang kalau **Cache Components** diaktifkan — kalau nanti
   `cacheComponents` dinyalakan, ganti ke `await connection()` (`next/server`).
5. **Generated Prisma client ikut ke-lint** (folder `src/generated/` baru ada setelah
   `prisma generate` jalan sungguhan; di sandbox belum pernah ada) → 403 error ESLint palsu.
   Ditambahkan ke `globalIgnores` di `eslint.config.mjs` dan ke `.prettierignore`
   (bersama `.claude/`). Sudah gitignored sejak Tahap 2.
6. `npm run test` sebelumnya exit 1 karena Vitest tidak menemukan test file → dikasih
   `--passWithNoTests` supaya perintahnya tidak "merah" sampai test asli dibuat di Tahap 6.

### Sudah diverifikasi jalan

- 6 Route Handler publik (`/api/berita`, `/api/umkm`, `/api/peta`, `/api/profil`,
  `/api/banner`, `/api/settings`) → HTTP 200 dengan envelope `{success, statusCode,
message, data}` dan data seed asli.
- Home me-render data asli di **semua** section: sambutan + nama Kepala Desa
  ("Ki Suryo Pringgo") dari `VillageProfile.officials`, statistik (4 UMKM / 5 produk /
  5 berita / 8 dusun), 3 kartu UMKM, 3 kartu berita dengan tanggal Indonesia, preview peta
  dengan "Kantor Desa Pringgodani" dari DB, dan footer memakai `Settings` dari DB.
- Visual sesuai design system: Forest Authority `#003527`/`#064E3B`, Civic Blue `#006399`,
  Hanken Grotesk + Inter, Material Symbols, animasi scroll-reveal.

### Yang masih belum bisa divalidasi (butuh Anda)

- **Supabase**: `/admin/*` (proxy auth) dan upload sungguhan ke Storage belum tersentuh —
  perlu project Supabase asli, `.env.local` diisi, dan bucket
  `villagecms-media-bucket` dibuat. Halaman publik jalan normal tanpa ini (validasi lazy).
- **Gambar**: semua path gambar seed masih placeholder key (belum ada file asli), jadi
  tampil sebagai empty-state ikon `FallbackImage` — bukan bug. Akan normal setelah ada
  upload sungguhan.
