import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  Globe,
  Scissors,
  GraduationCap,
  Sparkles,
  Camera,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";
import { getHomeSelectedWork } from "@/data/portfolio";
import { serviceCategories } from "@/data/services";
import { FounderPortraitSlot } from "@/components/FounderPortraitSlot";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  const selectedWork = getHomeSelectedWork();
  const previewServices = serviceCategories.slice(0, 6);

  return (
    <div className="bg-brand-black text-brand-off-white">
      {/* 1. HERO SECTION — Vintage Sewing Machine & Luxury Cloth Fabrics Aesthetic */}
      <section className="relative min-h-[90vh] w-full overflow-hidden border-b border-white/10">
        {/* Background Vintage Sewing Machine & Draped Cloth Fabrics with Restrained Dark Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/assets/beedstitches/derived/vintage-sewing-machine-fabrics-hero.jpg"
            alt="BEEDSTITCHES bespoke tailoring vintage sewing machine, draped luxury cloth fabrics, and brass shears"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/45" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal>
                <div className="inline-flex items-center gap-3 rounded-full border border-brand-gold/35 bg-brand-black/75 backdrop-blur-sm px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  <span className="text-[11px] font-semibold uppercase tracking-editorial text-brand-gold">
                    BEEDSTITCHES FASHION
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-brand-white sm:text-6xl lg:text-7xl">
                  Crafted With Precision.{" "}
                  <span className="italic font-normal text-brand-gold">
                    Designed To Be Remembered.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="max-w-xl text-base leading-relaxed text-brand-off-white/90 sm:text-lg">
                  Bespoke African menswear, luxury native wear and contemporary
                  garments created with intention, comfort and refined finishing.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                  <Link
                    href="/book-consultation"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-gold px-8 py-4 text-xs font-semibold uppercase tracking-luxury text-brand-black transition-all hover:bg-brand-gold-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-highlight"
                  >
                    <span>Book a Consultation</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-brand-black/60 backdrop-blur-sm px-8 py-4 text-xs font-medium uppercase tracking-luxury text-brand-white transition-all hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                  >
                    <span>View Our Work</span>
                  </Link>
                </div>
              </Reveal>

              {/* Verified Credibility Pillars */}
              <Reveal delay={0.26}>
                <div className="grid grid-cols-3 gap-4 border-t border-white/15 pt-8 max-w-lg">
                  <div className="rounded-xl border border-white/10 bg-brand-charcoal/70 p-3.5 backdrop-blur-sm">
                    <p className="font-serif text-xl sm:text-2xl font-semibold text-brand-gold">
                      8+ Years
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-luxury text-brand-muted">
                      Tailoring Craft
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-brand-charcoal/70 p-3.5 backdrop-blur-sm">
                    <p className="font-serif text-xl sm:text-2xl font-semibold text-brand-gold">
                      Est. 2018
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-luxury text-brand-muted">
                      Enugu, Nigeria
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-brand-charcoal/70 p-3.5 backdrop-blur-sm">
                    <p className="font-serif text-xl sm:text-2xl font-semibold text-brand-gold">
                      Global
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-luxury text-brand-muted">
                      Remote Orders
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Secondary Editorial Frame on Desktop: Vintage Sewing Machine, Cloth Fabrics & Atelier */}
            <div className="hidden lg:block lg:col-span-5">
              <Reveal delay={0.18}>
                <div className="space-y-4">
                  {/* Main Vintage Machine & Draped Fabrics Card */}
                  <div className="relative overflow-hidden rounded-2xl border border-brand-gold/35 bg-brand-charcoal p-3 shadow-2xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-brand-black">
                      <Image
                        src="/assets/beedstitches/derived/vintage-sewing-machine-fabrics-hero.jpg"
                        alt="Vintage black and gold sewing machine with luxury suiting and brocade cloth fabrics"
                        fill
                        priority
                        sizes="460px"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-brand-gold/40 bg-brand-black/85 px-3 py-1 text-[10px] uppercase tracking-luxury text-brand-gold backdrop-blur-sm">
                        <Sparkles className="h-3 w-3" />
                        <span>The Tailoring Atelier</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between px-1 py-0.5 text-[11px] uppercase tracking-luxury text-brand-muted">
                      <span>Fine Cloth Fabrics &amp; Precision Craft</span>
                      <span className="text-brand-gold">Enugu &amp; Worldwide</span>
                    </div>
                  </div>

                  {/* Two Supporting Rounded Mini-Cards: Studio Fabric Bundles + Founder Look */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="overflow-hidden rounded-2xl border border-white/15 bg-brand-charcoal p-2.5">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-brand-black">
                        <Image
                          src="/assets/beedstitches/WhatsApp Image 2026-10-24 at 8.05.02 AM (19).jpeg"
                          alt="Neatly cut and bundled cloth fabrics on the BEEDSTITCHES cutting table"
                          fill
                          sizes="220px"
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-2 px-1 text-[10px] uppercase tracking-luxury text-brand-off-white">
                        Curated Cloth Fabrics
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-white/15 bg-brand-charcoal p-2.5">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-brand-black">
                        <Image
                          src="/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (29).jpeg"
                          alt="Founder Iwunna Uchenna Michael with signature BEEDSTITCHES luxury package"
                          fill
                          sizes="220px"
                          className="object-cover object-top"
                        />
                      </div>
                      <p className="mt-2 px-1 text-[10px] uppercase tracking-luxury text-brand-gold">
                        Bespoke Presentation
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PORTFOLIO SECTION ("Selected Work") */}
      <section className="py-24 sm:py-28 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end mb-14">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-editorial text-brand-gold">
                  Lookbook &amp; Commissions
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-brand-white">
                  Selected Work
                </h2>
                <p className="text-base text-brand-muted max-w-xl">
                  A curated selection of BEEDSTITCHES garments.
                </p>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-gold/40 px-6 py-3.5 text-xs font-medium uppercase tracking-luxury text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
              >
                <span>Explore Portfolio</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          {/* Editorial Asymmetric Grid for Selected Work */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
            {/* Lead Feature Card (Spans 7 cols on desktop) */}
            {selectedWork[0] && (
              <Reveal className="lg:col-span-7">
                <article className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-brand-charcoal overflow-hidden hover:border-brand-gold/40 transition-colors">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-black">
                    <Image
                      src={selectedWork[0].image}
                      alt={selectedWork[0].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-brand-black/85 border border-brand-gold/30 px-3.5 py-1 text-[10px] uppercase tracking-luxury text-brand-gold">
                      {selectedWork[0].categoryLabel}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-white">
                        {selectedWork[0].title}
                      </h3>
                      <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                        {selectedWork[0].shortDescription}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href={`/book-consultation?service=${encodeURIComponent(
                          selectedWork[0].bookingServiceOption
                        )}&look=${encodeURIComponent(selectedWork[0].title)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-luxury text-brand-gold hover:text-brand-gold-highlight"
                      >
                        <span>Book a Similar Look</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href="/portfolio"
                        className="text-xs uppercase tracking-luxury text-brand-muted hover:text-brand-white"
                      >
                        Full Lookbook
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            )}

            {/* Right Column Stack (Spans 5 cols on desktop) */}
            {selectedWork[1] && (
              <Reveal delay={0.1} className="lg:col-span-5">
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-brand-charcoal overflow-hidden hover:border-brand-gold/40 transition-colors">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-black">
                    <Image
                      src={selectedWork[1].image}
                      alt={selectedWork[1].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-brand-black/85 border border-brand-gold/30 px-3.5 py-1 text-[10px] uppercase tracking-luxury text-brand-gold">
                      {selectedWork[1].categoryLabel}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-white">
                        {selectedWork[1].title}
                      </h3>
                      <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                        {selectedWork[1].shortDescription}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/10">
                      <Link
                        href={`/book-consultation?service=${encodeURIComponent(
                          selectedWork[1].bookingServiceOption
                        )}&look=${encodeURIComponent(selectedWork[1].title)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-luxury text-brand-gold hover:text-brand-gold-highlight"
                      >
                        <span>Book a Similar Look</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            )}
          </div>

          {/* Second Row of Selected Work (3 Equal Editorial Columns) */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {selectedWork.slice(2, 5).map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.08}>
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-brand-charcoal overflow-hidden hover:border-brand-gold/40 transition-colors">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-black">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-brand-black/85 border border-brand-gold/30 px-3.5 py-1 text-[10px] uppercase tracking-luxury text-brand-gold">
                      {item.categoryLabel}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-brand-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-brand-muted leading-relaxed">
                        {item.shortDescription}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/10">
                      <Link
                        href={`/book-consultation?service=${encodeURIComponent(
                          item.bookingServiceOption
                        )}&look=${encodeURIComponent(item.title)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-luxury text-brand-gold hover:text-brand-gold-highlight"
                      >
                        <span>Book a Similar Look</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BRAND STATEMENT & CRAFTSMANSHIP SECTION ("More Than Clothing") */}
      <section className="py-24 sm:py-28 bg-brand-charcoal border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial text-brand-gold">
                  <Scissors className="h-3.5 w-3.5" />
                  <span>Design Philosophy &amp; Atelier</span>
                </div>
                <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-brand-white">
                  More Than Clothing
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <blockquote className="rounded-r-xl border-l-2 border-brand-gold bg-brand-black/40 py-3 pl-5 pr-4 font-serif text-xl sm:text-2xl italic leading-relaxed text-brand-off-white">
                  &ldquo;{siteConfig.positioning.philosophy}&rdquo;
                </blockquote>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="text-base leading-relaxed text-brand-muted">
                  {siteConfig.positioning.philosophyExtended}
                </p>
                <p className="mt-4 text-base leading-relaxed text-brand-muted">
                  {siteConfig.positioning.experienceSummary}
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
                  {[
                    "Intentional design & fabric selection",
                    "Accurate cutting & clean stitching",
                    "Supervised production & quality control",
                    "Refined finishing & wearer comfort",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-brand-black px-3.5 py-2.5 text-xs text-brand-off-white"
                    >
                      <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Authentic Craftsmanship Assets ((20).jpeg + upright (24).jpeg) */}
            <div className="lg:col-span-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-white/10 bg-brand-black p-3">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                    <Image
                      src="/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (20).jpeg"
                      alt="BEEDSTITCHES sewing machine, packaging and hand-drawn garment concept sketch"
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 px-1 text-[11px] uppercase tracking-luxury text-brand-muted">
                    01 • Concept Sketching &amp; Pattern Architecture
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18} className="sm:mt-10">
                <div className="rounded-2xl border border-white/10 bg-brand-black p-3">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                    <Image
                      src="/assets/beedstitches/derived/garment-finishing-tag-upright.jpeg"
                      alt="Close-up garment construction and neckline finishing with BEEDSTITCHES hang tag"
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 px-1 text-[11px] uppercase tracking-luxury text-brand-muted">
                    02 • Precision Stitching &amp; Quality Inspection
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW SECTION ("What We Create" - max 6 categories) */}
      <section className="py-24 sm:py-28 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end mb-14">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-editorial text-brand-gold">
                  Bespoke Capabilities
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-brand-white">
                  What We Create
                </h2>
                <p className="text-base text-brand-muted max-w-xl">
                  From regal native wear and traditional jalabias to contemporary
                  two-piece sets and smart-casual tailoring.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-brand-gold/40 px-6 py-3.5 text-xs font-medium uppercase tracking-luxury text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {previewServices.map((category, idx) => (
              <Reveal key={category.id} delay={(idx % 3) * 0.08}>
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-brand-charcoal p-7 transition-colors hover:border-brand-gold/40">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="font-serif text-lg font-semibold text-brand-gold">
                        {category.number}
                      </span>
                      <span className="rounded-full border border-white/10 bg-brand-black px-3 py-1 text-[10px] uppercase tracking-editorial text-brand-muted">
                        Bespoke &amp; Custom
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-semibold text-brand-white group-hover:text-brand-gold transition-colors">
                      {category.name}
                    </h3>

                    <p className="text-xs leading-relaxed text-brand-muted">
                      {category.summary}
                    </p>

                    <ul className="space-y-2 pt-2 text-xs text-brand-off-white/90">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                    <Link
                      href={`/book-consultation?service=${encodeURIComponent(
                        category.bookingOption
                      )}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-luxury text-brand-gold hover:text-brand-gold-highlight"
                    >
                      <span>Commission Piece</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS / PROCESS SECTION ("From Idea to Finished Garment") */}
      <section className="py-24 sm:py-28 bg-brand-charcoal border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl space-y-3 mb-14">
              <p className="text-xs uppercase tracking-editorial text-brand-gold">
                The Bespoke Process
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-brand-white">
                From Idea to Finished Garment
              </h2>
              <p className="text-base text-brand-muted">
                A clear, structured tailoring experience whether you visit our
                atelier in Enugu or commission your wardrobe remotely.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-brand-black p-7">
                  <div className="space-y-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-gold/30 bg-brand-charcoal font-serif text-2xl font-semibold text-brand-gold">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-brand-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-muted">
                      {step.text}
                    </p>
                  </div>
                  <div className="mt-6 h-[1px] w-12 bg-brand-gold/40" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Remote & International Clients Banner */}
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-brand-gold/30 bg-brand-black p-6 sm:p-8 lg:flex-row lg:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-gold/30 bg-brand-charcoal text-brand-gold">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-semibold text-brand-white">
                    Remote &amp; International Custom Orders
                  </h3>
                  <p className="text-sm text-brand-muted max-w-2xl">
                    {siteConfig.positioning.remoteSummary}
                  </p>
                </div>
              </div>
              <Link
                href="/book-consultation?service=Custom+Design"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-brand-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-luxury text-brand-black hover:bg-brand-gold-highlight"
              >
                <span>Start Remote Order</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. FOUNDER SECTION ("Meet the Designer") */}
      <section className="py-24 sm:py-28 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <FounderPortraitSlot />
            </Reveal>

            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <p className="text-xs uppercase tracking-editorial text-brand-gold">
                  Leadership &amp; Craft
                </p>
                <h2 className="mt-2 font-serif text-4xl sm:text-5xl font-semibold text-brand-white">
                  Meet the Designer
                </h2>
                <p className="mt-2 font-serif text-2xl font-medium text-brand-gold">
                  {siteConfig.founder.name}
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.founder.titles.map((title) => (
                    <span
                      key={title}
                      className="rounded-full border border-white/15 bg-brand-charcoal px-3.5 py-1.5 text-[11px] uppercase tracking-luxury text-brand-off-white"
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="text-base leading-relaxed text-brand-off-white/90">
                  {siteConfig.founder.homeSummary}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                  Since founding BEEDSTITCHES in {siteConfig.project.establishedYear},
                  Michael has combined bespoke client commissions with strict garment
                  production supervision and hands-on mentorship for emerging tailors.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-xl border border-brand-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-luxury text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
                  >
                    <span>About Michael</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FASHION TRAINING SECTION ("Learn the Craft") */}
      <section className="py-24 sm:py-28 bg-brand-charcoal border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-black px-4 py-1.5 text-xs uppercase tracking-editorial text-brand-gold">
                  <GraduationCap className="h-4 w-4" />
                  <span>Fashion Education &amp; Mentorship</span>
                </div>
                <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold text-brand-white">
                  Learn the Craft
                </h2>
                <p className="mt-3 text-base leading-relaxed text-brand-off-white/90 max-w-xl">
                  {siteConfig.fashionTraining.homeBody}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted max-w-xl">
                  {siteConfig.fashionTraining.intro}
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 pt-2">
                  {siteConfig.fashionTraining.proofPoints.map((proof) => (
                    <div
                      key={proof}
                      className="rounded-2xl border border-brand-gold/25 bg-brand-black p-4"
                    >
                      <CheckCircle2 className="h-4 w-4 text-brand-gold mb-2" />
                      <p className="text-xs font-medium text-brand-white leading-snug">
                        {proof}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="pt-2">
                  <Link
                    href="/fashion-training"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-7 py-4 text-xs font-semibold uppercase tracking-luxury text-brand-black transition-colors hover:bg-brand-gold-highlight"
                  >
                    <span>Explore Fashion Training</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.12}>
                <div className="rounded-2xl border border-white/10 bg-brand-black p-7 space-y-5">
                  <p className="text-xs uppercase tracking-editorial text-brand-gold">
                    Practical Curriculum Areas
                  </p>
                  <ul className="space-y-3 text-sm text-brand-off-white">
                    {siteConfig.fashionTraining.curriculum.map((item) => (
                      <li
                        key={item.number}
                        className="flex items-center justify-between border-b border-white/10 pb-2.5"
                      >
                        <span>{item.title}</span>
                        <span className="font-serif font-semibold text-brand-gold">
                          {item.number}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Preview Slots for Students Trained & Graduated Apprentices */}
          <Reveal delay={0.18}>
            <div className="rounded-2xl border border-white/10 bg-brand-black p-6 sm:p-8 space-y-6">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs uppercase tracking-editorial text-brand-gold">
                    Mentorship Archive • 15+ Students &amp; Apprentices Trained
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-semibold text-brand-white">
                    Students in Training &amp; Graduated Alumni Showcase
                  </h3>
                </div>
                <Link
                  href="/fashion-training#student-gallery"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-brand-gold/40 px-4 py-2.5 text-xs uppercase tracking-luxury text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors"
                >
                  <span>View Training Gallery</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col justify-between rounded-xl border border-dashed border-brand-gold/35 bg-brand-charcoal/70 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-black px-3 py-1 text-[10px] uppercase tracking-luxury text-brand-gold">
                      <Camera className="h-3 w-3" />
                      <span>Practical Workshop Gallery Slot</span>
                    </span>
                    <span className="text-xs text-brand-muted">In-Studio Sessions</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-brand-white">
                      Students &amp; Apprentices in Training
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-brand-muted">
                      Dedicated gallery space for workshop photos of trainees practicing pattern cutting, machine stitching, and garment construction.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between rounded-xl border border-dashed border-brand-gold/35 bg-brand-charcoal/70 p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-black px-3 py-1 text-[10px] uppercase tracking-luxury text-brand-gold">
                      <GraduationCap className="h-3.5 w-3.5" />
                      <span>Graduated Alumni Gallery Slot</span>
                    </span>
                    <span className="text-xs text-brand-muted">15+ Graduates</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-brand-white">
                      Graduated Students &amp; Certified Cohort
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-brand-muted">
                      Dedicated gallery space for graduation portraits and completed bespoke garments crafted by graduated BEEDSTITCHES apprentices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION ("Ready To Create Something Made For You?") */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/beedstitches/WhatsApp Image 2026-10-23 at 1.11.41 PM (17).jpeg"
            alt="BEEDSTITCHES bespoke ceremonial group tailoring"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/85 to-brand-black" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 space-y-8">
          <Reveal>
            <p className="text-xs uppercase tracking-editorial text-brand-gold">
              Bespoke Commissions • Enugu &amp; Worldwide
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-6xl font-semibold text-brand-white">
              Ready To Create Something Made For You?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-brand-muted sm:text-lg">
              Start with a consultation and tell us what you have in mind.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-2">
              <Link
                href="/book-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-9 py-4 text-xs font-semibold uppercase tracking-luxury text-brand-black transition-colors hover:bg-brand-gold-highlight"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-brand-charcoal px-9 py-4 text-xs font-medium uppercase tracking-luxury text-brand-white transition-colors hover:border-brand-gold hover:text-brand-gold"
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
