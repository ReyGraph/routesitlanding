"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20 md:pt-20"
      aria-label="Hero Section"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          className={`mb-6 sm:mb-8 inline-block transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm text-gray-300 font-medium backdrop-blur-sm">
            🇮🇳 India's First Locally-Powered Road Safety System
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          Stop Guessing.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
            Start Saving Lives.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          Routesit uses locally-powered AI to recommend, optimize, and plan road safety interventions based on real
          Indian standards. Make data-driven decisions that actually work.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-semibold px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base group w-full sm:w-auto"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/5 bg-transparent h-11 sm:h-12 text-sm sm:text-base w-full sm:w-auto"
          >
            Learn More
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`flex justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
