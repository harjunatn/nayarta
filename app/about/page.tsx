import type { Metadata } from "next"
import { Mail, Phone, MapPin, Users, Target, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About NAYARTA | Smart Surveillance Solutions",
  description:
    "Learn about NAYARTA's mission to revolutionize security with AI-powered surveillance technology. Discover our team, values, and commitment to innovation.",
}

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We continuously push the boundaries of surveillance technology with cutting-edge AI and machine learning solutions.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description:
        "Our solutions are designed with our customers' needs at the forefront, ensuring maximum value and usability.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in product development, testing, and customer support.",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Cameras Deployed" },
    { number: "500+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">About NAYARTA</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize security and surveillance through intelligent, AI-powered solutions
              that protect what matters most to our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                At NAYARTA, we believe that security should be intelligent, proactive, and accessible. Our mission is to
                transform traditional surveillance into smart, AI-powered systems that don't just record events—they
                understand, analyze, and respond to them in real-time.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Founded by security professionals and technology experts, we combine deep industry knowledge with
                cutting-edge artificial intelligence to create surveillance solutions that are both powerful and easy to
                use. Every product we develop is designed to give our customers peace of mind and complete control over
                their security operations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-sky-600 mb-2">{stat.number}</div>
                    <div className="text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-slate-600">Ready to discuss your surveillance needs? We're here to help.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600">contact@nayarta.com</p>
              <p className="text-slate-600">support@nayarta.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600">+1 (555) 123-4567</p>
              <p className="text-slate-600">Mon-Fri, 9AM-6PM PST</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-600">123 Innovation Drive</p>
              <p className="text-slate-600">San Francisco, CA 94105</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-400 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Security?</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that trust NAYARTA for their surveillance needs. Let's discuss how we can
            secure your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors duration-200"
            >
              Schedule Demo
            </a>
            <a
              href="mailto:contact@nayarta.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
