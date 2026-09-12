import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import {
  WhySection,
  StepsSection,
  PricingSection,
  StatsSection,
  FaqSection,
  DualCtaSection,
  SiteFooter,
} from "@/components/remaining-sections";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-black focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <FeaturesSection />
        <WhySection />
        <StepsSection />
        <PricingSection />
        <StatsSection />
        <FaqSection />
        <DualCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
