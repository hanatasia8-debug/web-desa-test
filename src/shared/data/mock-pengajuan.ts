import type { RevisionLookup } from "@/entities/pengajuan/model/types";

/**
 * Local-only mock store for `/submit/revision/[token]`, mirroring how
 * `mock-admin.ts` fakes the admin queue. Real tokens come from the backend
 * (sent to the warga when their pengajuan is rejected); these two are only
 * here so the revision flow is demoable while `NEXT_PUBLIC_API_URL` is
 * unset. Not persisted — resubmitting just removes the token from this map
 * for the current session.
 */
export const MOCK_REVISIONS: Record<string, RevisionLookup> = {
  "demo-umkm": {
    type: "UMKM",
    submissionId: "umkm-pending-1",
    rejectionReason:
      "Foto sampul yang diunggah buram dan alamat usaha belum mencantumkan RT/RW. Mohon lengkapi ulang dan unggah foto sampul yang lebih jelas.",
    rejectedAt: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
    data: {
      name: "Keripik Tempe Barokah Krajan",
      ownerName: "Bu Sriyani",
      umkmCategoryId: "kuliner",
      description:
        "Produsen keripik tempe rumahan khas Dusun Krajan, dibuat dari kedelai pilihan tanpa bahan pengawet.",
      phone: "6281234567890",
      email: "",
      coverUrl: "",
      address: "Dusun Krajan",
      latitude: -8.2811,
      longitude: 112.5664,
      since: 2019,
      openDay: "Senin - Sabtu",
      startTime: "08:00",
      endTime: "17:00",
      galleries: [],
      products: [
        {
          name: "Keripik Tempe Original",
          description: "Kemasan 250 gram, renyah tahan lama.",
          price: 15000,
          imageUrl: "",
        },
      ],
    },
  },
  "demo-berita": {
    type: "NEWS",
    submissionId: "news-pending-1",
    rejectionReason:
      "Judul berita terlalu umum dan foto kegiatan belum diunggah. Mohon tambahkan judul yang lebih spesifik beserta foto dokumentasi kegiatan.",
    rejectedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    data: {
      title: "Kerja Bakti Dusun Krajan",
      newsCategoryId: "kegiatan-desa",
      newsTypeId: "STANDARD",
      authorName: "Pak RT 02",
      phone: "6281234567891",
      excerpt: "",
      coverUrl: "",
      coverCaption: "",
      blocks: [
        {
          subHeading: "Uraian Kegiatan",
          content:
            "Warga Dusun Krajan mengadakan kerja bakti membersihkan saluran air.",
          imageUrl: "",
          sortOrder: 0,
        },
      ],
      galleryImages: [],
    },
  },
};
