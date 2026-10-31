import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";


export const metadata: Metadata = {
  title: "Statutory Compliance & Quality Governance | Royal Origin Distillery",
  description:
    "Statutory certifications, FSSAI licensing, HACCP food safety standards, ISO 9001:2015 frameworks, and excise compliance of Royal Origin Distillery.",
};

export default function CompliancePage() {
  return (
    <>
      <LegalPageLayout
        title="Statutory Compliance"
        subtitle="Accreditation standards, quality governance frameworks, and international export excise certifications."
        lastUpdated="October 2026"
        category="Statutory Regulatory"
      >
        <h2>1. Statutory Commitment & Regulatory Rigor</h2>
        <p>
          Royal Origin Distillery Limited operates under zero-compromise adherence to Indian and international food safety, distillation purity, and environmental codes. Our facilities are audited biannually by accredited statutory inspectors to guarantee that every drop leaving our cellars matches benchmarked parameters.
        </p>

        <h2>2. Core Statutory Certifications</h2>
        
        <h3>FSSAI License & Food Safety Standards</h3>
        <p>
          Our manufacturing and blending operations hold valid central licensing from the <strong>Food Safety and Standards Authority of India (FSSAI)</strong>. All ingredients—from fermented molasses wash to high-purity grain neutral spirits (ENA)—comply with FSSAI (Alcoholic Beverages) Regulations, 2018, ensuring strict limits on volatile acids, aldehydes, and zero detectable methyl alcohol contamination.
        </p>

        <h3>HACCP (Hazard Analysis Critical Control Point)</h3>
        <p>
          Our continuous column distillation and automated bottling lines follow certified HACCP methodologies. Critical control points (including water demineralization, copper contact time, micro-filtration, and glass packaging integrity) are monitored with automated sensory instrumentation to prevent physical, chemical, or biological contamination.
        </p>

        <h3>ISO 9001:2015 Quality Management Systems</h3>
        <p>
          Royal Origin's corporate management, double wood oak maturation warehouses, and logistics networks maintain ISO 9001:2015 certification. Our quality management system establishes standard operating procedures (SOPs) for proof calibration (42.8% V/V / 75° Proof), barrel re-charring, sensory panel sign-offs, and batch traceability.
        </p>

        <h2>3. International Customs & Export Licensing</h2>
        <p>
          To maintain active trade corridors across 19+ nations, Royal Origin holds active compliance clearance with foreign trade bodies:
        </p>
        <ul>
          <li><strong>United Kingdom:</strong> Compliance with HMRC bonded customs warehousing standards for European specialty spirit distribution.</li>
          <li><strong>United States:</strong> Compliance with TTB (Alcohol and Tobacco Tax and Trade Bureau) label approval and FDA import prior notice mandates.</li>
          <li><strong>East Africa & UAE:</strong> Active FDA and GCC customs conformity documentation ensuring duty-free and domestic corridor logistics clearance.</li>
        </ul>

        <h2>4. Environmental Responsibility & Water Governance</h2>
        <p>
          In accordance with Central Pollution Control Board (CPCB) norms, our distillation hubs utilize Zero Liquid Discharge (ZLD) effluent treatment units. Processed spent wash is converted into bio-compost and captive power, minimizing groundwater impact and environmental footprint.
        </p>

        <h2>5. Corporate Compliance Bureau</h2>
        <p>
          For regulatory verifications, copy requests for certificates, or statutory inspection audits, direct correspondence to:
          <br />
          <strong>Chief Compliance Officer</strong>
          <br />
          Royal Origin Distillery Limited
          <br />
          B - 28 Noida Sector 132, UP - 201306, India
          <br />
          Direct Helpline: +91 120 466 4253 | Email: compliance@royalorigin.in
        </p>
      </LegalPageLayout>


    </>
  );
}