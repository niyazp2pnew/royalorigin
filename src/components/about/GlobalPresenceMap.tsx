"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import "leaflet/dist/leaflet.css";
import "./global-presence-map.css";

export type PresenceHub = {
  id: string;
  code: string;
  countryLabel: string;
  region: string;
  subtitle: string;
  role: string;
  details: string;
  badge?: string;
  position: [number, number];
  type: "headquarters" | "hub";
};

/**
 * Replace example locations with verified Royal Origin
 * office, facility, or distributor coordinates before launch.
 */
const HUBS: PresenceHub[] = [
  {
    id: "india-hq",
    code: "IN",
    countryLabel: "India",
    region: "Punjab & Greater Delhi, India",
    subtitle: "Headquarters / Central Operations",
    role: "Central Operations",
    details:
      "Central coordination for distillation, blending, trade operations and dispatch. Update this description to match verified company operations.",
    badge: "HEADQUARTERS",
    position: [28.5355, 77.391],
    type: "headquarters",
  },
  {
    id: "united-kingdom",
    code: "GB",
    countryLabel: "United Kingdom",
    region: "United Kingdom",
    subtitle: "European Trade Corridor",
    role: "Trade & Distribution",
    details:
      "Add verified details about the UK office, distributor, or trade partner here.",
    badge: "TRADE NETWORK",
    position: [51.5072, -0.1276],
    type: "hub",
  },
  {
    id: "united-states",
    code: "US",
    countryLabel: "United States",
    region: "United States",
    subtitle: "North America",
    role: "Commercial Distribution",
    details:
      "Add verified details about the US office, distributor, or trade partner here.",
    badge: "TRADE NETWORK",
    position: [40.7128, -74.006],
    type: "hub",
  },
  {
    id: "uae-dubai",
    code: "AE",
    countryLabel: "UAE · Dubai",
    region: "Dubai, United Arab Emirates",
    subtitle: "Middle East Trade Corridor",
    role: "Regional Trade & Logistics",
    details:
      "Add verified details about the Dubai office, distributor, or logistics partner here.",
    badge: "TRADE NETWORK",
    position: [25.2048, 55.2708],
    type: "hub",
  },
  {
    id: "tanzania",
    code: "TZ",
    countryLabel: "Tanzania",
    region: "Tanzania, Africa",
    subtitle: "African Trade Corridor",
    role: "Regional Distribution",
    details:
      "Add verified details about the Tanzania office, distributor, or trade partner here.",
    badge: "TRADE NETWORK",
    position: [-6.7924, 39.2083],
    type: "hub",
  },
];

const GOLD = "#b88936";
const HQ = HUBS.find((hub) => hub.type === "headquarters")!;

/* Custom gold pin with a soft animated halo. */
function createPinIcon(active: boolean, isHQ: boolean) {
  return L.divIcon({
    className: "ro-map-marker-shell",
    html: `
      <span class="ro-map-marker ${active ? "is-active" : ""} ${
        isHQ ? "is-hq" : ""
      }" aria-hidden="true">
        <span class="ro-map-marker-core"></span>
        <span class="ro-map-marker-pulse"></span>
      </span>
    `,
    iconSize: [38, 46],
    iconAnchor: [19, 23],
    popupAnchor: [0, -23],
  });
}

/* Move the map when a different location is selected. */
function FocusSelectedHub({ hub }: { hub: PresenceHub }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(hub.position, Math.max(map.getZoom(), 3), {
      duration: 0.65,
    });
  }, [hub.id, hub.position, map]);

  return null;
}

