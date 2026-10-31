"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function BrandsHero() {
  const scrollToGallery = () => {
    const el = document.getElementById("gallery");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[75dvh] sm:min-h-[82dvh] flex flex-col justify-between items-center text-center overflow-hidden bg-[#0A0806] text-white pt-24 sm:pt-28 pb-8">
      {/* 1. Cinematic Background Banner Canvas */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src="/brandbanner.png"
          alt="Royal Origin Distillation Vault"
          fill
          priority
          quality={90}
          className="object-cover object-center filter brightness-[0.78]"
        />

        {/* Ambient Dark-Gold Scrims */}
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-[0.95]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806]/85 via-[#0A0806]/35 to-[#0A0806]" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-[#0A0806]/30 to-[#0A0806]/90" />
      </div>

      <div className="w-full z-10" />

      {/* 2. Central Editorial Hero Copy */}
      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 flex flex-col items-center my-auto">
        {/* Emblem Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-12 h-12 sm:w-16 sm:h-16 mb-3 select-none"
        >
          <Image
            src="/icon.png"
            alt="Royal Origin Emblem"
            fill
            priority
            className="object-contain filter drop-shadow-[0_4px_18px_rgba(224,168,56,0.5)]"
          />
        </motion.div>

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-2.5">
          <div className="h-[1px] w-6 sm:w-10 bg-[#F3C644]" />
          <span className="font-crest text-[9px] sm:text-[10px] tracking-[0.26em] text-[#FFE899] uppercase font-semibold">
            The Master Vault • 06 Expressions
          </span>
          <div className="h-[1px] w-6 sm:w-10 bg-[#F3C644]" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1]">
          A Legacy in Every Drop. <br />
          <span className="italic font-light royal-gold-text">
            Bottled with Authority.
          </span>
        </h1>

        {/* Punchy Narrative */}
        <p className="mt-3 max-w-lg text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
          Crafted with patience across double wood casks, cold-filtered grain spirits, and benchmarked for global trade corridors.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center justify-center gap-3 w-full max-w-xs sm:max-w-none">
          <button
            onClick={scrollToGallery}
            className="px-6 py-2.5 sm:py-3 rounded-full royal-gold-gradient text-stone-950 font-crest text-[11px] font-bold uppercase tracking-[0.18em] shadow-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Explore Releases</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          <Link
            href="/contact"
            className="px-6 py-2.5 sm:py-3 rounded-full border border-[#F3C644]/40 bg-black/40 backdrop-blur-md hover:bg-black/70 text-[#FFE899] font-crest text-[11px] font-semibold uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-1.5"
          >
            <span>Trade Allocation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 3. Bottom Indicator */}
      <button
        onClick={scrollToGallery}
        aria-label="Scroll down to gallery"
        className="relative z-10 flex flex-col items-center gap-1 cursor-pointer group mt-4 text-[#C5A880]/80 hover:text-[#FFE899] transition-colors"
      >
        <span className="font-crest text-[8px] uppercase tracking-[0.25em]">
          Scroll to Inspect
        </span>
        <div className="w-4 h-6 rounded-full border border-[#F3C644]/40 flex items-start justify-center p-0.5">
          <div className="w-1 h-1.5 rounded-full bg-[#F3C644] animate-bounce" />
        </div>
      </button>
    </section>
  );
}