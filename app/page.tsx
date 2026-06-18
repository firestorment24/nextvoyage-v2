import React from 'react';  
import Navigation from '@/components/Navigation';

export default function HomePage() {  
  const partners = [  
    { name: "FORA TRAVEL", font: "font-sans tracking-[0.3em]", type: "Flagship Partner" },  
    { name: "VIRTUOSO", font: "font-serif italic tracking-widest", type: "Preferred Network" },  
    { name: "AMAN", font: "font-sans tracking-[0.5em]", type: "Direct Access" },  
    { name: "FOUR SEASONS", font: "font-serif tracking-tighter", type: "Preferred Partner" },  
    { name: "BELMOND", font: "font-serif italic", type: "Bellini Club" },  
    { name: "ROSEWOOD", font: "font-sans tracking-widest uppercase", type: "Elite Member" },  
    { name: "MANDARIN ORIENTAL", font: "font-serif uppercase tracking-normal", type: "Fan Club" },  
    { name: "PENINSULA", font: "font-serif tracking-tight", type: "PenClub Status" },  
    { name: "DORCHESTER", font: "font-serif uppercase italic", type: "Diamond Club" },  
    { name: "AUBERGE", font: "font-sans font-light", type: "Preferred Status" },  
    { name: "OETKER COLLECTION", font: "font-serif tracking-widest", type: "Pearl Partner" },  
    { name: "HYATT PRIVÉ", font: "font-sans font-bold tracking-tighter", type: "Elite Tier" }  
  ];

  return (  
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37]/30">  
      {/* NUCLEAR CSS: LOCKING BRASS & SHADOW */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Inter:wght@200;300;400&display=swap');  
          
        html, body, main { background-color: #000 !important; font-family: 'Inter', sans-serif; }  
        .font-serif { font-family: 'Cormorant Garamond', serif; }  
          
        h1 { color: #D4AF37 !important; font-family: 'Cormorant Garamond', serif; }  
        h2 { color: #FFFFFF !important; font-family: 'Cormorant Garamond', serif; }  
        h3 { color: #D4AF37 !important; font-family: 'Cormorant Garamond', serif; }  
          
        section, div { background-color: transparent !important; }  
      ` }} />

      <Navigation />

      {/* 1. HERO SECTION */}  
      <section className="relative h-screen flex items-center justify-center overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/9a/b3/f2/chable-villa.jpg?w=1800&h=-1&s=1"   
            alt="Chablé Villa"   
            className="w-full h-full object-cover opacity-60 scale-105"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />  
        </div>  
          
        <div className="relative z-10 text-center px-6">  
          <h1 className="text-7xl md:text-[11rem] leading-[0.8] tracking-tighter opacity-90 mb-4">  
            NexVoyage  
          </h1>  
          <p className="text-lg md:text-xl tracking-[0.5em] uppercase font-light text-white/60">  
            The Collective Sanctuary  
          </p>  
        </div>  
      </section>

      {/* 2. PARTNERSHIP NETWORK (4x3 Grid) */}  
      <section className="py-32 px-8 md:px-24 border-t border-white/5">  
        <div className="max-w-7xl mx-auto">  
          <h2 className="text-5xl md:text-6xl mb-24 tracking-tight text-center">Strategic Alliances</h2>  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-24">  
            {partners.map((p, i) => (  
              <div key={i} className="text-center group">  
                <p className={`${p.font} text-lg md:text-xl text-white group-hover:text-[#D4AF37] transition-colors duration-500`}>  
                  {p.name}  
                </p>  
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mt-4 block">  
                  {p.type}  
                </span>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* 3. FEATURED PROPERTIES (Journal Assets) */}  
      <section className="py-32 px-8 md:px-24 bg-[#050505]">  
        <div className="max-w-7xl mx-auto">  
          <h2 className="text-5xl md:text-6xl mb-20 tracking-tight italic text-center">The Journal Selects</h2>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
            {[  
              { name: "Amangiri", location: "Canyon Point, Utah", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },  
              { name: "Soneva Jani", location: "Noonu Atoll, Maldives", img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62" },  
              { name: "Hôtel de Crillon", location: "Paris, France", img: "https://images.unsplash.com/photo-1551882547-ff43c63fedfe" }  
            ].map((prop, i) => (  
              <div key={i} className="group cursor-pointer">  
                <div className="aspect-[3/4] overflow-hidden border border-white/10 mb-8">  
                  <img src={prop.img} alt={prop.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />  
                </div>  
                <h3 className="text-3xl mb-2">{prop.name}</h3>  
                <p className="text-xs uppercase tracking-widest text-white/40">{prop.location}</p>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* 4. CORE SERVICES */}  
      <section className="py-40 px-8 md:px-24 border-t border-white/5">  
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">  
          <div>  
            <h2 className="text-6xl mb-8 leading-tight">Private Management & Invisible Advocacy</h2>  
            <p className="text-lg text-white/60 leading-relaxed font-light font-sans max-w-lg">  
              We operate as the silent interface between you and the world's most exclusive travel institutions. Our mission is to secure your continuity of lifestyle, regardless of coordinates.  
            </p>  
          </div>  
          <div className="grid grid-cols-1 gap-12">  
            {[  
              { title: "Tactical Planning", desc: "Minute-by-minute logistical orchestration for complex global movements." },  
              { title: "Status Negotiation", desc: "Leveraging the Collective to ensure you are recognized as the highest priority." },  
              { title: "Security Liaison", desc: "Seamless integration with private security details and vetting protocols." }  
            ].map((s, i) => (  
              <div key={i} className="border-l border-[#D4AF37]/40 pl-8">  
                <h3 className="text-2xl mb-2 uppercase tracking-wide">{s.title}</h3>  
                <p className="text-sm text-white/50 font-sans font-light">{s.desc}</p>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* 5. EXCLUSIVE PERKS */}  
      <section className="py-32 px-8 md:px-24 bg-white/5">  
        <div className="max-w-5xl mx-auto text-center">  
          <h2 className="text-5xl md:text-6xl mb-16 tracking-tight">The Perks of Partnership</h2>  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">  
            {[  
              "Daily $100+ Credits",  
              "Room Upgrades",  
              "Early Check-In",  
              "Late Check-Out",  
              "Private VIP Transfers",  
              "Aman Insider Access",  
              "Fora Priority",  
              "Direct GM Liaisons"  
            ].map((perk, i) => (  
              <div key={i} className="py-6 px-4 border border-white/5 bg-black/40">  
                <p className="text-[10px] uppercase tracking-[0.4em] font-sans font-light text-[#D4AF37]">{perk}</p>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>

      <footer className="py-20 text-center border-t border-white/5 opacity-40">  
        <p className="text-[10px] tracking-[0.6em] uppercase">NexVoyage Collective © 2026</p>  
      </footer>  
    </main>  
  );  
}  
