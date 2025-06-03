"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import type { FormEvent, ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin, Users, Clock, MessageSquare } from "lucide-react"
import { GridBackground } from "@/components/ui/grid-background"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { toast } from "react-hot-toast"
import { Toaster } from "react-hot-toast"
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const STORAGE_KEY = "contact_form_data"
const MESSAGES_KEY = "contact_messages"

export function ConnectSection() {
  useScrollAnimation()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init("ndQz776bpPp-mImYN")
      console.log("EmailJS initialized successfully")
    } catch (error) {
      console.error("Error initializing EmailJS:", error)
    }
  }, [])

  // Load saved form data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY)
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData) as FormData
        setFormData(parsedData)
      } catch (error) {
        console.error("Error loading saved form data:", error)
      }
    }
  }, [])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const updatedData = {
      ...formData,
      [name]: value,
    }
    setFormData(updatedData)
    // Save to localStorage on each change
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      console.log("Starting email send process...")
      console.log("Form data:", formData)

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Srijal Shrestha",
      }

      const response = await emailjs.send(
        "service_n06st5v",
        "template_tpfl0rn",
        templateParams
      )

      console.log("EmailJS response:", response)
      
      
      if (response.status === 200) {
        // Show success toast
        toast.success("Message sent successfully! I'll get back to you soon.")
        
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        localStorage.removeItem(STORAGE_KEY)
        
        setSubmitStatus("success")
      } else {
        throw new Error(`Unexpected response status: ${response.status}`)
      }
    } catch (error: any) { 
      if (error.text) {
        console.error("EmailJS error text:", error.text)
      }
      setSubmitStatus("error")
      toast.error(error.text || "There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-green-400 font-mono dark">
      <Toaster position="top-center" />
      <GridBackground>
        <section id="connect" className="py-20 px-4 w-full">
          <div className="max-w-7xl mx-auto relative z-30">
            <div className="text-center mb-16 scroll-animate fade-in-up">
              <TextGenerateEffect
                words="Let's Get Connected"
                className="text-3xl lg:text-5xl mb-6"
                duration={0.6}
                filter={true}
              />
              <TextGenerateEffect
                words="Ready to start your next project? Let's connect and build something amazing together. Reach out and let's discuss your ideas."
                className="text-xl text-gray-300 max-w-3xl mx-auto font-normal"
                duration={0.5}
                filter={false}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <div className="scroll-animate slide-in-left">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-green-400 mb-6">Get in Touch</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      Whether you're looking to build a new application, need technical consultation, or want to
                      collaborate on an exciting project, I'm here to help bring your ideas to life.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600/20 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                        <p className="text-gray-300">srijalshrestha393@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600/20 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                        <p className="text-gray-300">+977-9869050050</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-600/20 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                        <p className="text-gray-300">Nayababazar, Kathmandu</p>
                        <p className="text-sm text-gray-400">Open to remote collaboration worldwide</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-green-800/30">
                    <h4 className="text-lg font-semibold text-green-400 mb-4">What I Can Help With</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Angular & React web application development</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Frontend development with TypeScript/JavaScript</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">WordPress theme and plugin development</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">API integration and responsive design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="scroll-animate slide-in-right">
                <Card className="bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 shadow-2xl relative overflow-hidden">
                  <CardContent className="p-8 relative z-10">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-green-400 mb-2">Start a Conversation</h3>
                      <p className="text-gray-300">
                        Tell me about your project and let's discuss how we can work together to achieve your goals.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-green-400 mb-2">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-slate-700/50 border-slate-600/50 text-gray-300 placeholder:text-gray-500 focus:border-green-400 focus:ring-green-400/20"
                            placeholder="Your full name"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-green-400 mb-2">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-slate-700/50 border-slate-600/50 text-gray-300 placeholder:text-gray-500 focus:border-green-400 focus:ring-green-400/20"
                            placeholder="your.email@example.com"
                            required
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-green-400 mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-slate-700/50 border-slate-600/50 text-gray-300 placeholder:text-gray-500 focus:border-green-400 focus:ring-green-400/20"
                          placeholder="Project inquiry, collaboration, consultation..."
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-green-400 mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="bg-slate-700/50 border-slate-600/50 text-gray-300 placeholder:text-gray-500 focus:border-green-400 focus:ring-green-400/20 resize-none"
                          placeholder="Tell me about your project, timeline, requirements, and any specific technologies you'd like to use..."
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      {/* {submitStatus === "success" && (
                        <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                          Message sent successfully! I'll get back to you soon.
                        </div>
                      )} */}

                      {submitStatus === "error" && (
                        <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                          There was an error sending your message. Please try again.
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-black font-semibold py-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-slate-600/50">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="flex flex-col items-center">
                          <Clock className="w-5 h-5 text-green-400 mb-2" />
                          <p className="text-xs text-gray-400">Quick Response</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <Users className="w-5 h-5 text-green-400 mb-2" />
                          <p className="text-xs text-gray-400">Collaborative</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <MessageSquare className="w-5 h-5 text-green-400 mb-2" />
                          <p className="text-xs text-gray-400">Clear Communication</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </GridBackground>
    </div>
  )
}
