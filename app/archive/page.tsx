import React from 'react'

export default function ArchivePage() {  
  const pastResets = [  
    { title: "The Aman Kyoto Session", date: "Fall 2025", category: "Quietude" },  
    { title: "Patagonian Frontier", date: "Winter 2024", category: "Vastness" },  
    { title: "Cycladic Architecture Study", date: "Summer 2024", category: "Form" },  
    { title: "The Atacama Void", date: "Spring 2024", category: "Stillness" },  
  ]

  return (  
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">  
      <header className="mb-20">  
        <h1 className="text-4xl md:text-5xl font-serif mb-4 tracking-tight">The Archive</h1>  
        <p className="text-zinc-500 max-w-md font-light italic">A chronological record of executed resets and spatial studies.</p>  
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">  
        {pastResets.map((item, i) => (  
          <div key={i} className="group cursor-pointer">  
            {/* Image Container with Zoom Effect */}  
            <div className="aspect-[4/5] bg-zinc-100 mb-6 overflow-hidden relative">  
              <div className="absolute inset-0 bg-zinc-200 group-hover:scale-110 transition-transform duration-[1500ms] ease-out" />  
              {/* This overlay creates a subtle darkening on hover */}  
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />  
            </div>

            {/* Category Reveal */}  
            <div className="overflow-hidden h-5 mb-2">  
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 group-hover:-translate-y-full transition-transform duration-500">  
                {item.category} — {item.date}  
              </p>  
              <p className="text-[10px] uppercase tracking-[0.2em] text-black translate-y-0 transition-transform duration-500">  
                View Details  
              </p>  
            </div>

            <h3 className="text-xl font-serif group-hover:italic transition-all duration-500">  
              {item.title}  
            </h3>  
          </div>  
        ))}  
      </div>  
    </main>  
  )  
}  
