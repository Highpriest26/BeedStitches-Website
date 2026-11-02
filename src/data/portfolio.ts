export type PortfolioFilterCategory =
  | "All"
  | "Kaftans"
  | "Jalabias"
  | "Two-Piece"
  | "Shirts"
  | "Casual & Streetwear"
  | "Cultural & Heritage";

export const portfolioFilters: PortfolioFilterCategory[] = [
  "All",
  "Kaftans",
  "Jalabias",
  "Two-Piece",
  "Shirts",
  "Casual & Streetwear",
  "Cultural & Heritage",
];

export interface PortfolioItem {
  id: string;
  title: string;
  categoryLabel: string;
  filterCategories: PortfolioFilterCategory[];
  bookingServiceOption: string;
  image: string;
  alt: string;
  shortDescription: string;
  details: string[];
  featuredOnHome: boolean;
  homeOrder?: number;
  isHeroCandidate?: boolean;
  aspectHint?: "portrait" | "square";
  sourceNote?: string;
}

export interface CraftsmanshipAsset {
  id: string;
  title: string;
  caption: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
}

export interface PendingTestimonial {
  id: string;
  clientName: string;
  quote: string;
  sourceAsset: string;
  permissionRequired: boolean;
  approvedForPublicDisplay: boolean;
}

