"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Zap, Lock, Globe, TrendingUp, Wrench } from "lucide-react"

const differences = [
  {
    icon: Globe,
    title: "First System Built for Indian Roads",
    description: "Not adapted—designed from the ground up for Indian conditions",
    features: [
      "Every intervention validated against IRC/MoRTH standards",
      "Cost data from CPWD SOR and GeM portal",
      "Effectiveness data from Indian accident studies",
      "Considers local budgets and constraints",
    ],
  },
  {
    icon: Zap,
    title: "Only System with Dependency Detection",
    description: "We validate interventions work together",
    features: [
      "Automatically checks compatibility",
      "Identifies missing prerequisites",
      "Flags incompatible combinations",
      "Suggests synergistic pairings",
    ],
  },
  {
    icon: Lock,
    title: "Complete Offline Operation",
    description: "Everything runs locally on your laptop",
    features: [
      "No internet connection required",
      "No monthly subscription fees",
      "Your data stays private",
      "Works in remote areas",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Multi-Modal Intelligence",
    description: "Understand problems from multiple angles",
    features: [
      "Natural language descriptions",
      "Photo analysis (computer vision)",
      "Structured metadata",
      "Historical accident data",
    ],
  },
  {
    icon: TrendingUp,
    title: "Cost-Benefit Optimization",
    description: "Help you choose the best option",
    features: [
      "Cost per life saved calculations",
      "ROI timeline analysis",
      "Multiple scenario comparison",
      "Pareto-optimal solutions",
    ],
  },
  {
    icon: Wrench,
    title: "Implementation-Ready Output",
    description: "Contractor-ready documentation",
    features: ["Step-by-step timeline", "Material specifications", "Labor requirements", "Compliance checklists"],
  },
]

export default function WhyDifferent() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(differences.length).fill(false))
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
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Routesit Is Different</h2>
          <p className="text-xl text-gray-400">What makes us unique in the road safety space</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differences.map((diff, index) => {
            const Icon = diff.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className={`transition-all duration-700 ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-6 hover:border-blue-500/50 hover:bg-gray-900/80 transition-all duration-300 group h-full">
                  <Icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{diff.description}</p>
                  <ul className="space-y-2">
                    {diff.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-300 fade-in-up"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
