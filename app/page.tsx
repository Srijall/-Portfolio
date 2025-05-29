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
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { ScrollBasedVelocityDemo } from "@/components/sections/ScrollBasedVelocityDemo"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-green-400 font-mono dark">
      <Header />
      <HeroSection />
      <ScrollBasedVelocityDemo />
      <FeaturesSection />
      <ConcentrateSection />
      {/* <ToolsSection /> */}
      <Timeline data={timelineData} />
      <SkillsSection />
      {/* <CommunitySection /> */}
      <ConnectSection />
      <Footer />
    </div>
    
  )
}


