import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PwaRegister } from "@/components/layout/pwa-register";
import { SplashScreen } from "@/components/layout/splash-screen";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://x-vibe-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "X-VIBE — Jasa Pembuatan Website Modern & PWA",
    template: "%s | X-VIBE",
  },
  description: site.description,
  keywords: [
    "jasa pembuatan website",
    "web developer",
    "landing page",
    "company profile",
    "e-commerce",
    "PWA",
    "Next.js",
    "X-VIBE",
  ],
  applicationName: site.name,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [{ url: "/assets/ikon.png", type: "image/png" }],
    apple: [{ url: "/assets/ikon.png" }],
  },
  openGraph: {
    type: "website",
    title: "X-VIBE — Jasa Pembuatan Website Modern & PWA",
    description: site.description,
    url: siteUrl,
    siteName: site.name,
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "X-VIBE — Jasa Pembuatan Website Modern & PWA",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans">
        <SplashScreen />
        {children}
        <PwaRegister />
      </body>
    </html>
  );
}
