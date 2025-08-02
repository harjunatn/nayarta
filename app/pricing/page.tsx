import type { Metadata } from "next"
import Link from "next/link"
import { Check, X } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing Plans | NAYARTA",
  description:
    "Choose the perfect NAYARTA surveillance solution for your needs. Compare NVR and VMS pricing plans with transparent, scalable options.",
}

export default function Pricing() {
  const plans = [
    {
      name: "Basic NVR",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses and residential use",
      features: [
        "Up to 16 cameras",
        "4K recording support",
        "Basic AI analytics",
        "Local storage (4TB)",
        "Mobile app access",
        "Email notifications",
        "1-year warranty",
        "Basic support",
      ],
      notIncluded: ["Cloud storage", "Advanced analytics", "Multi-site management", "Custom integrations"],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Business VMS",
      price: "$9,999",
      period: "one-time + $99/month",
      description: "Ideal for medium to large businesses",
      features: [
        "Up to 64 cameras",
        "4K recording support",
        "Advanced AI analytics",
        "Hybrid cloud storage",
        "Multi-platform access",
        "Real-time alerts",
        "Custom dashboards",
        "Priority support",
        "3-year warranty",
      ],
      notIncluded: ["Unlimited cameras", "Multi-site management", "Custom development"],
      popular: true,
      cta: "Most Popular",
    },
    {
      name: "Enterprise VMS",
      price: "Custom",
      period: "contact for pricing",
      description: "Scalable solution for large enterprises",
      features: [
        "Unlimited cameras",
        "8K recording support",
        "Advanced AI & ML",
        "Multi-site management",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom development",
        "Lifetime updates",
        "On-site training",
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  const comparisonFeatures = [
    { feature: "Maximum Cameras", basic: "16", business: "64", enterprise: "Unlimited" },
    { feature: "Recording Resolution", basic: "4K", business: "4K", enterprise: "8K" },
    { feature: "AI Analytics", basic: "Basic", business: "Advanced", enterprise: "AI + ML" },
    { feature: "Storage Options", basic: "Local", business: "Hybrid", enterprise: "Multi-tier" },
    { feature: "Mobile Access", basic: "✓", business: "✓", enterprise: "✓" },
    { feature: "Cloud Integration", basic: "—", business: "✓", enterprise: "✓" },
    { feature: "Multi-site Management", basic: "—", business: "—", enterprise: "✓" },
    { feature: "Custom Integrations", basic: "—", business: "Limited", enterprise: "Full" },
    { feature: "Support Level", basic: "Basic", business: "Priority", enterprise: "Dedicated" },
    { feature: "Warranty", basic: "1 Year", business: "3 Years", enterprise: "Lifetime" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the perfect surveillance solution for your needs. All plans include our core AI-powered detection
              capabilities with no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 shadow-xl"
                    : "bg-white border border-slate-200 shadow-lg"
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-sky-400 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    {plan.period !== "contact for pricing" && (
                      <span className="text-slate-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  {plan.period === "contact for pricing" && <p className="text-slate-600">{plan.period}</p>}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center opacity-50">
                      <X className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-500">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.name === "Enterprise VMS" ? "/contact" : "/demo"}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:from-sky-500 hover:to-blue-700 shadow-lg"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Detailed Feature Comparison</h2>
            <p className="text-lg text-slate-600">Compare all features across our surveillance solutions</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-slate-900 font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-slate-900 font-semibold">Basic NVR</th>
                  <th className="px-6 py-4 text-center text-slate-900 font-semibold bg-sky-50">Business VMS</th>
                  <th className="px-6 py-4 text-center text-slate-900 font-semibold">Enterprise VMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-4 text-slate-700 font-medium">{item.feature}</td>
                    <td className="px-6 py-4 text-center text-slate-900">{item.basic}</td>
                    <td className="px-6 py-4 text-center text-slate-900 bg-sky-50">{item.business}</td>
                    <td className="px-6 py-4 text-center text-slate-900">{item.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Common questions about our pricing and plans</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                What's included in the one-time purchase price?
              </h3>
              <p className="text-slate-600">
                The one-time price includes the hardware, software licenses, basic installation support, and warranty
                coverage. Monthly fees (where applicable) cover cloud services, advanced analytics, and ongoing support.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I upgrade from NVR to VMS later?</h3>
              <p className="text-slate-600">
                Yes, you can upgrade from our NVR system to VMS. We offer migration assistance and will credit a portion
                of your original purchase toward the VMS system.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Do you offer volume discounts?</h3>
              <p className="text-slate-600">
                Yes, we provide significant discounts for bulk purchases and multi-site deployments. Contact our sales
                team for custom pricing on orders of 10+ systems.
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">What payment options do you accept?</h3>
              <p className="text-slate-600">
                We accept all major credit cards, bank transfers, purchase orders, and offer financing options for
                qualified businesses. Enterprise customers can arrange custom payment terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-400 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see our surveillance solutions in action, or contact our team for a custom quote tailored
            to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors duration-200"
            >
              Schedule Demo
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-all duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
