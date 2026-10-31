import HeroSection from "@/components/home/HeroSection";
import BrandTickerStrip from "@/components/home/BrandTickerStrip";
import Overview from "@/components/home/Overview"
import BrandShowcase from "@/components/home/BrandShowcase";
import FooterContact from "@/components/home/FooterContact";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandTickerStrip />
      <Overview/>
      <BrandShowcase/>
      <FooterContact/>
    </>
  );
}