"use client"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
