"use client"

import { motion } from "framer-motion"
import { Shield, Eye, BarChart3, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const projectsData = [
  {
    title: "Vulnerability Assessment Tool",
    description:
      "Developed a comprehensive Vulnerability Assessment Tool using Nmap, Python, and Next.js to identify and mitigate security vulnerabilities in software systems.",
    icon: <Shield className="h-6 w-6" />,
    highlights: [
      "Automated scanning and reporting features reduced manual audit time by 30% and improved threat detection efficiency.",
      "Integrated Nmap for network scanning and Python scripts to prioritize vulnerabilities, cutting response time for critical threats by 25%.",
      "Built a dynamic reporting system with Next.js that ensured compliance with industry standards.",
    ],
    link: "#",
    technologies: ["Python", "Next.js", "Nmap"],
  },
  {
    title: "Face Recognition System",
    description:
      "Developed a real-time face detection and recognition application using Python and OpenCV, enabling accurate and efficient identification of faces.",
    icon: <Eye className="h-6 w-6" />,
    highlights: [
      "Optimized system performance for real-time processing, achieving recognition speeds of 30 frames per second (FPS), enabling seamless integration in live environments.",
      "Utilized OpenCV's pre-trained models and custom algorithms, improving recognition accuracy by 20% in varied lighting conditions and facial orientations.",
    ],
    link: "#",
    technologies: ["Python", "OpenCV"],
  },
  {
    title: "Sentiment Analysis Model",
    description:
      "Developed a machine learning model for sentiment analysis on textual data from social media platforms (Twitter, Facebook, Instagram), enabling real-time insights into user opinions.",
    icon: <BarChart3 className="h-6 w-6" />,
    highlights: [
      "Implemented NLP techniques using Python libraries like NLTK for text preprocessing, tokenization, and feature extraction, improving model accuracy by 15%.",
      "Utilized supervised learning algorithms to classify sentiment with 85% accuracy, identifying trends and sentiments in user generated content.",
    ],
    link: "#",
    technologies: ["Python", "NLTK", "Machine Learning"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of the projects I've worked on that showcase my skills in AI, Machine Learning, and
              Cybersecurity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                      <div className="text-blue-400">{project.icon}</div>
                    </div>
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-300">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

