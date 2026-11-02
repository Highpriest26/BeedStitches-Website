export interface ServiceCategory {
  id: string;
  number: string;
  name: string;
  summary: string;
  items: string[];
  bookingOption: string;
  portfolioFilter?: string;
  representativeImage: string | null;
  imageAlt: string;
}

/**
 * Complete services catalog sourced from `beedstitches_antigravity_build_spec_v2.yml`.
 */
export const serviceCategories: ServiceCategory[] = [
  {
    id: "kaftans-luxury-native-wear",
    number: "01",
    name: "Kaftans & Luxury Native Wear",
    summary:
      "Tailored kaftans, senator suits, and statement native sets built with clean lines, dignified drape, and signature embroidery.",
    items: [
      "Classic and premium kaftans",
      "Senator-style outfits",
      "Contemporary native wear",
      "Embellished and detailed kaftan designs",
      "Luxury two-piece native sets",
    ],
    bookingOption: "Kaftan / Native Wear",
    portfolioFilter: "Kaftans",
    representativeImage:
      "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (21).jpeg",
    imageAlt: "Royal blue bespoke native wear by BEEDSTITCHES Fashion",
  },
  {
    id: "jalabia-traditional-wear",
    number: "02",
    name: "Jalabia & Traditional Wear",
    summary:
      "Flowing jalabias and modernized cultural garments crafted for comfort, poise, and ceremonial presence.",
    items: [
      "Traditional jalabias",
      "Modernized cultural garments",
      "Relaxed-fit traditional outfits",
      "Customized traditional pieces",
    ],
    bookingOption: "Jalabia / Traditional Wear",
    portfolioFilter: "Jalabias",
    representativeImage:
      "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (23).jpeg",
    imageAlt: "All-white flowing traditional outfit by BEEDSTITCHES Fashion",
  },
  {
    id: "vintage-two-piece-outfits",
    number: "03",
    name: "Vintage & Two-Piece Outfits",
    summary:
      "Coordinated shirts and trousers, Cubana-inspired sets, and semi-formal two-piece ensembles with effortless versatility.",
    items: [
      "Vintage-inspired two-piece sets",
      "Matching shirts and trousers",
      "Cubana-inspired outfits",
      "Casual and semi-formal sets",
    ],
    bookingOption: "Two-Piece Outfit",
    portfolioFilter: "Two-Piece",
    representativeImage:
      "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (26).jpeg",
    imageAlt: "Black and gold two-piece outfit by BEEDSTITCHES Fashion",
  },
  {
    id: "shirts-contemporary-menswear",
    number: "04",
    name: "Shirts & Contemporary Menswear",
    summary:
      "Custom-fitted corporate-casual shirts, architectural open-collar pieces, and statement textures finished to exacting standards.",
    items: [
      "Casual and corporate-casual shirts",
      "Mesh and net shirts",
      "Statement shirts",
      "Customized shirts with premium finishing",
    ],
    bookingOption: "Shirt / Contemporary Menswear",
    portfolioFilter: "Shirts",
    representativeImage:
      "/assets/beedstitches/derived/white-contemporary-two-piece-clean.jpeg",
    imageAlt: "White contemporary shirt and trouser set by BEEDSTITCHES Fashion",
  },
  {
    id: "casual-wear-streetwear",
    number: "05",
    name: "Casual Wear & Streetwear",
    summary:
      "Refined off-duty sets, textured short suits, sleeveless tracksuits, and coordinated streetwear designed with tailored structure.",
    items: [
      "Two-piece casual outfits",
      "Sleeveless tracksuits",
      "Short-sleeved and long-sleeved sets",
      "Hoodies and coordinated streetwear",
    ],
    bookingOption: "Casual / Streetwear",
    portfolioFilter: "Casual & Streetwear",
    representativeImage:
      "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (25).jpeg",
    imageAlt: "Purple textured short set by BEEDSTITCHES Fashion",
  },
  {
    id: "cultural-heritage-inspired-fashion",
    number: "06",
    name: "Cultural & Heritage-Inspired Fashion",
    summary:
      "Distinguished Isi Agu, Ankara, and lace native ensembles honoring Nigerian heritage through contemporary tailoring.",
    items: [
      "Isi Agu outfits",
      "Ankara-inspired designs",
      "Lace native wear",
      "Modern interpretations of African traditional clothing",
    ],
    bookingOption: "Cultural / Heritage Outfit",
    portfolioFilter: "Cultural & Heritage",
    representativeImage:
      "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (19).jpeg",
    imageAlt: "Coordinated teal cultural heritage outfits by BEEDSTITCHES Fashion",
  },
  {
    id: "additional-fashion-services",
    number: "07",
    name: "Additional Fashion Services",
    summary:
      "End-to-end garment development, bespoke commissions, corporate smart-casual tailoring, and supervised garment production.",
    items: [
      "Bespoke and custom tailoring",
      "Luxury casualwear",
      "Couture-inspired garments",
      "Ready-to-wear concepts",
      "Corporate and smart casualwear",
      "Custom fashion design and garment development",
      "Garment production and finishing",
    ],
    bookingOption: "Custom Design",
    representativeImage:
      "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (20).jpeg",
    imageAlt: "BEEDSTITCHES garment development and production studio",
  },
];
