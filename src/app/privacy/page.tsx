import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";


export const metadata: Metadata = {
  title: "Privacy Policy | Royal Origin Distillery",
  description:
    "Data governance and privacy standards governing Royal Origin Distillery Limited's digital platforms, commercial portals, and trade desks.",
};

export default function PrivacyPage() {
  return (
    <>
      <LegalPageLayout
        title="Privacy Policy"
        subtitle="Statutory compliance regarding personal data collection, B2B telemetry, and international data protection standards."
        lastUpdated="October 2026"
        category="Data Protection"
      >
        <h2>1. Scope & Sovereign Jurisdiction</h2>
        <p>
          Royal Origin Distillery Limited ("Royal Origin", "the Company", "we", "us") values the confidentiality of visitors, commercial partners, institutional buyers, and investors accessing our digital interfaces. This Privacy Policy details our data collection, processing, and retention protocols pursuant to the Information Technology Act, 2000 (India), the Digital Personal Data Protection (DPDP) Act, and applicable international cross-border frameworks across our 19+ export territories.
        </p>

        <h2>2. Age Verification Protocol (Legal Drinking Age)</h2>
        <p>
          Under statutory liquor advertising and distribution laws, access to our brand assets and web properties requires users to confirm that they are of <strong>legal drinking age (21+ in the Republic of India, or the corresponding statutory purchase age in their sovereign country of residence)</strong>. We do not knowingly harvest, collect, or process personal data from individuals below the statutory drinking age. If an age verification entry indicates an underage user, session access is immediately halted and no profile data is retained.
        </p>

        <h2>3. Classification of Collected Information</h2>
        <p>We process information submitted voluntarily through our corporate desks and digital interaction channels:</p>
        <ul>
          <li><strong>Corporate & Commercial Inquiries:</strong> Name, professional designation, corporate email address, registered trade phone number, company name, excise jurisdiction, and country/state of operation submitted via our Trade and Invest forms.</li>
          <li><strong>Technical & Telemetry Data:</strong> IP address, regional geographic location, device fingerprint, browser client version, and clickstream analytics gathered to safeguard infrastructure security.</li>
          <li><strong>Investor & Allocation Dossiers:</strong> Information provided during private placement inquiries, including capital allocation interests and statutory verification documents.</li>
        </ul>

        <h2>4. Purpose of Data Processing</h2>
        <p>Information gathered by Royal Origin is utilized strictly for enterprise operational purposes:</p>
        <ul>
          <li>Facilitating international trade allocations, duty-free port quotas, and private labeling contracts.</li>
          <li>Dispatching requested capital guides, compliance certifications, and technical specification sheets.</li>
          <li>Maintaining regulatory audit trails for export licensing and excise statutory inspections.</li>
          <li>Preventing distributed denial of service (DDoS) and digital tampering across our enterprise servers.</li>
        </ul>

        <h2>5. Cross-Border Data Transfers & Third-Party Disclosure</h2>
        <p>
          Royal Origin does not sell, lease, or monetize user data. Information may only be transmitted to trusted operational service partners (including cloud infrastructure providers, logistics clearing agents, and bonded warehouse operators) operating under strict Non-Disclosure Agreements (NDAs). Data may also be shared with statutory bodies (e.g., FSSAI, Customs Excise, HMRC, FDA) when mandated by formal legal warrants.
        </p>

        <h2>6. Data Retention & Erasure Rights</h2>
        <p>
          Commercial inquiry logs are retained for a standard statutory audit period of seven (7) years to align with corporate tax and customs regulations. Users may request access to, correction of, or permanent deletion of their personal records by contacting the Data Compliance Officer at <code>contact@royalorigin.in</code>.
        </p>

        <h2>7. Contact Information</h2>
        <p>
          Direct inquiries regarding data privacy to:
          <br />
          <strong>Data Protection Officer</strong>
          <br />
          Royal Origin Distillery Limited
          <br />
          B - 28 Noida Sector 132, UP - 201306, India
          <br />
          Email: <a href="mailto:contact@royalorigin.in">contact@royalorigin.in</a>
        </p>
      </LegalPageLayout>


    </>
  );
}