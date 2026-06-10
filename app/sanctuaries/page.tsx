'use client';

import React from 'react';  
import Link from 'next/link';  
import Navigation from '../Navigation';  
import Footer from '../Footer';

const SANCTUARIES = [  
{  
  id: 'alpine',  
  name: 'The Alpine',  
  location: 'Courchevel • Aspen • Dolomites',  
  vibe: 'High-altitude restoration and quiet luxury.',  
  image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=1000',  
},  
{  
  id: 'metropolitan',  
  name: 'The Metropolitan',  
  location: 'Tokyo • London • New York',  
  vibe: 'Calculated efficiency in the heart of the world.',  
  image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1000',  
},  
{  
  id: 'nautical',  
  name: 'The Nautical',  
  location: 'Amalfi • St. Barths • Mykonos',  
  vibe: 'Sun-drenched seclusion and maritime mastery.',  
  image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1000',  
},  
{  
  id: 'safari',  
  name: 'The Safari',  
  location: 'Serengeti • Kruger • Okavango',  
  vibe: 'Ancient rhythms and untamed elegance.',  
  image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000',  
},  
{  
  id: 'oasis',  
  name: 'The Oasis',  
  location: 'Marrakech • AlUla • Dubai',  
  vibe: 'A testament to resilience and refined desert living.',  
  image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&q=80&w=1000',  
},  
{  
  id: 'fortress',  
  name: 'The Fortress',  
  location: 'Patagonia • Bhutan • Iceland',  
  vibe: 'Absolute privacy at the edges of the earth.',  
  image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000',  
},  
];

export default function SanctuariesPage() {  
return (  
  <main className="min-h-screen bg-white text-black flex flex-col">  
    <Navigation />

    {/* Hero Section */}  
    <header className="px-6 py-24 max-w-7xl mx-auto w-full text-center border-b border-neutral-100">  
      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-6 block">The Portfolio</span>  
      <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">Sanctuaries</h1>  
      <p className="text-neutral-500 max-w-xl mx-auto text-lg leading-relaxed font-light">  
        Our collection is organized by archetype. <br />  
        Select your environment; we will handle the rest.  
      </p>  
    </header>

    {/* Grid Section */}  
    <section className="px-6 py-20 max-w-7xl mx-auto w-full">  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">  
        {SANCTUARIES.map((item) => (  
          <Link key={item.id} href={`/sanctuaries/${item.id}`} className="group block">  
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-6">  
              <img  
                src={item.image}  
                alt={item.name}  
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"  
              />  
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />  
            </div>  
              
            <div className="space-y-2">  
              <div className="flex justify-between items-baseline border-b border-neutral-100 pb-2">  
                <h2 className="text-2xl font-serif tracking-tight">{item.name}</h2>  
                <span className="text-[10px] uppercase tracking-widest text-neutral-400">View Sanctuary</span>  
              </div>  
              <p className="text-[11px] uppercase tracking-widest text-neutral-400 pt-1">  
                {item.location}  
              </p>  
              <p className="text-neutral-500 text-sm font-light pt-2 line-clamp-2 italic">  
                "{item.vibe}"  
              </p>  
            </div>  
          </Link>  
        ))}  
      </div>  
    </section>

    {/* CTA Section */}  
    <section className="bg-neutral-50 py-24 px-6 text-center">  
      <h3 className="text-2xl font-serif mb-6 italic text-neutral-400 italic">Seeking something more specific?</h3>  
      <Link   
        href="/concierge"   
        className="inline-block border border-black px-10 py-4 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all"  
      >  
        Open a Bespoke Inquiry  
      </Link>  
    </section>

    <Footer />  
  </main>  
);  
}  
