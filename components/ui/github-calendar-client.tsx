'use client'

import React, { useState, useEffect } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

export default function GithubCalendarClient({ username }: { username: string }) {
  const [mounted, setMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ blockSize: 14, blockMargin: 5, fontSize: 14 })

  useEffect(() => {
    setMounted(true)
    const updateDimensions = () => {
      const width = window.innerWidth
      if (width < 450) {
        setDimensions({ blockSize: 5, blockMargin: 1, fontSize: 8 })
      } else if (width < 600) {
        setDimensions({ blockSize: 7, blockMargin: 2, fontSize: 10 })
      } else if (width < 768) {
        setDimensions({ blockSize: 10, blockMargin: 3, fontSize: 12 })
      } else {
        setDimensions({ blockSize: 14, blockMargin: 5, fontSize: 14 })
      }
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  if (!mounted) {
    return <div className="h-[150px] w-full animate-pulse bg-white/5 rounded-xl flex items-center justify-center text-white/40">Loading GitHub Calendar...</div>
  }

  return (
    <div className="w-full flex justify-center pb-4">
      <GitHubCalendar 
        username={username} 
        colorScheme="dark"
        fontSize={dimensions.fontSize}
        blockSize={dimensions.blockSize}
        blockMargin={dimensions.blockMargin}
        theme={{
          dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        }}
      />
    </div>
  )
}
