"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Brands", href: "/brands" },
  { label: "Business", href: "/business" },
  { label: "Invest", href: "/invest" },
  { label: "Management", href: "/management" },
  { label: "Contact Us", href: "/contact" },
];

// Clean SVGs for Social Icons
function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XTwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

// Drawer animation variants
const menuVariants: Variants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      damping: 26,
      stiffness: 220,
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { ease: "easeInOut", duration: 0.22 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-[#0b0907]/90 backdrop-blur-md border-b border-[#F3C644]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
            : "bg-transparent border-b border-transparent py-5 lg:py-6"
        }`}
      >
        <div className="w-full px-4 sm:px-8 xl:px-12 flex items-center justify-between">
          {/* 1. EXTREME LEFT: LOGO + COMPANY NAME */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
            aria-label="Royal Origin Distillery Limited Home"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/icon.png"
                alt="Royal Origin Monogram"
                fill
                priority
                className="object-contain filter drop-shadow-[0_2px_8px_rgba(243,198,68,0.4)]"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-crest text-xs sm:text-sm tracking-[0.22em] text-[#FFE899] font-bold uppercase group-hover:text-white transition-colors leading-tight">
                Royal Origin
              </span>
              <span className="font-crest text-[7.5px] sm:text-[8.5px] tracking-[0.28em] text-[#C5A880] uppercase font-light">
                Distillery Limited
              </span>
            </div>
          </Link>

          {/* 2. DEAD CENTER: NAVIGATION MENU */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative py-1 text-xs font-crest uppercase tracking-[0.18em] text-stone-200 hover:text-[#FFE899] transition-colors duration-200 group"
              >
                <span>{link.label}</span>
                {/* Underline hover effect */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#F3C644] to-transparent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* 3. EXTREME RIGHT: SOCIAL ICONS + DESK BUTTON */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
            {/* Social Icons Row */}
            <div className="flex items-center gap-3 text-stone-300 pr-2 border-r border-[#F3C644]/25">
              <a
                href="https://www.facebook.com/royalorigindistillery"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-1 rounded-full text-stone-300 hover:text-[#FFE899] hover:scale-110 transition-all duration-200"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/royalorigindistillery"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-1 rounded-full text-stone-300 hover:text-[#FFE899] hover:scale-110 transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/royal-origin-distillery-limited"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-1 rounded-full text-stone-300 hover:text-[#FFE899] hover:scale-110 transition-all duration-200"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/royalorigindistillery"
                target="_blank"
                rel="noreferrer"
                aria-label="X Twitter"
                className="p-1 rounded-full text-stone-300 hover:text-[#FFE899] hover:scale-110 transition-all duration-200"
              >
                <XTwitterIcon className="w-4 h-4" />
              </a>
            </div>

            {/* DESK Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#F3C644]/60 bg-black/40 hover:bg-[#F3C644]/15 hover:border-[#FFE899] text-[#FFE899] text-[10px] xl:text-[11px] font-crest tracking-[0.18em] uppercase font-semibold transition-all duration-200 shadow-sm"
            >
              <span>Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F3C644]" />
            </Link>
          </div>

          {/* 4. MOBILE HAMBURGER BUTTON */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
              className="p-2 rounded-md text-[#FFE899] border border-[#F3C644]/40 bg-black/40 hover:bg-[#F3C644]/20 transition-colors focus:outline-none"
            >
              <Menu className="w-6 h-6 stroke-[1.8]" />
            </button>
          </div>
        </div>
      </header>

      {/* 5. MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md lg:hidden"
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#0c0a08] border-l border-[#F3C644]/30 p-6 flex flex-col justify-between shadow-2xl"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#F3C644]/20">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8">
                      <Image
                        src="/icon.png"
                        alt="Royal Origin Emblem"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-crest text-xs tracking-[0.2em] text-[#FFE899] font-bold uppercase">
                      Royal Origin
                    </span>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close Mobile Menu"
                    className="p-2 rounded-full border border-[#F3C644]/30 text-[#FFE899] hover:bg-[#F3C644]/15 transition-colors focus:outline-none"
                  >
                    <X className="w-5 h-5 stroke-[2]" />
                  </button>
                </div>

                {/* Staggered Navigation */}
                <nav className="flex flex-col mt-6 space-y-3.5">
                  {NAV_LINKS.map((link) => (
                    <motion.div key={link.label} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex items-center justify-between py-2 text-sm font-crest uppercase tracking-[0.2em] text-stone-200 hover:text-[#FFE899] transition-colors"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#F3C644]/60 group-hover:text-[#F3C644] transition-colors" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Drawer Bottom */}
              <div className="pt-6 border-t border-[#F3C644]/20">
                <p className="font-crest text-[9px] uppercase tracking-[0.25em] text-[#C5A880] mb-3 text-center">
                  Official Channels
                </p>

                {/* Socials Row */}
                <div className="flex justify-center items-center gap-4 text-stone-300 mb-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="p-2 rounded-full border border-[#F3C644]/30 hover:text-[#FFE899] hover:border-[#FFE899] transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="p-2.5 rounded-full border border-[#F3C644]/30 hover:text-[#FFE899] hover:border-[#FFE899] transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="p-2.5 rounded-full border border-[#F3C644]/30 hover:text-[#FFE899] hover:border-[#FFE899] transition-colors"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X Twitter"
                    className="p-2.5 rounded-full border border-[#F3C644]/30 hover:text-[#FFE899] hover:border-[#FFE899] transition-colors"
                  >
                    <XTwitterIcon className="w-4 h-4" />
                  </a>
                </div>

                <Link
                  href="/trade-desk"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3 text-center rounded-full bg-gradient-to-r from-[#FFE27D] via-[#E2B13C] to-[#C49226] font-crest text-xs font-bold uppercase tracking-[0.2em] text-[#1c1404] shadow-lg hover:brightness-105 transition"
                >
                  Associate With House
                </Link>

                <p className="text-[9px] text-stone-400 text-center tracking-tight mt-4">
                  Strict adherence to legal drinking age laws (21+).
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}