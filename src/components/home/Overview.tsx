"use client";

import Image from "next/image";
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

const pillars = [
  {
    num: "01",
    title: "Double Wood Maturation",
    detail: "Aged across European sherry and charred American oak casks.",
  },
  {
    num: "02",
    title: "International Cellaring",
    detail: "Precision humidity and climate-controlled resting vaults.",
  },
  {
    num: "03",
    title: "Global Distribution Reach",
    detail: "Direct export corridors and institutional trade networks.",
  },
];

export default function Overview() {
  return (
    <section className="relative w-full py-20 sm:py-28 md:py-36 bg-[#FAF7F2] text-[#1E1915] overflow-hidden border-b border-[#E8DEC8]">
      {/* 1. Subtle Fine-Line Grain & Warm Lighting */}
      <div className="absolute inset-0 bg-radial-[circle_at_top,_var(--tw-gradient-stops)] from-white via-transparent to-[#F2EAE0]/40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow Accreditation */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 sm:gap-4 mb-4"
          >
            <div className="h-[1px] w-6 sm:w-12 bg-[#C9983A]/60" />
            <span className="font-crest text-[10px] sm:text-xs tracking-[0.28em] text-[#9A7023] uppercase font-semibold">
              • ISO 9001 • HACCP • FSSAI
            </span>
            <div className="h-[1px] w-6 sm:w-12 bg-[#C9983A]/60" />
          </motion.div>

          {/* Clean Editorial Title */}
          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#14100C] leading-[1.12] max-w-3xl"
          >
            Crafted in Time. <br />
            <span className="italic font-light text-[#A87926]">
              Benchmarked Globally.
            </span>
          </motion.h2>

          {/* Minimal 1-Sentence Narrative */}
          <motion.p
            variants={itemVariants}
            className="mt-4 sm:mt-5 max-w-xl text-stone-600 text-sm sm:text-base font-sans font-light leading-relaxed"
          >
            One of India’s benchmark private spirits houses, combining master cask cellaring with international trade distribution across continents.
          </motion.p>
        </motion.div>

        {/* 2. Emblem Showcase & 3 Minimal Pillar Columns */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          {/* Left: Clean Emblem Stamp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative p-6 sm:p-8 rounded-sm bg-white/70 border border-[#E5DAC8]"
          >
            <div className="relative w-44 h-44 sm:w-56 sm:h-56">
              <Image
                src="/icon.png"
                alt="Royal Origin Crest"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="mt-4 pt-4 border-t border-[#EFE5D8] w-full text-center">
              <span className="font-crest text-[9px] tracking-[0.25em] text-[#8C6925] uppercase font-semibold">
                Royal Origin Distillery
              </span>
            </div>
          </motion.div>

          {/* Right: Minimal 3-Pillar List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6"
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="group flex items-start gap-4 sm:gap-5 pb-5 border-b border-[#E8DEC8]/80 transition-colors"
              >
                <span className="font-serif text-lg sm:text-xl font-normal text-[#C9983A] shrink-0 pt-0.5">
                  {pillar.num}
                </span>
                <div className="flex flex-col">
                  <h3 className="font-serif text-base sm:text-xl font-semibold text-[#18130E] group-hover:text-[#A87926] transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            ))}

            {/* Premium Button Deck */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Pure Royal Gold Button */}
              <Link
                href="/invest"
                className="relative group overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F3C644] via-[#E0A838] to-[#C98F20] transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <span className="font-crest text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1A1305]">
                    Associate With Us
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#1A1305] stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>

              {/* Minimal Clean Light Button */}
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full border border-[#D8C7B0] bg-transparent hover:bg-stone-200/50 text-[#1E1915] font-crest text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 text-center"
              >
                Contact House
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}