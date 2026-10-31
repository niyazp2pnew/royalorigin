"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ShieldCheck, ArrowDown } from "lucide-react";

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
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ManagementHero() {
  const scrollToLeadership = () => {
    const el = document.getElementById("executive-leadership");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 md:py-32 bg-[#080706] text-white overflow-hidden border-b border-[#F3C644]/20">
      {/* Ambient Radial Lights (No Image) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#E0A838]/8 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none -z-10" />

      {/* Coordinate Grid Watermark Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, #F3C644 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          {/* Emblem Monogram */}
          <motion.div
            variants={itemVariants}
            className="relative w-14 h-14 sm:w-16 sm:h-16 mb-4 select-none"
          >
            <div className="absolute inset-0 rounded-full bg-[#F3C644]/20 blur-md -z-10" />
            <Image
              src="/icon.png"
              alt="Royal Origin Emblem"
              fill
              priority
              className="object-contain filter drop-shadow-[0_4px_20px_rgba(224,168,56,0.55)]"
            />
          </motion.div>

          {/* Eyebrow Ribbon */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-3"
          >
            <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-[#F3C644]" />
            <span className="font-crest text-[9px] sm:text-[10px] tracking-[0.28em] text-[#FFE899] uppercase font-semibold">
              Corporate Governance
            </span>
            <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-[#F3C644]" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
          >
            Management. <br />
            <span className="italic font-light royal-gold-text">
             Royal Origin.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-stone-300 text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed max-w-lg"
          >
            Executive governance, strategic direction, and leadership driving the global expansion of Royal Origin Distillery.
          </motion.p>

          {/* Scroll Cue Button */}
          <motion.div variants={itemVariants} className="mt-8">
            <button
              onClick={scrollToLeadership}
              className="group flex flex-col items-center gap-1.5 text-stone-400 hover:text-[#FFE899] transition-colors cursor-pointer"
            >
              <span className="font-crest text-[8.5px] uppercase tracking-[0.24em]">
                View Leadership
              </span>
              <div className="w-7 h-7 rounded-full border border-white/15 group-hover:border-[#F3C644]/50 flex items-center justify-center transition-all bg-white/[0.02]">
                <ArrowDown className="w-3.5 h-3.5 text-[#F3C644] group-hover:translate-y-0.5 transition-transform" />
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}