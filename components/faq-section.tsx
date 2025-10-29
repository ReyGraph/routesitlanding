"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqCategories = [
  {
    category: "Getting Started",
    faqs: [
      {
        question: "Is Routesit free?",
        answer:
          "During our pilot phase, yes. We're offering free access to government agencies and beta testers. Commercial pricing will be announced later.",
      },
      {
        question: "Does it work offline?",
        answer: "Yes, completely. Routesit runs entirely on your laptop with no internet connection required.",
      },
    ],
  },
  {
    category: "Accuracy & Data",
    faqs: [
      {
        question: "How accurate are the cost estimates?",
        answer:
          "Within ±12% of actual costs based on validation against 10 real projects. We use current CPWD SOR and GeM portal rates.",
      },
      {
        question: "How often is the database updated?",
        answer: "Quarterly for interventions, monthly for cost data, as available for accident statistics.",
      },
    ],
  },
  {
    category: "Customization",
    faqs: [
      {
        question: "What if my state has different standards?",
        answer:
          "Routesit follows national IRC/MoRTH standards. State-specific variations can be incorporated through customization.",
      },
      {
        question: "Can I use this for my private construction project?",
        answer:
          "Routesit is designed for road safety infrastructure. For private projects, please contact us for custom solutions.",
      },
    ],
  },
  {
    category: "Support & Export",
    faqs: [
      {
        question: "Can I export the recommendations?",
        answer: "Yes, as PDF reports, Word documents, or structured JSON data.",
      },
      {
        question: "Do you provide training?",
        answer: "Yes, we offer comprehensive training for government agencies and pilot partners.",
      },
    ],
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)
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
    <section ref={sectionRef} className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 sm:mb-16 md:mb-24">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Questions?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500">Everything you need to know about Routesit</p>
        </header>

        <div className="space-y-12 sm:space-y-16">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6 sm:mb-8">
                {category.category}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const uniqueId = `${catIndex}-${faqIndex}`
                  const isOpen = openIndex === uniqueId

                  return (
                    <button
                      key={uniqueId}
                      onClick={() => setOpenIndex(isOpen ? null : uniqueId)}
                      className="w-full text-left transition-all duration-300 pb-3 sm:pb-4 border-b border-gray-800 hover:border-gray-700 group"
                    >
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <h4
                          className={`text-base sm:text-lg font-semibold transition-colors ${isOpen ? "text-white" : "text-gray-300 group-hover:text-white"}`}
                        >
                          {faq.question}
                        </h4>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-600 transition-all flex-shrink-0 mt-1 ${
                            isOpen ? "rotate-180 text-blue-400" : ""
                          }`}
                        />
                      </div>
                      {isOpen && (
                        <div className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 leading-relaxed animate-fade-in">
                          {faq.answer}
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
