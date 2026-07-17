'use client'

import { ExternalLink, Code2 } from 'lucide-react'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'
import { Button } from './ui/moving-border'
import { ImagesBadge } from './ui/images-badge'

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
      'Python-based multi-agent UAV coordination system with distributed consensus algorithms for autonomous swarm intelligence.',
    tech: ['Python', 'Distributed Systems', 'Machine Learning', 'Robotics', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2560&auto=format&fit=crop',
    details:
      'Implemented consensus algorithms for coordinated drone behavior. Achieved real-time decision-making with minimal network overhead.',
  },
  {
    id: 4,
    title: 'Dravya',
    description:
      'Financial applications framework that collapses traditional architecture by executing massive limit order book simulations natively on client hardware.',
    tech: ['Rust', 'WebAssembly', 'Financial Computing', 'NPM', 'Performance'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2560&auto=format&fit=crop',
    details:
      'Eliminates expensive frontend-backend separation by installing @dravya/core via NPM for zero-latency stochastic volatility models. Enables quants and UI engineers to execute complex financial calculations directly on client hardware with native performance.',
  },
  {
    id: 5,
    title: 'SupportGPT',
    description:
      'Multi-tenant AI customer support SaaS that automates ticket resolution using Retrieval-Augmented Generation (RAG).',
    tech: ['Next.js', 'NestJS', 'FastAPI', 'PostgreSQL', 'Redis', 'pgvector'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2560&auto=format&fit=crop',
    details:
      'Engineered a scalable microservices architecture. Utilized pgvector for document chunking and vector searches, enabling LLMs to instantly draft highly accurate responses strictly based on isolated organizational data.',
  },
  {
    id: 6,
    title: 'LeadGenius',
    description:
      'End-to-end automated pipeline for scraping LinkedIn job postings and auto-dispatching tailored applications.',
    tech: ['Next.js', 'Node.js', 'TypeScript', 'Playwright', 'SQLite3'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2560&auto=format&fit=crop',
    details:
      'Built a robust data extraction engine to pull recruiter contact information. Created a seamless UI dashboard to review leads and automatically send highly targeted, AI-tailored emails, streamlining the entire job search process.',
  },
]

export function Projects3D() {
  return (
    <section id="projects" className="relative py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-white text-lg max-w-2xl">
            A selection of my most impactful work demonstrating full-stack capabilities and innovative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-16 justify-items-center">
          {projects.map((project) => (
            <CardContainer key={project.id} className="inter-var h-full w-full">
              <CardBody className="relative group/card hover:shadow-2xl hover:shadow-primary/[0.1] w-full h-full rounded-xl p-6 sm:p-8 transition-all duration-300 flex flex-col [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]">
                {/* Glassmorphism Background Layer - Separated to preserve 3D effect */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl pointer-events-none" style={{ transform: "translateZ(0px)" }} />

                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white mb-2"
                >
                  {project.title}
                </CardItem>
                
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-200 text-sm max-w-sm mt-3 mb-2"
                >
                  {project.description}
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-6 mb-6">
                  <img
                    src={project.image}
                    height="800"
                    width="800"
                    className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={`${project.title} thumbnail`}
                  />
                </CardItem>

                <CardItem translateZ="60" className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary-foreground border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </CardItem>

                <CardItem translateZ="40" className="text-gray-300 text-sm mb-6">
                  {project.details}
                </CardItem>

                <div className="flex items-center gap-3 mt-auto [transform-style:preserve-3d]">
                  <CardItem translateZ={60}>
                    <Button
                      borderRadius="0.5rem"
                      containerClassName="h-9 w-auto"
                      className="text-xs px-3 py-1.5 flex items-center gap-2"
                    >
                      <Code2 size={14} />
                      Code
                    </Button>
                  </CardItem>
                  <CardItem translateZ={60}>
                    <Button
                      borderRadius="0.5rem"
                      containerClassName="h-9 w-auto"
                      className="text-xs px-3 py-1.5 flex items-center gap-2"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </Button>
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
