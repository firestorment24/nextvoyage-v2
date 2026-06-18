'use client'

import { Shield, Target, Zap } from "lucide-react"  
import Link from "next/link"

export default function HomePage() {  
  const alliances = [  
    { name: "FORA TRAVEL", font: "font-sans font-bold tracking-[0.2em]" },  
    { name: "VIRTUOSO", font: "font-serif tracking-[0.3em] font-light" },  
    { name: "AMAN", font: "font-serif tracking-[0.5em]" },  
    { name: "FOUR SEASONS", font: "font-serif tracking-widest font-bold" },  
    { name: "BELMOND", font: "font-serif tracking-[0.2em] italic" },  
    { name: "ROSEWOOD", font: "font-serif tracking-[0.1em] uppercase" },  
    { name: "MANDARIN ORIENTAL", font: "font-sans tracking-[0.15em] font-light" },  
    { name: "PENINSULA", font: "font-serif tracking-normal" },  
    { name: "DORCHESTER COLLECTION", font: "font-serif tracking-[0.2em] font-semibold" },  
    { name: "OETKER COLLECTION", font: "font-serif tracking-tighter italic" },  
    { name: "AUBERGE RESORTS", font: "font-sans tracking-[0.3em] font-thin" },  
    { name: "HYATT PRIVÉ", font: "font-sans tracking-tight font-bold" },  
  ]

  const properties = [  
    { title: "Amangiri", loc: "Utah, USA", img: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&q=80", size: "md:col-span-2 h-[600px]" },  
    { title: "Soneva Jani", loc: "Maldives", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80", size: "md:col-span-1 h-[400px] mt-20" },  
    { title: "Hôtel de Crillon", loc: "Paris, France", img: "https://images.unsplash.com/photo-1551882547-ff43c63efe81?auto=format&fit=crop&q=80", size: "md:col-span-1 h-[500px] -mt-20" },  
  ]

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-white selection:text-black">  
      {/* NUCLEAR FIX 4.0 - All White/Black Contrast */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        * { box-shadow: none !important; border-color: transparent !important; }  
        body, main, section, div, header, footer { background-color: #0A0A0A !important; }  
        h1, h2, h3, p, span { color: white !important; background: transparent !important; }  
        .hero-title { font-size: clamp(3rem, 10vw, 6.5rem); }  
        img { filter: grayscale(100%); transition: filter 0.8s ease; }  
        img:hover { filter: grayscale(0%); }  
        .no-gray { filter: grayscale(0%) !important; }  
      `}} />

      {/* Hero Section - Restored Chablé Image */}  
      <section className="relative h-screen flex items-center justify-center overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/9a/b3/f2/chable-villa.jpg?w=1800&h=-1&s=1"   
            alt="Chablé Villa"   
            className="no-gray w-full h-full object-cover opacity-70"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />  
        </div>  
          
        <div className="relative z-10 text-center px-6">  
          <h1 className="hero-title font-serif tracking-tighter leading-none mb-6 uppercase">  
            THE ROI OF RESET  
          </h1>  
          <p className="text-xl font-light tracking-[0.6em] uppercase opacity-90">  
            NexVoyage Collective  
          </p>  
        </div>  
      </section>

      {/* Alliance Grid - No Lines, Brand Typography */}  
      <section className="py-40 px-6 max-w-7xl mx-auto">  
        <h2 className="text-sm tracking-[0.5em] uppercase mb-20 text-center opacity-50">Strategic Alliances</h2>  
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-24 gap-x-12 content-center">  
          {alliances.map((partner, i) => (  
            <div key={i} className="flex items-center justify-center text-center">  
              <span className={`${partner.font} text-lg md:text-xl opacity-80 hover:opacity-100 transition-opacity cursor-default`}>  
                {partner.name}  
              </span>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Jet Visual */}  
      <section className="w-full px-6 mb-40">  
        <div className="h-[70vh] w-full overflow-hidden">  
          <img   
            src="/jyV_xaai_p4.webp"   
            alt="Private Jet Interior"   
            className="no-gray w-full h-full object-cover"  
          />  
        </div>  
      </section>

      {/* Guardian Layer */}  
      <section className="py-40 px-6 border-y border-white/5">  
        <div className="max-w-7xl mx-auto">  
          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">  
            <h2 className="text-7xl font-serif tracking-tight leading-tight">  
              THE <br /> GUARDIAN <br /> LAYER  
            </h2>  
            <p className="text-2xl font-light leading-relaxed opacity-80">  
              Operating as the invisible interface between our clients and the global luxury machine. We don't just book; we advocate, leverage, and oversee.  
            </p>  
          </div>  
            
          <div className="grid md:grid-cols-3 gap-16">  
            <div className="space-y-6">  
              <Shield className="w-10 h-10 stroke-[1px]" />  
              <h3 className="text-3xl font-serif italic uppercase tracking-wider">Invisible Advocacy</h3>  
              <p className="text-lg opacity-70 leading-relaxed font-light">  
                Securing preferential status and room hierarchy before you ever set foot on property.  
              </p>  
            </div>  
            <div className="space-y-6">  
              <Target className="w-10 h-10 stroke-[1px]" />  
              <h3 className="text-3xl font-serif italic uppercase tracking-wider">Status Leverage</h3>  
              <p className="text-lg opacity-70 leading-relaxed font-light">  
                Direct access to the decision-makers within the world's most exclusive hospitality pillars.  
              </p>  
            </div>  
            <div className="space-y-6">  
              <Zap className="w-10 h-10 stroke-[1px]" />  
              <h3 className="text-3xl font-serif italic uppercase tracking-wider">Tactical Oversight</h3>  
              <p className="text-lg opacity-70 leading-relaxed font-light">  
                24/7 monitoring of your movement, ensuring zero friction from departure to return.  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Asymmetric Property Gallery */}  
      <section className="py-40 px-6 max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
          {properties.map((prop, i) => (  
            <div key={i} className={`relative group overflow-hidden ${prop.size}`}>  
              <img src={prop.img} alt={prop.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />  
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />  
              <div className="absolute bottom-0 left-0 p-10">  
                <p className="text-4xl font-serif italic mb-2">{prop.title}</p>  
                <p className="text-xs tracking-[0.4em] uppercase opacity-60">{prop.loc}</p>  
              </div>  
            </div>  
          ))}  
        </div>  
      </section>

      <footer className="py-24 text-center">  
        <p className="text-[10px] tracking-[1.5em] uppercase opacity-40">  
          NexVoyage Collective &copy; 2026 | Private Access  
        </p>  
      </footer>  
    </main>  
  )  
}  
