"use client"

import React, { useEffect, useState } from 'react'  
import Link from 'next/link'

// Signature Palette  
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
          Targeted Style Overrides:   
          Specifically killing the white blocks in the existing navigation   
          without affecting the rest of the site's structure.  
      */}  
      <style jsx global>{`  
        header, nav, .nav-item, .menu-link {   
          background-color: transparent !important;   
          background: none !important;  
        }  
        .bg-white, .bg-slate-50, .bg-[#FCFAF7] {   
          background-color: transparent !important;   
        }  
        /* Ensuring the green nav items don't have white highlights */  
        header a, header span {  
          background-color: transparent !important;  
        }  
      `}</style>

      {/* 1. CINEMATIC HERO: THE SOVEREIGN ARRIVAL */}  
      <section className="relative h-[90vh] w-full overflow-hidden">  
        <div   
          className={`absolute inset-0 transition-transform duration-[10000ms] ease-out ${isLoaded ? 'scale-110' : 'scale-100'}`}  
        >  
          <img   
            src="https://cdn.marblism.com/8cCycGyYogj.webp"   
            alt="The Sovereign Arrival"   
            className="h-full w-full object-cover opacity-70"  
          />  
        </div>  
          
        {/* Gradient Shadow Overlay */}  
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#000000]" />  
          
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">  
          <p className={`text-[10px] uppercase tracking-[0.6em] mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>  
            Established 2026  
          </p>  
          <h1 className={`font-serif text-5xl md:text-8xl font-light tracking-tighter transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>  
            THE SOVEREIGN <br />  
            <span className="italic">ARRIVAL</span>  
          </h1>  
        </div>  
      </section>

      {/* 2. THE MANIFESTO (Minimalist Context) */}  
      <section className="py-40 px-8 flex justify-center">  
        <div className="max-w-3xl text-center">  
          <h2 className="font-serif text-3xl md:text-4xl italic font-light leading-snug">  
            "A collection of perspectives curated for those who view travel as an architectural pursuit of the soul."  
          </h2>  
          <div className="mt-12 h-[1px] w-24 bg-[#C5A059]/30 mx-auto" />  
        </div>  
      </section>

      {/* 3. THE COLLECTION (Vertical Editorial Strips) */}  
      <section className="pb-40 px-4 md:px-20">  
        <div className="flex flex-col gap-32">  
          {featured.map((item, idx) => (  
            <Link   
              key={item.id}   
              href={`/archive/property/${item.id}`}  
              className={`group flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}  
            >  
              <div className="w-full md:w-3/5 overflow-hidden aspect-[16/9]">  
                <img   
                  src={`https://cdn.marblism.com/grid-${idx + 1}.webp`}   
                  alt={item.name}  
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"  
                />  
              </div>  
              <div className="w-full md:w-2/5 text-center md:text-left">  
                <span className="text-[10px] uppercase tracking-[0.4em] opacity-50">0{idx + 1} // {item.location}</span>  
                <h3 className="mt-4 font-serif text-4xl font-light group-hover:italic transition-all">{item.name}</h3>  
                <div className="mt-6 inline-block text-[10px] uppercase tracking-[0.4em] border-b border-[#C5A059]/20 pb-1 group-hover:border-[#C5A059] transition-all">  
                  View Detail  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* 4. THE CALL TO THE VOID (Footer CTA) */}  
      <section className="py-60 bg-[#050505] text-center border-t border-[#C5A059]/5">  
        <h2 className="font-serif text-sm uppercase tracking-[0.8em] mb-12">The Archive</h2>  
        <Link   
          href="/archive"  
          className="text-5xl md:text-7xl font-serif font-light hover:italic transition-all"  
        >  
          Begin Discovery  
        </Link>  
      </section>  
    </main>  
  )  
}  
