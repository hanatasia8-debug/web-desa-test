import type {
  VillageProfileDto,
  VillageStatsDto,
} from "@/entities/desa/model/types";

export const MOCK_PROFILE: VillageProfileDto = {
  villageName: "Pringgodani",
  headGreeting:
    "Selamat datang di website resmi Desa Pringgodani. Semoga informasi yang kami sajikan bermanfaat bagi warga dan pengunjung.",
  headPhoto: "profile/kepala_desa_pringgodani.webp",
  headName: "Ki Suryo Pringgo",
  headPosition: "Kepala Desa",
  historyText:
    'Nama Pringgodani berakar dari dua kata bahasa Jawa: "pring" yang berarti bambu, dan "dani" yang bermakna hamparan atau ladang. Sesuai namanya, cikal bakal desa ini adalah permukiman kecil di tengah rumpun bambu lebat yang mulai dibuka warga pendatang pada awal abad ke-20 untuk bertani dan beternak.\n\nMemasuki masa kolonial, kemahiran warga mengolah bambu menjadi berbagai perkakas rumah tangga membuat Pringgodani dikenal hingga ke wilayah tetangga. Keterampilan anyaman ini diwariskan turun-temurun dan hingga kini masih menjadi salah satu ciri khas kerajinan desa.\n\nSetelah kemerdekaan, desa berkembang menjadi kawasan agraris dengan sawah dan kebun sebagai penopang utama ekonomi warga. Sistem irigasi tradisional yang dibangun secara gotong royong pada era itu sebagian masih digunakan hingga sekarang.\n\nMemasuki dekade terakhir, Pringgodani mulai merintis transformasi digital dalam pelayanan publik dan promosi UMKM, tanpa meninggalkan akar pertanian dan kerajinan yang telah membentuk identitas desa sejak awal berdirinya.',
  historyExcerpt:
    'Nama Pringgodani berakar dari dua kata bahasa Jawa: "pring" (bambu) dan "dani" (hamparan). Cikal bakal desa ini adalah permukiman di tengah rumpun bambu lebat yang dibuka warga pendatang pada awal abad ke-20...',
  vision: "Mewujudkan Desa Pringgodani yang mandiri, maju, dan sejahtera.",
  missions: [
    "Meningkatkan kualitas pelayanan publik berbasis digital",
    "Mendorong pertumbuhan UMKM dan potensi desa",
    "Menjaga kelestarian lingkungan dan budaya lokal",
  ],
  officials: [
    {
      name: "Ki Suryo Pringgo",
      position: "Kepala Desa",
      photo: "profile/officials/kepala_desa.webp",
    },
    {
      name: "Siti Handayani",
      position: "Sekretaris Desa",
      photo: "profile/officials/sekretaris.webp",
    },
    {
      name: "Bagas Wirawan",
      position: "Kaur Keuangan",
      photo: "profile/officials/kaur_keuangan.webp",
    },
  ],
};

export const MOCK_STATS: VillageStatsDto = {
  umkmCount: 4,
  productCount: 5,
  newsCount: 15,
  dusunCount: 8,
};
