import { Shield, Monitor, Database, Wifi, Users, Lock } from "lucide-react"

export default function ProductPreview() {
  const features = [
    { icon: Monitor, name: "High-res video recording" },
    { icon: Shield, name: "Smart video analytics" },
    { icon: Database, name: "Storage options" },
    { icon: Wifi, name: "Remote access and control" },
    { icon: Users, name: "Multi-camera integration" },
    { icon: Lock, name: "Encrypted data protection" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Smart Surveillance Solutions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of intelligent surveillance systems designed for modern security needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* NVR Product */}
          <div className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">NVR</h3>
                <p className="text-slate-600">Network Video Recorder</p>
              </div>
            </div>

            <p className="text-slate-700 mb-6 leading-relaxed">
              Advanced network video recording system with intelligent storage management and real-time processing
              capabilities for comprehensive surveillance coverage.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <feature.icon className="w-5 h-5 text-sky-600" />
                  <span className="text-sm text-slate-700">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VMS Product */}
          <div className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">VMS</h3>
                <p className="text-slate-600">Video Management System</p>
              </div>
            </div>

            <p className="text-slate-700 mb-6 leading-relaxed">
              Comprehensive video management platform with advanced analytics, centralized control, and scalable
              architecture for enterprise-level security operations.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <feature.icon className="w-5 h-5 text-sky-600" />
                  <span className="text-sm text-slate-700">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
