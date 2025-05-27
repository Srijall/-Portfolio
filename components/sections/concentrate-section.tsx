"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Zap, Layout, Palette, Cpu, Rocket } from "lucide-react"
import { GridBackground } from "@/components/ui/grid-background"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ConcentrateSection() {
  useScrollAnimation()

  const features = [
    {
      icon: Code,
      title: "Clean Code Architecture",
      description: "Writing maintainable, scalable, and well-documented code following best practices and design patterns",
      delay: "0.1s",
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Optimizing application performance through code splitting, lazy loading, and efficient rendering strategies",
      delay: "0.2s",
    },
    {
      icon: Layout,
      title: "Component Design",
      description: "Creating reusable, modular components with proper separation of concerns and clear interfaces",
      delay: "0.3s",
    },
    {
      icon: Palette,
      title: "Modern UI/UX",
      description: "Implementing responsive designs with attention to accessibility, animations, and user experience",
      delay: "0.4s",
    },
    {
      icon: Cpu,
      title: "State Management",
      description: "Managing complex application state with modern solutions like RxJS, Redux, and Context API",
      delay: "0.5s",
    },
    {
      icon: Rocket,
      title: "Build & Deploy",
      description: "Setting up efficient build processes and CI/CD pipelines for seamless deployment",
      delay: "0.6s",
    },
  ]

  return (
    <GridBackground className="min-h-screen">
      <section id="focus" className="py-20 px-4 w-full">
        <div className="max-w-7xl mx-auto relative z-30">
          <div className="text-center mb-16 scroll-animate fade-in-up">
            <TextGenerateEffect
              words="Focus on What Matters"
              className="text-3xl lg:text-5xl mb-6"
              duration={0.6}
              filter={true}
            />
            <TextGenerateEffect
              words="Delivering high-quality frontend solutions with a focus on code quality, performance, and user experience"
              className="text-xl text-gray-300 max-w-3xl mx-auto font-normal"
              duration={0.5}
              filter={false}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-900/90 backdrop-blur-sm border-green-800/30 hover:border-green-600/50 transition-all duration-300 scroll-animate fade-in-up shadow-2xl hover:shadow-green-500/10"
                style={{ animationDelay: feature.delay }}
              >
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center scroll-animate fade-in-up">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-green-800/30 max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-green-400 mb-4">Development Philosophy</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                I believe in writing clean, maintainable code that not only works flawlessly but is also easy to understand and extend. 
                Every line of code is an opportunity to create something better, more efficient, and more user-friendly. 
                By focusing on modern best practices and continuous learning, I ensure that every project meets the highest standards of quality and performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </GridBackground>
  )
}
