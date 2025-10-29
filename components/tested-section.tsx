"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle2, TrendingUp, BarChart3 } from "lucide-react"

const metrics = [
  {
    icon: BarChart3,
    title: "Retrieval Accuracy",
    stat: "96%",
    description: "relevant interventions in top-10 results",
  },
  {
    icon: CheckCircle2,
    title: "Recommendation Quality",
    stat: "4.4/5.0",
    description: "appropriateness score by engineers",
  },
  {
    icon: TrendingUp,
    title: "Cost Estimation",
    stat: "±12%",
    description: "accuracy vs actual project costs",
  },
]

const caseStudies = [
  {
    title: "School Zone Case Study",
    location: "DAV School, Sector 14",
    problem: "Faded crossing at school zone intersection",
    prediction: "55% accident reduction",
    actual: "48-62% reduction at similar schools",
    status: "Within observed range",
  },
  {
    title: "Highway Curve Case Study",
    location: "Rural state highway",
    problem: "Sharp curve with high accident rate",
    prediction: "75% accident reduction",
    actual: "70-80% reduction after full implementation",
    status: "Accurate",
  },
]

export default function TestedSection() {
  const [visibleMetrics, setVisibleMetrics] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleMetrics([true, true, true])
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">We've Tested This Thoroughly</h2>
          <p className="text-xl text-gray-400">Validated by real engineers and real-world projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={index}
                className={`fade-in-up scroll-reveal ${visibleMetrics[index] ? "visible" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="bg-gray-900/50 border-gray-800 p-6 hover:border-blue-500/50 hover:bg-gray-900/80 transition-all duration-300 h-full group">
                  <Icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold text-blue-400 mb-2">{metric.stat}</div>
                  <h3 className="font-semibold mb-2">{metric.title}</h3>
                  <p className="text-sm text-gray-400">{metric.description}</p>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Case Studies */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold fade-in-up">Real-World Validation</h3>
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 p-6 hover:border-blue-500/50 transition-all duration-300 fade-in-up scroll-reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">{study.title}</h4>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>
                      <span className="text-gray-300 font-medium">Location:</span> {study.location}
                    </p>
                    <p>
                      <span className="text-gray-300 font-medium">Problem:</span> {study.problem}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-gray-300 font-medium">Prediction:</span>{" "}
                      <span className="text-blue-400 font-semibold">{study.prediction}</span>
                    </p>
                    <p>
                      <span className="text-gray-300 font-medium">Actual Results:</span>{" "}
                      <span className="text-green-400 font-semibold">{study.actual}</span>
                    </p>
                    <p>
                      <span className="text-gray-300 font-medium">Status:</span>{" "}
                      <span className="text-green-400 font-semibold">✓ {study.status}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
