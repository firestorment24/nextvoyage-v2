import React from 'react'  
import Link from 'next/link'

export default function ArchiveDetailPage({ params }: { params: { id: string } }) {  
  // We'll use params.id now instead of slug to pull the property data  
  const propertyName = params.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (  
    <main className="min-h-screen bg-black">  
      {/* Cinematic Hero */}  
      <section className="h-[80vh] w-full bg-[#111] relative overflow-hidden flex items-center justify-center">  
        <div className="z-10 text-center px-4">  
          <h1 className="text-white font-serif text-6xl md:text-8xl tracking-tighter mb-4">  
            {propertyName}  
          </h1>  
          <p className="text-[#C5A059] font-sans text-xs uppercase tracking-[0.4em]">  
            Confidential Entry // Ledger 2026-A  
          </p>  
        </div>  
        {/* The background will eventually be a full-bleed cinematic loop */}  
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />  
      </section>

      {/* The Essence */}  
      <section className="py-24 px-8 md:px-40 grid grid-cols-1 md:grid-cols-2 gap-20 border-b border-[#C5A059]/10">  
        <div>  
          <h2 className="text-[#C5A059] font-sans text-[10px] uppercase tracking-[0.4em] mb-8">  
            The Essence  
          </h2>  
          <p className="text-[#C5A059]/80 font-serif text-2xl leading-relaxed">  
            Beyond the glass and timber lies a sanctuary designed for those who seek the luxury of silence. Every detail—from the angle of the sun to the density of the linens—has been curated for a total primal reset.  
          </p>  
        </div>  
          
        <div className="space-y-12">  
          <div>  
            <h3 className="text-[#C5A059] font-sans text-[10px] uppercase tracking-[0.4em] mb-4">Architecture</h3>  
            <p className="text-[#C5A059]/60 text-sm leading-loose">Minimalist brutalism meets alpine warmth. Designed to disappear into the landscape.</p>  
          </div>  
          <div>  
            <h3 className="text-[#C5A059] font-sans text-[10px] uppercase tracking-[0.4em] mb-4">Vibe</h3>  
            <p className="text-[#C5A059]/60 text-sm leading-loose">The blue hour, perfected. Stillness that resonates.</p>  
          </div>  
        </div>  
      </section>

      {/* The NexVoyage Standard (Vetting) */}  
      <section className="py-24 px-8 md:px-40 bg-[#050505]">  
        <h2 className="text-[#C5A059] font-sans text-[10px] uppercase tracking-[0.4em] mb-16 text-center">  
          The NexVoyage Standard  
        </h2>  
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          {[  
            { label: 'Security', value: 'Level 4 Private Perimeter' },  
            { label: 'Privacy', value: 'Zero Overlook / No Fly Zone' },  
            { label: 'Service', value: '1:4 Staff-to-Guest Ratio' },  
            { label: 'Wellness', value: 'Private Medical-Grade Spa' },  
            { label: 'Vetting', value: '18-Specialist Certified' },  
            { label: 'Access', value: 'Private Helipad / Remote Entry' }  
          ].map(spec => (  
            <div key={spec.label} className="border border-[#C5A059]/10 p-8 text-center">  
              <span className="block text-[#C5A059]/40 font-sans text-[9px] uppercase mb-2 tracking-widest">{spec.label}</span>  
              <span className="text-[#C5A059] font-serif text-lg tracking-tight">{spec.value}</span>  
            </div>  
          ))}  
        </div>  
      </section>

      {/* Inquiry CTA */}  
      <section className="py-40 text-center border-t border-[#C5A059]/10">  
        <h3 className="text-[#C5A059] font-serif text-3xl mb-8 italic">Interested in this sanctuary?</h3>  
        <Link   
          href="/inquiry"   
          className="inline-block border border-[#C5A059] text-[#C5A059] px-12 py-4 font-sans text-xs uppercase tracking-[0.3em] hover:bg-[#C5A059] hover:text-black transition-all"  
        >  
          Initiate Intake  
        </Link>  
      </section>  
    </main>  
  )  
}  
