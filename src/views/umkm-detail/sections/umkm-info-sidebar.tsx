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
            <Icon name="phone" className="text-secondary" />
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                WhatsApp
              </p>
              <p className="font-body-base text-body-base font-semibold">
                {formatWhatsappNumber(umkm.whatsappNumber)}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Icon name="location_on" className="text-secondary" />
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Alamat Usaha
              </p>
              <p className="font-body-base text-body-base font-semibold">
                {umkm.address}
              </p>
            </div>
          </div>
        </div>

        <WhatsappCta
          phone={umkm.whatsappNumber}
          umkmName={umkm.name}
          className="mt-6"
        />
      </div>

      <LocationCard
        latitude={umkm.latitude}
        longitude={umkm.longitude}
        placeName={umkm.name}
      />
    </div>
  );
}
