import { NextRequest } from "next/server";

import { prisma } from "@/shared/lib/prisma";
import { apiSuccess, apiError } from "@/shared/api/response";
import type { FacilityListResponse } from "@/entities/fasilitas/model/types";

const FACILITY_CATEGORIES = [
  "KANTOR_DESA",
  "SEKOLAH",
  "TEMPAT_IBADAH",
  "FASILITAS_KESEHATAN",
  "DESTINASI_WISATA",
  "FASILITAS_UMUM",
] as const;
type FacilityCategoryParam = (typeof FACILITY_CATEGORIES)[number];

function isValidCategory(value: string): value is FacilityCategoryParam {
  return (FACILITY_CATEGORIES as readonly string[]).includes(value);
}

/**
 * GET /api/peta?category=&limit=
 * Public. GUARDRAIL (`01-architecture-plan.md`): Homepage and the public
 * `/peta` page must NEVER show UMKM markers — this endpoint only ever
 * queries `PublicFacility`, which has no relation to `Umkm` at all.
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const categoryParam = searchParams.get("category");
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? Math.min(Number(limitParam), 100) : undefined;

  let category: FacilityCategoryParam | undefined;

  if (categoryParam) {
    if (!isValidCategory(categoryParam)) {
      return apiError(
        "UNPROCESSABLE_ENTITY",
        `Kategori fasilitas tidak valid: ${categoryParam}`,
        422,
      );
    }
    category = categoryParam;
  }

  try {
    const items = await prisma.publicFacility.findMany({
      where: category ? { category } : undefined,
      orderBy: { name: "asc" },
      ...(limit ? { take: limit } : {}),
    });

    const body: FacilityListResponse = {
      items: items.map((f) => ({
        id: f.id,
        name: f.name,
        category: f.category,
        address: f.address,
        latitude: f.latitude,
        longitude: f.longitude,
        image: f.image,
      })),
    };

    return apiSuccess(body, "Daftar fasilitas berhasil diambil.");
  } catch (err) {
    console.error("GET /api/peta failed:", err);
    return apiError(
      "INTERNAL_SERVER_ERROR",
      "Gagal mengambil daftar fasilitas.",
      500,
    );
  }
}
