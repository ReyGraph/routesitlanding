"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0,102,255,0.2) 0%, transparent 70%)",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Routesit-W0iG2ZVFs6MVNMvxTrkKTHZV0sgh59.png"
            alt="Routesit - India's AI-Powered Road Safety System"
            width={320}
            height={100}
            className="w-80 h-auto"
            priority
            quality={90}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Motto */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-gray-300 text-lg sm:text-xl font-light tracking-wide">
            <span className="text-blue-400 font-semibold">Precision</span> in Every Decision
          </p>
          <p className="text-gray-500 text-sm mt-2">India's Road Safety Revolution</p>
        </div>

        {/* Loading dots */}
        <div className="mt-12 flex gap-2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
