"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WebGLBackground from "@/components/webgl-background"
import CursorSpotlight from "@/components/cursor-spotlight"
import Link from "next/link"
import { FileText, Instagram } from "lucide-react"

export default function BlogPage() {
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

  // Blog posts placeholder data
  const blogPosts = [
    {
      id: 1,
      title: "Understanding IRC Standards for Road Safety Interventions",
      excerpt: "A comprehensive guide to Indian Road Congress standards and how they apply to modern road safety planning.",
      date: "January 2025",
      category: "Standards",
    },
    {
      id: 2,
      title: "The Economics of Road Safety: Cost-Benefit Analysis in Infrastructure",
      excerpt: "How data-driven cost-benefit analysis can help prioritize road safety interventions for maximum impact.",
      date: "December 2024",
      category: "Economics",
    },
    {
      id: 3,
      title: "AI in Road Safety: The Future of Infrastructure Planning",
      excerpt: "Exploring how locally-powered AI systems like Routesit are transforming road safety decision-making in India.",
      date: "November 2024",
      category: "Technology",
    },
    {
      id: 4,
      title: "Case Study: Reducing Accidents by 50% in Urban Intersections",
      excerpt: "Real-world application of Routesit recommendations showing measurable improvements in road safety outcomes.",
      date: "October 2024",
      category: "Case Studies",
    },
  ]

  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden min-h-screen">
      <CursorSpotlight mousePos={mousePos} />
      <WebGLBackground mousePos={mousePos} scrollY={scrollY} />
      <Navbar scrollY={scrollY} />

      <main className="relative z-10 pt-24 sm:pt-32">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Routesit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Insights, updates, and deep dives into road safety, infrastructure planning, and AI-driven solutions.
            </p>
          </div>
        </section>

        {/* Under Development Notice */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
          <div className="max-w-3xl mx-auto">
            <div className="text-center p-12 sm:p-16 bg-gray-900/30 border border-gray-800 rounded-lg">
              <div className="mb-6">
                <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-blue-400" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Currently Under Development</h2>
                <p className="text-lg text-gray-400 mb-6">
                  We're currently participating in the National Road Safety Hackathon 2025.
                </p>
                <p className="text-gray-500 mb-8">
                  We'll update you here soon. Follow us on Instagram for the latest updates.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://www.instagram.com/the.mecha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                  @the.mecha
                </a>
                <a
                  href="https://www.instagram.com/the6divine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                  @the6divine
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

