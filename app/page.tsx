import React from 'react';  
import Link from 'next/link';

const Sanctuaries = [  
  { title: "Metropolitan", desc: "Urban high-culture and refined city access." },  
  { title: "Floating", desc: "Elite yachting and polar expeditions." },  
  { title: "Island", desc: "Private seclusion in the world's most remote waters." },  
  { title: "Alpine", desc: "High-altitude retreats and ski-in/out excellence." },  
  { title: "Stadium", desc: "VIP sports access and stadium-side sanctuaries." },  
  { title: "Cinematic", desc: "The global film festival circuit, curated." },  
  { title: "Soulful", desc: "Music, tour hospitality, and soulful resets." },  
  { title: "Education", desc: "Intellectual summits and high-impact industry events." },  
  { title: "Mobile", desc: "Heli-access and nomadic off-grid luxury." },  
];

export default function HomePage() {  
  return (  
    <main className="min-h-screen bg-[#F5F5F0] text-[#2D2D2D] selection:bg-[#E0E0D6]">  
      {/* Hero Section */}  
      <section className="px-6 pt-32 pb-20 max-w-6xl mx-auto text-center">  
        <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">  
          NexVoyage Collective  
        </h1>  
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-[#555555]">  
          Travel for those who expect more from every journey.   
          Quiet luxury. Uncompromising security. Total discretion.  
        </p>  
      </section>

      {/* The 9 Sanctuaries Grid */}  
      <section className="px-6 py-20 max-w-6xl mx-auto">  
        <h2 className="text-sm uppercase tracking-[0.3em] text-[#888888] mb-12 text-center">  
          The Nine Sanctuaries  
        </h2>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
          {Sanctuaries.map((s, i) => (  
            <div key={i} className="group cursor-default">  
              <div className="border-t border-[#D1D1CB] pt-6 transition-colors group-hover:border-[#2D2D2D]">  
                <h3 className="text-2xl font-serif mb-3">{s.title}</h3>  
                <p className="text-[#666666] leading-relaxed">{s.desc}</p>  
              </div>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* ROI of Rest Lead Magnet */}  
      <section className="bg-[#EDEDE4] py-24 px-6 text-center">  
        <div className="max-w-3xl mx-auto">  
          <h2 className="text-3xl md:text-4xl font-serif mb-6">The ROI of Rest</h2>  
          <p className="text-lg text-[#555555] mb-10 leading-relaxed">  
            The true return on a journey isn't found in the itinerary, but in the clarity you bring home.   
            Download our guide to the highest-impact resets in the collective.  
          </p>  
          <button className="bg-[#2D2D2D] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#444444] transition-colors">  
            Get the Guide  
          </button>  
        </div>  
      </section>

      {/* Footer */}  
      <footer className="px-6 py-12 max-w-6xl mx-auto border-t border-[#D1D1CB]">  
        <div className="flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-[#888888]">  
          <div className="mb-6 md:mb-0">  
            © 2026 NexVoyage Collective  
          </div>  
          <div className="flex space-x-8">  
            <Link href="/privacy" className="hover:text-[#2D2D2D]">Privacy</Link>  
            <Link href="/terms" className="hover:text-[#2D2D2D]">Terms</Link>  
            <Link href="/safety" className="hover:text-[#2D2D2D]">Safety</Link>  
          </div>  
        </div>  
      </footer>  
    </main>  
  );  
}  
