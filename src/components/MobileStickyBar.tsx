"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutGrid,
  Scissors,
  GraduationCap,
  Calendar,
  Menu,
  X,
  MessageCircle,
  ArrowUpRight,
  Phone,
  MapPin,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

const primaryDockItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Portfolio", href: "/portfolio", icon: LayoutGrid },
  { label: "Services", href: "/services", icon: Scissors },
  { label: "Training", href: "/fashion-training", icon: GraduationCap },
  { label: "Book", href: "/book-consultation", icon: Calendar },
];

export function MobileStickyBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Backdrop when the floating footer menu is expanded */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-xs transition-opacity lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Floating Footer Menu Container (Mobile & Tablet < lg) */}
      <div className="fixed bottom-3 left-3 right-3 z-50 mx-auto max-w-md lg:hidden">
        {/* Expanded Floating Menu Sheet (Anchored above the footer dock) */}
        {menuOpen && (
          <div
            role="dialog"
            aria-label="Mobile Navigation Menu"
            className="mb-2.5 overflow-hidden rounded-2xl border border-brand-gold/35 bg-brand-black/95 p-4 shadow-[0_16px_48px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          >
            <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2.5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-editorial text-brand-gold">
                  BEEDSTITCHES Navigation
                </p>
                <p className="text-xs text-brand-muted">
                  Select a page or contact the atelier
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-brand-charcoal text-brand-off-white hover:border-brand-gold hover:text-brand-gold"
                aria-label="Close floating menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* All 7 Site Navigation Routes */}
            <nav
              className="grid grid-cols-2 gap-2"
              aria-label="Mobile Full Navigation"
            >
              {siteConfig.navigation.items.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-xs uppercase tracking-luxury transition-colors ${
                      isActive
                        ? "border-brand-gold bg-brand-gold/15 font-semibold text-brand-gold"
                        : "border-white/10 bg-brand-charcoal/80 text-brand-off-white hover:border-brand-gold/40 hover:text-brand-gold"
                    } ${item.href === "/book-consultation" ? "col-span-2" : ""}`}
                  >
                    <span className="truncate">{item.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-70" />
                  </Link>
                );
              })}
            </nav>

            {/* Quick Action Buttons inside Floating Menu */}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
              <Link
                href="/book-consultation"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-brand-gold py-2.5 text-[11px] font-semibold uppercase tracking-luxury text-brand-black hover:bg-brand-gold-highlight"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Book Fitting</span>
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-brand-gold/40 bg-brand-charcoal py-2.5 text-[11px] font-medium uppercase tracking-luxury text-brand-off-white hover:border-brand-gold"
              >
                <MessageCircle className="h-3.5 w-3.5 text-brand-gold" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Compact Atelier Info */}
            <div className="mt-2.5 flex items-center justify-between rounded-xl border border-white/10 bg-brand-charcoal/60 px-3 py-2 text-[11px] text-brand-muted">
              <span className="flex items-center gap-1.5 truncate">
                <MapPin className="h-3 w-3 shrink-0 text-brand-gold" />
                <span className="truncate">Ogui New Layout, Enugu</span>
              </span>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex shrink-0 items-center gap-1 font-medium text-brand-off-white hover:text-brand-gold"
              >
                <Phone className="h-3 w-3 text-brand-gold" />
                <span>Call</span>
              </a>
            </div>
          </div>
        )}

        {/* Floating Bottom Navigation Dock */}
        <nav
          aria-label="Mobile Floating Footer Menu"
          className="grid grid-cols-6 items-center gap-1 rounded-2xl border border-brand-gold/35 bg-brand-black/95 px-2 py-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.85)] backdrop-blur-xl"
        >
          {primaryDockItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex flex-col items-center justify-center gap-1 rounded-xl py-1.5 text-[10px] font-medium tracking-wide transition-all ${
                  isActive
                    ? "bg-brand-gold text-brand-black font-semibold shadow-xs"
                    : "text-brand-off-white/80 hover:bg-brand-charcoal hover:text-brand-gold"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className=" leading-none">{item.label}</span>
              </Link>
            );
          })}

          {/* Menu Trigger Button inside the Floating Footer Bar */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close floating menu" : "Open full navigation menu"}
            className={`flex flex-col items-center justify-center gap-1 rounded-xl py-1.5 text-[10px] font-medium tracking-wide transition-all ${
              menuOpen || pathname === "/about" || pathname === "/contact"
                ? "border border-brand-gold bg-brand-charcoal text-brand-gold font-semibold"
                : "text-brand-off-white/80 hover:bg-brand-charcoal hover:text-brand-gold"
            }`}
          >
            {menuOpen ? (
              <X className="h-4 w-4 text-brand-gold" />
            ) : (
              <Menu className="h-4 w-4 text-brand-gold" />
            )}
            <span className="leading-none">{menuOpen ? "Close" : "Menu"}</span>
          </button>
        </nav>
      </div>
    </>
  );
}
