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
  tagline: "Hidden in the City's Pulse",  
  location: "London / Tokyo / New York",  
  heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2000",  
  description: "A masterclass in urban discretion. We provide a sanctuary situated in the heart of the world's most vibrant capitals, offering private elevator access, 360-degree skyline views, and a dedicated concierge team that handles the impossible.",  
  travelAssets: [  
    { label: "Privacy Level", value: "Fortress-Grade" },  
    { label: "Access", value: "Priority VIP" },  
    { label: "Ambience", value: "Absolute Silence" }  
  ],  
  standard: "Discreet subterranean entry, 24/7 personal specialist, and priority booking at the city's most exclusive tables."  
},  
nautical: {  
  name: "The Nautical",  
  tagline: "The Sovereign Horizon",  
  location: "International Waters",  
  heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=2000",  
  description: "Total freedom on the open sea. Our nautical sanctuaries are fully-crewed floating estates that move with the sun, offering private diving expeditions, world-class onboard chefs, and the luxury of an ever-changing horizon.",  
  travelAssets: [  
    { label: "Vessel Type", value: "Superyacht" },  
    { label: "Staff Ratio", value: "3:1 Guest" },  
    { label: "Latitude", value: "Global" }  
  ],  
  standard: "Stabilized hull for total comfort, private dive-master, and a dedicated tender for coastal exploration."  
},  
fortress: {  
  name: "The Fortress",  
  tagline: "Seclusion as a Statement",  
  location: "Utah Desert / Highlands",  
  heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",  
  description: "Architecture carved into the earth. The Fortress is for travelers who seek a complete break from the noise of the modern world. It is a masterpiece of design that blends into the landscape while offering every modern luxury.",  
  travelAssets: [  
    { label: "Seclusion", value: "Total" },  
    { label: "Landscape", value: "High-Desert" },  
    { label: "Security", value: "Tier 1" }  
  ],  
  standard: "Off-grid luxury, private helicopter landing zone, and bespoke guided wilderness expeditions."  
},  
alpine: {  
  name: "The Alpine",  
  tagline: "The High-Altitude Retreat",  
  location: "Swiss Alps / Dolomites",  
  heroImage: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=2000",  
  description: "Where the peaks meet the clouds. Our Alpine sanctuaries offer ski-in/ski-out access to the world's most exclusive slopes, paired with Michelin-starred dining and hyper-minimalist chalet design.",  
  travelAssets: [  
    { label: "Elevation", value: "2,500m+" },  
    { label: "Seasonality", value: "Year-Round" },  
    { label: "Vibe", value: "Chalet Chic" }  
  ],  
  standard: "Private ski guides, in-house spa therapists, and a curated vintage wine cellar."  
},  
safari: {  
  name: "The Safari",  
  tagline: "Wilderness Reimagined",  
  location: "The Serengeti",  
  heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000",  
  description: "An immersive re-entry into the wild. We offer the world's most sophisticated tented camps, where the line between five-star luxury and the African savannah disappears.",  
  travelAssets: [  
    { label: "Wildlife Access", value: "Front-Row" },  
    { label: "Experience", value: "Primal" },  
    { label: "Impact", value: "Zero-Trace" }  
  ],  
  standard: "Private naturalist guides, open-air biometric dining, and exclusive bush-plane transfers."  
},  
oasis: {  
  name: "The Oasis",  
  tagline: "The Wisdom of Silence",  
  location: "Empty Quarter / Desert",  
  heroImage: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=2000",  
  description: "A sanctuary found in the dunes. The Oasis focuses on the restorative power of the desert, featuring thermal therapy pools, starlit dining, and architecture that echoes the curves of the sand.",  
  travelAssets: [  
    { label: "Silence", value: "Absolute" },  
    { label: "Spa Tier", value: "World-Class" },  
    { label: "Climate", value: "Arid-Chic" }  
  ],  
  standard: "Private thermal pools, celestial navigation workshops, and camel-back desert crossing."  
},  
stadium: {  
  name: "The Stadium",  
  tagline: "The High-Performance Stay",  
  location: "Proprietary Athletic Hubs",  
  heroImage: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000",  
  description: "Travel for the athlete. Whether you are training for a peak or recovering from a season, The Stadium provides world-class athletic facilities paired with the comfort of a luxury estate.",  
  travelAssets: [  
    { label: "Recovery", value: "Elite" },  
    { label: "Tech", value: "Advanced" },  
    { label: "Nutrition", value: "Private Chef" }  
  ],  
  standard: "Full-scale athletic grounds, cryotherapy suites, and a dedicated performance concierge."  
},  
cinematic: {  
  name: "The Cinematic",  
  tagline: "A Living Frame",  
  location: "Kyoto / Paris / Amalfi",  
  heroImage: "https://images.unsplash.com/photo-1493246507139-91e8bef99c1e?auto=format&fit=crop&q=80&w=2000",  
  description: "Aesthetic as a destination. These sanctuaries are chosen for their visual power, where every window frames a masterpiece and every room is a study in curated design and light.",  
  travelAssets: [  
    { label: "Visuals", value: "Curated" },  
    { label: "Art Tier", value: "Museum" },  
    { label: "Vibe", value: "Aspirational" }  
  ],  
  standard: "Architectural lighting, private art tours, and a custom Leica photography kit on arrival."  
},  
island: {  
  name: "The Island",  
  tagline: "Your Own Private World",  
  location: "Private Archipelagos",  
  heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",  
  description: "The ultimate in detachment. Our private island sanctuaries offer total sovereignty, with miles of pristine beach, clear turquoise water, and zero connection to the outside world unless you request it.",  
  travelAssets: [  
    { label: "Privacy", value: "100%" },  
    { label: "Beach", value: "Private" },  
    { label: "Transit", value: "Seaplane" }  
  ],  
  standard: "Private air-strip, personal butler, and a dedicated boat for island hopping."  
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

    {/* HERO - Pure Travel Vibe */}  
    <section className="relative h-[85vh] w-full overflow-hidden">  
      <Image   
        src={data.heroImage}  
        alt={data.name}  
        fill  
        priority  
        className="object-cover"  
      />  
      <div className="absolute inset-0 bg-black/20" />  
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">  
        <span className="uppercase tracking-[0.4em] text-[10px] mb-6 opacity-90">  
          {data.location}  
        </span>  
        <h1 className="text-6xl md:text-9xl font-serif tracking-tighter text-center max-w-5xl">  
          {data.name}  
        </h1>  
        <p className="mt-8 text-xl italic font-serif opacity-90 border-t border-white/20 pt-4">  
          {data.tagline}  
        </p>  
      </div>  
    </section>

    {/* CONTENT SECTION */}  
    <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-20">  
        
      {/* NARRATIVE */}  
      <div className="lg:col-span-7">  
        <h2 className="uppercase tracking-[0.4em] text-[10px] text-[#D4AF37] mb-10 font-bold">  
          The Experience  
        </h2>  
        <p className="text-3xl md:text-4xl font-serif leading-snug text-[#333] mb-12">  
          {data.description}  
        </p>  
          
        <div className="pt-12 border-t border-gray-100">  
          <h3 className="uppercase tracking-[0.3em] text-[10px] mb-6 font-bold text-gray-400">  
            NexVoyage Standard  
          </h3>  
          <p className="text-xl text-gray-600 leading-relaxed font-serif italic italic max-w-2xl">  
            "{data.standard}"  
          </p>  
        </div>  
      </div>

      {/* TRAVEL ASSETS (The refined ROI) */}  
      <div className="lg:col-span-5">  
        <div className="bg-white border border-gray-100 p-12 shadow-sm sticky top-32">  
          <h2 className="uppercase tracking-[0.4em] text-[10px] text-black mb-12 font-bold border-b border-gray-50 pb-6">  
            Sanctuary Assets  
          </h2>  
          <div className="space-y-10">  
            {data.travelAssets.map((asset: any, index: number) => (  
              <div key={index} className="flex justify-between items-end border-b border-gray-50 pb-4 group">  
                <div>  
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 group-hover:text-[#D4AF37] transition-colors">Asset Class</p>  
                  <p className="text-sm font-medium tracking-wide">{asset.label}</p>  
                </div>  
                <div className="text-right">  
                  <p className="text-3xl font-serif text-[#111]">{asset.value}</p>  
                </div>  
              </div>  
            ))}  
          </div>

          <div className="mt-16">  
            <Link   
              href="/reserve"  
              className="block w-full bg-black text-white py-6 text-center uppercase tracking-[0.4em] text-[10px] hover:bg-[#D4AF37] transition-all duration-500"  
            >  
              Inquire for Access  
            </Link>  
          </div>  
        </div>  
      </div>  
    </section>

    <Footer />  
  </main>  
)  
}  
