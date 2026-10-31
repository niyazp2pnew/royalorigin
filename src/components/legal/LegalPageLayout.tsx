"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowLeft, Printer, Clock } from "lucide-react";

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  category: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  category,
  children,
}: LegalPageLayoutProps) {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1915]">
      {/* 1. Header Hero */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 bg-[#080706] text-white border-b border-[#F3C644]/20 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E0A838]/8 blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col items-center text-center">
            
            {/* Monogram */}
            <div className="relative w-12 h-12 mb-3">
              <Image
                src="/icon.png"
                alt="Royal Origin Emblem"
                fill
                priority
                className="object-contain filter drop-shadow-[0_4px_16px_rgba(224,168,56,0.5)]"
              />
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2 text-[#FFE899]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F3C644]" />
              <span className="font-crest text-[9px] uppercase tracking-[0.24em] font-semibold">
                {category} • Governance Framework
              </span>
            </div>

            {/* Document Title */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white leading-tight">
              {title}
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-stone-300 font-sans font-light max-w-lg leading-relaxed">
              {subtitle}
            </p>

            {/* Meta Strip */}
            <div className="mt-6 flex items-center gap-5 text-[10px] font-crest uppercase tracking-wider text-stone-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#F3C644]" />
                <span>Effective: {lastUpdated}</span>
              </div>
              <span>•</span>
              <span>Doc Ref: RO/LEG-2026/V4</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Navigation & Actions Bar */}
      <div className="border-b border-[#E8DEC8] bg-[#FAF8F5]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-crest uppercase tracking-wider text-[#8C6925] hover:text-stone-900 font-bold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to House</span>
          </Link>


        </div>
      </div>

      {/* 3. Document Content Body */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16 md:py-20">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-[#18130E] prose-headings:font-normal prose-h2:text-2xl prose-h2:border-b prose-h2:border-[#EAE0D2] prose-h2:pb-3 prose-h3:text-lg prose-p:text-stone-700 prose-p:text-xs sm:prose-p:text-sm prose-p:leading-relaxed prose-li:text-xs sm:prose-li:text-sm prose-li:text-stone-700 prose-strong:text-stone-900 prose-strong:font-semibold"
        >
          {children}
        </motion.article>

        {/* Corporate Sign-off Footer */}
        <div className="mt-16 pt-8 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500 font-sans">
          <div>
            <p className="font-semibold text-stone-800">
              Corporate Secretariat & Legal Counsel
            </p>
            <p>Royal Origin Distillery Limited • B-28 Noida Sector 132, UP - 201306, India</p>
          </div>
          <p className="font-mono text-[11px]">
            contact@royalorigin.in • +91 120 466 4253
          </p>
        </div>
      </main>
    </div>
  );
}