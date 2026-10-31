import type { Metadata } from "next";
import BusinessHero from "@/components/business/BusinessHero";

import BusinessDistribution from "@/components/business/BusinessDistribution";
import BusinessPresence from "@/components/business/BusinessPresence";
import BusinessCTA from "@/components/business/BusinessCTA";


export const metadata: Metadata = {
  title: "Business & Global Distribution | Royal Origin Distillery[cite: 17]",
  description:
    "Enterprise distribution, private spirit incubation, and international trade infrastructure across 19+ countries and 40+ active brand labels[cite: 17].",
};

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-[#0A0806]">
      {/* 1. Cinematic Banner Hero (Dark Aesthetic) */}
      <BusinessHero />



      {/* 2. Enterprise Distribution & Brand Incubation (Light Aesthetic with /invest link) */}
      <BusinessDistribution />

      {/* 3. International Presence & 3 Spirit Categories (Dark Aesthetic) */}
      <BusinessPresence />

      {/* 4. Dual Action Bureau CTA (Invest + Contact) */}
      <BusinessCTA />


    </div>
  );
}