"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import "./global-presence-map.css";

export interface PresenceHub {
  id: string;
  code: string;
  countryLabel: string;
  region: string;
  subtitle: string;
  badge: string;
  role: string;
  details: string;
  // Precise percentages calculated for political-world-map-hd.jpg (2000x1000)
  x: number;
  y: number;
  // SVG cubic curve originating from India HQ (1388, 386)
  arcPath: string;
}

const HUBS: PresenceHub[] = [
  {
    id: "india-hq",
    code: "IN",
    countryLabel: "India (HQ)",
    region: "Punjab & Greater Delhi, India",
    subtitle: "Distillery Royal Origin & Master Cellars",
    badge: "FSSAI & MASTER CELLARS",
    role: "Central Distillation & Blending",
    details:
      "Primary double-wood maturation cellars, proprietary copper pot stills, sensory testing laboratories, and corporate export dispatch bureau.",
    x: 69.4,
    y: 38.6,
    arcPath: "", // Origin node
  },
  {
    id: "united-kingdom",
    code: "GB",
    countryLabel: "United Kingdom",
    region: "Scotland & UK",
    subtitle: "Scotch Customs & European Hub",
    badge: "HMRC LICENSED",
    role: "European Trade Corridor",
    details:
      "Customs bonded infrastructure, specialty cask exchanges, and direct logistics corridors supplying European luxury retail partners.",
    x: 48.4,
    y: 19.8,
    arcPath: "M 1388 386 Q 1150 160 968 198",
  },
  {
    id: "united-states",
    code: "US",
    countryLabel: "United States",
    region: "United States",
    subtitle: "North America Commercial Gateway",
    badge: "LICENSED OPS",
    role: "Duty-Free & Retail Channel",
    details:
      "Commercial port clearances, institutional wholesale agreements, and duty-free terminal distribution corridors.",
    x: 22.8,
    y: 29.8,
    arcPath: "M 1388 386 Q 920 80 456 298",
  },
  {
    id: "uae-dubai",
    code: "AE",
    countryLabel: "UAE · Dubai",
    region: "Dubai, UAE",
    subtitle: "Middle East Logistics Center",
    badge: "TRADE GATEWAY",
    role: "GCC Re-Export Hub",
    details:
      "High-throughput bonded re-export depot servicing Middle Eastern trade corridors and regional institutional partners.",
    x: 62.6,
    y: 40.2,
    arcPath: "M 1388 386 Q 1315 375 1252 402",
  },
  {
    id: "tanzania",
    code: "TZ",
    countryLabel: "Tanzania",
    region: "Tanzania & Africa",
    subtitle: "African Scale Corridor",
    badge: "FDA / NAFDAC",
    role: "Continental Supply Corridor",
    details:
      "High-velocity distribution routes, regional logistics network points, and statutory African customs compliance.",
    x: 57.8,
    y: 56.4,
    arcPath: "M 1388 386 Q 1340 520 1156 564",
  },
];

