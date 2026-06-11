// app/page.tsx  
import Link from 'next/link';  
import { SANCTUARIES_DATA } from '@/lib/data/sanctuaries';

export default function Home() {  
  return (  
    <main className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-stone-200">  
      {/* Hero Section */}  
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-stone-900">  
        <div className="absolute inset-0 opacity-40">  
          <img   
            src="/images/hero-main.jpg"   
            alt="NexVoyage Sanctuary"   
            className="w-full h-full object-cover"  
          />  
        </div>  
        <div className="relative z-10 text-center px-4">  
          <span className="text-[10px] uppercase tracking-[0.4em] text-stone-300 mb-6 block animate-fade-in">  
            NexVoyage Collective  
          </span>  
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter text-white mb-8">  
            Curating the <span className="italic">Unreachable</span>  
          </h1>  
          <p className="text-stone-300 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed mb-12">  
            Bespoke travel sanctuaries and elite concierge services for the world's most discerning travelers.  
          </p>  
          <Link   
            href="/reserve"   
            className="inline-block border border-white/20 bg-white/10 backdrop-blur-md px-10 py-4 text-[10px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-stone-900 transition-all duration-500"  
          >  
            Request Access  
          </Link>  
        </div>  
      </section>

      {/* The Collection Grid */}  
      <section className="py-32 px-6 md:px-12 bg-white">  
        <div className="max-w-7xl mx-auto">  
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">  
            <div className="max-w-2xl">  
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-4 block">  
                The Index  
              </span>  
              <h2 className="text-4xl font-light tracking-tight text-stone-900 mb-6">  
                The Sanctuary Archetypes  
              </h2>  
              <p className="text-stone-500 font-light leading-relaxed">  
                A globally distributed network of vetted properties, each serving as a pillar of our Guardian Layer. Explore by archetype to find your next tactical retreat.  
              </p>  
            </div>  
            <Link   
              href="/sanctuaries"   
              className="text-[10px] uppercase tracking-[0.2em] text-stone-900 border-b border-stone-200 pb-1 hover:border-stone-900 transition-all"  
            >  
              View Full Collection  
            </Link>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">  
            {SANCTUARIES_DATA.slice(0, 9).map((sanctuary) => (  
              <Link   
                key={sanctuary.id}   
                href={`/sanctuaries/${sanctuary.slug}`}   
                className="group block"  
              >  
                <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-6">  
                  <img   
                    src={sanctuary.heroImage}   
                    alt={sanctuary.name}  
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"  
                  />  
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />  
                </div>  
                <div className="flex justify-between items-start">  
                  <div>  
                    <span className="text-[9px] uppercase tracking-[0.2em] text-stone-400 mb-1 block">  
                      {sanctuary.location}  
                    </span>  
                    <h3 className="text-xl font-light tracking-tight group-hover:italic transition-all">  
                      {sanctuary.name}  
                    </h3>  
                  </div>  
                  <span className="text-[10px] text-stone-400 mt-1 font-mono">  
                    {sanctuary.propertyCount.toString().padStart(2, '0')}  
                  </span>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* Journal Highlight */}  
      <section className="py-24 bg-stone-50 border-t border-stone-100">  
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">  
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-6 block">  
            Intelligence Report  
          </span>  
          <h2 className="text-3xl font-light tracking-tight mb-8 italic">"The South Pacific Drift"</h2>  
          <Link   
            href="/journal/the-south-pacific-drift"   
            className="inline-block border border-stone-200 px-8 py-3 text-[10px] uppercase tracking-[0.2em] text-stone-600 hover:border-stone-900 hover:text-stone-900 transition-all"  
          >  
            Read the Dossier  
          </Link>  
        </div>  
      </section>  
    </main>  
  );  
}  
