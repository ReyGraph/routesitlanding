"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Upload, Zap, CheckCircle } from "lucide-react"

export default function InteractiveDemo() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const demoSteps = [
    {
      title: "Input Road Data",
      description: "Describe the road safety challenge",
      icon: Upload,
      content: {
        label: "Example: NH-44 near Bangalore",
        details: ["High-speed corridor", "Frequent accidents", "Mixed traffic"],
      },
    },
    {
      title: "AI Analysis",
      description: "Routesit analyzes IRC/MoRTH standards",
      icon: Zap,
      content: {
        label: "Processing...",
        details: ["Checking 10,000+ interventions", "Analyzing risk factors", "Verifying compliance"],
      },
    },
    {
      title: "Recommendations",
      description: "Get prioritized interventions with ROI",
      icon: CheckCircle,
      content: {
        label: "Results",
        details: ["Speed reduction: ₹45L", "Better signage: ₹12L", "Barrier installation: ₹28L"],
      },
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-12 sm:mb-16 md:mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            How Routesit Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl">
            See how Routesit transforms road safety data into actionable interventions in three simple steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Steps */}
          <div className="space-y-3 sm:space-y-4">
            {demoSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left transition-all duration-300 pb-4 sm:pb-6 border-b border-gray-800 hover:border-gray-700 group ${
                    activeStep === index ? "border-blue-500/50" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-start gap-3">
                      <Icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1 transition-colors ${
                          activeStep === index ? "text-blue-400" : "text-gray-600"
                        }`}
                      />
                      <div>
                        <div className="text-xs sm:text-sm text-gray-500 font-medium mb-1">Step {index + 1}</div>
                        <h3
                          className={`text-base sm:text-lg font-bold transition-colors ${activeStep === index ? "text-white" : "text-gray-300 group-hover:text-white"}`}
                        >
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 transition-all flex-shrink-0 ${activeStep === index ? "rotate-90 text-blue-400" : "text-gray-600"}`}
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500">{step.description}</p>
                </button>
              )
            })}
          </div>

          {/* Demo Visualization */}
          <div className="relative">
            <div className="bg-black border border-gray-800 rounded-lg p-6 sm:p-8 min-h-64 sm:min-h-80 flex flex-col justify-between">
              <div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium mb-4">
                  {demoSteps[activeStep].content.label}
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {demoSteps[activeStep].content.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-300 animate-fade-in"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800">
                <div className="text-xs text-gray-600">
                  Step {activeStep + 1} of {demoSteps.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-12 sm:mt-16 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <Button
            size="lg"
            disabled
            className="bg-gray-800 text-gray-400 hover:bg-gray-800 font-semibold px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base w-full sm:w-auto"
          >
            Project Under Development
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
