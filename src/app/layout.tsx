import type { Metadata } from "next";
import "./globals.css";
import { DynamicFavicon } from "@/shared/ui/dynamic-favicon";

export const metadata: Metadata = {
  title: {
    default: "Lokal Pringgodani — Produk, UMKM & Hasil Bumi Desa",
    template: "%s — Lokal Pringgodani",
  },
  description:
    "Katalog resmi produk olahan, sentra kerajinan, dan hasil bumi pertanian Desa Pringgodani, Kecamatan Bantur, Kabupaten Malang.",
  applicationName: "Portal Desa Pringgodani",
  generator: "Next.js",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="font-body-base flex min-h-full flex-col">
        <DynamicFavicon />
        {children}
      </body>
    </html>
  );
}
