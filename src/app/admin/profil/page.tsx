import type { Metadata } from "next";

import { HistoryAdminPanel } from "@/views/admin-profil/history-panel";

export const metadata: Metadata = {
  title: "Profil Desa — Admin Panel",
  description: "Kelola sejarah dan informasi profil desa melalui panel admin.",
};

export default function AdminProfilPage() {
  return <HistoryAdminPanel />;
}
