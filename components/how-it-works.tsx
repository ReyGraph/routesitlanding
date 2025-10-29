"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Tell Us Your Problem",
    description:
      "Describe your road safety challenge in plain language. Upload photos, add context about location, traffic, and history.",
    details: ["Natural language input", "Photo analysis", "Contextual metadata", "Historical data integration"],
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our Mistral 7B model analyzes your situation, determines risk level, and identifies primary issues.",
    details: [
      "Vector search (10,000+ interventions)",
      "Risk assessment",
      "Context understanding",
      "Dependency checking",
    ],
  },
  {
    number: "03",
    title: "Compare Options",
    description: "Get 3 scenario options: Quick Fix, Balanced, or Comprehensive with costs and predicted outcomes.",
    details: ["Cost-benefit analysis", "ROI calculations", "Impact predictions", "Compliance verification"],
  },
  {
    number: "04",
    title: "Implementation Plan",
    description: "Receive contractor-ready documentation with timelines, specifications, and compliance checklists.",
    details: [
      "Phase-by-phase timeline",
      "Material specifications",
      "Labor requirements",
      "Quality control checkpoints",
    ],
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 sm:mb-16 md:mb-20 fade-in-up">
          <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">How It Works</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400">From problem to solution in 4 steps</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Steps */}
          <div className="space-y-3 sm:space-y-4">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-4 sm:p-6 rounded-lg border transition-all duration-300 fade-in-up scroll-reveal ${
                  activeStep === index
                    ? "bg-blue-500/10 border-blue-500/50 shadow-lg shadow-blue-500/20"
                    : "bg-gray-900/30 border-gray-800 hover:border-gray-700 hover:bg-gray-900/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs sm:text-sm text-blue-400 font-semibold mb-1">Step {step.number}</div>
                    <h3 className="text-base sm:text-lg font-semibold">{step.title}</h3>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-all flex-shrink-0 ${activeStep === index ? "rotate-90 text-blue-400" : "text-gray-600"}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-32 h-fit">
            <Card className="bg-gray-900/50 border-gray-800 p-6 sm:p-8 scale-in">
              <div className="mb-6">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-3 sm:mb-4 animate-float">
                  {steps[activeStep].number}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{steps[activeStep].title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  {steps[activeStep].description}
                </p>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="text-xs sm:text-sm font-semibold text-gray-300 mb-3 sm:mb-4">Key Features:</div>
                {steps[activeStep].details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300">{detail}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
