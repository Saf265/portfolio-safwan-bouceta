'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend'
}

const skills: Skill[] = [
  { name: "React", icon: "/react.svg", category: "frontend" },
  { name: "TypeScript", icon: "/typescript-icon.svg", category: "frontend" },
  { name: "Tailwind CSS", icon: "/tailwindcss-icon.svg", category: "frontend" },
  { name: "PostgreSQL", icon: "/postgresql.svg", category: "backend" },
  { name: "Next.js", icon: "/nextjs-icon.svg", category: "backend" },
  { name: "Node.js", icon: "/nodejs-icon.svg", category: "backend" },
]

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = React.useState<'frontend' | 'backend' | 'all'>('all')

  const filteredSkills = skills.filter(skill =>
    activeCategory === 'all' || skill.category === activeCategory
  )

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <div className="flex justify-center space-x-4 mb-8">
          <Badge
            variant={activeCategory === 'all' ? "default" : "secondary"}
            className="cursor-pointer text-lg py-2 px-4"
            onClick={() => setActiveCategory('all')}
          >
            All
          </Badge>
          <Badge
            variant={activeCategory === 'frontend' ? "default" : "secondary"}
            className="cursor-pointer text-lg py-2 px-4"
            onClick={() => setActiveCategory('frontend')}
          >
            Frontend
          </Badge>
          <Badge
            variant={activeCategory === 'backend' ? "default" : "secondary"}
            className="cursor-pointer text-lg py-2 px-4"
            onClick={() => setActiveCategory('backend')}
          >
            Backend
          </Badge>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors duration-300">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Image className="text-4xl mb-4 h-24" src={skill.icon} width={70} height={70} alt="icon" />
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <Badge variant="outline" className="mt-2">
                    {skill.category}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
