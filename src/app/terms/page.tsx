import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";


export const metadata: Metadata = {
  title: "Terms of Service | Royal Origin Distillery",
  description:
    "Legal terms, brand asset licensing, and conditions governing the use of Royal Origin Distillery Limited digital channels.",
};

export default function TermsPage() {
  return (
    <>
      <LegalPageLayout
        title="Terms of Service"
        subtitle="Binding legal framework, intellectual property guidelines, and conditions governing institutional access to Royal Origin digital assets."
        lastUpdated="October 2026"
        category="Legal Terms"
      >
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing, navigating, or utilizing the web portals, brand portfolios, and trade infrastructure of Royal Origin Distillery Limited ("the Company"), you agree to be bound by these Terms of Service and all statutory regulations governing alcoholic beverages in your territorial jurisdiction. If you do not consent to these terms, terminate access immediately.
        </p>

        <h2>2. Mandatory Legal Drinking Age Verification</h2>
        <p>
          This website depicts distilled spirits (including Whiskies, Vodka, and Rum). Entry and utilization are strictly limited to adults who have achieved the <strong>Legal Purchase Age (LPA)</strong> in their country of residence. Falsifying your age during portal entry constitutes a material violation of these Terms and applicable national liquor advertising codes.
        </p>

        <h2>3. Intellectual Property Rights & Trademark Ownership</h2>
        <p>
          All trademarks, house crests, product decanter models, label artwork, typography, and text displays—including but not limited to <em>Elite House</em>, <em>Blue Whale</em>, <em>Harison Premium</em>, <em>7Night Whiskey</em>, <em>Julie Black Vodka</em>, and <em>Midnight Blues Rum</em>—are the exclusive intellectual property of Royal Origin Distillery Limited and its registered holding entities.
        </p>
        <p>
          Unauthorized reproduction, deep-linking, reverse-engineering of bottle 3D assets, commercial scraping, or secondary trademark infringement will be prosecuted under the Trade Marks Act, 1999 and the Copyright Act, 1957.
        </p>

        <h2>4. Commercial Inquiries & Non-Binding Allocations</h2>
        <p>
          Submitting an inquiry through our Trade Desk, Business, or Invest portals does not constitute an executed contract, bonded purchase order, or guarantee of regional brand exclusivity. All territory allocations, private label agreements, and distillation volumes are subject to formal excise documentation, KYC clearance, and bilateral legal agreements.
        </p>

        <h2>5. Disclaimer of Warranties & Limitation of Liability</h2>
        <p>
          While Royal Origin ensures that all production metrics (ABV 42.8% V/V, 75° Proof, double wood cask provenance) are accurate, all materials on this digital platform are provided "as is". Royal Origin Distillery Limited disclaims all warranties, express or implied, including fitness for a particular trade purpose or non-infringement.
        </p>

        <h2>6. Governing Law & Dispute Resolution</h2>
        <p>
          These Terms of Service are governed by and construed in accordance with the substantive laws of the Republic of India. Any legal dispute, arbitration proceeding, or litigation arising from digital portal access shall be subject to the exclusive jurisdiction of the competent courts in Gautam Buddha Nagar (Noida), Uttar Pradesh, India.
        </p>
      </LegalPageLayout>


    </>
  );
}