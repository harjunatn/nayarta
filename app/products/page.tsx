import type { Metadata } from "next"
import { Monitor, Shield, Database, Wifi, Users, Lock, Zap, Cloud, Settings, BarChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Products - NVR & VMS Solutions | NAYARTA",
  description:
    "Explore NAYARTA's comprehensive surveillance products: Network Video Recorder (NVR) and Video Management System (VMS) with advanced AI capabilities.",
}

export default function Products() {
  const nvrFeatures = [
    { icon: Monitor, title: "High-res video recording", description: "Up to 4K resolution support" },
    { icon: Shield, title: "Smart video analytics", description: "AI-powered event detection" },
    { icon: Database, title: "Storage options", description: "Local and cloud storage" },
    { icon: Wifi, title: "Remote access and control", description: "Access from anywhere" },
    { icon: Users, title: "Multi-camera integration", description: "Support for 64+ cameras" },
    { icon: Lock, title: "Encrypted data protection", description: "End-to-end encryption" },
  ]

  const vmsFeatures = [
    { icon: Monitor, title: "High-res video recording", description: "Up to 8K resolution support" },
    { icon: Shield, title: "Smart video analytics", description: "Advanced AI algorithms" },
    { icon: Database, title: "Storage options", description: "Scalable storage solutions" },
    { icon: Wifi, title: "Remote access and control", description: "Multi-platform access" },
    { icon: Users, title: "Multi-camera integration", description: "Unlimited camera support" },
    { icon: Lock, title: "Encrypted data protection", description: "Military-grade security" },
    { icon: Zap, title: "Real-time processing", description: "Instant event analysis" },
    { icon: Cloud, title: "Cloud integration", description: "Hybrid cloud deployment" },
    { icon: Settings, title: "Advanced configuration", description: "Customizable workflows" },
    { icon: BarChart, title: "Analytics dashboard", description: "Comprehensive reporting" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Our Surveillance Solutions</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of intelligent surveillance systems designed to meet the diverse
              security needs of modern organizations.
            </p>
          </div>
        </div>
      </section>

      {/* NVR Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">NVR</h2>
                  <p className="text-slate-600">Network Video Recorder</p>
                </div>
              </div>

              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Our Network Video Recorder (NVR) system provides robust video recording capabilities with intelligent
                storage management. Designed for small to medium-scale deployments, it offers reliable performance with
                advanced features for comprehensive surveillance coverage.
              </p>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Perfect for:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Small to medium businesses</li>
                  <li>• Retail stores and offices</li>
                  <li>• Residential complexes</li>
                  <li>• Educational institutions</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nvrFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-sky-600 mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VMS Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">VMS</h2>
                  <p className="text-slate-600">Video Management System</p>
                </div>
              </div>

              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Our Video Management System (VMS) is an enterprise-grade platform that provides comprehensive video
                surveillance management. With advanced analytics, centralized control, and scalable architecture, it's
                designed for large-scale security operations.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Ideal for:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Large enterprises and corporations</li>
                  <li>• Government facilities</li>
                  <li>• Airports and transportation hubs</li>
                  <li>• Smart city deployments</li>
                </ul>
              </div>
            </div>

            <div className="lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vmsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-sky-600 mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose the Right Solution</h2>
            <p className="text-lg text-slate-600">
              Compare our NVR and VMS solutions to find the perfect fit for your needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-slate-900 font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-slate-900 font-semibold">NVR</th>
                  <th className="px-6 py-4 text-center text-slate-900 font-semibold">VMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 text-slate-700">Maximum Cameras</td>
                  <td className="px-6 py-4 text-center text-slate-900">64</td>
                  <td className="px-6 py-4 text-center text-slate-900">Unlimited</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-slate-700">Resolution Support</td>
                  <td className="px-6 py-4 text-center text-slate-900">Up to 4K</td>
                  <td className="px-6 py-4 text-center text-slate-900">Up to 8K</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700">AI Analytics</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Advanced</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 text-slate-700">Cloud Integration</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                  <td className="px-6 py-4 text-center text-green-600">✓ Hybrid</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-slate-700">Multi-site Management</td>
                  <td className="px-6 py-4 text-center text-slate-400">—</td>
                  <td className="px-6 py-4 text-center text-green-600">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
