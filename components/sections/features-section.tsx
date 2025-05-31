"use client"

import { Card, CardContent } from "@/components/ui/card"
import { DotBackground } from "@/components/ui/dot-background"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/magicui/terminal"

export function FeaturesSection() {
  useScrollAnimation()

  return (
    <DotBackground className="min-h-screen">
      <section id="features" className="py-20 px-4 w-full">
        <div className="max-w-7xl mx-auto relative z-30">
          <div className="text-center mb-16 scroll-animate fade-in-up">
            <TextGenerateEffect
              words="Crafting Modern Web Experiences"
              className="text-3xl lg:text-5xl mb-6"
              duration={0.6}
              filter={true}
            />
            <TextGenerateEffect
              words="Specializing in building responsive, performant, and user-friendly web applications using cutting-edge frontend technologies"
              className="text-xl text-gray-300 max-w-3xl mx-auto font-normal"
              duration={0.5}
              filter={false}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate slide-in-left">
              <TextGenerateEffect words="Frontend Expertise" className="text-2xl mb-6" duration={0.5} filter={true} />
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Modern Framework Development</h4>
                    <p className="text-gray-300">Building scalable applications with Angular and React</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">TypeScript & JavaScript</h4>
                    <p className="text-gray-300">Writing clean, type-safe, and maintainable code</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Responsive Design</h4>
                    <p className="text-gray-300">Creating beautiful, mobile-first user interfaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Performance Optimization</h4>
                    <p className="text-gray-300">Ensuring fast loading and smooth user experiences</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-900/90 backdrop-blur-sm border-green-800/30 scroll-animate slide-in-right shadow-2xl hover:border-green-600/50 cursor-help transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(0,188,212,0.3)]" style={{ background: "linear-gradient(145deg, #2a2a2a, #383838)" }}>
              <CardContent className="p-6">
                <Terminal>
                  <TypingAnimation>&gt; $ npm create Srijal-app</TypingAnimation>

                  <AnimatedSpan delay={1500} className="text-green-500">
                    <span>✔ Preflight checks.</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={2000} className="text-green-500">
                    <span>✔ Setting up Angular/React project...</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={2500} className="text-green-500">
                    <span>✓ Installing dependencies...</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={3000} className="text-green-500">
                    <span>✔ Validating Tailwind CSS.</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={3500} className="text-green-500">
                    <span>✓ Configuring TypeScript...</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={4000} className="text-green-500">
                    <span>✔ Checking registry.</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={4500} className="text-green-500">
                    <span>✔ Updating tailwind.config.ts</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={5000} className="text-green-500">
                    <span>✔ Updating app/globals.css</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={5500} className="text-green-500">
                    <span>✓ Setting up routing & state management...</span>
                  </AnimatedSpan>

                  <AnimatedSpan delay={6000} className="text-blue-500">
                    <span>ℹ Updated 1 file:</span>
                    <span className="pl-2">- lib/utils.ts</span>
                  </AnimatedSpan>

                  <TypingAnimation delay={6500} className="text-muted-foreground">
                    Success! Project initialization completed.
                  </TypingAnimation>

                  <TypingAnimation delay={7000} className="text-muted-foreground">
                    You may now add components.
                  </TypingAnimation>
                </Terminal>
              </CardContent>
            </Card>
          </div>
            
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="scroll-animate fade-in-up bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-green-800/30 cursor-help transform transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y hover:shadow-[0_5px_15px_rgba(0,188,212,0.3)] hover:border-green-600/80">
              <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
              <p className="text-gray-300">Creating intuitive and engaging user interfaces with modern design principles and accessibility in mind.</p>
            </div>
            <div className="scroll-animate fade-in-up bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-green-800/30 cursor-help transform transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y hover:shadow-[0_5px_15px_rgba(0,188,212,0.3)] hover:border-green-600/80" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-bold text-white mb-3">State Management</h3>
              <p className="text-gray-300">Implementing efficient state management solutions using RxJS, Redux, and Context API for complex applications.</p>
            </div>
            <div className="scroll-animate fade-in-up bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-green-800/30 cursor-help transform transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y hover:shadow-[0_5px_15px_rgba(0,188,212,0.3)] hover:border-green-600/80" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold text-white mb-3">API Integration</h3>
              <p className="text-gray-300">Seamlessly integrating RESTful APIs and implementing real-time features using WebSocket connections.</p>
            </div>
          </div>
        </div>
      </section>
    </DotBackground>
  )
}
