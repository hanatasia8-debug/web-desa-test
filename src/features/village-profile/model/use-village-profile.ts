"use client";

import { useEffect, useState } from "react";
import type { VillageProfileDto } from "@/entities/desa/model/types";
import {
  getStoredVillageProfile,
  subscribeStoredVillageProfile,
} from "@/shared/utils/profile-storage";

export function useVillageProfile(initialProfile: VillageProfileDto | null) {
  // Initialize with initialProfile from server (guarantees 100% matching SSR hydration)
  const [profile, setProfile] = useState<VillageProfileDto | null>(initialProfile);

  useEffect(() => {
    // Synchronize if admin modified profile in local session
    const syncWithStore = () => {
      const stored = getStoredVillageProfile();
      if (
        stored.headName ||
        stored.headGreeting ||
        stored.aboutText ||
        stored.officials?.length
      ) {
        setProfile((prev) => ({
          villageName:
            initialProfile?.villageName ||
            prev?.villageName ||
            "Desa Pringgodani",
          headGreeting:
            stored.headGreeting ||
            prev?.headGreeting ||
            initialProfile?.headGreeting ||
            "Selamat datang di website resmi Desa Pringgodani.",
          headPhoto:
            stored.headPhoto ||
            prev?.headPhoto ||
            initialProfile?.headPhoto ||
            "/images/kepala-desa.jpg",
          headName:
            stored.headName ||
            prev?.headName ||
            initialProfile?.headName ||
            "Kepala Desa",
          headPosition:
            stored.headPosition ||
            prev?.headPosition ||
            initialProfile?.headPosition ||
            "Kepala Desa",
          aboutText:
            stored.aboutText ||
            prev?.aboutText ||
            initialProfile?.aboutText ||
            "",
          officials:
            stored.officials && stored.officials.length > 0
              ? stored.officials.map((o) => ({
                  name: o.name,
                  position: o.position,
                  photo: o.photoUrl,
                  greeting: o.greeting,
                  email: o.email,
                }))
              : prev?.officials || initialProfile?.officials || [],
        }));
      }
    };

    // Listen for real-time updates from admin changes
    const unsubscribe = subscribeStoredVillageProfile(syncWithStore);
    return () => {
      unsubscribe();
    };
  }, [initialProfile]);

  return profile || initialProfile;
}
