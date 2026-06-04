"use client";

import { useParams, notFound } from 'next/navigation';  
import Navigation from '../../Navigation';  
import Footer from '../../Footer';  
import { SANCTUARIES_DATA } from '../../../data/sanctuaries';  
import Link from 'next/link';

export default function SanctuaryDetailPage() {  
  const params = useParams();  
  const slug = params?.slug as string;

  const sanctuary = SANCTUARIES_DATA.find((s) => s.slug === slug);

  if (!sanctuary) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-white font-sans text-gray-900">  
      <Navigation />

      {/* Hero Section */}  
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">  
        <img  
          src={sanctuary.heroImage}  
          alt={sanctuary.name}  
          className="absolute inset-0 w-full h-full object-cover"  
        />  
        <div className="absolute inset-0 bg-black/40" />  
        <div className="relative text-center text-white px-6">  
          <p className="text-sm uppercase tracking-[0.3em] mb-4 font-light">{sanctuary.location}</p>  
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-6">  
            {sanctuary.name}  
          </h1>  
          <p className="text-xl font-light italic opacity-90">{sanctuary.tagline}</p>  
        </div>  
      </section>

      {/* Details Grid */}  
      <section className="max-w-6xl mx-auto px-6 py-24">  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">  
            
          {/* Left Column: Description & Vibe */}  
          <div className="md:col-span-8">  
            <h2 className="text-xs uppercase tracking-widest font-bold mb-8 text-gray-400">The Philosophy</h2>  
            <p className="text-2xl leading-relaxed text-gray-800 font-light mb-12">  
              {sanctuary.categoryDescription}  
            </p>

            <div className="flex flex-wrap gap-3">  
              {sanctuary.atmosphere.map((vibe) => (  
                <span key={vibe} className="px-4 py-1 border border-gray-200 text-xs uppercase tracking-widest text-gray-500 rounded-full">  
                  {vibe}  
                </span>  
              ))}  
            </div>  
          </div>

          {/* Right Column: Highlights & CTA */}  
          <div className="md:col-span-4 bg-gray-50 p-10 rounded-sm shadow-sm border border-gray-100">  
            <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">Exclusives</h3>  
            <ul className="space-y-4 mb-10">  
              {sanctuary.highlights.map((item) => (  
                <li key={item} className="flex items-start text-sm text-gray-600">  
                  <span className="mr-3 text-gray-400">•</span>  
                  {item}  
                </li>  
              ))}  
            </ul>

            <div className="pt-6 border-t border-gray-200">  
              <p className="text-xs text-gray-400 uppercase mb-4 tracking-tighter">Availability</p>  
              <p className="text-lg font-medium mb-6">{sanctuary.propertyCount} Curated Properties</p>  
              <button className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest font-bold hover:bg-gray-800 transition-colors">  
                Explore The Collection  
              </button>  
            </div>  
          </div>

        </div>  
      </section>

      {/* Back Link */}  
      <section className="pb-24 text-center">  
        <Link   
          href="/sanctuaries"   
          className="text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors"  
        >  
          ← Back to all Sanctuaries  
        </Link>  
      </section>

      <Footer />  
    </main>  
  );  
}  
