/**
 * Central site configuration.
 *
 * Single source of truth for URLs, business identity, and contact details used
 * across metadata, sitemap, and structured data. Update values here rather than
 * scattering them through the app.
 */

// Production base URL (no trailing slash). Currently the Vercel deployment;
// swap to the custom domain once it's live.
export const siteUrl = "https://olaolu-furnitures.vercel.app";

export const siteConfig = {
  name: "Ola-Olu Furnitures",
  shortName: "Ola-Olu",
  url: siteUrl,
  description:
    "Discover premium, handcrafted furniture at Ola-Olu Furnitures. We transform your space with quality pieces designed for comfort and style.",
  // Blends Nigerian craftsmanship with contemporary design; used as a keyword
  // and description seed across pages.
  locale: "en_NG",
  telephone: "+2348055365673",
  telephoneAlt: "+2349165108071",
  email: "aoluwaseun386@gmail.com",
  // City-level for now. TODO: replace with the full street address / postal
  // code once confirmed with the workshop, then enrich the LocalBusiness JSON-LD
  // in the root layout (streetAddress, postalCode, geo coordinates).
  address: {
    locality: "Lagos",
    region: "Lagos",
    country: "Nigeria",
    countryCode: "NG",
  },
  // WhatsApp number in international format, no "+" or spaces.
  whatsapp: "2348055365673",
  openingHours: [
    "Monday – Friday: 8:00 AM – 6:00 PM",
    "Saturday: 9:00 AM – 4:00 PM",
    "Sunday: Closed",
  ],
} as const;
