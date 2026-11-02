"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  Expand,
  CheckCircle2,
  Play,
} from "lucide-react";
import {
  portfolioFilters,
  portfolioItems,
  craftsmanshipAssets,
  type PortfolioFilterCategory,
  type PortfolioItem,
} from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function PortfolioGallery() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeFilter, setActiveFilter] =
    useState<PortfolioFilterCategory>("All");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    if (
      categoryParam &&
      portfolioFilters.includes(categoryParam as PortfolioFilterCategory)
    ) {
      setActiveFilter(categoryParam as PortfolioFilterCategory);
    }
  }, [categoryParam]);

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) =>
          item.filterCategories.includes(activeFilter)
        );

  const closeModal = useCallback(() => {
    setSelectedItemIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setSelectedItemIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setSelectedItemIndex((prev) => {
      if (prev === null) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  }, [filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, closeModal, showPrev, showNext]);

  const activeModalItem: PortfolioItem | null =
    selectedItemIndex !== null && filteredItems[selectedItemIndex]
      ? filteredItems[selectedItemIndex]
      : null;

  return (
    <div className="space-y-24">
      {/* Filter Bar */}
      <div className="rounded-2xl border border-white/10 bg-brand-charcoal/60 p-4 sm:p-5">
        <div
          className="flex flex-wrap items-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Filter portfolio by garment category"
        >
          {portfolioFilters.map((filter) => {
            const isActive = activeFilter === filter;
            const count =
              filter === "All"
                ? portfolioItems.length
                : portfolioItems.filter((item) =>
                    item.filterCategories.includes(filter)
                  ).length;

            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveFilter(filter);
                  setSelectedItemIndex(null);
                }}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs uppercase tracking-luxury transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                  isActive
                    ? "bg-brand-gold text-brand-black font-semibold"
                    : "border border-white/15 bg-brand-black text-brand-off-white hover:border-brand-gold/50 hover:text-brand-gold"
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`text-[10px] ${
                    isActive ? "text-brand-black/80" : "text-brand-muted"
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lookbook Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, idx) => (
          <Reveal key={item.id} delay={(idx % 3) * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-brand-charcoal transition-colors duration-300 hover:border-brand-gold/40">
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-black">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                {/* Category Badge */}
                <div className="absolute left-4 top-4 rounded-full bg-brand-black/85 backdrop-blur-sm border border-brand-gold/30 px-3.5 py-1 text-[10px] uppercase tracking-luxury text-brand-gold">
                  {item.categoryLabel}
                </div>

                {/* Lightbox Trigger Button */}
                <button
                  type="button"
                  onClick={() => setSelectedItemIndex(idx)}
                  className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-black/80 text-brand-off-white border border-white/20 transition-all hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                  aria-label={`View full look: ${item.title}`}
                >
                  <Expand className="h-4 w-4" />
                </button>
              </div>

              {/* Card Copy & CTA */}
              <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
                <div className="space-y-2.5">
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold text-brand-white group-hover:text-brand-gold transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <Link
                    href={`/book-consultation?service=${encodeURIComponent(
                      item.bookingServiceOption
                    )}&look=${encodeURIComponent(item.title)}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-4 py-2.5 text-xs font-semibold uppercase tracking-luxury text-brand-black transition-colors hover:bg-brand-gold-highlight"
                  >
                    <span>Book a Similar Look</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedItemIndex(idx)}
                    className="rounded-lg px-2 py-1 text-xs uppercase tracking-luxury text-brand-muted hover:text-brand-white transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Behind the Scenes / Craftsmanship & Atelier Media Section */}
      <section className="border-t border-white/10 pt-20">
        <Reveal>
          <div className="max-w-3xl space-y-3 mb-12">
            <p className="text-xs uppercase tracking-editorial text-brand-gold">
              Inside The Atelier
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-brand-white">
              Craftsmanship, Sketching &amp; Finishing Details
            </h2>
            <p className="text-base text-brand-muted leading-relaxed">
              Every BEEDSTITCHES piece begins on the drafting table and moves through
              disciplined fabric cutting, embroidery alignment, pressing, and quality inspection.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {craftsmanshipAssets.map((asset, index) => (
            <Reveal key={asset.id} delay={index * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-brand-charcoal overflow-hidden">
                <div className="relative aspect-[4/5] w-full bg-brand-black overflow-hidden">
                  {asset.type === "image" ? (
                    <Image
                      src={asset.src}
                      alt={asset.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="relative h-full w-full">
                      <video
                        src={asset.src}
                        poster={asset.poster}
                        muted
                        loop
                        playsInline
                        controls
                        preload="metadata"
                        className="h-full w-full object-cover"
                        aria-label={asset.alt}
                      />
                      <div className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-brand-black/80 border border-brand-gold/30 px-3 py-1 text-[10px] uppercase tracking-luxury text-brand-gold">
                        <Play className="h-3 w-3 fill-brand-gold" />
                        <span>Atelier Process Clip</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-brand-white">
                    {asset.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-brand-muted">
                    {asset.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black/95 p-4 sm:p-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-y-auto rounded-2xl border border-brand-gold/30 bg-brand-charcoal lg:flex-row lg:overflow-hidden">
            {/* Close button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-black/90 text-brand-white border border-white/20 hover:border-brand-gold hover:text-brand-gold"
              aria-label="Close lookbook preview"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image Side */}
            <div className="relative aspect-[3/4] w-full bg-brand-black lg:w-7/12">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain"
              />
              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-black/80 text-brand-white border border-white/20 hover:border-brand-gold hover:text-brand-gold"
                    aria-label="Previous look"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-black/80 text-brand-white border border-white/20 hover:border-brand-gold hover:text-brand-gold"
                    aria-label="Next look"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Details Side */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:w-5/12">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-editorial text-brand-gold">
                    {activeModalItem.categoryLabel}
                  </p>
                  <h2
                    id="lightbox-title"
                    className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-brand-white"
                  >
                    {activeModalItem.title}
                  </h2>
                </div>

                <p className="text-sm leading-relaxed text-brand-off-white/90">
                  {activeModalItem.shortDescription}
                </p>

                <div className="space-y-2.5 border-t border-white/10 pt-5">
                  <p className="text-xs uppercase tracking-luxury text-brand-gold">
                    Garment Highlights
                  </p>
                  <ul className="space-y-2 text-sm text-brand-muted">
                    {activeModalItem.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                <Link
                  href={`/book-consultation?service=${encodeURIComponent(
                    activeModalItem.bookingServiceOption
                  )}&look=${encodeURIComponent(activeModalItem.title)}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold py-3.5 text-xs font-semibold uppercase tracking-luxury text-brand-black hover:bg-brand-gold-highlight"
                >
                  <span>Book a Similar Look</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <p className="text-center text-[11px] text-brand-muted">
                  Custom tailored to your measurements in Enugu or shipped remotely.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
