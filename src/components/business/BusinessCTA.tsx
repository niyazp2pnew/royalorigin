"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Mail, ShieldCheck } from "lucide-react";

export default function BusinessCTA() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#FAF8F5] text-[#1E1915] overflow-hidden border-b border-[#E8DEC8]">
      {/* Ambient Mesh Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#E0A838]/8 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl bg-white border border-[#E5DAC8] p-8 sm:p-12 md:p-16 text-center shadow-sm flex flex-col items-center"
        >
          {/* Emblem */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-4">
            <Image
              src="/icon.png"
              alt="Royal Origin Monogram"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex items-center gap-2 text-[#9A7023] mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-crest text-[10px] uppercase tracking-[0.24em] font-bold">
              Institutional Trade Protocol
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#18130E] tracking-tight leading-tight max-w-2xl">
            Command Your Territory. <br />
            <span className="italic font-light text-[#A87926]">
              Partner with Royal Origin.
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed max-w-xl">
            Explore institutional investment in our automated maturation cellars, or initiate bulk export allocations through our international trade bureau.
          </p>

          {/* Double CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full max-w-md">
            {/* Button 1: Invest Page */}
            <Link
              href="/invest"
              className="flex-1 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#F3C644] via-[#E0A838] to-[#C98F20] text-stone-950 font-crest text-xs font-bold uppercase tracking-[0.18em] shadow-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center"
            >
              <TrendingUp className="w-4 h-4 stroke-[2.2]" />
              <span>Invest Now</span>
            </Link>

            {/* Button 2: Contact Desk */}
            <Link
              href="/contact"
              className="flex-1 py-3.5 px-6 rounded-full border border-[#D5C2A5] bg-[#FAF8F5] hover:bg-stone-50 text-stone-800 font-crest text-xs font-semibold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 text-center"
            >
              <Mail className="w-4 h-4 stroke-[2]" />
              <span>Contact Desk</span>
            </Link>
          </div>

          {/* Compliance Assurance */}
          <p className="mt-6 text-[10px] font-crest uppercase tracking-wider text-stone-400 font-medium">
            FSSAI Licensed • HACCP Certified • ISO 9001:2015 Compliant
          </p>
        </motion.div>
      </div>
    </section>
  );
}