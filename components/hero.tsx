'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/moving-border'
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '@/components/ui/social-icons'

import SplitText from '@/components/ui/split-text'

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border text-sm font-medium text-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Full Stack Engineer
          </span>
        </div>

        <SplitText
          tag="h1"
          text="Hey there I'm Shivam"
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          delay={50}
          duration={0.8}
          ease="power3.out"
          splitType="words, chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Full Stack Software Engineer focused on automating complex technical bottlenecks and architecting scalable,
          user-centric systems with Python, React, and Next.js.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            borderRadius="0.75rem"
            containerClassName="w-[200px] h-14"
            className="text-white flex items-center justify-center w-full h-full text-base font-medium"
            style={{ width: '200px' }}
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            borderRadius="0.75rem"
            containerClassName="w-[200px] h-14"
            className="text-white flex items-center justify-center w-full h-full text-base font-medium"
            style={{ width: '200px' }}
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/ShivamMalge"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 border border-border hover:border-foreground/30 hover:bg-muted transition-all duration-300"
          >
            <GithubIcon size={20} className="text-foreground" />
          </a>
          <a
            href="https://leetcode.com/u/ShivamMalge/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 border border-border hover:border-foreground/30 hover:bg-muted transition-all duration-300"
          >
            <LeetCodeIcon size={20} className="text-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-malge-12523a293/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 border border-border hover:border-foreground/30 hover:bg-muted transition-all duration-300"
          >
            <LinkedinIcon size={20} className="text-foreground" />
          </a>
        </div>
      </div>
    </section>
  )
}
