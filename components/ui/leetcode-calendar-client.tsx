'use client'

import React, { useEffect, useState } from 'react'
import { ActivityCalendar } from 'react-activity-calendar'

interface CalendarData {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export default function LeetcodeCalendarClient({ username }: { username: string }) {
  const [data, setData] = useState<CalendarData[]>([])
  const [loading, setLoading] = useState(true)

  const [dimensions, setDimensions] = useState({ blockSize: 14, blockMargin: 5, fontSize: 14 })

  useEffect(() => {
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

  useEffect(() => {
    async function fetchCalendar() {
      try {
        const res = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`)
        if (!res.ok) return
        const json = await res.json()
        
        // json.submissionCalendar is a string of JSON: "{\"1710460800\": 1, ...}"
        const submissions = JSON.parse(json.submissionCalendar)
        
        // Get date 1 year ago
        const oneYearAgo = new Date()
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
        
        // Generate array of last 365 days
        const calendarMap = new Map<string, number>()
        
        for (let d = new Date(oneYearAgo); d <= new Date(); d.setDate(d.getDate() + 1)) {
          const dateString = d.toISOString().split('T')[0]
          calendarMap.set(dateString, 0)
        }

        // Fill with actual data
        for (const [timestamp, count] of Object.entries(submissions)) {
          const date = new Date(parseInt(timestamp) * 1000)
          const dateString = date.toISOString().split('T')[0]
          if (calendarMap.has(dateString)) {
            calendarMap.set(dateString, count as number)
          }
        }

        // Convert to required format and calculate levels
        const formattedData: CalendarData[] = Array.from(calendarMap.entries()).map(([date, count]) => {
          let level: 0 | 1 | 2 | 3 | 4 = 0
          if (count > 0) level = 1
          if (count > 2) level = 2
          if (count > 4) level = 3
          if (count > 6) level = 4
          return { date, count, level }
        })

        setData(formattedData)
      } catch (error) {
        console.error("Error fetching Leetcode calendar", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCalendar()
  }, [username])

  if (loading) {
    return <div className="text-white/60 animate-pulse py-10">Loading calendar...</div>
  }

  if (data.length === 0) {
    return <div className="text-white/60 py-10">No calendar data available</div>
  }

  return (
    <div className="w-full flex justify-center pb-4">
      <ActivityCalendar
        data={data}
        colorScheme="dark"
        fontSize={dimensions.fontSize}
        blockSize={dimensions.blockSize}
        blockMargin={dimensions.blockMargin}
        theme={{
          dark: ['#161b22', '#ffa11640', '#ffa11670', '#ffa116a0', '#ffa116'],
        }}
      />
    </div>
  )
}
