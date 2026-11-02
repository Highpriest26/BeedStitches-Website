import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-brand-black px-4 py-24 text-center text-brand-off-white">
      <p className="text-xs uppercase tracking-editorial text-brand-gold">
        404 • Page Not Found
      </p>
      <h1 className="mt-3 font-serif text-4xl sm:text-6xl text-brand-white">
        This Page Could Not Be Found
      </h1>
      <p className="mt-4 max-w-md text-sm text-brand-muted leading-relaxed">
        The page you are looking for may have moved. Explore our portfolio of
        bespoke garments or request a tailoring consultation below.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-luxury text-brand-black hover:bg-brand-gold-highlight"
        >
          <span>Return Home</span>
        </Link>
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-xs uppercase tracking-luxury text-brand-white hover:border-brand-gold hover:text-brand-gold"
        >
          <span>Explore Portfolio</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
