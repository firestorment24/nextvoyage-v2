import React from 'react';  
import Navigation from '@/components/Navigation';

export default function Home() {  
  return (  
    <>  
      <Navigation />  
      <main className="bg-[#0F0F0F] text-[#E5E5E5] overflow-x-hidden">  
        {/* Hero Section */}  
        <section className="relative min-h-screen w-full flex flex-col justify-center px-8 md:px-20">  
          <div className="max-w-4xl space-y-8">  
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#B5A48B]">  
              NexVoyage Collective  
            </p>  
            <h1 className="serif text-6xl md:text-9xl font-light tracking-tighter leading-[0.9]">  
              Quiet Luxury. <br />  
              <span className="text-[#444]">Infinite Perspective.</span>  
            </h1>  
            <p className="max-w-lg text-lg font-light text-[#888] leading-relaxed">  
              Curating elite maritime escapes and terrestrial sanctuaries for   
              those who value silence over noise.  
            </p>  
              
            <div className="pt-8">  
              <a   
                href="/inquiry"   
                className="group relative inline-block px-14 py-6 border border-[#B5A48B]/20 hover:border-[#B5A48B] transition-all duration-700"  
              >  
                <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] text-[#B5A48B] group-hover:text-[#0F0F0F] transition-colors duration-500">  
                  Secure Your Perspective  
                </span>  
                <div className="absolute inset-0 bg-[#B5A48B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />  
              </a>  
            </div>  
          </div>  
        </section>

        {/* Quote Section - Wrapped in its own Section to prevent JSX Text errors */}  
        <section className="py-32 px-8 border-t border-white/5 bg-[#0A0A0A]">  
          <div className="max-w-4xl mx-auto text-center">  
            <p className="text-2xl md:text-3xl text-[#666] font-light italic leading-relaxed serif tracking-tight">  
              &ldquo;The ultimate luxury isn&apos;t access. It is the ability to be inaccessible.&rdquo;  
            </p>  
            <div className="mt-8 h-px w-12 bg-[#B5A48B]/30 mx-auto" />  
          </div>  
        </section>

        {/* Portfolio / Archive Trigger */}  
        <section className="py-20 px-8 text-center">  
          <a href="/archive" className="text-[10px] uppercase tracking-[0.3em] text-[#444] hover:text-[#B5A48B] transition-colors">  
            Enter the Archive &mdash; Q2 2026  
          </a>  
        </section>  
      </main>  
    </>  
  );  
}  
