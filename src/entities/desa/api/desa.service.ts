import { apiClient } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { VillageProfileResponse, VillageStatsDto } from "../model/types";
import { getStoredVillageProfile } from "@/shared/utils/profile-storage";

export const DesaService = {
  async getProfileWithStats(): Promise<VillageProfileResponse> {
    const stored = getStoredVillageProfile();

    let apiProfile = null;
    let stats: VillageStatsDto = {
      umkmCount: 0,
      productCount: 0,
      newsCount: 0,
      dusunCount: 0,
    };

    try {
      const { data } =
        await apiClient.get<ApiSuccessBody<VillageProfileResponse>>(
          "/public/profil",
        );
      if (data?.data) {
        apiProfile = data.data.profile;
        if (data.data.stats) {
          stats = data.data.stats;
        }
      }
    } catch (err) {
      console.error("Gagal memuat profil desa dari API:", err);
    }

    const mergedProfile = {
      villageName: apiProfile?.villageName || "Lokal Pringgodani",
      headGreeting:
        apiProfile?.headGreeting ||
        stored.headGreeting ||
        "Selamat datang di portal resmi Lokal Pringgodani.",
      headPhoto:
        apiProfile?.headPhoto ||
        stored.headPhoto ||
        "/images/kepala-desa.jpg",
      headName: apiProfile?.headName || stored.headName || "Kepala Desa",
      headPosition:
        apiProfile?.headPosition || stored.headPosition || "Kepala Desa",
      aboutText:
        apiProfile?.aboutText ||
        stored.aboutText ||
        "Desa Pringgodani berada di wilayah Kecamatan Bantur, Kabupaten Malang, Jawa Timur. Wilayah ini dianugerahi tanah yang subur untuk komoditas pertanian tebu, padi, dan palawija, serta masyarakat yang aktif memproduksi aneka produk olahan rumahan, kerajinan tangan, dan aneka usaha jasa.\n\nMelalui portal Lokal Pringgodani, Pemerintah Desa memfasilitasi publikasi produk olahan, sentra kerajinan, dan hasil bumi warga agar mudah ditemukan oleh masyarakat luas dan pembeli dari luar daerah secara langsung.",
      officials:
        apiProfile?.officials && apiProfile.officials.length > 0
          ? apiProfile.officials
          : stored.officials?.length > 0
          ? stored.officials.map((o) => ({
              name: String(o.name || ""),
              position: String(o.position || ""),
              photo: String(o.photoUrl || ""),
              greeting: o.greeting ? String(o.greeting) : undefined,
              email: o.email ? String(o.email) : undefined,
            }))
          : [],
    };

    return { profile: mergedProfile, stats };
  },
};
