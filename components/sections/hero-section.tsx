"use client"

import { Button } from "@/components/ui/button"
import { MovingBorderButton } from "@/components/ui/moving-border"
import { Card, CardContent } from "@/components/ui/card"
import { Terminal, Mail, FileText } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { FloatingBackground } from "@/components/ui/floating-background"
import { GridBackground } from "@/components/ui/grid-background"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { CODE_SNIPPET } from "@/constants/code-snippets"

export function HeroSection() {
  useScrollAnimation()

  return (
    <GridBackground className="min-h-screen">
      <section id="home" className="py-20 px-4 relative overflow-hidden w-full">
        <FloatingBackground />
        <div className="max-w-7xl mx-auto relative z-30">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate fade-in-up">
              <TextGenerateEffect
                words="Frontend Developer "
                className="text-4xl lg:text-6xl mb-6 leading-tight"
                duration={0.8}
                filter={true}
              />

              <TextGenerateEffect
                words="Passionate about creating dynamic, user-friendly web applications using modern technologies like Angular, React, TypeScript, and JavaScript. Experienced in building scalable solutions and delivering exceptional user experiences."
                className="text-xl text-gray-300 mb-8 leading-relaxed font-normal"
                duration={0.6}
                filter={false}
              />

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-black font-semibold"
                  onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <MovingBorderButton
                  borderRadius="1.75rem"
                  className="bg-transparent border-green-600 text-green-400 hover:bg-green-600/10"
                  containerClassName="w-48 h-12"
                  duration={4000}
                  onClick={() => window.open("/resume", "_blank")}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View My Resume
                </MovingBorderButton>
              </div>
            </div>

            {/* Code Editor Mockup */}
            <div className="relative scroll-animate fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Card className="bg-gray-900/90 backdrop-blur-sm border-green-800/30 overflow-hidden shadow-2xl" style={{ width: "120%" }}>
                <div className="bg-gray-800/90 backdrop-blur-sm px-4 py-2 border-b border-green-800/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-sm text-gray-400">developer.service.ts - Srijal Shrestha</span>
                  </div>
                </div>
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="bg-gray-800/90 backdrop-blur-sm px-2 py-4 text-xs text-gray-500 select-none">
                      {Array.from({ length: 35 }, (_, i) => (
                        <div key={i} className="leading-6">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      ))}
                    </div>
                    <pre className="flex-1 p-4 text-sm overflow-x-auto">
                      <code className="text-green-400">{CODE_SNIPPET}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-600 text-black px-3 py-1 rounded-full text-sm font-semibold animate-bounce shadow-lg">
                Live
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gray-800/90 backdrop-blur-sm border border-green-600 px-3 py-1 rounded-full text-sm shadow-lg">
                <Terminal className="w-4 h-4 inline mr-1" />
                Terminal
              </div>
            </div>
          </div>
        </div>
      </section>
    </GridBackground>
  )
}
