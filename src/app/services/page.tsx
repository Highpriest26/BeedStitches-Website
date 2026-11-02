import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Globe, MessageCircle } from "lucide-react";
import { serviceCategories } from "@/data/services";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services | Bespoke Tailoring, Kaftans, Jalabias & Garment Production",
  description:
    "Explore BEEDSTITCHES Fashion services: bespoke kaftans, luxury native wear, jalabias, vintage two-piece outfits, contemporary shirts, streetwear, Isi Agu, and garment production.",
  openGraph: {
    title: "Services | BEEDSTITCHES Fashion",
    description:
      "Bespoke African menswear, luxury native wear, contemporary two-piece sets, and custom garment production in Enugu, Nigeria.",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-brand-black text-brand-off-white">
      {/* Header */}
      <section className="border-b border-white/10 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-editorial text-brand-gold">
              What We Create
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-6xl font-semibold text-brand-white">
              Services
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
              Every BEEDSTITCHES garment is cut and constructed around the
              individual wearer—combining quality fabrics, clean stitching,
              accurate proportions, and refined finishing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Editorial Service Cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {serviceCategories.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <Reveal key={service.id}>
                <article className="grid grid-cols-1 items-stretch rounded-2xl border border-white/10 bg-brand-charcoal lg:grid-cols-12 overflow-hidden">
                  {/* Image Column */}
                  <div
                    className={`relative aspect-[4/5] w-full bg-brand-black lg:col-span-5 lg:aspect-auto min-h-[340px] ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {service.representativeImage ? (
                      <Image
                        src={service.representativeImage}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-8 text-center">
                        <span className="font-serif text-2xl font-semibold text-brand-gold">
                          {service.name}
                        </span>
                      </div>
                    )}
                    <div className="absolute left-4 top-4 rounded-full bg-brand-black/85 border border-brand-gold/30 px-3.5 py-1 text-xs font-serif font-semibold text-brand-gold">
                      Category {service.number}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`flex flex-col justify-between p-7 sm:p-10 lg:col-span-7 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-editorial text-brand-gold">
                          {service.number} • Bespoke &amp; Custom Tailoring
                        </p>
                        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-white">
                          {service.name}
                        </h2>
                      </div>

                      <p className="text-base leading-relaxed text-brand-off-white/90">
                        {service.summary}
                      </p>

                      <div className="border-t border-white/10 pt-5">
                        <p className="text-xs uppercase tracking-luxury text-brand-gold mb-3.5">
                          Garments &amp; Styles Included
                        </p>
                        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-sm text-brand-muted">
                          {service.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-brand-black/60 px-3.5 py-2.5 text-brand-off-white/90"
                            >
                              <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
                      <Link
                        href={`/book-consultation?service=${encodeURIComponent(
                          service.bookingOption
                        )}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-luxury text-brand-black transition-colors hover:bg-brand-gold-highlight"
                      >
                        <span>Request This Service</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      {service.portfolioFilter && (
                        <Link
                          href={`/portfolio?category=${encodeURIComponent(
                            service.portfolioFilter
                          )}`}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-5 py-3.5 text-xs uppercase tracking-luxury text-brand-off-white hover:border-brand-gold hover:text-brand-gold transition-colors"
                        >
                          <span>View in Portfolio</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Remote & International Service Highlight */}
      <section className="border-t border-white/10 bg-brand-charcoal py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 rounded-2xl border border-brand-gold/30 bg-brand-black p-8 sm:p-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial text-brand-gold">
                  <Globe className="h-4 w-4" />
                  <span>Nigeria &amp; Worldwide Delivery</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-white">
                  Commissioning From Outside Enugu or Abroad
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-brand-muted">
                  {siteConfig.positioning.remoteSummary}
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 rounded-xl border border-brand-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-luxury text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors"
                >
                  <span>Book Remote Consultation</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA from YAML: "Have a Different Design in Mind?" */}
      <section className="border-t border-white/10 py-24 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 space-y-7">
          <Reveal>
            <p className="text-xs uppercase tracking-editorial text-brand-gold">
              Bespoke Commissions
            </p>
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl font-semibold text-brand-white">
              Have a Different Design in Mind?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-brand-muted sm:text-lg">
              Send us your reference or idea and let us discuss a custom piece.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
              <Link
                href="/book-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-brand-black hover:bg-brand-gold-highlight"
              >
                <span>Start Your Consultation</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={getWhatsAppUrl(
                  "Hello BEEDSTITCHES Fashion, I have a reference design in mind and would like to discuss a custom piece."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-brand-charcoal px-8 py-4 text-xs font-medium uppercase tracking-luxury text-brand-white hover:border-brand-gold hover:text-brand-gold"
              >
                <MessageCircle className="h-4 w-4 text-brand-gold" />
                <span>Send Reference on WhatsApp</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
