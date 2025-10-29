"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WebGLBackground from "@/components/webgl-background"
import CursorSpotlight from "@/components/cursor-spotlight"
import Link from "next/link"
import { ArrowRight, Heart, Shield, TrendingUp } from "lucide-react"

export default function AboutPage() {
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">Save Lives</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed">
              Routesit was born from a simple observation: India loses over 1.5 lakh people every year to road accidents, 
              and most of these deaths are preventable with the right interventions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all group"
            >
              Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Shield className="w-12 h-12 text-blue-400 mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Challenge</h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Road safety engineers across India face an overwhelming challenge: thousands of pages of IRC and MoRTH 
                  standards, conflicting requirements, budget constraints, and no clear way to prioritize interventions that 
                  will actually save lives.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The result? Well-intentioned projects that fail, wasted resources, and most critically, lives lost 
                  because the right intervention wasn't chosen at the right place.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">1,55,622</div>
                    <div className="text-gray-400">Annual road deaths in India</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">75%</div>
                    <div className="text-gray-400">Preventable with right interventions</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-400 mb-2">₹3.14L Cr</div>
                    <div className="text-gray-400">Annual economic loss</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Solution</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Routesit combines locally-powered AI with comprehensive knowledge of Indian road safety standards to 
                provide actionable recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Lives First",
                  desc: "Every recommendation is optimized to save the maximum number of lives within budget constraints.",
                },
                {
                  icon: Shield,
                  title: "Standards Compliant",
                  desc: "Built on real IRC and MoRTH guidelines, ensuring all recommendations meet regulatory requirements.",
                },
                {
                  icon: TrendingUp,
                  title: "Data-Driven",
                  desc: "Powered by analysis of 10,000+ interventions, cost data, and accident statistics from across India.",
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                    <Icon className="w-10 h-10 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Routesit */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Why Routesit Exists</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                We believe that technology, when properly harnessed, can transform how governments approach public safety. 
                Routesit isn't just a tool—it's a statement that every life matters, and that data and AI can help us 
                make better decisions.
              </p>
              <p>
                Built by Team Mecha Sys during the National Road Safety Hackathon 2025, Routesit represents our 
                commitment to solving real-world problems with practical, locally-relevant solutions.
              </p>
              <p className="pt-4">
                We're not just building software. We're building a future where road engineers have the tools they need 
                to make decisions that save lives, optimize resources, and create safer roads for all Indians.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

