'use client'

import { Shield, Target, Zap } from "lucide-react"  
import Link from "next/link"

export default function HomePage() {  
const alliances = [  
  { name: "FORA TRAVEL", font: "font-sans font-bold tracking-[0.1em]" },  
  { name: "VIRTUOSO", font: "font-serif tracking-[0.2em] font-light" },  
  { name: "AMAN", font: "font-serif tracking-[0.4em]" },  
  { name: "FOUR SEASONS", font: "font-serif tracking-widest font-semibold" },  
  { name: "BELMOND", font: "font-serif tracking-[0.1em] italic" },  
  { name: "ROSEWOOD", font: "font-serif tracking-normal uppercase" },  
  { name: "MANDARIN ORIENTAL", font: "font-sans tracking-[0.1em] font-light" },  
  { name: "PENINSULA", font: "font-serif tracking-tighter" },  
  { name: "DORCHESTER COLLECTION", font: "font-serif tracking-wider font-semibold" },  
  { name: "OETKER COLLECTION", font: "font-serif italic" },  
  { name: "AUBERGE RESORTS", font: "font-sans tracking-[0.2em] font-thin" },  
  { name: "HYATT PRIVÉ", font: "font-sans tracking-tighter font-bold" },  
]

const properties = [  
  { id: "amangiri", title: "Amangiri", loc: "Utah, USA", img: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&q=80", size: "md:col-span-2 h-[550px]" },  
  { id: "soneva-jani", title: "Soneva Jani", loc: "Maldives", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80", size: "md:col-span-1 h-[350px] mt-12" },  
  { id: "hotel-de-crillon", title: "Hôtel de Crillon", loc: "Paris, France", img: "https://images.unsplash.com/photo-1551882547-ff43c63efe81?auto=format&fit=crop&q=80", size: "md:col-span-1 h-[450px] -mt-16" },  
]

return (  
  <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-black">  
    {/* REFINED NUCLEAR FIX 5.0 - Brass H1, White Text */}  
    <style dangerouslySetInnerHTML={{ __html: `  
      * { box-shadow: none !important; }  
      body, main, section, div, header, footer { background-color: #0A0A0A !important; border: none !important; }  
      h1 { color: #D4AF37 !important; }  
      h2, h3, p, span, a { color: white !important; }  
      .hero-title { font-size: clamp(3rem, 9vw, 6rem); }  
      img { filter: grayscale(100%); transition: all 0.7s ease; }  
      img:hover { filter: grayscale(0%); }  
      .no-gray { filter: grayscale(0%) !important; }  
    `}} />

    {/* Hero Section - Chablé Villa */}  
    <section className="relative h-screen flex items-center justify-center overflow-hidden">  
      <div className="absolute inset-0 z-0">  
        <img   
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/9a/b3/f2/chable-villa.jpg?w=1800&h=-1&s=1"   
          alt="Chablé Villa"   
          className="no-gray w-full h-full object-cover opacity-60"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />  
      </div>  
        
      <div className="relative z-10 text-center px-6">  
        <h1 className="hero-title font-serif tracking-tighter leading-none mb-6 uppercase">  
          THE ROI OF RESET  
        </h1>  
        <p className="text-lg md:text-xl font-light tracking-[0.5em] uppercase opacity-90">  
          NexVoyage Collective  
        </p>  
      </div>  
    </section>

    {/* Tightened Alliance Grid */}  
    <section className="py-24 px-6 max-w-5xl mx-auto">  
      <div className="grid grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-8 items-center justify-center">  
        {alliances.map((partner, i) => (  
          <div key={i} className="text-center">  
            <span className={`${partner.font} text-[10px] md:text-xs opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap`}>  
              {partner.name}  
            </span>  
          </div>  
        ))}  
      </div>  
    </section>

    {/* Asymmetric Property Gallery - Linked to Archive */}  
    <section className="py-32 px-6 max-w-7xl mx-auto">  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">  
        {properties.map((prop, i) => (  
          <Link key={i} href={`/archive/${prop.id}`} className={`relative group overflow-hidden block ${prop.size}`}>  
            <img src={prop.img} alt={prop.title} className="w-full h-full object-cover" />  
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />  
            <div className="absolute bottom-0 left-0 p-8">  
              <p className="text-3xl font-serif italic mb-1 uppercase tracking-tight">{prop.title}</p>  
              <p className="text-[9px] tracking-[0.4em] uppercase opacity-70">{prop.loc}</p>  
            </div>  
          </Link>  
        ))}  
      </div>  
    </section>

    {/* Jet Visual */}  
    <section className="w-full px-6 mb-32">  
      <div className="h-[60vh] w-full overflow-hidden rounded-sm">  
        <img src="/jyV_xaai_p4.webp" alt="Private Jet" className="no-gray w-full h-full object-cover" />  
      </div>  
    </section>

    {/* Guardian Layer */}  
    <section className="py-32 px-6 border-y border-white/5">  
      <div className="max-w-7xl mx-auto">  
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">  
          <h2 className="text-6xl font-serif tracking-tight leading-tight uppercase">  
            THE GUARDIAN LAYER  
          </h2>  
          <p className="text-xl font-light leading-relaxed opacity-90">  
            Operating as the invisible interface between our clients and the global luxury machine.  
          </p>  
        </div>  
          
        <div className="grid md:grid-cols-3 gap-16">  
          {[  
            { icon: Shield, title: "Invisible Advocacy", desc: "Securing status before you arrive." },  
            { icon: Target, title: "Status Leverage", desc: "Direct access to elite hospitality pillars." },  
            { icon: Zap, title: "Tactical Oversight", desc: "24/7 monitoring of your movement." }  
          ].map((item, idx) => (  
            <div key={idx} className="space-y-6">  
              <item.icon className="w-8 h-8 stroke-[1px]" />  
              <h3 className="text-2xl font-serif italic uppercase tracking-wider">{item.title}</h3>  
              <p className="text-md opacity-70 leading-relaxed font-light">{item.desc}</p>  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>

    <footer className="py-24 text-center">  
      <p className="text-[9px] tracking-[1.5em] uppercase opacity-40">  
        NexVoyage Collective &copy; 2026 | Private Access Only  
      </p>  
    </footer>  
  </main>  
)  
}  
