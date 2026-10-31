"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

export default function ManagementLeadership() {
  return (
    <section
      id="executive-leadership"
      className="relative w-full py-16 sm:py-24 md:py-32 bg-[#FAF8F5] text-[#1E1915] overflow-hidden border-b border-[#E8DEC8]"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#E0A838]/8 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] rounded-full bg-white blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        {/* Section Tag */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[1px] w-6 sm:w-10 bg-[#C9983A]" />
            <span className="font-crest text-[9.5px] sm:text-xs tracking-[0.26em] text-[#9A7023] uppercase font-bold">
              Executive Leadership
            </span>
            <div className="h-[1px] w-6 sm:w-10 bg-[#C9983A]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#18130E] font-normal">
            Commanding the Vision.
          </h2>
        </div>

        {/* CMD Portrait Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-[#E5DAC8] shadow-[0_12px_40px_rgba(40,25,10,0.06)] flex flex-col items-center text-center"
        >
          {/* Framed Image Container */}
          <div className="relative w-full aspect-square max-w-[340px] rounded-xl overflow-hidden border border-[#EFE5D8] shadow-inner bg-[#F5ECE0]">
            <Image
              src="/mohitsir.jpeg"
              alt="Mohit Shukla - Chairman & Managing Director"
              fill
              priority
              quality={95}
              sizes="(max-width: 640px) 90vw, 340px"
              className="object-cover object-top filter contrast-[1.02] hover:scale-102 transition-transform duration-500"
            />
            {/* Subtle Vignette Scrim */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl pointer-events-none" />
          </div>

          {/* Name & Designation Details (Strictly No Description) */}
          <div className="pt-6 pb-2 w-full flex flex-col items-center">
            <span className="font-crest text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-[#9A7023] font-bold">
              Leadership
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18130E] mt-1 tracking-tight">
              Mohit Shukla
            </h3>
            <p className="font-crest text-xs sm:text-sm uppercase tracking-[0.16em] text-stone-600 font-semibold mt-1">
              Chairman & Managing Director (CMD)
            </p>

            {/* Subtle Accent Separator */}
            <div className="mt-4 pt-4 border-t border-[#F0E6D8] w-full flex items-center justify-center gap-2 text-stone-400 font-crest text-[10px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9983A]" />
              <span>Royal Origin Distillery Limited</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}