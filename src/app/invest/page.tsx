import type { Metadata } from "next";
import InvestHero from "@/components/invest/InvestHero";

import InvestModel from "@/components/invest/InvestModel";
import InvestBrandGrid from "@/components/invest/InvestBrandGrid";
import InvestCTA from "@/components/invest/InvestCTA";


export const metadata: Metadata = {
  title: "Invest & Institutional Alliances | Royal Origin Distillery",
  description:
    "Explore asset-backed distillery investments, maturation yield arbitrage, and global brand asset portfolios with Royal Origin Distillery Limited.",
};

export default function InvestPage() {
  return (
    <div className="min-h-screen bg-[#0A0806]">
      {/* 1. Cinematic Banner Hero with FSSAI, HACCP, ISO Seals */}
      <InvestHero />

      {/* Brand Portfolio Marquee Strip */}


      {/* 2. Investment Model Overview & Lead Guide Form (Light Aesthetic) */}
      <InvestModel />

      {/* 3. 6 Bottle Showcase Grid with 3D Zoom Modal (Dark Aesthetic) */}
      <InvestBrandGrid />

      {/* 4. Contact Now CTA (Light Linen Aesthetic) */}
      <InvestCTA />

      {/* Footer Desk */}

    </div>
  );
}