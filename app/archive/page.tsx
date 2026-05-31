import React from 'react'

export default function ArchivePage() {  
  const pastResets = [  
    { title: "The Aman Kyoto Session", date: "Fall 2025", category: "Quietude" },  
    { title: "Patagonian Frontier", date: "Winter 2024", category: "Vastness" },  
    { title: "Cycladic Architecture Study", date: "Summer 2024", category: "Form" },  
  ]

  return (  
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">  
      <header className="mb-20">  
        <h1 className="text-4xl md:text-5xl font-serif mb-4 tracking-tight">The Archive</h1>  
        <p className="text-zinc-500 max-w-md font-light italic">A chronological record of executed resets and spatial studies.</p>  
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
        {pastResets.map((item, i) => (  
          <div key={i} className="group cursor-pointer">  
            <div className="aspect-[3/4] bg-zinc-100 mb-6 overflow-hidden">  
              {/* Image placeholder for high-contrast aesthetic */}  
              <div className="w-full h-full bg-zinc-200 group-hover:scale-105 transition-transform duration-700" />  
            </div>  
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-2">{item.category} — {item.date}</p>  
            <h3 className="text-xl font-serif group-hover:italic transition-all">{item.title}</h3>  
          </div>  
        ))}  
      </div>  
    </main>  
  )  
}  
