"use client"

import { Header } from "@/components/layout/header"
import { Card, CardContent } from "@/components/ui/card"
import { MovingBorderButton } from "@/components/ui/moving-border"
import { Spotlight } from "@/components/ui/spotlight"
import { Download, Mail, Phone, MapPin, Linkedin } from "lucide-react"

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href ='/updated-cv-final.pdf'
    link.download = 'Srijal-Shrestha-CV.pdf'
    document.body.appendChild(link);
    link.click()
    document.body.removeChild(link);
  }

  return (
    <div className="min-h-screen bg-gray-950 text-green-400 font-mono dark relative overflow-hidden">
      {/* Spotlight Background Effect */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(142, 100%, 85%, .12) 0, hsla(142, 100%, 55%, .04) 50%, hsla(142, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(142, 100%, 85%, .08) 0, hsla(142, 100%, 55%, .03) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(142, 100%, 85%, .06) 0, hsla(142, 100%, 45%, .02) 80%, transparent 100%)"
        translateY={-300}
        width={600}
        height={1200}
        smallWidth={280}
        duration={8}
        xOffset={120}
      />

      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8 relative z-50">
        {/* Download Button with Moving Border */}
        <div className="flex justify-end mb-8">
          <MovingBorderButton
            onClick={handleDownload}
            borderRadius="1.75rem"
            className="bg-transparent border-green-600 text-green-400 hover:bg-green-600/10"
            containerClassName="w-48 h-12"
            duration={3000}
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </MovingBorderButton>
        </div>

        {/* Resume Content */}
        <Card className="bg-gray-900/90 backdrop-blur-sm border-green-800/30 shadow-2xl relative">
          <CardContent className="p-8">
            {/* Header Section */}
            <div className="text-center mb-8 pb-6 border-b border-green-800/30">
              <h1 className="text-4xl font-bold text-green-400 mb-2">Shrijal Shrestha</h1>
              <p className="text-xl text-gray-300 mb-4">Frontend Developer</p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span>srijalshrestha393@gmail.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span>+977-9869050050</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>Nayababazar, Kathmandu</span>
                </div>
                <div className="flex items-center gap-1">
                  <Linkedin className="w-4 h-4 text-green-400" />
                  <a
                    href="https://www.linkedin.com/in/srijal-shrestha-68b8501a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-300 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-green-800/30 pb-2">
                Professional Summary
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I am a dynamic and dependable professional with a proven ability to excel in diverse and challenging
                environments. Flexible and reliable, I possess excellent time-management skills and a strong sense of
                responsibility. As a highly motivated and self-driven individual, I bring enthusiasm and commitment to
                every task. A mature team player, I thrive in collaborative settings and can also take the initiative to
                work independently with precision and efficiency. My adaptable nature enables me to navigate complex
                challenges while delivering results that exceed expectations.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-green-800/30 pb-2">
                Technical Skills
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Frontend Development</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Angular JS/Angular</li>
                    <li>• JavaScript/TypeScript</li>
                    <li>• HTML5 & CSS3</li>
                    <li>• Responsive Web Design</li>
                    <li>• RESTful API Integration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Development Concepts</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Dependency Injection</li>
                    <li>• Reactive & Template-driven Forms</li>
                    <li>• Component-based Architecture</li>
                    <li>• Cross-browser Compatibility</li>
                    <li>• Mobile Responsiveness</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Content Management</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• WordPress Development</li>
                    <li>• Theme Customization</li>
                    <li>• Plugin Development & Integration</li>
                    <li>• Data Management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Payment & Integration</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• PayPal Integration</li>
                    <li>• Stripe Payment Gateway</li>
                    <li>• Third-party API Integration</li>
                    <li>• Data Validation & Security</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-green-800/30 pb-2">
                Professional Experience
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Angular JS Developer</h3>
                      <p className="text-green-400">Code Himalaya, Kupondole</p>
                    </div>
                    <span className="text-gray-400">Feb 2024 - Present</span>
                  </div>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Built and maintained web applications using Angular, HTML, CSS, and JavaScript</li>
                    <li>• Developed efficient routing and navigation systems for smooth user interactions</li>
                    <li>• Implemented dependency injection concepts and reactive/template-driven forms</li>
                    <li>• Designed custom components and reusable modules for enhanced development efficiency</li>
                    <li>• Engaged in agile development practices with daily stand-ups and sprint planning</li>
                    <li>• Collaborated with back-end developers for seamless API and database integration</li>
                  </ul>

                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Key Projects:</h4>

                    <div className="ml-4 space-y-4">
                      <div>
                        <h5 className="font-semibold text-white">Social Security Fund (SSF)</h5>
                        <ul className="text-gray-300 space-y-1 ml-4">
                          <li>• Managed development of SSF web application for Nepalese government</li>
                          <li>• Implemented data validation and security measures for sensitive information</li>
                          <li>• Ensured mobile responsiveness and cross-browser compatibility</li>
                          <li>• Integrated API services for government database synchronization</li>
                          <li>• Designed user-friendly interfaces for social security contribution management</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-white">Soaltee Budgeting</h5>
                        <ul className="text-gray-300 space-y-1 ml-4">
                          <li>• Implemented dynamic forms with validations and enhanced error handling</li>
                          <li>• Created scalable architecture using Angular components, services, and modules</li>
                          <li>• Designed interactive dashboards and data visualizations for budgeting analysis</li>
                          <li>• Developed advanced data filtering and sorting features for financial data</li>
                          <li>• Built optimized API integrations for real-time budget tracking</li>
                          <li>• Conducted extensive unit testing and UI testing for stability</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold text-white">Hiper Brains</h5>
                        <ul className="text-gray-300 space-y-1 ml-4">
                          <li>• Integrated payment systems using PayPal and Stripe</li>
                          <li>• Enhanced user experience for job seekers and employers</li>
                          <li>• Streamlined user management and inventory functionalities</li>
                          <li>• Delivered scalable, performance-optimized recruitment solution</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">WordPress Developer</h3>
                      <p className="text-green-400">Nepal Ecommerce & Software Technology (NEST)</p>
                    </div>
                    <span className="text-gray-400">Feb 2022</span>
                  </div>
                  <ul className="text-gray-300 space-y-1 ml-4">
                    <li>• Stored, retrieved, and manipulated data efficiently</li>
                    <li>• Prepared detailed reports for project analysis</li>
                    <li>• Designed and customized WordPress themes</li>
                    <li>• Developed and integrated custom plugins</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-green-800/30 pb-2">Education</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Bachelor of Computer Application (BCA)</h3>
                      <p className="text-green-400">Prime College, Khusibun, Kathmandu</p>
                    </div>
                    <span className="text-gray-400">Feb 2022 - Dec 2024</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Higher Secondary Education (+2)</h3>
                      <p className="text-green-400">Uniglobe College, Kamaladi, Kathmandu</p>
                    </div>
                    <span className="text-gray-400">Completed Feb 2022</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-green-800/30 pb-2">
                Personal Projects
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">Event Management System</h3>
                  <p className="text-gray-300 mb-2">
                    Developed a comprehensive event management website using simple CRUD operations for efficient event
                    planning and management.
                  </p>
                  <p className="text-sm text-green-400">Technologies: JavaScript, HTML, CSS, Database Management</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">Weather Web Application</h3>
                  <p className="text-gray-300 mb-2">
                    Integrated third-party weather APIs to fetch live data and display detailed weather information
                    including temperature, humidity, wind speed, and forecasts.
                  </p>
                  <p className="text-sm text-green-400">Technologies: JavaScript, HTML, CSS, Weather API Integration</p>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-green-800/30 pb-2">Languages</h2>
              <div className="flex flex-wrap gap-4">
                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full">English</span>
                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full">Nepali</span>
                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full">Hindi</span>
              </div>
            </section>

            {/* References */}
            <section>
              <h2 className="text-2xl font-bold text-green-400 mb-4 border-b border-green-800/30 pb-2">References</h2>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white">Ishan Shrestha</h3>
                <p className="text-green-400 mb-2">Chief Technology Officer (CTO)</p>
                <p className="text-gray-300 mb-1">Code Himalaya Pvt. Ltd.</p>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">+977-9851327775</span>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
