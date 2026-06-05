import React from 'react';  
import Image from 'next/image';  
import Link from 'next/link';  
import { notFound } from 'next/navigation';  
import { properties } from '@/data/properties';  
import { ArrowLeft, MapPin, Sparkles, ShieldCheck, Clock } from 'lucide-react';

export async function generateStaticParams() {  
  return properties.map((property) => ({  
    slug: property.slug,  
  }));  
}

export default function PropertyPage({ params }: { params: { slug: string } }) {  
  const property = properties.find((p) => p.slug === params.slug);

  if (!property) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-light">  
      {/* Navigation */}  
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">  
        <Link href={`/sanctuaries/${property.sanctuarySlug}`} className="flex items-center gap-2 hover:opacity-70 transition-opacity">  
          <ArrowLeft size={18} />  
          <span className="text-xs uppercase tracking-widest">Back to Sanctuary</span>  
        </Link>  
        <div className="text-xl tracking-[0.2em] font-extralight uppercase">NexVoyage</div>  
      </nav>

      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden">  
        <Image  
          src={property.heroImage}  
          alt={property.name}  
          fill  
          className="object-cover scale-105 transition-transform duration-[2s] hover:scale-100"  
          priority  
        />  
        <div className="absolute inset-0 bg-black/20" />  
        <div className="absolute bottom-20 left-12 max-w-2xl text-white">  
          <div className="flex items-center gap-2 mb-4 opacity-80">  
            <MapPin size={16} />  
            <span className="text-xs uppercase tracking-[0.3em]">{property.location}</span>  
          </div>  
          <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter mb-6 leading-tight">  
            {property.name}  
          </h1>  
        </div>  
      </section>

      {/* Content Grid */}  
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-20">  
          
        {/* Narrative Side */}  
        <div className="lg:col-span-7 space-y-12">  
          <div className="space-y-6">  
            <h2 className="text-xs uppercase tracking-[0.4em] text-stone-400">The Experience</h2>  
            <p className="text-2xl md:text-3xl leading-relaxed font-extralight text-stone-800">  
              {property.description}  
            </p>  
          </div>

          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-stone-200">  
            {property.highlights.map((highlight, index) => (  
              <div key={index} className="space-y-3">  
                <Sparkles size={20} className="text-stone-400" />  
                <p className="text-sm tracking-wide leading-relaxed text-stone-600">{highlight}</p>  
              </div>  
            ))}  
          </div>  
        </div>

        {/* The Ledger (Sticky Sidebar) */}  
        <div className="lg:col-span-5">  
          <div className="sticky top-32 bg-white border border-stone-100 p-10 shadow-sm space-y-8">  
            <div className="space-y-2">  
              <h3 className="text-lg uppercase tracking-widest font-normal">Exclusive Benefits</h3>  
              <p className="text-xs text-stone-400 uppercase tracking-tighter">NexVoyage Collective x Fora Reserve</p>  
            </div>

            <ul className="space-y-6">  
              <li className="flex gap-4 items-start">  
                <ShieldCheck size={18} className="mt-1 text-stone-400" />  
                <div>  
                  <span className="block text-sm font-medium uppercase tracking-tight">VIP Status</span>  
                  <p className="text-xs text-stone-500">Confirmed upon arrival via our personal connection to the GM.</p>  
                </div>  
              </li>  
              <li className="flex gap-4 items-start">  
                <Clock size={18} className="mt-1 text-stone-400" />  
                <div>  
                  <span className="block text-sm font-medium uppercase tracking-tight">Priority Migration</span>  
                  <p className="text-xs text-stone-500">Early check-in and late check-out, subject to availability.</p>  
                </div>  
              </li>  
              <li className="flex gap-4 items-start">  
                <Sparkles size={18} className="mt-1 text-stone-400" />  
                <div>  
                  <span className="block text-sm font-medium uppercase tracking-tight">$100 Property Credit</span>  
                  <p className="text-xs text-stone-500">Applicable for spa services or private dining during your stay.</p>  
                </div>  
              </li>  
            </ul>

            <div className="pt-8 border-t border-stone-100">  
              <Link   
                href={`/reserve?property=${encodeURIComponent(property.name)}`}  
                className="block w-full bg-[#1a1a1a] text-white text-center py-5 uppercase text-xs tracking-[0.3em] hover:bg-stone-800 transition-colors"  
              >  
                Inquire via The Ledger  
              </Link>  
              <p className="text-[10px] text-center mt-4 text-stone-400 uppercase tracking-[0.1em]">  
                Response time typically under 4 hours  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Footer / Contact Hint */}  
      <footer className="py-20 text-center border-t border-stone-100">  
        <p className="text-stone-400 text-xs uppercase tracking-widest">A NexVoyage Curated Property</p>  
      </footer>  
    </main>  
  );  
}  
