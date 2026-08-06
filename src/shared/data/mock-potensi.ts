import type { PotensiListItemDto } from "@/entities/potensi/model/types";

export interface MockPotensiRecord extends PotensiListItemDto {
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
    coverImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    description:
      "Pertanian padi organik Desa Pringgodani menjadi salah satu komoditas unggulan yang dikelola turun-temurun oleh warga Dusun Krajan. Sistem irigasi tradisional tetap dipertahankan berdampingan dengan sertifikasi organik modern, sehingga hasil panen bebas residu kimia sekaligus menjaga kelestarian ekosistem sawah.\n\nPemerintah desa mendampingi kelompok tani melalui pelatihan rutin pengolahan pasca panen dan fasilitasi akses pasar, termasuk kerja sama dengan sejumlah UMKM lokal yang mengolah beras organik menjadi produk turunan bernilai tambah.",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
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
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    description:
      "Bukit Pringgo menawarkan panorama perbukitan hijau dan udara sejuk di ketinggian 900 mdpl, menjadikannya destinasi favorit warga sekitar maupun wisatawan luar daerah untuk berkemah dan menikmati matahari terbit.\n\nPengelolaan wisata dilakukan bersama kelompok sadar wisata (Pokdarwis) setempat, dengan sejumlah warung kopi dan penginapan sederhana milik warga yang turut menopang ekonomi Dusun Ngasem.",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
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
    coverImage:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80",
    description:
      "Kerajinan anyaman bambu telah menjadi identitas Dusun Krajan sejak tiga generasi. Perajin setempat mengolah bambu lokal menjadi besek, tampah, hingga furnitur fungsional yang dipasarkan hingga luar kabupaten.\n\nDesa memfasilitasi kelompok perajin dengan pelatihan desain produk dan bantuan alat produksi, mendorong regenerasi keterampilan ke generasi muda agar warisan kriya ini tidak punah.",
    gallery: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80",
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
    coverImage:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Kebun kopi Arabika di lereng Gunung Pringgo memanfaatkan ketinggian optimal 1200 mdpl yang memberi karakter rasa khas dengan sentuhan sitrus dan body seimbang. Ditanam secara organik oleh kelompok tani kopi setempat, komoditas ini menjadi simbol kemandirian ekonomi desa.\n\nProses pengolahan mengikuti standar mutu tinggi mulai dari petik merah hingga pasca panen, didukung pelatihan budidaya berkelanjutan dan fasilitasi alat produksi dari pemerintah desa.",
    gallery: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1000&q=80",
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
    coverImage:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=80",
    description:
      "Peternakan kambing Peranakan Etawa (PE) di Dusun Wetan dikelola kelompok ternak dengan sistem kandang komunal dan manajemen pakan terjadwal, menghasilkan susu dan bibit kambing berkualitas yang diminati pasar antar-kecamatan.\n\nProgram desa turut mendukung melalui bantuan vaksinasi ternak berkala dan pelatihan pengolahan susu kambing menjadi produk olahan bernilai tambah.",
    gallery: [
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=80",
    ],
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
    coverImage:
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1000&q=80",
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
    coverImage:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80",
    description:
      "Sanggar seni tradisi menjadi wadah pelestarian tari dan karawitan khas Pringgodani, aktif berlatih rutin dan tampil pada festival budaya tahunan desa maupun undangan hajatan warga.\n\nAnggota sanggar lintas usia, dari anak-anak hingga sesepuh, menjaga regenerasi kesenian lokal agar tidak tergerus zaman.",
    gallery: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80",
    ],
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
