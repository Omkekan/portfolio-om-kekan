"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const certificationsData = [
  {
    title: "Generative AI Fundamentals",
    issuer: "Google",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Google Cybersecurity Professional",
    issuer: "Google",
    icon: <Award className="h-6 w-6" />,
  },
  {
    title: "Certified Cyber Security Professional",
    issuer: "Certification Authority",
    icon: <Award className="h-6 w-6" />,
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 md:px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional certifications that validate my expertise in AI and Cybersecurity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <div className="text-blue-400">{cert.icon}</div>
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">{cert.title}</CardTitle>
                      <CardDescription className="text-gray-400">Issued by {cert.issuer}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

