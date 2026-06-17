import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';  
import { ArrowRight, Map, Compass, Shield, Award } from 'lucide-react';

export default function HomePage() {  
  const alliances = [  
    "Fora Travel", "Virtuoso", "ILTM", "Serandipians",   
    "Rosewood Elite", "Aman Preferred", "Belmond Bellini", "Four Seasons Preferred"  
  ];

  return (  
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[#d4af37] selection:text-black">  
      {/* NUCLEAR FIX: Kill all white background ghosts */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        :root { background: black !important; }  
        body { background-color: black !important; }  
        * { background-color: transparent !important; }  
        main, section, div, header, nav, footer { background-color: transparent !important; }  
        .bg-white, .bg-slate-50, .bg-zinc-50, .bg-zinc-100 { background-color: transparent !important; }  
        .text-black { color: #ffffff !important; }  
        h1, h2, h3, h4, p, span, a { background-color: transparent !important; }  
        /* Preserve specific backgrounds we WANT */  
        .bg-black { background-color: #000000 !important; }  
        .bg-\\[\\#0a0a0a\\] { background-color: #0a0a0a !important; }  
        .bg-\\[\\#d4af37\\] { background-color: #d4af37 !important; color: black !important; }  
        .group:hover .bg-zinc-900 { background-color: #18181b !important; }  
      `}} />

      <Navigation />

      {/* Hero: High-Substance Color Visual */}  
      <section className="relative h-[90vh] flex items-center px-6 md:px-20 overflow-hidden bg-black">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2070"   
            alt="Private Luxury Travel"   
            className="w-full h-full object-cover opacity-80"  
          />  
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />  
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />  
        </div>

        <div className="relative z-10 max-w-4xl">  
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 !text-white leading-[0.9]">  
            NexVoyage <br />  
            <span className="text-[#d4af37]">Collective.</span>  
          </h1>  
          <p className="text-xl md:text-2xl text-zinc-100 max-w-xl mb-12 font-light leading-relaxed !text-white drop-shadow-lg">  
            Operational leverage for the high-net-worth traveler. We manage your most non-renewable resource: time.  
          </p>  
          <div className="flex flex-col sm:flex-row gap-6">  
            <a href="/concierge" className="inline-flex items-center gap-4 group bg-[#d4af37] px-8 py-4 text-black font-semibold hover:bg-white transition-all">  
              <span className="text-sm uppercase tracking-[0.2em]">Begin Inquiry</span>  
              <ArrowRight className="w-4 h-4" />  
            </a>  
            <a href="/perspective" className="inline-flex items-center gap-4 px-8 py-4 border border-white/20 hover:bg-white/10 transition-all !text-white backdrop-blur-sm">  
              <span className="text-sm uppercase tracking-[0.2em]">The Perspective</span>  
            </a>  
          </div>  
        </div>  
      </section>

      {/* Strategic Alliances - Trust Strip */}  
      <section className="py-16 border-y border-zinc-900 bg-[#050505]">  
        <div className="max-w-7xl mx-auto px-6">  
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">  
            {alliances.map((partner, index) => (  
              <span key={partner} className={`text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-zinc-400 ${index === 0 ? "!text-[#d4af37] !opacity-100" : ""}`}>  
                {partner}  
              </span>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* The Hub: Navigation Tiles */}  
      <section className="py-32 px-6 md:px-20 bg-black">  
        <div className="max-w-7xl mx-auto">  
          <div className="mb-20 max-w-2xl">  
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#d4af37] mb-6">Explore the Collective</h2>  
            <h3 className="text-4xl md:text-5xl font-light !text-white tracking-tight">The intersection of logistics and legacy.</h3>  
          </div>

          <div className="grid md:grid-cols-3 gap-12">  
            {/* Tile 1: The Archive */}  
            <a href="/archive" className="group space-y-6 block">  
              <div className="relative aspect-[16/10] overflow-hidden border border-zinc-800">  
                <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1000" alt="Venice" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />  
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />  
              </div>  
              <div className="flex items-start gap-4">  
                <Map className="w-5 h-5 text-[#d4af37] mt-1" />  
                <div>  
                  <h4 className="text-xl font-light mb-2 !text-white group-hover:text-[#d4af37] transition-colors">The Archive</h4>  
                  <p className="text-zinc-500 text-sm font-light leading-relaxed !text-white">Field reports and situational intelligence from our global scouting operations.</p>  
                </div>  
              </div>  
            </a>

            {/* Tile 2: The Perspective */}  
            <a href="/perspective" className="group space-y-6 block">  
              <div className="relative aspect-[16/10] overflow-hidden border border-zinc-800">  
                <img src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1000" alt="Luxury Coast" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />  
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />  
              </div>  
              <div className="flex items-start gap-4">  
                <Compass className="w-5 h-5 text-[#d4af37] mt-1" />  
                <div>  
                  <h4 className="text-xl font-light mb-2 !text-white group-hover:text-[#d4af37] transition-colors">The Perspective</h4>  
                  <p className="text-zinc-500 text-sm font-light leading-relaxed !text-white">Our operational philosophy on leverage, preferred status, and high-value travel.</p>  
                </div>  
              </div>  
            </a>

            {/* Tile 3: The Concierge */}  
            <a href="/concierge" className="group space-y-6 block">  
              <div className="relative aspect-[16/10] overflow-hidden border border-zinc-800">  
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000" alt="Resort" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />  
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />  
              </div>  
              <div className="flex items-start gap-4">  
                <Shield className="w-5 h-5 text-[#d4af37] mt-1" />  
                <div>  
                  <h4 className="text-xl font-light mb-2 !text-white group-hover:text-[#d4af37] transition-colors">The Concierge</h4>  
                  <p className="text-zinc-500 text-sm font-light leading-relaxed !text-white">Direct access to our network. We move the needle on your behalf.</p>  
                </div>  
              </div>  
            </a>  
          </div>  
        </div>  
      </section>

      {/* Grounded Statement Section */}  
      <section className="py-40 px-6 bg-[#0a0a0a] border-t border-zinc-900">  
        <div className="max-w-4xl mx-auto text-center">  
          <Award className="w-12 h-12 text-[#d4af37] mx-auto mb-10 opacity-50" />  
          <h2 className="text-3xl md:text-5xl font-light mb-12 !text-white italic tracking-tight leading-tight">  
            "Luxury is the elimination of friction."  
          </h2>  
          <div className="w-20 h-px bg-[#d4af37] mx-auto mb-12" />  
          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed !text-white">  
            NexVoyage is a private travel office. We operate at the intersection of deep hospitality relationships and meticulous logistics. No theater. Just service.  
          </p>  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
