"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">AIML & Cybersecurity Enthusiast</h3>
              <p className="text-gray-300 leading-relaxed">
                I am passionate about leveraging Artificial Intelligence and Cybersecurity to develop innovative
                solutions and enhance system security. With a strong foundation in Python, TensorFlow, OpenCV, and
                ethical hacking tools like Metasploit, Nessus, and Burp Suite, I am skilled in machine learning, threat
                analysis, and secure application development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My hands-on experience includes vulnerability assessment, penetration testing, and NLP applications. As
                a proactive learner, I am committed to staying ahead in AI-driven security solutions and cutting-edge ML
                advancements.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-500 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-300">Chhatrapati Sambhajinagar, Maharashtra, India (431009)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-500 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-300">(+91) 8788882314</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-500 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-300">omkekan27@gmail.com</span>
                </div>
                <div className="pt-4">
                  <h4 className="text-lg font-medium mb-2 text-blue-400">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Marathi</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">English</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Hindi</span>
                  </div>
                </div>
                <div className="pt-2">
                  <h4 className="text-lg font-medium mb-2 text-blue-400">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Technology</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Musical Instruments</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Tennis</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Badminton</span>
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">Cricket</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

