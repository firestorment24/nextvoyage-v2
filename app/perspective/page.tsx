import {   
ShieldCheck,   
Clock,   
MapPin,   
Plane,   
CreditCard,   
UserCheck   
} from 'lucide-react';

export default function PerspectivePage() {  
return (  
  <div className="bg-black text-white min-h-screen selection:bg-[#d4af37] selection:text-black">  
    {/* NUCLEAR CSS FIX: Force transparency and white text globally on this page */}  
    <style dangerouslySetInnerHTML={{ __html: `  
      * { background-color: transparent !important; }  
      html, body, #__next, main, .bg-black { background-color: #000000 !important; }  
      h1, h2, h3, p, span, li { color: #ffffff !important; }  
      .text-brass { color: #d4af37 !important; }  
      .border-brass { border-color: #d4af37 !important; }  
    `}} />

    {/* HERO SECTION - CLEAN IMAGE */}  
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">  
      <img   
        src="https://cdn.marblism.com/mPwPaCBHn3r.webp"   
        alt="Luxury Villa Arrival"  
        className="absolute inset-0 w-full h-full object-cover opacity-70"  
      />  
      <div className="relative z-10 text-center px-4 max-w-4xl">  
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">  
          Travel, <span className="italic text-brass font-serif">Perfected.</span>  
        </h1>  
        <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto opacity-90">  
          Expertise over mystery. Frictionless luxury for the modern traveler.  
        </p>  
      </div>  
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>  
    </section>

    {/* THE GUARDIAN LAYER */}  
    <section className="py-24 px-6 max-w-7xl mx-auto">  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">  
        <div>  
          <h2 className="text-brass uppercase tracking-[0.3em] text-sm font-bold mb-4">The Guardian Layer</h2>  
          <h3 className="text-4xl font-light mb-8 leading-tight">Your Grounded <br/>Value Promise.</h3>  
          <div className="space-y-8">  
            <div className="flex gap-6">  
              <ShieldCheck className="text-brass w-8 h-8 shrink-0" />  
              <div>  
                <h4 className="text-lg font-medium mb-2">24/7 Global Flight Support</h4>  
                <p className="opacity-70 font-light">Proactive monitoring and instant re-routing. We move before you even know there's a delay.</p>  
              </div>  
            </div>  
            <div className="flex gap-6">  
              <CreditCard className="text-brass w-8 h-8 shrink-0" />  
              <div>  
                <h4 className="text-lg font-medium mb-2">Virtuoso & Fora Perks</h4>  
                <p className="opacity-70 font-light">Automatic upgrades, resort credits, and complimentary breakfast at the world's finest properties.</p>  
              </div>  
            </div>  
            <div className="flex gap-6">  
              <UserCheck className="text-brass w-8 h-8 shrink-0" />  
              <div>  
                <h4 className="text-lg font-medium mb-2">Private Door-to-Door Transfers</h4>  
                <p className="opacity-70 font-light">Vetted chauffeurs waiting at every arrival. No queues, no friction, just seamless transition.</p>  
              </div>  
            </div>  
          </div>  
        </div>  
        <div className="relative group">  
          <img   
            src="https://cdn.marblism.com/DgdRhZ2LIeX.webp"   
            alt="Private Jet Interior"  
            className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"  
          />  
          <div className="absolute inset-0 border border-brass/20 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>  
        </div>  
      </div>  
    </section>

    {/* ELITE PARTNERS */}  
    <section className="py-20 border-y border-white/10 bg-zinc-950/50">  
      <div className="max-w-7xl mx-auto px-6 text-center">  
        <p className="text-brass uppercase tracking-[0.4em] text-[10px] font-bold mb-12">The Ecosystem of Excellence</p>  
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale contrast-125">  
          <span className="text-xl font-serif">Aman</span>  
          <span className="text-xl font-serif">Belmond</span>  
          <span className="text-xl font-serif">Virtuoso</span>  
          <span className="text-xl font-serif">Fora Travel</span>  
          <span className="text-xl font-serif">Tauck</span>  
          <span className="text-xl font-serif">Four Seasons</span>  
        </div>  
      </div>  
    </section>

    {/* THE ROI OF RESET */}  
    <section className="py-32 px-6 text-center max-w-3xl mx-auto">  
      <h2 className="text-4xl font-light mb-8 italic font-serif">The ROI of Reset</h2>  
      <p className="text-xl font-light leading-relaxed opacity-80">  
        We don’t just book travel; we engineer the space required for your next big breakthrough. By removing the friction of movement, we maximize the impact of your arrival.  
      </p>  
      <button className="mt-12 px-10 py-4 border border-brass text-brass hover:bg-brass hover:text-black transition-all tracking-widest uppercase text-xs font-bold">  
        Begin the Onboarding  
      </button>  
    </section>  
  </div>  
);  
}  
