import type { AdminProfilPayload } from "@/entities/admin/api/admin-profil.service";
import { MOCK_PROFILE } from "@/shared/data/mock-profil";

const STORAGE_KEY = "app_village_profile_v1";

export const DEFAULT_PROFIL_DATA: AdminProfilPayload = {
  headName: MOCK_PROFILE.headName || "Ki Suryo Pringgo",
  headPosition: MOCK_PROFILE.headPosition || "Kepala Desa Pringgodani",
  headPhoto:
    MOCK_PROFILE.headPhoto ||
    "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1200&q=80",
  headGreeting:
    MOCK_PROFILE.headGreeting ||
    "Selamat datang di website resmi Desa Pringgodani.",
  historyText:
    MOCK_PROFILE.historyText ||
    "Desa Pringgodani berdiri sejak masa kolonial...",
  vision:
    MOCK_PROFILE.vision ||
    "Mewujudkan Desa Pringgodani yang mandiri, maju, dan sejahtera.",
  missions: MOCK_PROFILE.missions || [
    "Meningkatkan kualitas pelayanan publik",
    "Mendorong UMKM desa",
  ],
  structureImageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1200&q=80",
  officials: (MOCK_PROFILE.officials || []).map((o, i) => ({
    id: `official-${i + 1}`,
    name: o.name,
    position: o.position,
    photoUrl:
      o.photo ||
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1200&q=80",
    email: "perangkat@pringgodani.desa.id",
  })),
};

export function getStoredVillageProfile(): AdminProfilPayload {
  if (typeof window === "undefined") return DEFAULT_PROFIL_DATA;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROFIL_DATA;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PROFIL_DATA, ...parsed };
  } catch {
    return DEFAULT_PROFIL_DATA;
  }
}

export function saveStoredVillageProfile(
  updated: Partial<AdminProfilPayload>,
): AdminProfilPayload {
  if (typeof window === "undefined") return DEFAULT_PROFIL_DATA;
  try {
    const current = getStoredVillageProfile();
    const merged = { ...current, ...updated };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return merged;
  } catch {
    return DEFAULT_PROFIL_DATA;
  }
}
