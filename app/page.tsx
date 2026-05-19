import { Hero } from "@/components/landing/hero"
import { MarketSection } from "@/components/landing/market-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { ThemesSection } from "@/components/landing/themes-section"
import { GamificationSection } from "@/components/landing/gamification-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { CTASection } from "@/components/landing/cta-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"

export default function MundoTintaLanding() {
  return (
    <main>
      <Hero />
      <MarketSection />
      <HowItWorks />
      <ThemesSection />
      <GamificationSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </main>
  )
}
