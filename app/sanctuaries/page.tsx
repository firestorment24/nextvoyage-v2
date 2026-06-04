import Navigation from '../Navigation';  
import Footer from '../Footer';  
import { SANCTUARIES_DATA } from '../../data/sanctuaries'; // Added one more dot to go to the project root  
import Link from 'next/link';

// ... the rest of the code stays the same  

export default function SanctuariesPage() {  
  return (  
    <main className="min-h-screen bg-[#F9F7F2] text-[#2C2C2C]">  
      <Navigation />  
        
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center md:text-left">  
        <div className="mb-20">  
          <h1 className="text-5xl md:text-8xl font-serif mb-8 tracking-tighter italic">The Sanctuaries</h1>  
          <p className="text-xl text-gray-600 max-w-xl leading-relaxed font-light mx-auto md:mx-0">  
            A collection of ultra-private retreats, curated for the modern traveler seeking complete seclusion.  
          </p>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">  
          {SANCTUARIES_DATA.map((sanctuary) => (  
            <Link   
              key={sanctuary.slug}   
              href={`/sanctuaries/${sanctuary.slug}`}  
              className="group block no-underline text-current"  
            >  
              <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-neutral-200">  
                {/* Visual Placeholder for high-end look */}  
                <div className="absolute inset-0 bg-neutral-300 group-hover:scale-105 transition-transform duration-1000" />  
                <div className="absolute bottom-8 left-8 text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                  <span className="text-sm uppercase tracking-[0.2em]">Explore Sanctuary</span>  
                </div>  
              </div>  
              <div className="flex justify-between items-baseline border-b border-black/10 pb-4">  
                <h3 className="text-3xl font-serif">{sanctuary.name}</h3>  
                <p className="text-sm uppercase tracking-widest text-gray-400">{sanctuary.location}</p>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
