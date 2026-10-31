import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import BrandTickerStrip from "@/components/home/BrandTickerStrip";
import AboutOverview from "@/components/about/AboutOverview";
import PresenceMapClientWrapper from "@/components/about/PresenceMapClientWrapper";
import FooterContact from "@/components/home/FooterContact";

export const metadata: Metadata = {
  title: "About Us | Heritage, Cask Architecture & Global Reach",
  description:
    "Explore the history, distillation craftsmanship, and international trade footprint of Royal Origin Distillery Limited.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <AboutHero />
 
      <AboutOverview />
      <BrandTickerStrip />
      <PresenceMapClientWrapper />

    </div>
  );
}