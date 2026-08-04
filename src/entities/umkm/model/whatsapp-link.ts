/**
 * Builds a `wa.me` deep link with a prefilled inquiry message. `phone` is
 * expected in the schema's stored format (leading "62", no "+"/spaces —
 * see `whatsappNumber` validation rule in the submission form, built in
 * step 6 of Tahap 4).
 */
export function buildWhatsappLink(phone: string, umkmName: string): string {
  const message = `Halo, saya tertarik dengan produk dari ${umkmName} yang saya lihat di website Desa Pringgodani.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
