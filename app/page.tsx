import React from 'react';  
import Navigation from '@/components/Navigation';

export default function Home() {  
  return (  
    <>  
      <Navigation />  
      <main className="bg-[#0F0F0F] text-[#E5E5E5]">  
        {/* Hero Section */}  
        <section className="relative h-screen w-full flex flex-col justify-center px-8 md:px-20">  
          <div className="max-w-4xl space-y-6">  
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#B5A48B] animate-fade-in">  
              Travel Reimagined  
            </p>  
            <h1 className="serif text-6xl md:text-8xl font-light tracking-tighter leading-tight">  
              Quiet Luxury. <br />  
              <span className="text-[#666]">Infinite Perspective.</span>  
            </h1>  
            <p className="max-w-xl text-lg font-light text-[#BBB] leading-relaxed">  
              Curating elite expeditions and maritime escapes for those who seek   
              the horizon, without the noise.  
            </p>  
          </div>

          {/* This is where the error was happening - moving the CTA inside a container or fragment */}  
          <div className="pt-12">  
            <a   
              href="/inquiry"   
              className="group relative inline-block px-14 py-6 border border-[#B5A48B]/30 hover:border-[#B5A48B] transition-all duration-500"  
            >  
              <span className="relative z-10 text-xs uppercase tracking-[0.3em] text-[#B5A48B] group-hover:text-white transition-colors">  
                Secure Your Perspective  
              </span>  
              <div className="absolute inset-0 bg-[#B5A48B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />  
            </a>  
          </div>  
        </section>

        {/* Portfolio Preview Grid can go here */}  
      </main>  
    </>  
  );  
}  
