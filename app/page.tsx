"use client"

import React, { useEffect, useState } from 'react'  
import Link from 'next/link'

// Signature Palette:  
// Brass: #C5A059  
// Shadow: #000000

export default function HomePage() {  
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {  
    setIsLoaded(true)  
  }, [])

  const featured = [  
    { id: 'one-and-only-aesthesis', name: 'One&Only Aesthesis', location: 'Athens' },  
    { id: 'aman-venice', name: 'Aman Venice', location: 'Venice' },  
    { id: 'royal-mansour', name: 'Royal Mansour', location: 'Marrakech' },  
  ]

  return (  
    <main className="min-h-screen bg-[#000000] text-[#C5A059] selection:bg-[#C5A059] selection:text-black">  
      {/*   
          Surgical Strike on White Boxes:  
          Force-overriding any inherited backgrounds to Shadow Black.  
      */}  
      <style jsx global>{`  
        html, body, main {   
          background-color: #000000 !important;   
        }  
        /* Target common navigation and container classes that often carry white backgrounds */  
        header, nav, .nav-container, .bg-white, .bg-parchment, .bg-[#FCFAF7] {  
          background-color: #000000 !important;  
          background: #000000 !important;  
        }  
        /* Ensure all text elements respect the Brass theme */  
        h1, h2, h3, p, a, span {  
          color: #C5A059 !important;  
        }  
      `}</style>

      {/* 1. CINEMATIC HERO: THE SOVEREIGN ARRIVAL */}  
      <section className="relative h-screen w-full overflow-hidden bg-[#000000]">  
        <div   
          className={`absolute inset-0 transition-transform duration-[12000ms] ease-out ${isLoaded ? 'scale-110' : 'scale-100'}`}  
        >  
          <img   
            src="https://cdn.marblism.com/8cCycGyYogj.webp"   
            alt="The Sovereign Arrival"   
            className="h-full w-full object-cover opacity-50 grayscale-[20%]"  
          />  
        </div>  
          
        {/* Deep Shadow Overlay for text readability */}  
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent" />  
          
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">  
          <p className={`text-[10px] uppercase tracking-[0.8em] mb-10 text-[#C5A059] transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>  
            NexVoyage Collective  
          </p>  
            
          {/* Main Hero Text: Now in Brass on Shadow background */}  
          <div className="bg-[#000000]/60 p-8 backdrop-blur-sm border border-[#C5A059]/10">  
            <h1 className={`font-serif text-5xl md:text-9xl font-light tracking-tighter text-[#C5A059] transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>  
              THE SOVEREIGN <br />  
              <span className="italic">ARRIVAL</span>  
            </h1>  
          </div>  
            
          <div className="mt-12 h-16 w-[1px] bg-[#C5A059]/40 animate-pulse" />  
        </div>  
      </section>

      {/* 2. THE PERSPECTIVE (Minimalist Content) */}  
      <section className="py-48 px-8 bg-[#000000]">  
        <div className="max-w-4xl mx-auto text-center">  
          <h2 className="font-serif text-4xl md:text-5xl italic font-light leading-relaxed text-[#C5A059]">  
            Curated Expeditions for those <br />  
            who seek the <span className="not-italic opacity-80">Unseen.</span>  
          </h2>  
        </div>  
      </section>

      {/* 3. THE COLLECTION (Editorial Stagger) */}  
      <section className="pb-40 px-4 md:px-20 bg-[#000000]">  
        <div className="flex flex-col gap-48">  
          {featured.map((item, idx) => (  
            <Link   
              key={item.id}   
              href={`/archive/property/${item.id}`}  
              className={`group flex flex-col md:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}  
            >  
              <div className="w-full md:w-7/12 overflow-hidden aspect-[16/9] border border-[#C5A059]/5">  
                <img   
                  src={`https://cdn.marblism.com/grid-${idx + 1}.webp`}   
                  alt={item.name}  
                  className="w-full h-full object-cover grayscale transition-all duration-[2000ms] group-hover:grayscale-0 group-hover:scale-105"  
                />  
              </div>  
              <div className="w-full md:w-5/12 text-center md:text-left">  
                <p className="text-[9px] uppercase tracking-[0.5em] opacity-40 mb-4">Location // {item.location}</p>  
                <h3 className="font-serif text-5xl font-light group-hover:italic transition-all text-[#C5A059]">{item.name}</h3>  
                <p className="mt-6 text-sm uppercase tracking-[0.3em] opacity-60">View Archive Entry</p>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* 4. FINAL CTA */}  
      <section className="py-64 bg-[#000000] text-center border-t border-[#C5A059]/10">  
        <Link   
          href="/archive"  
          className="group relative inline-block"  
        >  
          <span className="text-4xl md:text-6xl font-serif font-light text-[#C5A059] group-hover:italic transition-all">  
            Enter the Collection  
          </span>  
          <div className="mt-4 h-[1px] w-0 bg-[#C5A059] transition-all duration-700 group-hover:w-full mx-auto" />  
        </Link>  
      </section>  
    </main>  
  )  
}  
