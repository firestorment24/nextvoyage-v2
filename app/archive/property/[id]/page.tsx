// app/archive/property/[id]/page.tsx

import { PROPERTY_DATA } from '@/lib/data/sanctuaries';  
import Link from 'next/link';  
import { notFound } from 'next/navigation';  
import { Metadata } from 'next';

interface Props {  
  params: { id: string };  
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {  
  const property = PROPERTY_DATA.find((p) => p.id === params.id);  
  return {  
    title: property ? `${property.name} | The Archive` : 'Property Not Found',  
  };  
}

export default function PropertyDetailPage({ params }: Props) {  
  const property = PROPERTY_DATA.find((p) => p.id === params.id);

  if (!property) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C5A059]/30">  
      {/* Navigation */}  
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">  
        <Link   
          href="/archive"   
          className="text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-white transition-colors duration-300"  
        >  
          ← Back to Archive  
        </Link>  
        <span className="text-[10px] uppercase tracking-[0.5em] font-light">  
          Property {property.serial}  
        </span>  
      </nav>

      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden">  
        <img   
          src={property.image}   
          alt={property.name}  
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />  
          
        <div className="absolute bottom-12 left-12 max-w-2xl">  
          <p className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4">  
            {property.verified ? 'Verified Sanctuary' : 'Pending Verification'}  
          </p>  
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-4 leading-none">  
            {property.name}  
          </h1>  
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs">  
            {property.location}  
          </p>  
        </div>  
      </section>

      {/* Narrative & Content */}  
      <div className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">  
          
        {/* Left Column: Narrative */}  
        <div className="lg:col-span-7 space-y-12">  
          <section>  
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#666] mb-8">Narrative</h3>  
            <p className="font-serif italic text-2xl md:text-3xl leading-relaxed text-white/90">  
              "{property.description}"  
            </p>  
          </section>

          <section className="pt-12 border-t border-white/5">  
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#666] mb-8">Elite Amenities</h3>  
            <div className="grid grid-cols-2 gap-4">  
              {property.amenities.map((amenity, index) => (  
                <div key={index} className="flex items-center space-x-3 text-white/60">  
                  <div className="w-1 h-1 bg-[#C5A059] rotate-45" />  
                  <span className="text-sm font-light tracking-wide">{amenity}</span>  
                </div>  
              ))}  
            </div>  
          </section>  
        </div>

        {/* Right Column: Technical Deep-Dive */}  
        <div className="lg:col-span-5 space-y-12">  
          <div className="bg-[#111] p-8 md:p-12 border border-white/5">  
            <section className="mb-12">  
              <h4 className="text-[10px] uppercase tracking-widest text-[#444] mb-4">Technical Highlight</h4>  
              <p className="text-sm text-[#ccc] leading-snug font-light italic">  
                {property.highlight}  
              </p>  
            </section>

            <section className="space-y-6">  
              <h4 className="text-[10px] uppercase tracking-widest text-[#444] mb-4">Specifications</h4>  
              {Object.entries(property.specs).map(([key, value]) => (  
                <div key={key} className="flex justify-between items-baseline border-b border-white/5 pb-2">  
                  <span className="text-[10px] uppercase tracking-widest text-white/30">{key}</span>  
                  <span className="text-xs text-white/70 font-light">{value}</span>  
                </div>  
              ))}  
            </section>  
          </div>

          {/* The Invitation (CTA) */}  
          <div className="pt-8">  
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#666] mb-6">The Invitation</h3>  
            <p className="text-sm text-white/50 mb-8 leading-relaxed font-light">  
              {property.invitation}  
            </p>  
            <Link   
              href={`/reserve?property=${property.id}`}  
              className="group relative inline-flex items-center px-8 py-4 bg-[#C5A059] text-black text-[10px] uppercase tracking-[0.3em] font-bold overflow-hidden transition-all duration-300 hover:bg-[#D4B57A]"  
            >  
              Request Access  
              <span className="ml-4 transform group-hover:translate-x-1 transition-transform duration-300">→</span>  
            </Link>  
          </div>  
        </div>

      </div>

      {/* Footer Branding */}  
      <footer className="py-24 border-t border-white/5 text-center">  
        <p className="text-[10px] uppercase tracking-[1em] text-white/20">  
          NexVoyage Collective  
        </p>  
      </footer>  
    </main>  
  );  
}  
