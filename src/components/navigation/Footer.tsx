"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";

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

const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Brands", href: "/brands" },
  { label: "Business", href: "/business" },
  { label: "Invest", href: "/invest" },
  { label: "Management", href: "/management" },
  { label: "Contact Us", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Statutory Compliance", href: "/compliance" },
  { label: "Cookie Governance", href: "/cookies" },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full bg-[#090706] text-stone-300 border-t border-[#F3C644]/25 pt-16 sm:pt-20 pb-8 overflow-hidden z-20">
      {/* Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#F3C644]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Primary 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-[#F3C644]/15">
          
          {/* Column 1: Brand Icon, Identity & Socials */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3.5 group">
                <div className="relative w-11 h-11 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/icon.png"
                    alt="Royal Origin Emblem"
                    fill
                    className="object-contain filter drop-shadow-[0_2px_8px_rgba(243,198,68,0.4)]"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-crest text-sm tracking-[0.22em] text-[#FFE899] font-bold uppercase group-hover:text-white transition-colors leading-tight">
                    Royal Origin
                  </span>
                  <span className="font-crest text-[8.5px] tracking-[0.28em] text-[#C5A880] uppercase font-light">
                    Distillery Limited
                  </span>
                </div>
              </Link>

              <p className="mt-5 text-xs sm:text-sm text-stone-400 font-sans font-light leading-relaxed max-w-sm">
                Pioneering private spirit distillation. Double wood maturation, artisanal blends, and international trade corridors across global customs ports.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="font-crest text-[9px] tracking-[0.2em] text-[#F3C644] font-semibold">
                  ISO 9001:2015 • HACCP • FSSAI LICENSED
                </span>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://facebook.com/royalorigindistillery"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[#F3C644]/30 bg-black/40 flex items-center justify-center text-stone-300 hover:text-[#FFE899] hover:border-[#FFE899] hover:bg-[#F3C644]/10 transition-all duration-200"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/royalorigindistillery"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#F3C644]/30 bg-black/40 flex items-center justify-center text-stone-300 hover:text-[#FFE899] hover:border-[#FFE899] hover:bg-[#F3C644]/10 transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/royal-origin-distillery-limited"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-[#F3C644]/30 bg-black/40 flex items-center justify-center text-stone-300 hover:text-[#FFE899] hover:border-[#FFE899] hover:bg-[#F3C644]/10 transition-all duration-200"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/royalorigindistillery"
                target="_blank"
                rel="noreferrer"
                aria-label="X Twitter"
                className="w-9 h-9 rounded-full border border-[#F3C644]/30 bg-black/40 flex items-center justify-center text-stone-300 hover:text-[#FFE899] hover:border-[#FFE899] hover:bg-[#F3C644]/10 transition-all duration-200"
              >
                <XTwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-crest text-xs uppercase tracking-[0.25em] text-[#FFE899] font-bold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F3C644]" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {MENU_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs font-sans text-stone-400 hover:text-[#FFE899] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#F3C644] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Governance & Legal */}
          <div className="lg:col-span-3">
            <h4 className="font-crest text-xs uppercase tracking-[0.25em] text-[#FFE899] font-bold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F3C644]" />
              Governance & Legal
            </h4>
            <ul className="space-y-3" suppressHydrationWarning>
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs font-sans text-stone-400 hover:text-[#FFE899] transition-colors"
                  >
                    <span>{link.label}</span> 
                    <ArrowUpRight className="w-3 h-3 text-[#F3C644] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Corporate Desk Details */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-crest text-xs uppercase tracking-[0.25em] text-[#FFE899] font-bold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F3C644]" />
                Corporate Desk
              </h4>
              <div className="space-y-4 text-xs font-sans text-stone-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#F3C644] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    B - 28 Noida 132, <br />
                    UP - 201306, India
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#F3C644] shrink-0" />
                  <a
                    href="mailto:contact@royalorigin.in"
                    className="hover:text-[#FFE899] transition-colors"
                  >
                    contact@royalorigin.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#F3C644] shrink-0" />
                  <a
                    href="tel:+911204664253"
                    className="hover:text-[#FFE899] transition-colors"
                  >
                    +91 120 466 4253
                  </a>
                </div>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="mt-8 pt-4">
              <button
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="group flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#F3C644]/40 bg-black/40 hover:bg-[#F3C644]/15 hover:border-[#FFE899] text-[#FFE899] transition-all duration-300 cursor-pointer"
              >
                <span className="font-crest text-[10px] tracking-[0.2em] uppercase font-semibold">
                  Top 
                </span>
                <div className="w-5 h-5 rounded-full bg-[#F3C644]/20 flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUp className="w-3 h-3 text-[#F3C644]" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Regulatory Notice & Dynamic Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-crest text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.25em] text-[#C5A880]/90 font-medium">
            Strict Adherence to Legal Drinking Age Laws (21+) • Please Drink Responsibly
          </p>

          <p className="text-[11px] font-sans text-stone-500">
            © {currentYear ?? 2026} Royal Origin Distillery Limited. All statutory rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}