import { NextRequest } from "next/server";

import { prisma } from "@/shared/lib/prisma";
import { apiSuccess, apiError } from "@/shared/api/response";
import type { UmkmListResponse } from "@/entities/umkm/model/types";

// Mirrors the `UmkmCategory` enum in prisma/schema.prisma. Duplicated here
// (rather than importing the enum type) so this Route Handler can validate
// the query param at runtime without needing Prisma's generated *value*
// export, only its type usage elsewhere.
const UMKM_CATEGORIES = [
  "KULINER",
  "FASHION",
  "PERTANIAN_PETERNAKAN",
  "KERAJINAN_SOUVENIR",
  "JASA",
  "PERDAGANGAN",
] as const;
type UmkmCategoryParam = (typeof UMKM_CATEGORIES)[number];

function isValidCategory(value: string): value is UmkmCategoryParam {
  return (UMKM_CATEGORIES as readonly string[]).includes(value);
}

/**
 * GET /api/umkm?limit=&page=&category=
 * Public. GUARDRAIL (`01-architecture-plan.md`): must NEVER order by
 * rating — always strictly `publishedAt DESC`. There is also no "rating"
 * field anywhere in the schema, so this can't accidentally regress.
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = Math.min(Number(searchParams.get("limit") ?? 12), 50);
  const page = Math.max(Number(searchParams.get("page") ?? 1), 1);
  const categoryParam = searchParams.get("category");

  let category: UmkmCategoryParam | undefined;

  if (categoryParam) {
    if (!isValidCategory(categoryParam)) {
      return apiError(
        "UNPROCESSABLE_ENTITY",
        `Kategori UMKM tidak valid: ${categoryParam}`,
        422,
      );
    }
    category = categoryParam;
  }

  try {
    const where = {
      status: "PUBLISHED" as const,
      ...(category ? { category } : {}),
    };

    const [items, total] = await Promise.all([
      prisma.umkm.findMany({
        where,
        orderBy: { publishedAt: "desc" },
        take: limit,
        skip: (page - 1) * limit,
      }),
      prisma.umkm.count({ where }),
    ]);

    const body: UmkmListResponse = {
      items: items.map((u) => ({
        id: u.id,
        name: u.name,
        slug: u.slug,
        category: u.category,
        description: u.description,
        logo: u.logo,
        whatsappNumber: u.whatsappNumber,
        publishedAt: (u.publishedAt ?? u.createdAt).toISOString(),
      })),
      total,
    };

    return apiSuccess(body, "Daftar UMKM berhasil diambil.");
  } catch (err) {
    console.error("GET /api/umkm failed:", err);
    return apiError(
      "INTERNAL_SERVER_ERROR",
      "Gagal mengambil daftar UMKM.",
      500,
    );
  }
}
