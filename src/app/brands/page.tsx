import type { Metadata } from "next";
import BrandsHero from "@/components/brands/BrandsHero";

import BrandsShowcaseGallery from "@/components/brands/BrandsShowcaseGallery";
import BrandTickerStrip from "@/components/home/BrandTickerStrip";

export const metadata: Metadata = {
  title: "Our Brands | Signature Blends & Crafted Expressions",
  description:
    "Explore the signature spirits portfolio of Royal Origin Distillery Limited, including Elite House, Blue Whale, Harison Premium, and 7Night Whiskey.",
};

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-[#0A0806]">
      {/* 1. Cinematic Banner Hero */}
      <BrandsHero />

      <BrandsShowcaseGallery/>


      {/* Corporate Inquiries */}
    </div>
  );
}