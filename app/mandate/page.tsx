"use client"

import React from 'react'  
import Link from 'next/link'  
import Navigation from '../../components/Navigation'  
import Footer from '../../components/Footer'

export default function Mandate() {  
  const pillars = [  
    {  
      title: "The Curation",  
      content: "We do not offer a directory; we offer a selection. Every sanctuary in our ledger has been vetted not just for its luxury, but for its soul. If it doesn't move us, it doesn't make the Manifest."  
    },  
    {  
      title: "The Discretion",  
      content: "True luxury is silent. We operate with a ghost-like precision, ensuring your requirements are met before you even have to voice them. Your privacy is our highest currency."  
    },  
    {  
      title: "The Legacy",  
      content: "Travel should be more than a change of scenery—it should be a chapter in your story. We curate experiences that linger in the memory long after the return flight has landed."  
    }  
  ]

  return (  
    <main className="min-h-screen bg-black text-white selection:bg-[#d4af37]/30">  
      <Navigation />

      {/* Hero Section */}  
      <section className="relative h-[80vh] flex flex-col justify-center items-center px-8 text-center overflow-hidden">  
        <div   
          className="absolute inset-0 bg-cover bg-center opacity-30 grayscale"  
          style={{ backgroundImage: "url('https://cdn.marblism.com/UyUYAdKbVtQ.webp')" }}  
        ></div>  
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

        <div className="relative z-10 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">  
          <h1 className="text-[#d4af37] text-[10px] tracking-[0.6em] uppercase mb-6 font-light">  
            Our Philosophy  
          </h1>  
          <h2 className="text-5xl md:text-8xl font-extralight tracking-[0.2em] mb-12 uppercase leading-tight">  
            The <span className="font-light">Mandate</span>  
          </h2>  
          <p className="text-white/60 text-lg md:text-xl font-extralight tracking-widest leading-relaxed max-w-2xl mx-auto">  
            NexVoyage was founded on a singular premise: that the most valuable commodity for the modern pioneer is not time, but the quality of the experience within it.  
          </p>  
        </div>  
      </section>

      {/* Philosophy Pillars */}  
      <section className="relative z-10 py-32 px-8 max-w-6xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">  
          {pillars.map((pillar, index) => (  
            <div   
              key={pillar.title}  
              className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000"  
              style={{ transitionDelay: `${index * 200}ms` }}  
            >  
              <div className="w-12 h-[1px] bg-[#d4af37]"></div>  
              <h3 className="text-2xl font-extralight tracking-[0.3em] uppercase text-white">  
                {pillar.title}  
              </h3>  
              <p className="text-white/50 text-sm font-extralight tracking-widest leading-loose">  
                {pillar.content}  
              </p>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* The Final Word / CTA */}  
      <section className="py-40 px-8 text-center bg-[#0a0a0a]">  
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">  
          <div className="text-4xl md:text-5xl font-extralight tracking-[0.2em] leading-snug italic text-white/90">  
            "We don't just book trips. We engineer arrivals."  
          </div>  
            
          <Link   
            href="/reserve"  
            className="group flex flex-col items-center gap-4"  
          >  
            <div className="text-[#d4af37] text-[10px] tracking-[0.4em] uppercase group-hover:tracking-[0.6em] transition-all duration-500">  
              Begin Your Consultation  
            </div>  
            <div className="w-24 h-[1px] bg-[#d4af37]/30 group-hover:w-48 group-hover:bg-[#d4af37] transition-all duration-700"></div>  
          </Link>  
        </div>  
      </section>

      <Footer />  
    </main>  
  )  
}  
