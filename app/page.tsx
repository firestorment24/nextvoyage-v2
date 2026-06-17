import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';  
import { ArrowRight, Map, Compass, Shield, Award } from 'lucide-react';
import { ArrowRight, Shield, Globe, Clock, Award } from 'lucide-react';

export default function HomePage() {  
  const alliances = [  
    "Fora Travel", "Virtuoso", "ILTM", "Serandipians",   
    "Rosewood Elite", "Aman Preferred", "Belmond Bellini", "Four Seasons Preferred"  
  ];
const alliances = [  
  { name: "Fora Travel", role: "Primary Partner" },  
  { name: "Virtuoso", role: "Preferred Network" },  
  { name: "ILTM", role: "Global Market" },  
  { name: "Serandipians", role: "Elite Circle" },  
  { name: "Rosewood Elite", role: "Preferred Status" },  
  { name: "Aman Preferred", role: "Direct Access" },  
  { name: "Belmond Bellini", role: "Executive Member" },  
  { name: "Four Seasons Preferred", role: "Direct Access" }  
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
      /* Preserve intentional backgrounds */  
      .bg-black { background-color: #000000 !important; }  
      .bg-\\[\\#0a0a0a\\] { background-color: #0a0a0a !important; }  
      .bg-\\[\\#d4af37\\] { background-color: #d4af37 !important; color: black !important; }  
      .border-brass { border-color: #d4af37 !important; }  
    `}} />

      <Navigation />
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
    {/* Section 1: Hero - Immersive & Cinematic */}  
    <section className="relative h-screen flex flex-col justify-end pb-32 px-6 md:px-20 overflow-hidden bg-black">  
      <div className="absolute inset-0 z-0">  
        <img   
          src="https://cdn.marblism.com/cA_ONE4k1-Z.webp"   
          alt="Luxury Villa Arrival"   
          className="w-full h-full object-cover"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />  
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />  
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
      <div className="relative z-10 max-w-5xl">  
        <h1 className="text-7xl md:text-[120px] font-light tracking-tighter leading-[0.85] mb-8 !text-white">  
          TRAVEL, <br />  
          <span className="text-[#d4af37] italic">PERFECTED.</span>  
        </h1>  
        <p className="text-xl md:text-2xl text-zinc-100 max-w-2xl font-light leading-relaxed !text-white mb-12">  
          We apply global leverage and direct hospitality relationships to ensure your time is never wasted. High-value travel, managed by a private office.  
        </p>  
        <div className="flex items-center gap-12">  
          <a href="/concierge" className="group flex items-center gap-4">  
             <div className="w-16 h-16 rounded-full border border-[#d4af37] flex items-center justify-center group-hover:bg-[#d4af37] transition-all">  
                <ArrowRight className="w-6 h-6 group-hover:text-black transition-colors" />  
             </div>  
             <span className="text-xs uppercase tracking-[0.4em] font-bold !text-white">Begin Inquiry</span>  
          </a>  
        </div>  
      </section>
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
    {/* Section 2: Operational Leverage - The Substace */}  
    <section className="py-32 px-6 md:px-20 bg-black border-y border-zinc-900">  
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">  
        <div className="space-y-12">  
          <div className="space-y-4">  
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#d4af37]">Operational Excellence</h2>  
            <h3 className="text-4xl md:text-5xl font-light !text-white leading-tight">We operate at the top of the chain.</h3>  
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
            
          <div className="grid sm:grid-cols-2 gap-12">  
            <div className="space-y-4">  
              <Shield className="w-6 h-6 text-[#d4af37]" />  
              <h4 className="text-lg font-medium !text-white">Preferred Status</h4>  
              <p className="text-zinc-400 font-light leading-relaxed !text-white">Through Fora Travel and Virtuoso, we move you to the top of the guest list globally.</p>  
            </div>  
            <div className="space-y-4">  
              <Globe className="w-6 h-6 text-[#d4af37]" />  
              <h4 className="text-lg font-medium !text-white">Direct Leverage</h4>  
              <p className="text-zinc-400 font-light leading-relaxed !text-white">We work directly with General Managers and owners, not anonymous reservation desks.</p>  
            </div>  
            <div className="space-y-4">  
              <Clock className="w-6 h-6 text-[#d4af37]" />  
              <h4 className="text-lg font-medium !text-white">Time Preservation</h4>  
              <p className="text-zinc-400 font-light leading-relaxed !text-white">Meticulous logistics management for those who cannot afford friction.</p>  
            </div>  
            <div className="space-y-4">  
              <Award className="w-6 h-6 text-[#d4af37]" />  
              <h4 className="text-lg font-medium !text-white">Elite Perks</h4>  
              <p className="text-zinc-400 font-light leading-relaxed !text-white">Automatic upgrades, private credits, and exclusive amenities as standard.</p>  
            </div>  
          </div>  
        </div>

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
        <div className="relative">  
           <img   
            src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=1000"   
            className="w-full aspect-square object-cover border border-zinc-800"   
            alt="Operational Detail"   
           />  
           <div className="absolute -bottom-8 -left-8 p-12 bg-[#0a0a0a] border-l border-b border-[#d4af37] max-w-sm hidden md:block">  
              <p className="text-sm italic text-zinc-400 font-light !text-white">"Luxury is not a commodity. It is the elimination of all friction from the traveler's path."</p>  
           </div>  
        </div>  
      </div>  
    </section>

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
    {/* Section 3: The Power Grid - Fora First */}  
    <section className="py-32 px-6 md:px-20 bg-[#050505]">  
      <div className="max-w-7xl mx-auto">  
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">  
          <div className="space-y-4">  
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#d4af37]">Global Partnerships</h2>  
            <h3 className="text-4xl md:text-5xl font-light !text-white">Strategic Leverage.</h3>  
          </div>  
          <p className="text-zinc-500 max-w-md font-light !text-white">  
            Our status across these networks ensures our clients are recognized as the highest priority in the world's most elite properties.  
          </p>  
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900">  
          {alliances.map((partner, index) => (  
            <div key={partner.name} className="bg-black p-12 flex flex-col items-center justify-center text-center group hover:bg-[#0a0a0a] transition-all">  
              <span className={`text-sm tracking-[0.2em] font-bold uppercase mb-2 ${index === 0 ? "text-[#d4af37]" : "text-white opacity-60"}`}>  
                {partner.name}  
              </span>  
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-medium">{partner.role}</span>  
            </div>  
          ))}  
        </div>  
      </section>
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
    {/* Section 4: Narrative Explorer */}  
    <section className="py-32 px-6 md:px-20 bg-black">  
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">  
        <a href="/archive" className="group block relative overflow-hidden h-[600px] border border-zinc-900">  
           <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" alt="Archive" />  
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />  
           <div className="absolute bottom-0 left-0 p-12">  
              <h4 className="text-3xl font-light mb-4 !text-white">The Archive</h4>  
              <p className="text-zinc-400 mb-8 max-w-xs font-light !text-white">Situational intelligence and field reports from our global scouting operations.</p>  
              <div className="inline-block border-b border-[#d4af37] pb-1 text-xs uppercase tracking-widest text-[#d4af37]">Explore Reports</div>  
           </div>  
        </a>  
        <a href="/perspective" className="group block relative overflow-hidden h-[600px] border border-zinc-900">  
           <img src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" alt="Perspective" />  
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />  
           <div className="absolute bottom-0 left-0 p-12">  
              <h4 className="text-3xl font-light mb-4 !text-white">The Perspective</h4>  
              <p className="text-zinc-400 mb-8 max-w-xs font-light !text-white">Our operational philosophy on leverage, preferred status, and high-value travel.</p>  
              <div className="inline-block border-b border-[#d4af37] pb-1 text-xs uppercase tracking-widest text-[#d4af37]">Read Philosophy</div>  
           </div>  
        </a>  
      </div>  
    </section>

    {/* Section 5: The Final Word */}  
    <section className="py-48 px-6 bg-[#0a0a0a] border-t border-zinc-900 relative overflow-hidden">  
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-bold text-white/[0.02] whitespace-nowrap pointer-events-none">  
          NEXVOYAGE  
       </div>  
       <div className="max-w-3xl mx-auto text-center relative z-10">  
          <h2 className="text-4xl md:text-6xl font-light mb-12 !text-white tracking-tighter">The private office for global travel.</h2>  
          <p className="text-zinc-500 text-lg md:text-xl font-light mb-16 !text-white leading-relaxed">  
             We are currently accepting inquiries for the 2026-2027 season. Simple, professional, and uncompromising service for the discerning few.  
          </p>  
        </div>  
      </section>
          <a href="/concierge" className="inline-block bg-[#d4af37] text-black px-16 py-6 font-bold uppercase tracking-[0.3em] text-sm hover:bg-white transition-colors">  
             Apply for Access  
          </a>  
       </div>  
    </section>

      <Footer />  
    </main>  
  );  
    <Footer />  
  </main>  
);  
}  
