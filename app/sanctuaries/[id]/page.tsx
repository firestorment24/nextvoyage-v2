import React from 'react';  
import { notFound } from 'next/navigation';  
import Hero from '@/components/Hero';  
import PropertyBuckets from '@/components/PropertyBuckets';  
import { SANCTUARY_DATA } from '@/data/sanctuaries';

interface PageProps {  
  params: { id: string };  
}

export async function generateStaticParams() {  
  return SANCTUARY_DATA.map((s) => ({ id: s.id }));  
}

export default function SanctuaryPage({ params }: PageProps) {  
  const sanctuary = SANCTUARY_DATA.find((s) => s.id === params.id);

  if (!sanctuary) return notFound();

  return (  
    <main className="min-h-screen bg-[#0a0a0a]">  
      <Hero   
        title={sanctuary.name}    
        subtitle={sanctuary.tag}    
        heroImage={sanctuary.heroImage}    
      />

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">    
        {/* Overview Section */}  
        <section className="grid md:grid-cols-2 gap-16 items-start">  
          <div className="space-y-6">  
            <span className="text-white/40 text-xs tracking-[0.4em] uppercase">The Collection</span>  
            <h2 className="text-4xl font-serif text-white leading-tight">  
              {sanctuary.categoryDescription}  
            </h2>  
          </div>  
          <div className="space-y-8 text-white/60 font-light leading-relaxed text-lg">  
            <p>{sanctuary.atmosphere}</p>  
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8">  
              {sanctuary.highlights.map((h, i) => (  
                <div key={i} className="space-y-2">  
                  <div className="text-white text-sm tracking-widest uppercase">0{i+1}</div>  
                  <div className="text-xs tracking-wider">{h}</div>  
                </div>  
              ))}  
            </div>  
          </div>  
        </section>

        {/* Property Grid */}  
        <PropertyBuckets buckets={sanctuary.buckets} />

        {/* Final CTA */}  
        <section className="py-32 border-t border-white/5 text-center">  
          <h3 className="text-3xl font-serif text-white mb-12 italic">Begin your journey.</h3>  
          <a   
            href="/concierge"   
            className="inline-block border border-white/20 px-12 py-4 text-white text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all"  
          >  
            Consult a Specialist  
          </a>  
        </section>  
      </div>  
    </main>  
  );  
}  
