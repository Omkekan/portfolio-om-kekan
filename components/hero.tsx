"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "AIML & Cybersecurity Enthusiast"
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 pb-10 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-blue-400 font-medium text-lg md:text-xl">Hello, I&apos;m</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white">Om Kekan</h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-300 h-10">
              {typedText}
              <span className="animate-blink">|</span>
            </h3>
            <p className="text-gray-400 max-w-2xl text-lg">
              Passionate about leveraging Artificial Intelligence and Cybersecurity to develop innovative solutions and
              enhance system security. Skilled in machine learning, threat analysis, and secure application development.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>

            <div className="flex gap-4 pt-6">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-blue-500/20 hover:text-blue-400"
              >
                <a
                  href="http://linkedin.com/in/omkekan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-blue-500/20 hover:text-blue-400"
              >
                <a href="http://github.com/Omkekan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-blue-500/20 hover:text-blue-400"
              >
                <a href="mailto:omkekan27@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-blue-500/30 shadow-xl shadow-blue-500/10">
              <Image src="/images/profile.png" alt="Om Kekan" fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

