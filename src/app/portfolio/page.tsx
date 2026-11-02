import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { Reveal } from "@/components/Reveal";
import { getWhatsAppUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Portfolio | Bespoke Kaftans, Native Wear & Contemporary Menswear",
  description:
    "Explore authentic custom garments and contemporary African fashion crafted by BEEDSTITCHES in Enugu, Nigeria — including kaftans, traditional wear, two-piece sets, shirts, and streetwear.",
  openGraph: {
    title: "Portfolio | BEEDSTITCHES Fashion",
    description:
      "A selection of custom garments and contemporary African fashion by BEEDSTITCHES.",
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-brand-black text-brand-off-white">
      {/* Page Header */}
      <section className="border-b border-white/10 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-editorial text-brand-gold">
              Authentic Client Work &amp; Atelier Archive
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-6xl font-semibold text-brand-white">
              Portfolio
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
              A selection of custom garments and contemporary African fashion by
              BEEDSTITCHES.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Filterable Portfolio & Craftsmanship Gallery */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="rounded-2xl border border-white/10 bg-brand-charcoal py-20 text-center text-sm uppercase tracking-luxury text-brand-muted">
                Loading Portfolio Lookbook...
              </div>
            }
          >
            <PortfolioGallery />
          </Suspense>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 bg-brand-charcoal py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 space-y-6">
          <Reveal>
            <p className="text-xs uppercase tracking-editorial text-brand-gold">
              Custom Commissions
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-semibold text-brand-white">
              Seen a Look You Want Tailored For You?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-brand-muted">
              Select any garment from our portfolio or share your own reference
              photo during your consultation request.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
              <Link
                href="/book-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-brand-black hover:bg-brand-gold-highlight"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={getWhatsAppUrl(
                  "Hello BEEDSTITCHES Fashion, I just viewed your Portfolio and would like to enquire about commissioning an outfit."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-brand-black px-8 py-4 text-xs font-medium uppercase tracking-luxury text-brand-white hover:border-brand-gold hover:text-brand-gold"
              >
                <MessageCircle className="h-4 w-4 text-brand-gold" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
