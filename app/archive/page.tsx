import React from 'react'

export default function ArchivePage() {  
  const records = [  
    { title: "The Aman Kyoto Session", location: "Japan", year: "2025", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070" },  
    { title: "Atacama Void Study", location: "Chile", year: "2024", img: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=2070" },  
    { title: "The Cycladic Architecture", location: "Greece", year: "2024", img: "https://images.unsplash.com/photo-1516483642777-94182987087b?q=80&w=2070" }  
  ]

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-40 pb-32 px-6">  
      <div className="max-w-7xl mx-auto">  
        <header className="mb-32 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-900 pb-20">  
          <div>  
            <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 mb-6 block">The Archive</span>  
            <h1 className="text-5xl md:text-7xl font-serif tracking-tighter">Past <span className="italic">Resets.</span></h1>  
          </div>  
          <p className="text-zinc-500 max-w-sm mt-8 md:mt-0 font-light italic leading-relaxed">  
            A chronological record of spatial studies and executed sequences. Access is limited to active members.  
          </p>  
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12">  
          {records.map((record, i) => (  
            <div key={i} className={`md:col-span-6 ${i % 2 !== 0 ? 'md:mt-32' : ''} group cursor-pointer`}>  
              <div className="aspect-[16/9] mb-8 overflow-hidden bg-zinc-900">  
                <img   
                  src={record.img}   
                  className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out"   
                  alt={record.title}  
                />  
              </div>  
              <div className="flex justify-between items-start">  
                <div>  
                  <h3 className="text-2xl font-serif group-hover:italic transition-all duration-500 mb-2">{record.title}</h3>  
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">{record.location} — {record.year}</p>  
                </div>  
                <span className="text-[10px] text-zinc-700 font-medium">Record ID: 00{i + 1}</span>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>  
    </main>  
  )  
}  
