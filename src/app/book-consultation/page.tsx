import React, { Suspense } from "react";
import type { Metadata } from "next";
import { MapPin, Phone, MessageCircle, Globe, CheckCircle2 } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Book a Consultation | Bespoke Tailoring & Custom Menswear",
  description:
    "Request an in-person, phone, video, or remote/international tailoring consultation with BEEDSTITCHES Fashion in Enugu, Nigeria.",
  openGraph: {
    title: "Book a Consultation | BEEDSTITCHES Fashion",
    description: siteConfig.booking.intro,
  },
};

export default function BookConsultationPage() {
  return (
    <div className="bg-brand-black text-brand-off-white">
      {/* Header */}
      <section className="border-b border-white/10 pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-editorial text-brand-gold">
              Bespoke Commissions &amp; Tailoring Enquiries
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-6xl font-semibold text-brand-white">
              {siteConfig.booking.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
              {siteConfig.booking.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content: Form + Sidebar Info */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <Suspense
                fallback={
                  <div className="rounded-2xl border border-white/10 bg-brand-charcoal p-10 text-center text-sm uppercase tracking-luxury text-brand-muted">
                    Loading Consultation Request Form...
                  </div>
                }
              >
                <ConsultationForm />
              </Suspense>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              <Reveal>
                <div className="rounded-2xl border border-white/10 bg-brand-charcoal p-7 space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-editorial text-brand-gold">
                    How Booking Works
                  </p>
                  <ul className="space-y-4 text-sm text-brand-muted">
                    {siteConfig.processSteps.map((step) => (
                      <li key={step.number} className="flex items-start gap-3">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand-gold/30 bg-brand-black font-serif text-sm font-semibold text-brand-gold">
                          {step.number}
                        </span>
                        <div>
                          <p className="font-semibold text-brand-white">
                            {step.title}
                          </p>
                          <p className="mt-0.5 text-xs text-brand-muted">
                            {step.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-brand-gold/30 bg-brand-charcoal p-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-editorial text-brand-gold">
                    <Globe className="h-4 w-4" />
                    <span>Remote &amp; Diaspora Clients</span>
                  </div>
                  <p className="text-xs leading-relaxed text-brand-muted">
                    {siteConfig.positioning.remoteSummary}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-brand-off-white pt-1">
                    <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0" />
                    <span>Guided measurement &amp; video consultation</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="rounded-2xl border border-white/10 bg-brand-charcoal p-7 space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-editorial text-brand-gold">
                    Direct Atelier Contact
                  </p>
                  <div className="space-y-3 text-xs text-brand-muted">
                    <p className="flex items-start gap-2.5">
                      <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{siteConfig.contact.address}</span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Phone className="h-4 w-4 text-brand-gold shrink-0" />
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-brand-off-white hover:text-brand-gold"
                      >
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <MessageCircle className="h-4 w-4 text-brand-gold shrink-0" />
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-off-white hover:text-brand-gold"
                      >
                        WhatsApp: {siteConfig.contact.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
