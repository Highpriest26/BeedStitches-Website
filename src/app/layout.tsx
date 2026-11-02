import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { siteConfig } from "@/data/siteConfig";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: "%s | BEEDSTITCHES Fashion",
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [...siteConfig.seo.targetTopics],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.project.brandName,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      {
        url: "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (23).jpeg",
        width: 810,
        height: 1440,
        alt: "BEEDSTITCHES Fashion — Bespoke Tailoring & Contemporary African Menswear in Enugu, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      "/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (23).jpeg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Factually accurate structured data using only verified client facts
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: siteConfig.project.brandName,
    description: siteConfig.seo.defaultDescription,
    foundingDate: String(siteConfig.project.establishedYear),
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: "Founder & Creative Director",
    },
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No 29 Ogidi Street, Ogui New Layout",
      addressLocality: siteConfig.contact.city,
      addressRegion: siteConfig.contact.state,
      addressCountry: "NG",
    },
    areaServed: ["Nigeria", "International"],
    image: `${siteConfig.seo.siteUrl}${siteConfig.logo.src}`,
  };

  return (
    <html
      lang="en"
      className={raleway.variable}
    >
      <body className="flex min-h-screen flex-col bg-brand-black font-sans text-brand-off-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
