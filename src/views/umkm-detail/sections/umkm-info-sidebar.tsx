import { Icon } from "@/shared/ui/icon";
import { formatWhatsappNumber } from "@/entities/umkm/model/whatsapp-link";
import { WhatsappCta } from "@/features/whatsapp-contact/ui/whatsapp-cta";
import { LocationCard } from "@/features/google-maps-link/ui/location-card";
import type { UmkmDetailDto } from "@/entities/umkm/model/types";

/**
 * "Informasi Kontak" + "Lokasi" sidebar.
 *
 * Deviations from the mockup, both driven by the schema (`prd_2.txt §6.2`):
 * `Umkm` has no business-email and no operating-hours column, so those two
 * rows are dropped instead of hardcoded — and `submitterEmail` is deliberately
 * NOT shown, it belongs to whoever filed the submission, not to the public
 * profile. WhatsApp is the contact channel the PRD specifies for UMKM.
 */
export function UmkmInfoSidebar({ umkm }: { umkm: UmkmDetailDto }) {
  return (
    <div className="space-y-6">
      <div className="bg-surface-container-low border-outline-variant/20 rounded-xl border p-6">
        <h2 className="font-label-sm text-label-sm text-primary mb-4 font-bold tracking-widest uppercase">
          Informasi Kontak
        </h2>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Icon name="phone" className="text-secondary mt-0.5 shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                WhatsApp
              </p>
              <p className="font-body-base text-body-base font-semibold break-words">
                {formatWhatsappNumber(umkm.whatsappNumber || umkm.phone || "")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Icon
              name="location_on"
              className="text-secondary mt-0.5 shrink-0"
            />
            <div className="min-w-0 flex-1">
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Alamat Usaha
              </p>
              <p className="font-body-base text-body-base font-semibold break-words">
                {umkm.address}
              </p>
            </div>
          </div>

          {(umkm.openDay || (umkm.startTime && umkm.endTime)) && (
            <div className="flex items-start gap-3">
              <Icon name="schedule" className="text-secondary mt-0.5 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Jam Operasional
                </p>
                <p className="font-body-base text-body-base font-semibold break-words">
                  {umkm.openDay || "Setiap Hari"}
                  {umkm.startTime &&
                    umkm.endTime &&
                    ` (${String(umkm.startTime).includes("T") ? String(umkm.startTime).slice(11, 16) : String(umkm.startTime).slice(0, 5)} - ${String(umkm.endTime).includes("T") ? String(umkm.endTime).slice(11, 16) : String(umkm.endTime).slice(0, 5)})`}
                </p>
              </div>
            </div>
          )}

          {umkm.since && (
            <div className="flex items-start gap-3">
              <Icon name="history_edu" className="text-secondary mt-0.5 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Berdiri Sejak
                </p>
                <p className="font-body-base text-body-base font-semibold">
                  Tahun {umkm.since}
                </p>
              </div>
            </div>
          )}
        </div>

        <WhatsappCta
          phone={umkm.whatsappNumber || umkm.phone || ""}
          umkmName={umkm.name}
          className="mt-6"
        />
      </div>

      <LocationCard
        latitude={umkm.latitude}
        longitude={umkm.longitude}
        placeName={umkm.name}
        addressUrl={umkm.mapsUrl || umkm.addressUrl}
      />
    </div>
  );
}
