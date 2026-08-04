import { Icon } from "@/shared/ui/icon";
import type { VillageStatsDto } from "@/entities/desa/model/types";

interface StatsSectionProps {
  stats: VillageStatsDto;
}

const STAT_ITEMS = (stats: VillageStatsDto) => [
  { icon: "storefront", value: stats.umkmCount, label: "UMKM Terdaftar" },
  { icon: "inventory_2", value: stats.productCount, label: "Produk Unggulan" },
  { icon: "newspaper", value: stats.newsCount, label: "Berita Desa" },
  { icon: "location_city", value: stats.dusunCount, label: "Dusun" },
];

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="bg-primary-container scroll-reveal py-16">
      <div className="max-w-container-max gap-gutter text-on-primary-container px-gutter mx-auto grid grid-cols-2 md:grid-cols-4">
        {STAT_ITEMS(stats).map((item) => (
          <div key={item.label} className="group text-center">
            <div className="mb-2 opacity-80 transition-transform group-hover:scale-110">
              <Icon name={item.icon} filled className="text-4xl" />
            </div>
            <div className="font-display-hero mb-1 text-4xl">{item.value}</div>
            <div className="font-label-sm text-label-sm tracking-widest uppercase opacity-80">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
