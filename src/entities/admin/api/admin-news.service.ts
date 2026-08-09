import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";
import type { ApiSuccessBody } from "@/shared/api/response";
import type { AdminNewsItem, NewsStatus } from "../model/admin.types";
import { MOCK_ADMIN_NEWS } from "@/shared/data/mock-admin";

let localNews = [...MOCK_ADMIN_NEWS];

export const AdminNewsService = {
  async getAllNews(): Promise<{ items: AdminNewsItem[]; total: number }> {
    if (IS_API_CONNECTED) {
      try {
        const { data } =
          await apiClient.get<
            ApiSuccessBody<{ items: AdminNewsItem[]; total: number }>
          >("/admin/news");
        if (data?.data) return data.data;
      } catch (err) {
        console.error("Gagal memuat berita admin dari API:", err);
      }
    }
    return { items: localNews, total: localNews.length };
  },

  async getNewsById(id: string): Promise<AdminNewsItem | null> {
    if (IS_API_CONNECTED) {
      try {
        const { data } = await apiClient.get<ApiSuccessBody<AdminNewsItem>>(
          `/admin/news/${id}`,
        );
        if (data?.data) return data.data;
      } catch (err) {
        console.error(`Gagal memuat detail berita ${id} dari API:`, err);
      }
    }

    const item = localNews.find((n) => n.id === id);
    return item || localNews[0] || null;
  },

  async createNews(payload: Partial<AdminNewsItem>): Promise<AdminNewsItem> {
    if (IS_API_CONNECTED) {
      const { data } = await apiClient.post<ApiSuccessBody<AdminNewsItem>>(
        "/admin/news",
        payload,
      );
      return data.data;
    }

    const newItem: AdminNewsItem = {
      id: `news-${Date.now()}`,
      title: payload.title || "Berita Baru",
      slug: (payload.title || "berita-baru")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-"),
      excerpt: payload.excerpt || "Ringkasan berita desa.",
      categoryName: payload.categoryName || "Kegiatan Desa",
      status: payload.status || "PUBLISHED",
      publishedAt: new Date().toISOString(),
      coverUrl:
        payload.coverUrl ||
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    };

    localNews.unshift(newItem);
    return newItem;
  },

  async updateNews(
    id: string,
    payload: Partial<AdminNewsItem>,
  ): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      try {
        await apiClient.put(`/admin/news/${id}`, payload);
        return { success: true };
      } catch (err) {
        console.error(`Gagal merubah berita ${id}:`, err);
      }
    }

    const item = localNews.find((n) => n.id === id);
    if (item) {
      Object.assign(item, payload);
    }
    return { success: true };
  },

  async updateNewsStatus(
    id: string,
    status: NewsStatus,
  ): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      try {
        await apiClient.patch(`/admin/news/${id}/status`, { status });
        return { success: true };
      } catch (err) {
        console.error(`Gagal merubah status berita ${id}:`, err);
      }
    }

    const item = localNews.find((n) => n.id === id);
    if (item) {
      item.status = status;
    }
    return { success: true };
  },

  async deleteNews(id: string): Promise<{ success: boolean }> {
    if (IS_API_CONNECTED) {
      try {
        await apiClient.delete(`/admin/news/${id}`);
        return { success: true };
      } catch (err) {
        console.error(`Gagal menghapus berita ${id}:`, err);
      }
    }

    localNews = localNews.filter((n) => n.id !== id);
    return { success: true };
  },
};
