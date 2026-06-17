"use client"

import React from 'react'  
import Image from 'next/image'  
import Link from 'next/link'  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries'

export default function HomePage() {  
  return (  
    <main className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-[#C5A059]/30">  
      {/* Hero Section */}  
      <section className="relative h-screen flex items-center justify-center overflow-hidden">  
        {/* Cinematic Hero Image */}  
        <div className="absolute inset-0 z-0">  
          <Image  
            src="https://cdn.marblism.com/qFTkeALRTbV.webp"  
            alt="Cinematic Minimalist Sanctuary"  
            fill  
            className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"  
            priority  
          />  
          {/* Subtle Gradient Overlay */}  
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]" />  
        </div>

        {/* Hero Content */}  
        <div className="relative z-10 text-center px-4">  
          <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em] text-[#C5A059] transition-colors duration-700">  
            THE ROI OF RESET  
          </h1>  
          <p className="mt-6 text-sm md:text-base font-light tracking-[0.4em] uppercase text-white/60">  
            Precision in Leisure • Absolute Discretion  
          </p>  
        </div>  
      </section>

      {/* Offerings Section - Integrated and Fluid */}  
      <section className="max-w-7xl mx-auto px-6 py-24 bg-[#0A0A0A]">  
        <div className="mb-20 text-center">  
          <h2 className="text-2xl font-light tracking-[0.3em] uppercase text-[#C5A059]">The Portfolio</h2>  
          <div className="h-px w-24 bg-[#C5A059] mx-auto mt-4 opacity-50" />  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">  
          {PROPERTY_DATA.slice(0, 6).map((property) => (  
            <Link   
              key={property.id}   
              href={`/archive/property/${property.id}`}  
              className="group block space-y-4"  
            >  
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111]">  
                <Image  
                  src={property.image}  
                  alt={property.name}  
                  fill  
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"  
                />  
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />  
              </div>  
                
              <div className="space-y-1">  
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059]">  
                  {property.location}  
                </p>  
                <h3 className="text-lg font-light tracking-widest uppercase group-hover:text-[#C5A059] transition-colors duration-300">  
                  {property.name}  
                </h3>  
                <p className="text-xs font-light text-white/40 italic tracking-wide">  
                  {property.highlight}  
                </p>  
              </div>

              <div className="pt-2">  
                <span className="text-[10px] tracking-[0.2em] uppercase border-b border-[#C5A059]/30 pb-1 group-hover:border-[#C5A059] transition-all">  
                  View Dossier  
                </span>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Footer Philosophy */}  
      <section className="py-32 border-t border-white/5 text-center px-6">  
        <p className="max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed tracking-widest text-white/60">  
          “We do not sell travel. We curate the preservation of your most finite asset: time.”  
        </p>  
      </section>  
    </main>  
  )  
}  
