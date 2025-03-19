"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence & Machine Learning",
    institution: "MGM University",
    location: "Chh.Sambhajinagar, India",
    period: "OCT 2021 – JUNE 2026",
  },
  {
    degree: "Higher Secondary Education",
    field: "",
    institution: "Sonamata Junior College",
    location: "Jalna, Maharashtra, India",
    period: "JUNE 2019 – MAY 2021",
  },
  {
    degree: "Secondary Education",
    field: "",
    institution: "Wonder Garten School",
    location: "Chh.Sambhajinagar, India",
    period: "MAY 2019",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-5 items-start">
                  <div className="md:col-span-1 mb-4 md:mb-0 flex items-center md:justify-end md:pr-8">
                    <div className="flex items-center text-blue-400">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">{item.period}</span>
                    </div>
                  </div>

                  <div className="md:col-span-4 bg-gray-800/50 p-6 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="h-6 w-6 text-blue-500" />
                      <h3 className="text-xl font-semibold">
                        {item.degree}
                        {item.field && <span> in {item.field}</span>}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-1">{item.institution}</p>
                    <p className="text-gray-400 text-sm">{item.location}</p>
                  </div>
                </div>

                {/* Timeline connector */}
                {index < educationData.length - 1 && (
                  <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-blue-500/30 ml-[20%]"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

