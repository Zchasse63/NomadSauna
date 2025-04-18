import HeroSection from "@/components/landing/hero-section";
import ShowcaseSection from "@/components/landing/showcase-section";
import ServicesSection from "@/components/landing/services-section";
import CtaSection from "@/components/landing/cta-section";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ShowcaseSection />
      <ServicesSection />
      <CtaSection />
    </main>
  );
}
