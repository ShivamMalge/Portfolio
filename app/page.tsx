import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Projects3D } from '@/components/projects-3d'
import GlobeDemo from '@/components/globe-demo'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import LightPillar from '@/components/ui/LightPillar'

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Global LightPillar Background */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none z-0"
        style={{
          height: '350vh',
          opacity: 0.8,
          maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)'
        }}
      >
        <LightPillar
          topColor="#0ea5e9"
          bottomColor="#020617"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="screen"
        />
      </div>

      <div className="relative z-10 flex flex-col">
        <Header />
        <Hero />
        <Projects3D />
        <GlobeDemo />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
