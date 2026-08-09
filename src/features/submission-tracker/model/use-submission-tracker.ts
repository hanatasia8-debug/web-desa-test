"use client";

import { useEffect, useState, useCallback } from "react";
import { apiClient, IS_API_CONNECTED } from "@/shared/api/axios-instance";

export interface PendingItemState {
  id: string;
  title: string;
  type: "UMKM" | "NEWS";
  status: string;
  createdAt: string;
}

const MOCK_PENDING_NEWS: PendingItemState[] = [
  {
    id: "news-pending-1",
    title: "Kerja Bakti Dusun Krajan",
    type: "NEWS",
    status: "PENDING",
    createdAt: "Diajukan kemarin",
  },
];

const MOCK_PENDING_UMKM: PendingItemState[] = [
  {
    id: "umkm-pending-1",
    title: "Keripik Tempe Barokah Krajan",
    type: "UMKM",
    status: "PENDING",
    createdAt: "Diajukan kemarin",
  },
];

export function usePendingSubmissions(type: "UMKM" | "NEWS") {
  const [items, setItems] = useState<PendingItemState[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPending = useCallback(async () => {
    setIsLoading(true);
    if (IS_API_CONNECTED) {
      try {
        const { data } = await apiClient.get("/public/submissions/pending", {
          params: { type, limit: 5 },
        });

        if (Array.isArray(data?.data?.items)) {
          setItems(data.data.items);
          setIsLoading(false);
          return;
        }
      } catch (e) {
        console.warn("Gagal mengambil daftar pending publik dari API:", e);
      }
    }

    // Fallback mock data if API is not connected or empty
    setItems(type === "UMKM" ? MOCK_PENDING_UMKM : MOCK_PENDING_NEWS);
    setIsLoading(false);
  }, [type]);

  useEffect(() => {
    fetchPending();
  }, [fetchPending]);

  return {
    items,
    isLoading,
    refreshPending: fetchPending,
  };
}

export interface PendingSubmissionState {
  id: string;
  title: string;
  type: "UMKM" | "NEWS";
  createdAt: string;
}

export function useSubmissionTracker(type: "UMKM" | "NEWS") {
  const STORAGE_KEY = type === "UMKM" ? "my_pending_umkm" : "my_pending_news";
  const [pendingSubmission, setPendingSubmission] = useState<PendingSubmissionState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkStatus = useCallback(async () => {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setPendingSubmission(null);
        setIsLoading(false);
        return;
      }
      const parsed: PendingSubmissionState = JSON.parse(saved);
      if (!parsed?.id) {
        setPendingSubmission(null);
        setIsLoading(false);
        return;
      }

      if (IS_API_CONNECTED) {
        try {
          const { data } = await apiClient.get("/public/submissions/status", {
            params: { type, id: parsed.id },
          });

          const currentStatus = data?.data?.status;

          if (currentStatus === "PENDING") {
            setPendingSubmission({
              ...parsed,
              title: data.data.title || parsed.title,
            });
          } else {
            localStorage.removeItem(STORAGE_KEY);
            setPendingSubmission(null);
          }
        } catch {
          setPendingSubmission(parsed);
        }
      } else {
        setPendingSubmission(parsed);
      }
    } catch (e) {
      console.warn("Gagal mengecek status pengajuan:", e);
    } finally {
      setIsLoading(false);
    }
  }, [STORAGE_KEY, type]);

  useEffect(() => {
    checkStatus();
  }, [checkStatus]);

  const savePendingSubmission = useCallback(
    (id: string, title: string) => {
      if (typeof window === "undefined") return;
      const state: PendingSubmissionState = {
        id,
        title,
        type,
        createdAt: `Diajukan ${new Date().toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
        })}`,
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        console.warn("Gagal menyimpan id pengajuan ke storage:", e);
      }
      setPendingSubmission(state);
    },
    [STORAGE_KEY, type],
  );

  return {
    pendingSubmission,
    isLoading,
    savePendingSubmission,
    refreshStatus: checkStatus,
  };
}
