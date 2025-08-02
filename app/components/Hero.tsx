import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-sky-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Transform Video Surveillance with{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              NAYARTA delivers cutting-edge smart surveillance solutions that revolutionize security monitoring. Our
              AI-powered NVR and VMS systems provide real-time event detection, automated alerts, and intelligent
              analytics to keep your assets protected 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/demo"
                className="group bg-gradient-to-r from-sky-400 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-sky-500 hover:to-blue-700 transition-all duration-200 font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Request Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/pricing"
                className="group border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-sky-400 hover:text-sky-600 transition-all duration-200 font-semibold flex items-center gap-2"
              >
                <Play size={20} />
                See Pricing
              </Link>
            </div>
          </div>

          {/* Feature Preview Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-16 animate-fade-in-up animation-delay-300">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Real-Time Detection</h3>
              <p className="text-slate-600">
                Instant alerts for illegal parking, crime detection, flooding, and more with AI-powered analytics.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="grid grid-cols-2 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white rounded-sm" />
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">How It Works</h3>
              <p className="text-slate-600">
                Seamless integration from camera capture to dashboard control with automated event processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
