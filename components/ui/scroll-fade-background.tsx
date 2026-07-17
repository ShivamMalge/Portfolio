'use client';

import LightPillar from './LightPillar';
import { useEffect, useState } from 'react';

export default function ScrollFadeBackground() {
  const [mounted, setMounted] = useState(false);
  const [pillarWidth, setPillarWidth] = useState(3.0);

  useEffect(() => {
    setMounted(true);
    
    const updateWidth = () => {
      // Use a much narrower pillar on mobile screens to prevent it from washing out the background
      setPillarWidth(window.innerWidth < 768 ? 1.2 : 3.0);
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-70">
      <div 
        className="w-full h-full"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
        }}
      >
        <LightPillar
          topColor="#0ea5e9"
          bottomColor="#020617"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={pillarWidth}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={0}
          interactive={false}
          mixBlendMode="screen"
        />
      </div>
    </div>
  );
}
