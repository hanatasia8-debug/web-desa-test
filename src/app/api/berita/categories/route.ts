import { prisma } from "@/shared/lib/prisma";
import { apiSuccess, apiError } from "@/shared/api/response";
import type { NewsCategoryListResponse } from "@/entities/berita/model/types";

/**
 * GET /api/berita/categories
 * Public. Backs the category chips on /berita.
 *
 * Not in `01-architecture-plan.md §8`'s endpoint matrix — added because the
 * listing page's filter must reflect the `NewsCategory` rows that actually
 * exist in the database. The prototype hardcodes example categories
 * ("Kesehatan", "Budaya", ...) that are not all in our data; hardcoding them
 * would produce filter chips that match nothing.
 *
 * Route note: this static segment takes precedence over the sibling dynamic
 * `[slug]` route, so `/api/berita/categories` never resolves to an article.
 */
export async function GET() {
  try {
    const categories = await prisma.newsCategory.findMany({
      orderBy: { name: "asc" },
      include: {
        _count: {
          select: { news: { where: { status: "PUBLISHED", deletedAt: null } } },
        },
      },
    });

    const body: NewsCategoryListResponse = {
      items: categories.map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        newsCount: c._count.news,
      })),
    };

    return apiSuccess(body, "Daftar kategori berita berhasil diambil.");
  } catch (err) {
    console.error("GET /api/berita/categories failed:", err);
    return apiError(
      "INTERNAL_SERVER_ERROR",
      "Gagal mengambil kategori berita.",
      500,
    );
  }
}