/**
 * Authentic BEEDSTITCHES client-supplied portfolio items mapped from
 * `beedstitches_antigravity_build_spec_v2.yml` and the local client WhatsApp batches.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "all-white-contemporary-native",
    title: "All-White Contemporary Native Ensemble",
    categoryLabel: "Traditional & Contemporary African Fashion",
    filterCategories: ["Kaftans", "Jalabias", "Cultural & Heritage"],
    bookingServiceOption: "Kaftan / Native Wear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (23).jpeg",
    alt: "BEEDSTITCHES client in an all-white contemporary traditional native outfit with matching cap",
    shortDescription:
      "Crisp all-white bespoke native tunic and wide-leg trousers with geometric pocket edging and diagonal tonal chest detailing.",
    details: [
      "Tailored three-quarter sleeve silhouette",
      "Scalloped architectural side pocket detailing",
      "Coordinated traditional cap and relaxed wide-leg trouser cut",
    ],
    featuredOnHome: false,
    isHeroCandidate: true,
    aspectHint: "portrait",
  },
  {
    id: "coordinated-teal-traditional",
    title: "Coordinated Teal Flowing Traditional Looks",
    categoryLabel: "Cultural & Heritage-Inspired Fashion",
    filterCategories: ["Cultural & Heritage", "Kaftans"],
    bookingServiceOption: "Cultural / Heritage Outfit",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (19).jpeg",
    alt: "Two men wearing coordinated teal green flowing African traditional outfits and striped caps by BEEDSTITCHES",
    shortDescription:
      "Statement teal draped traditional ensembles featuring woven geometric chest panels and coordinated heritage caps for milestone celebrations.",
    details: [
      "Full-drape flowing outer garment with tailored under-tunic",
      "Intricate olive-and-gold woven chest embroidery",
      "Tapered matching trousers and artisan striped fila caps",
    ],
    featuredOnHome: true,
    homeOrder: 1,
    isHeroCandidate: true,
    aspectHint: "portrait",
  },
  {
    id: "royal-blue-native-set",
    title: "Royal Blue Native Set",
    categoryLabel: "Kaftans & Luxury Native Wear",
    filterCategories: ["Kaftans"],
    bookingServiceOption: "Kaftan / Native Wear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (21).jpeg",
    alt: "Royal blue short-sleeve native set with metallic gold embroidery on placket, chest pocket, and cuffs by BEEDSTITCHES",
    shortDescription:
      "Structured royal blue senator-style native wear accented with refined gold motif embroidery along the placket, chest pocket, and sleeve cuffs.",
    details: [
      "Precision slim-tailored trouser and tunic proportion",
      "Gold crest embroidery along centre placket and pocket",
      "Clean cuff piping for formal and celebratory occasions",
    ],
    featuredOnHome: true,
    homeOrder: 2,
    aspectHint: "portrait",
  },
  {
    id: "signature-blue-native-set",
    title: "Signature Blue Native Two-Piece",
    categoryLabel: "Kaftans & Luxury Native Wear",
    filterCategories: ["Kaftans", "Two-Piece"],
    bookingServiceOption: "Kaftan / Native Wear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (29).jpeg",
    alt: "Client wearing blue native two-piece outfit with black appliqué neckline detail holding a BEEDSTITCHES luxury package bag",
    shortDescription:
      "Contemporary slate-blue native two-piece featuring a bold black looped neckline appliqué and contrast cuff trim, presented with signature BEEDSTITCHES packaging.",
    details: [
      "Sculpted black contrast neckline appliqué and cuff edging",
      "Flapped chest pocket with clean structural seams",
      "Delivered in signature black-and-gold BEEDSTITCHES presentation bag",
    ],
    featuredOnHome: true,
    homeOrder: 3,
    isHeroCandidate: true,
    aspectHint: "portrait",
  },
  {
    id: "black-gold-two-piece",
    title: "Black & Gold Two-Piece",
    categoryLabel: "Vintage & Two-Piece Outfits",
    filterCategories: ["Two-Piece", "Shirts"],
    bookingServiceOption: "Two-Piece Outfit",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (26).jpeg",
    alt: "Man wearing a black and gold brush-stroke camp collar shirt paired with tailored gold trousers by BEEDSTITCHES",
    shortDescription:
      "Expressive black-and-gold Cubana-inspired camp-collar shirt paired with tailored ochre-gold trousers for upscale social occasions.",
    details: [
      "Relaxed revere collar shirt with bold gold motif",
      "Tailored straight-slim gold trousers with crisp drape",
      "Designed for effortless smart-casual confidence",
    ],
    featuredOnHome: true,
    homeOrder: 4,
    aspectHint: "portrait",
  },
  {
    id: "purple-textured-short-set",
    title: "Purple Textured Short Set",
    categoryLabel: "Casual Wear & Streetwear",
    filterCategories: ["Casual & Streetwear", "Two-Piece"],
    bookingServiceOption: "Casual / Streetwear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (25).jpeg",
    alt: "Purple damask-textured short-sleeve shirt and matching shorts on a mannequin by BEEDSTITCHES",
    shortDescription:
      "Rich royal-purple jacquard/damask textured short-sleeve shirt and tailored shorts set balancing luxury fabric with relaxed contemporary ease.",
    details: [
      "Tonal floral jacquard weave with subtle sheen",
      "Structured point collar and clean button front",
      "Coordinated above-the-knee tailored shorts",
    ],
    featuredOnHome: true,
    homeOrder: 5,
    aspectHint: "portrait",
  },
  {
    id: "clean-white-native-look",
    title: "Clean White Native Look",
    categoryLabel: "Kaftans & Luxury Native Wear",
    filterCategories: ["Kaftans"],
    bookingServiceOption: "Kaftan / Native Wear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (27).jpeg",
    alt: "Smiling client in a crisp white tailored kaftan and trousers with dark traditional cap by BEEDSTITCHES",
    shortDescription:
      "Minimalist all-white tailored native kaftan with understated chest pocket pleating and slim trousers for timeless daytime elegance.",
    details: [
      "Clean band collar and concealed front placket",
      "Architectural pleated chest pocket with signature bar detail",
      "Breathable fabric cut for comfort and movement",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "contrast-stripe-contemporary-tunic-sets",
    title: "Contrast-Stripe Contemporary Tunic Sets",
    categoryLabel: "Vintage & Two-Piece Outfits",
    filterCategories: ["Two-Piece", "Casual & Streetwear"],
    bookingServiceOption: "Two-Piece Outfit",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (15).jpeg",
    alt: "Two men wearing coordinated ice-grey and marigold-yellow contemporary two-piece tunics with black stripe bands by BEEDSTITCHES",
    shortDescription:
      "Coordinated ice-grey and marigold-yellow contemporary notch-neck tunics and tailored trousers accented with bold twin black stripe bands on the sleeve and thigh.",
    details: [
      "Clean notch-neck collarless neckline and three-quarter sleeves",
      "Signature twin black contrast stripe bands on sleeve cuff and trouser leg",
      "Tailored relaxed-slim fit crafted for modern social occasions",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "crimson-brocade-placket-jalabia",
    title: "Crimson Brocade-Placket Jalabia Set",
    categoryLabel: "Jalabia & Traditional Wear",
    filterCategories: ["Jalabias", "Kaftans"],
    bookingServiceOption: "Jalabia / Traditional Wear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.39 PM.jpeg",
    alt: "Client in a ruby-crimson short-sleeve long jalabia tunic and slim trousers with gold brocade placket by BEEDSTITCHES",
    shortDescription:
      "Ruby-crimson short-sleeve long jalabia tunic and slim trousers featuring an ornate red-and-gold brocade centre placket and contrast-piped chest welt pocket.",
    details: [
      "Elongated jalabia silhouette paired with tapered matching trousers",
      "Woven red-and-gold brocade centre placket and pocket trim",
      "Deep functional lower side patch pockets",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "obsidian-cowrie-trimmed-jalabia",
    title: "Obsidian Cowrie-Trimmed Jalabia Robe",
    categoryLabel: "Jalabia & Traditional Wear",
    filterCategories: ["Jalabias", "Cultural & Heritage"],
    bookingServiceOption: "Jalabia / Traditional Wear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (18).jpeg",
    alt: "Floor-length jet-black jalabia robe with geometric braided neckline trim and cowrie shell accents on a mannequin",
    shortDescription:
      "Floor-length jet-black jalabia robe crafted with wide three-quarter sleeves, geometric monochrome braided neckline trim, and authentic cowrie-shell accents.",
    details: [
      "Full-length flowing jalabia drape with wide three-quarter sleeves",
      "Monochrome geometric woven trim framing the V-neckline",
      "Hand-sewn cowrie-shell pendant detail and cuff accents",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "champagne-gold-beaded-jalabia",
    title: "Champagne Gold Beaded Luxury Jalabia",
    categoryLabel: "Jalabia & Traditional Wear",
    filterCategories: ["Jalabias", "Cultural & Heritage"],
    bookingServiceOption: "Jalabia / Traditional Wear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (6).jpeg",
    alt: "Client wearing a flowing champagne-gold silk jalabia with ornate bead embroidery and matching headwrap",
    shortDescription:
      "Flowing champagne-gold silk-satin maxi jalabia featuring intricate hand-applied gold bead and sequin embroidery along the V-neckline, wide sleeves, and centre panel.",
    details: [
      "Lustrous champagne-gold satin drape with wide ceremonial sleeves",
      "Hand-embellished gold beadwork, sequin motifs, and front tassel",
      "Coordinated headwrap for milestone celebrations and formal gatherings",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "burgundy-tailored-senator-set",
    title: "Burgundy Tailored Senator Two-Piece",
    categoryLabel: "Kaftans & Luxury Native Wear",
    filterCategories: ["Kaftans", "Two-Piece"],
    bookingServiceOption: "Kaftan / Native Wear",
    image: "/assets/beedstitches/derived/burgundy-senator-two-piece-clean.jpeg",
    alt: "Client wearing a deep burgundy short-sleeve senator tunic and slim tailored trousers by BEEDSTITCHES",
    shortDescription:
      "Deep wine-burgundy short-sleeve senator tunic and slim-tailored trousers featuring a clean round neckline and concealed front placket.",
    details: [
      "Minimalist concealed placket with tonal topstitching",
      "Precision shoulder structure and tapered trouser line",
      "Rich burgundy suiting fabric suited for day-to-evening events",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
    sourceNote:
      "Cropped from WhatsApp Image 2026-10-24 at 8.05.02 AM (1).jpeg to remove status caption overlay.",
  },
  {
    id: "sky-blue-pintuck-senator-set",
    title: "Sky Blue Pintuck Senator & Heritage Set",
    categoryLabel: "Kaftans & Luxury Native Wear",
    filterCategories: ["Kaftans", "Cultural & Heritage", "Two-Piece"],
    bookingServiceOption: "Kaftan / Native Wear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (2).jpeg",
    alt: "Client in an azure sky-blue pintuck senator two-piece outfit styled with traditional red cap and coral beads",
    shortDescription:
      "Vibrant azure-blue short-sleeve senator tunic with vertical chest pintuck pleating and tailored trousers, styled with a traditional red cap and coral beads.",
    details: [
      "Vertical front pintuck pleat architecture across the chest",
      "Crisp short-sleeve tunic and matching straight-slim trousers",
      "Pairs seamlessly with traditional Igbo red cap and coral accessories",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "petrol-teal-pleated-kaftan-set",
    title: "Petrol Teal Pleated & Embroidered Kaftan Set",
    categoryLabel: "Kaftans & Luxury Native Wear",
    filterCategories: ["Kaftans", "Two-Piece"],
    bookingServiceOption: "Kaftan / Native Wear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (15).jpeg",
    alt: "Petrol-teal short-sleeve kaftan tunic and trousers with front pintucks and subtle gold embroidery on wooden mannequin",
    shortDescription:
      "Structured petrol-teal short-sleeve native two-piece featuring architectural side pintucks and subtle gold-and-olive motif embroidery along the placket and lower hem.",
    details: [
      "Symmetrical vertical pintuck pleats flanking the chest",
      "Refined tonal-gold embroidery along the placket and hemline",
      "Coordinated tailored trousers with crisp crease finish",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "espresso-minimalist-wave-stitch-kaftan",
    title: "Espresso Minimalist Wave-Stitch Kaftan",
    categoryLabel: "Kaftans & Luxury Native Wear",
    filterCategories: ["Kaftans"],
    bookingServiceOption: "Kaftan / Native Wear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (9).jpeg",
    alt: "Dark espresso-brown three-quarter-sleeve kaftan tunic with wave-stitched patch pocket on studio mannequin",
    shortDescription:
      "Deep espresso-brown three-quarter-sleeve kaftan tunic with a clean concealed placket, vertical front seam architecture, and dual-row wave topstitching on the lower pocket.",
    details: [
      "Three-quarter tailored sleeve and clean round neckline",
      "Subtle gold dual-wave topstitching on lower patch pocket",
      "Structured matte suiting fabric for understated luxury",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "chocolate-gold-embroidered-pocket-kaftan",
    title: "Chocolate Gold-Embroidered Pocket Kaftan",
    categoryLabel: "Kaftans & Luxury Native Wear",
    filterCategories: ["Kaftans", "Jalabias"],
    bookingServiceOption: "Kaftan / Native Wear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (5).jpeg",
    alt: "Chocolate-brown short-sleeve native tunic featuring intricate gold geometric embroidery on chest and side pockets",
    shortDescription:
      "Rich chocolate-brown short-sleeve native tunic highlighted by geometric 3D gold embroidery framing the chest and lower patch pockets.",
    details: [
      "Three-button front placket with clean neckline binding",
      "Ornate metallic-gold geometric embroidery across lower patch pockets",
      "Coordinated gold-bordered chest pocket",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "emerald-geometric-embroidered-agbada",
    title: "Emerald Geometric-Embroidered Agbada Ensemble",
    categoryLabel: "Cultural & Heritage-Inspired Fashion",
    filterCategories: ["Cultural & Heritage", "Kaftans"],
    bookingServiceOption: "Cultural / Heritage Outfit",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (8).jpeg",
    alt: "Client wearing an emerald-green embroidered Agbada three-piece ensemble with striped fila cap",
    shortDescription:
      "Regal emerald-green three-piece Agbada ensemble featuring tonal geometric chest and neckline embroidery, tailored under-tunic, and coordinated striped fila cap.",
    details: [
      "Full-drape Agbada outer robe with structured shoulder line",
      "Precision tonal-cyan geometric chest and back embroidery",
      "Tailored slim trousers and handwoven striped fila cap",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "emerald-velvet-panel-agbada-duo",
    title: "Emerald & Gold Velvet-Panel Agbada Duo",
    categoryLabel: "Cultural & Heritage-Inspired Fashion",
    filterCategories: ["Cultural & Heritage", "Kaftans"],
    bookingServiceOption: "Cultural / Heritage Outfit",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (11).jpeg",
    alt: "Two men showcasing coordinated emerald-green Agbada robes with geometric embroidery and velvet front panelling",
    shortDescription:
      "Full-drape emerald Agbada ensembles showcasing contrasting bespoke treatments—one with lime geometric chest embroidery and knot emblem, the other with a vertical gold-and-green velvet panel.",
    details: [
      "Custom group commission with individualized front panel architecture",
      "Rich velvet geometric appliqué and traditional knot embroidery",
      "Styled with coordinated Aso-Oke striped fila caps",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "ceremonial-groomsmen-agbada-suit-lineup",
    title: "Ceremonial Groomsmen Agbada & Suit Lineup",
    categoryLabel: "Cultural & Heritage-Inspired Fashion",
    filterCategories: ["Cultural & Heritage", "Kaftans", "Two-Piece"],
    bookingServiceOption: "Cultural / Heritage Outfit",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (17).jpeg",
    alt: "Six men on grand steps wearing coordinated emerald Agbada ensembles and white double-breasted blazers with burgundy trousers",
    shortDescription:
      "Coordinated ceremonial party commission uniting four bespoke emerald-green embroidered Agbada ensembles with two crisp white double-breasted peak-lapel blazers and burgundy trousers.",
    details: [
      "Full wedding and milestone group wardrobe coordination",
      "Harmonized emerald Agbada embroidery and western double-breasted tailoring",
      "Custom fitted to each gentleman's individual measurements",
    ],
    featuredOnHome: false,
    aspectHint: "square",
  },
  {
    id: "olive-chevron-b33d-sleeveless-tracksuit",
    title: "Olive Chevron-Knit B33D Sleeveless Tracksuit",
    categoryLabel: "Casual Wear & Streetwear",
    filterCategories: ["Casual & Streetwear", "Two-Piece"],
    bookingServiceOption: "Casual / Streetwear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (18).jpeg",
    alt: "Olive-green textured chevron-knit sleeveless hoodie and wide-leg joggers with B33D chest graphic",
    shortDescription:
      "Signature B33D olive-green textured chevron-knit sleeveless hoodie and relaxed drawstring joggers featuring a custom graphic chest transfer.",
    details: [
      "Braided chevron-quilted jersey fabric for breathable structure",
      "Sleeveless hooded silhouette with custom B33D chest artwork",
      "Relaxed straight-leg drawstring joggers with side pockets",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "monochrome-flame-applique-studded-shirt",
    title: "Monochrome Flame-Appliqué Studded Shirt",
    categoryLabel: "Shirts & Contemporary Menswear",
    filterCategories: ["Shirts", "Casual & Streetwear"],
    bookingServiceOption: "Shirt / Contemporary Menswear",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (7).jpeg",
    alt: "Black studded velvet and white waffle-knit short-sleeve Johnny-collar shirt with rising flame appliqué by BEEDSTITCHES",
    shortDescription:
      "Statement short-sleeve Johnny-collar pullover shirt combining rhinestone-studded black velvet on the upper torso with hand-cut white waffle-knit rising flame appliqués.",
    details: [
      "Hand-cut white waffle-knit flame appliqué across chest and sleeves",
      "Contrasting rhinestone-studded black velvet upper yoke",
      "Open Johnny collar and structured waffle cuffs",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "cream-sleeveless-double-breasted-waistcoat-set",
    title: "Cream Sleeveless Double-Breasted Waistcoat Set",
    categoryLabel: "Vintage & Two-Piece Outfits",
    filterCategories: ["Two-Piece", "Casual & Streetwear"],
    bookingServiceOption: "Two-Piece Outfit",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (1).jpeg",
    alt: "Bespoke cream textured sleeveless double-breasted peak-lapel waistcoat and matching trousers by BEEDSTITCHES",
    shortDescription:
      "Bespoke off-white textured sleeveless double-breasted peak-lapel waistcoat paired with wide-leg trousers—brought to life directly from an original B33D Stitches studio sketch.",
    details: [
      "Wide peak lapels with four-button double-breasted closure",
      "Textured cream suiting paired with tailored wide-leg palazzo trousers",
      "Designed and constructed from in-house atelier pattern blocks",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "bespoke-emerald-peak-lapel-suit",
    title: "Bespoke Emerald Peak-Lapel Two-Piece Suit",
    categoryLabel: "Vintage & Two-Piece Outfits",
    filterCategories: ["Two-Piece"],
    bookingServiceOption: "Corporate / Smart Casual",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (6).jpeg",
    alt: "Client wearing a tailored emerald-green peak-lapel two-piece suit with white dress shirt",
    shortDescription:
      "Sharp emerald-teal tailored two-piece suit crafted with structured shoulders, peak lapels, and slim-tapered trousers for formal celebrations.",
    details: [
      "Single-breasted jacket with sharp peak lapels and flap pockets",
      "Clean sleeve pitch and tapered trouser hem",
      "Versatile formal and corporate-event tailoring",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "mustard-ankara-ruffle-kaftan-dress",
    title: "Mustard & Ankara Ruffle-Sleeve Kaftan Dress",
    categoryLabel: "Cultural & Heritage-Inspired Fashion",
    filterCategories: ["Cultural & Heritage", "Kaftans"],
    bookingServiceOption: "Cultural / Heritage Outfit",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (3).jpeg",
    alt: "Smiling female client in a mustard-yellow maxi dress with pleated Ankara ruffle sleeves and floral wax-print front appliqués",
    shortDescription:
      "Vibrant mustard-yellow maxi kaftan dress accented with pleated green-and-gold Ankara ruffle sleeves, vertical floral wax-print front appliqués, and a clean side slit.",
    details: [
      "Sculpted pleated Ankara statement sleeve ruffles",
      "Hand-placed vertical wax-print floral motifs down the centre front",
      "Flattering A-line maxi cut with walking slit",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "indigo-adire-fringe-shift-dress",
    title: "Indigo Adire Fringe-Trimmed Shift Dress",
    categoryLabel: "Cultural & Heritage-Inspired Fashion",
    filterCategories: ["Cultural & Heritage", "Casual & Streetwear"],
    bookingServiceOption: "Cultural / Heritage Outfit",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (10).jpeg",
    alt: "Client wearing an indigo patterned Adire short-sleeve dress with white fringe chest bib and pockets",
    shortDescription:
      "Contemporary indigo-blue patterned Adire shift dress designed with an asymmetric pointed hemline and bold white fringe detailing across the chest bib and patch pockets.",
    details: [
      "Authentic indigo resist-dyed Adire textile",
      "Textured white fringe trim on chest panel and dual front pockets",
      "Asymmetric pointed handkerchief hemline",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "crimson-tassel-cultural-tunic-set",
    title: "Crimson Striped Tassel-Trimmed Cultural Set",
    categoryLabel: "Cultural & Heritage-Inspired Fashion",
    filterCategories: ["Cultural & Heritage", "Two-Piece", "Kaftans"],
    bookingServiceOption: "Cultural / Heritage Outfit",
    image: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (13).jpeg",
    alt: "Red textured short-sleeve cultural tunic with tassel trim, beaded necklaces, red cap, and black trousers on mannequin",
    shortDescription:
      "Expressive crimson-and-black textured short-sleeve cultural tunic finished with pom-pom tassel trim along the cuffs and hem, paired with black trousers and a beaded cap.",
    details: [
      "Textured vertical crimson-and-black woven stripe fabric",
      "Artisan red tassel edging on sleeve cuffs and lower hem",
      "Coordinated black tailored trousers and traditional beaded cap",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
  },
  {
    id: "navy-contrast-stitch-cargo-set",
    title: "Navy Contrast-Stitch Jacket & Cargo Set",
    categoryLabel: "Casual Wear & Streetwear",
    filterCategories: ["Two-Piece", "Casual & Streetwear"],
    bookingServiceOption: "Casual / Streetwear",
    image: "/assets/beedstitches/derived/navy-contrast-stitch-cargo-set-clean.jpeg",
    alt: "Dark navy zip-front jacket and wide-leg cargo trousers with contrast white topstitching",
    shortDescription:
      "Structured dark-navy twill zip jacket with architectural shield pockets paired with wide-leg cargo trousers featuring contrast white topstitching and curved knee seams.",
    details: [
      "Full-zip collared jacket with geometric contrast-stitched flap pockets",
      "Wide-leg cargo trousers with side bellows pocket and curved seam detailing",
      "Precision contrast white topstitching throughout",
    ],
    featuredOnHome: false,
    aspectHint: "portrait",
    sourceNote:
      "Cleaned from WhatsApp Image 2026-10-23 at 1.11.41 PM (13).jpeg with unconfirmed 150k price marker removed.",
  },
  {
    id: "cream-botanical-camp-two-piece",
    title: "Cream Botanical Camp Shirt & Brown Trouser Set",
    categoryLabel: "Vintage & Two-Piece Outfits",
    filterCategories: ["Two-Piece", "Shirts"],
    bookingServiceOption: "Two-Piece Outfit",
    image: "/assets/beedstitches/derived/cream-botanical-camp-two-piece-clean.jpeg",
    alt: "Cream boxy short-sleeve camp collar shirt with brown palm embroidery paired with chocolate-brown pleated wide-leg trousers",
    shortDescription:
      "Relaxed cream short-sleeve camp-collar shirt featuring chocolate-brown palm embroidery paired with tailored dark-brown wide-leg pleated trousers.",
    details: [
      "Boxy drop-shoulder revere collar shirt with contrast botanical embroidery",
      "Tailored chocolate-brown wide-leg trousers with front pleats",
      "Balanced resort and smart-casual two-piece proportion",
    ],
    featuredOnHome: false,
    aspectHint: "square",
    sourceNote:
      "Cleaned from WhatsApp Image 2026-10-23 at 1.11.41 PM (14).jpeg with unconfirmed 70k price marker removed.",
  },
  {
    id: "white-contemporary-two-piece",
    title: "White Contemporary Two-Piece",
    categoryLabel: "Shirts & Contemporary Menswear",
    filterCategories: ["Shirts", "Two-Piece"],
    bookingServiceOption: "Shirt / Contemporary Menswear",
    image: "/assets/beedstitches/derived/white-contemporary-two-piece-clean.jpeg",
    alt: "White long-sleeve minimalist V-placket shirt with botanical line-art embroidery and wide-leg pleated trousers",
    shortDescription:
      "Refined white long-sleeve open-neck shirt with single-button closure, minimalist line-art motif, and relaxed pleated trousers.",
    details: [
      "Open V-neck collar with statement single button",
      "Minimalist contrast botanical line detail on lower front",
      "Wide-leg tailored trousers with front pleats",
    ],
    featuredOnHome: false,
    aspectHint: "square",
    sourceNote:
      "Cleaned from WhatsApp Image 2026-10-23 at 1.11.41 PM (28).jpeg with unconfirmed price marker removed.",
  },
  {
    id: "crimson-zip-shirt-cream-trousers",
    title: "Crimson Statement-Zip Shirt & Cream Trousers",
    categoryLabel: "Shirts & Contemporary Menswear",
    filterCategories: ["Two-Piece", "Shirts", "Casual & Streetwear"],
    bookingServiceOption: "Two-Piece Outfit",
    image: "/assets/beedstitches/derived/crimson-zip-shirt-cream-trousers-clean.jpeg",
    alt: "Deep red short-sleeve shirt with metallic zipper motif paired with cream wide-leg trousers",
    shortDescription:
      "Bold crimson relaxed short-sleeve collared shirt with statement metallic zipper placket detailing paired with crisp cream straight-wide trousers.",
    details: [
      "Relaxed short-sleeve silhouette in rich crimson",
      "Statement graphic zipper placket detail",
      "Paired with clean off-white tailored trousers",
    ],
    featuredOnHome: false,
    aspectHint: "square",
    sourceNote:
      "Cleaned from WhatsApp Image 2026-10-24 at 8.05.02 AM (3).jpeg with unconfirmed 70k price marker removed.",
  },
  {
    id: "burgundy-line-art-shirt-grey-trousers",
    title: "Burgundy Line-Art Shirt & Grey Side-Tab Trousers",
    categoryLabel: "Shirts & Contemporary Menswear",
    filterCategories: ["Shirts", "Two-Piece"],
    bookingServiceOption: "Shirt / Contemporary Menswear",
    image: "/assets/beedstitches/derived/burgundy-line-art-shirt-grey-trousers-clean.jpeg",
    alt: "Burgundy long-sleeve shirt with white continuous-line floral embroidery and grey pleated side-tab trousers",
    shortDescription:
      "Deep burgundy long-sleeve concealed-placket shirt accented with white continuous-line chest embroidery, paired with light-grey double-pleated button side-tab trousers.",
    details: [
      "Concealed front placket and structured turn-back cuffs",
      "Minimalist white continuous-line floral chest embroidery",
      "Light-grey pleated trousers with double-button waist adjusters",
    ],
    featuredOnHome: false,
    aspectHint: "square",
    sourceNote:
      "Cleaned from WhatsApp Image 2026-10-24 at 8.05.03 AM.jpeg with unconfirmed 80k price marker removed.",
  },
  {
    id: "burgundy-botanical-shirt-cream-trousers",
    title: "Burgundy Botanical-Appliqué Shirt & Cream Trousers",
    categoryLabel: "Shirts & Contemporary Menswear",
    filterCategories: ["Shirts", "Two-Piece"],
    bookingServiceOption: "Shirt / Contemporary Menswear",
    image: "/assets/beedstitches/derived/burgundy-botanical-shirt-cream-trousers-clean.jpeg",
    alt: "Wine-burgundy long-sleeve shirt with cream leaf appliqué and cream pleated wide-leg trousers",
    shortDescription:
      "Wine-burgundy long-sleeve shirt featuring a sweeping cream botanical leaf appliqué from the shoulder across the chest, paired with cream pleated wide-leg trousers.",
    details: [
      "Contrast cream botanical leaf appliqué and stem embroidery",
      "Concealed button placket with crisp point collar",
      "Tailored cream front-pleated wide-leg trousers",
    ],
    featuredOnHome: false,
    aspectHint: "square",
    sourceNote:
      "Cleaned from WhatsApp Image 2026-10-24 at 8.05.03 AM (2).jpeg with unconfirmed 75k price marker removed.",
  },
];

export const craftsmanshipAssets: CraftsmanshipAsset[] = [
  {
    id: "atelier-concept-sketch",
    title: "Concept Sketching & Pattern Planning",
    caption:
      "From hand-drawn garment specifications—detailing collar architecture, zip plackets, cargo pockets, and Aso-Oke trouser slits—to precision machine execution.",
    type: "image",
    src: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (20).jpeg",
    alt: "BEEDSTITCHES sewing machine, branded packaging, hang tag, and hand-drawn garment design sketch",
  },
  {
    id: "garment-finishing-hang-tag",
    title: "Refined Neckline Construction & Inspection",
    caption:
      "Every garment undergoes strict quality control for multi-row neckline topstitching, clean internal seams, and final presentation tagging.",
    type: "image",
    src: "/assets/beedstitches/derived/garment-finishing-tag-upright.jpeg",
    alt: "Close-up of clean white garment neckline stitching with black and gold BEEDSTITCHES hang tag",
  },
  {
    id: "bespoke-kraft-pattern-drafting",
    title: "Bespoke Pattern Drafting & Block Architecture",
    caption:
      "Hand-drafted brown kraft paper bodice, sleeve, waist-dart, and collar blocks laid out on the cutting table before fabric chalking.",
    type: "image",
    src: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (12).jpeg",
    alt: "Drafted brown kraft paper garment pattern pieces spread across a dark tailoring table",
  },
  {
    id: "sage-trouser-side-tab-detail",
    title: "Tailored Side-Tab Waist Adjuster & Bar-Tack Finishing",
    caption:
      "Macro inspection of sage twill trouser construction featuring an extended buckle side-tab waist adjuster, crisp front pleating, and reinforced pocket bar-tacks.",
    type: "image",
    src: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (16).jpeg",
    alt: "Macro close-up of sage-green tailored trousers showing side-tab buckle waist adjuster and bar-tack pocket stitching",
  },
  {
    id: "waffle-flame-applique-workstation",
    title: "Hand-Cut Waffle Flame Appliqué & Studio Branding",
    caption:
      "Preparing hand-cut white waffle-knit flame appliqué panels signed B33D Stitches at the sewing workstation prior to joining with studded velvet.",
    type: "image",
    src: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (4).jpeg",
    alt: "Hand-cut white waffle fabric flame appliqué panels with B33D Stitches branding under an industrial sewing machine",
  },
  {
    id: "sleeveless-double-breasted-sketch",
    title: "Sleeveless Double-Breasted Suit Concept Sketch",
    caption:
      "Original B33D Stitches studio specification sketch detailing peak lapels, stone appliqué placement, adjustable waistband, and palazzo trouser proportions.",
    type: "image",
    src: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM.jpeg",
    alt: "Hand-drawn B33D Stitches sketch for a sleeveless double-breasted suit alongside branded packaging and hang tag",
  },
  {
    id: "beedstitches-signature-design-board",
    title: "BEEDSTITCHES Signature Menswear Design Board",
    caption:
      "Creative direction study by Mykel BeeD mapping core silhouettes—The Royal Kaftan, Modern Jalabia, Two-Piece Set, Isi-Agu Fit, and Street Sweet Tracksuit—across fabric and colour palettes.",
    type: "image",
    src: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (8).jpeg",
    alt: "BEEDSTITCHES Luxury Style Elegance 6-panel design board signed by Mykel BeeD",
  },
  {
    id: "denim-guipure-lace-construction",
    title: "Denim & Guipure Lace Hybrid Construction",
    caption:
      "Machine assembly of a bespoke indigo denim and white floral guipure lace shirt-jacket with contrast white topstitching and gold hardware.",
    type: "image",
    src: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (5).jpeg",
    alt: "Indigo denim and white floral lace shirt-jacket under construction on a TWO LION industrial sewing machine",
  },
  {
    id: "white-kaftan-origami-pleating",
    title: "Geometric Origami Placket & Pocket Pleating",
    caption:
      "Precision fabric manipulation on a crisp white native tunic showcasing folded geometric pleat work along the centre placket and chest pocket.",
    type: "image",
    src: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (21).jpeg",
    alt: "Close-up of white kaftan placket and pocket with intricate geometric folded fabric pleats and tailoring shears",
  },
  {
    id: "scalloped-pintuck-machine-detail",
    title: "Scalloped Pintuck & Bound Pocket Manipulation",
    caption:
      "Under the presser foot: basting and topstitching diagonal scalloped seam details and bound pocket contours on black suiting fabric.",
    type: "image",
    src: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (17).jpeg",
    alt: "Black garment panel with wavy pintuck seam manipulation under an industrial sewing machine presser foot",
  },
  {
    id: "cut-fabric-bundles-worktable",
    title: "Cut & Bundled Client Commissions Ready for Assembly",
    caption:
      "Six precision-cut garment bundles organized by fabric and colourway on the studio cutting table ahead of machine construction.",
    type: "image",
    src: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (19).jpeg",
    alt: "Six neatly folded and cut fabric stacks in assorted colours lined up on the workshop cutting table",
  },
  {
    id: "hanging-pattern-archive",
    title: "Master Pattern Archive & Measurement Templates",
    caption:
      "Hanging archive of drafted trouser and bodice paper patterns annotated with client measurements inside the Enugu workshop.",
    type: "image",
    src: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (10).jpeg",
    alt: "Stacks of drafted paper garment patterns hanging on clips in the tailoring studio",
  },
  {
    id: "packaged-commissions-delivery-prep",
    title: "Final Packaging & Client Delivery Preparation",
    caption:
      "Completed gold-embroidered native commissions inspected, pressed, poly-sealed, and prepared with signature B33D Stitches presentation packaging.",
    type: "image",
    src: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.03 AM (1).jpeg",
    alt: "Folded gold-embroidered native garments in clear poly bags topped with a red B33D Stitches branded box",
  },
  {
    id: "crimson-embroidery-detail-video",
    title: "Ornate Placket Embroidery & Precision Alignment",
    caption:
      "Close-up inspection of intricate crimson baroque embroidery and striped collar detailing on bespoke native wear.",
    type: "video",
    src: "/assets/beedstitches/WhatsApp Video 2026-10-23 at 1.11.41 PM (2).mp4",
    poster: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (20).jpeg",
    alt: "Close-up video of ornate crimson embroidery on white bespoke native wear",
  },
  {
    id: "quilted-texture-and-streetwear-video",
    title: "Textured Fabrics & Contemporary Graphics",
    caption:
      "Inspecting braided quilted jersey textures and custom B33D graphic transfers for casual and streetwear collections.",
    type: "video",
    src: "/assets/beedstitches/WhatsApp Video 2026-10-23 at 1.11.41 PM (1).mp4",
    poster: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (25).jpeg",
    alt: "Behind-the-scenes video inspecting quilted dark green garment texture and B33D graphic transfer",
  },
  {
    id: "heat-press-embellishment-video",
    title: "Workshop Heat-Press & Geometric Embellishment",
    caption:
      "Inside the production studio applying studded geometric circular chest motifs with calibrated temperature control.",
    type: "video",
    src: "/assets/beedstitches/WhatsApp Video 2026-10-23 at 1.11.41 PM.mp4",
    poster: "/assets/beedstitches/derived/garment-finishing-tag-upright.jpeg",
    alt: "Behind-the-scenes workshop video showing heat-press embellishment on deep blue fabric",
  },
];

/**
 * Isolated per YAML rule:
 * "Do not publish customer names/testimonial screenshots without client approval."
 * Set `approvedForPublicDisplay: true` only after the client confirms permission.
 */
export const pendingTestimonials: PendingTestimonial[] = [
  {
    id: "testimonial-ray",
    clientName: "Ray",
    quote: "The cloth looks simple and classy.",
    sourceAsset: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (22).jpeg",
    permissionRequired: true,
    approvedForPublicDisplay: false,
  },
  {
    id: "testimonial-burgundy-senator-client",
    clientName: "Client Status Update",
    quote:
      "Stepped out today and I got a lot of compliments and the outfit is so giving. Get yourself a designer like BEED STITCHES. We're doing more once I get back.",
    sourceAsset: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (1).jpeg",
    permissionRequired: true,
    approvedForPublicDisplay: false,
  },
  {
    id: "testimonial-glita-tt",
    clientName: "Glita T.T",
    quote: "Thanks for making me look unique on this occasion. You're the best my bro.",
    sourceAsset: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (11).jpeg",
    permissionRequired: true,
    approvedForPublicDisplay: false,
  },
];

export function getHomeSelectedWork(): PortfolioItem[] {
  return portfolioItems
    .filter((item) => item.featuredOnHome)
    .sort((a, b) => (a.homeOrder ?? 99) - (b.homeOrder ?? 99));
}
