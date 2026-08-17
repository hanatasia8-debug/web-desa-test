/**
 * Builds a `wa.me` deep link with a prefilled inquiry message. `phone` is
 * expected in the schema's stored format (leading "62", no "+"/spaces —
 * see `whatsappNumber` validation rule in the submission form, built in
 * step 6 of Tahap 4).
 */
export function buildWhatsappLink(phone: string, umkmName: string): string {
  const message = `Halo, saya tertarik dengan produk dari ${umkmName} yang saya lihat di katalog Lokal Pringgodani.`;
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export function createWhatsappUrl(phone: string, message: string): string {
  let cleaned = phone.replace(/\D/g, "");
  if (cleaned.startsWith("0")) {
    cleaned = "62" + cleaned.slice(1);
  }
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}

/**
 * Renders a stored number for display: `6281234500001` → `+62 812-3450-0001`.
 * Anything that does not look like a stored Indonesian number is shown as-is
 * rather than mangled.
 */
export function formatWhatsappNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (!digits.startsWith("62") || digits.length < 10) return phone;

  const national = digits.slice(2);
  const groups = [
    national.slice(0, 3),
    national.slice(3, 7),
    national.slice(7),
  ];

  return `+62 ${groups.filter(Boolean).join("-")}`;
}
