"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Zap } from "lucide-react"

const impacts = [
  {
    icon: Users,
    title: "Lives Saved Annually",
    stat: "11,672+",
    description: "Conservative 10% reduction in infrastructure-related deaths",
  },
  {
    icon: TrendingUp,
    title: "Economic Benefit",
    stat: "₹33,000+ Cr",
    description: "Budget optimization + accident cost reduction",
  },
  {
    icon: Zap,
    title: "Engineering Hours Saved",
    stat: "500,000+",
    description: "Annually across India",
  },
]

export default function ImpactSection() {
  const [visibleImpacts, setVisibleImpacts] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleImpacts([true, true, true])
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
      aria-labelledby="impact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 sm:mb-16 md:mb-20 fade-in-up">
          <h2 id="impact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Impact Potential</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400">What happens when this scales nationally</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <div
                key={index}
                className={`fade-in-up scroll-reveal ${visibleImpacts[index] ? "visible" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-6 sm:p-8 text-center hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 group h-full">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-3 sm:mb-4 group-hover:scale-125 transition-transform" />
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                    {impact.stat}
                  </div>
                  <h3 className="font-semibold mb-2 text-base sm:text-lg">{impact.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{impact.description}</p>
                </Card>
              </div>
            )
          })}
        </div>

        {/* National Deployment */}
        <Card className="bg-gray-900/50 border-gray-800 p-6 sm:p-8 fade-in-up scroll-reveal hover:border-blue-500/50 transition-all duration-300">
          <h3 className="text-xl sm:text-2xl font-bold mb-6">National Deployment Scenario</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h4 className="font-semibold text-blue-400 mb-4 flex items-center gap-2 text-sm sm:text-base">
                <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                Coverage
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">→</span> 5,000+ government engineers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">→</span> 50,000+ interventions annually
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">→</span> All 28 states + 8 UTs
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-400 mb-4 flex items-center gap-2 text-sm sm:text-base">
                <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                Efficiency Gains
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-300 text-xs sm:text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">→</span> 30% faster implementation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">→</span> 40% reduction in failed interventions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">→</span> ₹2,000+ crores saved annually
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
