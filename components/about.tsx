'use client'

import { motion } from 'motion/react'
import { Search, PenTool, Code, Rocket, User, GraduationCap, MapPin } from 'lucide-react'

export function About() {
  const methodologies = [
    {
      title: "Research & Planning",
      icon: <Search className="w-6 h-6 text-primary mb-3" />,
      content: "Every great project starts with understanding the problem. I analyze requirements, explore possible solutions, and create a clear roadmap before writing a single line of code. This ensures every decision has a purpose."
    },
    {
      title: "Design & Architecture",
      icon: <PenTool className="w-6 h-6 text-primary mb-3" />,
      content: "I focus on creating intuitive user experiences and scalable software architectures. From responsive interfaces to well-structured backend systems, I design solutions that are clean, maintainable, and built for growth."
    },
    {
      title: "Development",
      icon: <Code className="w-6 h-6 text-primary mb-3" />,
      content: "Using modern technologies and best practices, I transform ideas into reliable applications. I emphasize clean code, reusable components, performance optimization, and continuous learning throughout the development process."
    },
    {
      title: "Testing & Deployment",
      icon: <Rocket className="w-6 h-6 text-primary mb-3" />,
      content: "Before every release, I thoroughly test functionality, optimize performance, and fix potential issues. I deploy applications using modern cloud platforms and continue refining them based on feedback and real-world usage."
    }
  ]

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 bg-transparent z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
        </motion.div>

        {/* Bento Grid Layout: Left Side (About) | Right Side (Methodologies) */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Side: About Me (Spans 5 cols on lg) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[40%] flex flex-col"
          >
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Shivam Malge</h3>
                  <p className="text-primary font-medium">Final-Year CS (Data Science)</p>
                </div>
              </div>

              <div className="space-y-6 text-white/80 leading-relaxed text-sm md:text-base flex-grow">
                <p>
                  Hey, I'm a developer who enjoys building things that live on the internet. My interests lie at the intersection of full-stack development, AI/ML, cloud computing, and scalable backend systems.
                </p>
                <p>
                  I believe great software is built on strong fundamentals, so alongside creating projects, I'm constantly improving my skills in algorithms, mathematics, system design, and modern development practices.
                </p>
                <p>
                  When I'm not coding, you'll probably find me learning a new technology, experimenting with side projects, or exploring how AI can solve practical problems. My goal is simple: keep learning, keep building, and create software that makes a difference.
                </p>
              </div>
            </div>

            {/* Education & Location Card */}
            <div className="mt-6 flex-grow p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">Education</p>
                  <p className="text-white font-bold text-base">B.Tech CS</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white font-bold text-base">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Methodology (Spans 7 cols on lg) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[60%] flex flex-col"
          >
            <div className="p-6 pt-5 md:p-8 md:pt-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5">Methodology of Work</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                {methodologies.map((method, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {method.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white leading-tight">{method.title}</h4>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed flex-grow">{method.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
