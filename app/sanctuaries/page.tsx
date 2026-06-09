import Link from 'next/link'  
import { Navigation } from '../Navigation'  
import Footer from '../components/Footer'  
import { SANCTUARIES_DATA } from '../lib/data'

export default function SanctuariesPage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white font-light selection:bg-white/20">  
      <Navigation />  
        
      {/* Hero Section - Maimon Style */}  
      <section className="relative pt-40 pb-24 px-6 max-w-[1600px] mx-auto">  
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b border-white/10 pb-12">  
          <div className="max-w-3xl">  
            <h1 className="text-6xl md:text-8xl font-serif mb-6 tracking-tighter leading-none">  
              The <span className="italic">Collection</span>  
            </h1>  
            <p className="text-xl md:text-2xl font-light opacity-60 leading-relaxed max-w-xl">  
              A curated atlas of nine sanctuary archetypes, meticulously designed for the world&apos;s most discerning travelers.  
            </p>  
          </div>  
          <div className="text-sm uppercase tracking-[0.3em] opacity-40">  
            Scroll to Explore  
          </div>  
        </div>

        {/* The Grid - Heavy focus on cinematic aspect ratios */}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">  
          {SANCTUARIES_DATA.map((sanctuary) => (  
            <Link   
              key={sanctuary.slug}   
              href={`/sanctuaries/${sanctuary.slug}`}  
              className="group block relative overflow-hidden"  
            >  
              <div className="aspect-[3/4] bg-neutral-900 overflow-hidden relative border border-white/5">  
                {/* Image Placeholder with Maimon-style hover zoom */}  
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />  
                <div className="absolute inset-0 transform scale-105 group-hover:scale-100 transition-transform duration-1000 bg-neutral-800" />  
                  
                {/* Category Tag */}  
                <div className="absolute top-6 left-6 z-20">  
                  <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 border border-white/20 bg-black/40 backdrop-blur-sm">  
                    {sanctuary.category}  
                  </span>  
                </div>

                {/* Info Overlay */}  
                <div className="absolute bottom-8 left-8 right-8 z-20">  
                  <h2 className="text-3xl font-serif mb-2 transform group-hover:translate-x-2 transition-transform duration-500">  
                    {sanctuary.title}  
                  </h2>  
                  <div className="h-px w-0 group-hover:w-full bg-white/30 transition-all duration-700 mb-4" />  
                  <p className="text-sm opacity-60 line-clamp-2 font-light tracking-wide leading-relaxed">  
                    {sanctuary.description}  
                  </p>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      <Footer />  
    </main>  
  )  
}  
