import { Camera, Brain, Bell, Monitor } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Camera,
      title: "Camera Capture",
      description: "High-resolution cameras continuously monitor your premises",
      step: "01",
    },
    {
      icon: Brain,
      title: "Event Detection",
      description: "AI algorithms analyze video feeds in real-time",
      step: "02",
    },
    {
      icon: Bell,
      title: "Notification",
      description: "Instant alerts sent to designated personnel",
      step: "03",
    },
    {
      icon: Monitor,
      title: "Dashboard Control",
      description: "Centralized management and response coordination",
      step: "04",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How Our System Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From capture to control, our intelligent surveillance system provides seamless security monitoring with
            automated event processing and instant response capabilities.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 text-white rounded-full text-xl font-bold mb-4 relative z-10">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-sky-50 transition-colors duration-300">
                    <step.icon className="w-10 h-10 text-sky-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>

                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-8">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-sky-400 to-blue-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
