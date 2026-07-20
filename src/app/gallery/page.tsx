import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the Ola-Olu Furnitures collection — sofas, beds, dining sets, office and custom pieces. Tap any item for details and request a quote on WhatsApp.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Furniture Gallery — Ola-Olu Furnitures",
    description:
      "Browse our handcrafted collection of sofas, beds, dining sets, office and custom furniture.",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
