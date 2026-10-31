"use client";

import dynamic from "next/dynamic";

const GlobalPresenceMap = dynamic(
  () => import("@/components/about/GlobalPresenceMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full min-h-[420px] flex items-center justify-center bg-[#FAF8F5] border-b border-[#E8DEC8]">
        <div className="text-xs font-crest uppercase tracking-widest text-[#9A7023] animate-pulse">
          Loading Global Corridors...
        </div>
      </div>
    ),
  }
);

export default function PresenceMapClientWrapper() {
  return <GlobalPresenceMap />;
}