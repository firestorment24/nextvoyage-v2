"use client"

import React from 'react'  
import Image from 'next/image'  
import Link from 'next/link'  
import { useParams, notFound } from 'next/navigation'  
import Navigation from '../../Navigation'  
import Footer from '../../Footer'

const SANCTUARY_DATA: Record<string, any> = {  
  metropolitan: {  
    name: "The Metropolitan",  
    tagline: "The Fortress of Productivity",  
    location: "Global Tier-1 Cities",  
    heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "In the heart of the world’s most demanding cities, we provide the ultimate redoubt. The Metropolitan is designed for the executive who requires absolute proximity to power without sacrificing the sanctity of silence.",  
    metrics: [  
      { label: "Cognitive Load Reduction", value: "42%" },  
      { label: "Sleep Latency Improvement", value: "18m" },  
      { label: "Decibel Floor", value: "12dB" }  
    ],  
    standard: "Discreet subterranean entry, 24/7 specialist security, and zero-latency connectivity."  
  },  
  nautical: {  
    name: "The Nautical",  
    tagline: "Sovereignty on the Open Sea",  
    location: "International Waters",  
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "A sanctuary that moves with the tides. The Nautical is for those who find peace in perpetual motion, offering a sovereign territory on the open sea with the amenities of a five-star estate.",  
    metrics: [  
      { label: "Vestibular Balance", value: "Optimal" },  
      { label: "Melatonin Production", value: "+22%" },  
      { label: "Autonomic Recovery", value: "High" }  
    ],  
    standard: "Stabilized hull technology, private dive master, and global roaming perimeter."  
  },  
  fortress: {  
    name: "The Fortress",  
    tagline: "Architectural Defense",  
    location: "Remote High-Altitude Terrain",  
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "Security is the greatest luxury. The Fortress is a masterpiece of architectural defense, carved into the landscape to provide a literal and metaphorical barrier against the outside world.",  
    metrics: [  
      { label: "Digital Deceleration", value: "Total" },  
      { label: "Cortisol Suppression", value: "34%" },  
      { label: "Privacy Rating", value: "Tier 1" }  
    ],  
    standard: "EMP-shielded quarters, off-grid power redundancy, and ballistic-grade glass."  
  },  
  alpine: {  
    name: "The Alpine",  
    tagline: "Thin Air, Deep Peace",  
    location: "The Dolomites / Swiss Alps",  
    heroImage: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "Clarity found at altitude. The Alpine utilizes the physiological benefits of high-altitude living to trigger a biological reset, paired with the warmth of hyper-minimalist design.",  
    metrics: [  
      { label: "Biometric Reset", value: "Accelerated" },  
      { label: "Oxygen Saturation", value: "Regulated" },  
      { label: "REM Cycle Extension", value: "+14%" }  
    ],  
    standard: "Hyperbaric recovery suites, private ski-in/out access, and oxygen-enriched living quarters."  
  },  
  safari: {  
    name: "The Safari",  
    tagline: "The Primal Reset",  
    location: "Sub-Saharan Reserves",  
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "Reconnect with the rhythm of the earth. The Safari isn't about watching nature; it's about re-entering it, stripped of artificial noise and returned to primal awareness.",  
    metrics: [  
      { label: "Circadian Alignment", value: "Synchronized" },  
      { label: "Sensory Re-engagement", value: "Peak" },  
      { label: "Stress Marker Decline", value: "29%" }  
    ],  
    standard: "Zero-impact architecture, private naturalist guide, and open-air biometric monitoring."  
  },  
  oasis: {  
    name: "The Oasis",  
    tagline: "The Silence of Sands",  
    location: "Empty Quarter / Desert",  
    heroImage: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "There is a specific kind of wisdom found in the desert. The Oasis is a study in stillness, where the vastness of the horizon serves as a mirror for the mind.",  
    metrics: [  
      { label: "Auditory Silence", value: "99.9%" },  
      { label: "Vitamin D Optimization", value: "High" },  
      { label: "Neural Pathway Rest", value: "Maximum" }  
    ],  
    standard: "Solar-passive cooling, thermal therapy pools, and celestial navigation decks."  
  },  
  stadium: {  
    name: "The Stadium",  
    tagline: "The Arena of Recovery",  
    location: "Proprietary Athletic Hubs",  
    heroImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "For the high-performer, rest is a weapon. The Stadium is a data-driven sanctuary focused on physical optimization and the science of the 'Super-Recovery' cycle.",  
    metrics: [  
      { label: "Lactic Acid Flush", value: "2x Speed" },  
      { label: "VO2 Max Maintenance", value: "Stable" },  
      { label: "Inflammation Index", value: "-40%" }  
    ],  
    standard: "Cryotherapy chambers, anti-gravity treadmills, and personalized nutrition labs."  
  },  
  cinematic: {  
    name: "The Cinematic",  
    tagline: "Life Curated as Art",  
    location: "Visual Landmarks",  
    heroImage: "https://images.unsplash.com/photo-1493246507139-91e8bef99c1e?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "Aesthetics as therapy. The Cinematic is designed around the 'Golden Hour' principle, where every view, light fixture, and material is curated to evoke a state of visual awe.",  
    metrics: [  
      { label: "Dopamine Regularization", value: "Measured" },  
      { label: "Alpha Wave Increase", value: "+12%" },  
      { label: "Visual Clarity", value: "High" }  
    ],  
    standard: "Leica-curated views, private screening room, and architectural lighting choreography."  
  },  
  island: {  
    name: "The Island",  
    tagline: "A Kingdom of One",  
    location: "Private Archipelagos",  
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",  
    philosophy: "The ultimate expression of detachment. The Island is a sovereign micro-nation of one, where the horizon is the only boundary and privacy is total.",  
    metrics: [  
      { label: "Cortisol Suppression", value: "48%" },  
      { label: "Social Noise", value: "0%" },  
      { label: "Parasympathetic Activation", value: "Peak" }  
    ],  
    standard: "Private air-strip, desalinization autonomy, and biometric perimeter security."  
  }  
}

