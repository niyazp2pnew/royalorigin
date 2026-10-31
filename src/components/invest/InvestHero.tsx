"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, TrendingUp, ShieldCheck } from "lucide-react";

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.12,
    },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const SEALS = [
  { name: "FSSAI Licensed", image: "/fsaai.png" },
  { name: "HACCP Certified", image: "/haccp.webp" },
  { name: "ISO 9001:2015", image: "/icon-9001.webp" },
];

export default function InvestHero() {
  const scrollToModel = () => {
    const el = document.getElementById("investment-model");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[86dvh] sm:min-h-[92dvh] flex flex-col justify-between items-center text-center overflow-hidden bg-[#0A0806] text-white pt-28 sm:pt-32 pb-8">
      {/* 1. Cinematic Background: investbanner.png */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.06 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src="/investbanner.png"
            alt="Royal Origin Investment Grand Estate & Cellars"
            fill
            sizes="100vw"
            priority
            quality={92}
            className="object-cover object-center filter brightness-[0.8] contrast-[1.05]"
          />
        </motion.div>

        {/* Ambient Dark-Gold Scrims */}
        <div className="absolute inset-0 bg-black/45 backdrop-brightness-[0.95]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0806]/85 via-[#0A0806]/35 to-[#0A0806]" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-[#0A0806]/35 to-[#0A0806]/95" />
      </div>

      <div className="w-full z-10" />

      {/* 2. Central Editorial Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 flex flex-col items-center my-auto">
        {/* Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 select-none"
        >
          <Image
            src="/icon.png"
            alt="Royal Origin Emblem"
            fill
            priority
            className="object-contain filter drop-shadow-[0_4px_20px_rgba(224,168,56,0.55)]"
          />
        </motion.div>

        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* Eyebrow */}
          <motion.div
            variants={textItemVariants}
            className="flex items-center justify-center gap-3 mb-3 w-full"
          >
            <div className="h-[1px] w-6 sm:w-12 bg-[#F3C644]" />
            <span className="font-crest text-[9.5px] sm:text-xs tracking-[0.28em] text-[#FFE899] uppercase font-semibold">
              Associate With Royal Origin
            </span>
            <div className="h-[1px] w-6 sm:w-12 bg-[#F3C644]" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={textItemVariants}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
          >
            Liquid Sovereignty. <br />
            <span className="italic font-light royal-gold-text">
              Institutional Distillation Wealth.
            </span>
          </motion.h1>

          {/* Narrative */}
          <motion.p
            variants={textItemVariants}
            className="mt-4 max-w-xl text-stone-200 text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Participate in India's high-growth private spirit infrastructure. Asset-backed cask holdings, high-throughput automated bottling lines, and expanding sovereign trade corridors.
          </motion.p>

          {/* Action Row */}
          <motion.div
            variants={textItemVariants}
            className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none"
          >
            <button
              onClick={scrollToModel}
              className="w-full sm:w-auto px-7 py-3 rounded-full royal-gold-gradient text-stone-950 font-crest text-xs font-bold uppercase tracking-[0.18em] shadow-[0_4px_20px_rgba(224,168,56,0.4)] hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Model</span>
              <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-7 py-3 rounded-full border border-[#F3C644]/40 bg-black/40 backdrop-blur-md hover:bg-black/70 text-[#FFE899] font-crest text-xs font-semibold uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-1.5"
            >
              <span>Investor Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Statutory Quality Seals Strip: FSSAI, HACCP, ISO 9001 */}
      
    </section>
  );
}