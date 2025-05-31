"use client"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ConcentrateSection } from "@/components/sections/concentrate-section"
import { ToolsSection } from "@/components/sections/tools-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { CommunitySection } from "@/components/sections/community-section"
import { ConnectSection } from "@/components/sections/connect-section"
import { Footer } from "@/components/layout/footer"
import { Timeline } from "@/components/sections/Timeline"
import { timelineData } from "@/constants/timelineData"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import { ScrollBasedVelocityDemo } from "@/components/sections/ScrollBasedVelocityDemo"
import { LoadingProvider } from "@/service/loadingService";
import { ConfettiOnScroll } from "@/components/sections/confetti";


export default function HomePage() {

  return (
    <LoadingProvider>
      <div className="min-h-screen bg-gray-950 text-green-400 font-mono dark overflow-hidden">
        <ConfettiOnScroll />
        <Header />
        <HeroSection />
        <ScrollBasedVelocityDemo/>
        <FeaturesSection />
        <ConcentrateSection />
        {/* <ToolsSection /> */}
        <Timeline data={timelineData} />
        <SkillsSection />
        {/* <CommunitySection /> */}
        <ConnectSection />
        <Footer />
      </div>
    </LoadingProvider>
  )
}


