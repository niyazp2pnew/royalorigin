"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Award, Sparkles, Wine, ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  {
    id: "whiskies",
    name: "Crafted Whiskies",
    tagline: "Double Wood & Coastal Expressions",
    count: "24+ Labels",
    bottleImage: "/elitehouse.png",
    accent: "#E0A838",
    description:
      "Hand-selected European sherry and charred American oak aging, bottled across 42.8% V/V (75° Proof) specifications.",
  },
  {
    id: "vodka",
    name: "Pure Grain Vodkas",
    tagline: "Hyper-Pure Crystal Filtration",
    count: "08+ Labels",
    bottleImage: "/julieblack.png",
    accent: "#9333EA",
    description:
      "Continuous column rectification, charcoal polishing, and pure quartz crystal cuts delivering liquid silk mouthfeel.",
  },
  {
    id: "rum",
    name: "Spiced & Dark Rums",
    tagline: "Slow-Matured Tropical Cane",
    count: "08+ Labels",
    bottleImage: "/midnightblues.png",
    accent: "#EA580C",
    description:
      "A tribute to three decades of cane heritage, matured under tropical cellaring for supreme aromatic molasses depth.",
  },
];

const METRICS = [
  {
    value: "19+",
    label: "Sovereign Nations",
    sub: "Customs Clearances",
  },
  {
    value: "40+",
    label: "Active Brand Labels",
    sub: "Global Distribution",
  },
  {
    value: "03",
    label: "Spirit Categories",
    sub: "Whiskies, Vodka, Rum",
  },
  {
    value: "100%",
    label: "Customs Bonded",
    sub: "Duty-Free Corridors",
  },
];

export default function BusinessPresence() {
  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 bg-[#080706] text-white overflow-hidden border-b border-[#F3C644]/20">
      {/* Ambient Glowing Meshes */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#E0A838]/6 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-[#9333EA]/6 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F3C644] animate-pulse" />
              <span className="font-crest text-[10px] sm:text-xs tracking-[0.28em] text-[#FFE899] uppercase font-semibold">
                Sovereign Scale • Global Presence
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
              International Footprint. <br />
              <span className="italic font-light royal-gold-text">
                19+ Nations. 40+ Labels.
              </span>
            </h2>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-crest uppercase tracking-[0.18em] text-[#FFE899] hover:text-white transition-colors group"
          >
            <span>Royal Origin </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F3C644] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 1. Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-14 sm:mb-20">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-5 sm:p-6 rounded-xl bg-white/[0.03] border border-white/10 text-center backdrop-blur-xs"
            >
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold royal-gold-text">
                {metric.value}
              </span>
              <p className="font-crest text-[10px] sm:text-xs uppercase tracking-wider text-white font-semibold mt-1">
                {metric.label}
              </p>
              <span className="text-[10px] text-stone-400 font-sans mt-0.5 block">
                {metric.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 2. Three Category Showcases (Whiskies, Vodka, Rum) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#F3C644]/50 p-6 flex flex-col justify-between transition-all duration-300"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-crest text-[9px] uppercase tracking-[0.2em] text-[#FFE899] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    {category.count}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: category.accent }}
                  />
                </div>

                <h3 className="font-serif text-2xl text-white font-semibold group-hover:text-[#FFE899] transition-colors">
                  {category.name}
                </h3>
                <p className="font-crest text-[9px] tracking-wider text-[#C5A880] uppercase mt-0.5">
                  {category.tagline}
                </p>

                <p className="mt-3 text-xs text-stone-400 font-sans font-light leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Centered Transparent Bottle Display with Floating Physics */}
              <div className="relative w-full h-56 sm:h-64 my-6 flex items-center justify-center">
                {/* Aura */}
                <div
                  className="absolute w-36 h-36 rounded-full blur-2xl opacity-40 transition-opacity group-hover:opacity-75 pointer-events-none"
                  style={{ backgroundColor: category.accent }}
                />

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + idx * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={category.bottleImage}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 180px, 240px"
                    className="object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>

              {/* Bottom Quick Action */}
              <Link
                href="/brands"
                className="w-full py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-[#E0A838] hover:text-stone-950 hover:border-[#FFE899] text-stone-300 font-crest text-[10px] uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <span>Inspect Category</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}