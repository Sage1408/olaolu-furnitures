import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig, siteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — Quality Furniture Craftsmanship`,
    // Child pages set `title`; this wraps it, e.g. "Gallery | Ola-Olu Furnitures".
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "furniture",
    "handcrafted furniture",
    "custom furniture Lagos",
    "furniture Nigeria",
    "sofa",
    "dining table",
    "bespoke furniture",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Quality Furniture Craftsmanship`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Quality Furniture Craftsmanship`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

// LocalBusiness structured data — helps Google surface the business in local
// search and Maps. City-level for now; enrich with streetAddress / geo once the
// full workshop address is confirmed (see src/lib/site.ts).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteUrl,
  telephone: siteConfig.telephone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.countryCode,
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
