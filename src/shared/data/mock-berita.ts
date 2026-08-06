import type {
  NewsListItemDto,
  NewsCategoryDto,
  NewsDetailDto,
  NewsContentSectionDto,
} from "@/entities/berita/model/types";

// ---------- Categories ----------
export const MOCK_NEWS_CATEGORIES: NewsCategoryDto[] = [
  { id: "cat-1", name: "Pemerintahan", slug: "pemerintahan", newsCount: 4 },
  { id: "cat-2", name: "Kegiatan Warga", slug: "kegiatan-warga", newsCount: 4 },
  { id: "cat-3", name: "Pembangunan", slug: "pembangunan", newsCount: 4 },
  { id: "cat-4", name: "Pengumuman", slug: "pengumuman", newsCount: 3 },
];

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
        sectionImage:
          "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
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
        sectionImage:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
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
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    categoryName: "Pemerintahan",
    categorySlug: "pemerintahan",
    authorName: "Admin Desa Pringgodani",
    publishedAt: daysAgo(2),
  },
  {
    id: "news-2",
    title: "Panen Raya Padi Warga Dusun Krajan",
    slug: "panen-raya-padi-dusun-krajan",
    summary:
      "Musim panen kali ini menghasilkan hasil yang melimpah berkat sistem irigasi baru.",
    coverImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    categoryName: "Kegiatan Warga",
    categorySlug: "kegiatan-warga",
    authorName: "Kelompok Tani Krajan",
    publishedAt: daysAgo(5),
  },
  {
    id: "news-3",
    title: "Perbaikan Jalan Poros Desa Rampung Lebih Cepat",
    slug: "perbaikan-jalan-poros-desa-rampung",
    summary:
      "Proyek perbaikan jalan poros desa selesai dua minggu lebih cepat dari jadwal.",
    coverImage:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80",
    categoryName: "Pembangunan",
    categorySlug: "pembangunan",
    authorName: "Tim Pembangunan Desa",
    publishedAt: daysAgo(9),
  },
  {
    id: "news-4",
    title: "Pendaftaran Bantuan Sosial Tahap II Dibuka",
    slug: "pendaftaran-bansos-tahap-2",
    summary:
      "Warga yang memenuhi syarat dapat mendaftar bantuan sosial tahap kedua mulai minggu ini.",
    coverImage:
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80",
    categoryName: "Pengumuman",
    categorySlug: "pengumuman",
    authorName: "Sekretariat Desa",
    publishedAt: daysAgo(12),
  },
  {
    id: "news-5",
    title: "Pemerintah Desa Luncurkan Layanan Administrasi Digital",
    slug: "layanan-administrasi-digital-diluncurkan",
    summary:
      "Pengajuan surat keterangan kini bisa dilakukan tanpa harus antre di kantor desa.",
    coverImage:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    categoryName: "Pemerintahan",
    categorySlug: "pemerintahan",
    authorName: "Kasi Pemerintahan",
    publishedAt: daysAgo(15),
  },
  {
    id: "news-6",
    title: "Pembangunan Jembatan Penghubung Dusun Ngasem Dimulai",
    slug: "pembangunan-jembatan-dusun-ngasem",
    summary:
      "Jembatan baru akan memangkas jarak tempuh warga Dusun Ngasem menuju pusat desa.",
    coverImage:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
    categoryName: "Pembangunan",
    categorySlug: "pembangunan",
    authorName: "Tim Pembangunan Desa",
    publishedAt: daysAgo(17),
  },
  {
    id: "news-7",
    title: "Festival Budaya Pringgodani Tarik Ratusan Pengunjung",
    slug: "festival-budaya-pringgodani",
    summary:
      "Festival tahunan menampilkan kesenian tradisional dan kuliner khas desa.",
    coverImage:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    categoryName: "Kegiatan Warga",
    categorySlug: "kegiatan-warga",
    authorName: "Karang Taruna",
    publishedAt: daysAgo(20),
  },
  {
    id: "news-8",
    title: "Jadwal Pelayanan Kantor Desa Selama Libur Nasional",
    slug: "jadwal-pelayanan-kantor-desa-libur-nasional",
    summary:
      "Pelayanan administrasi menyesuaikan jadwal libur nasional, layanan darurat tetap tersedia.",
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    categoryName: "Pengumuman",
    categorySlug: "pengumuman",
    authorName: "Perangkat Desa",
    publishedAt: daysAgo(24),
  },
];

export function getMockNewsDetail(slug: string): NewsDetailDto | null {
  const item = MOCK_NEWS.find((n) => n.slug === slug);
  if (!item) return null;

  const detailExtra = MOCK_NEWS_DETAILS[slug] ?? {
    coverCaption: `${item.title} — dokumentasi Desa Pringgodani.`,
    contentSections: [
      {
        sectionTitle: "Informasi Utama",
        paragraph: item.summary,
        sectionImage: null,
      },
      {
        sectionTitle: "Pelaksanaan & Tindak Lanjut",
        paragraph:
          "Kegiatan dilaksanakan dengan tertib dan lancar berkat partisipasi aktif seluruh elemen masyarakat Desa Pringgodani.",
        sectionImage:
          "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  };

  const wordCount = detailExtra.contentSections.reduce(
    (acc, s) => acc + (s.paragraph ? s.paragraph.split(/\s+/).length : 0),
    0,
  );
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    summary: item.summary,
    coverImage: item.coverImage,
    coverCaption: detailExtra.coverCaption,
    categoryId: `cat-${item.categorySlug}`,
    categoryName: item.categoryName,
    categorySlug: item.categorySlug,
    authorName: item.authorName ?? "Admin Desa Pringgodani",
    authorRole: item.authorName
      ? "Kontributor Warga"
      : "Pemerintah Desa Pringgodani",
    contentSections: detailExtra.contentSections,
    publishedAt: item.publishedAt,
    readingTimeMinutes,
  };
}
