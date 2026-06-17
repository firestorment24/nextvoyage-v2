import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';  
import {   
  ArrowRight,   
  ShieldCheck,   
  Globe,   
  Zap,  
  Award  
} from 'lucide-react';

export default function HomePage() {  
  const partners = [  
    "Aman", "Belmond", "Singita", "Regent Seven Seas",   
    "Explora Journeys", "Silversea", "Six Senses", "Rosewood",   
    "One&Only", "Abercrombie & Kent", "Orient Express",   
    "Mandarin Oriental", "Scott Dunn", "Four Seasons", "St. Regis"  
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
        /* Preserve specific background colors we WANT */  
        .bg-black { background-color: #000000 !important; }  
        .bg-\\[\\#0a0a0a\\] { background-color: #0a0a0a !important; }  
        .bg-\\[\\#050505\\] { background-color: #050505 !important; }  
        .bg-\\[\\#d4af37\\] { background-color: #d4af37 !important; color: black !important; }  
        .bg-white.text-black { background-color: #ffffff !important; color: #000000 !important; }  
      `}} />

      <Navigation />

      {/* Hero Section */}  
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-black">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://cdn.marblism.com/mPwPaCBHn3r.webp"   
            alt="Luxury Villa Entrance"   
            className="w-full h-full object-cover opacity-70"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />  
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center">  
          <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-8 !text-white">  
            Travel, <span className="text-[#d4af37]">Perfected.</span>  
          </h1>  
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed !text-white">  
            We apply global leverage and deep industry relationships to ensure your time is never wasted. High-value travel, managed.  
          </p>  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">  
            <a href="/concierge" className="px-10 py-5 bg-[#d4af37] text-black font-semibold hover:bg-[#b8952d] transition-all flex items-center gap-2">  
              Begin Inquiry <ArrowRight className="w-4 h-4" />  
            </a>  
            <a href="/perspective" className="px-10 py-5 border border-zinc-700 hover:bg-zinc-900 transition-all !text-white">  
              The Perspective  
            </a>  
          </div>  
        </div>  
      </section>

      {/* Operational Leverage Section */}  
      <section className="py-32 px-6 border-y border-zinc-900 bg-[#0a0a0a]">  
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">  
          <div className="space-y-6 group">  
            <div className="w-12 h-12 flex items-center justify-center border border-[#d4af37]/30 group-hover:border-[#d4af37] transition-colors">  
              <ShieldCheck className="w-6 h-6 text-[#d4af37]" />  
            </div>  
            <h3 className="text-2xl font-light tracking-wide !text-white">Preferred Status</h3>  
            <p className="text-zinc-400 leading-relaxed text-lg !text-white font-light">  
              Through our Fora Travel and Virtuoso affiliations, our clients move to the top of the list for upgrades, late check-outs, and private amenities.  
            </p>  
          </div>  
          <div className="space-y-6 group">  
            <div className="w-12 h-12 flex items-center justify-center border border-[#d4af37]/30 group-hover:border-[#d4af37] transition-colors">  
              <Globe className="w-6 h-6 text-[#d4af37]" />  
            </div>  
            <h3 className="text-2xl font-light tracking-wide !text-white">Global Leverage</h3>  
            <p className="text-zinc-400 leading-relaxed text-lg !text-white font-light">  
              Our network spans the world's most elite hospitality pillars. We have direct lines to general managers, not reservation desks.  
            </p>  
          </div>  
          <div className="space-y-6 group">  
            <div className="w-12 h-12 flex items-center justify-center border border-[#d4af37]/30 group-hover:border-[#d4af37] transition-colors">  
              <Zap className="w-6 h-6 text-[#d4af37]" />  
            </div>  
            <h3 className="text-2xl font-light tracking-wide !text-white">Time Preservation</h3>  
            <p className="text-zinc-400 leading-relaxed text-lg !text-white font-light">  
              We handle the friction of logistics so you can focus on the experience. No theater—just professional operational excellence.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* The Partner Grid */}  
      <section className="py-32 px-6 bg-black">  
        <div className="max-w-7xl mx-auto">  
          <div className="text-center mb-20">  
            <h2 className="text-xs uppercase tracking-[0.4em] text-[#d4af37] mb-6">Strategic Alliances</h2>  
            <h3 className="text-4xl md:text-5xl font-light !text-white">Unmatched Access.</h3>  
          </div>  
            
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-zinc-900 border border-zinc-900">  
            {partners.map((partner) => (  
              <div key={partner} className="bg-black p-10 flex items-center justify-center text-center group hover:bg-[#0a0a0a] transition-all">  
                <span className="text-zinc-500 group-hover:text-[#d4af37] transition-colors text-xs font-medium uppercase tracking-[0.2em]">  
                  {partner}  
                </span>  
              </div>  
            ))}  
          </div>  
            
          <div className="mt-20 flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale contrast-125">  
             <div className="text-2xl font-serif italic text-zinc-400 tracking-widest">VIRTUOSO</div>  
             <div className="text-2xl font-serif italic text-zinc-400 tracking-widest">FORA TRAVEL</div>  
             <div className="text-2xl font-serif italic text-zinc-400 tracking-widest">ILTM</div>  
          </div>  
        </div>  
      </section>

      {/* Final CTA */}  
      <section className="py-40 px-6 bg-[#050505] relative border-t border-zinc-900">  
        <div className="max-w-3xl mx-auto text-center">  
          <Award className="w-16 h-16 text-[#d4af37] mx-auto mb-10" />  
          <h2 className="text-4xl md:text-6xl font-light mb-8 !text-white tracking-tight">The next era of travel.</h2>  
          <p className="text-zinc-400 text-xl mb-14 !text-white font-light leading-relaxed">  
            We are currently accepting new clients for the 2026-2027 season. Simple, professional, and uncompromising service.  
          </p>  
          <a href="/concierge" className="inline-block px-14 py-6 bg-white text-black font-bold hover:bg-[#d4af37] hover:text-black transition-all uppercase tracking-widest text-sm">  
            Contact the Desk  
          </a>  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
