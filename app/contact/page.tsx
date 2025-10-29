"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WebGLBackground from "@/components/webgl-background"
import CursorSpotlight from "@/components/cursor-spotlight"
import { Instagram } from "lucide-react"

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    let mouseTicking = false
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseTicking) {
        window.requestAnimationFrame(() => {
          setMousePos({ x: e.clientX, y: e.clientY })
          mouseTicking = false
        })
        mouseTicking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])


  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden min-h-screen">
      <CursorSpotlight mousePos={mousePos} />
      <WebGLBackground mousePos={mousePos} scrollY={scrollY} />
      <Navbar scrollY={scrollY} />

      <main className="relative z-10 pt-24 sm:pt-32">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Instagram className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Follow us on Instagram for the latest updates, insights, and project developments.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Connect With Us</h2>
            
            <div className="space-y-6">
              {/* Team Instagram */}
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 sm:p-8 hover:border-blue-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <Instagram className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-4 text-lg">Our Team</h3>
                    <div className="space-y-3">
                      <a
                        href="https://www.instagram.com/the.mecha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group"
                      >
                        <span className="text-blue-400 group-hover:text-blue-300 transition-colors">@the.mecha</span>
                        <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">→</span>
                      </a>
                      <a
                        href="https://www.instagram.com/the6divine"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between group"
                      >
                        <span className="text-blue-400 group-hover:text-blue-300 transition-colors">@the6divine</span>
                        <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Routesit Instagram - Coming Soon */}
              <div className="bg-gray-900/30 border border-dashed border-gray-700 rounded-lg p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <Instagram className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-lg">Routesit</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">@routesit</span>
                        <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded">Coming Soon</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-3">
                        Follow us for updates on road safety solutions, infrastructure insights, and project updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-gray-400">
                Currently in development as part of the National Road Safety Hackathon 2025. 
                Stay tuned for updates!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

