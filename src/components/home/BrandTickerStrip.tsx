"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BrandItem {
  id: string;
  initials: string;
  name: string;
  category: string;
  accentNote: string;
  href: string;
}

const BRANDS: BrandItem[] = [
  {
    id: "blue-whale",
    initials: "BW",
    name: "BLUE WHALE",
    category: "Crafted Coastal Whisky",
    accentNote: "Smooth Voyage",
    href: "/brands",
  },
  {
    id: "elite-house",
    initials: "EH",
    name: "ELITE HOUSE",
    category: "Premium Blended Whisky",
    accentNote: "Double Wood Matured",
    href: "/brands",
  },
  {
    id: "harison-premium",
    initials: "HP",
    name: "HARISON PREMIUM",
    category: "Royal Reserve Whisky",
    accentNote: "The King’s Cask",
    href: "/brands",
  },
  {
    id: "7night",
    initials: "7N",
    name: "7NIGHT WHISKEY",
    category: "Distinctive Grain Blend",
    accentNote: "Smooth & Rich",
    href: "/brands",
  },
  {
    id: "midnight-blues",
    initials: "MB",
    name: "MIDNIGHT BLUES",
    category: "Deep Spiced Dark Rum",
    accentNote: "Cellar Reserve",
    href: "/brands",
  },
  {
    id: "hotbull-rtd",
    initials: "HB",
    name: "HOTBULL RTD",
    category: "Ready-To-Drink Kinetic Spirit",
    accentNote: "High Energy Cut",
    href: "/brands",
  },
  {
    id: "julie-black",
    initials: "JB",
    name: "JULIE BLACK",
    category: "Triple Distilled Vodka",
    accentNote: "Crystal Filtered",
    href: "/brands",
  },
];

export default function BrandTickerStrip() {
  // Duplicate the brand list to create a seamless infinite loop
  const duplicatedBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="relative w-full bg-[#0a0807] border-y border-[#F3C644]/25 py-4 overflow-hidden z-20 shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
      {/* 1. Left & Right Feathered Vignette Shadows (Fade effect at edges) */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0a0807] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0a0807] to-transparent z-10 pointer-events-none" />

      {/* 2. Infinite Floating Strip */}
      <div className="animate-marquee-infinite pause-on-hover flex items-center will-change-transform">
        {duplicatedBrands.map((brand, index) => (
          <Link
            key={`${brand.id}-${index}`}
            href={brand.href}
            className="group flex items-center gap-3.5 sm:gap-4 px-6 sm:px-9 py-1 select-none transition-all duration-300"
          >
            {/* Crest Monogram Initial Badge */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#F3C644]/40 bg-stone-950/70 flex items-center justify-center text-[#FFE899] font-crest text-xs sm:text-sm font-bold shadow-[0_0_10px_rgba(243,198,68,0.15)] group-hover:border-[#F3C644] group-hover:bg-[#F3C644]/15 group-hover:scale-105 transition-all duration-300 shrink-0">
              {brand.initials}
            </div>

            {/* Brand Title and Spec Tag */}
            <div className="flex flex-col text-left whitespace-nowrap">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-sm sm:text-base md:text-lg font-semibold tracking-wide text-stone-100 group-hover:text-[#FFE899] transition-colors leading-tight">
                  {brand.name}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F3C644]/50 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </div>
              <span className="font-crest text-[9px] sm:text-[10px] tracking-[0.18em] text-[#C5A880]/90 uppercase font-light">
                {brand.category} <span className="text-[#F3C644]/60">•</span> {brand.accentNote}
              </span>
            </div>

            {/* Separator Diamond Motif */}
            <div className="ml-6 sm:ml-9 text-[#F3C644]/35 font-serif text-xs select-none">
              ◆
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}