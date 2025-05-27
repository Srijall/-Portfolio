"use client"

import { GridBackground } from "@/components/ui/grid-background"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { InfiniteMovingSkills } from "@/components/ui/infinite-moving-cards"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { frontendSkills, backendSkills } from "@/constants/skills-data"

export function SkillsSection() {
  useScrollAnimation()

  return (
    <GridBackground className="min-h-screen">
      <section id="skills" className="py-20 px-4 w-full">
        <div className="max-w-7xl mx-auto relative z-30">
          <div className="text-center mb-16 scroll-animate fade-in-up">
            <TextGenerateEffect
              words="Useful software that can assist"
              className="text-3xl lg:text-5xl mb-6"
              duration={0.6}
              filter={true}
            />
            <TextGenerateEffect
              words="A comprehensive toolkit of modern technologies and frameworks that power today's most innovative applications"
              className="text-xl text-gray-300 max-w-3xl mx-auto font-normal"
              duration={0.5}
              filter={false}
            />
          </div>

          <div className="space-y-12">
            {/* Frontend & Design */}
            <div className="scroll-animate fade-in-up">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-green-400 mb-2">Frontend & Design</h3>
                <div className="w-16 h-1 bg-green-400 mx-auto rounded-full"></div>
              </div>
              <InfiniteMovingSkills
                items={frontendSkills}
                direction="right"
                speed="normal"
                pauseOnHover={true}
                className="mb-8"
              />
            </div>

            {/* Backend & Databases */}
            <div className="scroll-animate fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-green-400 mb-2">Backend & Databases</h3>
                <div className="w-16 h-1 bg-green-400 mx-auto rounded-full"></div>
              </div>
              <InfiniteMovingSkills
                items={backendSkills}
                direction="left"
                speed="normal"
                pauseOnHover={true}
                className="mb-8"
              />
            </div>

            {/* DevOps & Tools */}
            {/* <div className="scroll-animate fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-green-400 mb-2">DevOps & Tools</h3>
                <div className="w-16 h-1 bg-green-400 mx-auto rounded-full"></div>
              </div>
              <InfiniteMovingSkills
                items={devopsSkills}
                direction="right"
                speed="normal"
                pauseOnHover={true}
                className="mb-8"
              />
            </div> */}
          </div>

          <div className="text-center mt-16 scroll-animate fade-in-up">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-green-800/30 max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-green-400 mb-4">Always Learning, Always Growing</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and best
                practices to deliver cutting-edge solutions that meet modern development standards and exceed client
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </GridBackground>
  )
}
