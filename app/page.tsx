import Link from 'next/link'  
import Image from 'next/image'  
import Hero from '@/components/Hero'  
import { sanctuaries } from '@/data/sanctuaries'

export default function Home() {  
  return (  
    <main className="min-h-screen bg-black text-white">  
      {/* Hero Section */}  
      <Hero   
        title="The Art of Escape"  
        subtitle="Curated sanctuaries for the high-net-worth traveler."  
        ctaText="Explore Sanctuaries"  
        ctaHref="/sanctuaries" // Fixed link to plural route  
      />
 
      {/* Sanctuary Grid */}  
      <section className="py-24 px-6 md:px-12 lg:px-24">  
        <div className="max-w-7xl mx-auto">  
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">  
            <div>  
              <h2 className="text-sm uppercase tracking-[0.3em] text-stone-500 mb-4">Collection</h2>  
              <p className="text-3xl font-light italic">The Nine Archetypes</p>  
            </div>  
            <Link   
              href="/sanctuaries"   
              className="text-sm uppercase tracking-widest hover:text-stone-400 transition-colors mt-6 md:mt-0"  
            >  
              View Full Index —  
            </Link>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
            {sanctuaries.map((sanctuary) => (  
              <Link   
                key={sanctuary.id}   
                href={`/sanctuaries/${sanctuary.id}`}  
                className="group block relative aspect-[4/5] overflow-hidden bg-stone-900"  
              >  
                <Image  
                  src={sanctuary.img || sanctuary.heroImage}  
                  alt={sanctuary.name}  
                  fill  
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />  
                <div className="absolute bottom-0 left-0 p-8 w-full">  
                  <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-2">{sanctuary.loc}</p>  
                  <h3 className="text-xl font-light tracking-tight">{sanctuary.name}</h3>  
                </div>  
              </Link>  
            ))}  
          </div>  
        </div>  
      </section>

      {/* Philosophy Section */}  
      <section className="py-32 bg-stone-950 border-y border-stone-900">  
        <div className="max-w-3xl mx-auto text-center px-6">  
          <h2 className="text-sm uppercase tracking-[0.5em] text-stone-600 mb-12">Our Philosophy</h2>  
          <p className="text-2xl font-light leading-relaxed italic text-stone-300">  
            "We do not build houses; we curate environments where time slows down,   
            and the outside world ceases to exist. Each sanctuary is a masterwork   
            of discretion, security, and quiet luxury."  
          </p>  
          <div className="mt-12 h-[1px] w-24 bg-stone-800 mx-auto" />  
        </div>  
      </section>  
    </main>  
  )  
}  
