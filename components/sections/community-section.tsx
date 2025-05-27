"use client"

import { GridBackground } from "@/components/ui/grid-background"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { COMMUNITY_STATS } from "@/constants/community-data"

export function CommunitySection() {
  useScrollAnimation()

  return (
    <GridBackground className="min-h-screen">
      <section id="community" className="py-20 px-4 w-full">
        <div className="max-w-7xl mx-auto relative z-30">
          <div className="text-center mb-16 scroll-animate fade-in-up">
            <TextGenerateEffect
              words="Join the community around the world"
              className="text-3xl lg:text-5xl mb-6"
              duration={0.6}
              filter={true}
            />
            <TextGenerateEffect
              words="Connect with thousands of developers, share knowledge, and build together"
              className="text-xl text-gray-300 max-w-3xl mx-auto font-normal"
              duration={0.5}
              filter={false}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {COMMUNITY_STATS.map((stat, index) => (
              <div
                key={index}
                className="text-center scroll-animate fade-in-up bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-green-800/30 shadow-2xl hover:shadow-green-500/10 transition-all duration-300"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="text-4xl font-bold bg-gradient-to-b from-green-200 to-green-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </GridBackground>
  )
}
