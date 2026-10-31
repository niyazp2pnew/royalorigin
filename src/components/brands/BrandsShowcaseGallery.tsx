"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Compass,
} from "lucide-react";

export interface BottleExpression {
  id: string;
  name: string;
  subtitle: string;
  category: "Whisky" | "Vodka" | "Rum";
  image: string;
  abv: string;
  proof: string;
  volume: string;
  profile: string;
  caskType: string;
  accentColor: string;
  glowColor: string;
  description: string;
  tastingNotes: {
    nose: string;
    palate: string;
    finish: string;
  };
}

const BRAND_EXPRESSIONS: BottleExpression[] = [
  {
    id: "elite-house",
    name: "Elite House",
    subtitle: "Premium Blended Whisky",
    category: "Whisky",
    image: "/elitehouse.png",
    abv: "42.8% V/V",
    proof: "75° Proof",
    volume: "750 ml",
    profile: "Double Wood Master Reserve",
    caskType: "Charred American & European Oak",
    accentColor: "#C59B27",
    glowColor: "rgba(197, 155, 39, 0.35)",
    description:
      "The pinnacle of Royal Origin blending craft. Matured across seasoned oak casks for deep structural harmony, golden honey balance, and regal complexity.",
    tastingNotes: {
      nose: "Candied citrus, toasted white oak, roasted malt, and delicate honeycomb.",
      palate: "Rich double-wood vanilla, caramelized orchard fruits, and balanced warm spice.",
      finish: "Prolonged velvety warmth with sweet toasted brioche and oak tannin.",
    },
  },
  {
    id: "bluewhale",
    name: "Blue Whale",
    subtitle: "Coastal Blended Whisky",
    category: "Whisky",
    image: "/bluewhale.png",
    abv: "42.8% V/V",
    proof: "75° Proof",
    volume: "750 ml",
    profile: "Maritime Oak Voyage",
    caskType: "Coastal Cellared Bourbon Casks",
    accentColor: "#1B75BC",
    glowColor: "rgba(27, 117, 188, 0.35)",
    description:
      "Inspired by legendary seafaring voyages. A bold maritime whisky blending peated seaside salinity with gentle honeyed grain sweetness.",
    tastingNotes: {
      nose: "Sea breeze salinity, fresh lemon zest, subtle maritime peat, and ripe green apples.",
      palate: "Smooth undulating waves of malt, cracked pepper, salted caramel, and coastal oak.",
      finish: "Crisp and lingering with refreshing mineral brightness and maritime smoke.",
    },
  },
  {
    id: "harisonpremium",
    name: "Harison Premium",
    subtitle: "Royal Reserve Whisky",
    category: "Whisky",
    image: "/harisonpremium.png",
    abv: "42.8% V/V",
    proof: "75° Proof",
    volume: "750 ml",
    profile: "Imperial Grain & Malt",
    caskType: "Toasted Oloroso Sherry Hogsheads",
    accentColor: "#C1272D",
    glowColor: "rgba(193, 39, 45, 0.35)",
    description:
      "Crafted for those who lead. A royal assemblage of rich highland malt and column-distilled grain, presenting royal crimson grandeur.",
    tastingNotes: {
      nose: "Dark sultanas, dried plums, winter cinnamon, and deep toasted hazelnut.",
      palate: "Bold sherry-infused dried fruits, dark muscovado sugar, and velvety spice.",
      finish: "Noble, long-lasting warmth with dried dark fruits and lingering spiced wood.",
    },
  },
  {
    id: "7night",
    name: "7Night Whiskey",
    subtitle: "Finest Grain Blend",
    category: "Whisky",
    image: "/7night.png",
    abv: "42.8% V/V",
    proof: "75° Proof",
    volume: "750 ml",
    profile: "Celestial Velvet Blend",
    caskType: "Charred White Oak Barrels",
    accentColor: "#5856D6",
    glowColor: "rgba(88, 86, 214, 0.35)",
    description:
      "Conceived for evening communion. A silky and distinctive grain spirit, precision-cut for an ultra-smooth, nocturnal drinking experience.",
    tastingNotes: {
      nose: "Sweet vanilla bean, night blossom floral notes, fresh biscuit, and light toffee.",
      palate: "Ultra-silky grain texture, toasted cereal grains, almond cream, and sweet honey.",
      finish: "Effortlessly clean with sweet vanilla wafer and gentle soothing oak.",
    },
  },
  {
    id: "julieblack",
    name: "Julie Black Vodka",
    subtitle: "Triple Filtered Crystal Spirit",
    category: "Vodka",
    image: "/julieblack.png",
    abv: "42.8% V/V",
    proof: "85.6° Proof",
    volume: "750 ml",
    profile: "Hyper-Pure Quadruple Cut",
    caskType: "Pure Platinum & Quartz Filtration",
    accentColor: "#8E44AD",
    glowColor: "rgba(142, 68, 173, 0.35)",
    description:
      "Purity elevated to sculpture. Distilled from select wheat grain and slow-filtered through quartz crystal columns for sheer velvet clarity.",
    tastingNotes: {
      nose: "Zero astringency, clean crisp grain sweetness, and faint hints of white pepper.",
      palate: "Viscous, liquid-silk mouthfeel with delicate sweet cream and crystalline purity.",
      finish: "Spotless, diamond-crisp finish with zero burn and a delicate cool mineral touch.",
    },
  },
  {
    id: "midnightblues",
    name: "Midnight Blues Rum",
    subtitle: "30 Years Old Legacy Spiced Dark Rum",
    category: "Rum",
    image: "/midnightblues.png",
    abv: "42.8% V/V",
    proof: "75° Proof",
    volume: "750 ml",
    profile: "Slow-Matured Dark Cane",
    caskType: "Heavy Char Ex-Bourbon Casks",
    accentColor: "#D35400",
    glowColor: "rgba(211, 84, 0, 0.38)",
    description:
      "A tribute to thirty years of cane fermentation mastery. Deep dark mahogany, matured under tropical cellaring for supreme aromatic intensity.",
    tastingNotes: {
      nose: "Molasses, burnt demerara sugar, spiced vanilla, roasted espresso, and pipe tobacco.",
      palate: "Full-bodied velvet molasses, dark cacao, cloves, nutmeg, and caramelized fig.",
      finish: "Enveloping, deep tropical wood warmth with lingering chocolate and roasted spice.",
    },
  },
];

