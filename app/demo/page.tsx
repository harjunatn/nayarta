"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export default function Demo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    useCase: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    if (!formData.useCase.trim()) {
      newErrors.useCase = "Please describe your use case"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 to-sky-50 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Demo Request Submitted!</h1>
            <p className="text-lg text-slate-600 mb-8">
              Thank you for your interest in NAYARTA. Our team will contact you within 24 hours to schedule your
              personalized demo.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-slate-900 mb-2">What happens next?</h3>
              <ul className="text-left text-slate-600 space-y-2">
                <li>• Our sales team will review your requirements</li>
                <li>• We'll schedule a convenient demo time</li>
                <li>• You'll receive a calendar invitation</li>
                <li>• Get a personalized product walkthrough</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Request a Demo</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See NAYARTA's intelligent surveillance solutions in action. Schedule a personalized demo to discover how
              our AI-powered systems can transform your security operations.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors ${
                      errors.name ? "border-red-300" : "border-slate-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors ${
                      errors.email ? "border-red-300" : "border-slate-300"
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors ${
                      errors.company ? "border-red-300" : "border-slate-300"
                    }`}
                    placeholder="Enter your company name"
                  />
                  {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="useCase" className="block text-sm font-medium text-slate-700 mb-2">
                  Use Case / Requirements *
                </label>
                <select
                  id="useCase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors ${
                    errors.useCase ? "border-red-300" : "border-slate-300"
                  }`}
                >
                  <option value="">Select your primary use case</option>
                  <option value="retail">Retail Security</option>
                  <option value="office">Office Building</option>
                  <option value="warehouse">Warehouse/Industrial</option>
                  <option value="education">Educational Institution</option>
                  <option value="healthcare">Healthcare Facility</option>
                  <option value="government">Government/Public Sector</option>
                  <option value="residential">Residential Complex</option>
                  <option value="other">Other</option>
                </select>
                {errors.useCase && <p className="mt-1 text-sm text-red-600">{errors.useCase}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  placeholder="Tell us more about your specific requirements, number of cameras needed, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sky-400 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-sky-500 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Request Demo
                  </>
                )}
              </button>

              <p className="text-sm text-slate-600 text-center">
                By submitting this form, you agree to our privacy policy and terms of service. We'll only use your
                information to schedule and conduct your demo.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What to Expect in Your Demo</h2>
            <p className="text-lg text-slate-600">
              Our personalized demo will be tailored to your specific needs and use case
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Live Product Walkthrough</h3>
              <p className="text-slate-600">
                See our NVR and VMS systems in action with real-time demonstrations of key features and capabilities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">AI Detection Showcase</h3>
              <p className="text-slate-600">
                Experience our advanced AI analytics in real-time, including event detection, object tracking, and
                automated alerts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Custom Solution Design</h3>
              <p className="text-slate-600">
                Discuss your specific requirements and receive recommendations for the optimal surveillance solution for
                your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
