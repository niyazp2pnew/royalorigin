"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export default function ContactOfficeMap() {
  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=B-28+Sector+132+Noida+UP+201306+India";

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 bg-[#FAF8F5] text-[#1E1915] overflow-hidden border-b border-[#E8DEC8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-4 border-b border-[#E5DAC8] gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#9A7023]" />
              <span className="font-crest text-[9.5px] uppercase tracking-[0.24em] text-[#9A7023] font-bold">
                Physical Office Coordinates
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#18130E] font-normal">
              Corporate Headquarters Location
            </h3>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-crest uppercase tracking-[0.16em] text-[#8C6925] hover:text-[#18130E] font-bold transition-colors group"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Embedded Responsive Map Frame */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden border border-[#E3D6C3] shadow-sm bg-[#EFEAE2]"
        >
          <iframe
            title="Royal Origin Corporate Desk Location"
            src="https://maps.google.com/maps?q=Sector%20132%20Noida%20Uttar%20Pradesh%20201306&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter saturate-[0.88] contrast-[0.98]"
          />

          {/* Floating Address Badge on Map */}
          <div className="absolute bottom-4 left-4 z-10 max-w-xs p-3.5 rounded-xl bg-white/95 border border-[#DFCBB2] shadow-md backdrop-blur-xs">
            <div className="flex items-start gap-2.5">
              <Navigation className="w-4 h-4 text-[#9A7023] shrink-0 mt-0.5" />
              <div>
                <p className="font-serif text-xs font-semibold text-stone-900 leading-tight">
                  Royal Origin Corporate Desk
                </p>
                <p className="text-[10px] text-stone-600 mt-0.5 font-sans">
                  B - 28 Noida 132, UP - 201306, India
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}