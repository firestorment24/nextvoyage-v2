'use client'

import { Shield, Target, Zap } from "lucide-react"  
import Link from "next/link"

export default function HomePage() {  
const alliances = [  
  { name: "Fora Travel", type: "Anchor", id: "NV-001" },  
  { name: "Virtuoso", type: "Network", id: "NV-002" },  
  { name: "Aman", type: "Direct", id: "NV-003" },  
  { name: "Four Seasons", type: "Partner", id: "NV-004" },  
  { name: "Belmond", type: "Member", id: "NV-005" },  
  { name: "Rosewood", type: "Elite", id: "NV-006" },  
  { name: "Mandarin Oriental", type: "Fan Club", id: "NV-007" },  
  { name: "Peninsula", type: "PenClub", id: "NV-008" },  
  { name: "Dorchester", type: "Diamond", id: "NV-009" },  
  { name: "Oetker", type: "Pearl", id: "NV-010" },  
  { name: "Auberge", type: "Ensemble", id: "NV-011" },  
  { name: "Hyatt Privé", type: "Status", id: "NV-012" },  
]

const properties = [  
  { title: "Amangiri", loc: "Utah, USA", img: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&q=80" },  
  { title: "Soneva Jani", loc: "Maldives", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80" },  
  { title: "Hôtel de Crillon", loc: "Paris, France", img: "https://images.unsplash.com/photo-1551882547-ff43c63efe81?auto=format&fit=crop&q=80" },  
]

return (  
  <main className="min-h-screen bg-[#0A0A0A] text-[#D4AF37] selection:bg-[#D4AF37] selection:text-[#0A0A0A] font-sans">  
    {/* FINAL NUCLEAR FIX - Pure CSS, No JS Dependencies */}  
    <style dangerouslySetInnerHTML={{ __html: `  
      * { box-shadow: none !important; background-image: none !important; }  
      body, main, section, div, header, footer { background-color: #0A0A0A !important; }  
      h1, h2, h3, p, span { background: transparent !important; }  
      .hero-title { font-size: clamp(3rem, 10vw, 7rem); }  
      @keyframes softFade { from { opacity: 0; } to { opacity: 1; } }  
      .fade-in { animation: softFade 1.5s ease-in-out forwards; }  
      img { filter: grayscale(100%); transition: filter 0.6s ease; }  
      img:hover { filter: grayscale(0%); }  
      .no-gray { filter: grayscale(0%) !important; }  
    `}} />

    {/* Hero Section - Featuring Chablé Resort */}  
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">  
      <div className="absolute inset-0 z-0">  
        <img   
          src="/chable-villa.jpg"   
          alt="Chablé Resort"   
          className="no-gray w-full h-full object-cover opacity-60"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />  
      </div>  
        
      <div className="relative z-10 text-center px-6 fade-in">  
        <h1 className="hero-title font-serif tracking-tighter leading-none mb-4 uppercase">  
          THE ROI OF RESET  
        </h1>  
        <p className="text-lg md:text-xl font-light tracking-[0.4em] uppercase opacity-70">  
          NexVoyage Collective  
        </p>  
      </div>  
    </section>

    {/* Alliances Manifest */}  
    <section className="py-24 px-6 max-w-7xl mx-auto">  
      <h2 className="text-4xl md:text-5xl font-serif mb-12 tracking-tight">  
        STRATEGIC ALLIANCES  
      </h2>  
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#D4AF37]/20">  
        {alliances.map((partner, i) => (  
          <div key={i} className="p-8 border-r border-b border-[#D4AF37]/20 aspect-[16/10] flex flex-col justify-between hover:bg-[#D4AF37]/5 transition-colors">  
            <span className="text-[10px] font-mono opacity-30">{partner.id}</span>  
            <div>  
              <p className="text-xl font-serif">{partner.name}</p>  
              <p className="text-[10px] tracking-widest uppercase opacity-40">{partner.type}</p>  
            </div>  
          </div>  
        ))}  
      </div>  
    </section>

    {/* Jet Cabin Visual */}  
    <section className="w-full px-6 mb-24">  
      <div className="h-[60vh] w-full overflow-hidden border border-[#D4AF37]/10">  
        <img   
          src="/jyV_xaai_p4.webp"   
          alt="Private Jet Interior"   
          className="no-gray w-full h-full object-cover"  
        />  
      </div>  
    </section>

    {/* Guardian Layer */}  
    <section className="py-24 px-6 bg-[#0A0A0A] border-t border-[#D4AF37]/10">  
      <div className="max-w-7xl mx-auto">  
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">  
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight">  
            GUARDIAN LAYER  
          </h2>  
          <p className="text-sm tracking-widest uppercase opacity-40">Advocacy / Oversight / Leverage</p>  
        </div>  
          
        <div className="grid md:grid-cols-3 gap-12">  
          <div className="space-y-4">  
            <h3 className="text-2xl font-serif italic border-b border-[#D4AF37]/20 pb-4">Invisible Advocacy</h3>  
            <p className="text-lg text-[#D4AF37]/70 leading-relaxed font-light">  
              We operate behind the curtain of global hospitality, navigating institutional layers to secure status before you arrive.  
            </p>  
          </div>  
          <div className="space-y-4">  
            <h3 className="text-2xl font-serif italic border-b border-[#D4AF37]/20 pb-4">Status Leverage</h3>  
            <p className="text-lg text-[#D4AF37]/70 leading-relaxed font-light">  
              Our position within elite networks converts collective influence into individual priority for every traveler.  
            </p>  
          </div>  
          <div className="space-y-4">  
            <h3 className="text-2xl font-serif italic border-b border-[#D4AF37]/20 pb-4">Tactical Oversight</h3>  
            <p className="text-lg text-[#D4AF37]/70 leading-relaxed font-light">  
              Constant monitoring of the logistics chain, ensuring transitions are handled with zero friction.  
            </p>  
          </div>  
        </div>  
      </div>  
    </section>

    {/* Property Gallery */}  
    <section className="py-24 px-6 max-w-7xl mx-auto">  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">  
        {properties.map((prop, i) => (  
          <div key={i} className="group relative aspect-[4/5] overflow-hidden border border-[#D4AF37]/10">  
            <img src={prop.img} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />  
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />  
            <div className="absolute bottom-0 left-0 p-8">  
              <p className="text-2xl font-serif italic">{prop.title}</p>  
              <p className="text-[10px] tracking-widest uppercase opacity-50">{prop.loc}</p>  
            </div>  
          </div>  
        ))}  
      </div>  
    </section>

    <footer className="py-16 text-center border-t border-[#D4AF37]/5">  
      <p className="text-[9px] tracking-[1.2em] uppercase opacity-30">  
        NexVoyage Collective &copy; 2026 | UHNW Advocacy  
      </p>  
    </footer>  
  </main>  
)  
}  
