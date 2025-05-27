"use client"

import { Card, CardContent } from "@/components/ui/card"
import { DotBackground } from "@/components/ui/dot-background"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

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

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
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

            <Card className="bg-gray-900/90 backdrop-blur-sm border-green-800/30 scroll-animate slide-in-right shadow-2xl">
              <CardContent className="p-6">
                <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400 mb-2">$ npm create frontend-app</div>
                  <div className="text-gray-300 mb-2">✓ Setting up Angular/React project...</div>
                  <div className="text-gray-300 mb-2">✓ Installing dependencies...</div>
                  <div className="text-gray-300 mb-2">✓ Configuring TypeScript...</div>
                  <div className="text-gray-300 mb-2">✓ Setting up routing & state management...</div>
                  <div className="text-green-400">✨ Ready! Your modern web app is running</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="scroll-animate fade-in-up bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-green-800/30">
              <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
              <p className="text-gray-300">Creating intuitive and engaging user interfaces with modern design principles and accessibility in mind.</p>
            </div>
            <div className="scroll-animate fade-in-up bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-green-800/30" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-bold text-white mb-3">State Management</h3>
              <p className="text-gray-300">Implementing efficient state management solutions using RxJS, Redux, and Context API for complex applications.</p>
            </div>
            <div className="scroll-animate fade-in-up bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 border border-green-800/30" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-bold text-white mb-3">API Integration</h3>
              <p className="text-gray-300">Seamlessly integrating RESTful APIs and implementing real-time features using WebSocket connections.</p>
            </div>
          </div>
        </div>
      </section>
    </DotBackground>
  )
}
