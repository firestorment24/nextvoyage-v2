/** VERSION: V3-CLEAN-BUILD **/  
import Hero from './components/Hero'  
import { SANCTUARIES_DATA } from '@/data/sanctuaries'  
import Link from 'next/link'  
import Image from 'next/image'

export default function Home() {  
  return (  
    <main className="min-h-screen bg-white">  
      <Hero   
        title="The Art of Escape"  
        subtitle="Curated sanctuaries for the high-net-worth traveler."  
      />

      <section className="max-w-7xl mx-auto px-4 py-24">  
        <div className="text-center mb-16">  
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900">  
            Explore Our Sanctuaries  
          </h2>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {SANCTUARIES_DATA.map((sanctuary) => (  
            <Link   
              key={sanctuary.id}   
              href={`/sanctuaries/${sanctuary.slug}`}  
              className="group relative block overflow-hidden rounded-lg bg-slate-100 aspect-[4/5]"  
            >  
              <div className="relative h-full w-full">  
                <Image  
                  src={sanctuary.heroImage}  
                  alt={sanctuary.name}  
                  fill  
                  className="object-cover transition-transform duration-700 group-hover:scale-105"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />  
                <div className="absolute bottom-0 p-8 text-white">  
                  <h3 className="text-2xl font-light mb-4">{sanctuary.name}</h3>  
                  <div className="mt-6 inline-flex items-center text-xs uppercase tracking-widest border-b border-white/40 pb-1 group-hover:border-white transition-colors">  
                    Explore Sanctuary  
                  </div>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>  
    </main>  
  )  
}  
