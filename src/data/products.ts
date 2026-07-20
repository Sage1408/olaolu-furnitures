export type Category =
  | "Living Room"
  | "Bedroom"
  | "Office"
  | "Dining"
  | "Custom";

export interface Product {
  id: number;
  slug: string;
  title: string;
  category: Category;
  image: string;
  /** Short one-liner shown on cards and in listings. */
  tagline: string;
  /** Fuller description shown on the product detail view. */
  description: string;
  /** Human-readable dimensions, e.g. "220 × 95 × 85 cm (W × D × H)". */
  dimensions: string;
  /** Primary materials used. */
  materials: string;
  /** Whether to surface this piece in the homepage "Featured" grid. */
  featured?: boolean;
}

export const categories: Category[] = [
  "Living Room",
  "Bedroom",
  "Office",
  "Dining",
  "Custom",
];

export const products: Product[] = [
  {
    id: 1,
    slug: "luxury-sofa-set",
    title: "Luxury Sofa Set",
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    tagline: "Plush three-piece seating for the modern living room.",
    description:
      "A generously cushioned three-piece sofa set upholstered in premium fabric over a solid hardwood frame. Designed for everyday comfort without compromising on elegance, it anchors any living space with warmth and presence.",
    dimensions: "220 × 95 × 85 cm (W × D × H)",
    materials: "Kiln-dried hardwood frame, high-density foam, woven upholstery",
    featured: true,
  },
  {
    id: 2,
    slug: "king-size-bed",
    title: "King Size Bed",
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    tagline: "A commanding centrepiece for a restful bedroom.",
    description:
      "A king-size bed frame with an upholstered headboard and reinforced slat base. Built to last, it pairs a sturdy hardwood structure with a soft, tactile finish for a bedroom that feels like a retreat.",
    dimensions: "200 × 210 × 120 cm (W × L × H)",
    materials: "Solid hardwood, upholstered headboard, sprung slat base",
    featured: true,
  },
  {
    id: 3,
    slug: "executive-desk",
    title: "Executive Desk",
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    tagline: "A refined workspace built for focus.",
    description:
      "An executive desk with a spacious worktop, integrated cable management, and soft-close drawers. Crafted for professionals who value both function and a statement piece in their workspace.",
    dimensions: "160 × 80 × 76 cm (W × D × H)",
    materials: "Engineered oak veneer, powder-coated steel, soft-close runners",
    featured: true,
  },
  {
    id: 4,
    slug: "dining-table-set",
    title: "Dining Table Set",
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?w=800&q=80",
    tagline: "Gather the whole family around solid wood.",
    description:
      "A six-seater dining table with matching chairs, finished in a warm natural tone. The solid wood top is sealed for everyday resilience, making it as practical as it is beautiful.",
    dimensions: "180 × 90 × 75 cm (W × D × H)",
    materials: "Solid wood top, tapered hardwood legs, protective matte seal",
    featured: true,
  },
  {
    id: 5,
    slug: "bookshelf",
    title: "Bookshelf",
    category: "Custom",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
    tagline: "Modular shelving that grows with your collection.",
    description:
      "An open-back bookshelf with adjustable shelves, ideal for books, plants, and display pieces. Configurable to your ceiling height and wall width as a custom order.",
    dimensions: "90 × 30 × 180 cm (W × D × H)",
    materials: "Solid hardwood, adjustable shelf pins",
  },
  {
    id: 6,
    slug: "coffee-table",
    title: "Coffee Table",
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
    tagline: "A grounded centre for your living room.",
    description:
      "A low-profile coffee table with a lower storage shelf and rounded edges. The perfect companion to a sofa set, balancing open space with practical storage.",
    dimensions: "110 × 60 × 45 cm (W × D × H)",
    materials: "Solid wood top, hardwood frame, matte lacquer finish",
  },
  {
    id: 7,
    slug: "wardrobe-cabinet",
    title: "Wardrobe Cabinet",
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    tagline: "Spacious storage with a tailored finish.",
    description:
      "A double-door wardrobe with a hanging rail, adjustable shelves, and soft-close hinges. Made to keep a bedroom uncluttered while adding a warm, crafted presence.",
    dimensions: "120 × 60 × 200 cm (W × D × H)",
    materials: "Engineered wood, soft-close hinges, hardwood handles",
  },
  {
    id: 8,
    slug: "office-chair",
    title: "Office Chair",
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
    tagline: "Supportive seating for long working days.",
    description:
      "An ergonomic office chair with contoured lumbar support and a breathable finish. Designed to keep you comfortable through the workday while complementing an executive setup.",
    dimensions: "62 × 62 × 115 cm (W × D × H)",
    materials: "Moulded foam, breathable upholstery, tilt mechanism",
  },
  {
    id: 9,
    slug: "rustic-dining-bench",
    title: "Rustic Dining Bench",
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    tagline: "Relaxed, communal seating with character.",
    description:
      "A solid wood dining bench that seats three, with a lightly distressed finish that celebrates the grain. Pairs naturally with the dining table set for a warm, communal table.",
    dimensions: "150 × 35 × 45 cm (W × D × H)",
    materials: "Solid reclaimed-style hardwood, hand-finished surface",
  },
  {
    id: 10,
    slug: "custom-shelving-unit",
    title: "Custom Shelving Unit",
    category: "Custom",
    image:
      "https://images.unsplash.com/photo-1616464916356-3a555ad4a5b3?w=800&q=80",
    tagline: "Built to your wall, down to the centimetre.",
    description:
      "A fully bespoke shelving unit designed around your space and storage needs. We work with you from measurement to finish, delivering a piece that fits as though it was always there.",
    dimensions: "Made to measure",
    materials: "Your choice of hardwood, finish, and hardware",
  },
  {
    id: 11,
    slug: "accent-armchair",
    title: "Accent Armchair",
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    tagline: "A characterful seat that completes the room.",
    description:
      "A single accent armchair with a sculpted frame and plush seat, ideal for a reading nook or as a complement to a larger sofa set. A small piece that makes a big statement.",
    dimensions: "75 × 80 × 90 cm (W × D × H)",
    materials: "Hardwood frame, high-resilience foam, woven upholstery",
  },
  {
    id: 12,
    slug: "nightstand-set",
    title: "Nightstand Set",
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
    tagline: "A matched pair to frame your bed.",
    description:
      "A pair of bedside nightstands with a single soft-close drawer and open lower shelf each. Sized to sit neatly beside the king-size bed for a coordinated bedroom.",
    dimensions: "45 × 40 × 55 cm (W × D × H) each",
    materials: "Solid hardwood, soft-close drawer runners",
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
