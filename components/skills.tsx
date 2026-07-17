'use client'

import React from 'react'
import TiltedCard from '@/components/ui/TiltedCard'

const skillsData = [
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Tailwind CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Express', url: 'https://skillicons.dev/icons?i=express' },
  { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Prisma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
]

export function Skills() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardSize = isMobile ? '64px' : '100px';
  const imgSize = isMobile ? '32px' : '50px';

  return (
    <>
      <section id="skills" className="py-24 px-4 bg-transparent overflow-x-hidden relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-lg text-white/60">
              Hover over each technology to interact with it.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-8 mx-auto justify-items-center w-full max-w-5xl">
            {skillsData.map((skill) => (
              <TiltedCard
                key={skill.name}
                imageSrc={skill.url}
                altText={skill.name}
                captionText={skill.name}
                containerHeight={cardSize}
                containerWidth={cardSize}
                imageHeight={imgSize}
                imageWidth={imgSize}
                rotateAmplitude={20}
                scaleOnHover={1.15}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={false}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
