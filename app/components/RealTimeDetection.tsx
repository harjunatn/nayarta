import { Car, Droplets, AlertTriangle, Trash2, Search, Target } from "lucide-react"

export default function RealTimeDetection() {
  const capabilities = [
    {
      icon: Car,
      title: "Illegal Parking",
      description: "Automatic detection of unauthorized parking violations",
      color: "from-red-400 to-red-600",
    },
    {
      icon: Droplets,
      title: "Flood Detection",
      description: "Early warning system for water level monitoring",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: AlertTriangle,
      title: "Crime Detection",
      description: "Real-time identification of suspicious activities",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: Trash2,
      title: "Littering Detection",
      description: "Monitoring for improper waste disposal",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Search,
      title: "Missing Person/Object",
      description: "Advanced search capabilities for lost items or people",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Target,
      title: "Object/Person Tracking",
      description: "Continuous monitoring and movement analysis",
      color: "from-sky-400 to-sky-600",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Real-Time Event Detection Capabilities</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our AI-powered surveillance system can detect and respond to various events in real-time, providing instant
            alerts and automated responses to keep your premises secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <capability.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-2">{capability.title}</h3>

              <p className="text-slate-600 leading-relaxed">{capability.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-700 font-medium">AI Detection Active</span>
          </div>
        </div>
      </div>
    </section>
  )
}
