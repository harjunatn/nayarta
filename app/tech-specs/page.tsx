import type { Metadata } from "next"
import { Monitor, Database, Wifi, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Technical Specifications | NAYARTA",
  description:
    "Detailed technical specifications for NAYARTA's NVR and VMS surveillance systems including resolution support, integrations, and system architecture.",
}

export default function TechSpecs() {
  const nvrSpecs = [
    {
      category: "Video Recording",
      specs: [
        "Resolution: Up to 4K (3840×2160) @ 30fps",
        "Compression: H.265+/H.265/H.264+/H.264",
        "Bitrate: 32Kbps to 16Mbps per channel",
        "Recording Modes: Continuous, Motion, Schedule, Event",
      ],
    },
    {
      category: "Storage & Capacity",
      specs: [
        "Internal Storage: Up to 8 SATA HDDs",
        "Maximum Capacity: 80TB (10TB × 8)",
        "External Storage: NAS, SAN support",
        "RAID Support: RAID 0, 1, 5, 6, 10",
      ],
    },
    {
      category: "Network & Connectivity",
      specs: [
        "Network Interface: Dual Gigabit Ethernet",
        "PoE Ports: 16/32 ports available",
        "Protocols: TCP/IP, DHCP, DNS, DDNS, NTP",
        "Remote Access: Web, Mobile, Desktop clients",
      ],
    },
    {
      category: "AI & Analytics",
      specs: [
        "Face Recognition: Up to 10,000 faces",
        "Vehicle Detection: License plate recognition",
        "Behavior Analysis: Intrusion, loitering, crowd",
        "Smart Search: Face, vehicle, behavior based",
      ],
    },
  ]

  const vmsSpecs = [
    {
      category: "Video Management",
      specs: [
        "Resolution: Up to 8K (7680×4320) @ 60fps",
        "Compression: H.265+/H.265/H.264+/H.264/MJPEG",
        "Bitrate: Adaptive streaming up to 100Mbps",
        "Multi-streaming: Up to 4 streams per camera",
      ],
    },
    {
      category: "Scalability & Performance",
      specs: [
        "Camera Support: Unlimited (license-based)",
        "Concurrent Users: Up to 1000 users",
        "Server Clustering: Load balancing support",
        "Failover: Automatic redundancy",
      ],
    },
    {
      category: "Integration & APIs",
      specs: [
        "Third-party Integration: 500+ camera brands",
        "Access Control: Integration with major systems",
        "API Support: RESTful API, SDK available",
        "Protocols: ONVIF, RTSP, HTTP, HTTPS",
      ],
    },
    {
      category: "Advanced Analytics",
      specs: [
        "Deep Learning: Neural network processing",
        "Real-time Analysis: Sub-second detection",
        "Custom Rules: Configurable alert conditions",
        "Forensic Search: Advanced video analytics",
      ],
    },
  ]

  const systemRequirements = {
    minimum: [
      "CPU: Intel Core i5 or AMD Ryzen 5",
      "RAM: 8GB DDR4",
      "Storage: 500GB SSD",
      "Network: Gigabit Ethernet",
      "OS: Windows 10/11, Ubuntu 18.04+",
    ],
    recommended: [
      "CPU: Intel Core i7 or AMD Ryzen 7",
      "RAM: 16GB DDR4",
      "Storage: 1TB NVMe SSD",
      "Network: Dual Gigabit Ethernet",
      "OS: Windows Server 2019/2022, Ubuntu 20.04+",
    ],
    enterprise: [
      "CPU: Intel Xeon or AMD EPYC",
      "RAM: 32GB+ DDR4 ECC",
      "Storage: RAID 10 SSD Array",
      "Network: 10GbE with redundancy",
      "OS: Enterprise Linux, Windows Server",
    ],
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Technical Specifications</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive technical details for our NVR and VMS surveillance systems, including performance metrics,
              integration capabilities, and system requirements.
            </p>
          </div>
        </div>
      </section>

      {/* NVR Specifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">NVR Specifications</h2>
              <p className="text-slate-600">Network Video Recorder Technical Details</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {nvrSpecs.map((section, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  {section.category === "Video Recording" && <Monitor className="w-5 h-5 mr-2 text-sky-600" />}
                  {section.category === "Storage & Capacity" && <Database className="w-5 h-5 mr-2 text-sky-600" />}
                  {section.category === "Network & Connectivity" && <Wifi className="w-5 h-5 mr-2 text-sky-600" />}
                  {section.category === "AI & Analytics" && <Shield className="w-5 h-5 mr-2 text-sky-600" />}
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="text-slate-700 flex items-start">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VMS Specifications */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">VMS Specifications</h2>
              <p className="text-slate-600">Video Management System Technical Details</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {vmsSpecs.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                  {section.category === "Video Management" && <Monitor className="w-5 h-5 mr-2 text-sky-600" />}
                  {section.category === "Scalability & Performance" && <Zap className="w-5 h-5 mr-2 text-sky-600" />}
                  {section.category === "Integration & APIs" && <Wifi className="w-5 h-5 mr-2 text-sky-600" />}
                  {section.category === "Advanced Analytics" && <Shield className="w-5 h-5 mr-2 text-sky-600" />}
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="text-slate-700 flex items-start">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">System Requirements</h2>
            <p className="text-lg text-slate-600">Hardware and software requirements for optimal performance</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Minimum Requirements</h3>
              <ul className="space-y-3">
                {systemRequirements.minimum.map((req, index) => (
                  <li key={index} className="text-slate-700 flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sky-50 rounded-xl p-6 border-2 border-sky-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Recommended</h3>
              <ul className="space-y-3">
                {systemRequirements.recommended.map((req, index) => (
                  <li key={index} className="text-slate-700 flex items-start">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">Enterprise</h3>
              <ul className="space-y-3">
                {systemRequirements.enterprise.map((req, index) => (
                  <li key={index} className="text-slate-700 flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Protocols & Standards */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Supported Protocols & Standards</h2>
            <p className="text-lg text-slate-600">
              Industry-standard protocols and certifications for seamless integration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Network Protocols</h3>
              <div className="flex flex-wrap gap-2">
                {["TCP/IP", "UDP", "HTTP/HTTPS", "RTSP", "RTMP", "FTP", "SMTP", "SNMP"].map((protocol) => (
                  <span key={protocol} className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm">
                    {protocol}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Video Standards</h3>
              <div className="flex flex-wrap gap-2">
                {["ONVIF", "PSIA", "CGI", "SDK", "ISAPI", "VAPIX"].map((standard) => (
                  <span key={standard} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {standard}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Security Standards</h3>
              <div className="flex flex-wrap gap-2">
                {["AES-256", "TLS 1.3", "WPA3", "IEEE 802.1X", "FIPS 140-2"].map((security) => (
                  <span key={security} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                    {security}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
