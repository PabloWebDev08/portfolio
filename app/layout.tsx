import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pablo | Développeur Web",
  description: "Portfolio de Pablo, développeur web Next.js/React.",
  /**
   
   * À définir en prod via `NEXT_PUBLIC_SITE_URL` (ex: https://ton-domaine.com).
   */
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {/* Preloader global: s'affiche uniquement au premier chargement (montage du layout) */}
        <Preloader />
        {/* Curseur personnalisé global: permet à `data-cursor="dark|light"` de fonctionner sur toutes les pages */}
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
