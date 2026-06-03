import Navigation from '../components/Navigation';  
import Footer from '../components/Footer';  
import { SANCTUARIES_DATA } from '../data/sanctuaries'; // Ensure this path matches your data file  
import Link from 'next/link';

export default function SanctuariesIndex() {  
  return (  
    <main className="bg-[#0a0a0a] text-white min-h-screen font-light">  
      <Navigation />  
        
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">  
        <header className="mb-16 border-l border-white/20 pl-8">  
          <h1 className="text-5xl md:text-7xl mb-4 tracking-tighter">The Sanctuaries</h1>  
          <p className="text-gray-400 max-w-xl text-lg uppercase tracking-widest text-sm">  
            A Global Collection of Private Travel Assets  
          </p>  
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">  
          {SANCTUARIES_DATA.map((sanctuary) => (  
            <Link   
              key={sanctuary.slug}   
              href={`/sanctuaries/${sanctuary.slug}`}  
              className="group block"  
            >  
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-6">  
                <img   
                  src={sanctuary.coverImage}   
                  alt={sanctuary.name}  
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"  
                />  
                <div className="absolute bottom-6 left-6">  
                  <span className="text-[10px] tracking-[0.3em] uppercase bg-white/10 backdrop-blur-md px-3 py-1">  
                    {sanctuary.location}  
                  </span>  
                </div>  
              </div>  
              <h2 className="text-2xl mb-2 tracking-tight">{sanctuary.name}</h2>  
              <p className="text-gray-500 text-sm italic">{sanctuary.tagline}</p>  
            </Link>  
          ))}  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