// Interactive 3D Tilt Component
function InteractiveBottleStage({ bottle }: { bottle: BottleExpression }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 220,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), {
    stiffness: 220,
    damping: 24,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[340px] sm:h-[440px] md:h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      style={{ perspective: 1100 }}
    >
      {/* Dynamic Backlight Halo */}
      <div
        className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-88 md:h-88 rounded-full blur-[80px] pointer-events-none -z-10 transition-colors duration-500"
        style={{
          background: `radial-gradient(circle, ${bottle.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Ground Specular Reflection */}
      <div className="absolute bottom-4 sm:bottom-6 w-36 sm:w-56 h-6 rounded-[100%] bg-stone-900/10 blur-[6px] pointer-events-none -z-10" />

      {/* 3D Tilted Bottle Stage */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] flex items-center justify-center"
        >
          <Image
            src={bottle.image}
            alt={bottle.name}
            fill
            priority
            quality={95}
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 420px, 520px"
            className="object-contain filter drop-shadow-[0_20px_30px_rgba(25,18,10,0.25)]"
          />
        </motion.div>
      </motion.div>

      {/* Interactive 3D Cue */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/80 border border-[#E5DAC8] shadow-2xs backdrop-blur-xs text-[9px] font-crest uppercase tracking-wider text-stone-600 font-semibold pointer-events-none">
        <Sparkles className="w-3 h-3 text-[#B88936]" />
        <span>3D Drag</span>
      </div>
    </div>
  );
}

export default function BrandsShowcaseGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % BRAND_EXPRESSIONS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? BRAND_EXPRESSIONS.length - 1 : prev - 1
    );
  };

  const currentBottle = BRAND_EXPRESSIONS[currentIndex];

  return (
    <section
      id="gallery"
      className="relative w-full py-12 sm:py-20 md:py-24 bg-[#FAF8F5] text-[#1E1915] overflow-hidden border-b border-[#E8DEC8]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Carousel Nav Controls */}
        <div className="flex items-center justify-between mb-6 sm:mb-10 pb-4 border-b border-[#E5DAC8]">
          <div>
            <span className="font-crest text-[9px] sm:text-xs tracking-[0.25em] text-[#826226] uppercase font-bold">
              The Master Vault • 0{currentIndex + 1} of 0{BRAND_EXPRESSIONS.length}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#17130F] font-normal mt-0.5">
              Featured <span className="italic font-light text-[#A77C2E]">Expression.</span>
            </h2>
          </div>

          {/* Next / Prev Chevrons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Expression"
              className="w-10 h-10 rounded-full border border-[#E0D0B8] bg-white flex items-center justify-center text-stone-700 hover:text-[#826226] hover:border-[#826226] hover:bg-[#FAF6EE] shadow-2xs active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Expression"
              className="w-10 h-10 rounded-full border border-[#E0D0B8] bg-white flex items-center justify-center text-stone-700 hover:text-[#826226] hover:border-[#826226] hover:bg-[#FAF6EE] shadow-2xs active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Selection Horizontal Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none snap-x snap-mandatory">
          {BRAND_EXPRESSIONS.map((bottle, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={bottle.id}
                onClick={() => setCurrentIndex(idx)}
                className={`snap-start shrink-0 px-3.5 py-1.5 rounded-full font-crest text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-200 cursor-pointer border flex items-center gap-2 ${
                  isActive
                    ? "bg-[#B88936] text-stone-950 font-bold border-[#826226] shadow-2xs scale-102"
                    : "bg-white border-[#E8DEC8] text-stone-600 hover:border-[#B88936] hover:bg-[#FAF6EE]"
                }`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: isActive ? "#261905" : bottle.accentColor,
                  }}
                />
                <span>{bottle.name}</span>
              </button>
            );
          })}
        </div>

        {/* Single Stage: Exactly ONE child inside AnimatePresence (No console warnings) */}
        <div className="relative min-h-[460px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBottle.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center"
            >
              {/* Left Column: 3D Bottle Display */}
              <div className="lg:col-span-6 flex justify-center">
                <InteractiveBottleStage bottle={currentBottle} />
              </div>

              {/* Right Column: Bottle Dossier & Sensory Architecture */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: currentBottle.accentColor }}
                    />
                    <span className="font-crest text-[10px] uppercase tracking-[0.25em] text-[#826226] font-bold">
                      {currentBottle.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#17130F] font-normal tracking-tight">
                    {currentBottle.name}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm font-sans font-light leading-relaxed">
                    {currentBottle.description}
                  </p>
                </div>

                {/* Specs Bar */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-white border border-[#E8DEC8] shadow-2xs text-center sm:text-left">
                  <div className="sm:px-2">
                    <span className="font-crest text-[8.5px] uppercase tracking-wider text-stone-500 font-semibold block">
                      Strength
                    </span>
                    <span className="font-serif text-sm sm:text-base font-bold text-stone-900 block mt-0.5">
                      {currentBottle.abv}
                    </span>
                    <span className="text-[9.5px] text-stone-400 font-mono">
                      {currentBottle.proof}
                    </span>
                  </div>

                  <div className="border-x border-[#EFE5D8] px-2">
                    <span className="font-crest text-[8.5px] uppercase tracking-wider text-stone-500 font-semibold block">
                      Volume
                    </span>
                    <span className="font-serif text-sm sm:text-base font-bold text-stone-900 block mt-0.5">
                      {currentBottle.volume}
                    </span>
                    <span className="text-[9.5px] text-stone-400 font-mono">
                      Glass Decanter
                    </span>
                  </div>

                  <div className="sm:px-2">
                    <span className="font-crest text-[8.5px] uppercase tracking-wider text-stone-500 font-semibold block">
                      Profile
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#826226] block mt-0.5 truncate">
                      {currentBottle.profile.split(" ")[0]}
                    </span>
                    <span className="text-[9.5px] text-stone-400 truncate block">
                      Master Selection
                    </span>
                  </div>
                </div>

                {/* Tasting Notes */}
                <div className="space-y-2 p-3.5 sm:p-4 rounded-lg bg-white/70 border border-[#E8DEC8]">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-[#EFE5D8]">
                    <Compass className="w-3.5 h-3.5 text-[#B88936]" />
                    <span className="font-crest text-[9px] uppercase tracking-[0.2em] text-[#826226] font-bold">
                      Tasting Profile
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="font-crest text-[9px] uppercase tracking-wider text-stone-500 font-bold shrink-0 w-12 mt-0.5">
                        Nose
                      </span>
                      <p className="text-stone-700 leading-relaxed font-sans text-xs">
                        {currentBottle.tastingNotes.nose}
                      </p>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="font-crest text-[9px] uppercase tracking-wider text-stone-500 font-bold shrink-0 w-12 mt-0.5">
                        Palate
                      </span>
                      <p className="text-stone-700 leading-relaxed font-sans text-xs">
                        {currentBottle.tastingNotes.palate}
                      </p>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="font-crest text-[9px] uppercase tracking-wider text-stone-500 font-bold shrink-0 w-12 mt-0.5">
                        Finish
                      </span>
                      <p className="text-stone-700 leading-relaxed font-sans text-xs">
                        {currentBottle.tastingNotes.finish}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions & Next/Prev Controls */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                  <Link
                    href={`/contact?brand=${currentBottle.id}`}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F3C644] via-[#E0A838] to-[#C98F20] text-stone-950 font-crest text-[11px] font-bold uppercase tracking-[0.18em] shadow-sm hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <span>Contact Now </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center justify-center gap-3 text-xs text-stone-500 font-crest">
                    <button
                      onClick={handlePrev}
                      className="hover:text-stone-900 transition-colors uppercase tracking-wider text-[10px]"
                    >
                      ← Prev
                    </button>
                    <span>•</span>
                    <button
                      onClick={handleNext}
                      className="hover:text-stone-900 transition-colors uppercase tracking-wider text-[10px]"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}