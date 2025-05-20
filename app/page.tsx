"use client"

import HeroSection from "@/components/hero-section"
import { FeatureBlock } from "@/components/feature-block"
import { BlogSection } from "@/components/blog-section"
import { CookieConsent } from "@/components/cookie-consent";

export default function Home() {
  return (
    <>
    <CookieConsent 
      variant="default"
      onAcceptCallback={() => {
        close();
      }}
      onDeclineCallback={() => {
        window.close();
      }}
    />
      <HeroSection />
    </>
  )
}
