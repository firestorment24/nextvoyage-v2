"use client";

import { notFound } from 'next/navigation';  
import Link from 'next/link';

const SANCTUARIES_DATA: Record<string, any> = {  
  metropolitan: { title: 'Metropolitan Sanctuary', description: 'Penthouse seclusion in the world\'s most vibrant hubs.' },  
  floating: { title: 'Floating Sanctuary', description: 'The Ritz-Carlton Yacht Collection and beyond.' },  
  island: { title: 'Island Sanctuary', description: 'Private atolls where the world cannot find you.' },  
  alpine: { title: 'Alpine Sanctuary', description: 'The ultimate peak of quiet luxury.' },  
  stadium: { title: 'Stadium Sanctuary', description: 'Elite access to the world\'s greatest stages.' },  
  cinematic: { title: 'Cinematic Sanctuary', description: 'Immersive landscapes that defy description.' },  
  fortress: { title: 'Fortress Sanctuary', description: 'Unrivaled security meets absolute comfort.' },  
  safari: { title: 'Safari Sanctuary', description: 'The wild, curated with surgical precision.' },  
  oasis: { title: 'Oasis Sanctuary', description: 'Mirage-like tranquility in the deep desert.' },  
};

export default function SanctuaryPage({ params }: { params: { slug: string } }) {  
  const data = SANCTUARIES_DATA[params.slug];  
    
  if (!data) notFound();

  return (  
    <main className="min-h-screen py-32 px-6 max-w-5xl mx-auto">  
      <Link href="/" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black mb-12 block transition-colors">  
        ← Back to Collective  
      </Link>  
        
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">  
        <div>  
          <h1 className="text-4xl font-extralight tracking-[0.2em] uppercase mb-8">{data.title}</h1>  
          <p className="text-lg font-light leading-relaxed text-gray-600 mb-10">  
            {data.description}  
          </p>  
          <button className="border border-black px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">  
            Inquire for Access  
          </button>  
        </div>  
          
        <div className="aspect-[3/4] bg-gray-50 flex items-center justify-center border border-gray-100">  
           <span className="text-[10px] uppercase tracking-[0.2em] text-gray-300 italic">Visualizing Sanctuary...</span>  
        </div>  
      </div>  
    </main>  
  );  
}  
