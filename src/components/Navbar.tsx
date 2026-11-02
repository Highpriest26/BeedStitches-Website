"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-md border-b border-brand-gold/20 py-3"
          : "bg-brand-black/90 backdrop-blur-sm border-b border-white/10 py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg"
          aria-label="BEEDSTITCHES Fashion Home"
        >
          <div className="relative h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-full border border-brand-gold/40 bg-brand-black transition-transform duration-300 group-hover:scale-105">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-luxury text-brand-white">
              BEEDSTITCHES
            </span>
            <span className="text-[10px] uppercase tracking-editorial text-brand-gold">
              Fashion House • Est. {siteConfig.project.establishedYear}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-7"
          aria-label="Primary Navigation"
        >
          {siteConfig.navigation.items
            .filter((item) => item.href !== "/book-consultation")
            .map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 text-xs uppercase tracking-luxury transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-md ${
                    isActive
                      ? "text-brand-gold font-semibold"
                      : "text-brand-off-white/80 hover:text-brand-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[1.5px] w-full rounded-full bg-brand-gold" />
                  )}
                </Link>
              );
            })}
        </nav>

        {/* Desktop Persistent CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-xs uppercase tracking-luxury text-brand-off-white transition-all duration-200 hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <MessageCircle className="h-3.5 w-3.5 text-brand-gold" />
            <span>{siteConfig.navigation.secondaryCta}</span>
          </a>
          <Link
            href="/book-consultation"
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold uppercase tracking-luxury transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-highlight ${
              pathname === "/book-consultation"
                ? "bg-brand-gold-highlight text-brand-black"
                : "bg-brand-gold text-brand-black hover:bg-brand-gold-highlight"
            }`}
          >
            <span>{siteConfig.navigation.desktopPrimaryCta}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Quick Action (Top Menu Button Removed — Navigation is in the Floating Footer Menu) */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-brand-gold/35 bg-brand-charcoal text-brand-gold transition-colors hover:border-brand-gold"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Link
            href="/book-consultation"
            className="rounded-xl bg-brand-gold px-3.5 py-2 text-[11px] font-semibold uppercase tracking-luxury text-brand-black transition-colors hover:bg-brand-gold-highlight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            {siteConfig.navigation.mobilePrimaryCta}
          </Link>
        </div>
      </div>
    </header>
  );
}
