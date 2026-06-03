"use client"

import React from 'react'  
import Image from 'next/image'  
import Link from 'next/link'  
import { useParams, notFound } from 'next/navigation'  
import Navigation from '../../Navigation'  
import Footer from '../../Footer'

// DATA OBJECT FOR ALL NINE SANCTUARIES  
const SANCTUARY_DATA: Record<string, any> = {  
  metropolitan: {  
    name: "The Metropolitan",  
    tagline: "Hidden in Plain Sight",  
    location: "London / Tokyo / New York",  
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
    tagline: "Liquid Freedom",  
    location: "Cyclades / Amalfi / Amalfi Coast",  
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
    tagline: "The Ultimate Redoubt",  
    location: "Utah Desert / Scottish Highlands",  
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
    location: "Swiss Alps / Dolomites",  
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
    tagline: "Primal Sophistication",  
    location: "Serengeti / Okavango Delta",  
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
    location: "Empty Quarter / Gobi Desert",  
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
    location: "Bespoke Athletic Compounds",  
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
    tagline: "Life as a Frame",  
    location: "Kyoto / Paris / Los Angeles",  
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
    tagline: "Sovereign Solitude",  
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
  const data = SANCTUARIES_DATA[slug]

  if (!data) return notFound()

  return (  
    <main className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] font-sans selection:bg-[#D4AF37] selection:text-white">  
      <Navigation />

      {/* HERO SECTION */}  
      <section className="relative h-[85vh] w-full overflow-hidden">  
        <Image   
          src={data.heroImage}  
          alt={data.name}  
          fill  
          priority  
          className="object-cover transition-transform duration-1000 hover:scale-105"  
        />  
        <div className="absolute inset-0 bg-black/20" />  
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">  
          <span className="uppercase tracking-[0.4em] text-xs mb-4 animate-fade-in opacity-90">  
            {data.location}  
          </span>  
          <h1 className="text-5xl md:text-8xl font-serif tracking-tight text-center max-w-4xl">  
            {data.name}  
          </h1>  
          <p className="mt-6 text-lg italic opacity-80 font-serif">  
            {data.tagline}  
          </p>  
        </div>  
      </section>

      {/* PHILOSOPHY & METRICS */}  
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">  
          
        {/* PHILOSOPHY (The Narrative) */}  
        <div className="lg:col-span-7">  
          <h2 className="uppercase tracking-[0.3em] text-[10px] text-[#D4AF37] mb-8 font-bold">  
            The Philosophy  
          </h2>  
          <p className="text-3xl md:text-4xl font-serif leading-snug text-[#333]">  
            {data.philosophy}  
          </p>  
          <div className="mt-12 p-8 border-l border-[#D4AF37]/30 bg-gray-50/50">  
            <h3 className="uppercase tracking-[0.2em] text-[10px] mb-4 font-bold text-gray-500">  
              The NexVoyage Standard  
            </h3>  
            <p className="text-lg text-gray-700 leading-relaxed italic">  
              "{data.standard}"  
            </p>  
          </div>  
        </div>

        {/* THE YIELD (Clinical Metrics) */}  
        <div className="lg:col-span-5 bg-white border border-gray-100 p-10 shadow-sm">  
          <h2 className="uppercase tracking-[0.3em] text-[10px] text-black mb-10 font-bold border-b border-gray-100 pb-4">  
            The Yield <span className="text-gray-400 font-normal">/ Clinical ROI</span>  
          </h2>  
          <div className="space-y-12">  
            {data.metrics.map((metric: any, index: number) => (  
              <div key={index} className="flex justify-between items-end border-b border-gray-50 pb-4">  
                <div>  
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Target Metric</p>  
                  <p className="text-sm font-medium tracking-wide">{metric.label}</p>  
                </div>  
                <div className="text-right">  
                  <p className="text-3xl font-serif text-[#D4AF37]">{metric.value}</p>  
                </div>  
              </div>  
            ))}  
          </div>  
          <div className="mt-12">  
            <Link   
              href="/reserve"  
              className="block w-full bg-black text-white py-5 text-center uppercase tracking-[0.3em] text-[10px] hover:bg-[#D4AF37] transition-colors duration-500"  
            >  
              Request Access  
            </Link>  
          </div>  
        </div>  
      </section>

      {/* FOOTER */}  
      <Footer />

      <style jsx global>{`  
        @keyframes fade-in {  
          from { opacity: 0; transform: translateY(10px); }  
          to { opacity: 1; transform: translateY(0); }  
        }  
        .animate-fade-in {  
          animation: fade-in 1.2s ease-out forwards;  
        }  
      `}</style>  
    </main>  
  )  
}  
