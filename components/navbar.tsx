"use client"

import { useEffect, useState } from "react"
import { Menu, X, Zap } from "lucide-react"
import Link from "next/link"

interface NavbarProps {
  scrollY: number
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (scrollY > lastScrollY && scrollY > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    setLastScrollY(scrollY)
  }, [scrollY, lastScrollY])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${scrollY > 50 ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo - Minimalist design */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
              {/* Minimalist waveform icon */}
              <svg
                viewBox="0 0 32 32"
                className="w-full h-full text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 16h3v-4h2v8h2v-6h2v12h2v-8h2v4h3" />
              </svg>
            </div>
            <span className="font-bold text-base sm:text-lg hidden sm:inline tracking-tight">Routesit</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/company" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Company
            </Link>
            <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              About
            </Link>
            <Link href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Blog
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Contact
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 group"
            >
              <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/5 px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <Link
              href="/company"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-2"
            >
              Company
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-2"
            >
              About
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-2"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-2"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full px-4 py-3 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 group mt-2"
            >
              <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}
