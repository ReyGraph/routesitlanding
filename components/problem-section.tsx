"use client"

import { useEffect, useRef, useState } from "react"
import { AlertCircle } from "lucide-react"

const problems = [
  {
    title: "Manual Research Takes Forever",
    description:
      "Engineers spend 60+ hours per project manually searching through IRC standards and MoRTH guidelines scattered across multiple documents.",
    icon: AlertCircle,
  },
  {
    title: "Interventions Fail Constantly",
    description:
      "40% of road safety interventions fail because nobody checked compatibility. Speed humps get installed on ambulance routes.",
    icon: AlertCircle,
  },
  {
    title: "No Decision Support",
    description:
      "Can't compare costs vs effectiveness. No way to tell if interventions will conflict. Just expensive guesswork that costs lives.",
    icon: AlertCircle,
  },
  {
    title: "Disconnect from Ground Reality",
    description:
      "Generic solutions that ignore Indian road conditions. No consideration of local budgets, materials, or labor availability.",
    icon: AlertCircle,
  },
]

export default function ProblemSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisibleCards((prev) => {
              const newVisible = [...prev]
              newVisible[index] = entry.isIntersecting
              return newVisible
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative z-10 py-12 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 sm:mb-12 md:mb-20">
          <h2 id="problem-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            Why India Needs Routesit
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-2xl leading-relaxed">
            India faces one of the world's deadliest road safety crises. Every day, 426 people die on our roads. The
            tools available to solve this are stuck in the past.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className={`transition-all duration-700 ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="space-y-2 sm:space-y-3 p-4 sm:p-5 md:p-6 rounded-lg border border-gray-800/50 hover:border-gray-700 transition-colors duration-200 group hover:bg-white/2">
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight">{problem.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
