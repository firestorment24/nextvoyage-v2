"use client"

import React, { useEffect, useState } from 'react'  
import Link from 'next/link'

export default function HomePage() {  
const [mounted, setMounted] = useState(false)

useEffect(() => {  
  setMounted(true)  
}, [])

// Properties for the editorial grid  
const properties = [  
  { id: 'one-and-only-aesthesis', name: 'One&Only Aesthesis', loc: 'Athens' },  
  { id: 'aman-venice', name: 'Aman Venice', loc: 'Venice' },  
  { id: 'royal-mansour', name: 'Royal Mansour', loc: 'Marrakech' },  
]

return (  
  <main className="min-h-screen bg-black text-[#C5A059]">  
    {/* THE FIX: Hard-overriding any inherited white backgrounds or box-shadows */}  
    <style jsx global>{`  
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');  
        
      html, body, #__next, main {   
        background-color: #000000 !important;   
        color: #C5A059 !important;  
      }  
        
      /* Killing all white blocks, shadows, and borders that aren't brass */  
      * {   
        border-color: rgba(197, 160, 89, 0.1) !important;  
        box-shadow: none !important;  
      }  
        
      .bg-white, .bg-slate-50, .bg-[#FCFAF7], .shadow-sm, .shadow-md {  
        background-color: transparent !important;  
        background: none !important;  
      }

      h1, h2, h3, h4, p, span, a {  
        font-family: 'Cormorant Garamond', serif;  
        background-color: transparent !important;  
      }  
    `}</style>

    {/* 1. CINEMATIC HERO */}  
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">  
      <div className={`absolute inset-0 transition-transform duration-[15000ms] ease-out ${mounted ? 'scale-110' : 'scale-100'}`}>  
        <img   
          src="https://cdn.marblism.com/8cCycGyYogj.webp"   
          alt="The Sovereign Arrival"   
          className="h-full w-full object-cover opacity-60 grayscale-[30%]"  
        />  
      </div>  
        
      {/* Black Gradient Overlay */}  
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      <div className="relative z-10 text-center px-4">  
        <h1 className="text-6xl md:text-9xl font-light tracking-tighter leading-none mb-4">  
          THE SOVEREIGN <br />  
          <span className="italic">ARRIVAL</span>  
        </h1>  
        <div className="h-[1px] w-32 bg-[#C5A059]/40 mx-auto mt-8" />  
      </div>  
    </section>

    {/* 2. CORE STATEMENT */}  
    <section className="py-40 px-6 text-center bg-black">  
      <h2 className="max-w-4xl mx-auto text-3xl md:text-5xl font-light italic leading-relaxed">  
        "Navigating the intersection of editorial discovery <br className="hidden md:block" /> and bespoke architectural travel."  
      </h2>  
    </section>

    {/* 3. EDITORIAL GRID (The 19 Properties) */}  
    <section className="pb-40 px-6 md:px-20 bg-black">  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">  
        {properties.map((item, idx) => (  
          <Link   
            key={item.id}   
            href={`/archive/property/${item.id}`}  
            className="group block"  
          >  
            <div className="aspect-[4/5] overflow-hidden border border-[#C5A059]/10 bg-black">  
              <img   
                src={`https://cdn.marblism.com/grid-${idx + 1}.webp`}   
                alt={item.name}  
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"  
              />  
            </div>  
            <div className="mt-8 text-center">  
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-50 mb-2">{item.loc}</p>  
              <h3 className="text-3xl font-light group-hover:italic transition-all">{item.name}</h3>  
            </div>  
          </Link>  
        ))}  
      </div>  
    </section>

    {/* 4. FOOTER CALL */}  
    <section className="py-60 border-t border-[#C5A059]/10 text-center bg-black">  
      <Link   
        href="/archive"  
        className="text-sm uppercase tracking-[0.8em] hover:opacity-100 opacity-60 transition-all"  
      >  
        Enter The Archive  
      </Link>  
    </section>  
  </main>  
)  
}  