export default function AboutPresence() {
  const [activeHubId, setActiveHubId] = useState<string>("india-hq");

  const activeHub = HUBS.find((h) => h.id === activeHubId) ?? HUBS[0];

  return (
    <section className="ro-presence-section" aria-labelledby="presence-heading">
      <div className="ro-presence-container">
        
        {/* Header */}
        <header className="ro-presence-header">
          <div>
            <p className="ro-eyebrow">
              <span className="ro-eyebrow-dot" />
              Global Footprint • 19+ Countries
            </p>
            <h2 id="presence-heading">
              International Presence. <br />
              <em>Crafted for the World Stage.</em>
            </h2>
          </div>

          <Link href="/contact" className="ro-trade-link">
            Explore Trade Alliances
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </header>

        {/* Mobile & Desktop Horizontal Pill Tabs */}
        <div className="ro-hub-tabs" role="tablist" aria-label="Locations">
          {HUBS.map((hub) => (
            <button
              key={hub.id}
              type="button"
              role="tab"
              aria-selected={activeHubId === hub.id}
              className={`ro-hub-tab ${activeHubId === hub.id ? "is-active" : ""}`}
              onClick={() => setActiveHubId(hub.id)}
            >
              <span>{hub.code}</span>
              {hub.countryLabel}
            </button>
          ))}
        </div>

        {/* Main 2-Column Content */}
        <div className="ro-presence-grid">
          
          {/* LEFT: Real HD Political Map Frame */}
          <div className="ro-map-card">
            <div className="ro-map-card-topline">
              <span>
                <Globe2 size={16} aria-hidden="true" />
                Global Trade Corridors & Port Customs
              </span>
              <span className="ro-map-live-label">
                <i />
                ACTIVE: {activeHub.code}
              </span>
            </div>

            {/* Viewport Frame with Real Image */}
            <div className="ro-map-frame">
              <Image
                src="/political-world-map-hd.jpg"
                alt="Royal Origin Global Geopolitical Presence Map"
                fill
                priority
                quality={96}
                className="ro-map-image"
              />
              <div className="ro-map-overlay-tint" />

              {/* Dynamic Golden Flight Arcs originating from India */}
              <svg viewBox="0 0 2000 1000" className="ro-flight-arcs-svg">
                {HUBS.filter((h) => h.arcPath).map((hub) => {
                  const isHovered = activeHubId === hub.id;
                  return (
                    <g key={`arc-${hub.id}`}>
                      {isHovered && (
                        <path
                          d={hub.arcPath}
                          fill="none"
                          stroke="#c9983a"
                          strokeWidth={6}
                          strokeOpacity={0.3}
                          strokeLinecap="round"
                        />
                      )}
                      <motion.path
                        d={hub.arcPath}
                        fill="none"
                        stroke={isHovered ? "#826226" : "#b88936"}
                        strokeWidth={isHovered ? 3.5 : 1.8}
                        strokeDasharray={isHovered ? "none" : "6 6"}
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0.3 }}
                        animate={{
                          pathLength: 1,
                          opacity: isHovered ? 1 : 0.45,
                        }}
                        transition={{ duration: 1.1, ease: "easeInOut" }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Pins with Clean Hitboxes (No overlapping permanent labels) */}
              {HUBS.map((hub) => {
                const isSelected = activeHubId === hub.id;
                const isHQ = hub.id === "india-hq";

                return (
                  <div
                    key={hub.id}
                    onClick={() => setActiveHubId(hub.id)}
                    style={{
                      left: `${hub.x}%`,
                      top: `${hub.y}%`,
                    }}
                    className={`ro-pin-anchor ${isSelected ? "is-active" : ""} ${
                      isHQ ? "is-hq" : ""
                    }`}
                  >
                    {/* Shadow & Pulse */}
                    <div className="ro-pin-shadow" />
                    {isSelected && <div className="ro-pin-ring" />}

                    {/* 3D Elevated Marker Pin */}
                    <div className="ro-pin-body">
                      <div className="ro-pin-core" />
                    </div>

                    {/* Floating Country Badge - Visible ONLY when selected */}
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="ro-pin-badge"
                      >
                        <strong>{hub.code}</strong>
                        <span>{hub.countryLabel}</span>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Legend */}
            <div className="ro-map-legend">
              <span>
                <i className="ro-legend-dot ro-legend-hq" />
                Distillery Royal Origin (HQ)
              </span>
              <span>
                <i className="ro-legend-dot" />
                Licensed Port Corridor
              </span>
              <span className="ro-map-legend-note">
                Tap nodes or tabs to inspect
              </span>
            </div>
          </div>

          {/* RIGHT: Selected Hub Telemetry Card & List */}
          <aside className="ro-hub-panel">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeHub.id}
                className="ro-active-hub-card"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
              >
                <div className="ro-card-heading">
                  <span className="ro-country-code">{activeHub.code}</span>
                  <div>
                    <h3>{activeHub.region}</h3>
                    <p>{activeHub.subtitle}</p>
                  </div>
                </div>

                <span className="ro-status-badge">{activeHub.badge}</span>

                <p className="ro-hub-details">{activeHub.details}</p>

                <div className="ro-hub-role">
                  <ShieldCheck size={16} aria-hidden="true" />
                  <span>{activeHub.role}</span>
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Quick Selection List */}
            <div className="ro-location-list" aria-label="Available corridors">
              {HUBS.map((hub) => (
                <button
                  key={hub.id}
                  type="button"
                  className={`ro-location-row ${activeHubId === hub.id ? "is-active" : ""}`}
                  onClick={() => setActiveHubId(hub.id)}
                >
                  <span className="ro-location-row-dot" />
                  <span className="ro-location-row-copy">
                    <strong>{hub.countryLabel}</strong>
                    <small>{hub.role}</small>
                  </span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </button>
              ))}
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}