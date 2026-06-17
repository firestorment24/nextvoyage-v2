import {   
ShieldCheck,   
MapPin,   
Plane,   
CreditCard,   
UserCheck,  
Infinity  
} from 'lucide-react';

export default function PerspectivePage() {  
return (  
<div className="bg-black text-white min-h-screen selection:bg-[#d4af37] selection:text-black">  
  {/* NUCLEAR CSS FIX: Force transparency and white text globally */}  
  <style dangerouslySetInnerHTML={{ __html: `  
    * { background-color: transparent !important; }  
    html, body, #__next, main, .bg-black { background-color: #000000 !important; }  
    h1, h2, h3, p, span, li, div { color: #ffffff !important; }  
    .text-brass { color: #d4af37 !important; }  
    .border-brass { border-color: #d4af37 !important; }  
    .opacity-partner { opacity: 0.6; transition: opacity 0.3s; }  
    .opacity-partner:hover { opacity: 1; }  
  `}} />

  {/* HERO SECTION - PROMINENT & REFINED */}  
  <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">  
    <img   
      src="https://cdn.marblism.com/mPwPaCBHn3r.webp"   
      alt="Luxury Villa Arrival"  
      className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"  
    />  
    <div className="relative z-10 text-center px-4 max-w-5xl">  
      <div className="flex items-center justify-center gap-4 mb-8">  
        <span className="h-[1px] w-12 bg-brass opacity-50"></span>  
        <p className="text-brass uppercase tracking-[0.5em] text-[10px] font-bold">NexVoyage Collective</p>  
        <span className="h-[1px] w-12 bg-brass opacity-50"></span>  
      </div>  
        
      <h1 className="text-6xl md:text-8xl font-normal tracking-tighter mb-8 leading-[0.9]">  
        Travel, <br/>  
        <span className="italic text-brass font-serif">Perfected.</span>  
      </h1>  
        
      <p className="text-xl md:text-2xl font-normal tracking-wide max-w-3xl mx-auto opacity-100 leading-relaxed">  
        Expertise over mystery. We remove the friction of movement <br className="hidden md:block"/> to maximize the impact of your arrival.  
      </p>

      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-70">  
        <span className="text-[10px] tracking-[0.2em] uppercase font-bold border-r border-white/20 pr-8">Partnered With</span>  
        <span className="text-sm font-serif tracking-widest uppercase">Fora Travel</span>  
        <span className="text-sm font-serif tracking-widest uppercase">Virtuoso</span>  
      </div>  
    </div>  
    <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/50 to-transparent"></div>  
  </section>

  {/* PARTNERSHIP NETWORK - UNMATCHED ACCESS */}  
  <section className="py-16 border-b border-white/10">  
    <div className="max-w-7xl mx-auto px-6 text-center">  
      <p className="text-brass uppercase tracking-[0.4em] text-[10px] font-bold mb-10">UNMATCHED ACCESS. PREFERRED STATUS. GLOBAL LEVERAGE.</p>  
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">  
        {['Aman', 'Belmond', 'Singita', 'Regent', 'Explora', 'Silversea', 'Six Senses', 'Rosewood', 'One&Only'].map((partner) => (  
          <span key={partner} className="text-lg font-serif opacity-partner cursor-default">  
            {partner}  
          </span>  
        ))}  
      </div>  
    </div>  
  </section>

  {/* THE GUARDIAN LAYER */}  
  <section className="py-24 px-6 max-w-7xl mx-auto">  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">  
      <div>  
        <h2 className="text-brass uppercase tracking-[0.3em] text-sm font-bold mb-6">The Guardian Layer</h2>  
        <h3 className="text-5xl font-light mb-10 leading-[1.1]">Your Grounded <br/>Value Promise.</h3>  
        <div className="space-y-10">  
          <div className="flex gap-8">  
            <ShieldCheck className="text-brass w-10 h-10 shrink-0" />  
            <div>  
              <h4 className="text-xl font-medium mb-3 text-white">24/7 Global Flight Support</h4>  
              <p className="opacity-70 font-light text-lg leading-relaxed">Proactive monitoring and instant re-routing. We move before you even know there's a delay.</p>  
            </div>  
          </div>  
          <div className="flex gap-8">  
            <CreditCard className="text-brass w-10 h-10 shrink-0" />  
            <div>  
              <h4 className="text-xl font-medium mb-3 text-white">Virtuoso & Fora Perks</h4>  
              <p className="opacity-70 font-light text-lg leading-relaxed">Automatic upgrades, resort credits, and complimentary breakfast at the world's finest properties.</p>  
            </div>  
          </div>  
          <div className="flex gap-8">  
            <UserCheck className="text-brass w-10 h-10 shrink-0" />  
            <div>  
              <h4 className="text-xl font-medium mb-3 text-white">Private Door-to-Door Transfers</h4>  
              <p className="opacity-70 font-light text-lg leading-relaxed">Vetted chauffeurs waiting at every arrival. No queues, no friction, just seamless transition.</p>  
            </div>  
          </div>  
        </div>  
      </div>  
      <div className="relative group">  
        <img   
          src="https://cdn.marblism.com/DgdRhZ2LIeX.webp"   
          alt="Private Jet Interior"  
          className="rounded-sm border border-white/10 shadow-2xl transition-all duration-700"  
        />  
        <div className="absolute inset-0 border border-brass/30 translate-x-6 translate-y-6 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>  
      </div>  
    </div>  
  </section>

  {/* THE ROI OF RESET */}  
  <section className="py-32 px-6 text-center max-w-4xl mx-auto border-t border-white/5">  
    <div className="mb-12 flex justify-center">  
      <Infinity className="text-brass w-12 h-12 opacity-50" />  
    </div>  
    <h2 className="text-5xl font-light mb-10 italic font-serif">The ROI of Reset</h2>  
    <p className="text-2xl font-light leading-relaxed opacity-90 mb-16">  
      We don’t just book travel; we engineer the space required for your next big breakthrough.   
      <br className="hidden md:block"/>   
      The quiet before the storm. The reset before the rise.  
    </p>  
    <button className="group relative px-12 py-5 bg-transparent border border-brass text-brass overflow-hidden transition-all duration-300">  
      <span className="relative z-10 tracking-[0.3em] uppercase text-xs font-bold group-hover:text-black">Begin the Onboarding</span>  
      <div className="absolute inset-0 bg-brass translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>  
    </button>  
  </section>  
</div>  
);  
}  
