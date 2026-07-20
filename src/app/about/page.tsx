import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Ola-Olu Furnitures — Nigerian craftsmanship blended with contemporary design, creating handcrafted furniture since 2015.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Ola-Olu Furnitures",
    description:
      "Nigerian craftsmanship blended with contemporary design, creating handcrafted furniture since 2015.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
