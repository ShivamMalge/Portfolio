'use client'

import { ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Shivam Malge</h3>
            <p className="text-foreground/60">Full Stack Software Engineer</p>
            <p className="text-foreground/60 text-sm">Based in Bengaluru, India</p>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-foreground/60 mb-4">© 2024 Shivam Malge. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              Back to Top
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
