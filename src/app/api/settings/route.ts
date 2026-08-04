import { prisma } from "@/shared/lib/prisma";
import { apiSuccess, apiError } from "@/shared/api/response";
import type { SettingsMap } from "@/entities/settings/model/types";

/**
 * GET /api/settings
 * Public, read-only. Returns all settings as a flat key-value map (small
 * dataset — a handful of site-wide config values, not paginated content).
 * Write access is admin-only (`/api/admin/settings`, Tahap 5).
 */
export async function GET() {
  try {
    const rows = await prisma.settings.findMany();
    const settings: SettingsMap = Object.fromEntries(
      rows.map((r) => [r.key, r.value]),
    );

    return apiSuccess({ settings }, "Pengaturan berhasil diambil.");
  } catch (err) {
    console.error("GET /api/settings failed:", err);
    return apiError(
      "INTERNAL_SERVER_ERROR",
      "Gagal mengambil pengaturan.",
      500,
    );
  }
}
