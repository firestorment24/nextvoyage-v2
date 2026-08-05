import React from 'react';  
import { notFound } from 'next/navigation';  
import Image from 'next/image';  
import Link from 'next/link';  
import { DESTINATIONS_DATA } from '@/lib/journal-data';

interface PageProps {  
  params: Promise<{ slug: string }>;  
}

export async function generateStaticParams() {  
  return DESTINATIONS_DATA.map((item) => ({  
    slug: item.slug,  
  }));  
}

export default async function JournalDetailPage({ params }: PageProps) {  
  const resolvedParams = await params;  
  const destination = DESTINATIONS_DATA.find((item) => item.id === resolvedParams.slug);

  if (!destination) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D4AF37] selection:text-black font-serif pt-24 pb-32">  
      {/* Hero Header */}  
      <div className="relative w-full h-[60vh] min-h-[450px] mb-16 overflow-hidden">  
        <Image  
          src={destination.heroImage}  
          alt={destination.title}  
          fill  
          priority  
          className="object-cover opacity-50"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/40 to-black/60" />  
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-16 max-w-5xl mx-auto space-y-4">  
          <div className="flex items-center gap-3 text-[#D4AF37] text-xs font-sans tracking-[0.2em] uppercase">  
            <span>{destination.coordinates}</span>  
            <span>//</span>  
            <span>Field Report No. {destination.id}</span>  
          </div>  
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white font-serif">  
            {destination.title}  
          </h1>  
          <p className="text-white/70 text-lg md:text-xl font-light font-sans max-w-3xl">  
            {destination.summary}  
          </p>  
        </div>  
      </div>

      {/* Main Content Container */}  
      <article className="max-w-4xl mx-auto px-6 md:px-12 space-y-16">  
          
        {/* Editorial Body / Essay */}  
        {destination.editorialHtml ? (  
          <div   
            className="prose prose-invert prose-gold max-w-none font-sans font-light text-white/80 text-base md:text-lg leading-relaxed space-y-8 [&>h3]:font-serif [&>h3]:text-2xl [&>h3]:text-[#D4AF37] [&>h3]:font-light [&>h3]:pt-6 [&>strong]:text-white [&>em]:italic"  
            dangerouslySetInnerHTML={{ __html: destination.editorialHtml }}  
          />  
        ) : (  
          <div className="space-y-8 font-sans font-light text-white/80 text-base md:text-lg leading-relaxed">  
            <p>{destination.summary}</p>  
          </div>  
        )}

        {/* Quick Facts / Orchestration Box */}  
        <div className="grid md:grid-cols-2 gap-8 border-t border-b border-white/10 py-10 my-16 font-sans">  
          <div className="space-y-2">  
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-medium block">Key Sanctuary</span>  
            <h3 className="text-white text-xl font-serif font-light">{destination.sanctuary}</h3>  
          </div>  
          <div className="space-y-2">  
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-medium block">Signature Orchestration</span>  
            <p className="text-white/70 text-sm font-light leading-relaxed">{destination.orchestration}</p>  
          </div>  
        </div>

        {/* Back Link */}  
        <div className="pt-8">  
          <Link  
            href="/journal"  
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] hover:text-white transition-colors font-sans border-b border-[#D4AF37]/40 pb-1"  
          >  
            <span>← Return to Journal Ledger</span>  
          </Link>  
        </div>

      </article>  
    </main>  
  );  
}  
