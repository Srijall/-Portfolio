"use client"

import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const isResumePage = pathname === "/resume"

  const handleNavigation = (href: string) => {
    if (isResumePage) {
      // If on resume page, navigate to home first then scroll
      router.push(`/${href}`)
    } else {
      // If on home page, just scroll to section
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="border-b border-green-800/30 bg-gray-950/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => router.push("/")}>
            <Terminal className="w-8 h-8 text-green-400" />
            <span className="text-xl font-bold text-green-400">SRIJAL</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => handleNavigation("home")} className="hover:text-green-300 transition-colors">
              Home
            </button>
            <button onClick={() => handleNavigation("features")} className="hover:text-green-300 transition-colors">
              Features
            </button>
            <button onClick={() => handleNavigation("focus")} className="hover:text-green-300 transition-colors">
              Focus
            </button>
            <button onClick={() => handleNavigation("skills")} className="hover:text-green-300 transition-colors">
              Technologies
            </button>
            <button onClick={() => handleNavigation("timeline")} className="hover:text-green-300 transition-colors">
              Blog
            </button>
            <button onClick={() => handleNavigation("connect")} className="hover:text-green-300 transition-colors">
              Connect
            </button>
          </nav>
          <Button
            className="bg-green-600 hover:bg-green-700 text-black font-semibold"
            onClick={() => {
              if (isResumePage) {
                router.push("/#connect")
              } else {
                document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
