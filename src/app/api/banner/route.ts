import { prisma } from "@/shared/lib/prisma";
import { apiSuccess, apiError } from "@/shared/api/response";
import type { BannerListResponse } from "@/entities/banner/model/types";

/**
 * GET /api/banner
 * Public. Returns active banners ordered by `order` ascending. The Home
 * hero uses the first item as its background image (see README note on
 * the Banner/hero interpretation — the prototype mockup only shows a
 * single static hero image, since a static HTML file can't demonstrate a
 * dynamic/rotating banner).
 */
export async function GET() {
  try {
    const items = await prisma.banner.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });

    const body: BannerListResponse = {
      items: items.map((b) => ({
        id: b.id,
        title: b.title,
        imageUrl: b.imageUrl,
        linkUrl: b.linkUrl,
        order: b.order,
      })),
    };

    return apiSuccess(body, "Daftar banner berhasil diambil.");
  } catch (err) {
    console.error("GET /api/banner failed:", err);
    return apiError(
      "INTERNAL_SERVER_ERROR",
      "Gagal mengambil daftar banner.",
      500,
    );
  }
}
