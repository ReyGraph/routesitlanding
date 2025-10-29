import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist",
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Routesit - India's AI-Powered Road Safety Intervention System",
  description:
    "Stop guessing. Start saving lives. Routesit uses locally-powered AI to recommend, optimize, and plan road safety interventions based on real Indian standards. Reduce accidents by 50% with data-driven infrastructure decisions.",
  keywords: [
    "road safety",
    "India",
    "AI road safety",
    "infrastructure planning",
    "accident prevention",
    "safety interventions",
    "IRC standards",
    "MoRTH guidelines",
    "road safety system",
    "traffic safety",
    "road infrastructure",
    "data-driven road safety",
    "Indian road standards",
    "highway safety",
    "road accident reduction",
    "smart infrastructure",
    "transportation safety",
    "urban planning",
    "road safety analysis",
    "safety management system",
  ],
  category: "Technology",
  classification: "Business Software",
  authors: [{ name: "Team Mecha Sys" }],
  creator: "Team Mecha Sys",
  publisher: "Routesit",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://routesit.com",
    siteName: "Routesit",
    title: "Routesit - India's AI-Powered Road Safety System",
    description:
      "Locally-powered AI for road safety interventions based on Indian standards. Target 50% accident reduction.",
    images: [
      {
        url: "https://routesit.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Routesit - Road Safety Intervention System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Routesit - India's Road Safety System",
    description: "AI-powered road safety interventions based on Indian standards",
    images: ["https://routesit.com/twitter-image.png"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Team Mecha Sys" />
        <link rel="canonical" href="https://routesit.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Routesit",
            description: "India's AI-powered road safety intervention system based on local standards",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "156",
            },
            creator: {
              "@type": "Organization",
              name: "Team Mecha Sys",
            },
            featureList: [
              "AI-powered road safety analysis",
              "IRC and MoRTH standard compliance",
              "Cost-benefit analysis",
              "Intervention recommendations",
              "Risk assessment",
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Routesit",
            url: "https://routesit.com",
            logo: "https://routesit.com/logo.png",
            description: "India's first locally-powered road safety intervention system",
            foundingDate: "2025",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
            },
          })}
        </script>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-black text-white`}>{children}</body>
    </html>
  )
}
