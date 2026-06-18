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
    <main className="min-h-screen bg-[#0A0A0A] text-[#D4AF37] selection:bg-[#D4AF37] selection:text-[#0A0A0A]">  
      {/* THE NUCLEAR FIX 3.0 - Stripping all external UI styles */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        * {   
          box-shadow: none !important;   
          background-image: none !important;  
          border-color: rgba(212, 175, 55, 0.15) !important;  
        }  
        body, main, section, div, header, footer {   
          background-color: #0A0A0A !important;   
        }  
        .white-ghost-killer {  
          background: transparent !important;  
          box-shadow: none !important;  
          border: none !important;  
        }  
        @keyframes fadeIn {  
          from { opacity: 0; transform: translateY(20px); }  
          to { opacity: 1; transform: translateY(0); }  
        }  
        .animate-hero {  
          animation: fadeIn 1.2s ease-out forwards;  
        }  
        img { filter: grayscale(100%); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }  
        img:hover { filter: grayscale(0%); transform: scale(1.02); }  
        .hero-img { filter: grayscale(0%) !important; }  
      `}} />

      {/* Hero Section */}  
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-[#D4AF37]/10">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="/chable-villa.jpg"   
            alt="Chablé Resort"   
            className="hero-img w-full h-full object-cover opacity-30"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]" />  
        </div>  
          
        <div className="relative z-10 text-center px-4 animate-hero">  
          <h1 className="text-8xl md:text-[13rem] font-serif tracking-tighter leading-none mb-6">  
            THE ROI OF RESET  
          </h1>  
          <p className="text-2xl md:text-4xl font-light tracking-[0.5em] uppercase text-[#D4AF37]/60">  
            NexVoyage Collective  
          </p>  
        </div>  
      </section>

      {/* Strategic Alliances */}  
      <section className="py-40 px-6 max-w-7xl mx-auto">  
        <h2 className="text-7xl md:text-9xl font-serif mb-20 border-l-8 border-[#D4AF37] pl-10">  
          STRATEGIC ALLIANCES  
        </h2>  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-[#D4AF37]/10 border border-[#D4AF37]/10">  
          {alliances.map((partner, i) => (  
            <div key={i} className="p-10 bg-[#0A0A0A] flex flex-col justify-between aspect-video hover:bg-[#D4AF37]/5 transition-colors group">  
              <span className="text-xs font-mono text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-colors">{partner.id}</span>  
              <div>  
                <p className="text-3xl font-serif mb-1">{partner.name}</p>  
                <p className="text-[11px] tracking-[0.3em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">{partner.type}</p>  
              </div>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Jet Cabin Visual */}  
      <section className="h-[80vh] w-full px-6 mb-32">  
        <div className="w-full h-full overflow-hidden rounded-sm border border-[#D4AF37]/10">  
          <img   
            src="/jyV_xaai_p4.webp"   
            alt="Private Jet Interior"   
            className="hero-img w-full h-full object-cover"  
          />  
        </div>  
      </section>

      {/* Guardian Layer */}  
      <section className="py-40 px-6 border-y border-[#D4AF37]/5">  
        <div className="max-w-7xl mx-auto">  
          <h2 className="text-7xl md:text-9xl font-serif mb-24 text-right">  
            GUARDIAN LAYER  
          </h2>  
          <div className="grid md:grid-cols-3 gap-16">  
            <div className="space-y-8 p-4">  
              <Shield className="w-16 h-16 stroke-[0.5px] opacity-80" />  
              <h3 className="text-5xl font-serif italic">Invisible Advocacy</h3>  
              <p className="text-2xl text-[#D4AF37]/60 leading-relaxed font-light">  
                Operating behind the curtain of global hospitality, we navigate the institutional layers to secure preferential status before you arrive.  
              </p>  
            </div>  
            <div className="space-y-8 p-4">  
              <Target className="w-16 h-16 stroke-[0.5px] opacity-80" />  
              <h3 className="text-5xl font-serif italic">Status Leverage</h3>  
              <p className="text-2xl text-[#D4AF37]/60 leading-relaxed font-light">  
                Our position within the Fora and Virtuoso networks converts collective influence into individual priority for our travelers.  
              </p>  
            </div>  
            <div className="space-y-8 p-4">  
              <Zap className="w-16 h-16 stroke-[0.5px] opacity-80" />  
              <h3 className="text-5xl font-serif italic">Tactical Oversight</h3>  
              <p className="text-2xl text-[#D4AF37]/60 leading-relaxed font-light">  
                24/7 monitoring of the luxury logistics chain, ensuring that every transition—from tarmac to suite—is handled with zero friction.  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Property Gallery */}  
      <section className="py-40 px-6 max-w-7xl mx-auto">  
        <div className="columns-1 md:columns-2 gap-8 space-y-8">  
          {properties.map((prop, i) => (  
            <div key={i} className="relative group overflow-hidden border border-[#D4AF37]/10 bg-[#0A0A0A]">  
              <img src={prop.img} alt={prop.title} className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000" />  
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />  
              <div className="absolute bottom-0 left-0 right-0 p-10">  
                <p className="text-4xl font-serif italic mb-2">{prop.title}</p>  
                <p className="text-xs tracking-[0.4em] uppercase opacity-50">{prop.loc}</p>  
              </div>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Footer */}  
      <footer className="py-24 border-t border-[#D4AF37]/10 text-center bg-[#0A0A0A]">  
        <p className="text-[10px] tracking-[1.5em] uppercase opacity-30">  
          NexVoyage Collective &copy; 2026 | Private Access Only  
        </p>  
      </footer>  
    </main>  
  )  
}  
