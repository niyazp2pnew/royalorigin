"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowUpRight, Award, Compass, Sparkles, Touchpad } from "lucide-react";

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

const BOTTLE_COLLECTION = [
  {
    id: "elite-house",
    name: "Elite House",
    tagline: "Master Reserve Expression",
    image: "/elitehouse.png",
  },
  {
    id: "blue-whale",
    name: "Blue Whale",
    tagline: "Coastal Maritime Oak",
    image: "/bluewhale.png",
  },
  {
    id: "harison-premium",
    name: "Harison Premium",
    tagline: "75° Imperial Proof",
    image: "/harisonpremium.png",
  },
  {
    id: "7night",
    name: "7Night Whiskey",
    tagline: "Finest Grain Blend",
    image: "/7night.png",
  },
    {
    id: "Midnight Blues",
    name: "Midnight Blues Rum",
    tagline: "Premium Rum",
    image: "/midnightblues.png",
  },
    {
    id: "Julie Black",
    name: "Julie Black",
    tagline: "Premium Vodka",
    image: "/julieblack.png",
  },
];

const brandMetrics = [
  { value: "32+", label: "Years Maturation", sub: "Mastery Since 1994" },
  { value: "42.8%", label: "Signature Strength", sub: "75° Proof Reserve" },
  { value: "07", label: "House Expressions", sub: "Signature Portfolio" },
];

const pillars = [
  {
    icon: Award,
    title: "Double Wood Cask Aging",
    description: "Matured across hand-selected European sherry and charred American white oak casks for rich aromatic depth.",
  },
  {
    icon: Sparkles,
    title: "Master Blending Authority",
    description: "Precision grain extraction and velvety malt character, crafted for distinction and consistent character.",
  },
  {
    icon: Compass,
    title: "Global Distribution Reach",
    description: "Export corridors engineered for domestic channels, duty-free networks, and institutional trade partners.",
  },
];

const certifications = [
  { name: "FSSAI Licensed", image: "/fsaai.png" },
  { name: "HACCP Certified", image: "/haccp.webp" },
  { name: "ISO 9001:2015", image: "/icon-9001.webp" },
];

