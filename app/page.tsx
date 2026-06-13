import Navigation from '@/components/Navigation';

export default function Home() {  
return (  
<main className="min-h-screen bg-black text-stone-400 selection:bg-[#C5A059]/30 font-sans selection:text-white">  
{/* Unified Hushed Brass Navigation */}  
<Navigation />
  return (  
    <main className="min-h-screen bg-black text-stone-400 selection:bg-[#C5A059]/30 font-sans selection:text-white">  
      {/* Global Navigation */}  
      <Navigation />

{/* HERO SECTION */}  
<section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">  
  <div className="absolute inset-0 z-0">  
    <img   
      src="https://images.unsplash.com/photo-1600607687940-4e524cb35a36?q=80&w=2000&auto=format&fit=crop"   
      alt="Modern Arrival"   
      className="w-full h-full object-cover opacity-40 grayscale brightness-[0.4]"  
    />  
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/90" />  
  </div>
      {/* HERO SECTION: THE ARRIVAL */}  
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">  
        <div className="absolute inset-0 z-0">  
          <img   
            src="https://cdn.marblism.com/_IN7n41pw_2.webp"   
            alt="Modern Luxury Arrival"   
            className="w-full h-full object-cover grayscale-[30%] brightness-[0.45]"  
          />  
          {/* Layered Shadow Gradients */}  
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/80" />  
          <div className="absolute inset-0 bg-black/20" />  
        </div>

  <div className="relative z-10 space-y-12 max-w-6xl">  
    <div className="space-y-6">  
      <span className="text-[#C5A059]/70 uppercase tracking-[0.7em] text-[10px] md:text-xs block font-medium">  
        Arrival & Overview  
      </span>  
      <h1 className="text-6xl md:text-[9vw] font-serif text-white italic tracking-tighter leading-[0.8] drop-shadow-2xl">  
        Inaccessible <br />  
        <span className="text-[#C5A059] font-serif opacity-90">by Design.</span>  
      </h1>  
    </div>  
      
    <p className="text-xl md:text-2xl text-stone-500 font-serif italic max-w-2xl mx-auto leading-relaxed">  
      "The ultimate luxury isn't access. It is the ability to be inaccessible."  
    </p>
        <div className="relative z-10 space-y-12 max-w-6xl">  
          <div className="space-y-6">  
            <span className="text-[#C5A059]/60 uppercase tracking-[0.8em] text-[10px] md:text-xs block font-medium animate-fade-in">  
              Arrival & Overview  
            </span>  
            <h1 className="text-6xl md:text-[9vw] font-serif text-white italic tracking-tighter leading-[0.8] drop-shadow-2xl">  
              Inaccessible <br />  
              <span className="text-[#C5A059] font-serif opacity-90">by Design.</span>  
            </h1>  
          </div>  
            
          <p className="text-xl md:text-2xl text-stone-500 font-serif italic max-w-2xl mx-auto leading-relaxed opacity-90">  
            "The ultimate luxury isn't access. It is the ability to be inaccessible."  
          </p>

    <div className="pt-10">  
      <a href="/inquiry" className="group relative inline-block px-14 py-6 border border-[#C5A059]/30 text-[#C5A059] text-[11px] uppercase tracking-[0.5em] transition-all duration-700 hover:bg-white hover:text-black font-bold">  
        Secure Your Perspective  
      </a>  
    </div>  
  </div>  
    
  {/* Muted Brass Scroll Indicator */}  
  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30">  
     <div className="flex flex-col items-center gap-4">  
       <span className="text-[9px] uppercase tracking-[0.4em] font-sans text-[#C5A059]/60">Enter</span>  
       <div className="w-px h-16 bg-gradient-to-b from-[#C5A059]/40 to-transparent"></div>  
     </div>  
  </div>  
</section>
          <div className="pt-10">  
            <a href="/inquiry" className="group relative inline-block px-14 py-6 border border-[#C5A059]/30 text-[#C5A059] text-[11px] uppercase tracking-[0.5em] transition-all duration-700 hover:bg-white hover:text-black font-bold">  
              Secure Your Perspective  
            </a>  
          </div>  
        </div>

{/* THE ELITE LEDGER */}  
<section className="max-w-7xl mx-auto px-6 py-56">  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">  
    <div className="space-y-14">  
      <div className="space-y-4">  
        <span className="text-[#C5A059]/40 uppercase tracking-[0.5em] text-[10px] font-sans font-semibold">The Manifest</span>  
        <h2 className="text-5xl md:text-8xl font-serif text-white italic leading-[0.9]">The Elite Ledger</h2>  
      </div>  
      <p className="text-stone-500 text-2xl leading-relaxed font-serif italic border-l border-[#C5A059]/10 pl-12 py-2">  
        A private registry of the world’s most secluded estates and silent vessels. Curated for those who value the return on stillness.  
      </p>  
      <div className="pt-6">  
         <a href="/archive" className="group text-[#C5A059]/80 text-xs uppercase tracking-[0.3em] inline-flex items-center gap-8 hover:text-white transition-all font-sans font-bold">  
           Review the Dossiers  
           <span className="h-px w-16 bg-[#C5A059]/20 group-hover:w-24 transition-all duration-700 group-hover:bg-[#C5A059]"></span>  
         </a>  
      </div>  
    </div>  
      
    <div className="relative group">  
      <div className="aspect-[4/5] bg-[#0a0a0a] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-[1500ms] ease-out shadow-2xl">  
         <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200" className="object-cover w-full h-full opacity-40 group-hover:opacity-80 transition-all duration-[2000ms]" alt="Elite Registry" />  
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />  
      </div>  
      <div className="absolute -bottom-12 -left-12 aspect-square w-72 bg-black border border-[#C5A059]/5 p-10 hidden xl:flex flex-col justify-between shadow-2xl z-20 transition-transform group-hover:-translate-y-4 duration-1000">  
         <span className="text-[#C5A059]/30 font-mono text-[10px] tracking-tighter">REF: LDR-VXV-001</span>  
         <div className="space-y-3">  
           <p className="text-sm italic text-stone-300 font-serif tracking-wide">Holding: Private Atoll</p>  
           <div className="h-px w-full bg-gradient-to-r from-[#C5A059]/20 to-transparent" />  
           <p className="text-[9px] uppercase tracking-widest text-[#C5A059]/40 font-sans">Availability: Restricted</p>  
         </div>  
      </div>  
    </div>  
  </div>  
</section>
        {/* Muted Brass Scroll Indicator */}  
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30">  
           <div className="flex flex-col items-center gap-4">  
             <span className="text-[9px] uppercase tracking-[0.4em] font-sans text-[#C5A059]/60">Explore</span>  
             <div className="w-px h-16 bg-gradient-to-b from-[#C5A059]/40 to-transparent"></div>  
           </div>  
        </div>  
      </section>

{/* THE SILENT ROI */}  
<section className="bg-gradient-to-b from-black to-[#050505] py-64 px-6 border-y border-[#C5A059]/5">  
  <div className="max-w-4xl mx-auto text-center space-y-24">  
    <div className="space-y-6">  
      <h3 className="text-[#C5A059]/30 uppercase tracking-[0.7em] text-[10px] font-sans font-bold">The Mandate</h3>  
      <h2 className="text-6xl md:text-[8vw] font-serif text-white italic leading-none">  
        The Silent ROI  
      </h2>  
    </div>  
    <p className="text-stone-400 text-2xl md:text-5xl font-serif italic leading-[1.3] font-light px-4">  
      "The invisible mechanics of a journey that moves without a sound."  
    </p>  
    <div className="pt-10">  
       <a href="/perspective" className="inline-block px-16 py-7 border border-[#C5A059]/20 text-[#C5A059]/80 text-[11px] uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-700 font-bold">  
         Our Perspective  
       </a>  
    </div>  
  </div>  
</section>
      {/* THE ELITE LEDGER SECTION */}  
      <section className="max-w-7xl mx-auto px-6 py-56">  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">  
          <div className="space-y-14">  
            <div className="space-y-4">  
              <span className="text-[#C5A059]/40 uppercase tracking-[0.5em] text-[10px] font-sans font-semibold">The Manifest</span>  
              <h2 className="text-5xl md:text-8xl font-serif text-white italic leading-[0.9]">The Elite Ledger</h2>  
            </div>  
            <p className="text-stone-500 text-2xl leading-relaxed font-serif italic border-l border-[#C5A059]/10 pl-12 py-2">  
              A private registry of the world’s most secluded estates and silent vessels. Curated for those who value the return on stillness.  
            </p>  
            <div className="pt-6">  
               <a href="/archive" className="group text-[#C5A059]/80 text-xs uppercase tracking-[0.3em] inline-flex items-center gap-8 hover:text-white transition-all font-sans font-bold">  
                 Review the Dossiers  
                 <span className="h-px w-16 bg-[#C5A059]/20 group-hover:w-24 transition-all duration-700 group-hover:bg-[#C5A059]"></span>  
               </a>  
            </div>  
          </div>  
            
          <div className="relative group">  
            <div className="aspect-[4/5] bg-[#0a0a0a] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-[1500ms] ease-out shadow-2xl">  
               <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200" className="object-cover w-full h-full opacity-40 group-hover:opacity-80 transition-all duration-[2000ms]" alt="Elite Registry" />  
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />  
            </div>  
            <div className="absolute -bottom-12 -left-12 aspect-square w-72 bg-black border border-[#C5A059]/5 p-10 hidden xl:flex flex-col justify-between shadow-2xl z-20 transition-transform group-hover:-translate-y-4 duration-1000">  
               <span className="text-[#C5A059]/30 font-mono text-[10px] tracking-tighter">REF: LDR-VXV-001</span>  
               <div className="space-y-3">  
                 <p className="text-sm italic text-stone-300 font-serif tracking-wide">Holding: Private Atoll</p>  
                 <div className="h-px w-full bg-gradient-to-r from-[#C5A059]/20 to-transparent" />  
                 <p className="text-[9px] uppercase tracking-widest text-[#C5A059]/40 font-sans">Availability: Restricted</p>  
               </div>  
            </div>  
          </div>  
        </div>  
      </section>

{/* FOOTER */}  
<footer className="py-24 border-t border-white/5 px-6 bg-black">  
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 opacity-80">  
    <div className="space-y-10">  
      <h4 className="text-white font-serif italic text-4xl">NexVoyage Collective</h4>  
      <p className="text-[11px] uppercase tracking-[0.6em] text-neutral-800 leading-loose">  
        Established MMXXVI <br />   
        Exclusive Website Engine  
      </p>  
    </div>  
      
    <div className="space-y-10">  
      <span className="text-[#C5A059]/30 text-[10px] uppercase tracking-[0.5em] font-sans font-bold">Registry Status</span>  
      <div className="space-y-6">  
        <div className="flex items-center gap-4">  
          <div className="w-1.5 h-1.5 bg-[#C5A059]/60 rounded-full"></div>  
          <span className="text-[11px] uppercase tracking-[0.4em] text-stone-300">Active Consultation</span>  
      {/* THE SILENT ROI SECTION */}  
      <section className="bg-gradient-to-b from-black to-[#050505] py-64 px-6 border-y border-[#C5A059]/5">  
        <div className="max-w-4xl mx-auto text-center space-y-24">  
          <div className="space-y-6">  
            <h3 className="text-[#C5A059]/30 uppercase tracking-[0.7em] text-[10px] font-sans font-bold">The Mandate</h3>  
            <h2 className="text-6xl md:text-[8vw] font-serif text-white italic leading-none">  
              The Silent ROI  
            </h2>  
          </div>  
          <p className="text-stone-400 text-2xl md:text-5xl font-serif italic leading-[1.3] font-light px-4">  
            "The invisible mechanics of a journey that moves without a sound."  
          </p>  
          <div className="pt-10">  
             <a href="/perspective" className="inline-block px-16 py-7 border border-[#C5A059]/20 text-[#C5A059]/80 text-[11px] uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-700 font-bold">  
               Our Perspective  
             </a>  
          </div>  
        </div>  
        <p className="text-sm text-stone-600 italic font-serif leading-relaxed">Inquiries are currently being processed for the Q3 fiscal cycle.</p>  
      </div>  
    </div>
      </section>

    <div className="space-y-10 lg:text-right">  
      <span className="text-[#C5A059]/30 text-[10px] uppercase tracking-[0.5em] font-sans font-bold">Correspondence</span>  
      <div className="space-y-6">  
        <a href="mailto:daryl.clark@fora.travel" className="block text-stone-200 hover:text-[#C5A059] transition-colors border-b border-white/5 hover:border-[#C5A059]/30 pb-2 text-base font-sans tracking-wide">  
          daryl.clark@fora.travel  
        </a>  
      </div>  
    </div>  
  </div>  
</footer>  
</main>  
);  
      {/* FOOTER */}  
      <footer className="py-24 border-t border-white/5 px-6 bg-black">  
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 opacity-80">  
          <div className="space-y-10">  
            <h4 className="text-white font-serif italic text-4xl leading-tight">NexVoyage <br />Collective</h4>  
            <p className="text-[11px] uppercase tracking-[0.6em] text-neutral-800 leading-loose">  
              Established MMXXVI <br />   
              Exclusive Website Engine  
            </p>  
          </div>  
            
          <div className="space-y-10">  
            <span className="text-[#C5A059]/30 text-[10px] uppercase tracking-[0.5em] font-sans font-bold">Registry Status</span>  
            <div className="space-y-6">  
              <div className="flex items-center gap-4">  
                <div className="w-1.5 h-1.5 bg-[#C5A059]/60 rounded-full"></div>  
                <span className="text-[11px] uppercase tracking-[0.4em] text-stone-300 font-sans">Active Consultation</span>  
              </div>  
              <p className="text-sm text-stone-600 italic font-serif leading-relaxed">Inquiries are currently being processed for the Q3 fiscal cycle.</p>  
            </div>  
          </div>

          <div className="space-y-10 lg:text-right">  
            <span className="text-[#C5A059]/30 text-[10px] uppercase tracking-[0.5em] font-sans font-bold">Correspondence</span>  
            <div className="space-y-6">  
              <a href="mailto:daryl.clark@fora.travel" className="block text-stone-200 hover:text-[#C5A059] transition-colors border-b border-white/5 hover:border-[#C5A059]/30 pb-2 text-base font-sans tracking-wide">  
                daryl.clark@fora.travel  
              </a>  
              <div className="flex gap-10 lg:justify-end text-[11px] uppercase tracking-[0.4em] text-neutral-600 font-sans font-bold">  
                <a href="#" className="hover:text-white transition-colors">IG</a>  
                <a href="#" className="hover:text-white transition-colors">LI</a>  
              </div>  
            </div>  
          </div>  
        </div>  
      </footer>  
    </main>  
  );  
}  
