import React from 'react';  
import Link from 'next/link';

export default function HomePage() {  
  return (  
    <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">  
      {/* Background Ambience */}  
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#050505_100%)] pointer-events-none" />

      <section className="relative z-10 space-y-12">  
        <header className="space-y-4">  
          <span className="font-sans text-[0.6rem] uppercase tracking-[0.6em] text-[#d4af37] opacity-60">  
            London — Tokyo — New York  
          </span>  
          <h1 className="font-serif text-6xl md:text-9xl text-[#f0f0f0] uppercase tracking-[0.2em] font-light leading-none">  
            NexVoyage  
          </h1>  
          <h2 className="font-serif text-2xl md:text-4xl text-[#d4af37] uppercase tracking-[0.5em] font-light opacity-80">  
            Collective  
          </h2>  
        </header>

        <div className="h-[1px] w-24 bg-[#d4af37]/30 mx-auto" />

        <p className="max-w-md mx-auto font-sans text-[0.7rem] uppercase tracking-[0.3em] text-white/40 leading-relaxed font-extralight">  
          The website engine for the world's most refined travel experiences.   
          Seamless transitions. Secluded sanctuaries.  
        </p>

        {/* Navigation Portal */}  
        <nav className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-12">  
          <Link href="/mandate" className="group">  
            <span className="block font-sans text-[0.65rem] uppercase tracking-[0.4em] text-white/40 group-hover:text-[#d4af37] transition-colors duration-500">01. The Mandate</span>  
          </Link>  
          <Link href="/manifest" className="group">  
            <span className="block font-sans text-[0.65rem] uppercase tracking-[0.4em] text-white/40 group-hover:text-[#d4af37] transition-colors duration-500">02. The Manifest</span>  
          </Link>  
          <Link href="/reserve" className="group">  
            <span className="block font-sans text-[0.65rem] uppercase tracking-[0.4em] text-white/40 group-hover:text-[#d4af37] transition-colors duration-500">03. The Reserve</span>  
          </Link>  
        </nav>  
      </section>

      {/* Footer Element */}  
      <footer className="absolute bottom-12 w-full text-center">  
        <p className="font-sans text-[0.5rem] uppercase tracking-[0.8em] text-white/20">  
          Beginning the Dialogue  
        </p>  
      </footer>  
    </main>  
  );  
}  
