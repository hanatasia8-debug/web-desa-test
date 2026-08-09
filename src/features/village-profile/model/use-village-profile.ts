"use client";

import { useEffect, useState } from "react";
import type { VillageProfileDto } from "@/entities/desa/model/types";
import { getStoredVillageProfile } from "@/shared/utils/profile-storage";

export function useVillageProfile(initialProfile: VillageProfileDto | null) {
  const [profile, setProfile] = useState<VillageProfileDto | null>(initialProfile);

  useEffect(() => {
    const stored = getStoredVillageProfile();
    if (!stored) return;

    const historyContent = stored.historyText || initialProfile?.historyText || "";
    const historyExcerpt =
      historyContent.length > 200
        ? historyContent.substring(0, 200) + "..."
        : historyContent;

    setProfile({
      villageName: initialProfile?.villageName || "Desa Pringgodani",
      headGreeting:
        stored.headGreeting ||
        initialProfile?.headGreeting ||
        "Selamat datang di website resmi Desa Pringgodani.",
      headPhoto:
        stored.headPhoto ||
        initialProfile?.headPhoto ||
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1200&q=80",
      headName: stored.headName || initialProfile?.headName || "Kepala Desa",
      headPosition:
        stored.headPosition || initialProfile?.headPosition || "Kepala Desa",
      historyText: historyContent,
      historyExcerpt: historyExcerpt,
      vision: stored.vision || initialProfile?.vision || "",
      missions:
        stored.missions?.length > 0
          ? stored.missions
          : initialProfile?.missions || [],
      officials:
        stored.officials?.length > 0
          ? stored.officials.map((o) => ({
              name: o.name,
              position: o.position,
              photo: o.photoUrl,
              greeting: o.greeting,
              email: o.email,
            }))
          : initialProfile?.officials || [],
      structureImageUrl:
        stored.structureImageUrl || initialProfile?.structureImageUrl || "",
    });
  }, [initialProfile]);

  return profile;
}
