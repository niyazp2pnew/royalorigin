"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  TrendingUp,
  X,
  CheckCircle2,
  ShieldCheck,
  Building,
  Coins,
  Send,
} from "lucide-react";

const PILLARS = [
  {
    icon: Building,
    title: "Asset-Backed Infrastructure",
    description:
      "Direct capital deployment into heavy automated bottling lines, copper pot rectification towers, and physical oak barrels.",
  },
  {
    icon: Coins,
    title: "Maturation Yield Arbitrage",
    description:
      "Spirit appreciation curve: grain and malt spirits compounding value as oak-aging progresses through 3, 5, and 12-year milestones.",
  },
  {
    icon: TrendingUp,
    title: "Sovereign Trade Corridors",
    description:
      "Revenue backed by recurring wholesale quotas, bonded warehouse clearances, and active retail shelf presence across 19+ countries.",
  },
];

export default function InvestModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: "", phone: "", email: "", state: "" });
    }, 2400);
  };

  return (
    <section
      id="investment-model"
      className="relative w-full py-16 sm:py-24 md:py-32 bg-[#FAF8F5] text-[#1E1915] overflow-hidden border-b border-[#E8DEC8]"
    >
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#E0A838]/8 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] rounded-full bg-white blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="h-[1px] w-8 bg-[#C9983A]" />
            <span className="font-crest text-[10px] sm:text-xs tracking-[0.28em] text-[#9A7023] uppercase font-bold">
              Investment Architecture • Enterprise Blueprint
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#17130F] leading-[1.12]">
            The Royal Origin Model. <br />
            <span className="italic font-light text-[#A87926]">
            Invest Now.
            </span>
          </h2>

          <p className="mt-4 text-stone-600 text-xs sm:text-sm md:text-base font-sans font-light leading-relaxed">
            Since 1994, Royal Origin Distillery has unified century-tested barrel maturation with high-speed automated production. Our model decouples private alcohol enterprise returns from volatile equity markets.
          </p>
        </div>

        {/* 3 Core Investment Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-14 sm:mb-18">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="p-6 sm:p-7 rounded-xl bg-white border border-[#E9DFCE] shadow-2xs hover:shadow-md hover:border-[#D69726]/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FAF4EA] border border-[#E3D1B5] flex items-center justify-center text-[#9A7023] mb-5">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#18130E] font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-stone-600 text-[11px] font-crest uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9A7023]" />
                  <span>Audited Structure</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Dossier Card with Guide Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl bg-gradient-to-r from-[#F5ECE0] via-[#FBF7F0] to-[#F5ECE0] border border-[#E0D0B8] p-6 sm:p-10 shadow-sm overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            <div className="space-y-3 text-center lg:text-left">
              <span className="font-crest text-[9px] uppercase tracking-[0.22em] text-[#9A7023] font-bold">
                Confidential Institutional Dossier
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1E1915] font-normal leading-tight">
                Request the Investment Guide.
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans font-light max-w-2xl leading-relaxed">
                Contains complete cap tables, cask valuation schedules, facility expansion plans, and sovereign duty-free distribution forecasts.
              </p>
            </div>

            {/* Guide Trigger Button */}
            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full lg:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#F3C644] via-[#E0A838] to-[#C98F20] text-stone-950 font-crest text-xs font-bold uppercase tracking-[0.18em] shadow-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 stroke-[2.2]" />
                <span>Get Investment Model Guide</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* INVESTMENT GUIDE FORM MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-md rounded-2xl bg-white border border-[#E0D0B8] p-6 sm:p-8 shadow-2xl text-[#1E1915]"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <span className="font-crest text-[9px] uppercase tracking-[0.24em] text-[#9A7023] font-bold">
                      Direct Dispatch Protocol
                    </span>
                    <h3 className="font-serif text-2xl text-[#18130E] font-semibold mt-1">
                      Investment Model Guide
                    </h3>
                    <p className="text-xs text-stone-500 font-sans mt-1">
                      Complete the details below to receive the confidential investment dossier.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-crest uppercase tracking-wider text-stone-700 font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Vikram Malhotra"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DECBB4] bg-[#FAF8F5] text-xs text-stone-900 focus:outline-hidden focus:border-[#9A7023] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-crest uppercase tracking-wider text-stone-700 font-semibold mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DECBB4] bg-[#FAF8F5] text-xs text-stone-900 focus:outline-hidden focus:border-[#9A7023] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-crest uppercase tracking-wider text-stone-700 font-semibold mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="vikram@investment.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DECBB4] bg-[#FAF8F5] text-xs text-stone-900 focus:outline-hidden focus:border-[#9A7023] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-crest uppercase tracking-wider text-stone-700 font-semibold mb-1">
                        State / Territory *
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="e.g. Punjab, Maharashtra, Delhi"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#DECBB4] bg-[#FAF8F5] text-xs text-stone-900 focus:outline-hidden focus:border-[#9A7023] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3.5 rounded-full bg-gradient-to-r from-[#F3C644] via-[#E0A838] to-[#C98F20] text-stone-950 font-crest text-xs font-bold uppercase tracking-[0.18em] shadow-sm hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 stroke-[2.4]" />
                      <span>Dispatch Guide Instantly</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#E0A838]/15 border border-[#E0A838] flex items-center justify-center text-[#9A7023]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl text-stone-900 font-semibold">
                    Dossier Dispatched
                  </h4>
                  <p className="text-xs text-stone-600 max-w-xs leading-relaxed">
                    Thank you, {formData.name}. The 2026–2030 Investment Guide has been transmitted to your email.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}