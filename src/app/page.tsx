import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { SocialProofSection } from "@/components/social-proof-section";
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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#12211c] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[#fffdf8] focus:shadow-lg"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <HeroSection />
        <SocialProofSection />
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
