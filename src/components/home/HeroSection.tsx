"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stats = [
  { value: "32+", label: "Years Experience", sub: "Master Maturation" },
  { value: "42.8%", label: "V/V Strength", sub: "75° Proof Reserve" },
  { value: "19+", label: "Nations & Ports", sub: "Global Reach" },
];

export default function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-between items-center text-center overflow-hidden bg-[#0c0a08] py-8 md:py-6">
      {/* 1. Background Art Direction via HTML5 Picture (Zero Next.js sizes warnings) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <picture>
          {/* Mobile Viewports (< 768px) */}
          <source media="(max-width: 767px)" srcSet="/mobilebanner1.png" />
          {/* Desktop Viewports (>= 768px) */}
          <source media="(min-width: 768px)" srcSet="/banner1.png" />
          {/* Fallback image */}
          <img
            src="/banner1.png"
            alt="Royal Origin Fine Spirits Reserve"
            className="w-full h-full object-cover object-center"
          />
        </picture>

        {/* Ambient Dark-Gold Scrim & Contrast Overlays */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30 backdrop-brightness-[0.92]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85" />
      </div>

      {/* 2. Top Header Spacer */}
      <div className="w-full pt-4 md:pt-10 z-10" />

      {/* 3. Central Content Area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto px-5 flex flex-col items-center my-auto"
      >
        {/* Top Eyebrow Hairline */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4 w-full"
        >
          <div className="h-[1px] w-6 sm:w-16 bg-gradient-to-r from-transparent to-[#F3C644]" />
          <span className="font-crest text-[9px] sm:text-xs tracking-[0.28em] text-[#FFE899] uppercase font-semibold drop-shadow-md">
            Royal Origin Distillery 
          </span>
          <div className="h-[1px] w-6 sm:w-16 bg-gradient-to-l from-transparent to-[#F3C644]" />
        </motion.div>

        {/* Regal Display Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
        >
          A Legacy in <br />
          <span className="italic font-light royal-gold-text drop-shadow-[0_2px_16px_rgba(243,198,68,0.4)]">
            Every Pour.
          </span>
        </motion.h1>

        {/* Crisp Short Narrative */}
        <motion.p
          variants={itemVariants}
          className="mt-3 sm:mt-4 max-w-lg text-stone-100 text-xs sm:text-sm md:text-base font-sans font-light tracking-wide leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          Double wood maturation, artisanal distillation, and global export corridors. Bottled with authority.
        </motion.p>

        {/* Pure Bacchus-Inspired Royal Gold Button Deck */}
        <motion.div
          variants={itemVariants}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none"
        >
          {/* PURE ROYAL GOLD BUTTON */}
          <Link
            href="/trade-desk"
            className="relative group w-full sm:w-auto overflow-hidden px-8 py-3.5 sm:py-4 rounded-full royal-gold-gradient shadow-[0_4px_25px_rgba(224,168,56,0.5)] hover:shadow-[0_4px_35px_rgba(243,198,68,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {/* Shimmer Light Gleam */}
            <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-gold-gleam pointer-events-none" />

            <div className="relative z-10 flex items-center justify-center gap-2">
              <span className="font-crest text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1c1404]">
                Associate With House
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#1c1404] stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>

          {/* SECONDARY TRANSLUCENT GLASS BUTTON */}
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full border border-[#F3C644]/40 bg-black/50 backdrop-blur-md hover:bg-black/75 hover:border-[#FFE899] transition-all duration-300 shadow-md text-center"
          >
            <span className="font-crest text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#FFE899] group-hover:text-white transition-colors">
              Contact House
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* 4. Highly Visible Stats Cards & Discover Scroller */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 flex flex-col items-center gap-4">
        {/* The 3 Credential Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-xl"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group bg-[#110e0b]/90 backdrop-blur-md border border-[#F3C644]/30 hover:border-[#F3C644] p-2.5 sm:p-3.5 rounded-sm text-center shadow-[0_4px_16px_rgba(0,0,0,0.6)] transition-all duration-300"
            >
              <div className="font-serif text-lg sm:text-2xl md:text-3xl font-bold leading-tight royal-gold-text">
                {stat.value}
              </div>
              <div className="font-crest text-[8px] sm:text-[10px] uppercase tracking-wider text-stone-200 mt-0.5 font-semibold">
                {stat.label}
              </div>
              <div className="text-[7.5px] sm:text-[9px] text-[#C5A880] mt-0.5 tracking-tight font-medium">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Pill Indicator */}
        <button
          onClick={scrollToNext}
          aria-label="Scroll to discover"
          className="flex flex-col items-center gap-1 group cursor-pointer pt-1"
        >
          <div className="w-4 h-7 rounded-full border border-[#F3C644]/60 flex items-start justify-center p-1 bg-black/40 backdrop-blur-xs group-hover:border-[#FFE899] transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 rounded-full bg-[#F3C644] shadow-[0_0_6px_#F3C644]"
            />
          </div>
        </button>
      </div>
    </section>
  );
}