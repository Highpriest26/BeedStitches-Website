import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Scissors,
  ShieldCheck,
  GraduationCap,
  Globe,
  MessageCircle,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import { FounderPortraitSlot } from "@/components/FounderPortraitSlot";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About BEEDSTITCHES | Iwunna Uchenna Michael & Our Craftsmanship Story",
  description:
    "Discover the story of BEEDSTITCHES Fashion, established in 2018 by Founder & Creative Director Iwunna Uchenna Michael in Enugu, Nigeria. Over 8 years of bespoke tailoring and fashion education.",
  openGraph: {
    title: "About BEEDSTITCHES Fashion",
    description: siteConfig.founder.summary,
  },
};

export default function AboutPage() {
  return (
    <div className="bg-brand-black text-brand-off-white">
      {/* Page Header */}
      <section className="border-b border-white/10 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-editorial text-brand-gold">
              Established {siteConfig.project.establishedYear} • Enugu, Nigeria
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-6xl font-semibold text-brand-white">
              About BEEDSTITCHES
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
              {siteConfig.positioning.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 1: Brand Story */}
      <section className="py-20 sm:py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <p className="text-xs uppercase tracking-editorial text-brand-gold">
                  01 • Brand Story
                </p>
                <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-semibold text-brand-white">
                  A Nigerian Fashion House Built on Intention
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-base leading-relaxed text-brand-off-white/90">
                  Established in {siteConfig.project.establishedYear} in Enugu,
                  Nigeria, <strong className="text-brand-white">BEEDSTITCHES Fashion</strong>{" "}
                  was created to serve men who value garments that speak through
                  clean construction, dignified silhouette, and unmistakable
                  craftsmanship.
                </p>
                <p className="mt-4 text-base leading-relaxed text-brand-muted">
                  From bespoke kaftans, senator-style native wear, and flowing
                  jalabias to vintage two-piece outfits, statement shirts, and
                  contemporary streetwear, our atelier approaches every commission
                  with the same standard: a garment must look refined from a
                  distance, feel comfortable in motion, and hold its structure up
                  close.
                </p>
                <p className="mt-4 text-base leading-relaxed text-brand-muted">
                  {siteConfig.positioning.remoteSummary}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="lg:col-span-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-brand-charcoal p-3">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-brand-black">
                    <Image
                      src="/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (18).jpeg"
                      alt="Founder Iwunna Uchenna Michael wearing bespoke olive B33D tracksuit"
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2.5 px-1 text-[11px] uppercase tracking-luxury text-brand-muted">
                    Creative Direction &amp; Contemporary Design
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-brand-charcoal p-3 sm:mt-8">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-brand-black">
                    <Image
                      src="/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (19).jpeg"
                      alt="Coordinated teal African traditional outfits by BEEDSTITCHES"
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2.5 px-1 text-[11px] uppercase tracking-luxury text-brand-muted">
                    Contemporary Heritage Tailoring
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: Design Philosophy */}
      <section className="py-20 sm:py-24 bg-brand-charcoal border-b border-white/10">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 space-y-6">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-brand-black/60 p-8 sm:p-12">
              <p className="text-xs uppercase tracking-editorial text-brand-gold">
                02 • Design Philosophy
              </p>
              <blockquote className="mt-4 font-serif text-2xl sm:text-4xl italic leading-tight text-brand-white">
                &ldquo;{siteConfig.positioning.philosophy}&rdquo;
              </blockquote>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-brand-muted sm:text-lg">
                {siteConfig.positioning.philosophyExtended}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: Meet the Founder */}
      <section className="py-20 sm:py-28 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <FounderPortraitSlot />
            </Reveal>

            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <p className="text-xs uppercase tracking-editorial text-brand-gold">
                  03 • Meet the Founder
                </p>
                <h2 className="mt-2 font-serif text-4xl sm:text-5xl font-semibold text-brand-white">
                  {siteConfig.founder.name}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {siteConfig.founder.titles.map((title) => (
                    <span
                      key={title}
                      className="rounded-full border border-brand-gold/30 bg-brand-charcoal px-3.5 py-1.5 text-xs uppercase tracking-luxury text-brand-gold"
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-base leading-relaxed text-brand-off-white/90">
                  {siteConfig.founder.summary}
                </p>
                <p className="mt-4 text-base leading-relaxed text-brand-muted">
                  Over more than eight years in garment making and creative
                  direction, Michael has guided clients through personal wardrobe
                  commissions, ceremonial attire, and custom collections—while
                  simultaneously supervising workshop production standards and
                  mentoring the next generation of tailors in Enugu.
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
                  {siteConfig.positioning.differentiators.map((diff) => (
                    <div
                      key={diff}
                      className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-brand-charcoal p-3.5 text-xs text-brand-off-white"
                    >
                      <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{diff}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4, 5, 6: 8+ Years of Craftsmanship, Fashion Education & Mentorship, Quality & Production Standards */}
      <section className="py-20 sm:py-28 bg-brand-charcoal border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* 4. 8+ Years of Craftsmanship */}
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-brand-black p-8 space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-gold/30 text-brand-gold">
                    <Scissors className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-editorial text-brand-gold">
                    04 • Experience
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-white">
                    8+ Years of Craftsmanship
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    {siteConfig.positioning.experienceSummary}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4 text-xs uppercase tracking-luxury text-brand-gold">
                  Established {siteConfig.project.establishedYear} • Enugu
                </div>
              </div>
            </Reveal>

            {/* 5. Fashion Education & Mentorship */}
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-brand-black p-8 space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-gold/30 text-brand-gold">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-editorial text-brand-gold">
                    05 • Mentorship
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-white">
                    Fashion Education &amp; Mentorship
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    As a Certified Fashion Educator, {siteConfig.founder.name} has
                    trained at least 15 students and apprentices in practical fabric
                    selection, pattern cutting, machine stitching, and professional
                    garment finishing.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <Link
                    href="/fashion-training"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-luxury text-brand-gold hover:text-brand-gold-highlight"
                  >
                    <span>Explore Fashion Training</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* 6. Quality & Production Standards */}
            <Reveal delay={0.18}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-brand-black p-8 space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-gold/30 text-brand-gold">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-editorial text-brand-gold">
                    06 • Supervision
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-white">
                    Quality &amp; Production Standards
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    Exceptional garments are built through intentional design,
                    quality fabrics, accurate cutting, clean stitching, strong
                    construction, refined finishing, and rigorous inspection before
                    client fitting or delivery.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4 flex items-center gap-2 text-xs text-brand-gold">
                  <Globe className="h-3.5 w-3.5" />
                  <span>Local &amp; International Quality Control</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 space-y-6">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-brand-white">
              Experience BEEDSTITCHES Tailoring
            </h2>
            <p className="mx-auto max-w-xl text-base text-brand-muted">
              Begin with a personal consultation in Enugu or remotely from anywhere
              in the world.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
              <Link
                href="/book-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-brand-black hover:bg-brand-gold-highlight"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-brand-charcoal px-8 py-4 text-xs font-medium uppercase tracking-luxury text-brand-white hover:border-brand-gold hover:text-brand-gold"
              >
                <MessageCircle className="h-4 w-4 text-brand-gold" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
