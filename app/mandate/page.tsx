import React from 'react';  
import Link from 'next/link';

export default function MandatePage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#D4AF37] selection:text-black">  
      {/* Hero Section */}  
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">  
        <img  
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80"  
          alt="NexVoyage Mandate"  
          className="absolute inset-0 w-full h-full object-cover opacity-45"  
          fetchPriority="high"  
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0A0A0A]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mt-12">  
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-sans">  
            The Philosophy  
          </span>

          <h1 className="text-[#D4AF37] text-4xl md:text-7xl font-light tracking-tight mt-4 mb-6">  
            The Mandate  
          </h1>

          <p className="text-white/70 text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto font-sans">  
            We curate distinctive places and journeys for travelers who value  
            discretion, thoughtful access, and seamless execution.  
          </p>  
        </div>  
      </section>

      {/* Opening Statement */}  
      <section className="py-24 px-6 max-w-4xl mx-auto text-center border-b border-white/10">  
        <span className="text-white/30 text-5xl font-serif leading-none block mb-6">  
          “  
        </span>

        <blockquote className="text-white/80 text-xl md:text-2xl font-light leading-relaxed italic mb-8">  
          True luxury is the absence of friction. It is knowing that every  
          detail has been accounted for before you even thought to ask, and  
          that your privacy should remain a central consideration at every  
          stage of the journey.  
        </blockquote>

        <div className="h-px w-12 bg-[#D4AF37]/50 mx-auto mb-4" />

        <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-sans font-semibold">  
          Daryl Clark  
        </span>

        <span className="block text-white/30 text-[10px] uppercase tracking-widest mt-1 font-sans">  
          Founder &amp; Principal  
        </span>  
      </section>

      {/* Core Tenets */}  
      <section className="py-28 px-6 max-w-6xl mx-auto space-y-32">  
        {/* Tenet 01 */}  
        <div className="grid md:grid-cols-2 gap-12 items-center">  
          <div className="space-y-6">  
            <span className="text-white/30 text-xs font-mono uppercase tracking-[0.3em]">  
              01 / Doctrine  
            </span>

            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">  
              Discretion &amp; Privacy-Conscious Routing  
            </h2>

            <p className="text-white/60 text-sm md:text-base leading-relaxed font-sans font-light">  
              In an age of hyper-exposure, privacy is a central consideration.  
              We work within appropriate confidentiality frameworks,  
              coordinating private aviation, ground transport, and specialized  
              arrivals while minimizing unnecessary exposure of client  
              information across the travel ecosystem. Your itinerary remains  
              your own.  
            </p>  
          </div>

          <div className="relative aspect-[4/3] overflow-hidden border border-white/10">  
            <img  
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"  
              alt="Discretion and privacy-conscious routing"  
              className="absolute inset-0 w-full h-full object-cover opacity-70 hover:scale-105 transition-transform duration-700"  
              loading="lazy"  
            />  
          </div>  
        </div>

        {/* Tenet 02 */}  
        <div className="grid md:grid-cols-2 gap-12 items-center">  
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10 order-2 md:order-1">  
            <img  
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80"  
              alt="Unlisted estates"  
              className="absolute inset-0 w-full h-full object-cover opacity-70 hover:scale-105 transition-transform duration-700"  
              loading="lazy"  
            />  
          </div>

          <div className="space-y-6 order-1 md:order-2">  
            <span className="text-white/30 text-xs font-mono uppercase tracking-[0.3em]">  
              02 / Doctrine  
            </span>

            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">  
              Unlisted Estates &amp; Off-Market Access  
            </h2>

            <p className="text-white/60 text-sm md:text-base leading-relaxed font-sans font-light">  
              Built on decades of executive leadership and complex logistics,  
              our work draws on relationships with property owners, private  
              offices, and estate representatives to identify opportunities  
              beyond standard public inventory. We identify properties and  
              arrangements that may not be available through standard booking  
              channels.  
            </p>  
          </div>  
        </div>

        {/* Tenet 03 */}  
        <div className="grid md:grid-cols-2 gap-12 items-center">  
          <div className="space-y-6">  
            <span className="text-white/30 text-xs font-mono uppercase tracking-[0.3em]">  
              03 / Doctrine  
            </span>

            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">  
              Strict Roster Caps &amp; Dedicated Bandwidth  
            </h2>

            <p className="text-white/60 text-sm md:text-base leading-relaxed font-sans font-light">  
              We reject the volume-driven model of modern travel agencies. By  
              intentionally capping our active client roster, we design the  
              client experience around focused attention, responsive  
              communication, and close oversight throughout the journey.  
            </p>  
          </div>

          <div className="relative aspect-[4/3] overflow-hidden border border-white/10">  
            <img  
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"  
              alt="Strict roster caps and dedicated bandwidth"  
              className="absolute inset-0 w-full h-full object-cover opacity-70 hover:scale-105 transition-transform duration-700"  
              loading="lazy"  
            />  
          </div>  
        </div>  
      </section>

      {/* Bottom CTA Banner */}  
      <section className="py-24 border-t border-white/10 text-center px-6 bg-[#0E0E0E]">  
        <div className="max-w-xl mx-auto space-y-6">  
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-sans">  
            Begin Consultation  
          </span>

          <h2 className="text-3xl md:text-4xl font-light text-white">  
            Establish Your Advisory Mandate  
          </h2>

          <p className="text-white/50 text-sm leading-relaxed font-sans font-light">  
            We invite discerning travelers and family offices to discuss their  
            upcoming global footprint with our principals.  
          </p>

          <div className="pt-4">  
            <Link  
              href="https://cal.com/nexvoyagecollective/discovery-call"  
              className="inline-block border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.3em] px-8 py-4 hover:bg-[#D4AF37] hover:text-black transition-all duration-500 font-sans"  
            >  
              Schedule a Discovery Call  
            </Link>  
          </div>  
        </div>  
      </section>  
    </main>  
  );  
}  
