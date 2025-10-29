"use client"

import { useEffect, useState, lazy, Suspense } from "react"
import SplashScreen from "@/components/splash-screen"
import WebGLBackground from "@/components/webgl-background"
import Navbar from "@/components/navbar"
import CursorSpotlight from "@/components/cursor-spotlight"
import HeroSection from "@/components/hero-section"
import StatisticsBar from "@/components/statistics-bar"
import ProblemSection from "@/components/problem-section"
import HowItWorks from "@/components/how-it-works"

// Lazy load below-the-fold components for better performance
const InteractiveDemo = lazy(() => import("@/components/interactive-demo"))
const ImpactSection = lazy(() => import("@/components/impact-section"))
const WhoItFor = lazy(() => import("@/components/who-it-for"))
const FAQSection = lazy(() => import("@/components/faq-section"))
const Footer = lazy(() => import("@/components/footer"))

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [showSplash, setShowSplash] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Throttle scroll handler for better performance
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

    // Throttle mouse move handler
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

  if (showSplash) {
    return <SplashScreen />
  }

  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden">
      <CursorSpotlight mousePos={mousePos} />
      <WebGLBackground mousePos={mousePos} scrollY={scrollY} />
      <Navbar scrollY={scrollY} />

      <HeroSection />
      <StatisticsBar />
      <ProblemSection />
      <HowItWorks />
      <Suspense fallback={<div className="min-h-screen" />}>
        <InteractiveDemo />
        <ImpactSection />
        <WhoItFor />
        <FAQSection />
        <Footer />
      </Suspense>
    </div>
  )
}
