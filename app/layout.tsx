import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "FXXK STEREOTYPE — Asian Electronic Movement × Europe 2026",
  description: siteConfig.description,
  keywords: [
    "FXXK STEREOTYPE",
    "Asian electronic music",
    "Europe tour",
    "DJ lineup",
    "Wenshuai",
    "Amaze",
    "Wicus",
    "Zhow",
    "Seckey",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/brand/campaign-art.jpg",
        width: 1440,
        height: 1818,
        alt: "FXXK STEREOTYPE campaign artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/assets/brand/campaign-art.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-black text-white">
        {children}
      </body>
    </html>
  );
}
