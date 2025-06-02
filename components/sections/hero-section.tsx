"use client"

import { Button } from "@/components/ui/button"
import { MovingBorderButton } from "@/components/ui/moving-border"
import { Card, CardContent } from "@/components/ui/card"
import { Terminal, Mail, FileText } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { FloatingBackground } from "@/components/ui/floating-background"
import { GridBackground } from "@/components/ui/grid-background"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { useRouter } from "next/navigation"
import { CODE_SNIPPET } from "@/constants/code-snippets"
import { useLoading } from "@/service/loadingService"



interface AppConfig {
  name: string;
  framework: string;
  language: string;
  styling: string;
  features: string[];
  build: string;
  deploy: string;
}

interface HeroSectionProps {
  onResumeClick?: () => void;
}

export function HeroSection({ onResumeClick }: HeroSectionProps) {
  useScrollAnimation()
  const router = useRouter()
  const { showLoader } = useLoading();

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
                className="max-w-full break-words whitespace-normal overflow-wrap "
                duration={0.6}
                filter={true}
              />  

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-black font-semibold"
                  style={{width: "fit-content"}}
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
                  onClick={() => {
                    showLoader();
                    setTimeout(() => {
                      router.push("/resume");
                    },1800);
                  }}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View My Resume
                </MovingBorderButton>
              </div>
            </div>

            {/* Right Column - Code Editor */}
            <div className="scroll-animate fade-in-up mt-8 lg:mt-0 w-full">
              <Card className="bg-gray-900/90 backdrop-blur-sm border-green-800/30 overflow-hidden shadow-2xl w-full transform transition-transform duration-300 hover:scale-[1.02]">
                <div className="bg-gray-800/90 backdrop-blur-sm px-3 sm:px-4 py-2 border-b border-green-800/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-2 sm:ml-4 text-xs sm:text-sm text-gray-400 truncate">developer.service.ts - Srijal Shrestha</span>
                  </div>
                </div>
                <CardContent className="p-0">
                  <div className="flex min-w-0">
                    <div className="bg-gray-800/90 backdrop-blur-sm px-1 sm:px-2 py-3 sm:py-4 text-[10px] sm:text-xs text-gray-500 select-none">
                      {Array.from({ length: 35 }, (_, i) => (
                        <div key={i} className="leading-5 sm:leading-6">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      ))}
                    </div>
                    <pre className="flex-1 p-2 sm:p-4 text-xs sm:text-sm overflow-x-auto min-w-0 whitespace-pre-wrap break-words">
                      <code className="text-green-400 whitespace-pre-wrap">
                        {CODE_SNIPPET}
                      </code>
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
