"use client";

import { useMemo, useSyncExternalStore } from "react";
import type { VillageProfileDto } from "@/entities/desa/model/types";
import {
  getStoredVillageProfile,
  subscribeStoredVillageProfile,
} from "@/shared/utils/profile-storage";

export function useVillageProfile(initialProfile: VillageProfileDto | null) {
  // The stored profile lives in localStorage, i.e. outside React, so it is read
  // during render through the store rather than copied into state from an
  // effect — no cascading re-render, and edits made elsewhere show up here.
  const stored = useSyncExternalStore(
    subscribeStoredVillageProfile,
    getStoredVillageProfile,
    getStoredVillageProfile,
  );

  return useMemo<VillageProfileDto>(() => {
    const historyContent =
      initialProfile?.historyText || stored.historyText || "";

    return {
      villageName: initialProfile?.villageName || "Desa Pringgodani",
      headGreeting:
        initialProfile?.headGreeting ||
        stored.headGreeting ||
        "Selamat datang di website resmi Desa Pringgodani.",
      headPhoto:
        initialProfile?.headPhoto ||
        stored.headPhoto ||
        "/images/kepala-desa.jpg",
      headName: initialProfile?.headName || stored.headName || "Kepala Desa",
      headPosition:
        initialProfile?.headPosition || stored.headPosition || "Kepala Desa",
      historyText: historyContent,
      historyExcerpt:
        historyContent.length > 200
          ? historyContent.substring(0, 200) + "..."
          : historyContent,
      vision: initialProfile?.vision || stored.vision || "",
      missions:
        initialProfile?.missions && initialProfile.missions.length > 0
          ? initialProfile.missions
          : stored.missions || [],
      officials:
        initialProfile?.officials && initialProfile.officials.length > 0
          ? initialProfile.officials
          : stored.officials?.length > 0
          ? stored.officials.map((o) => ({
              name: o.name,
              position: o.position,
              photo: o.photoUrl,
              greeting: o.greeting,
              email: o.email,
            }))
          : [],
      structureImageUrl:
        initialProfile?.structureImageUrl || stored.structureImageUrl || "",
    };
  }, [stored, initialProfile]);
}
