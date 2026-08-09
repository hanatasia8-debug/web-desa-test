import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";

// Hanken Grotesk → headings (display-hero, headline-lg, headline-md).
const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Inter → body text, labels, badges.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Website Resmi Desa Pringgodani",
    template: "%s — Desa Pringgodani",
  },
  description:
    "Portal resmi informasi, berita, UMKM, dan potensi Desa Pringgodani.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${hankenGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="font-body-base flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
