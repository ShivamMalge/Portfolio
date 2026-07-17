import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Projects3D } from '@/components/projects-3d'
import GlobeDemo from '@/components/globe-demo'
import { Skills } from '@/components/skills'
import { LiveStats } from '@/components/live-stats'
import { Contact } from '@/components/contact'
import ScrollFadeBackground from '@/components/ui/scroll-fade-background'

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Global Optimized LightPillar Background */}
      <ScrollFadeBackground />

      <div className="relative z-10 flex flex-col">
        <Header />
        <Hero />
        <Projects3D />
        <GlobeDemo />
        <Skills />
        <LiveStats />
        <Contact />
      </div>
    </main>
  )
}
