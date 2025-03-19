"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

const achievementsData = [
  {
    title: "1st Place, Taalvadya Competition",
    event: "Youth Festival",
    date: "12/2024",
  },
  {
    title: "Co-Ordinator",
    event: "Youth Festival",
    date: "12/2024",
  },
  {
    title: "Co-Ordinator",
    event: "Sneh Sandhya Program",
    date: "02/2024",
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievementsData.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:translate-y-[-5px] flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.event}</p>
                <p className="text-gray-400 text-sm">{achievement.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