export default function SanctuaryDetailPage() {  
  const params = useParams()  
  const slug = params.slug as string  
  const data = SANCTUARY_DATA[slug]

  if (!data) return notFound()

  return (  
    <main className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] font-sans selection:bg-[#D4AF37] selection:text-white">  
      <Navigation />

      {/* HERO - Standardized Height & Layout */}  
      <section className="relative h-[90vh] w-full overflow-hidden">  
        <Image   
          src={data.heroImage}  
          alt={data.name}  
          fill  
          priority  
          className="object-cover"  
        />  
        <div className="absolute inset-0 bg-black/30" />  
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">  
          <span className="uppercase tracking-[0.4em] text-[10px] mb-6 opacity-80 border-b border-white/30 pb-2">  
            {data.location}  
          </span>  
          <h1 className="text-6xl md:text-9xl font-serif tracking-tighter text-center max-w-5xl leading-tight">  
            {data.name}  
          </h1>  
          <p className="mt-8 text-xl italic font-serif opacity-90">  
            {data.tagline}  
          </p>  
        </div>  
      </section>

      {/* CONSISTENT CONTENT GRID */}  
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">  
          
        {/* LEFT COLUMN: Narrative */}  
        <div className="lg:col-span-7 space-y-12">  
          <div className="space-y-4">  
            <h2 className="uppercase tracking-[0.4em] text-[10px] text-[#D4AF37] font-bold">  
              The Philosophy  
            </h2>  
            <p className="text-4xl md:text-5xl font-serif leading-[1.1] text-[#111]">  
              {data.philosophy}  
            </p>  
          </div>

          <div className="pt-12 border-t border-gray-100">  
            <h3 className="uppercase tracking-[0.3em] text-[10px] mb-6 font-bold text-gray-400">  
              NexVoyage Operational Standard  
            </h3>  
            <p className="text-xl text-gray-600 leading-relaxed font-serif italic max-w-2xl">  
              "{data.standard}"  
            </p>  
          </div>  
        </div>

        {/* RIGHT COLUMN: The Yield (Consistently styled across all slugs) */}  
        <div className="lg:col-span-5 bg-white border border-gray-100 p-12 shadow-sm sticky top-32">  
          <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-6">  
            <h2 className="uppercase tracking-[0.4em] text-[10px] text-black font-bold">  
              The Yield  
            </h2>  
            <span className="text-[9px] uppercase tracking-widest text-gray-300">Ref: NV-VET-{slug.toUpperCase()}</span>  
          </div>  
            
          <div className="space-y-10">  
            {data.metrics.map((metric: any, index: number) => (  
              <div key={index} className="group">  
                <div className="flex justify-between items-end mb-2">  
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium group-hover:text-[#D4AF37] transition-colors">  
                    {metric.label}  
                  </p>  
                  <p className="text-4xl font-serif text-[#111]">{metric.value}</p>  
                </div>  
                <div className="w-full h-[1px] bg-gray-50 group-hover:bg-[#D4AF37]/20 transition-colors" />  
              </div>  
            ))}  
          </div>

          <div className="mt-16 space-y-4">  
            <Link   
              href="/reserve"  
              className="block w-full bg-[#111] text-white py-6 text-center uppercase tracking-[0.4em] text-[10px] hover:bg-[#D4AF37] transition-all duration-700"  
            >  
              Secure This Sanctuary  
            </Link>  
            <p className="text-[9px] text-center text-gray-400 uppercase tracking-widest">  
              Subject to availability and security vetting.  
            </p>  
          </div>  
        </div>  
      </section>

      <Footer />  
    </main>  
  )  
}  
