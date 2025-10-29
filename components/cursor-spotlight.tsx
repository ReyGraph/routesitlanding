"use client"

import { useEffect, useRef } from "react"

interface CursorSpotlightProps {
  mousePos: { x: number; y: number }
}

export default function CursorSpotlight({ mousePos }: CursorSpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!spotlightRef.current) return

    spotlightRef.current.style.left = `${mousePos.x}px`
    spotlightRef.current.style.top = `${mousePos.y}px`
  }, [mousePos])

  return (
    <div
      ref={spotlightRef}
      className="fixed pointer-events-none z-40 transition-opacity duration-300"
      style={{
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, rgba(0, 102, 255, 0.05) 40%, transparent 70%)",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        filter: "blur(40px)",
      }}
    />
  )
}
