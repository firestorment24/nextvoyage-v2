import React from 'react';  
import Image from 'next/image';  
import Link from 'next/link';  
import { notFound } from 'next/navigation';  
import { sanctuaries } from '@/data/sanctuaries';  
import { properties } from '@/data/properties';

// Zero-Dependency Inline Icons  
const IconArrowLeft = () => (  
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>  
);  
const IconSparkles = () => (  
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z"/></svg>  
);

export async function generateStaticParams() {  
  return sanctuaries.map((s) => ({  
    slug: s.slug,  
  }));  
}

export default function SanctuaryPage({ params }: { params: { slug: string } }) {  
  const sanctuary = sanctuaries.find((s) => s.slug === params.slug);

  if (!sanctuary) {  
    notFound();  
  }

  // Filter properties belonging to this specific sanctuary "bucket"  
  const sanctuaryProperties = properties.filter(p => p.sanctuarySlug === params.slug);

  return (  
    <main className="min-h-screen bg-[#faf9f6] text-[#1a1a1a]">  
      {/* Navigation */}  
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">  
        <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">  
          <IconArrowLeft />  
          <span className="text-xs uppercase tracking-widest font-light">Index</span>  
        </Link>  
        <div className="text-xl tracking-[0.2em] font-extralight uppercase">NexVoyage</div>  
      </nav>

      {/* Hero Section */}  
      <section className="relative h-[70vh] w-full overflow-hidden">  
        <Image  
          src={sanctuary.heroImage}  
          alt={sanctuary.name}  
          fill  
          className="object-cover"  
          priority  
        />  
        <div className="absolute inset-0 bg-black/30" />  
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">  
          <span className="text-xs uppercase tracking-[0.5em] mb-4 opacity-80">Collection</span>  
          <h1 className="text-6xl md:text-8xl font-extralight tracking-tighter lowercase italic">  
            {sanctuary.name}  
          </h1>  
        </div>  
      </section>

      {/* Content Grid */}  
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">  
        {/* Atmosphere & Highlights */}  
        <div className="lg:col-span-4 space-y-12">  
          <div className="space-y-4">  
            <h2 className="text-xs uppercase tracking-[0.4em] text-stone-400 font-medium">The Atmosphere</h2>  
            <p className="text-lg font-light leading-relaxed text-stone-600 italic">  
              &quot;{sanctuary.atmosphere}&quot;  
            </p>  
          </div>

          <div className="space-y-6 pt-12 border-t border-stone-200">  
            <h2 className="text-xs uppercase tracking-[0.4em] text-stone-400 font-medium">Core Highlights</h2>  
            <ul className="space-y-4">  
              {sanctuary.highlights.map((item, i) => (  
                <li key={i} className="flex items-start gap-3 text-sm font-light text-stone-500 leading-relaxed">  
                  <div className="mt-1 text-stone-300"><IconSparkles /></div>  
                  {item}  
                </li>  
              ))}  
            </ul>  
          </div>  
        </div>

        {/* Dynamic Property Bucket */}  
        <div className="lg:col-span-8">  
          <div className="flex justify-between items-end mb-12">  
            <h2 className="text-3xl font-extralight tracking-tight text-stone-800">  
              The {sanctuary.name} Ledger  
            </h2>  
            <span className="text-[10px] uppercase tracking-widest text-stone-400">  
              {sanctuaryProperties.length} Properties Curated  
            </span>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">  
            {sanctuaryProperties.map((property) => (  
              <Link   
                key={property.slug}   
                href={`/properties/${property.slug}`}  
                className="group block space-y-4"  
              >  
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">  
                  <Image  
                    src={property.heroImage}  
                    alt={property.name}  
                    fill  
                    className="object-cover transition-transform duration-700 group-hover:scale-105"  
                  />  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />  
                </div>  
                <div className="space-y-1">  
                  <h3 className="text-lg font-light tracking-wide group-hover:text-stone-500 transition-colors">  
                    {property.name}  
                  </h3>  
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-stone-400">  
                    <span>{property.location}</span>  
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">View Detail →</span>  
                  </div>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* Minimal Footer */}  
      <footer className="py-20 border-t border-stone-100 text-center">  
        <Link href="/" className="text-[10px] uppercase tracking-[0.4em] text-stone-400 hover:text-stone-800 transition-colors">  
          Return to All Sanctuaries  
        </Link>  
      </footer>  
    </main>  
  );  
}  
