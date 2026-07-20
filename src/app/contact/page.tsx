import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ola-Olu Furnitures in Lagos, Nigeria. Ask about a piece, request a custom design, or reach us by phone, email, or WhatsApp.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Ola-Olu Furnitures",
    description:
      "Have a question or want to discuss a custom piece? Reach our Lagos workshop by phone, email, or WhatsApp.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
