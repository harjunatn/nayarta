import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NAYARTA - Smart Surveillance Solutions | AI-Powered Video Analytics",
  description:
    "Transform your security with NAYARTA's intelligent surveillance systems. Real-time event detection, smart analytics, and automated monitoring for NVR and VMS solutions.",
  keywords: "smart surveillance, video analytics, NVR, VMS, real-time detection, security systems, AI surveillance",
  authors: [{ name: "NAYARTA" }],
  openGraph: {
    title: "NAYARTA - Smart Surveillance Solutions",
    description: "AI-powered video surveillance with real-time event detection and automation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAYARTA - Smart Surveillance Solutions",
    description: "AI-powered video surveillance with real-time event detection and automation",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
