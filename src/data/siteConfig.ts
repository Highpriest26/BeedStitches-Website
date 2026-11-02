export interface ProcessStep {
  number: string;
  title: string;
  text: string;
}

export const siteConfig = {
  project: {
    name: "BEEDSTITCHES Fashion Website",
    brandName: "BEEDSTITCHES Fashion",
    shortBrandName: "BEEDSTITCHES",
    tagline: "Crafted With Precision. Designed To Be Remembered.",
    packagingMotto: "Merging Luxury With Style and Elegance",
    establishedYear: 2018,
    experienceYears: "8+",
  },
  logo: {
    src: "/assets/beedstitches/beedstitches-logo.jpeg",
    yamlOriginalFilename: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM.jpeg",
    alt: "BEEDSTITCHES Fashion Gold Crest Emblem",
  },
  founder: {
    name: "Iwunna Uchenna Michael",
    shortName: "Michael",
    titles: [
      "Founder & Creative Director",
      "Fashion Designer",
      "Fashion Educator",
      "Garment Production Supervisor",
    ],
    summary:
      "Iwunna Uchenna Michael is the Founder and Creative Director of BEEDSTITCHES Fashion, a Nigerian fashion house focused on quality craftsmanship, contemporary African menswear, garment production and practical fashion education.",
    homeSummary:
      "Iwunna Uchenna Michael is the Founder and Creative Director of BEEDSTITCHES, with over eight years of practical experience in bespoke tailoring, garment construction, production supervision and fashion education.",
    portraitAvailable: true,
    portraitSrc: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (29).jpeg",
    secondaryPortraitSrc: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (18).jpeg",
  },
  contact: {
    phone: "+2348132884507",
    phoneDisplay: "+234 813 288 4507",
    whatsapp: "+2348132884507",
    whatsappNumberClean: "2348132884507",
    address: "No 29 Ogidi Street, Ogui New Layout, Enugu, Enugu State, Nigeria",
    city: "Enugu",
    state: "Enugu State",
    country: "Nigeria",
    email: {
      supplied: "Mykelbeed@gmail",
      verified: false, // Rule: Do not publish until the client supplies the complete valid email address
    },
    social: {
      instagram: {
        handle: "Mickeybeed",
        url: null as string | null, // Rule: Do not invent URLs; use exact profile links only when provided
      },
      facebook: {
        handle: "Iwunna Mykel Beed",
        url: null as string | null,
      },
      tiktok: {
        handle: "Mykelbeed",
        url: null as string | null,
      },
    },
    map: {
      enabled: false, // Rule: Do not embed a map until the client confirms the precise public-facing business location
    },
    remoteClients: true,
    internationalClients: true,
  },
  positioning: {
    summary:
      "A Nigerian fashion house combining craftsmanship, precision, individuality, luxury, comfort, refined finishing, and contemporary African design.",
    philosophy:
      "At BEEDSTITCHES, fashion is a combination of art, identity, craftsmanship, comfort and precision.",
    philosophyExtended:
      "We transform ideas and fabrics into garments that reflect the personality of the wearer, with careful attention to fabric, cut, construction, finishing, comfort and confidence.",
    experienceSummary:
      "With more than eight years of hands-on experience, BEEDSTITCHES brings practical knowledge across concept development, fabric selection, cutting, garment construction, finishing, quality control and client delivery.",
    remoteSummary:
      "BEEDSTITCHES also works with remote and international clients, translating visual references and individual style preferences into carefully constructed custom garments.",
    differentiators: [
      "8+ years of hands-on garment-production experience.",
      "Bespoke and custom tailoring.",
      "Strong focus on contemporary African menswear.",
      "Production supervision and quality control.",
      "Remote custom-order capability for clients outside Nigeria.",
      "Certified fashion education and practical tailoring mentorship.",
      "At least 15 students and apprentices trained.",
    ],
  },
  navigation: {
    items: [
      { label: "Home", href: "/" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Services", href: "/services" },
      { label: "Fashion Training", href: "/fashion-training" },
      { label: "About", href: "/about" },
      { label: "Book Consultation", href: "/book-consultation" },
      { label: "Contact", href: "/contact" },
    ],
    desktopPrimaryCta: "Book Consultation",
    mobilePrimaryCta: "Book",
    secondaryCta: "WhatsApp Us",
  },
  processSteps: [
    {
      number: "01",
      title: "Tell Us What You Need",
      text: "Share your preferred style, occasion, reference or idea.",
    },
    {
      number: "02",
      title: "Consultation & Measurements",
      text: "We clarify the design, fabric, fit, timeline and measurements.",
    },
    {
      number: "03",
      title: "Craft & Finish",
      text: "Your garment is cut, constructed, finished and quality-checked.",
    },
    {
      number: "04",
      title: "Fitting & Delivery",
      text: "Final adjustments are completed before collection or delivery.",
    },
  ] as ProcessStep[],
  fashionTraining: {
    title: "Fashion Training",
    heroHeading: "Learn Fashion Through Practice",
    intro:
      "Practical training and mentorship in fabric selection, cutting, garment construction, stitching, finishing and professional presentation.",
    homeBody:
      "Practical fashion education and mentorship for aspiring tailors and garment makers.",
    proofPoints: [
      "Certified Fashion Educator",
      "8+ years of practical fashion experience",
      "At least 15 students and apprentices trained",
    ],
    curriculum: [
      {
        number: "01",
        title: "Fabric sourcing and selection",
        description:
          "Understanding textile weights, drape, durability, and selecting appropriate fabrics for native wear, shirts, and structured two-piece garments.",
      },
      {
        number: "02",
        title: "Garment cutting",
        description:
          "Accurate body measurement translation, chalking, pattern alignment, and precision fabric cutting for clean silhouettes.",
      },
      {
        number: "03",
        title: "Stitching and construction",
        description:
          "Hands-on machine control, seam architecture, placket and collar assembly, and structural garment building.",
      },
      {
        number: "04",
        title: "Finishing and attention to detail",
        description:
          "Internal seam neatness, pressing standards, edge topstitching, embroidery alignment, and garment presentation.",
      },
      {
        number: "05",
        title: "Practical tailoring exercises",
        description:
          "Supervised workshop projects building real menswear pieces from initial cut to final fitting.",
      },
      {
        number: "06",
        title: "Production standards",
        description:
          "Quality control workflows, garment inspection checklists, and professional client delivery discipline.",
      },
    ],
    studentShowcase: {
      studentsInTraining: [
        {
          id: "trainee-slot-1",
          title: "Pattern Drafting & Fabric Cutting Session",
          cohortLabel: "Practical Workshop • Enugu Atelier",
          caption:
            "Reserved space for photographs of apprentices practicing body measurement translation, chalking, and fabric cutting.",
          imageSrc: null as string | null,
          fallbackAsset: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (12).jpeg",
        },
        {
          id: "trainee-slot-2",
          title: "Industrial Machine Stitching & Construction",
          cohortLabel: "Hands-On Mentorship • Studio Floor",
          caption:
            "Reserved space for photographs of students operating industrial sewing machines under direct supervision.",
          imageSrc: null as string | null,
          fallbackAsset: "/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (19).jpeg",
        },
        {
          id: "trainee-slot-3",
          title: "Garment Pressing, Detailing & Quality Control",
          cohortLabel: "Finishing Discipline • Enugu",
          caption:
            "Reserved space for photographs of trainees learning neckline finishing, embroidery alignment, and garment inspection.",
          imageSrc: null as string | null,
          fallbackAsset: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (20).jpeg",
        },
      ],
      graduatedStudents: [
        {
          id: "graduate-slot-1",
          title: "Graduated Apprentice & Final Project Showcase",
          cohortLabel: "Alumni Cohort • Certified Mentorship",
          caption:
            "Reserved space for portrait of a graduated BEEDSTITCHES trainee alongside their completed bespoke menswear project.",
          imageSrc: null as string | null,
        },
        {
          id: "graduate-slot-2",
          title: "Graduated Apprentice & Certificate Presentation",
          cohortLabel: "Alumni Cohort • Practical Tailoring",
          caption:
            "Reserved space for graduation photograph with Founder & Creative Director Iwunna Uchenna Michael.",
          imageSrc: null as string | null,
        },
        {
          id: "graduate-slot-3",
          title: "Independent Tailor & Studio Alumni Highlight",
          cohortLabel: "15+ Students & Apprentices Trained",
          caption:
            "Reserved space for showcasing graduates who have completed practical garment construction and production training.",
          imageSrc: null as string | null,
        },
      ],
    },
    ctaLabel: "Enquire About Training",
  },
  booking: {
    title: "Book a Consultation",
    intro:
      "Tell us what you want to create. We will review your request and contact you to confirm the next step.",
    mode: "request_based_manual_confirmation",
    enableBudgetField: false, // Rule: Hide this field until the client provides actual ranges
    serviceOptions: [
      "Kaftan / Native Wear",
      "Jalabia / Traditional Wear",
      "Two-Piece Outfit",
      "Shirt / Contemporary Menswear",
      "Casual / Streetwear",
      "Cultural / Heritage Outfit",
      "Corporate / Smart Casual",
      "Custom Design",
      "Garment Production",
      "Fashion Training",
      "Other",
    ],
    consultationTypes: [
      "In-person in Enugu",
      "Phone / WhatsApp",
      "Video consultation",
      "Remote / International order",
    ],
    success: {
      heading: "Request Received",
      message:
        "Thank you. BEEDSTITCHES will review your request and contact you to confirm your consultation.",
    },
  },
  seo: {
    siteUrl: "https://beedstitches.com",
    defaultTitle:
      "BEEDSTITCHES Fashion | Bespoke Tailoring & African Menswear in Enugu",
    defaultDescription:
      "BEEDSTITCHES Fashion creates bespoke kaftans, native wear, jalabias, two-piece outfits, contemporary African menswear and custom garments in Enugu, Nigeria.",
    targetTopics: [
      "Bespoke tailor Enugu",
      "Fashion designer Enugu",
      "Men's native wear Enugu",
      "Kaftan designer Nigeria",
      "Custom menswear Nigeria",
      "African menswear designer",
      "Tailoring training Enugu",
    ],
  },
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    "Hello BEEDSTITCHES Fashion, I would like to make an enquiry about a custom garment / consultation.";
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${siteConfig.contact.whatsappNumberClean}?text=${text}`;
}
