import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

interface FounderPortraitSlotProps {
  className?: string;
}

/**
 * Displays the Founder & Creative Director's portrait with rounded luxury framing
 * and brand attribution badge.
 */
export function FounderPortraitSlot({ className = "" }: FounderPortraitSlotProps) {
  if (siteConfig.founder.portraitAvailable && siteConfig.founder.portraitSrc) {
    return (
      <div
        className={`group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-brand-gold/30 bg-brand-charcoal p-3 shadow-2xl ${className}`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-brand-black">
          <Image
            src={siteConfig.founder.portraitSrc}
            alt={`${siteConfig.founder.name} — Founder & Creative Director of BEEDSTITCHES Fashion`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />

          {/* Top Pill Badge */}
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-black/85 px-3.5 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span className="text-[10px] font-semibold uppercase tracking-editorial text-brand-gold">
              Founder &amp; Creative Director
            </span>
          </div>

          {/* Bottom Attribution Card */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-brand-black/85 p-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-brand-gold/60 bg-brand-black">
                <Image
                  src={siteConfig.logo.src}
                  alt={siteConfig.logo.alt}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-base font-semibold text-brand-white">
                  {siteConfig.founder.name}
                </p>
                <p className="text-[11px] text-brand-gold">
                  Est. {siteConfig.project.establishedYear} • {siteConfig.project.experienceYears} Years Craftsmanship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-brand-gold/30 bg-brand-charcoal ${className}`}
    >
      <Image
        src="/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (20).jpeg"
        alt="BEEDSTITCHES atelier design sketch, sewing machine, and brand packaging"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover opacity-35 transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-between p-6 sm:p-8 text-center">
        <div className="w-full flex items-center justify-between border-b border-brand-gold/20 pb-3 text-[11px] uppercase tracking-editorial text-brand-gold">
          <span>Enugu, Nigeria</span>
          <span>Est. {siteConfig.project.establishedYear}</span>
        </div>

        <div className="my-auto flex flex-col items-center space-y-4 py-6">
          <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full border-2 border-brand-gold/60 bg-brand-black shadow-2xl">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          <div className="space-y-1.5">
            <p className="text-[11px] uppercase tracking-editorial text-brand-gold">
              Creative Direction &amp; Atelier
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-white">
              {siteConfig.founder.name}
            </h3>
            <p className="text-xs text-brand-muted max-w-xs mx-auto">
              Founder &amp; Creative Director • Fashion Designer • Certified Fashion Educator
            </p>
          </div>
        </div>

        <div className="w-full border-t border-brand-gold/20 pt-3 flex items-center justify-between text-[11px] text-brand-muted">
          <span>{siteConfig.project.experienceYears} Years Craftsmanship</span>
          <span className="text-brand-gold">15+ Apprentices Trained</span>
        </div>
      </div>
    </div>
  );
}
