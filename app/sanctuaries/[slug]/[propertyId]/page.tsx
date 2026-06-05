import React from 'react';  
import Link from 'next/link';  
import { PROPERTIES_DATA } from '@/data/properties';  
import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';  
import { EliteAmenities } from '@/components/EliteAmenities';

export default function PropertyPage({ params }: { params: { slug: string; propertyId: string } }) {  
  const property = PROPERTIES_DATA.find(p => p.id === params.propertyId);

  if (!property) return <div className="p-20 text-center font-light text-zinc-400 uppercase tracking-widest">Property Not Found</div>;

  return (  
    <main className="min-h-screen bg-white selection:bg-zinc-100">  
      <Navigation />  
        
      {/* Hero Section */}  
      <section className="relative h-[70vh] w-full overflow-hidden">  
        <img   
          src={property.image}   
          alt={property.name}  
          className="w-full h-full object-cover"  
        />  
        <div className="absolute inset-0 bg-black/20" />  
        <div className="absolute bottom-12 left-6 md:left-12 text-white">  
          <p className="text-xs uppercase tracking-[0.4em] mb-3 opacity-80">{property.location}</p>  
          <h1 className="text-5xl md:text-7xl font-light tracking-tight">{property.name}</h1>  
        </div>  
      </section>

      {/* Property Intro */}  
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">  
        <h2 className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-800 italic">  
          "{property.highlight}"  
        </h2>  
        <p className="mt-8 text-zinc-500 leading-loose font-light">  
          {property.description}  
        </p>  
      </section>

      {/* NEW: Elite Amenities Section */}  
      <EliteAmenities />

      {/* Inquiry CTA */}  
      <section className="py-24 bg-zinc-50 text-center">  
        <div className="max-w-xl mx-auto px-6">  
          <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-6">Experience {property.name}</h3>  
          <p className="text-zinc-600 font-light mb-10 leading-relaxed">  
            Every itinerary is personally curated by our team to ensure your stay exceeds the unreachable.  
          </p>  
          <Link   
            href={`/reserve?property=${property.id}`}  
            className="inline-block border border-zinc-900 px-12 py-4 text-xs uppercase tracking-[0.3em] hover:bg-zinc-900 hover:text-white transition-all duration-500"  
          >  
            Inquire for Details  
          </Link>  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
