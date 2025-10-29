"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer className="relative z-10 border-t border-gray-800 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className={`fade-in-up ${isVisible ? "" : "opacity-0"}`}>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Routesit</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              India's First Locally-Powered Road Safety Intervention System
            </p>
          </div>
          <div className={`fade-in-up ${isVisible ? "" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Product</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className={`fade-in-up ${isVisible ? "" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <Link href="/company" className="hover:text-blue-400 transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={`fade-in-up ${isVisible ? "" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 sm:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Disclaimer</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Routesit provides decision support recommendations based on available data and established standards.
                Final decisions should be made by qualified road safety professionals. We are not liable for outcomes of
                interventions implemented based on our recommendations.
              </p>
            </div>
            <div className="fade-in-up" style={{ animationDelay: "0.5s" }}>
              <h4 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">Data Sources</h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                All intervention data is compiled from publicly available IRC, MoRTH, WHO, and FHWA standards. Accident
                data is anonymized and aggregated from government sources.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-gray-800 text-xs sm:text-sm text-gray-400 gap-3 sm:gap-4">
            <p>© 2025 Routesit. All rights reserved.</p>
            <p className="text-center sm:text-right">
              Developed by Team Mecha Sys | National Road Safety Hackathon 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
