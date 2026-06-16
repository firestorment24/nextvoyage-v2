'use client';

import React from 'react';  
import Link from 'next/link';  
import { useParams } from 'next/navigation';  
import { DESTINATIONS_DATA } from '@/lib/journal-data';  
import { MapPin, ArrowLeft, Clock, BookOpen } from 'lucide-react';

export default function JournalDetailPage() {  
  const params = useParams();  
  const slug = params.slug as string;  
  // Finding by slug or id depending on your data structure  
  const destination = DESTINATIONS_DATA.find((d) => d.id === slug);

  if (!destination) {  
    return (  
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-[#FCFAF7]">  
        <div className="text-center space-y-6">  
          <h1 className="text-4xl font-serif">Narrative Not Found</h1>  
          <Link href="/journal" className="text-[#C5A059] uppercase tracking-widest text-xs font-bold hover:underline">  
            Return to Ledger  
          </Link>  
        </div>  
      </div>  
    );  
  }

  return (  
    <div className="min-h-screen bg-[#0A0A0A] text-[#FCFAF7] font-sans selection:bg-[#C5A059] selection:text-black">  
      {/* Hero Section */}  
      <div className="relative h-[80vh] w-full overflow-hidden">  
        <img   
          src={destination.heroImage}   
          alt={destination.title}  
          className="w-full h-full object-cover"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />  
          
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-20 max-w-7xl mx-auto w-full">  
          <Link   
            href="/journal"   
            className="inline-flex items-center gap-2 text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-bold mb-8 hover:translate-x-[-4px] transition-transform"  
          >  
            <ArrowLeft className="w-3 h-3" /> Back to Ledger  
          </Link>  
            
          <div className="space-y-4">  
            <div className="flex items-center gap-3 text-[#C5A059] text-xs uppercase tracking-[0.4em] font-bold">  
              <MapPin className="w-4 h-4" />  
              {destination.coordinates}  
            </div>  
            <h1 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter leading-none">  
              {destination.title}  
            </h1>  
            <p className="text-[#A0A0A0] text-xl md:text-2xl font-serif italic max-w-3xl">  
              {destination.subtitle}  
            </p>  
          </div>  
        </div>  
      </div>

      {/* Main Content Area */}  
      <main className="max-w-4xl mx-auto px-6 py-24">  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">  
          {/* Metadata Sidebar */}  
          <div className="md:col-span-1 space-y-12">  
            <div className="space-y-2">  
              <p className="text-[#C5A059] uppercase tracking-widest text-[10px] font-bold border-b border-[#1C1C1C] pb-2">Reading Time</p>  
              <div className="flex items-center gap-2 text-[#A0A0A0]">  
                <Clock className="w-4 h-4" />  
                <span className="text-sm">8 min read</span>  
              </div>  
            </div>  
            <div className="space-y-2">  
              <p className="text-[#C5A059] uppercase tracking-widest text-[10px] font-bold border-b border-[#1C1C1C] pb-2">Category</p>  
              <div className="flex items-center gap-2 text-[#A0A0A0]">  
                <BookOpen className="w-4 h-4" />  
                <span className="text-sm">Field Notes</span>  
              </div>  
            </div>  
          </div>

          {/* Article Body - Cleaned of all white background boxes */}  
          <div className="md:col-span-3 space-y-12">  
            <div className="prose prose-invert prose-lg max-w-none">  
              <p className="text-2xl font-serif italic text-[#C5A059] leading-relaxed border-l border-[#C5A059] pl-8 mb-12">  
                {destination.summary}  
              </p>  
                
              <div className="space-y-8 text-[#E5E5E5] leading-relaxed font-serif text-lg">  
                {destination.content ? (  
                  destination.content.split('\n\n').map((para, i) => (  
                    <p key={i}>{para}</p>  
                  ))  
                ) : (  
                  <p>Our scouts are currently finalizing the ledger for {destination.title}. Full details of this orchestration will be available shortly.</p>  
                )}  
              </div>  
            </div>

            {/* Contextual Images */}  
            <div className="grid grid-cols-2 gap-4 pt-12 border-t border-[#1C1C1C]">  
              <div className="aspect-square bg-[#1C1C1C] overflow-hidden group">  
                <img   
                  src={destination.heroImage}   
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"   
                  alt="Detail"   
                />  
              </div>  
              <div className="aspect-[3/4] bg-[#1C1C1C] overflow-hidden group">  
                <img   
                  src={destination.heroImage}   
                  className="w-full h-full object-cover scale-125 grayscale hover:grayscale-0 transition-all duration-1000"   
                  alt="Detail"   
                />  
              </div>  
            </div>  
          </div>  
        </div>  
      </main>

      {/* Footer Signature */}  
      <footer className="py-32 px-6 text-center border-t border-[#1C1C1C]">  
        <p className="text-[#C5A059] font-serif italic text-2xl max-w-2xl mx-auto">  
          "The world is a ledger of experiences; we simply help you curate the entries."  
        </p>  
      </footer>  
    </div>  
  );  
}  
