"use client"

import React from 'react'  
import Image from 'next/image'  
import Link from 'next/link'  
import { Cormorant_Garamond, Inter } from 'next/font/google'  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries'

const cormorant = Cormorant_Garamond({   
  subsets: ['latin'],  
  weight: ['300', '400', '500', '600', '700'],  
  variable: '--font-cormorant'  
})

const inter = Inter({   
  subsets: ['latin'],  
  variable: '--font-inter'  
})

export default function HomePage() {  
  return (  
    <main className={`${inter.variable} ${cormorant.variable} bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#C5A059]/30`}>  
      {/* Hero Section */}  
      <section className="relative h-screen flex items-center justify-center overflow-hidden">  
        {/* Cinematic Hero Image */}  
        <div className="absolute inset-0 z-0">  
          <Image  
            src="https://cdn.marblism.com/qFTkeALRTbV.webp"  
            alt="Cinematic Minimalist Sanctuary"  
            fill  
            className="object-cover opacity-60"  
            priority  
          />  
          {/* Subtle Gradient Overlay */}  
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-transparent to-[#0A0A0A]" />  
        </div>

        {/* Hero Content */}  
        <div className="relative z-10 text-center px-4">  
          <h1 className="font-serif text-6xl md:text-9xl font-light tracking-[0.15em] text-[#C5A059] leading-none uppercase">  
            The ROI of Reset  
          </h1>  
          <p className="mt-8 text-[10px] md:text-xs font-sans font-light tracking-[0.5em] uppercase text-white/50">  
            Precision in Leisure • Absolute Discretion  
          </p>  
        </div>  
      </section>

      {/* Properties Grid Section */}  
      <section className="max-w-7xl mx-auto px-6 py-32 bg-[#0A0A0A]">  
        <div className="mb-24 flex flex-col items-center">  
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-[#C5A059]">The Portfolio</h2>  
          <div className="h-px w-32 bg-[#C5A059] mt-6 opacity-30" />  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">  
          {PROPERTY_DATA.slice(0, 6).map((property) => (  
            <Link   
              key={property.id}   
              href={`/archive/property/${property.id}`}  
              className="group block space-y-6"  
            >  
              {/* Property Image Container */}  
              <div className="relative aspect-[3/4] overflow-hidden bg-[#111] border border-white/5 group-hover:border-[#C5A059]/30 transition-colors duration-700">  
                <Image  
                  src={property.image}  
                  alt={property.name}  
                  fill  
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"  
                />  
                  
                {/* Location Overlay */}  
                <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/60 to-transparent">  
                  <p className="text-[9px] tracking-[0.4em] uppercase text-[#C5A059] font-sans">  
                    {property.location}  
                  </p>  
                </div>  
              </div>  
                
              {/* Property Details */}  
              <div className="space-y-3 px-2">  
                <h3 className="font-serif text-2xl font-light tracking-widest uppercase group-hover:text-[#C5A059] transition-colors duration-500">  
                  {property.name}  
                </h3>  
                <p className="font-serif text-sm font-light text-white/50 italic tracking-wide leading-relaxed line-clamp-2">  
                  {property.highlight}  
                </p>  
              </div>

              <div className="pt-2 px-2 flex items-center gap-4">  
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#C5A059] border-b border-[#C5A059]/20 pb-1 group-hover:border-[#C5A059] transition-all">  
                  View Dossier  
                </span>  
                <div className="h-px flex-1 bg-white/5 group-hover:bg-[#C5A059]/20 transition-all duration-700" />  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Philosophy Footer */}  
      <section className="py-40 border-t border-white/5 text-center px-6">  
        <p className="max-w-3xl mx-auto font-serif text-lg md:text-2xl font-light leading-relaxed tracking-[0.1em] text-white/60 italic">  
          “We do not sell travel. We curate the preservation of your most finite asset: time.”  
        </p>  
        <div className="mt-16 flex items-center justify-center gap-8">  
          <div className="h-px w-12 bg-[#C5A059]/30" />  
          <div className="text-[10px] tracking-[0.6em] uppercase text-[#C5A059] font-sans">  
            NexVoyage Collective  
          </div>  
          <div className="h-px w-12 bg-[#C5A059]/30" />  
        </div>  
      </section>  
    </main>  
  )  
}  
