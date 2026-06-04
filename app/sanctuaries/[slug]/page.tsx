"use client";

import { useParams, notFound } from 'next/navigation';  
import Navigation from '../../Navigation';  
import Footer from '../../Footer';  
import { SANCTUARIES_DATA } from '../../../data/sanctuaries';  
import { PROPERTIES_DATA } from '../../../data/properties';  
import Link from 'next/link';

export default function SanctuaryDetailPage() {  
const params = useParams();  
const slug = params?.slug as string;

const sanctuary = SANCTUARIES_DATA.find((s) => s.slug === slug);

// Filter properties belonging to this sanctuary  
const featuredProperties = PROPERTIES_DATA.filter((p) => p.sanctuarySlug === slug);

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
        <div className="md:col-span-4 bg-gray-50 p-10 rounded-sm shadow-sm border border-gray-100 h-fit">  
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
            <p className="text-xs text-gray-400 uppercase mb-4 tracking-tighter">Current Access</p>  
            <p className="text-lg font-medium mb-6">{sanctuary.propertyCount} Properties in Collection</p>  
              
            <Link href="/reserve">  
              <button className="w-full bg-black text-white py-4 text-xs uppercase tracking-widest font-bold hover:bg-gray-800 transition-colors">  
                Request a Quote  
              </button>  
            </Link>  
          </div>  
        </div>  
      </div>  
    </section>

    {/* Featured Properties Section */}  
    {featuredProperties.length > 0 && (  
      <section className="bg-gray-50 py-24">  
        <div className="max-w-6xl mx-auto px-6">  
          <h2 className="text-xs uppercase tracking-widest font-bold mb-12 text-center text-gray-500">  
            Featured Monthly Curations  
          </h2>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
            {featuredProperties.map((property) => (  
              <div key={property.id} className="bg-white group cursor-pointer border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">  
                <div className="h-64 overflow-hidden relative">  
                  <img   
                    src={property.image}   
                    alt={property.name}   
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"  
                  />  
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 text-[10px] uppercase tracking-widest">  
                    {property.priceLevel}  
                  </div>  
                </div>  
                <div className="p-8">  
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">{property.location}</p>  
                  <h3 className="text-xl font-light mb-4">{property.name}</h3>  
                  <p className="text-sm text-gray-600 mb-6 font-light leading-relaxed">  
                    {property.highlight}  
                  </p>  
                  <div className="bg-gray-50 p-4 border-l-2 border-black mb-6">  
                    <p className="text-xs font-bold uppercase tracking-tighter text-gray-900 mb-1">NexVoyage Member Offer</p>  
                    <p className="text-sm text-gray-700 italic">{property.exclusiveOffer}</p>  
                  </div>  
                    
                  <Link href="/reserve">  
                    <button className="text-xs uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">  
                      Request a Quote  
                    </button>  
                  </Link>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>  
    )}

    {/* Back Link */}  
    <section className="py-24 text-center">  
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
