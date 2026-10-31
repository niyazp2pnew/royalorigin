"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Clock, ShieldCheck, Mail, ArrowDown } from "lucide-react";

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

export default function ContactHero() {
  const scrollToForm = () => {
    const el = document.getElementById("contact-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight * 0.75,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 md:py-32 bg-[#080706] text-white overflow-hidden border-b border-[#F3C644]/20">
      {/* 1. Pure Ambient Lighting & Mesh Gradients (No Image) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[580px] h-[580px] rounded-full bg-[#E0A838]/8 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(184,137,54,0.15),rgba(255,255,255,0))] pointer-events-none -z-10" />

      {/* Subtle Coordinate Grid Watermark */}
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
          {/* Emblem Monogram with Ambient Aura */}
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
              className="object-contain filter drop-shadow-[0_4px_20px_rgba(243,198,68,0.55)]"
            />
          </motion.div>

          {/* Eyebrow Ribbon */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-3"
          >
            <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-r from-transparent to-[#F3C644]" />
            <span className="font-crest text-[9px] sm:text-[10px] tracking-[0.28em] text-[#FFE899] uppercase font-semibold">
              Royal Origin Support
            </span>
            <div className="h-[1px] w-6 sm:w-12 bg-gradient-to-l from-transparent to-[#F3C644]" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
          >
            Initiate Dialogue. <br />
            <span className="italic font-light royal-gold-text">
              Direct Corporate Engagement.
            </span>
          </motion.h1>

          {/* Editorial Narrative */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-stone-300 text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed max-w-xl"
          >
            Connect directly with our corporate administration and trade desk for territory allocations, export quotas, investor relations, or statutory inquiries.
          </motion.p>

          {/* Status Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-stone-400 font-crest text-[10px] sm:text-[11px] uppercase tracking-wider"
          >
            <div className="flex items-center gap-2 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-[#F3C644]" />
              <span className="text-stone-300">24h Protocol Response</span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F3C644]" />
              <span className="text-stone-300">Direct Executive Routing</span>
            </div>
          </motion.div>

          {/* Jump Scroll Button */}
          <motion.div variants={itemVariants} className="mt-8">
            <button
              onClick={scrollToForm}
              className="group flex flex-col items-center gap-1.5 text-stone-400 hover:text-[#FFE899] transition-colors cursor-pointer"
            >
              <span className="font-crest text-[8.5px] uppercase tracking-[0.24em]">
                Scroll To Protocol Form
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