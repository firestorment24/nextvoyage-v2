import React from 'react'  
import Link from 'next/link'

const PILLARS = [  
 { id: 'metropolitan', name: 'Metropolitan', desc: 'Urban sanctuaries in the world’s most vibrant capitals.' },  
 { id: 'floating', name: 'Floating', desc: 'Private vessels and over-water estates with zero footprint.' },  
 { id: 'island', name: 'Island', desc: 'Archipelagos reserved for those who seek total seclusion.' },  
 { id: 'alpine', name: 'Alpine', desc: 'High-altitude retreats designed for clarity and peace.' },  
 { id: 'stadium', name: 'Stadium', desc: 'Elite access to global sporting events, redefined.' },  
 { id: 'cinematic', name: 'Cinematic', desc: 'Immersive landscapes that blur the line between art and reality.' },  
 { id: 'soulful', name: 'Soulful', desc: 'Dedicated spaces for wellness, legacy, and inner growth.' },  
 { id: 'education', name: 'Education', desc: 'Knowledge-led travel curated by global thought leaders.' },  
 { id: 'mobile', name: 'Mobile', desc: 'Ultra-luxury expeditions to the earth’s final frontiers.' },  
]

export default function HomePage() {  
 return (  
   <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">  
     {/* Hero Section */}  
     <section className="mb-32 text-center">  
       <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">Quiet Luxury, <br/>Unrivaled Access.</h1>  
       <p className="text-gray-400 text-sm uppercase tracking-[0.4em] max-w-xl mx-auto leading-relaxed">  
         The NexVoyage Standard: Bespoke Sanctuaries Vetted by 18 Global Specialists.  
       </p>  
     </section>

     {/* The Grid */}  
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">  
       {PILLARS.map((pillar) => (  
         <div key={pillar.id} className="group cursor-pointer">  
           <div className="aspect-[4/5] bg-gray-50 mb-8 overflow-hidden relative">  
             {/* Placeholder for images - we can add your specific URLs later */}  
             <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-widest text-gray-300">  
               {pillar.name} Visual  
             </div>  
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />  
           </div>  
           <h3 className="text-lg font-serif mb-2">{pillar.name}</h3>  
           <p className="text-xs text-gray-400 leading-relaxed mb-6 h-10">  
             {pillar.desc}  
           </p>  
           <Link   
             href={`/sanctuaries/${pillar.id}`}   
             className="text-[10px] uppercase tracking-widest border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all"  
           >  
             Discover  
           </Link>  
         </div>  
       ))}  
     </div>

     {/* Call to Action */}  
     <section className="mt-48 py-32 border-t border-gray-100 text-center">  
       <h2 className="text-2xl font-serif mb-8">Ready to curate your next sanctuary?</h2>  
       {/* Integrating your Cal.com link here */}  
       <a   
         href="https://cal.com/nexvoyagecollective"   
         target="_blank"  
         className="inline-block bg-black text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gray-800 transition-colors"  
       >  
         Book a Consultation  
       </a>  
     </section>  
   </div>  
 )  
}  
