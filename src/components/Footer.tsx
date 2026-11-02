import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, MessageCircle, Globe, ArrowUpRight } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-gold/20 bg-brand-black pb-28 pt-16 text-brand-off-white lg:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3.5">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-brand-gold/40 bg-brand-black">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-xl font-bold tracking-luxury text-brand-white">
                  BEEDSTITCHES
                </p>
                <p className="text-[11px] uppercase tracking-editorial text-brand-gold">
                  Fashion House • Enugu, Nigeria
                </p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-brand-muted max-w-sm">
              {siteConfig.positioning.summary}
            </p>

            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-brand-charcoal px-3.5 py-2.5 text-xs text-brand-off-white">
              <Globe className="h-3.5 w-3.5 text-brand-gold shrink-0" />
              <span>Bespoke orders in Nigeria &amp; international remote tailoring</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-editorial text-brand-gold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navigation.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-muted transition-colors hover:text-brand-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Bespoke Craft */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-editorial text-brand-gold">
              What We Create
            </h3>
            <ul className="space-y-2.5 text-sm text-brand-muted">
              <li>
                <Link href="/portfolio?category=Kaftans" className="hover:text-brand-gold transition-colors">
                  Kaftans &amp; Luxury Native Wear
                </Link>
              </li>
              <li>
                <Link href="/portfolio?category=Jalabias" className="hover:text-brand-gold transition-colors">
                  Jalabia &amp; Traditional Wear
                </Link>
              </li>
              <li>
                <Link href="/portfolio?category=Two-Piece" className="hover:text-brand-gold transition-colors">
                  Vintage &amp; Two-Piece Outfits
                </Link>
              </li>
              <li>
                <Link href="/portfolio?category=Shirts" className="hover:text-brand-gold transition-colors">
                  Shirts &amp; Contemporary Menswear
                </Link>
              </li>
              <li>
                <Link href="/portfolio?category=Casual+%26+Streetwear" className="hover:text-brand-gold transition-colors">
                  Casual Wear &amp; Streetwear
                </Link>
              </li>
              <li>
                <Link href="/portfolio?category=Cultural+%26+Heritage" className="hover:text-brand-gold transition-colors">
                  Cultural &amp; Heritage Fashion
                </Link>
              </li>
              <li>
                <Link href="/fashion-training" className="hover:text-brand-gold transition-colors">
                  Practical Fashion Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Atelier Contact & Social Handles */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-editorial text-brand-gold">
              Atelier &amp; Enquiries
            </h3>
            <div className="space-y-3 text-sm text-brand-muted">
              <p className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-gold shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-brand-gold transition-colors"
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
                  className="hover:text-brand-gold transition-colors"
                >
                  WhatsApp: {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              {/* Email strictly hidden until verified per YAML specification */}
              {siteConfig.contact.email.verified && (
                <p className="text-brand-muted">
                  Email: {siteConfig.contact.email.supplied}
                </p>
              )}
            </div>

            {/* Social Handles (No invented URLs per YAML rule) */}
            <div className="pt-2 border-t border-white/10">
              <p className="text-[11px] uppercase tracking-luxury text-brand-gold mb-2">
                Social Handles
              </p>
              <div className="space-y-1 text-xs text-brand-muted">
                <p>
                  <span className="text-brand-off-white">Instagram:</span>{" "}
                  @{siteConfig.contact.social.instagram.handle}
                </p>
                <p>
                  <span className="text-brand-off-white">Facebook:</span>{" "}
                  {siteConfig.contact.social.facebook.handle}
                </p>
                <p>
                  <span className="text-brand-off-white">TikTok:</span>{" "}
                  @{siteConfig.contact.social.tiktok.handle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Founder Credit */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-brand-muted sm:flex-row sm:items-center">
          <p>
            &copy; {currentYear} {siteConfig.project.brandName}. All rights reserved. Established {siteConfig.project.establishedYear}.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <span>Founder &amp; Creative Director: {siteConfig.founder.name}</span>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-1 text-brand-gold hover:text-brand-gold-highlight transition-colors"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
