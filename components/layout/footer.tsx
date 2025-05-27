"use client"

import { Button } from "@/components/ui/button"
import { Terminal, Github, Twitter, Linkedin, Mail, Phone, MapPin, Send, Instagram } from "lucide-react"
import { DotBackground } from "@/components/ui/dot-background"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Footer() {
  useScrollAnimation()

  return (
    <DotBackground>
      <footer className="w-full border-t border-green-800/30">
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-30">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="scroll-animate fade-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="w-8 h-8 text-green-400" />
                <span className="text-lg font-bold text-green-400">SRIJAL</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Building the future of web development with cutting-edge tools and technologies.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Srijall" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/srijal-shrestha/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/srijal_shrestha/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="scroll-animate fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h4 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-300 hover:text-green-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#tools" className="text-gray-300 hover:text-green-400 transition-colors">
                    Tools
                  </a>
                </li>
                <li>
                  <a href="#community" className="text-gray-300 hover:text-green-400 transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            {/* <div className="scroll-animate fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="text-lg font-semibold text-green-400 mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                    DevOps
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Contact */}
            <div className="scroll-animate fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h4 className="text-lg font-semibold text-green-400 mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">srijalshrestha393@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">+977-9869050050</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Nayababazar, Kathmandu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          {/* <div className="border-t border-green-800/30 pt-8 mb-8 scroll-animate fade-in-up">
            <div className="max-w-md mx-auto text-center">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Stay Updated</h4>
              <p className="text-gray-300 mb-4">Get the latest updates and news from Srijal</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800/90 backdrop-blur-sm border border-green-800/30 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-400"
                />
                <Button className="bg-green-600 hover:bg-green-700 text-black">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div> */}

          {/* Bottom Bar */}
          <div className="border-t border-green-800/30 pt-8 text-center scroll-animate fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Srijal Shrestha. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </DotBackground>
  )
}
