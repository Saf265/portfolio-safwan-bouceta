'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, GithubIcon, Twitter } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-background">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          Safwan Bouceta
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-12 text-gray-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          Full Stack Developer & UI/UX Enthusiast
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent hover:bg-white hover:text-black transition-colors duration-300">
            <a href="#projects">
              View Projects <ArrowDownIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent hover:bg-white hover:text-black transition-colors duration-300">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Button variant="ghost" size="lg" asChild className="hover:bg-white hover:text-black transition-colors duration-300">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon className="h-6 w-6 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild className="hover:bg-white hover:text-black transition-colors duration-300">
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6 mr-2" />
              Twitter
            </a>
          </Button>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  )
}