export default function AboutOverview() {
  const [activeBottleIndex, setActiveBottleIndex] = useState(0);

  const cycleNextBottle = () => {
    setActiveBottleIndex((prev) => (prev + 1) % BOTTLE_COLLECTION.length);
  };

  const currentBottle = BOTTLE_COLLECTION[activeBottleIndex];

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 bg-[#FAF8F5] text-[#1E1915] overflow-hidden border-b border-[#E8DEC8]">
      {/* Ambient Radial Mesh Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] rounded-full bg-[#E0A838]/8 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] rounded-full bg-white blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* 1. Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 sm:gap-4 mb-3.5"
          >
            <div className="h-[1px] w-6 sm:w-12 bg-[#C9983A]" />
            <span className="font-crest text-[10px] sm:text-xs tracking-[0.28em] text-[#9A7023] uppercase font-bold">
              The House of Royal Origin • Established 1994
            </span>
            <div className="h-[1px] w-6 sm:w-12 bg-[#C9983A]" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#17130F] leading-[1.12]"
          >
            Distilling Patience. <br />
            <span className="italic font-light text-[#A87926]">
              Bottled with Authority.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-stone-600 text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed max-w-2xl"
          >
            Rooted in three decades of private spirit craftsmanship, Royal Origin Distillery Limited unites artisanal oak aging with high-throughput global distribution.
          </motion.p>
        </motion.div>

        {/* 2. Interactive Spotlight Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          
          {/* Left Column: Tap-To-Cycle Bottle Experience */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            onClick={cycleNextBottle}
            className="lg:col-span-5 relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl bg-gradient-to-b from-[#FFFDF9] to-[#F5ECE0] border border-[#E5DAC8] shadow-sm overflow-hidden cursor-pointer select-none group"
          >
            {/* Background Halo */}
            <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-[#E0A838]/15 blur-2xl pointer-events-none" />

            {/* Emblem Watermark */}
            <div className="absolute top-4 left-4 w-14 h-14 sm:w-16 sm:h-16 opacity-85">
              <Image
                src="/icon.png"
                alt="Royal Origin Monogram"
                fill
                className="object-contain"
              />
            </div>

            {/* Tap Cue Hint */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0A838]/15 border border-[#E0A838]/30 text-[9px] font-crest uppercase tracking-wider text-[#9A7023] font-bold group-hover:bg-[#E0A838]/25 transition-all">
              <Touchpad className="w-3 h-3 text-[#9A7023]" />
              <span>Tap to Cycle</span>
            </div>

            {/* Animated Bottle Viewport */}
            <div className="relative z-10 w-44 h-64 sm:w-56 sm:h-80 my-4 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBottle.id}
                  initial={{ opacity: 0, scale: 0.9, y: 18 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -18 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full relative"
                >
                  {/* Floating Bobbing Motion */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={currentBottle.image}
                      alt={currentBottle.name}
                      fill
                      priority
                      className="object-contain filter drop-shadow-[0_16px_25px_rgba(30,20,10,0.25)] transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Active Expression Name and Tagline */}
            <div className="w-full pt-3 border-t border-[#EAE0D2] flex items-center justify-between z-10">
              <div>
                <p className="font-serif text-sm sm:text-base font-semibold text-[#18130E] leading-tight">
                  {currentBottle.name}
                </p>
                <p className="text-[10px] font-crest uppercase tracking-wider text-[#9A7023] mt-0.5 font-medium">
                  {currentBottle.tagline}
                </p>
              </div>

              {/* Indicator Dots */}
              <div className="flex items-center gap-1.5">
                {BOTTLE_COLLECTION.map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotIdx === activeBottleIndex
                        ? "w-4 bg-[#E0A838]"
                        : "w-1.5 bg-stone-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Key Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <span className="font-crest text-[9px] uppercase tracking-[0.24em] text-[#9A7023] font-bold">
                Cask Architecture
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E1915] font-normal leading-snug">
                The Heritage Behind Every Expression.
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed">
                From our foundational reserves to contemporary crafted releases, each label represents rigorous wood selection, temperature-controlled cellaring, and uncompromising proof standards.
              </p>
            </div>

            {/* 3 Pillars List */}
            <div className="space-y-3.5 pt-1">
              {pillars.map((pillar, i) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white/80 border border-[#EAE0D2] shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-md bg-[#F5ECE0] border border-[#DFCBB2] flex items-center justify-center text-[#9A7023] shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm sm:text-base font-semibold text-[#18130E]">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-stone-600 font-sans mt-0.5 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/brands"
                className="relative group overflow-hidden px-7 py-3 rounded-full bg-gradient-to-r from-[#F3C644] via-[#E0A838] to-[#C98F20] text-stone-950 font-crest text-[11px] font-bold uppercase tracking-[0.18em] shadow-sm hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <span>Explore The Brands</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.4]" />
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full border border-[#D5C2A5] bg-white hover:bg-stone-50 text-stone-800 font-crest text-[11px] font-semibold uppercase tracking-[0.16em] transition-all text-center"
              >
                Trade Inquiries
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 3. Core Credential Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-2.5 sm:gap-6 p-4 sm:p-6 rounded-xl bg-white border border-[#EAE0D2] shadow-2xs text-center mb-10"
        >
          {brandMetrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <span className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-[#A87926]">
                {metric.value}
              </span>
              <span className="font-crest text-[9px] sm:text-xs uppercase tracking-wider text-stone-800 font-semibold mt-1">
                {metric.label}
              </span>
              <span className="hidden sm:block text-[10px] text-stone-500 font-sans mt-0.5">
                {metric.sub}
              </span>
            </div>
          ))}
        </motion.div>

        {/* 4. Regulatory Seals Strip (Pure Original Colors on Mobile & Desktop) */}
        <div className="pt-6 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="font-crest text-[10px] uppercase tracking-[0.22em] text-stone-500 font-semibold text-center sm:text-left">
            Certified Statutory & Quality Governance
          </p>

          <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center gap-2.5 bg-white px-3 py-1.5 rounded-full border border-[#EAE0D2] shadow-2xs">
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 shrink-0">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] font-crest uppercase tracking-wider text-stone-800 font-semibold">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}