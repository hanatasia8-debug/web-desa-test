import { NextRequest } from "next/server";

import { prisma } from "@/shared/lib/prisma";
import { apiSuccess, apiError } from "@/shared/api/response";
import type { NewsListResponse } from "@/entities/berita/model/types";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * GET /api/berita?limit=&page=&category=&search=&exclude=
 *
 * Public. Returns published news ordered strictly by `publishedAt DESC`
 * (no "featured"/rating concept exists for News — matches the Homepage's
 * "Berita Terbaru" section and the /berita listing page).
 *
 * - `category` accepts either a `NewsCategory.id` or its `slug`, so the UI can
 *   link by slug without a second lookup. Categories are rows, not an enum, so
 *   the value is resolved against the table instead of a hardcoded list.
 * - `search` matches `title` OR `summary`, case-insensitive.
 * - `exclude` drops one news id from the result — used by "Berita Terkait" on
 *   the detail page and by the listing page's featured hero (whose article
 *   must not appear a second time in the grid below it).
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = Math.min(Number(searchParams.get("limit") ?? 12), 50);
  const page = Math.max(Number(searchParams.get("page") ?? 1), 1);
  const categoryParam = searchParams.get("category")?.trim();
  const searchParam = searchParams.get("search")?.trim();
  const excludeParam = searchParams.get("exclude")?.trim();

  if (excludeParam && !UUID_PATTERN.test(excludeParam)) {
    return apiError(
      "UNPROCESSABLE_ENTITY",
      `Parameter exclude bukan id berita yang valid: ${excludeParam}`,
      422,
    );
  }

  try {
    let categoryId: string | undefined;

    if (categoryParam) {
      const category = await prisma.newsCategory.findFirst({
        where: UUID_PATTERN.test(categoryParam)
          ? { id: categoryParam }
          : { slug: categoryParam },
        select: { id: true },
      });

      if (!category) {
        return apiError(
          "UNPROCESSABLE_ENTITY",
          `Kategori berita tidak ditemukan: ${categoryParam}`,
          422,
        );
      }
      categoryId = category.id;
    }

    const where = {
      status: "PUBLISHED" as const,
      ...(categoryId ? { categoryId } : {}),
      ...(excludeParam ? { id: { not: excludeParam } } : {}),
      ...(searchParam
        ? {
            OR: [
              {
                title: { contains: searchParam, mode: "insensitive" as const },
              },
              {
                summary: {
                  contains: searchParam,
                  mode: "insensitive" as const,
                },
              },
            ],
          }
        : {}),
    };

    const [items, total] = await Promise.all([
      prisma.news.findMany({
        where,
        orderBy: { publishedAt: "desc" },
        take: limit,
        skip: (page - 1) * limit,
        include: { category: true, author: { select: { fullName: true } } },
      }),
      prisma.news.count({ where }),
    ]);

    const body: NewsListResponse = {
      items: items.map((n) => ({
        id: n.id,
        title: n.title,
        slug: n.slug,
        summary: n.summary,
        coverImage: n.coverImage,
        categoryName: n.category.name,
        categorySlug: n.category.slug,
        authorName: n.author?.fullName ?? null,
        publishedAt: (n.publishedAt ?? n.createdAt).toISOString(),
      })),
      total,
    };

    return apiSuccess(body, "Daftar berita berhasil diambil.");
  } catch (err) {
    console.error("GET /api/berita failed:", err);
    return apiError(
      "INTERNAL_SERVER_ERROR",
      "Gagal mengambil daftar berita.",
      500,
    );
  }
}
