import { prisma } from "@/shared/lib/prisma";
import { apiSuccess, apiError } from "@/shared/api/response";
import type {
  VillageOfficialDto,
  VillageProfileResponse,
} from "@/entities/desa/model/types";

const HISTORY_EXCERPT_LENGTH = 200;

/**
 * GET /api/profil
 * Public. Returns the (singleton) Village Profile row plus homepage stats
 * (UMKM/product/news counts from the DB, "jumlah dusun" from `Settings`
 * since there's no Dusun model in the schema).
 */
export async function GET() {
  try {
    const [profileRow, umkmCount, productCount, newsCount, dusunSetting] =
      await Promise.all([
        prisma.villageProfile.findFirst(),
        prisma.umkm.count({ where: { status: "PUBLISHED" } }),
        prisma.umkmProduct.count(),
        prisma.news.count({ where: { status: "PUBLISHED" } }),
        prisma.settings.findUnique({ where: { key: "jumlah_dusun" } }),
      ]);

    const officials = (profileRow?.officials ?? []) as unknown as
      VillageOfficialDto[] | null;
    const headOfficial = officials?.find((o) =>
      o.position?.toLowerCase().includes("kepala desa"),
    );

    const historyText = profileRow?.historyText ?? "";

    const body: VillageProfileResponse = {
      profile: profileRow
        ? {
            villageName: profileRow.villageName,
            headGreeting: profileRow.headGreeting,
            headPhoto: profileRow.headPhoto,
            headName: headOfficial?.name ?? null,
            headPosition: headOfficial?.position ?? null,
            historyText,
            historyExcerpt:
              historyText.length > HISTORY_EXCERPT_LENGTH
                ? `${historyText.slice(0, HISTORY_EXCERPT_LENGTH).trimEnd()}...`
                : historyText,
            vision: profileRow.vision,
            missions: (profileRow.missions ?? []) as unknown as string[],
            officials: officials ?? [],
          }
        : null,
      stats: {
        umkmCount,
        productCount,
        newsCount,
        dusunCount: Number(dusunSetting?.value ?? 0) || 0,
      },
    };

    return apiSuccess(body, "Profil desa berhasil diambil.");
  } catch (err) {
    console.error("GET /api/profil failed:", err);
    return apiError(
      "INTERNAL_SERVER_ERROR",
      "Gagal mengambil profil desa.",
      500,
    );
  }
}
