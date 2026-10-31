import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";


export const metadata: Metadata = {
  title: "Cookie Governance & Consent Framework | Royal Origin Distillery",
  description:
    "Explanation of browser cookies, tracking beacons, age-gate persistence, and performance telemetry on Royal Origin digital portals.",
};

export default function CookiesPage() {
  return (
    <>
      <LegalPageLayout
        title="Cookie Governance"
        subtitle="Transparent disclosure regarding tracking mechanisms, age-gate session persistence, and preference cookies."
        lastUpdated="October 2026"
        category="Cookie Policy"
      >
        <h2>1. Purpose of This Cookie Governance Policy</h2>
        <p>
          Royal Origin Distillery Limited uses cookies, local storage objects, and session tokens to provide smooth digital navigation, ensure regulatory age verification persistence, and optimize platform performance. This document details which cookies we deploy, their lifespans, and your options for managing consent.
        </p>

        <h2>2. Essential Statutory Cookies (Strictly Necessary)</h2>
        <p>
          These cookies are vital for the portal to function and cannot be disabled in our systems. They are established in response to actions performed by you:
        </p>
        <ul>
          <li><strong>Age Verification Token (<code>ro_age_verified</code>):</strong> Stores your confirmation that you are of legal drinking age (21+). Lifespan: 30 days. This prevents repeated age-gate prompts during return visits.</li>
          <li><strong>Security & Session Tokens (<code>__Host-ro_csrf</code>):</strong> Cryptographic markers that safeguard inquiry form submissions against Cross-Site Request Forgery (CSRF). Lifespan: End of session.</li>
        </ul>

        <h2>3. Analytical & Performance Telemetry</h2>
        <p>
          Subject to your explicit consent, we utilize aggregated, anonymized telemetry cookies to understand how institutional partners and trade buyers interact with our portfolio pages:
        </p>
        <ul>
          <li><strong>Page Performance (<code>_ro_analytics</code>):</strong> Measures server response latency, 3D bottle viewport rendering efficiency, and route transition speeds without storing personally identifiable information.</li>
          <li><strong>Traffic Source Attribution:</strong> Identifies whether inquiries originate from search corridors, direct links, or corporate newsletters.</li>
        </ul>

        <h2>4. Third-Party Embedded Integrations</h2>
        <p>
          Certain pages (such as our Contact Geolocation map) embed third-party services like Google Maps. These providers may place cookies on your browser to measure map loading latency or preserve geographic zoom states according to their independent privacy standards.
        </p>

        <h2>5. Managing Your Cookie Preferences</h2>
        <p>
          You can configure or adjust your browser settings to decline all non-essential cookies. However, clearing your browser cache or blocking local storage will remove your <code>ro_age_verified</code> token, requiring you to re-verify your legal drinking age on your next visit.
        </p>
        <p>
          For additional questions regarding our technical tracking architecture, contact our digital operations desk at <code>contact@royalorigin.in</code>.
        </p>
      </LegalPageLayout>


    </>
  );
}