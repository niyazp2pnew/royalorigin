"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, ShieldCheck, PhoneCall } from "lucide-react";

export default function InvestCTA() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#FAF8F5] text-[#1E1915] overflow-hidden border-b border-[#E8DEC8]">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E0A838]/8 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl bg-white border border-[#E5DAC8] p-8 sm:p-12 md:p-14 text-center shadow-sm flex flex-col items-center"
        >
          {/* Emblem Monogram */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-4">
            <Image
              src="/icon.png"
              alt="Royal Origin Emblem"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex items-center gap-2 text-[#9A7023] mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-crest text-[10px] uppercase tracking-[0.24em] font-bold">
              Institutional Trade Bureau
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#18130E] tracking-tight leading-tight max-w-xl">
            Initiate Capital Dialogue. <br />
            <span className="italic font-light text-[#A87926]">
              Contact Corporate Desk.
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed max-w-md">
            Connect directly with our managing partners for strategic equity alliances, physical cask allocations, and export financing.
          </p>

          {/* Action Button */}
          <div className="mt-8 w-full max-w-xs">
            <Link
              href="/contact"
              className="w-full py-3.5 px-7 rounded-full bg-gradient-to-r from-[#F3C644] via-[#E0A838] to-[#C98F20] text-stone-950 font-crest text-xs font-bold uppercase tracking-[0.18em] shadow-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 stroke-[2.2]" />
              <span>Contact Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>

          <p className="mt-6 text-[10px] font-crest uppercase tracking-wider text-stone-400">
            FSSAI Licensed • HACCP Certified • ISO 9001:2015 Compliant
          </p>
        </motion.div>
      </div>
    </section>
  );
}