import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";

import ContactFormDetails from "@/components/contact/ContactFormDetails";
import ContactOfficeMap from "@/components/contact/ContactOfficeMap";


export const metadata: Metadata = {
  title: "Contact Corporate Desk | Royal Origin Distillery",
  description:
    "Get in touch with Royal Origin Distillery Limited. Corporate desk located at B-28 Noida Sector 132, UP - 201306, India. Phone: +91 120 466 4253.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* 1. Contact Hero (Pure Typographic & Light Luxury, No Image) */}
      <ContactHero />

      {/* Brand Portfolio Marquee Strip */}


      {/* 2. Corporate Desk Details & Inquiry Form (Light Aesthetic) */}
      <ContactFormDetails />

      {/* 3. Office Geolocation Map (Noida Sector 132) */}
      <ContactOfficeMap />

      {/* Global Footer */}

    </div>
  );
}