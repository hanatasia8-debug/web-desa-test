import type { PotensiListItemDto } from "@/entities/potensi/model/types";

/**
 * One mock potensi = list fields + detail-only fields, same split pattern as
 * `mock-umkm.ts`: `MOCK_POTENSI` exposes just the list shape (what
 * `GET /potensi` would return, and what `mock-umkm.ts` cross-references for
 * "Potensi Terkait"), while `getMockPotensiDetailRecord` exposes the
 * detail-only fields. Relations (UMKM/produk/berita terkait) are assembled
 * in `potensi.service.ts` at read time, not stored here — same reasoning as
 * `Umkm.potential` being resolved on the fly rather than duplicated.
 *
 * Deliberate edge case: `SUMBER_DAYA_ALAM` has zero items, so the category
 * filter and any "no items in this category" state can actually be tested
 * (mirrors the `mock-umkm.ts` edge cases — empty gallery, no products).
 */
interface MockPotensiRecord extends PotensiListItemDto {
  description: string;
  gallery: string[];
  latitude: number;
  longitude: number;
}

const MOCK_POTENSI_RECORDS: MockPotensiRecord[] = [
  {
    id: "pot-1",
    title: "Pertanian Padi Organik",
    slug: "pertanian-padi-organik",
    category: "PERTANIAN",
    overview:
      "Sentra padi organik dengan sistem irigasi tradisional yang terjaga.",
    coverImage: "potentials/covers/potential_seed_pertanian-padi-organik.webp",
    description:
      "Pertanian padi organik Desa Pringgodani menjadi salah satu komoditas unggulan yang dikelola turun-temurun oleh warga Dusun Krajan. Sistem irigasi tradisional tetap dipertahankan berdampingan dengan sertifikasi organik modern, sehingga hasil panen bebas residu kimia sekaligus menjaga kelestarian ekosistem sawah.\n\nPemerintah desa mendampingi kelompok tani melalui pelatihan rutin pengolahan pasca panen dan fasilitasi akses pasar, termasuk kerja sama dengan sejumlah UMKM lokal yang mengolah beras organik menjadi produk turunan bernilai tambah.",
    gallery: [
      "potentials/gallery/potential_seed_pertanian-padi-organik_1.webp",
      "potentials/gallery/potential_seed_pertanian-padi-organik_2.webp",
      "potentials/gallery/potential_seed_pertanian-padi-organik_3.webp",
    ],
    latitude: -8.019,
    longitude: 112.751,
  },
  {
    id: "pot-2",
    title: "Wisata Bukit Pringgo",
    slug: "wisata-bukit-pringgo",
    category: "PARIWISATA",
    overview:
      "Destinasi wisata alam dengan panorama perbukitan dan udara sejuk.",
    coverImage: "potentials/covers/potential_seed_wisata-bukit-pringgo.webp",
    description:
      "Bukit Pringgo menawarkan panorama perbukitan hijau dan udara sejuk di ketinggian 900 mdpl, menjadikannya destinasi favorit warga sekitar maupun wisatawan luar daerah untuk berkemah dan menikmati matahari terbit.\n\nPengelolaan wisata dilakukan bersama kelompok sadar wisata (Pokdarwis) setempat, dengan sejumlah warung kopi dan penginapan sederhana milik warga yang turut menopang ekonomi Dusun Ngasem.",
    gallery: [
      "potentials/gallery/potential_seed_wisata-bukit-pringgo_1.webp",
      "potentials/gallery/potential_seed_wisata-bukit-pringgo_2.webp",
    ],
    latitude: -8.031,
    longitude: 112.768,
  },
  {
    id: "pot-3",
    title: "Kerajinan Anyaman Bambu",
    slug: "kerajinan-anyaman-bambu",
    category: "KERAJINAN",
    overview: "Kerajinan anyaman bambu turun-temurun khas Dusun Krajan.",
    coverImage: "potentials/covers/potential_seed_kerajinan-anyaman-bambu.webp",
    description:
      "Kerajinan anyaman bambu telah menjadi identitas Dusun Krajan sejak tiga generasi. Perajin setempat mengolah bambu lokal menjadi besek, tampah, hingga furnitur fungsional yang dipasarkan hingga luar kabupaten.\n\nDesa memfasilitasi kelompok perajin dengan pelatihan desain produk dan bantuan alat produksi, mendorong regenerasi keterampilan ke generasi muda agar warisan kriya ini tidak punah.",
    gallery: [
      "potentials/gallery/potential_seed_kerajinan-anyaman-bambu_1.webp",
      "potentials/gallery/potential_seed_kerajinan-anyaman-bambu_2.webp",
      "potentials/gallery/potential_seed_kerajinan-anyaman-bambu_3.webp",
    ],
    latitude: -8.026,
    longitude: 112.76,
  },
  {
    id: "pot-4",
    title: "Kebun Kopi Arabika Lereng Pringgo",
    slug: "kebun-kopi-arabika-lereng-pringgo",
    category: "PERKEBUNAN",
    overview:
      "Kopi Arabika hasil kebun lereng Gunung Pringgo pada ketinggian 1200 mdpl.",
    coverImage: "potentials/covers/potential_seed_kebun-kopi-arabika.webp",
    description:
      "Kebun kopi Arabika di lereng Gunung Pringgo memanfaatkan ketinggian optimal 1200 mdpl yang memberi karakter rasa khas dengan sentuhan sitrus dan body seimbang. Ditanam secara organik oleh kelompok tani kopi setempat, komoditas ini menjadi simbol kemandirian ekonomi desa.\n\nProses pengolahan mengikuti standar mutu tinggi mulai dari petik merah hingga pasca panen, didukung pelatihan budidaya berkelanjutan dan fasilitasi alat produksi dari pemerintah desa.",
    gallery: [
      "potentials/gallery/potential_seed_kebun-kopi-arabika_1.webp",
      "potentials/gallery/potential_seed_kebun-kopi-arabika_2.webp",
    ],
    latitude: -8.011,
    longitude: 112.779,
  },
  {
    id: "pot-5",
    title: "Peternakan Kambing PE Dusun Wetan",
    slug: "peternakan-kambing-pe-dusun-wetan",
    category: "PETERNAKAN",
    overview:
      "Sentra budidaya kambing Peranakan Etawa dengan manajemen ternak modern.",
    coverImage: "potentials/covers/potential_seed_peternakan-kambing.webp",
    description:
      "Peternakan kambing Peranakan Etawa (PE) di Dusun Wetan dikelola kelompok ternak dengan sistem kandang komunal dan manajemen pakan terjadwal, menghasilkan susu dan bibit kambing berkualitas yang diminati pasar antar-kecamatan.\n\nProgram desa turut mendukung melalui bantuan vaksinasi ternak berkala dan pelatihan pengolahan susu kambing menjadi produk olahan bernilai tambah.",
    gallery: ["potentials/gallery/potential_seed_peternakan-kambing_1.webp"],
    latitude: -8.034,
    longitude: 112.745,
  },
  {
    id: "pot-6",
    title: "Perikanan Air Tawar Kolam Krajan",
    slug: "perikanan-air-tawar-kolam-krajan",
    category: "PERIKANAN",
    overview:
      "Budidaya ikan air tawar memanfaatkan aliran sungai Dusun Krajan.",
    coverImage: "potentials/covers/potential_seed_perikanan-kolam.webp",
    description:
      "Kelompok pembudidaya ikan di Dusun Krajan memanfaatkan aliran sungai yang jernih untuk kolam ikan nila dan lele dengan sistem air mengalir, menghasilkan panen berkualitas dengan siklus lebih cepat dibanding kolam konvensional.\n\nHasil panen dipasok ke pasar desa dan sejumlah warung kuliner lokal, sekaligus menjadi sumber protein murah bagi warga sekitar.",
    gallery: [],
    latitude: -8.017,
    longitude: 112.754,
  },
  {
    id: "pot-7",
    title: "Sanggar Seni Tradisi Pringgodani",
    slug: "sanggar-seni-tradisi-pringgodani",
    category: "KEBUDAYAAN",
    overview:
      "Pelestarian tari dan musik tradisional lintas generasi warga desa.",
    coverImage: "potentials/covers/potential_seed_sanggar-seni.webp",
    description:
      "Sanggar seni tradisi menjadi wadah pelestarian tari dan karawitan khas Pringgodani, aktif berlatih rutin dan tampil pada festival budaya tahunan desa maupun undangan hajatan warga.\n\nAnggota sanggar lintas usia, dari anak-anak hingga sesepuh, menjaga regenerasi kesenian lokal agar tidak tergerus zaman.",
    gallery: ["potentials/gallery/potential_seed_sanggar-seni_1.webp"],
    latitude: -8.023,
    longitude: 112.758,
  },
];

function toListItem(record: MockPotensiRecord): PotensiListItemDto {
  return {
    id: record.id,
    title: record.title,
    slug: record.slug,
    category: record.category,
    overview: record.overview,
    coverImage: record.coverImage,
  };
}

/** List shape only — matches `mock-umkm.ts`'s cross-reference expectations. */
export const MOCK_POTENSI: PotensiListItemDto[] =
  MOCK_POTENSI_RECORDS.map(toListItem);

export function getMockPotensiDetailRecord(
  slug: string,
): MockPotensiRecord | null {
  return MOCK_POTENSI_RECORDS.find((item) => item.slug === slug) ?? null;
}
