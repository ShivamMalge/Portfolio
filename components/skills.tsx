'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
  },
  {
    name: 'Backend & Database',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Prisma ORM'],
  },
  {
    name: 'Tools & APIs',
    skills: ['Git/GitHub', 'REST APIs', 'GraphQL', 'Chrome DevTools', 'Neon DB'],
  },
]

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="skills" className="py-24 px-4 bg-background overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-foreground/60">
            Expertise across the full stack with 7+ semesters of hands-on development experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="p-6 bg-card/40 backdrop-blur-sm rounded-[16px] border border-border/50 h-full flex flex-col hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-xl font-bold text-foreground mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { label: 'GitHub Commits', value: '405+' },
            { label: 'Projects Built', value: '10+' },
            { label: 'Years Experience', value: '3+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
