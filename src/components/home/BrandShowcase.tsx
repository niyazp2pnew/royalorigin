"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface BrandExpression {
  id: string;
  name: string;
  descriptor: string;
  image: string;
  abv: string;
  volume: string;
  profile: string;
  glowColor: string;
  accentColor: string;
}

const BRANDS: BrandExpression[] = [
  {
    id: "elite-house",
    name: "Elite House",
    descriptor: "Premium Blended Whisky",
    image: "/elitehouse.png",
    abv: "42.8% V/V",
    volume: "750 ml",
    profile: "Double Wood",
    glowColor: "rgba(224, 168, 56, 0.45)",
    accentColor: "#E0A838",
  },
  {
    id: "blue-whale",
    name: "Blue Whale",
    descriptor: "Coastal Blended Whisky",
    image: "/bluewhale.png",
    abv: "42.8% V/V",
    volume: "750 ml",
    profile: "Maritime Oak",
    glowColor: "rgba(30, 114, 235, 0.45)",
    accentColor: "#38BDF8",
  },
  {
    id: "harison-premium",
    name: "Harison Premium",
    descriptor: "Royal Reserve Whisky",
    image: "/harisonpremium.png",
    abv: "42.8% V/V",
    volume: "750 ml",
    profile: "75° Proof",
    glowColor: "rgba(220, 38, 38, 0.45)",
    accentColor: "#EF4444",
  },
  {
    id: "7night",
    name: "7Night Whiskey",
    descriptor: "Finest Grain Blend",
    image: "/7night.png",
    abv: "42.8% V/V",
    volume: "750 ml",
    profile: "Velvet Grain",
    glowColor: "rgba(99, 102, 241, 0.45)",
    accentColor: "#818CF8",
  },
];

export default function BrandShowcase() {
  const [activeBrand, setActiveBrand] = useState<BrandExpression>(BRANDS[0]);

  return (
    <section className="relative w-full py-12 sm:py-20 md:py-28 bg-[#080706] text-white overflow-hidden border-b border-[#F3C644]/20">
      {/* 1. Dynamic Ambient Aura Mesh */}
      <div
        className="absolute top-1/3 md:top-1/2 right-1/2 md:right-1/4 translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[650px] md:h-[650px] rounded-full blur-[90px] sm:blur-[120px] pointer-events-none transition-all duration-300 ease-out -z-10"
        style={{
          background: `radial-gradient(circle, ${activeBrand.glowColor} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Block */}
        <div className="flex items-end justify-between mb-6 sm:mb-10 pb-4 border-b border-white/10">
          <div>
            <span className="font-crest text-[9px] sm:text-xs tracking-[0.25em] text-[#FFE899] uppercase font-semibold">
              The Master Vault
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-white mt-1">
              Signature <span className="italic font-light text-[#E0A838]">Expressions.</span>
            </h2>
          </div>

          <Link
            href="/brands"
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-crest uppercase tracking-[0.16em] text-[#FFE899] hover:text-white transition-colors"
          >
            <span>All Brands</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F3C644]" />
          </Link>
        </div>

        {/* 2. Mobile-Friendly Horizontal Expression Bar */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 mb-4 scrollbar-none snap-x snap-mandatory">
          {BRANDS.map((brand) => {
            const isActive = activeBrand.id === brand.id;
            return (
              <button
                key={brand.id}
                onClick={() => setActiveBrand(brand)}
                className={`snap-start shrink-0 px-3.5 py-2 rounded-full font-crest text-[10px] uppercase tracking-wider transition-all duration-200 flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#E0A838] text-stone-950 font-bold border-[#FFE899] shadow-[0_0_12px_rgba(224,168,56,0.4)]"
                    : "bg-white/5 border-white/10 text-stone-300 active:scale-95"
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: isActive ? "#1c1404" : brand.accentColor,
                  }}
                />
                <span>{brand.name}</span>
              </button>
            );
          })}
        </div>

        {/* 3. Main Adaptive Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          
          {/* Desktop Left List (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-6 flex-col space-y-2 sm:space-y-3">
            {BRANDS.map((brand, index) => {
              const isActive = activeBrand.id === brand.id;
              return (
                <div
                  key={brand.id}
                  onMouseEnter={() => setActiveBrand(brand)}
                  onClick={() => setActiveBrand(brand)}
                  className={`group relative p-4 sm:p-5 rounded-sm border cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "bg-white/[0.04] border-[#F3C644]/50"
                      : "bg-transparent border-white/5 hover:border-white/15"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[3px] transition-colors duration-200 ${
                      isActive ? "bg-[#E0A838]" : "bg-transparent"
                    }`}
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <span className="font-serif text-xs text-[#C5A880]/80">
                        0{index + 1}
                      </span>
                      <div>
                        <h3
                          className={`font-serif text-xl sm:text-2xl transition-colors duration-200 ${
                            isActive ? "text-white" : "text-stone-400 group-hover:text-stone-200"
                          }`}
                        >
                          {brand.name}
                        </h3>
                        <p className="font-crest text-[9px] tracking-wider text-[#FFE899]/70 uppercase">
                          {brand.descriptor}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-stone-400">
                      <span>{brand.profile}</span>
                      <span className="text-[#E0A838]">•</span>
                      <span>{brand.abv}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottle Stage (Desktop & Mobile Optimized) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[340px] sm:min-h-[440px] md:min-h-[500px] select-none py-2">
            {/* Ambient Circular Aura */}
            <div
              className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border transition-all duration-300 pointer-events-none"
              style={{
                borderColor: `${activeBrand.accentColor}35`,
                boxShadow: `0 0 60px ${activeBrand.glowColor}`,
              }}
            />

            {/* Fast Spring Bottle Swap */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBrand.id}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{
                  duration: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 w-full h-[280px] sm:h-[380px] md:h-[460px] flex items-center justify-center"
              >
                <Image
                  src={activeBrand.image}
                  alt={activeBrand.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 460px"
                  className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle Pedestal Reflection */}
            <div className="absolute bottom-2 w-32 sm:w-44 h-4 bg-white/10 rounded-[100%] blur-sm pointer-events-none" />

            {/* Mobile-Only Specs Drawer */}
            <div className="flex lg:hidden items-center justify-center gap-4 mt-3 pt-3 border-t border-white/10 w-full max-w-xs text-center z-10">
              <div className="flex flex-col">
                <span className="text-[9px] font-crest tracking-wider text-[#C5A880] uppercase">
                  Proof / ABV
                </span>
                <span className="font-mono text-xs text-white font-semibold">
                  {activeBrand.abv}
                </span>
              </div>
              <div className="h-4 w-[1px] bg-white/10" />
              <div className="flex flex-col">
                <span className="text-[9px] font-crest tracking-wider text-[#C5A880] uppercase">
                  Volume
                </span>
                <span className="font-mono text-xs text-white font-semibold">
                  {activeBrand.volume}
                </span>
              </div>
              <div className="h-4 w-[1px] bg-white/10" />
              <div className="flex flex-col">
                <span className="text-[9px] font-crest tracking-wider text-[#C5A880] uppercase">
                  Profile
                </span>
                <span className="font-mono text-xs text-[#FFE899] font-semibold">
                  {activeBrand.profile}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}