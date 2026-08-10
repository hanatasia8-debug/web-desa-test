import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { RegisterUmkmDTO } from "@/entities/umkm/model/register-umkm.schema";
import type { RegisterNewsDTO } from "@/entities/berita/model/register-news.schema";
import type { RevisionLookup } from "../model/types";
import { MOCK_REVISIONS } from "@/shared/data/mock-pengajuan";

// Session-local copy so a resubmit can "consume" the mock token, matching
// how a real backend would invalidate it after use.
const localRevisions: Record<string, RevisionLookup> = { ...MOCK_REVISIONS };

export const RevisionService = {
  /**
   * Look up a rejected submission by its revision token.
   * Returns null if the token is invalid, unknown, or already used —
   * the page renders a "not found" state rather than an empty form.
   */
  async getByToken(token: string): Promise<RevisionLookup | null> {
    if (IS_API_CONNECTED) {
      try {
        const { data } = await apiClient.get<ApiSuccessBody<RevisionLookup>>(
          `/public/submissions/revision/${token}`,
        );
        return data.data;
      } catch (err) {
        console.error(`Gagal memuat data revisi untuk token ${token}:`, err);
        return null;
      }
    }

    return localRevisions[token] ?? null;
  },

  async resubmitUmkm(
    token: string,
    payload: Partial<RegisterUmkmDTO>,
  ): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      try {
        await apiClient.put(`/public/submissions/revision/${token}`, payload);
        return { success: true };
      } catch (err) {
        console.error(`Gagal mengirim revisi UMKM (token ${token}):`, err);
        return { success: false };
      }
    }

    delete localRevisions[token];
    return { success: true };
  },

  async resubmitNews(
    token: string,
    payload: Partial<RegisterNewsDTO>,
  ): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      try {
        await apiClient.put(`/public/submissions/revision/${token}`, payload);
        return { success: true };
      } catch (err) {
        console.error(`Gagal mengirim revisi berita (token ${token}):`, err);
        return { success: false };
      }
    }

    delete localRevisions[token];
    return { success: true };
  },
};
