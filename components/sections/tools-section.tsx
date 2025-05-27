"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, GitBranch, Terminal, Cloud } from "lucide-react"
import { DotBackground } from "@/components/ui/dot-background"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { DASHBOARD_CODE } from "@/constants/code-snippets"

export function ToolsSection() {
  useScrollAnimation()

  const tools = [
    {
      icon: Code,
      text: "Advanced code completion and IntelliSense",
    },
    {
      icon: GitBranch,
      text: "Integrated Git workflow and version control",
    },
    {
      icon: Terminal,
      text: "Built-in terminal and package management",
    },
    {
      icon: Cloud,
      text: "One-click deployment to multiple platforms",
    },
  ]

  return (
    <main>
      {/* === Timeline Section === */}
      <section id="timeline" className="py-20 px-4 w-full bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Journey</h2>

          <div className="space-y-10 text-white">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
              <div>
                <h4 className="text-xl font-semibold">Founded in 2021</h4>
                <p className="text-gray-400">We started with a vision to simplify developer tools.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
              <div>
                <h4 className="text-xl font-semibold">Launched DevWorld</h4>
                <p className="text-gray-400">Our flagship IDE platform was launched to the public.</p>
              </div>
            </div>

            {/* Add more timeline steps as needed */}
          </div>
        </div>
      </section>

      {/* === Tools Section === */}
      {/* <DotBackground className="min-h-screen">
        <section id="tools" className="py-20 px-4 w-full">
          <div className="max-w-7xl mx-auto relative z-30">
            <div className="text-center mb-16 scroll-animate fade-in-up">
              <TextGenerateEffect
                words="DevWorld provides teams and individuals with customizable development tools for your source code."
                className="text-3xl lg:text-5xl mb-6"
                duration={0.6}
                filter={true}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="scroll-animate slide-in-left">
                <Card className="bg-gray-900/90 backdrop-blur-sm border-green-800/30 shadow-2xl">
                  <div className="bg-gray-800/90 backdrop-blur-sm px-4 py-2 border-b border-green-800/30">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="ml-4 text-sm text-gray-400">project-dashboard.tsx</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <pre className="text-sm text-green-400 overflow-x-auto">
                      <code>{DASHBOARD_CODE}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6 scroll-animate slide-in-right">
                <div>
                  <TextGenerateEffect
                    words="Integrated Development Environment"
                    className="text-2xl mb-4"
                    duration={0.5}
                    filter={true}
                  />
                  <TextGenerateEffect
                    words="Everything you need in one place - code editor, terminal, debugger, and deployment tools."
                    className="text-gray-300 mb-6 font-normal"
                    duration={0.4}
                    filter={false}
                  />
                </div>

                <div className="space-y-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <tool.icon className="w-6 h-6 text-green-400" />
                      <span className="text-white">{tool.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </DotBackground> */}
    </main>
  )
}

