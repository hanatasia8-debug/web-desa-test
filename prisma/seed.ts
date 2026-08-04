/**
 * Dev seed data untuk Desa Pringgodani.
 * Jalankan: `npm run prisma:seed` (via `prisma db seed` / `tsx prisma/seed.ts`).
 *
 * Catatan:
 * - User/admin TIDAK di-seed di sini. Auth Admin memakai Supabase Auth
 *   (Tahap 3) — password TIDAK boleh disimpan manual di tabel `users`.
 *   `News.authorId` dibiarkan null untuk seed data.
 * - Path gambar di bawah adalah placeholder key yang mengikuti taxonomy
 *   folder Supabase Storage di prd_2.txt §7.1 (belum ada file asli sampai
 *   Tahap 3 — hanya untuk mengetes UI loading/empty/error state).
 */
import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient, ContentStatus } from "../src/generated/prisma";

// `tsx prisma/seed.ts` tidak memuat `.env.local` sendiri (dan Prisma 7 juga
// tidak lagi auto-load `.env`), jadi dimuat manual di sini.
try {
  process.loadEnvFile(".env.local");
} catch {
  // `.env.local` belum ada — pakai env dari shell apa adanya.
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL belum diisi — copy `.env.local.example` ke `.env.local` lalu isi connection string PostgreSQL.",
  );
}

// Prisma 7 mewajibkan driver adapter eksplisit.
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

