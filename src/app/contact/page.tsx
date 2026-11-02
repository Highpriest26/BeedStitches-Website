import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  Globe,
  ArrowUpRight,
  AtSign,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact BEEDSTITCHES | Enugu Atelier & WhatsApp Enquiries",
  description:
    "Contact BEEDSTITCHES Fashion at No 29 Ogidi Street, Ogui New Layout, Enugu, Nigeria or call/WhatsApp +2348132884507 for bespoke tailoring and fashion training enquiries.",
  openGraph: {
    title: "Contact | BEEDSTITCHES Fashion",
    description:
      "Reach BEEDSTITCHES Fashion in Enugu, Nigeria via phone, WhatsApp, or online consultation booking.",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-brand-black text-brand-off-white">
      {/* Header */}
      <section className="border-b border-white/10 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-editorial text-brand-gold">
              Enugu Atelier &amp; Remote Commissions
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-6xl font-semibold text-brand-white">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
              Reach out to schedule a consultation, discuss a custom outfit, or
              enquire about practical fashion training.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Phone & WhatsApp */}
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-brand-charcoal p-8 space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-gold/30 text-brand-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-editorial text-brand-gold">
                    Direct Line &amp; WhatsApp
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-white">
                    {siteConfig.contact.phoneDisplay}
                  </h2>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    Available for direct telephone calls and WhatsApp messages
                    regarding custom garments, fittings, and training enquiries.
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold py-3.5 text-xs font-semibold uppercase tracking-luxury text-brand-black hover:bg-brand-gold-highlight"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Message on WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 py-3.5 text-xs uppercase tracking-luxury text-brand-off-white hover:border-brand-gold hover:text-brand-gold"
                  >
                    <Phone className="h-3.5 w-3.5 text-brand-gold" />
                    <span>Call {siteConfig.contact.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Atelier Address */}
            <Reveal delay={0.08}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-brand-charcoal p-8 space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-gold/30 text-brand-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-editorial text-brand-gold">
                    Atelier Location
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-white">
                    Enugu, Nigeria
                  </h2>
                  <p className="text-base font-medium text-brand-off-white leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    In-person consultations, measurements, and garment fittings are
                    arranged by appointment at our Ogui New Layout studio.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/book-consultation"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-gold py-3.5 text-xs font-semibold uppercase tracking-luxury text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors"
                  >
                    <span>Request In-Person Appointment</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Social Channels & Remote Service */}
            <Reveal delay={0.16}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-brand-charcoal p-8 space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-gold/30 text-brand-gold">
                    <AtSign className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-editorial text-brand-gold">
                    Social Channels
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-white">
                    Connect With Us
                  </h2>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    Find BEEDSTITCHES on social media using our official handles:
                  </p>

                  {/* Social labels displayed without invented URLs per YAML rule */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-brand-black px-4 py-3 text-xs">
                      <span className="uppercase tracking-luxury text-brand-muted">
                        Instagram
                      </span>
                      <span className="font-medium text-brand-gold">
                        @{siteConfig.contact.social.instagram.handle}
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-brand-black px-4 py-3 text-xs">
                      <span className="uppercase tracking-luxury text-brand-muted">
                        Facebook
                      </span>
                      <span className="font-medium text-brand-gold">
                        {siteConfig.contact.social.facebook.handle}
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-brand-black px-4 py-3 text-xs">
                      <span className="uppercase tracking-luxury text-brand-muted">
                        TikTok
                      </span>
                      <span className="font-medium text-brand-gold">
                        @{siteConfig.contact.social.tiktok.handle}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-brand-muted">
                  <Globe className="h-4 w-4 text-brand-gold shrink-0" />
                  <span>Serving clients across Nigeria &amp; internationally</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="border-t border-white/10 bg-brand-charcoal py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 space-y-6">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-white">
              Ready to Start Your Consultation?
            </h2>
            <p className="mx-auto max-w-xl text-base text-brand-muted">
              Use our online consultation request form to share your outfit
              preferences, event date, and style references.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="pt-2">
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-9 py-4 text-xs font-semibold uppercase tracking-luxury text-brand-black hover:bg-brand-gold-highlight"
              >
                <span>Go to Consultation Form</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
