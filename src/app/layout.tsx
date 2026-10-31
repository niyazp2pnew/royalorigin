import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Cinzel, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import ComplianceModals from "@/components/common/ComplianceModals";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0a08",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://royalorigin.in"),
  title: "Royal Origin Distillery Limited | Distillers & Global Distributors",
  description:
    "Royal Origin Distillery Limited is a premier spirits distillation house and global trade distribution network[cite: 9].",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cinzel.variable} ${inter.variable}`}
    >
      <body className="bg-[#0c0a08] text-stone-100 min-h-screen flex flex-col font-sans antialiased">
        <SmoothScroll>
          <ComplianceModals/>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer/>
        </SmoothScroll>
      </body>
    </html>
  );
}