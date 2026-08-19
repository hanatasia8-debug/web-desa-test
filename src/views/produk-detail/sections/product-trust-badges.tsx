import { Icon } from "@/shared/ui/icon";

export function ProductTrustBadges() {
  const badges = [
    {
      icon: "eco",
      title: "100% Asli Pringgodani",
      desc: "Diproduksi langsung oleh warga & pengrajin desa.",
    },
    {
      icon: "chat",
      title: "Pesan Langsung via WA",
      desc: "Komunikasi tanpa perantara langsung ke pemilik usaha.",
    },
    {
      icon: "verified_user",
      title: "Tanpa Biaya Admin",
      desc: "100% pembayaran sepenuhnya untuk penggiat UMKM.",
    },
    {
      icon: "inventory_2",
      title: "Bisa COD / Ambil di Lokasi",
      desc: "Siap ambil di tempat atau kirim sekitar wilayah desa.",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className="bg-surface-container-low/70 border-outline-variant/20 flex items-start gap-2.5 rounded-xl border p-2.5 sm:p-3 transition-colors hover:bg-surface-container"
        >
          <div className="bg-primary/10 text-primary flex h-7 w-7 shrink-0 items-center justify-center rounded-lg">
            <Icon name={badge.icon} className="text-sm" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-headline-md text-on-surface text-xs font-bold leading-tight">
              {badge.title}
            </h4>
            <p className="text-on-surface-variant/75 mt-0.5 text-[11px] leading-tight hidden xs:block">
              {badge.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
