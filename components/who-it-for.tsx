"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Users, Briefcase, Hammer, BarChart3, BookOpen } from "lucide-react"

const users = [
  {
    icon: Users,
    title: "Government Agencies & PWD Officials",
    description: "Manage road safety across districts, cities, or states",
    benefits: [
      "Reduces research time from 60 hours to 30 minutes",
      "Data-backed recommendations for stakeholder approval",
      "Ensures IRC/MoRTH compliance",
      "Allocate limited budgets for maximum impact",
    ],
  },
  {
    icon: Briefcase,
    title: "Road Safety Engineers & Consultants",
    description: "Design and implement safety interventions",
    benefits: [
      "Quick access to relevant solutions",
      "Automatic dependency checking",
      "Implementation-ready specifications",
      "IRC/MoRTH compliance references",
    ],
  },
  {
    icon: Hammer,
    title: "Construction & Infrastructure Firms",
    description: "Execute road safety projects",
    benefits: [
      "Clear implementation requirements",
      "Material specifications and quantities",
      "Realistic timeline estimates",
      "Quality control checkpoints",
    ],
  },
  {
    icon: BarChart3,
    title: "Urban Planners & Traffic Analysts",
    description: "Plan future road infrastructure",
    benefits: [
      "Data on intervention effectiveness",
      "Cost projections for budgeting",
      "Understanding of cascading effects",
      "Risk priority rankings",
    ],
  },
  {
    icon: BookOpen,
    title: "Research Institutions & NGOs",
    description: "Study road safety and advocate for improvements",
    benefits: [
      "Evidence-based recommendations",
      "Data on Indian road conditions",
      "Case studies and impact predictions",
      "Training and capacity building tools",
    ],
  },
]

export default function WhoItFor() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(users.length).fill(false))
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
    <section className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-20 fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Who It's For</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400">Built for everyone in road safety</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {users.map((user, index) => {
            const Icon = user.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className={`transition-all duration-700 ${visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-5 sm:p-6 hover:border-blue-500/50 hover:bg-gray-900/80 transition-all duration-300 group h-full">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold group-hover:text-blue-300 transition-colors">
                        {user.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">{user.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {user.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 fade-in-up"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
