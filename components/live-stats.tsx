import React from 'react'
import GithubCalendarClient from './ui/github-calendar-client'
import LeetcodeCalendarClient from './ui/leetcode-calendar-client'

export async function LiveStats() {
  return (
    <section id="live-stats" className="py-20 px-4 bg-transparent relative z-10 border-t border-white/5 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Live Stats</h2>
          <p className="text-white/60">Real-time data fetched directly from GitHub and LeetCode</p>
        </div>

        {/* LeetCode Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center gap-3 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center">LeetCode Achievements</h3>
          </div>
          
          <div className="w-full flex justify-center max-w-[1000px] mx-auto">
            <div className="w-full p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#fe428e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
               <div className="w-full relative z-10 flex flex-col items-center">
                 <LeetcodeCalendarClient username="ShivamMalge" />
               </div>
            </div>
          </div>
        </div>

        {/* GitHub Section */}
        <div className="mt-8">
           <div className="flex items-center justify-center gap-3 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center">GitHub Contributions</h3>
          </div>
          
          <div className="w-full flex justify-center max-w-[1000px] mx-auto">
            <div className="w-full p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#39d353]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
               <div className="w-full relative z-10 flex flex-col items-center">
                 <GithubCalendarClient username="ShivamMalge" />
               </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
