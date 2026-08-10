import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type {
  PendingSubmissionsResponse,
  PendingNewsSubmission,
  PendingUmkmSubmission,
  NewsStatus,
  UmkmStatus,
} from "../model/admin.types";
import { MOCK_PENDING_NEWS, MOCK_PENDING_UMKM } from "@/shared/data/mock-admin";

let localPendingNews = [...MOCK_PENDING_NEWS];
let localPendingUmkm = [...MOCK_PENDING_UMKM];

export const AdminSubmissionsService = {
  async getPendingSubmissions(): Promise<PendingSubmissionsResponse> {
    if (IS_API_CONNECTED) {
      try {
        const { data } =
          await apiClient.get<ApiSuccessBody<Record<string, unknown>>>(
            "/admin/submissions",
          );
        if (data?.data) {
          const raw = data.data;
          const newsList = (raw.news || raw.pendingNews || []) as Array<
            Record<string, unknown>
          >;
          const umkmList = (raw.umkm || raw.pendingUmkm || []) as Array<
            Record<string, unknown>
          >;

          const pendingNews: PendingNewsSubmission[] = newsList.map((n) => ({
            id: String(n.id),
            title: String(n.title || "Pengajuan Berita"),
            slug: String(n.slug || "pengajuan-berita"),
            excerpt: String(n.summary || n.excerpt || ""),
            categoryName: String(n.categoryName || "Kegiatan Desa"),
            submittedAt: String(n.submittedAt || new Date().toISOString()),
            coverUrl: String(
              n.coverImage ||
                n.coverUrl ||
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
            ),
            authorName: String(n.authorName || "Warga Desa"),
            contentBlocks: (n.contentBlocks as Array<{
              subHeading?: string;
              content: string;
              imageUrl?: string;
            }>) || [
              {
                subHeading: "Uraian Berita",
                content: String(
                  n.summary || n.excerpt || "Liputan berita warga.",
                ),
              },
            ],
          }));

          const pendingUmkm: PendingUmkmSubmission[] = umkmList.map((u) => ({
            id: String(u.id),
            name: String(u.name || "Pengajuan UMKM"),
            slug: String(u.slug || "pengajuan-umkm"),
            ownerName: String(u.ownerName || "Pemilik UMKM"),
            categoryName: String(u.categoryName || "Kuliner"),
            description: String(u.description || u.summary || ""),
            phone: String(u.phone || u.whatsappNumber || "081234567890"),
            address: String(u.address || "Desa Pringgodani"),
            submittedAt: String(u.submittedAt || new Date().toISOString()),
            coverUrl: String(
              u.coverUrl ||
                u.coverImage ||
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
            ),
            products:
              (u.products as Array<{
                name: string;
                price: number;
                description?: string;
                imageUrl?: string;
              }>) || [],
          }));

          return {
            pendingNews,
            pendingUmkm,
            totalPending:
              Number(raw.totalPending) ||
              pendingNews.length + pendingUmkm.length,
          };
        }
      } catch (err) {
        console.error(
          "Gagal memuat pengajuan admin dari API backend, menggunakan fallback data:",
          err,
        );
      }
    }

    return {
      pendingNews: localPendingNews,
      pendingUmkm: localPendingUmkm,
      totalPending: localPendingNews.length + localPendingUmkm.length,
    };
  },

  async updateNewsStatus(
    id: string,
    status: NewsStatus,
    reason?: string,
  ): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      // Bug fix: this used to log the error then fall through to
      // `return { success: true }` regardless of whether the API call
      // actually succeeded - the admin would see "berhasil" and the item
      // would vanish from their local list, but the backend never
      // actually approved/rejected it (fake success - forbidden per the
      // frontend/backend boundary rules). Now correctly reports failure
      // and leaves the pending list alone so a refetch shows the truth.
      try {
        await apiClient.patch(`/admin/news/${id}/status`, { status, reason });
        return { success: true };
      } catch (err) {
        console.error(`Gagal mengubah status berita ${id}:`, err);
        return { success: false };
      }
    }

    localPendingNews = localPendingNews.filter((n) => n.id !== id);
    return { success: true };
  },

  async updateUmkmStatus(
    id: string,
    status: UmkmStatus,
    reason?: string,
  ): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      // See updateNewsStatus above - same fake-success bug fixed here.
      try {
        await apiClient.patch(`/admin/umkm/${id}/status`, { status, reason });
        return { success: true };
      } catch (err) {
        console.error(`Gagal mengubah status UMKM ${id}:`, err);
        return { success: false };
      }
    }

    localPendingUmkm = localPendingUmkm.filter((u) => u.id !== id);
    return { success: true };
  },
};