async function main() {
  console.log("🌱 Seeding Desa Pringgodani...");

  // ---------- Village Profile ----------
  await prisma.villageProfile.upsert({
    where: { id: "00000000-0000-0000-0000-000000000001" },
    update: {},
    create: {
      id: "00000000-0000-0000-0000-000000000001",
      villageName: "Pringgodani",
      headGreeting:
        "Selamat datang di website resmi Desa Pringgodani. Semoga informasi yang kami sajikan bermanfaat bagi warga dan pengunjung.",
      headPhoto: "profile/kepala_desa_pringgodani.webp",
      historyText:
        "Desa Pringgodani berdiri sejak masa kolonial dan berkembang menjadi desa agraris yang dikenal dengan hasil pertanian dan kerajinan warganya.",
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
    },
  });

  // ---------- News Categories ----------
  const categoriesData = [
    { name: "Pemerintahan", slug: "pemerintahan" },
    { name: "Kegiatan Warga", slug: "kegiatan-warga" },
    { name: "Pembangunan", slug: "pembangunan" },
    { name: "Pengumuman", slug: "pengumuman" },
  ];
  const categories = await Promise.all(
    categoriesData.map((c) =>
      prisma.newsCategory.upsert({
        where: { slug: c.slug },
        update: {},
        create: c,
      }),
    ),
  );

  // ---------- News ----------
  // 15 published articles across all 4 categories — deliberately more than one
  // page (the /berita grid shows 6 per page) and at least 4 per category, so
  // pagination, the category chips and "Berita Terkait" (3 other articles in
  // the same category) all have real data to exercise. The keyword "irigasi"
  // appears in one title and in a different article's summary, which is what
  // the title-OR-summary search is tested against.
  const newsSeed = [
    {
      title: "Musyawarah Desa Bahas Rencana Pembangunan 2027",
      slug: "musyawarah-desa-rencana-pembangunan-2027",
      category: categories[0],
      summary:
        "Pemerintah Desa Pringgodani menggelar musyawarah membahas prioritas pembangunan tahun depan.",
      daysAgo: 2,
      sections: [
        {
          title: "Prioritas Usulan Warga",
          paragraph:
            "Musyawarah desa yang digelar di aula kantor desa dihadiri perwakilan delapan dusun, pengurus RT dan RW, kelompok tani, serta pengurus PKK. Setiap perwakilan menyampaikan usulan prioritas pembangunan untuk tahun anggaran berikutnya, mulai dari perbaikan saluran air, penambahan titik penerangan jalan, hingga penguatan modal bagi kelompok usaha rumah tangga di masing-masing dusun.",
        },
        {
          title: "Kesepakatan Anggaran",
          paragraph:
            "Setelah pembahasan berjalan hampir empat jam, forum menyepakati tiga prioritas utama yang akan dibiayai lebih dulu. Pemerintah desa menegaskan seluruh usulan yang belum tertampung tetap dicatat dalam dokumen perencanaan jangka menengah, sehingga tidak hilang dan bisa diajukan kembali pada musyawarah tahun berikutnya tanpa harus mengulang proses pengusulan dari awal.",
        },
        {
          title: "Catatan Bidang Pemberdayaan",
          paragraph:
            "Bidang pemberdayaan masyarakat mendapat perhatian khusus dalam pembahasan kali ini. Pengurus PKK mengusulkan pelatihan pengolahan hasil pertanian agar komoditas yang selama ini dijual mentah bisa diolah lebih dulu sebelum dipasarkan. Kelompok karang taruna menambahkan usulan pelatihan pemasaran daring bagi pelaku usaha muda, dengan catatan pelatihan harus berlanjut sampai peserta benar-benar mampu mengelola lapak sendiri, bukan berhenti pada satu kali pertemuan seperti beberapa program sebelumnya yang tidak berlanjut setelah pelatihan selesai.",
        },
        {
          title: "Pengawasan oleh Warga",
          paragraph:
            "Badan Permusyawaratan Desa mengingatkan bahwa setiap kegiatan yang disepakati harus disertai papan informasi kegiatan di lokasi pekerjaan, memuat nama kegiatan, sumber dana, nilai anggaran, serta jangka waktu pelaksanaan. Dengan begitu warga di sekitar lokasi dapat langsung membandingkan apa yang dikerjakan dengan apa yang dianggarkan. Pemerintah desa menyanggupi hal tersebut dan menambahkan bahwa foto perkembangan pekerjaan akan diunggah secara berkala ke situs resmi desa.",
        },
        {
          title: "Tindak Lanjut",
          paragraph:
            "Notulen musyawarah beserta rincian pagu indikatif akan dipublikasikan melalui papan informasi desa dan situs resmi ini agar warga dapat ikut mengawasi. Warga yang ingin menyampaikan tanggapan diberi waktu dua minggu sejak dokumen diumumkan, baik melalui perangkat dusun masing-masing maupun langsung ke sekretariat desa pada jam pelayanan. Setelah masa tanggapan berakhir, dokumen final akan ditetapkan melalui peraturan desa dan menjadi dasar penyusunan anggaran tahun berikutnya.",
        },
      ],
    },
    {
      title: "Panen Raya Padi Warga Dusun Krajan",
      slug: "panen-raya-padi-dusun-krajan",
      category: categories[1],
      summary:
        "Musim panen kali ini menghasilkan hasil yang melimpah berkat sistem irigasi baru.",
      daysAgo: 5,
      sections: [
        {
          title: "Hasil Panen Meningkat",
          paragraph:
            "Kelompok Tani Makmur Dusun Krajan menggelar panen raya di lahan seluas dua belas hektare. Rata-rata hasil ubinan tahun ini tercatat lebih tinggi dibanding musim tanam sebelumnya, yang menurut para petani dipengaruhi oleh pembagian air yang jauh lebih merata sejak saluran tersier diperbaiki pada awal tahun.",
        },
        {
          title: "Dukungan Penyuluh",
          paragraph:
            "Penyuluh pertanian pendamping menyebut pendampingan rutin soal jadwal tanam serempak dan pengendalian hama terpadu ikut menentukan hasil. Petani diajak mencatat penggunaan pupuk dan air pada setiap petak agar pola tanam musim depan bisa disusun berdasarkan catatan nyata, bukan sekadar perkiraan seperti tahun-tahun sebelumnya.",
        },
      ],
    },
    {
      title: "Perbaikan Jalan Poros Desa Rampung Lebih Cepat",
      slug: "perbaikan-jalan-poros-desa-rampung",
      category: categories[2],
      summary:
        "Proyek perbaikan jalan poros desa selesai dua minggu lebih cepat dari jadwal.",
      daysAgo: 9,
      sections: [
        {
          title: "Pengerjaan Lebih Cepat dari Jadwal",
          paragraph:
            "Pekerjaan pengerasan dan pelapisan ulang jalan poros sepanjang satu koma delapan kilometer dinyatakan rampung dua minggu lebih awal dari target kontrak. Cuaca yang relatif kering sepanjang masa pengerjaan serta penambahan jam kerja pada dua pekan terakhir menjadi alasan utama percepatan tersebut.",
        },
        {
          title: "Manfaat bagi Warga",
          paragraph:
            "Jalan poros ini merupakan jalur utama yang menghubungkan permukiman warga dengan pasar kecamatan. Sebelum diperbaiki, kendaraan pengangkut hasil pertanian kerap tertahan saat musim hujan. Pemerintah desa meminta warga tidak menjemur hasil panen di badan jalan agar lapisan permukaan yang baru tidak cepat rusak.",
        },
      ],
    },
    {
      title: "Pendaftaran Bantuan Sosial Tahap II Dibuka",
      slug: "pendaftaran-bansos-tahap-2",
      category: categories[3],
      summary:
        "Warga yang memenuhi syarat dapat mendaftar bantuan sosial tahap kedua mulai minggu ini.",
      daysAgo: 12,
      sections: [
        {
          title: "Syarat dan Berkas",
          paragraph:
            "Pendaftaran dibuka bagi warga yang terdaftar dalam data terpadu kesejahteraan sosial dan belum menerima bantuan pada tahap pertama. Berkas yang perlu disiapkan meliputi fotokopi kartu keluarga, kartu tanda penduduk, serta surat keterangan dari ketua RT setempat sebagai pengantar.",
        },
        {
          title: "Jadwal dan Lokasi",
          paragraph:
            "Pendaftaran dilayani di kantor desa setiap hari kerja pada jam pelayanan. Perangkat dusun juga membuka pos bantuan pendaftaran bagi warga lanjut usia yang kesulitan datang langsung. Seluruh proses tidak dipungut biaya apa pun, dan warga diminta melapor bila menemukan pihak yang meminta imbalan.",
        },
      ],
    },
    {
      title: "Festival Budaya Pringgodani Tarik Ratusan Pengunjung",
      slug: "festival-budaya-pringgodani",
      category: categories[1],
      summary:
        "Festival tahunan menampilkan kesenian tradisional dan kuliner khas desa.",
      daysAgo: 20,
      sections: [
        {
          title: "Rangkaian Acara",
          paragraph:
            "Festival budaya tahunan berlangsung dua hari di lapangan desa, menampilkan pertunjukan jaranan, karawitan, serta parade busana khas dari tiap dusun. Panitia mencatat kunjungan meningkat dibanding penyelenggaraan tahun sebelumnya, sebagian di antaranya berasal dari desa tetangga dan wilayah kecamatan lain.",
        },
        {
          title: "Dampak bagi UMKM",
          paragraph:
            "Bazar UMKM yang menyertai festival diikuti puluhan pelaku usaha rumahan. Sebagian besar pedagang melaporkan dagangan mereka habis pada hari kedua. Pemerintah desa berencana menjadikan bazar sebagai agenda rutin triwulanan, tidak hanya menempel pada festival tahunan.",
        },
      ],
    },
    {
      title: "Pemerintah Desa Luncurkan Layanan Administrasi Digital",
      slug: "layanan-administrasi-digital-diluncurkan",
      category: categories[0],
      summary:
        "Pengajuan surat keterangan kini bisa dilakukan tanpa harus antre di kantor desa.",
      daysAgo: 15,
      sections: [
        {
          title: "Layanan yang Tersedia",
          paragraph:
            "Layanan tahap awal mencakup surat keterangan domisili, surat pengantar, serta surat keterangan usaha. Warga cukup mengisi formulir daring, lalu menerima pemberitahuan ketika berkas siap diambil di kantor desa, sehingga tidak perlu menunggu di tempat sejak awal proses.",
        },
        {
          title: "Pendampingan Warga",
          paragraph:
            "Perangkat desa menyediakan pendampingan bagi warga yang belum terbiasa menggunakan layanan daring. Loket manual tetap dibuka seperti biasa dan tidak akan ditutup, karena tujuan digitalisasi adalah memperpendek antrean, bukan menghilangkan pelayanan tatap muka bagi yang membutuhkan.",
        },
      ],
    },
    {
      title: "Laporan Realisasi APBDes Semester Pertama Dipublikasikan",
      slug: "realisasi-apbdes-semester-pertama",
      category: categories[0],
      summary:
        "Rincian penggunaan anggaran desa dapat diakses seluruh warga sebagai bentuk transparansi.",
      daysAgo: 27,
      sections: [
        {
          title: "Isi Laporan",
          paragraph:
            "Laporan memuat rincian pendapatan, belanja, dan sisa anggaran hingga akhir semester pertama. Belanja terbesar terserap pada bidang pembangunan fisik, disusul pemberdayaan masyarakat dan penyelenggaraan pemerintahan desa sesuai pagu yang ditetapkan pada awal tahun.",
        },
        {
          title: "Akses dan Tanggapan",
          paragraph:
            "Salinan laporan ditempel di papan informasi kantor desa dan di setiap balai dusun. Warga yang ingin meminta penjelasan lebih rinci dapat mengajukan pertanyaan tertulis kepada sekretariat desa, dan jawabannya akan dibacakan pada musyawarah dusun terdekat.",
        },
      ],
    },
    {
      title: "Rapat Koordinasi Perangkat Desa dan BPD Awal Tahun",
      slug: "rapat-koordinasi-perangkat-desa-bpd",
      category: categories[0],
      summary:
        "Evaluasi kinerja tahun lalu dan penyusunan agenda kerja tahun berjalan dibahas bersama BPD.",
      daysAgo: 40,
      sections: [
        {
          title: "Evaluasi Tahun Lalu",
          paragraph:
            "Rapat diawali pemaparan capaian program tahun sebelumnya, termasuk kegiatan yang tidak terlaksana beserta alasannya. Badan Permusyawaratan Desa menyoroti perlunya jadwal pelaporan yang lebih teratur agar pengawasan tidak menumpuk di akhir tahun anggaran.",
        },
        {
          title: "Agenda Tahun Berjalan",
          paragraph:
            "Forum menyepakati agenda kerja bersama, termasuk jadwal musyawarah dusun, pemutakhiran data warga, serta penyusunan laporan berkala yang akan diumumkan kepada publik setiap semester melalui papan informasi dan situs resmi desa.",
        },
      ],
    },
    {
      title: "Kerja Bakti Bersih Sungai Serentak di Delapan Dusun",
      slug: "kerja-bakti-bersih-sungai-delapan-dusun",
      category: categories[1],
      summary:
        "Ratusan warga bergotong royong membersihkan aliran sungai menjelang musim hujan.",
      daysAgo: 30,
      sections: [
        {
          title: "Gotong Royong Serentak",
          paragraph:
            "Kegiatan dimulai sejak pagi dan diikuti warga dari delapan dusun secara serentak. Fokus pembersihan diarahkan pada sampah dan sedimen yang menyumbat aliran, terutama di titik-titik yang selama ini menjadi langganan luapan air saat hujan deras berlangsung lama.",
        },
        {
          title: "Rencana Rutin",
          paragraph:
            "Pemerintah desa menyiapkan jadwal kerja bakti berkala setiap dua bulan agar aliran sungai tetap terjaga. Warga juga diminta tidak membuang sampah rumah tangga ke sungai, karena pembersihan berkala tidak akan berarti bila kebiasaan lama terus berulang.",
        },
      ],
    },
    {
      title: "Posyandu Lansia Dusun Sidomulyo Layani 120 Warga",
      slug: "posyandu-lansia-dusun-sidomulyo",
      category: categories[1],
      summary:
        "Pemeriksaan kesehatan rutin bulanan menyasar deteksi dini penyakit pada warga usia lanjut.",
      daysAgo: 44,
      sections: [
        {
          title: "Layanan Pemeriksaan",
          paragraph:
            "Kegiatan posyandu lansia bulan ini melayani sekitar seratus dua puluh warga, meliputi pemeriksaan tekanan darah, gula darah, serta penimbangan berat badan. Kader posyandu dibantu tenaga kesehatan dari puskesmas pembantu yang bertugas di wilayah desa.",
        },
        {
          title: "Rujukan dan Tindak Lanjut",
          paragraph:
            "Warga dengan hasil pemeriksaan di luar batas normal langsung diarahkan untuk pemeriksaan lanjutan. Kader mencatat riwayat tiap peserta agar perkembangan kondisi kesehatan dapat dipantau dari bulan ke bulan, bukan hanya dilihat sekali saat pemeriksaan berlangsung.",
        },
      ],
    },
    {
      title: "Pembangunan Jembatan Penghubung Dusun Ngasem Dimulai",
      slug: "pembangunan-jembatan-dusun-ngasem",
      category: categories[2],
      summary:
        "Jembatan baru akan memangkas jarak tempuh warga Dusun Ngasem menuju pusat desa.",
      daysAgo: 17,
      sections: [
        {
          title: "Awal Pengerjaan",
          paragraph:
            "Pekerjaan diawali dengan pembersihan lahan dan pemasangan pondasi di kedua sisi sungai. Selama masa pengerjaan, warga diarahkan melewati jalur alternatif yang telah diperkeras sementara agar aktivitas sehari-hari tidak terganggu terlalu jauh.",
        },
        {
          title: "Target Penyelesaian",
          paragraph:
            "Jembatan ditargetkan selesai sebelum puncak musim hujan. Pemerintah desa mengumumkan perkembangan pekerjaan setiap dua minggu melalui papan informasi, sekaligus membuka ruang bagi warga untuk melaporkan hal-hal yang dinilai tidak sesuai di lapangan.",
        },
      ],
    },
    {
      title: "Irigasi Tersier Sawah Blok Selatan Diperbaiki",
      slug: "irigasi-tersier-sawah-blok-selatan",
      category: categories[2],
      summary:
        "Saluran yang selama ini bocor diperbaiki agar pembagian air antarpetak lebih adil.",
      daysAgo: 33,
      sections: [
        {
          title: "Perbaikan Saluran",
          paragraph:
            "Perbaikan mencakup pengecoran ulang dinding saluran sepanjang enam ratus meter serta penataan pintu air pada tiga titik pembagi. Sebelumnya, kebocoran membuat petak di ujung saluran hanya menerima sedikit air pada musim kemarau.",
        },
        {
          title: "Pengaturan Giliran Air",
          paragraph:
            "Bersamaan dengan perbaikan fisik, kelompok tani menyusun ulang jadwal giliran pengairan yang disepakati bersama. Kesepakatan ini ditempel di saung tani agar semua anggota dapat memeriksa jadwalnya dan potensi selisih paham soal pembagian air bisa ditekan.",
        },
      ],
    },
    {
      title: "Penerangan Jalan Bertenaga Surya Dipasang di Jalur Utama",
      slug: "penerangan-jalan-tenaga-surya-jalur-utama",
      category: categories[2],
      summary:
        "Dua puluh titik lampu jalan bertenaga surya mulai menyala di sepanjang jalur utama desa.",
      daysAgo: 47,
      sections: [
        {
          title: "Titik Pemasangan",
          paragraph:
            "Pemasangan diutamakan pada persimpangan dan ruas jalan yang selama ini gelap pada malam hari. Setiap tiang dilengkapi panel surya dan baterai penyimpan, sehingga tidak menambah beban tagihan listrik desa setiap bulannya.",
        },
        {
          title: "Perawatan",
          paragraph:
            "Perangkat dusun ditunjuk sebagai penanggung jawab pemeriksaan berkala, terutama pembersihan panel dari debu dan daun. Warga diimbau melaporkan lampu yang mati agar perbaikan dapat dijadwalkan sebelum kerusakan meluas ke komponen lain.",
        },
      ],
    },
    {
      title: "Jadwal Pelayanan Kantor Desa Selama Libur Nasional",
      slug: "jadwal-pelayanan-kantor-desa-libur-nasional",
      category: categories[3],
      summary:
        "Pelayanan administrasi menyesuaikan jadwal libur nasional, layanan darurat tetap tersedia.",
      daysAgo: 24,
      sections: [
        {
          title: "Penyesuaian Jadwal",
          paragraph:
            "Kantor desa tidak melayani administrasi umum selama tanggal merah yang ditetapkan pemerintah. Warga yang membutuhkan surat keterangan diimbau mengurus sebelum masa libur dimulai agar tidak tertunda hingga hari kerja berikutnya.",
        },
        {
          title: "Layanan Darurat",
          paragraph:
            "Layanan yang berkaitan dengan kematian, kelahiran, dan keadaan darurat lain tetap dilayani melalui perangkat dusun yang bertugas bergiliran. Nomor kontak petugas piket diumumkan di papan informasi setiap dusun.",
        },
      ],
    },
    {
      title: "Pemadaman Listrik Terjadwal di Wilayah Pringgodani",
      slug: "pemadaman-listrik-terjadwal-pringgodani",
      category: categories[3],
      summary:
        "Pemeliharaan jaringan menyebabkan pemadaman sementara di beberapa dusun.",
      daysAgo: 38,
      sections: [
        {
          title: "Wilayah Terdampak",
          paragraph:
            "Pemadaman dijadwalkan pada siang hari dan berlangsung beberapa jam di dusun yang dilalui jaringan yang sedang dipelihara. Pemberitahuan disampaikan lebih awal agar warga, terutama pelaku usaha rumahan, dapat mengatur kegiatan produksinya.",
        },
        {
          title: "Imbauan",
          paragraph:
            "Warga diimbau mencabut peralatan elektronik yang sensitif terhadap lonjakan tegangan saat listrik kembali menyala. Pemerintah desa menyediakan kanal pengaduan bila pemadaman berlangsung jauh melewati jadwal yang diumumkan.",
        },
      ],
    },
  ];

  for (const n of newsSeed) {
    const publishedAt = new Date(Date.now() - n.daysAgo * 24 * 60 * 60 * 1000);
    const payload = {
      title: n.title,
      categoryId: n.category.id,
      summary: n.summary,
      coverImage: `news/covers/news_seed_${n.slug}.webp`,
      coverCaption: `${n.title} — dokumentasi Pemerintah Desa Pringgodani.`,
      contentSections: n.sections.map((s) => ({
        section_title: s.title,
        paragraph: s.paragraph,
        section_image: null,
      })),
      status: ContentStatus.PUBLISHED,
      publishedAt,
    };

    await prisma.news.upsert({
      where: { slug: n.slug },
      // Re-seeding refreshes the body/caption of rows created by an earlier
      // seed run, so the data stays reproducible instead of frozen at whatever
      // the first run wrote.
      update: payload,
      create: { ...payload, slug: n.slug },
    });
  }

  // One pending-review submission to exercise the admin queue.
  await prisma.news.upsert({
    where: { slug: "kerja-bakti-bersih-sungai-diusulkan-warga" },
    update: {},
    create: {
      title: "Warga Usulkan Kerja Bakti Bersih Sungai",
      slug: "kerja-bakti-bersih-sungai-diusulkan-warga",
      categoryId: categories[1].id,
      summary:
        "Usulan dari komunitas warga untuk mengadakan kerja bakti membersihkan aliran sungai desa.",
      coverImage: "news/covers/news_seed_kerja_bakti.webp",
      coverCaption: "Usulan kerja bakti bersih sungai",
      contentSections: [
        {
          section_title: "Usulan Warga",
          paragraph: "Sejumlah warga mengusulkan agenda kerja bakti rutin.",
          section_image: null,
        },
      ],
      status: ContentStatus.PENDING_REVIEW,
      submitterName: "Warga Dusun Krajan",
      submitterEmail: "warga.krajan@example.com",
      submitterPhone: "6281200000001",
      revisionToken: "seed-revision-token-news-0001",
    },
  });

  // ---------- Village Potentials ----------
  const potentialSeed = [
    {
      title: "Pertanian Padi Organik",
      slug: "pertanian-padi-organik",
      category: "PERTANIAN" as const,
      overview:
        "Sentra padi organik dengan sistem irigasi tradisional yang terjaga.",
    },
    {
      title: "Wisata Bukit Pringgo",
      slug: "wisata-bukit-pringgo",
      category: "PARIWISATA" as const,
      overview:
        "Destinasi wisata alam dengan panorama perbukitan dan udara sejuk.",
    },
    {
      title: "Kerajinan Anyaman Bambu",
      slug: "kerajinan-anyaman-bambu",
      category: "KERAJINAN" as const,
      overview: "Kerajinan anyaman bambu turun-temurun khas Dusun Krajan.",
    },
  ];

  const potentials = [];
  for (const p of potentialSeed) {
    const potential = await prisma.villagePotential.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        title: p.title,
        slug: p.slug,
        category: p.category,
        overview: p.overview,
        description: `${p.overview} Potensi ini menjadi salah satu andalan ekonomi warga Desa Pringgodani.`,
        coverImage: `potentials/covers/potential_seed_${p.slug}.webp`,
        gallery: [`potentials/gallery/potential_seed_${p.slug}_1.webp`],
        latitude: -7.25 + Math.random() * 0.02,
        longitude: 110.15 + Math.random() * 0.02,
      },
    });
    potentials.push(potential);
  }

  // ---------- UMKM (each: 1 kategori wajib, 1 potensi nullable, min 1 produk) ----------
  const umkmSeed = [
    {
      name: "Keripik Singkong Bu Marni",
      slug: "keripik-singkong-bu-marni",
      category: "KULINER" as const,
      potential: potentials[0],
      products: [
        { productName: "Keripik Singkong Original 200g", price: 15000 },
      ],
    },
    {
      name: "Anyaman Bambu Pak Slamet",
      slug: "anyaman-bambu-pak-slamet",
      category: "KERAJINAN_SOUVENIR" as const,
      potential: potentials[2],
      products: [
        { productName: "Keranjang Anyaman Sedang", price: 45000 },
        { productName: "Tudung Saji Bambu", price: 30000 },
      ],
    },
    {
      name: "Warung Kopi Bukit Pringgo",
      slug: "warung-kopi-bukit-pringgo",
      category: "KULINER" as const,
      potential: potentials[1],
      products: [{ productName: "Kopi Robusta Lokal", price: 8000 }],
    },
    {
      name: "Konveksi Batik Pringgodani",
      slug: "konveksi-batik-pringgodani",
      category: "FASHION" as const,
      potential: null,
      products: [{ productName: "Kemeja Batik Motif Pringgo", price: 120000 }],
    },
  ];

  for (const u of umkmSeed) {
    await prisma.umkm.upsert({
      where: { slug: u.slug },
      update: {},
      create: {
        name: u.name,
        slug: u.slug,
        ownerName: u.name.split(" ").slice(-2).join(" "),
        category: u.category,
        description: `${u.name} adalah salah satu UMKM binaan Desa Pringgodani yang telah berjalan turun-temurun.`,
        whatsappNumber: "6281234500000",
        address: "Dusun Krajan, Desa Pringgodani",
        latitude: -7.25 + Math.random() * 0.02,
        longitude: 110.15 + Math.random() * 0.02,
        logo: `umkm/logos/umkm_seed_${u.slug}.webp`,
        gallery: [`umkm/gallery/umkm_seed_${u.slug}_1.webp`],
        status: ContentStatus.PUBLISHED,
        publishedAt: new Date(),
        potentialId: u.potential?.id ?? null,
        products: {
          create: u.products.map((p) => ({
            productName: p.productName,
            price: p.price,
            productPhoto: `umkm/products/umkm_seed_${u.slug}_${p.productName
              .toLowerCase()
              .replace(/\s+/g, "-")}.webp`,
          })),
        },
      },
    });
  }

  // ---------- Public Facilities ----------
  const facilitySeed = [
    { name: "Kantor Desa Pringgodani", category: "KANTOR_DESA" as const },
    { name: "SD Negeri Pringgodani 1", category: "SEKOLAH" as const },
    {
      name: "Masjid Al-Ikhlas Pringgodani",
      category: "TEMPAT_IBADAH" as const,
    },
    {
      name: "Puskesmas Pembantu Pringgodani",
      category: "FASILITAS_KESEHATAN" as const,
    },
    { name: "Bukit Pringgo View Point", category: "DESTINASI_WISATA" as const },
  ];
  for (const f of facilitySeed) {
    const existing = await prisma.publicFacility.findFirst({
      where: { name: f.name },
    });
    if (!existing) {
      await prisma.publicFacility.create({
        data: {
          name: f.name,
          category: f.category,
          address: "Desa Pringgodani",
          latitude: -7.25 + Math.random() * 0.02,
          longitude: 110.15 + Math.random() * 0.02,
          image: `facilities/facility_seed_${f.name.toLowerCase().replace(/\s+/g, "-")}.webp`,
        },
      });
    }
  }

  // ---------- Banners ----------
  const bannerSeed = [
    {
      title: "Selamat Datang di Desa Pringgodani",
      imageUrl: "banners/banner_seed_welcome.webp",
      order: 0,
    },
    {
      title: "Ayo Daftarkan UMKM Anda",
      imageUrl: "banners/banner_seed_umkm.webp",
      linkUrl: "/submit/umkm",
      order: 1,
    },
  ];
  for (const b of bannerSeed) {
    const existing = await prisma.banner.findFirst({
      where: { title: b.title },
    });
    if (!existing) {
      await prisma.banner.create({
        data: { ...b, isActive: true },
      });
    }
  }

  // ---------- Settings ----------
  const settingsSeed: { key: string; value: unknown; description: string }[] = [
    {
      key: "site_title",
      value: "Website Resmi Desa Pringgodani",
      description: "Judul situs default untuk SEO",
    },
    {
      key: "contact_email",
      value: "info@pringgodani.desa.id",
      description: "Email kontak resmi desa",
    },
    {
      key: "contact_phone",
      value: "6281234567890",
      description: "Nomor telepon/WhatsApp kontak resmi",
    },
    {
      key: "contact_address",
      value: "Jl. Raya Pringgodani No. 1, Kab. Pringgodani",
      description: "Alamat kantor desa untuk footer",
    },
    {
      key: "social_media",
      value: { instagram: "@desapringgodani", facebook: "Desa Pringgodani" },
      description: "Tautan media sosial resmi",
    },
    {
      key: "maintenance_mode",
      value: false,
      description: "Status mode maintenance situs",
    },
    {
      key: "jumlah_dusun",
      value: 8,
      description:
        "Jumlah dusun di Desa Pringgodani (ditampilkan di statistik Beranda)",
    },
  ];
  for (const s of settingsSeed) {
    await prisma.settings.upsert({
      where: { key: s.key },
      update: {},
      create: s,
    });
  }

  console.log("✅ Seeding selesai.");
}

main()
  .catch((e) => {
    console.error("❌ Seed gagal:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
