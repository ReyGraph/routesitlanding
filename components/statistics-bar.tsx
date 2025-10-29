"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "Annual Road Deaths", value: "1,55,622" },
  { label: "Economic Loss", value: "₹3.14L Cr" },
  { label: "Preventable Accidents", value: "75%" },
  { label: "Target Reduction", value: "50%" },
]

export default function StatisticsBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const targets = [155622, 314, 75, 50]
    const duration = 2000
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setCounts(targets.map((target) => Math.floor(target * progress)))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [isVisible])

  return (
    <section ref={sectionRef} className="relative z-10 py-12 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8" aria-label="Road Safety Statistics">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-12 lg:gap-20" role="list">
          {stats.map((stat, index) => (
            <div
              key={index}
              role="listitem"
              className={`transition-all duration-700 scroll-reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-3 leading-tight" aria-label={stat.label}>
                {index === 0 ? counts[0].toLocaleString() : index === 1 ? `₹${counts[1]}L` : `${counts[index]}%`}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide uppercase leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
