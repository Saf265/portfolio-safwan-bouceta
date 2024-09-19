'use client'

import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Project {
  title: string
  description: string
  technologies: string[]
  logo: string
  liveLink?: string
  githubLink?: string
}

const projects: Project[] = [
  {
    title: "SheetMail",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "PostgreSQL", "Tailwind", "Stripe"],
    logo: "/logo.png",
    liveLink: "https://sheet-mail.xyz",
    githubLink: "https://github.com/Saf265/sheet-io"
  },
  // Add more projects here
]

export default function Project() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/3 p-6 flex items-center justify-center bg-gray-900">
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={150}
                      height={150}
                      className="rounded-lg object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl font-bold text-white">{project.title}</CardTitle>
                      <CardDescription className="mt-2 text-gray-300">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-0 pt-4 flex flex-wrap gap-4">
                      {project.liveLink && (
                        <Button variant="outline" size="sm" asChild className="bg-gray-700 text-white hover:bg-gray-600">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button variant="outline" size="sm" asChild className="bg-gray-700 text-white hover:bg-gray-600">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
