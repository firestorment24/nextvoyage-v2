import Link from 'next/link'  
import { Navigation } from '../Navigation'  
import Footer from '../components/Footer'  
import { SANCTUARIES_DATA } from '../lib/data'

export default function SanctuariesPage() {  
return (  
  <main className="min-h-screen bg-[#F9F8F6] text-[#2C2C2C] font-light">  
    <Navigation />  
      
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">  
      <header className="mb-16 border-b border-black/10 pb-8">  
        <h1 className="text-4xl md:text-5xl font-serif mb-4 tracking-tight">The Collection</h1>  
        <p className="text-lg opacity-70 max-w-2xl italic">  
          A curated atlas of sanctuary archetypes, designed for the discerning global traveler.  
        </p>  
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">  
        {SANCTUARIES_DATA.map((sanctuary) => (  
          <Link   
            key={sanctuary.slug}   
            href={`/sanctuaries/${sanctuary.slug}`}  
            className="group block"  
          >  
            <div className="aspect-[4/5] bg-neutral-200 mb-6 overflow-hidden relative">  
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />  
            </div>  
            <h2 className="text-2xl font-serif mb-2 group-hover:italic transition-all duration-300">  
              {sanctuary.title}  
            </h2>  
            <p className="text-sm uppercase tracking-widest opacity-50 mb-3">  
              {sanctuary.category}  
            </p>  
            <p className="text-sm leading-relaxed opacity-70 line-clamp-2">  
              {sanctuary.description}  
            </p>  
          </Link>  
        ))}  
      </div>  
    </section>

    <Footer />  
  </main>  
)  
}  
