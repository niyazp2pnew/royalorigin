"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronRight, ChevronLeft, Sparkles, Compass } from "lucide-react";

export interface InvestBottle {
  id: string;
  name: string;
  category: string;
  proof: string;
  image: string;
  accent: string;
  description: string;
  cask: string;
}

const BOTTLES: InvestBottle[] = [
  {
    id: "elite-house",
    name: "Elite House",
    category: "Premium Blended Whisky",
    proof: "42.8% V/V • 75° Proof",
    image: "/elitehouse.png",
    accent: "#E0A838",
    description: "Our flagship double wood master reserve. Matured in seasoned European sherry and charred American oak casks.",
    cask: "Double Wood Matured",
  },
  {
    id: "blue-whale",
    name: "Blue Whale",
    category: "Coastal Blended Whisky",
    proof: "42.8% V/V • 75° Proof",
    image: "/bluewhale.png",
    accent: "#38BDF8",
    description: "Maritime oak aged spirit blending ocean salinity with velvety toasted malt honey notes.",
    cask: "Bourbon Coastal Cellars",
  },
  {
    id: "harison-premium",
    name: "Harison Premium",
    category: "Royal Reserve Whisky",
    proof: "42.8% V/V • 75° Proof",
    image: "/harisonpremium.png",
    accent: "#EF4444",
    description: "Highland pot malt balanced with select grain spirits, aged for leader-grade depth and royal finish.",
    cask: "Toasted Oloroso Hogsheads",
  },
  {
    id: "7night",
    name: "7Night Whiskey",
    category: "Finest Grain Blend",
    proof: "42.8% V/V • 75° Proof",
    image: "/7night.png",
    accent: "#818CF8",
    description: "An ultra-smooth celestial night blend, cold-filtered for silky mouthfeel and subtle vanilla warmth.",
    cask: "American White Oak",
  },
  {
    id: "julie-black",
    name: "Julie Black Vodka",
    category: "Triple Filtered Crystal Spirit",
    proof: "42.8% V/V • 85.6° Proof",
    image: "/julieblack.png",
    accent: "#A855F7",
    description: "Quadruple column rectification with pure quartz crystal cuts for diamond clarity and zero bite.",
    cask: "Quartz Crystal Filtration",
  },
  {
    id: "midnight-blues",
    name: "Midnight Blues Rum",
    category: "30 Years Old Legacy Dark Rum",
    proof: "42.8% V/V • 75° Proof",
    image: "/midnightblues.png",
    accent: "#F97316",
    description: "Three decades of cane fermentation heritage matured in tropical cellaring for supreme dark molasses complexity.",
    cask: "Heavy Char Ex-Bourbon",
  },
];

export default function InvestBrandGrid() {
  const [activeBottleIndex, setActiveBottleIndex] = useState<number | null>(null);

  const activeBottle =
    activeBottleIndex !== null ? BOTTLES[activeBottleIndex] : null;

  const handleNext = () => {
    if (activeBottleIndex !== null) {
      setActiveBottleIndex((activeBottleIndex + 1) % BOTTLES.length);
    }
  };

  const handlePrev = () => {
    if (activeBottleIndex !== null) {
      setActiveBottleIndex(
        activeBottleIndex === 0 ? BOTTLES.length - 1 : activeBottleIndex - 1
      );
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 bg-[#080706] text-white overflow-hidden border-b border-[#F3C644]/20">
      {/* Background Glowing Auras */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#E0A838]/6 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F3C644] animate-pulse" />
              <span className="font-crest text-[10px] sm:text-xs tracking-[0.28em] text-[#FFE899] uppercase font-semibold">
                Commercial Brand Assets
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight">
              Institutional Portfolio. <br />
              <span className="italic font-light royal-gold-text">
                Asset Architecture in Every Bottle.
              </span>
            </h2>
          </div>

          <span className="font-crest text-xs uppercase tracking-widest text-[#C5A880]">
            Click to inspect
          </span>
        </div>

        {/* 6 Bottles in 2 Rows (3 per row on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BOTTLES.map((bottle, idx) => (
            <motion.div
              key={bottle.id}
              onClick={() => setActiveBottleIndex(idx)}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#F3C644]/60 p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-[0_8px_30px_rgba(224,168,56,0.15)] hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-crest text-[9px] uppercase tracking-wider text-[#C5A880]">
                    0{idx + 1} • {bottle.category}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal mt-0.5 group-hover:text-[#FFE899] transition-colors">
                    {bottle.name}
                  </h3>
                </div>
                <span className="p-1.5 rounded-full bg-white/5 border border-white/10 text-stone-400 group-hover:text-[#FFE899] group-hover:border-[#FFE899]/50 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Bottle Render */}
              <div className="relative w-full h-64 sm:h-72 my-4 flex items-center justify-center">
                <div
                  className="absolute w-36 h-36 rounded-full blur-2xl opacity-25 group-hover:opacity-60 transition-opacity pointer-events-none"
                  style={{ backgroundColor: bottle.accent }}
                />

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + idx * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={bottle.image}
                    alt={bottle.name}
                    fill
                    sizes="(max-width: 768px) 240px, 320px"
                    className="object-contain filter drop-shadow-[0_16px_25px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>

              {/* Bottom Specs */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-stone-400">
                <span>{bottle.cask}</span>
                <span className="text-[#FFE899] font-bold">{bottle.proof.split("•")[0]}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* BOTTLE ZOOM MODAL */}
      <AnimatePresence>
        {activeBottle !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl rounded-2xl bg-[#0F0D0A] border border-[#F3C644]/40 p-6 sm:p-8 shadow-2xl text-white overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveBottleIndex(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 text-stone-300 hover:text-white transition-colors cursor-pointer z-30"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Left: Zoomed 3D Bottle */}
                <div className="sm:col-span-6 relative h-72 sm:h-96 flex items-center justify-center">
                  <div
                    className="absolute w-44 h-44 rounded-full blur-3xl opacity-50 pointer-events-none"
                    style={{ backgroundColor: activeBottle.accent }}
                  />
                  <div className="relative w-full h-full">
                    <Image
                      src={activeBottle.image}
                      alt={activeBottle.name}
                      fill
                      priority
                      sizes="(max-width: 640px) 260px, 380px"
                      className="object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] scale-110"
                    />
                  </div>
                </div>

                {/* Right: Technical Dossier */}
                <div className="sm:col-span-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="font-crest text-[9px] uppercase tracking-[0.24em] text-[#FFE899] font-bold">
                      {activeBottle.category}
                    </span>
                    <h3 className="font-serif text-3xl text-white font-normal mt-1">
                      {activeBottle.name}
                    </h3>
                    <p className="font-mono text-xs text-[#E0A838] mt-0.5">
                      {activeBottle.proof}
                    </p>
                    <p className="text-xs text-stone-300 font-sans font-light mt-3 leading-relaxed">
                      {activeBottle.description}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs">
                    <span className="font-crest text-[9px] uppercase tracking-wider text-[#C5A880] block font-semibold">
                      Maturation Specification
                    </span>
                    <span className="text-stone-200 mt-0.5 block">
                      {activeBottle.cask}
                    </span>
                  </div>

                  {/* Carousel Next / Prev Controls */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 text-white transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 text-white transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={handleNext}
                      className="inline-flex items-center gap-1.5 font-crest text-xs uppercase tracking-wider text-[#FFE899] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Next Expression</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}