"use client";

import React from "react";  
import { useParams } from "next/navigation";

const SANCTUARY_DATA: Record<string, any> = {  
  "kyoto-forest": {  
    name: "The Forest Floor Pavilion",  
    loc: "Kyoto, Japan",  
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",  
    philosophy: "Silence is the ultimate investment. Trade digital noise for the rhythm of the bamboo forest.",  
    roi: "94% Sensory Recovery"  
  },  
  "maldives-obsidian": {  
    name: "Over-Water Obsidian",  
    loc: "Noonu Atoll, Maldives",  
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",  
    philosophy: "Absolute isolation atop a volcanic shelf. Where the horizon is the only boundary.",  
    roi: "100% Privacy Saturation"  
  }  
};

export default function SanctuaryProfile() {  
  const params = useParams();  
  const slug = params.slug as string;  
  const data = SANCTUARY_DATA[slug] || SANCTUARY_DATA["kyoto-forest"];

  return (  
    <main className="bg-black text-white min-h-screen selection:bg-white/20">  
      <section className="relative h-screen flex flex-col justify-end p-6 md:p-12 overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <img   
            src={`${data.img}?auto=format&fit=crop&q=80&w=2400`}   
            className="w-full h-full object-cover grayscale opacity-50 transition-all duration-3000"  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />  
        </div>

        <div className="relative z-10 container mx-auto">  
          {/* Changed 'Dossier' to 'Profile' */}  
          <p className="font-sans text-[10px] uppercase tracking-[0.8em] text-neutral-400 mb-6">Private Profile // {slug}</p>  
          <h1 className="font-serif text-6xl md:text-9xl mb-12 leading-none">{data.name}</h1>  
          <div className="grid md:grid-cols-3 gap-12 border-t border-white/20 pt-12 items-start">  
            <div>  
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-2">Location</p>  
              <p className="font-serif text-2xl italic">{data.loc}</p>  
            </div>  
            <div>  
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-neutral-500 mb-2">ROI Metric</p>  
              <p className="font-serif text-2xl italic">{data.roi}</p>  
            </div>  
            <div className="text-right">  
              <button className="bg-white text-black px-12 py-5 font-sans text-[10px] uppercase tracking-[0.6em] hover:bg-neutral-200 transition-all">  
                Request Access  
              </button>  
            </div>  
          </div>  
        </div>  
      </section>

      <section className="py-40 bg-neutral-950">  
        <div className="container mx-auto px-6 max-w-4xl">  
          <div className="grid md:grid-cols-12 gap-16">  
            <div className="md:col-span-4">  
              <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-neutral-500 leading-loose">  
                Vetted for the NexVoyage Standard. A deep dive into the architecture of your next reset.  
              </p>  
            </div>  
            <div className="md:col-span-8">  
              <h2 className="font-serif text-4xl md:text-5xl mb-12 leading-relaxed">  
                {data.philosophy}  
              </h2>  
              <div className="h-[1px] w-24 bg-white/20 mb-12" />  
              <p className="font-sans text-neutral-400 leading-relaxed uppercase text-[12px] tracking-[0.2em]">  
                {/* Relatable body copy */}  
                Exploring {data.name} is the first step toward reclaiming clarity. We invite you to look closer at the details of this sanctuary and imagine the impact of absolute stillness.  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>  
    </main>  
  );  
}  
