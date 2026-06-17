import {   
  Navigation   
} from '@/components/Navigation';  
import {   
  ArrowRight,   
  MapPin,   
  Globe,   
  ShieldCheck,   
  Award   
} from 'lucide-react';

export default function HomePage() {  
  return (  
    <div className="bg-black text-white min-h-screen selection:bg-[#d4af37] selection:text-black">  
      {/* GLOBAL CSS OVERRIDE */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        * { background-color: transparent !important; }  
        html, body, #__next, main, .bg-black { background-color: #000000 !important; }  
        h1, h2, h3, p, span, li, div { color: #ffffff !important; }  
        .text-brass { color: #d4af37 !important; }  
        .border-brass { border-color: #d4af37 !important; }  
      `}} />

      <Navigation />

      {/* HERO - REFINED & DIRECT */}  
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/5">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://cdn.marblism.com/mPwPaCBHn3r.webp"   
            className="w-full h-full object-cover opacity-40 grayscale"  
            alt="Luxury Villa"  
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>  
        </div>  
          
        <div className="relative z-10 text-center px-6 max-w-5xl">  
          <p className="text-brass uppercase tracking-[0.5em] text-[10px] font-bold mb-8">NexVoyage Collective</p>  
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-10 leading-[0.9]">  
            The Art of <br/>  
            <span className="italic font-serif text-brass">Frictionless Arrival.</span>  
          </h1>  
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-80 leading-relaxed">  
            A private travel collective for high-net-worth individuals. <br/>  
            Expertly curated sanctuaries. Unrivaled global leverage.  
          </p>  
            
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">  
            <button className="px-12 py-4 bg-brass text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-all">  
              Begin Your Journey  
            </button>  
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40">Or call the desk: +1.555.VOYAGE</span>  
          </div>  
        </div>  
      </section>

      {/* THE PROOF OF LEVERAGE (New Section) */}  
      <section className="py-24 border-b border-white/10 bg-zinc-950/30">  
        <div className="max-w-7xl mx-auto px-6">  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">  
            <div className="space-y-4">  
              <Globe className="text-brass w-8 h-8 mb-4" />  
              <h3 className="text-xl font-medium">Global Network</h3>  
              <p className="opacity-60 font-light">Direct access to 2,000+ vetted luxury properties through our premier Virtuoso & Fora partnerships.</p>  
            </div>  
            <div className="space-y-4">  
              <Award className="text-brass w-8 h-8 mb-4" />  
              <h3 className="text-xl font-medium">Preferred Status</h3>  
              <p className="opacity-60 font-light">Automatic upgrades, daily breakfast, and $100+ resort credits at every major luxury brand worldwide.</p>  
            </div>  
            <div className="space-y-4">  
              <ShieldCheck className="text-brass w-8 h-8 mb-4" />  
              <h3 className="text-xl font-medium">Proactive Support</h3>  
              <p className="opacity-60 font-light">From 24/7 flight monitoring to private chauffeur logistics—we manage the friction, you experience the destination.</p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* THE SANCTUARY COLLECTION (Fixed Gatekeeping) */}  
      <section className="py-32 px-6 max-w-7xl mx-auto">  
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">  
          <div>  
            <h2 className="text-brass uppercase tracking-[0.4em] text-[10px] font-bold mb-4">The Archive</h2>  
            <h3 className="text-5xl font-light tracking-tight italic font-serif">Vetted Sanctuaries</h3>  
          </div>  
          <p className="max-w-md opacity-60 font-light text-right md:text-left">  
            A live catalog of properties where our collective maintains established relationships and guaranteed guest perks.  
          </p>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">  
          {/* Example Item with Substance */}  
          <div className="group cursor-pointer">  
            <div className="relative aspect-[4/5] overflow-hidden mb-6">  
              <img src="https://cdn.marblism.com/jyV_xaai_p4.webp" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Aman Venice" />  
              <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 text-[10px] tracking-widest text-brass border border-brass/30">VIRTUOSO PREFERRED</div>  
            </div>  
            <h4 className="text-xl font-medium mb-2">Aman Venice, Italy</h4>  
            <p className="text-brass text-xs tracking-widest uppercase mb-4">Signature Benefit: Private Canal Entry & Room Upgrade</p>  
            <p className="opacity-60 text-sm font-light leading-relaxed">The pinnacle of Venetian grandeur. Our relationship here ensures canal-view upgrades and priority dining at the Palazzo.</p>  
          </div>

          <div className="group cursor-pointer">  
            <div className="relative aspect-[4/5] overflow-hidden mb-6">  
              <img src="https://cdn.marblism.com/DgdRhZ2LIeX.webp" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Amangiri" />  
              <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 text-[10px] tracking-widest text-brass border border-brass/30">DIRECT ACCESS</div>  
            </div>  
            <h4 className="text-xl font-medium mb-2">Amangiri, USA</h4>  
            <p className="text-brass text-xs tracking-widest uppercase mb-4">Signature Benefit: $100 Spa Credit & Late Check-out</p>  
            <p className="opacity-60 text-sm font-light leading-relaxed">Utah’s desert masterpiece. We bypass the standard booking lag to secure high-demand suites for our members.</p>  
          </div>

          <div className="group cursor-pointer">  
            <div className="relative aspect-[4/5] overflow-hidden mb-6 flex items-center justify-center border border-white/10 bg-zinc-900/50">  
              <span className="text-[10px] tracking-[0.4em] uppercase opacity-30 text-center px-12">View Full Portfolio <br/> (13 Vetted Properties)</span>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* THE HUMAN TOUCH */}  
      <section className="py-32 border-t border-white/5">  
        <div className="max-w-3xl mx-auto text-center px-6">  
          <p className="text-brass uppercase tracking-[0.4em] text-[10px] font-bold mb-8">Guest Experience</p>  
          <h2 className="text-4xl font-light mb-8">"Our goal is to be invisible until you need us to be indispensable."</h2>  
          <div className="flex items-center justify-center gap-4">  
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-brass font-serif italic text-xl">R</div>  
            <div className="text-left">  
              <p className="text-sm font-bold uppercase tracking-widest">Rachel V.</p>  
              <p className="text-[10px] opacity-50 uppercase tracking-widest">Lead Concierge</p>  
            </div>  
          </div>  
        </div>  
      </section>  
    </div>  
  );  
}  
