import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';  
import { ArrowRight, Shield, Globe, Clock, Award } from 'lucide-react';

export default function HomePage() {  
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
      /* Preserve intentional backgrounds */  
      .bg-black { background-color: #000000 !important; }  
      .bg-\\[\\#0a0a0a\\] { background-color: #0a0a0a !important; }  
      .bg-\\[\\#d4af37\\] { background-color: #d4af37 !important; color: black !important; }  
      .border-brass { border-color: #d4af37 !important; }  
    `}} />

    <Navigation />

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
      </div>  
    </section>

    {/* Section 2: Operational Leverage - The Substace */}  
    <section className="py-32 px-6 md:px-20 bg-black border-y border-zinc-900">  
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">  
        <div className="space-y-12">  
          <div className="space-y-4">  
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#d4af37]">Operational Excellence</h2>  
            <h3 className="text-4xl md:text-5xl font-light !text-white leading-tight">We operate at the top of the chain.</h3>  
          </div>  
            
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
      </div>  
    </section>

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
          <a href="/concierge" className="inline-block bg-[#d4af37] text-black px-16 py-6 font-bold uppercase tracking-[0.3em] text-sm hover:bg-white transition-colors">  
             Apply for Access  
          </a>  
       </div>  
    </section>

    <Footer />  
  </main>  
);  
}  
