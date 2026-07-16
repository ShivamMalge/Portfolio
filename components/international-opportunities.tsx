'use client'

import { Globe3D } from './ui/3d-globe'
import type { GlobeMarker } from './ui/3d-globe'

const sampleMarkers: GlobeMarker[] = [
  { lat: 40.7128, lng: -74.006, label: 'New York' },
  { lat: 51.5074, lng: -0.1278, label: 'London' },
  { lat: 35.6762, lng: 139.6503, label: 'Tokyo' },
  { lat: -33.8688, lng: 151.2093, label: 'Sydney' },
  { lat: 48.8566, lng: 2.3522, label: 'Paris' },
  { lat: 28.6139, lng: 77.209, label: 'New Delhi' },
  { lat: 55.7558, lng: 37.6173, label: 'Moscow' },
  { lat: -22.9068, lng: -43.1729, label: 'Rio de Janeiro' },
  { lat: 31.2304, lng: 121.4737, label: 'Shanghai' },
  { lat: 25.2048, lng: 55.2708, label: 'Dubai' },
  { lat: -34.6037, lng: -58.3816, label: 'Buenos Aires' },
  { lat: 1.3521, lng: 103.8198, label: 'Singapore' },
]

export function InternationalOpportunities() {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-card/50 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Open to International Remote Internships
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I&apos;m actively seeking full-time and internship opportunities with organizations
              pushing the boundaries of technology. Whether you&apos;re in New York or Tokyo, I&apos;m
              ready to contribute to impactful projects and grow with your team.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Full-Time & Internship Roles
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Seeking positions in full-stack development, backend engineering, or machine learning roles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Remote-First Preference
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Experienced with distributed teams and async communication across time zones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Quick Response Time
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Available to discuss opportunities and start immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Get in Touch
              </button>
              <button className="px-8 py-3 border border-border bg-transparent text-foreground font-semibold rounded-lg hover:bg-muted transition-colors">
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Globe */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl" />
            <Globe3D
              markers={sampleMarkers}
              config={{
                atmosphereColor: '#64b5f6',
                atmosphereIntensity: 20,
                bumpScale: 5,
                autoRotateSpeed: 0.5,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
