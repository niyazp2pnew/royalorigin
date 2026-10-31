import type { Metadata } from "next";
import ManagementHero from "@/components/management/ManagementHero";

import ManagementLeadership from "@/components/management/ManagementLeadership";


export const metadata: Metadata = {
  title: "Management & Leadership | Royal Origin Distillery",
  description:
    "Executive leadership and management at Royal Origin Distillery Limited. Headed by Mohit Shukla, Chairman & Managing Director (CMD).",
};

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* 1. Management Hero (Dark Luxury Aesthetic, No Image) */}
      <ManagementHero />

      {/* Brand Portfolio Marquee Strip */}


      {/* 2. CMD Card Showcase (Light Luxury Aesthetic) */}
      <ManagementLeadership />

      {/* Global Footer */}

    </div>
  );
}