import { NextRequest } from "next/server";

import { prisma } from "@/shared/lib/prisma";
import { apiSuccess, apiError } from "@/shared/api/response";
import {
  estimateReadingMinutes,
  parseContentSections,
} from "@/entities/berita/model/content-sections";
import type { NewsDetailDto } from "@/entities/berita/model/types";

/**
 * `User.role` has no display label in the schema (it is an enum of internal
 * role names), so the byline label is derived here. The schema also has no
 * author photo field at all — the UI must not invent one.
 */
const AUTHOR_ROLE_LABEL: Record<string, string> = {
  SUPER_ADMIN: "Super Admin Desa",
  VILLAGE_ADMIN: "Admin Desa",
};

/**
 * GET /api/berita/[slug]
 * Public. One PUBLISHED news article by slug, with its category and (optional)
 * author. A missing slug — or one that exists but is not published — is a 404
 * through `apiError`, never a 500.
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  try {
    const news = await prisma.news.findFirst({
      where: { slug, status: "PUBLISHED", deletedAt: null },
      include: {
        category: true,
        author: { select: { fullName: true, role: true } },
      },
    });

    if (!news) {
      return apiError(
        "NOT_FOUND",
        `Berita dengan slug "${slug}" tidak ditemukan.`,
        404,
      );
    }

    const contentSections = parseContentSections(news.contentSections);

    const body: NewsDetailDto = {
      id: news.id,
      title: news.title,
      slug: news.slug,
      summary: news.summary,
      coverImage: news.coverImage,
      coverCaption: news.coverCaption,
      categoryId: news.categoryId,
      categoryName: news.category.name,
      categorySlug: news.category.slug,
      authorName: news.author?.fullName ?? null,
      authorRole: news.author
        ? (AUTHOR_ROLE_LABEL[news.author.role] ?? "Admin Desa")
        : null,
      contentSections,
      publishedAt: (news.publishedAt ?? news.createdAt).toISOString(),
      readingTimeMinutes: estimateReadingMinutes(contentSections),
    };

    return apiSuccess(body, "Detail berita berhasil diambil.");
  } catch (err) {
    console.error(`GET /api/berita/${slug} failed:`, err);
    return apiError(
      "INTERNAL_SERVER_ERROR",
      "Gagal mengambil detail berita.",
      500,
    );
  }
}
