'use client'

import { ExternalLink, Code2 } from 'lucide-react'
import { useState } from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { ImagesBadge } from "@/components/ui/images-badge"

const projects = [
  {
    id: 1,
    title: 'Stack-n-Flow',
    description:
      'Dynamic algorithm visualization engine with role-gated, interactive learning modules to streamline computer science education.',
    tech: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2560&auto=format&fit=crop',
    details:
      'Built with React and Framer Motion for complex animation execution steps. Engineered a robust PostgreSQL and NextAuth backend for role-based access control.',
  },
  {
    id: 2,
    title: 'LeetCode GraphQL Automation',
    description:
      'Hybrid Python/JS pipeline to reverse-engineer and bulk-import 340+ companies interview questions.',
    tech: ['Python', 'JavaScript', 'GraphQL', 'Web Scraping', 'APIs'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2560&auto=format&fit=crop',
    details:
      'Bypassed backend authentication via browser console injection, cutting a multi-week task down to 5 minutes. Engineered advanced data parsing and network analysis.',
  },
  {
    id: 3,
    title: 'Swarm Drone Framework',
    description:
      'Python-based distributed swarm simulation framework for autonomous UAV coordination and collaborative mission planning.',
    tech: ['Python', 'Distributed Systems', 'Event-Driven Architecture', 'Simulation'],
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2560&auto=format&fit=crop',
    details:
      'Designed modular simulation components for inter-drone communication and decentralized decision-making with scalable swarm behavior patterns.',
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-foreground/60">
            Transforming ideas into scalable, production-ready solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center mb-16">
          {projects.map((project) => (
            <CardContainer key={project.id} className="inter-var">
              <CardBody className="bg-card/50 backdrop-blur-sm relative group/card hover:shadow-2xl hover:shadow-primary/[0.1] border-border w-full sm:w-[22rem] md:w-[24rem] h-auto rounded-xl p-6 border transition-all duration-300">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-foreground mb-2"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-foreground/70 text-sm max-w-sm mt-2 line-clamp-3 min-h-[60px]"
                >
                  {project.description}
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-6">
                  <img
                    src={project.image}
                    height="1000"
                    width="1000"
                    className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={`${project.title} thumbnail`}
                  />
                </CardItem>

                <div className="mt-6 mb-2 min-h-[60px]">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[10px] sm:text-xs font-medium bg-muted text-foreground rounded-full border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-[10px] sm:text-xs font-medium bg-muted text-foreground rounded-full border border-border/50">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  {/* Action Links */}
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-xs sm:text-sm font-medium"
                  >
                    <Code2 size={16} />
                    Code
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-xs sm:text-sm font-medium"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="flex w-full items-center justify-center mt-12">
          <ImagesBadge
            text="Explore more project"
            href="https://github.com/shivammalge"
            target="_blank"
            images={[
              "https://assets.aceternity.com/pro/agenforce-2.webp",
              "https://assets.aceternity.com/pro/minimal-3-min.webp",
              "https://assets.aceternity.com/pro/bento-4.png",
            ]}
            folderSize={{ width: 48, height: 36 }}
            teaserImageSize={{ width: 40, height: 28 }}
            hoverImageSize={{ width: 140, height: 108 }}
            hoverTranslateY={-110}
            hoverSpread={50}
          />
        </div>
      </div>
    </section>
  )
}

