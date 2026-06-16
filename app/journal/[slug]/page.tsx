'use client';

import { useParams, notFound } from 'next/navigation';  
import { DESTINATIONS_DATA } from '@/lib/journal-data';  
import { Button } from '@/components/ui/button';  
import Link from 'next/link';  
import { ArrowLeft, MapPin, Calendar, Compass, Info } from 'lucide-react';

export default function JournalEntry() {  
  const params = useParams();    
  const slug = params?.slug as string;    
    
  // Use .find() since DESTINATIONS_DATA is now an array  
  const data = DESTINATIONS_DATA.find(d => d.id === slug);

  if (!data) return notFound();

  return (  
    <div className="min-h-screen bg-[#050505] text-[#E5E5E5] font-sans selection:bg-[#D4AF37] selection:text-black">  
      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden">  
        <div className="absolute inset-0">  
          <img   
            src={data.heroImage}   
            alt={data.title}  
            className="w-full h-full object-cover opacity-60 scale-105"  
          />  
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />  
        </div>  
          
        <div className="relative h-full flex flex-col justify-end px-6 pb-12 max-w-7xl mx-auto w-full">  
          <Link href="/journal" className="flex items-center gap-2 text-[#D4AF37] mb-8 hover:opacity-70 transition-opacity w-fit uppercase tracking-widest text-xs font-medium">  
            <ArrowLeft className="w-4 h-4" /> Back to Ledger  
          </Link>  
          <p className="text-[#D4AF37] font-serif italic text-xl mb-2">{data.subtitle}</p>  
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-4">{data.title}</h1>  
          <div className="flex items-center gap-6 text-sm text-[#A0A0A0] uppercase tracking-[0.2em]">  
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#D4AF37]" /> {data.coordinates}</span>  
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#D4AF37]" /> {data.bestTime}</span>  
          </div>  
        </div>  
      </section>

      {/* Narrative Section */}  
      <section className="py-24 px-6 max-w-4xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">  
          <div className="md:col-span-8">  
            <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-12 italic text-[#D4AF37]">  
              "{data.quote}"  
            </p>  
            <div className="space-y-8 text-lg leading-relaxed text-[#D0D0D0]">  
              <p>{data.summary}</p>  
              <div className="pt-8 border-t border-[#D4AF37]/20">  
                <h3 className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold mb-4 flex items-center gap-2">  
                  <Compass className="w-4 h-4" /> The Orchestration  
                </h3>  
                <p className="font-serif italic text-xl">{data.orchestration}</p>  
              </div>  
            </div>  
          </div>  
            
          <div className="md:col-span-4 space-y-12">  
            <div className="bg-[#111] p-8 border-l border-[#D4AF37]">  
              <h4 className="text-xs uppercase tracking-widest text-[#A0A0A0] mb-4">The Sanctuary</h4>  
              <p className="text-xl font-serif text-[#D4AF37]">{data.sanctuary}</p>  
            </div>  
              
            <div className="space-y-6">  
              <h4 className="text-xs uppercase tracking-widest text-[#A0A0A0] flex items-center gap-2">  
                <Info className="w-4 h-4" /> Insider Tip  
              </h4>  
              <p className="text-sm italic leading-relaxed text-[#A0A0A0]">{data.insiderTip}</p>  
            </div>

            <div className="space-y-4">  
              <h4 className="text-xs uppercase tracking-widest text-[#A0A0A0]">Essential Curations</h4>  
              <ul className="space-y-3">  
                {data.topMustDos.map((item, i) => (  
                  <li key={i} className="text-sm flex items-start gap-3">  
                    <span className="text-[#D4AF37]">0{i+1}</span>  
                    <span>{item}</span>  
                  </li>  
                ))}  
              </ul>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* CTA Section */}  
      <section className="py-24 border-t border-[#1A1A1A] text-center">  
        <h3 className="text-3xl font-serif mb-8">Begin the Orchestration.</h3>  
        <Button asChild className="bg-[#D4AF37] text-black hover:bg-[#B48E27] px-12 py-6 rounded-none uppercase tracking-widest text-xs font-bold">  
          <Link href="/contact">Enquire Privately</Link>  
        </Button>  
      </section>  
    </div>  
  );  
}  
