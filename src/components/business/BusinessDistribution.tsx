"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Warehouse,
  Truck,
  FileCheck2,
  Boxes,
  CheckCircle2,
} from "lucide-react";

const DISTRIBUTION_PILLARS = [
  {
    icon: Warehouse,
    title: "Bonded Cellaring & Warehousing",
    description:
      "Temperature-regulated oak cask storage, multi-tier bulk spirit reserves, and state-of-the-art secure dispatch depots.",
  },
  {
    icon: Truck,
    title: "Multi-Modal Freight Logistics",
    description:
      "Continuous domestic trade routes paired with intermodal sea freight routes serving major international customs harbors.",
  },
  {
    icon: FileCheck2,
    title: "Statutory Customs & Licensing",
    description:
      "Zero-defect regulatory adherence with FSSAI, HACCP, HMRC, and FDA import standards for fast trade approvals.",
  },
  {
    icon: Boxes,
    title: "Private Label Brand Incubation",
    description:
      "Turnkey spirit rectification, custom decanter procurement, recipe formulation, and targeted launch distribution.",
  },
];

export default function BusinessDistribution() {
  return (
    <section
      id="distribution"
      className="relative w-full py-16 sm:py-24 md:py-32 bg-[#FAF8F5] text-[#1E1915] overflow-hidden border-b border-[#E8DEC8]"
    >
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#E0A838]/8 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] rounded-full bg-white blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="h-[1px] w-8 bg-[#C9983A]" />
            <span className="font-crest text-[10px] sm:text-xs tracking-[0.28em] text-[#9A7023] uppercase font-bold">
              Trade Ecosystem • Distribution Operations
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#17130F] leading-[1.12]">
            Comprehensive Distribution. <br />
            <span className="italic font-light text-[#A87926]">
              Engineered for Enterprise Scale.
            </span>
          </h2>

          <p className="mt-4 text-stone-600 text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed">
            Royal Origin provides premier distribution services for curated alcohol labels. From supply chain acceleration to regional channel placement, we manage the complete transit pipeline.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 mb-14 sm:mb-18">
          {DISTRIBUTION_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-xl bg-white border border-[#E9DFCE] shadow-2xs hover:shadow-md hover:border-[#D69726]/60 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF4EA] border border-[#E3D1B5] flex items-center justify-center text-[#9A7023] shrink-0 mt-1">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>

                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#18130E] font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner with Direct CTA to /invest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl bg-gradient-to-r from-[#F5ECE0] via-[#FBF7F0] to-[#F5ECE0] border border-[#E0D0B8] p-6 sm:p-10 shadow-sm overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0A838]/15 border border-[#E0A838]/30 text-[9.5px] font-crest uppercase tracking-wider text-[#9A7023] font-bold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Capital Opportunities & Brand Alliances</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E1915] font-normal leading-tight">
                Distribute or Invest in our High-Throughput Infrastructure.
              </h3>

              <p className="text-xs sm:text-sm text-stone-700 font-sans font-light max-w-2xl leading-relaxed">
                Whether you require bespoke international distribution corridors for a specific brand expression or seek institutional participation in our automated distillation and maturation facilities.
              </p>
            </div>

            {/* CTA Button to /invest */}
            <div className="shrink-0 w-full lg:w-auto">
              <Link
                href="/invest"
                className="w-full lg:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F3C644] via-[#E0A838] to-[#C98F20] text-stone-950 font-crest text-xs font-bold uppercase tracking-[0.18em] shadow-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Associate With Us</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}