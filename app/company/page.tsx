"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WebGLBackground from "@/components/webgl-background"
import CursorSpotlight from "@/components/cursor-spotlight"
import { Building2, Users, Target, Award } from "lucide-react"

export default function CompanyPage() {
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">Routesit</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Empowering India's road safety professionals with AI-driven solutions built on real Indian standards and data.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <Target className="w-12 h-12 text-blue-400 mb-4" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed">
                  To transform road safety in India by providing engineers and decision-makers with intelligent tools 
                  that reduce accidents through data-driven infrastructure interventions, saving lives and optimizing 
                  public resources.
                </p>
              </div>
              <div className="space-y-4">
                <Award className="w-12 h-12 text-blue-400 mb-4" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-400 leading-relaxed">
                  To become India's leading platform for road safety planning, where every intervention is informed by 
                  AI analysis, compliant with national standards, and optimized for maximum impact on road safety outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built by Team Mecha Sys</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A passionate team of engineers and developers committed to solving India's road safety challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                <Building2 className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">National Hackathon</h3>
                <p className="text-gray-400 text-sm">
                  Developed as part of the National Road Safety Hackathon 2025, Routesit represents cutting-edge 
                  innovation in infrastructure planning.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                <Target className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Indian Standards</h3>
                <p className="text-gray-400 text-sm">
                  Built specifically for Indian road conditions, following IRC and MoRTH guidelines with real-world 
                  validation and testing.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                <Award className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Open to Partnerships</h3>
                <p className="text-gray-400 text-sm">
                  We welcome partnerships with government agencies, NGOs, and private organizations working 
                  towards safer roads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Safety First", desc: "Lives saved are our primary metric" },
                { title: "Data-Driven", desc: "Every decision backed by evidence" },
                { title: "Standards Compliant", desc: "Built on real IRC & MoRTH guidelines" },
                { title: "Locally Relevant", desc: "Designed for Indian conditions" },
              ].map((value, index) => (
                <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/50 transition-colors">
                  <h3 className="font-semibold mb-2 text-blue-400">{value.title}</h3>
                  <p className="text-sm text-gray-400">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

