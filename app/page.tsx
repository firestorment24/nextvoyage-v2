'use client'

import { Card, CardContent } from "@/components/ui/card"  
import { motion } from "framer-motion"  
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
      {/* NUCLEAR FIX 2.0 - Forced CSS Injection */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        * {   
          box-shadow: none !important;   
          background-image: none !important;  
        }  
        body, main, section, div, header, footer, .card, .card-content {   
          background-color: #0A0A0A !important;   
          border-color: rgba(212, 175, 55, 0.1) !important;  
        }  
        img { filter: grayscale(100%); transition: filter 0.5s ease; }  
        img:hover { filter: grayscale(0%); }  
        .hero-img { filter: grayscale(0%) !important; }  
      `}} />

      {/* Hero Section */}  
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-[#D4AF37]/10">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="/chable-villa.jpg"   
            alt="Chablé Resort"   
            className="hero-img w-full h-full object-cover opacity-40"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/60 to-[#0A0A0A]" />  
        </div>  
          
        <div className="relative z-10 text-center px-4">  
          <motion.h1   
            initial={{ opacity: 0, y: 20 }}  
            animate={{ opacity: 1, y: 0 }}  
            className="text-8xl md:text-[12rem] font-serif tracking-tighter leading-none mb-6"  
          >  
            THE ROI OF RESET  
          </motion.h1>  
          <p className="text-2xl md:text-4xl font-light tracking-[0.5em] uppercase text-[#D4AF37]/80">  
            NexVoyage Collective  
          </p>  
        </div>  
      </section>

      {/* Strategic Alliances */}  
      <section className="py-32 px-6 max-w-7xl mx-auto">  
        <h2 className="text-6xl md:text-8xl font-serif mb-16 border-l-4 border-[#D4AF37] pl-8">  
          STRATEGIC ALLIANCES  
        </h2>  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">  
          {alliances.map((partner, i) => (  
            <div key={i} className="p-8 border border-[#D4AF37]/10 flex flex-col justify-between aspect-video hover:bg-[#D4AF37]/5 transition-colors">  
              <span className="text-xs font-mono text-[#D4AF37]/40">{partner.id}</span>  
              <div>  
                <p className="text-2xl font-serif">{partner.name}</p>  
                <p className="text-[10px] tracking-widest uppercase opacity-60">{partner.type}</p>  
              </div>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Jet Cabin Visual */}  
      <section className="h-[70vh] w-full px-6">  
        <img   
          src="/jyV_xaai_p4.webp"   
          alt="Private Jet Interior"   
          className="w-full h-full object-cover rounded-sm border border-[#D4AF37]/10"  
        />  
      </section>

      {/* Guardian Layer */}  
      <section className="py-32 px-6 bg-[#0A0A0A]">  
        <div className="max-w-7xl mx-auto">  
          <h2 className="text-6xl md:text-8xl font-serif mb-20 text-right">  
            GUARDIAN LAYER  
          </h2>  
          <div className="grid md:grid-cols-3 gap-12">  
            <div className="space-y-6">  
              <Shield className="w-12 h-12 stroke-[1px]" />  
              <h3 className="text-4xl font-serif italic">Invisible Advocacy</h3>  
              <p className="text-xl text-[#D4AF37]/70 leading-relaxed">  
                Operating behind the curtain of global hospitality, we navigate the institutional layers to secure preferential status before you arrive.  
              </p>  
            </div>  
            <div className="space-y-6">  
              <Target className="w-12 h-12 stroke-[1px]" />  
              <h3 className="text-4xl font-serif italic">Status Leverage</h3>  
              <p className="text-xl text-[#D4AF37]/70 leading-relaxed">  
                Our position within the Fora and Virtuoso networks converts collective influence into individual priority for our travelers.  
              </p>  
            </div>  
            <div className="space-y-6">  
              <Zap className="w-12 h-12 stroke-[1px]" />  
              <h3 className="text-4xl font-serif italic">Tactical Oversight</h3>  
              <p className="text-xl text-[#D4AF37]/70 leading-relaxed">  
                24/7 monitoring of the luxury logistics chain, ensuring that every transition—from tarmac to suite—is handled with zero friction.  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Property Gallery */}  
      <section className="py-32 px-6 max-w-7xl mx-auto">  
        <div className="columns-1 md:columns-2 gap-6 space-y-6">  
          {properties.map((prop, i) => (  
            <div key={i} className="relative group overflow-hidden border border-[#D4AF37]/10">  
              <img src={prop.img} alt={prop.title} className="w-full grayscale group-hover:grayscale-0 transition-all duration-700" />  
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0A0A0A] to-transparent">  
                <p className="text-3xl font-serif italic">{prop.title}</p>  
                <p className="text-sm tracking-widest uppercase opacity-60">{prop.loc}</p>  
              </div>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Footer */}  
      <footer className="py-20 border-t border-[#D4AF37]/10 text-center">  
        <p className="text-xs tracking-[1em] uppercase opacity-40">  
          NexVoyage Collective &copy; 2026 | Private Access Only  
        </p>  
      </footer>  
    </main>  
  )  
}  
