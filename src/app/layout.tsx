import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carpinteria-los-artesanos.vercel.app"),
  title: {
    default: "Carpintería Los Artesanos — Muebles a medida y restauración",
    template: "%s · Carpintería Los Artesanos",
  },
  description:
    "Taller artesanal especializado en muebles a medida, restauración de mobiliario antiguo y carpintería estructural. Trabajo manual con maderas nobles.",
  keywords: [
    "carpintería",
    "muebles a medida",
    "restauración",
    "artesanía",
    "madera",
    "ebanistería",
  ],
  authors: [{ name: "Carpintería Los Artesanos" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Carpintería Los Artesanos",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
