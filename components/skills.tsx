"use client"

import { motion } from "framer-motion"
import { Code, Database, Shield, Cpu, BarChart, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6 text-blue-400" />,
    skills: ["Python", "Java", "HTML", "CSS", "JavaScript", "MYSQL"],
  },
  {
    title: "AI & ML Libraries",
    icon: <Cpu className="h-6 w-6 text-blue-400" />,
    skills: ["TensorFlow", "OpenCV", "NumPy", "Pandas", "PyTorch", "NLTK"],
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="h-6 w-6 text-blue-400" />,
    skills: ["Vulnerability Assessment", "Penetration Testing", "Information Security"],
  },
  {
    title: "Security Tools",
    icon: <Terminal className="h-6 w-6 text-blue-400" />,
    skills: ["Nessus", "Rapid 7 Insight VM", "Burp Suite Pro", "Nuclei", "OWASP ZAP", "Wireshark", "Nmap"],
  },
  {
    title: "Data Analysis",
    icon: <BarChart className="h-6 w-6 text-blue-400" />,
    skills: ["Pandas", "NumPy", "SciPy", "Matplotlib"],
  },
  {
    title: "Development Tools",
    icon: <Database className="h-6 w-6 text-blue-400" />,
    skills: ["Git / GitHub"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My technical expertise spans across various domains of AI, Machine Learning, and Cybersecurity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

