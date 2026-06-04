import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';  
import { SANCTUARIES_DATA } from '@/data/sanctuaries';  
import Link from 'next/link';

export default function SanctuariesPage() {  
  return (  
    <main className="min-h-screen bg-[#F9F7F2] text-[#2C2C2C]">  
      <Navigation />  
        
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">  
        <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">The Sanctuaries</h1>  
        <p className="text-xl text-gray-600 max-w-2xl mb-16 leading-relaxed">  
          A curated collection of ultra-private retreats, selected for the discerning traveler.  
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
          {SANCTUARIES_DATA.map((sanctuary) => (  
            <Link   
              key={sanctuary.slug}   
              href={`/sanctuaries/${sanctuary.slug}`}  
              className="group block"  
            >  
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-200">  
                {/* Image placeholder - clean editorial look */}  
                <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-700" />  
              </div>  
              <h3 className="text-2xl font-serif mb-2">{sanctuary.name}</h3>  
              <p className="text-sm uppercase tracking-widest text-gray-500">{sanctuary.location}</p>  
            </Link>  
          ))}  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
