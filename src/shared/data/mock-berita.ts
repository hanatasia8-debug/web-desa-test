import type {
  NewsListItemDto,
  NewsCategoryDto,
  NewsDetailDto,
  NewsContentSectionDto,
} from "@/entities/berita/model/types";

// ---------- Categories ----------
export const MOCK_NEWS_CATEGORIES: NewsCategoryDto[] = [
  { id: "cat-1", name: "Pemerintahan", slug: "pemerintahan", newsCount: 4 },
  {
    id: "cat-2",
    name: "Kegiatan Warga",
    slug: "kegiatan-warga",
    newsCount: 4,
  },
  { id: "cat-3", name: "Pembangunan", slug: "pembangunan", newsCount: 4 },
  { id: "cat-4", name: "Pengumuman", slug: "pengumuman", newsCount: 3 },
];

// Helper: date relative to now
function daysAgo(days: number): string {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

// ---------- Detail data (contentSections) per slug ----------
const MOCK_NEWS_DETAILS: Record<
  string,
  { contentSections: NewsContentSectionDto[]; coverCaption: string }
> = {
  "musyawarah-desa-rencana-pembangunan-2027": {
    coverCaption:
      "Musyawarah Desa Bahas Rencana Pembangunan 2027 — dokumentasi Pemerintah Desa Pringgodani.",
    contentSections: [
      {
        sectionTitle: "Prioritas Usulan Warga",
        paragraph:
          "Musyawarah desa yang digelar di aula kantor desa dihadiri perwakilan delapan dusun, pengurus RT dan RW, kelompok tani, serta pengurus PKK. Setiap perwakilan menyampaikan usulan prioritas pembangunan untuk tahun anggaran berikutnya.",
        sectionImage: null,
      },
      {
        sectionTitle: "Kesepakatan Anggaran",
        paragraph:
          "Setelah pembahasan berjalan hampir empat jam, forum menyepakati tiga prioritas utama yang akan dibiayai lebih dulu.",
        sectionImage: null,
      },
    ],
  },
  "panen-raya-padi-dusun-krajan": {
    coverCaption:
      "Panen Raya Padi Warga Dusun Krajan — dokumentasi Pemerintah Desa Pringgodani.",
    contentSections: [
      {
        sectionTitle: "Hasil Panen Meningkat",
        paragraph:
          "Kelompok Tani Makmur Dusun Krajan menggelar panen raya di lahan seluas dua belas hektare. Rata-rata hasil ubinan tahun ini tercatat lebih tinggi dibanding musim tanam sebelumnya.",
        sectionImage: null,
      },
      {
        sectionTitle: "Dukungan Penyuluh",
        paragraph:
          "Penyuluh pertanian pendamping menyebut pendampingan rutin soal jadwal tanam serempak dan pengendalian hama terpadu ikut menentukan hasil.",
        sectionImage: null,
      },
    ],
  },
};

// ---------- News list items ----------
export const MOCK_NEWS: NewsListItemDto[] = [
  {
    id: "news-1",
    title: "Musyawarah Desa Bahas Rencana Pembangunan 2027",
    slug: "musyawarah-desa-rencana-pembangunan-2027",
    summary:
      "Pemerintah Desa Pringgodani menggelar musyawarah membahas prioritas pembangunan tahun depan.",
    coverImage:
      "news/covers/news_seed_musyawarah-desa-rencana-pembangunan-2027.webp",
    categoryName: "Pemerintahan",
    categorySlug: "pemerintahan",
    authorName: null,
    publishedAt: daysAgo(2),
  },
  {
    id: "news-2",
    title: "Panen Raya Padi Warga Dusun Krajan",
    slug: "panen-raya-padi-dusun-krajan",
    summary:
      "Musim panen kali ini menghasilkan hasil yang melimpah berkat sistem irigasi baru.",
    coverImage: "news/covers/news_seed_panen-raya-padi-dusun-krajan.webp",
    categoryName: "Kegiatan Warga",
    categorySlug: "kegiatan-warga",
    authorName: null,
    publishedAt: daysAgo(5),
  },
  {
    id: "news-3",
    title: "Perbaikan Jalan Poros Desa Rampung Lebih Cepat",
    slug: "perbaikan-jalan-poros-desa-rampung",
    summary:
      "Proyek perbaikan jalan poros desa selesai dua minggu lebih cepat dari jadwal.",
    coverImage: "news/covers/news_seed_perbaikan-jalan-poros-desa-rampung.webp",
    categoryName: "Pembangunan",
    categorySlug: "pembangunan",
    authorName: null,
    publishedAt: daysAgo(9),
  },
  {
    id: "news-4",
    title: "Pendaftaran Bantuan Sosial Tahap II Dibuka",
    slug: "pendaftaran-bansos-tahap-2",
    summary:
      "Warga yang memenuhi syarat dapat mendaftar bantuan sosial tahap kedua mulai minggu ini.",
    coverImage: "news/covers/news_seed_pendaftaran-bansos-tahap-2.webp",
    categoryName: "Pengumuman",
    categorySlug: "pengumuman",
    authorName: null,
    publishedAt: daysAgo(12),
  },
  {
    id: "news-5",
    title: "Pemerintah Desa Luncurkan Layanan Administrasi Digital",
    slug: "layanan-administrasi-digital-diluncurkan",
    summary:
      "Pengajuan surat keterangan kini bisa dilakukan tanpa harus antre di kantor desa.",
    coverImage:
      "news/covers/news_seed_layanan-administrasi-digital-diluncurkan.webp",
    categoryName: "Pemerintahan",
    categorySlug: "pemerintahan",
    authorName: null,
    publishedAt: daysAgo(15),
  },
  {
    id: "news-6",
    title: "Pembangunan Jembatan Penghubung Dusun Ngasem Dimulai",
    slug: "pembangunan-jembatan-dusun-ngasem",
    summary:
      "Jembatan baru akan memangkas jarak tempuh warga Dusun Ngasem menuju pusat desa.",
    coverImage: "news/covers/news_seed_pembangunan-jembatan-dusun-ngasem.webp",
    categoryName: "Pembangunan",
    categorySlug: "pembangunan",
    authorName: null,
    publishedAt: daysAgo(17),
  },
  {
    id: "news-7",
    title: "Festival Budaya Pringgodani Tarik Ratusan Pengunjung",
    slug: "festival-budaya-pringgodani",
    summary:
      "Festival tahunan menampilkan kesenian tradisional dan kuliner khas desa.",
    coverImage: "news/covers/news_seed_festival-budaya-pringgodani.webp",
    categoryName: "Kegiatan Warga",
    categorySlug: "kegiatan-warga",
    authorName: null,
    publishedAt: daysAgo(20),
  },
  {
    id: "news-8",
    title: "Jadwal Pelayanan Kantor Desa Selama Libur Nasional",
    slug: "jadwal-pelayanan-kantor-desa-libur-nasional",
    summary:
      "Pelayanan administrasi menyesuaikan jadwal libur nasional, layanan darurat tetap tersedia.",
    coverImage:
      "news/covers/news_seed_jadwal-pelayanan-kantor-desa-libur-nasional.webp",
    categoryName: "Pengumuman",
    categorySlug: "pengumuman",
    authorName: null,
    publishedAt: daysAgo(24),
  },
  {
    id: "news-9",
    title: "Laporan Realisasi APBDes Semester Pertama Dipublikasikan",
    slug: "realisasi-apbdes-semester-pertama",
    summary:
      "Rincian penggunaan anggaran desa dapat diakses seluruh warga sebagai bentuk transparansi.",
    coverImage: "news/covers/news_seed_realisasi-apbdes-semester-pertama.webp",
    categoryName: "Pemerintahan",
    categorySlug: "pemerintahan",
    authorName: null,
    publishedAt: daysAgo(27),
  },
  {
    id: "news-10",
    title: "Kerja Bakti Bersih Sungai Serentak di Delapan Dusun",
    slug: "kerja-bakti-bersih-sungai-delapan-dusun",
    summary:
      "Ratusan warga bergotong royong membersihkan aliran sungai menjelang musim hujan.",
    coverImage:
      "news/covers/news_seed_kerja-bakti-bersih-sungai-delapan-dusun.webp",
    categoryName: "Kegiatan Warga",
    categorySlug: "kegiatan-warga",
    authorName: null,
    publishedAt: daysAgo(30),
  },
  {
    id: "news-11",
    title: "Irigasi Tersier Sawah Blok Selatan Diperbaiki",
    slug: "irigasi-tersier-sawah-blok-selatan",
    summary:
      "Saluran yang selama ini bocor diperbaiki agar pembagian air antarpetak lebih adil.",
    coverImage: "news/covers/news_seed_irigasi-tersier-sawah-blok-selatan.webp",
    categoryName: "Pembangunan",
    categorySlug: "pembangunan",
    authorName: null,
    publishedAt: daysAgo(33),
  },
  {
    id: "news-12",
    title: "Pemadaman Listrik Terjadwal di Wilayah Pringgodani",
    slug: "pemadaman-listrik-terjadwal-pringgodani",
    summary:
      "Pemeliharaan jaringan menyebabkan pemadaman sementara di beberapa dusun.",
    coverImage:
      "news/covers/news_seed_pemadaman-listrik-terjadwal-pringgodani.webp",
    categoryName: "Pengumuman",
    categorySlug: "pengumuman",
    authorName: null,
    publishedAt: daysAgo(38),
  },
  {
    id: "news-13",
    title: "Rapat Koordinasi Perangkat Desa dan BPD Awal Tahun",
    slug: "rapat-koordinasi-perangkat-desa-bpd",
    summary:
      "Evaluasi kinerja tahun lalu dan penyusunan agenda kerja tahun berjalan dibahas bersama BPD.",
    coverImage:
      "news/covers/news_seed_rapat-koordinasi-perangkat-desa-bpd.webp",
    categoryName: "Pemerintahan",
    categorySlug: "pemerintahan",
    authorName: null,
    publishedAt: daysAgo(40),
  },
  {
    id: "news-14",
    title: "Posyandu Lansia Dusun Sidomulyo Layani 120 Warga",
    slug: "posyandu-lansia-dusun-sidomulyo",
    summary:
      "Pemeriksaan kesehatan rutin bulanan menyasar deteksi dini penyakit pada warga usia lanjut.",
    coverImage: "news/covers/news_seed_posyandu-lansia-dusun-sidomulyo.webp",
    categoryName: "Kegiatan Warga",
    categorySlug: "kegiatan-warga",
    authorName: null,
    publishedAt: daysAgo(44),
  },
  {
    id: "news-15",
    title: "Penerangan Jalan Bertenaga Surya Dipasang di Jalur Utama",
    slug: "penerangan-jalan-tenaga-surya-jalur-utama",
    summary:
      "Dua puluh titik lampu jalan bertenaga surya mulai menyala di sepanjang jalur utama desa.",
    coverImage:
      "news/covers/news_seed_penerangan-jalan-tenaga-surya-jalur-utama.webp",
    categoryName: "Pembangunan",
    categorySlug: "pembangunan",
    authorName: null,
    publishedAt: daysAgo(47),
  },
];

/**
 * Retrieve the detail for a given slug. Returns null when the slug is not
 * found — callers should handle this the same way they would handle a 404
 * from the backend API.
 */
export function getMockNewsDetail(slug: string): NewsDetailDto | null {
  const item = MOCK_NEWS.find((n) => n.slug === slug);
  if (!item) return null;

  const detail = MOCK_NEWS_DETAILS[slug];
  const contentSections: NewsContentSectionDto[] = detail?.contentSections ?? [
    {
      sectionTitle: null,
      paragraph: item.summary,
      sectionImage: null,
    },
  ];

  // Estimate reading time from total paragraph length.
  const totalWords = contentSections.reduce(
    (acc, s) => acc + s.paragraph.split(/\s+/).length,
    0,
  );

  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    summary: item.summary,
    coverImage: item.coverImage,
    coverCaption: detail?.coverCaption ?? `${item.title} — Desa Pringgodani.`,
    categoryId:
      MOCK_NEWS_CATEGORIES.find((c) => c.slug === item.categorySlug)?.id ?? "",
    categoryName: item.categoryName,
    categorySlug: item.categorySlug,
    authorName: item.authorName,
    authorRole: null,
    contentSections,
    publishedAt: item.publishedAt,
    readingTimeMinutes: Math.max(1, Math.ceil(totalWords / 200)),
  };
}
