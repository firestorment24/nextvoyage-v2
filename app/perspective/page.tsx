import {   
ShieldCheck,   
MapPin,   
Plane,   
CreditCard,   
UserCheck,  
Infinity  
} from 'lucide-react';

export default function PerspectivePage() {  
const luxuryPartners = [  
  'Aman', 'Belmond', 'Singita', 'Regent Seven Seas', 'Explora Journeys',   
  'Silversea', 'Six Senses', 'Rosewood', 'One&Only', 'Four Seasons',   
  'St. Regis', 'Abercrombie & Kent', 'Orient Express', 'Scott Dunn', 'Mandarin Oriental'  
];

return (  
<div className="bg-black text-white min-h-screen selection:bg-[#d4af37] selection:text-black">  
{/* NUCLEAR CSS FIX: Force transparency and white text globally */}  
<style dangerouslySetInnerHTML={{ __html: `  
  * { background-color: transparent !important; }  
  html, body, #__next, main, .bg-black { background-color: #000000 !important; }  
  h1, h2, h3, p, span, li, div { color: #ffffff !important; }  
  .text-brass { color: #d4af37 !important; }  
  .border-brass { border-color: #d4af37 !important; }  
  .opacity-partner { opacity: 0.5; transition: all 0.4s; }  
  .opacity-partner:hover { opacity: 1; color: #d4af37 !important; transform: translateY(-2px); }  
`}} />

{/* HERO SECTION - MAXIMUM IMPACT */}  
<section className="relative h-[90vh] flex items-center justify-center overflow-hidden">  
  <img   
    src="https://cdn.marblism.com/mPwPaCBHn3r.webp"   
    alt="Luxury Villa Arrival"  
    className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"  
  />  
  <div className="relative z-10 text-center px-4 max-w-5xl">  
    <div className="flex items-center justify-center gap-4 mb-10">  
      <span className="h-[1px] w-16 bg-brass opacity-50"></span>  
      <p className="text-brass uppercase tracking-[0.6em] text-[11px] font-bold">NexVoyage Collective</p>  
      <span className="h-[1px] w-16 bg-brass opacity-50"></span>  
    </div>  
      
    <h1 className="text-7xl md:text-9xl font-medium tracking-tighter mb-10 leading-[0.85]">  
      Travel, <br/>  
      <span className="italic text-brass font-serif font-light">Perfected.</span>  
    </h1>  
      
    <p className="text-2xl md:text-3xl font-light tracking-wide max-w-4xl mx-auto opacity-100 leading-relaxed mb-12">  
      Expertise over mystery. We remove the friction of movement <br className="hidden md:block"/> to maximize the impact of your arrival.  
    </p>

    <div className="flex flex-wrap justify-center items-center gap-12 py-8 border-t border-white/10 max-w-2xl mx-auto">  
      <div className="flex flex-col items-center">  
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-2">Network Partner</span>  
        <span className="text-lg font-serif tracking-widest uppercase text-white">Fora Travel</span>  
      </div>  
      <div className="h-8 w-[1px] bg-white/20"></div>  
      <div className="flex flex-col items-center">  
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-40 mb-2">Preferred Status</span>  
        <span className="text-lg font-serif tracking-widest uppercase text-white">Virtuoso</span>  
      </div>  
    </div>  
  </div>  
  <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/60 to-transparent"></div>  
</section>

{/* EXPANDED PARTNERSHIP NETWORK */}  
<section className="py-24 border-b border-white/10 relative overflow-hidden">  
  <div className="max-w-7xl mx-auto px-6 text-center">  
    <h2 className="text-brass uppercase tracking-[0.5em] text-[10px] font-bold mb-16">  
      UNMATCHED ACCESS. PREFERRED STATUS. GLOBAL LEVERAGE.  
    </h2>  
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 items-center">  
      {luxuryPartners.map((partner) => (  
        <span key={partner} className="text-base font-serif opacity-partner cursor-default tracking-wider">  
          {partner}  
        </span>  
      ))}  
    </div>  
  </div>  
</section>

{/* THE GUARDIAN LAYER */}  
<section className="py-32 px-6 max-w-7xl mx-auto">  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">  
    <div>  
      <h2 className="text-brass uppercase tracking-[0.3em] text-sm font-bold mb-8">The Guardian Layer</h2>  
      <h3 className="text-6xl font-light mb-12 leading-[1.05] tracking-tight">Your Grounded <br/>Value Promise.</h3>  
      <div className="space-y-12">  
        <div className="flex gap-8 group">  
          <div className="p-4 border border-brass/20 rounded-full group-hover:border-brass/100 transition-colors">  
            <ShieldCheck className="text-brass w-8 h-8 shrink-0" />  
          </div>  
          <div>  
            <h4 className="text-2xl font-medium mb-3 text-white">24/7 Global Flight Support</h4>  
            <p className="opacity-60 font-light text-lg leading-relaxed">Proactive monitoring and instant re-routing. We move before you even know there's a delay.</p>  
          </div>  
        </div>  
        <div className="flex gap-8 group">  
          <div className="p-4 border border-brass/20 rounded-full group-hover:border-brass/100 transition-colors">  
            <CreditCard className="text-brass w-8 h-8 shrink-0" />  
          </div>  
          <div>  
            <h4 className="text-2xl font-medium mb-3 text-white">Preferred Perks</h4>  
            <p className="opacity-60 font-light text-lg leading-relaxed">Automatic upgrades, resort credits, and complimentary breakfast at the world's finest properties.</p>  
          </div>  
        </div>  
        <div className="flex gap-8 group">  
          <div className="p-4 border border-brass/20 rounded-full group-hover:border-brass/100 transition-colors">  
            <UserCheck className="text-brass w-8 h-8 shrink-0" />  
          </div>  
          <div>  
            <h4 className="text-2xl font-medium mb-3 text-white">Private Logistics</h4>  
            <p className="opacity-60 font-light text-lg leading-relaxed">Vetted chauffeurs waiting at every arrival. No queues, no friction, just seamless transition.</p>  
          </div>  
        </div>  
      </div>  
    </div>  
    <div className="relative">  
      <div className="overflow-hidden rounded-sm border border-white/10 shadow-2xl">  
        <img   
          src="https://cdn.marblism.com/DgdRhZ2LIeX.webp"   
          alt="Private Jet Interior"  
          className="w-full grayscale hover:grayscale-0 transition-all duration-1000 scale-100 hover:scale-105"  
        />  
      </div>  
      <div className="absolute inset-0 border border-brass/30 translate-x-8 translate-y-8 -z-10"></div>  
    </div>  
  </div>  
</section>

{/* THE ROI OF RESET */}  
<section className="py-40 px-6 text-center max-w-5xl mx-auto border-t border-white/5 relative">  
  <div className="mb-16 flex justify-center">  
    <div className="relative">  
      <Infinity className="text-brass w-16 h-16 opacity-30 animate-pulse" />  
      <div className="absolute inset-0 blur-2xl bg-brass/10"></div>  
    </div>  
  </div>  
  <h2 className="text-6xl font-light mb-12 italic font-serif tracking-tight">The ROI of Reset</h2>  
  <p className="text-3xl font-light leading-relaxed opacity-90 mb-20 max-w-4xl mx-auto">  
    We don’t just book travel; we engineer the space required for your next big breakthrough.   
    <span className="block mt-4 text-brass/80 italic">The quiet before the storm. The reset before the rise.</span>  
  </p>  
  <button className="group relative px-16 py-6 bg-transparent border border-brass text-brass overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">  
    <span className="relative z-10 tracking-[0.4em] uppercase text-sm font-bold group-hover:text-black">Begin the Onboarding</span>  
    <div className="absolute inset-0 bg-brass translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>  
  </button>  
</section>  
</div>  
);  
}  
