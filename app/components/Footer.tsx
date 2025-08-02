import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">NAYARTA</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Leading provider of intelligent surveillance solutions with AI-powered real-time event detection and
              automated monitoring systems.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-400" />
                <span className="text-slate-300">contact@nayarta.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-400" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-sky-400" />
                <span className="text-slate-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/tech-specs" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Tech Specs
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-sky-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/demo" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-300 hover:text-sky-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">© 2024 NAYARTA. All rights reserved. | Intelligent Surveillance Solutions</p>
        </div>
      </div>
    </footer>
  )
}