export default function GlobalPresenceMap() {
  const [activeHubId, setActiveHubId] = useState(HQ.id);

  const activeHub = HUBS.find(
    (hub) => hub.id === activeHubId
  ) ?? HQ;

  const routes = useMemo(
    () =>
      HUBS.filter((hub) => hub.id !== HQ.id).map((hub) => ({
        id: hub.id,
        positions: [
          HQ.position,
          hub.position,
        ] as [number, number][],
      })),
    []
  );

  return (
    <section
      className="ro-presence-section"
      aria-labelledby="ro-presence-heading"
    >
      <div className="ro-presence-container">

        {/* Section header */}
        <header className="ro-presence-header">
          <div>
            <p className="ro-eyebrow">
              <span className="ro-eyebrow-dot" />
              GLOBAL REACH · TRADE NETWORK
            </p>

            <h2 id="ro-presence-heading">
              International Presence.
              <br />
              <em>Connected to the World.</em>
            </h2>

            <p className="ro-presence-intro">
              Explore our global trade corridors and regional presence.
            </p>
          </div>

          <a className="ro-trade-link" href="/contact">
            Explore Trade Alliances
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </header>

        {/* Responsive location selector */}
        <div
          className="ro-hub-tabs"
          role="group"
          aria-label="Choose a location"
        >
          {HUBS.map((hub) => (
            <button
              key={hub.id}
              type="button"
              className={`ro-hub-tab ${
                activeHubId === hub.id ? "is-active" : ""
              }`}
              aria-pressed={activeHubId === hub.id}
              onClick={() => setActiveHubId(hub.id)}
            >
              <span>{hub.code}</span>
              {hub.countryLabel}
            </button>
          ))}
        </div>

        <div className="ro-presence-grid">

          {/* Interactive geographic map */}
          <div className="ro-map-card">
            <div className="ro-map-card-topline">
              <span>
                <Globe2 size={16} aria-hidden="true" />
                GLOBAL TRADE CORRIDORS
              </span>

              <span className="ro-map-live-label">
                <i />
                INTERACTIVE MAP
              </span>
            </div>

            <div
              className="ro-map-frame"
              aria-label="Interactive map showing configured global locations"
            >
              <MapContainer
                center={[23, 15]}
                zoom={2}
                minZoom={2}
                maxZoom={12}
                scrollWheelZoom={false}
                zoomControl={false}
                worldCopyJump
                preferCanvas
                className="ro-leaflet-map"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  maxZoom={19}
                />

                <ZoomControl position="bottomright" />

                {/* Schematic lines from headquarters to each hub */}
                {routes.map((route) => (
                  <Polyline
                    key={route.id}
                    positions={route.positions}
                    pathOptions={{
                      color: GOLD,
                      weight: 2,
                      opacity:
                        activeHubId === route.id ? 0.95 : 0.45,
                      dashArray:
                        activeHubId === route.id ? undefined : "5 8",
                    }}
                  />
                ))}

                {/* Geographic pins */}
                {HUBS.map((hub) => (
                  <Marker
                    key={hub.id}
                    position={hub.position}
                    icon={createPinIcon(
                      activeHubId === hub.id,
                      hub.type === "headquarters"
                    )}
                    eventHandlers={{
                      click: () => setActiveHubId(hub.id),
                    }}
                    keyboard
                    title={`${hub.countryLabel} — ${hub.role}`}
                    alt={`${hub.countryLabel} map marker`}
                  >
                    <Popup>
                      <div className="ro-popup-content">
                        <strong>{hub.countryLabel}</strong>
                        <span>{hub.subtitle}</span>
                        <button
                          type="button"
                          onClick={() => setActiveHubId(hub.id)}
                        >
                          View location details
                        </button>
                      </div>
                    </Popup>
                  </Marker>
                ))}

                <FocusSelectedHub hub={activeHub} />
              </MapContainer>

              <div className="ro-map-caption">
                <MapPin size={12} aria-hidden="true" />
                Select a pin to explore a location
              </div>
            </div>

            <div className="ro-map-legend">
              <span>
                <i className="ro-legend-dot ro-legend-hq" />
                Headquarters
              </span>

              <span>
                <i className="ro-legend-dot" />
                Trade network location
              </span>

              <span className="ro-map-legend-note">
                Drag to explore · Pinch to zoom
              </span>
            </div>
          </div>

          {/* Selected location information */}
          <aside
            className="ro-hub-panel"
            aria-label="Selected location details"
          >
            <div className="ro-panel-kicker">
              SELECTED LOCATION
              <span>{activeHub.code}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={activeHub.id}
                className="ro-active-hub-card"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="ro-card-heading">
                  <span className="ro-country-code">
                    {activeHub.code}
                  </span>

                  <div>
                    <h3>{activeHub.region}</h3>
                    <p>{activeHub.subtitle}</p>
                  </div>
                </div>

                <span className="ro-status-badge">
                  {activeHub.badge ?? "TRADE NETWORK"}
                </span>

                <p className="ro-hub-details">
                  {activeHub.details}
                </p>

                <div className="ro-hub-role">
                  <ShieldCheck size={16} aria-hidden="true" />
                  <span>{activeHub.role}</span>
                </div>

                <div className="ro-coordinate-line">
                  {Math.abs(activeHub.position[0]).toFixed(4)}°
                  {activeHub.position[0] >= 0 ? " N" : " S"},{" "}
                  {Math.abs(activeHub.position[1]).toFixed(4)}°
                  {activeHub.position[1] >= 0 ? " E" : " W"}
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Alternate way to select a location on mobile */}
            <div className="ro-location-list" aria-label="All locations">
              {HUBS.map((hub) => (
                <button
                  key={hub.id}
                  type="button"
                  className={`ro-location-row ${
                    activeHubId === hub.id ? "is-active" : ""
                  }`}
                  onClick={() => setActiveHubId(hub.id)}
                  aria-pressed={activeHubId === hub.id}
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

        <p className="ro-map-disclaimer">
          Map pins represent the coordinates configured in this component.
          Confirm each address and all operational or licensing claims
          before publishing.
        </p>
      </div>
    </section>
  );
}