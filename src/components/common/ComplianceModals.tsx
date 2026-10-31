"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cookie, AlertTriangle, Check, X } from "lucide-react";

const STORAGE_KEYS = {
  AGE_VERIFIED: "ro_age_verified",
  COOKIE_CONSENT: "ro_cookie_consent",
};

export default function ComplianceModals() {
  const [mounted, setMounted] = useState(false);
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [underageBlocked, setUnderageBlocked] = useState(false);

  useEffect(() => {
    setMounted(true);
    const ageVerified = localStorage.getItem(STORAGE_KEYS.AGE_VERIFIED);
    const cookieConsent = localStorage.getItem(STORAGE_KEYS.COOKIE_CONSENT);

    if (!ageVerified) {
      setShowAgeModal(true);
    } else if (!cookieConsent) {
      setShowCookieModal(true);
    }
  }, []);

  const handleAgeConfirm = () => {
    localStorage.setItem(STORAGE_KEYS.AGE_VERIFIED, "true");
    setShowAgeModal(false);

    // Trigger cookie modal next if not yet set
    const cookieConsent = localStorage.getItem(STORAGE_KEYS.COOKIE_CONSENT);
    if (!cookieConsent) {
      setTimeout(() => setShowCookieModal(true), 400);
    }
  };

  const handleAgeReject = () => {
    setUnderageBlocked(true);
  };

  const handleCookieChoice = (accepted: boolean) => {
    localStorage.setItem(
      STORAGE_KEYS.COOKIE_CONSENT,
      accepted ? "accepted" : "rejected"
    );
    setShowCookieModal(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* 1. AGE VERIFICATION MODAL ("THE SANCTUARY GATE") */}
      <AnimatePresence>
        {showAgeModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl select-none">
            {/* Ambient Gold Mesh Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#E0A838]/10 blur-[130px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg rounded-2xl bg-[#0F0D0A] border border-[#F3C644]/40 p-6 sm:p-10 text-white text-center shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden"
            >
              {/* Subtle Gilded Corners */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#F3C644]/40" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#F3C644]/40" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#F3C644]/40" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#F3C644]/40" />

              {!underageBlocked ? (
                <>
                  {/* Monogram Icon */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4">
                    <Image
                      src="/icon.png"
                      alt="Royal Origin Emblem"
                      fill
                      priority
                      className="object-contain filter drop-shadow-[0_4px_16px_rgba(243,198,68,0.5)]"
                    />
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-center gap-2 mb-2 text-[#FFE899]">
                    <ShieldCheck className="w-4 h-4 text-[#F3C644]" />
                    <span className="font-crest text-[9.5px] uppercase tracking-[0.26em] font-semibold">
                      Royal Origin Distillery
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight leading-tight">
                    The Sanctuary Gate
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-stone-300 font-sans font-light leading-relaxed max-w-md mx-auto">
                    Are you of legal drinking age (21+ in the Republic of India, or the statutory purchase age in your sovereign country of residence)?
                  </p>

                  <p className="mt-2 text-[10px] text-stone-500 font-sans italic">
                    Enjoy responsibly. You must be of legal purchase age to view this portfolio. Do not forward to minors.
                  </p>

                  {/* Action Buttons: Yes / No */}
                  <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full">
                    <button
                      onClick={handleAgeConfirm}
                      className="flex-1 py-3.5 px-6 rounded-full royal-gold-gradient text-stone-950 font-crest text-xs font-bold uppercase tracking-[0.18em] shadow-[0_4px_20px_rgba(224,168,56,0.35)] hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Check className="w-4 h-4 stroke-[2.5]" />
                      <span>Yes, I Am (21+)</span>
                    </button>

                    <button
                      onClick={handleAgeReject}
                      className="flex-1 py-3.5 px-6 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-stone-300 font-crest text-xs font-semibold uppercase tracking-[0.18em] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                      <span>No, Exit</span>
                    </button>
                  </div>
                </>
              ) : (
                /* Underage Exit Guard */
                <div className="py-6 flex flex-col items-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-400">
                    <AlertTriangle className="w-7 h-7" />
                  </div>

                  <h3 className="font-serif text-2xl text-white font-normal">
                    Access Denied
                  </h3>

                  <p className="text-xs text-stone-400 font-sans leading-relaxed max-w-xs">
                    You must be of statutory drinking age to enter the House of Royal Origin. Access to this platform has been terminated.
                  </p>

                  <a
                    href="https://www.responsibility.org"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-stone-700 bg-stone-900 text-stone-300 font-crest text-[10px] uppercase tracking-wider hover:text-white hover:border-stone-500 transition-colors"
                  >
                    <span>Learn About Responsible Drinking</span>
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. COOKIE GOVERNANCE MODAL (ACCEPT / REJECT) */}
      <AnimatePresence>
        {showCookieModal && !showAgeModal && (
          <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-auto sm:max-w-md z-[9990] select-none">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl bg-[#0F0D0A]/95 border border-[#F3C644]/40 p-5 sm:p-6 text-white shadow-[0_12px_45px_rgba(0,0,0,0.85)] backdrop-blur-md"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#E0A838]/15 border border-[#E0A838]/30 flex items-center justify-center text-[#F3C644] shrink-0 mt-0.5">
                  <Cookie className="w-4 h-4" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-crest text-[8.5px] uppercase tracking-[0.24em] text-[#FFE899] font-bold">
                      Cookie Governance
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-white font-normal leading-tight">
                    Data Consent & Telemetry
                  </h4>
                  <p className="text-xs text-stone-300 font-sans font-light leading-relaxed">
                    We deploy essential statutory cookies to persist legal age verification and analytics telemetry to optimize our international trade portal.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 flex items-center gap-2.5">
                <button
                  onClick={() => handleCookieChoice(true)}
                  className="flex-1 py-2.5 px-4 rounded-full royal-gold-gradient text-stone-950 font-crest text-[10.5px] font-bold uppercase tracking-[0.14em] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer text-center"
                >
                  Accept All
                </button>

                <button
                  onClick={() => handleCookieChoice(false)}
                  className="flex-1 py-2.5 px-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-stone-300 font-crest text-[10.5px] font-semibold uppercase tracking-[0.14em] active:scale-[0.98] transition-all cursor-pointer text-center"
                >
                  Reject Non-Essential
                </button>
              </div>

              {/* Legal Reference Link */}
              <div className="mt-3 text-center">
                <Link
                  href="/cookies"
                  className="text-[9.5px] font-crest uppercase tracking-wider text-[#C5A880] hover:text-[#FFE899] underline transition-colors"
                >
                  Inspect Cookie Policy & DPDP Standards
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}