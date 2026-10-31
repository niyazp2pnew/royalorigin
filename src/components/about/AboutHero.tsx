"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Staggered text reveal container
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.1,
      staggerChildren: 0.14,
    },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AboutHero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full min-h-[92dvh] md:h-[100dvh] flex flex-col justify-between items-center text-center overflow-hidden bg-[#0A0806] text-white pt-24 sm:pt-28 pb-8 sm:pb-12">
      
      {/* 1. Full-Bleed Animated Background Banner (z-0 to ensure visibility) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.0 }}
          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full h-full"
        >
          {/* Note: Change to /aboutbanner.jpg if your file is .jpg */}
          <Image
            src="/aboutbanner.png"
            alt="Royal Origin Distillery Cask Heritage Estate"
            fill
            sizes="100vw"
            priority
            quality={92}
            className="object-cover object-center filter brightness-[0.88]"
          />
        </motion.div>

        {/* Cinematic Vignette & Ambient Light Overlays */}
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-[0.95]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806]/75 via-transparent to-[#0A0806]" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-[#0A0806]/30 to-[#0A0806]/80" />
      </div>

      {/* 2. Top Header Spacer */}
      <div className="w-full z-10" />

      {/* 3. Central Stage: Emblem Spin & Staggered Text Reveal */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 flex flex-col items-center my-auto">
        
        {/* Emblem Spin & Scale-Down */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 2.2,
            rotate: 140,
            filter: "blur(6px) drop-shadow(0 0 35px rgba(243,198,68,0.8))",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            filter: "blur(0px) drop-shadow(0 8px 24px rgba(224,168,56,0.35))",
          }}
          transition={{
            duration: 1.2,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 select-none"
        >
          <Image
            src="/icon.png"
            alt="Royal Origin Golden Monogram"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Text Sequence */}
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Eyebrow */}
          <motion.div
            variants={textItemVariants}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-3 w-full"
          >
            <div className="h-[1px] w-6 sm:w-14 bg-gradient-to-r from-transparent to-[#F3C644]" />
            <span suppressHydrationWarning className="font-crest text-[9.5px] sm:text-xs tracking-[0.28em] text-[#FFE899] uppercase font-semibold drop-shadow">
              The House of Royal Origin
            </span>
            <div className="h-[1px] w-6 sm:w-14 bg-gradient-to-l from-transparent to-[#F3C644]" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={textItemVariants}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
          >
            Rooted in Heritage. <br />
            <span className="italic font-light royal-gold-text drop-shadow-[0_2px_16px_rgba(243,198,68,0.4)]">
              Crafted for the World Stage.
            </span>
          </motion.h1>

          {/* Narrative */}
          <motion.p
            variants={textItemVariants}
            className="mt-4 max-w-xl text-stone-200 text-xs sm:text-sm md:text-base font-sans font-light tracking-wide leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Three decades of distilling patience, double wood cask aging, and uncompromising regulatory excellence across domestic and international trade corridors.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={textItemVariants}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none"
          >
            <Link
              href="/brands"
              className="relative group w-full sm:w-auto overflow-hidden px-7 py-3 sm:py-3.5 rounded-full royal-gold-gradient text-stone-950 font-crest text-xs font-bold uppercase tracking-[0.18em] shadow-[0_4px_25px_rgba(224,168,56,0.45)] hover:shadow-[0_4px_35px_rgba(243,198,68,0.7)] transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-gold-gleam pointer-events-none" />
              <span>Explore Our Brands</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] text-stone-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-full border border-[#F3C644]/40 bg-black/40 backdrop-blur-md hover:bg-black/70 hover:border-[#FFE899] text-[#FFE899] font-crest text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 text-center"
            >
              Corporate Inquiries
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* 4. Bottom Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={scrollToContent}
        aria-label="Scroll to discover our history"
        className="relative z-10 flex flex-col items-center gap-1.5 cursor-pointer group mt-4"
      >
        <span className="font-crest text-[8.5px] uppercase tracking-[0.25em] text-[#C5A880]/80 group-hover:text-[#FFE899] transition-colors">
          Discover The House
        </span>
        <div className="w-4 h-7 rounded-full border border-[#F3C644]/50 flex items-start justify-center p-1 bg-black/40 group-hover:border-[#FFE899] transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-[#F3C644]"
          />
        </div>
      </motion.button>
    </section>
  );
}