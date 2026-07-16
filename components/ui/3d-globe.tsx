'use client'

import React, { useEffect, useRef } from 'react'

export interface GlobeMarker {
  lat: number
  lng: number
  label: string
}

export interface GlobeConfig {
  atmosphereColor?: string
  atmosphereIntensity?: number
  bumpScale?: number
  autoRotateSpeed?: number
}

export function Globe3D({
  markers = [],
  config = {},
  className = '',
}: {
  markers?: GlobeMarker[]
  config?: GlobeConfig
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create SVG globe using d3-style rendering
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('viewBox', '0 0 960 960')
    svg.setAttribute('className', 'w-full h-full')

    // Create gradient for globe
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs')
    const gradient = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'radialGradient'
    )
    gradient.setAttribute('id', 'globeGradient')
    gradient.setAttribute('cx', '40%')
    gradient.setAttribute('cy', '40%')

    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop')
    stop1.setAttribute('offset', '0%')
    stop1.setAttribute('stop-color', 'rgba(100, 200, 255, 0.6)')

    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop')
    stop2.setAttribute('offset', '100%')
    stop2.setAttribute('stop-color', 'rgba(30, 100, 200, 0.3)')

    gradient.appendChild(stop1)
    gradient.appendChild(stop2)
    defs.appendChild(gradient)
    svg.appendChild(defs)

    // Create globe circle
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    circle.setAttribute('cx', '480')
    circle.setAttribute('cy', '480')
    circle.setAttribute('r', '400')
    circle.setAttribute('fill', 'url(#globeGradient)')
    circle.setAttribute('stroke', 'rgba(255, 255, 255, 0.1)')
    circle.setAttribute('stroke-width', '2')
    svg.appendChild(circle)

    // Add marker points
    markers.forEach((marker) => {
      const x = 480 + 380 * Math.cos((marker.lng * Math.PI) / 180) * Math.cos((marker.lat * Math.PI) / 180)
      const y = 480 + 380 * Math.sin((marker.lat * Math.PI) / 180)

      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g')

      // Marker circle
      const markerCircle = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle'
      )
      markerCircle.setAttribute('cx', x.toString())
      markerCircle.setAttribute('cy', y.toString())
      markerCircle.setAttribute('r', '8')
      markerCircle.setAttribute('fill', 'rgba(59, 130, 246, 0.8)')
      markerCircle.setAttribute('stroke', 'rgba(255, 255, 255, 0.8)')
      markerCircle.setAttribute('stroke-width', '2')
      markerCircle.setAttribute('class', 'hover:opacity-100 opacity-80 transition-opacity cursor-pointer')

      group.appendChild(markerCircle)
      svg.appendChild(group)
    })

    containerRef.current.innerHTML = ''
    containerRef.current.appendChild(svg)

    // Add rotation animation
    let rotation = 0
    const animate = () => {
      rotation += (config.autoRotateSpeed || 0.3) * 0.1
      svg.style.transform = `rotateY(${rotation}deg)`
      requestAnimationFrame(animate)
    }

    animate()
  }, [markers, config])

  return (
    <div ref={containerRef} className={className} style={{ perspective: '1000px' }}>
      {/* Globe will be rendered here */}
    </div>
  )
}
