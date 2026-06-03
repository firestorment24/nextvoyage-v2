import Navigation from '../components/Navigation';  
import Footer from '../components/Footer';  
// We go up two levels: out of 'sanctuaries', then out of 'app' to reach root/data  
import { SANCTUARIES_DATA } from '../../data/sanctuaries';   
import Link from 'next/link';

export default function SanctuariesIndex() {  
  return (  
    <main className="bg-[#0a0a0a] text-white min-h-screen font-light">  
      <Navigation />  
        
      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto">  
        <header className="mb-24 border-l border-white/10 pl-10">  
          <h1 className="text-6xl md:text-8xl mb-4 tracking-tighter">The Sanctuaries</h1>  
          <p className="text-gray-500 text-lg uppercase tracking-[0.2em]">  
            A Global Collection of Private Travel Assets  
          </p>  
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">  
          {SANCTUARIES_DATA.map((sanctuary) => (  
            <Link   
              key={sanctuary.slug}   
              href={`/sanctuaries/${sanctuary.slug}`}  
              className="group"  
            >  
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-8">  
                <img   
                  src={sanctuary.coverImage}   
                  alt={sanctuary.name}  
                  className="object-cover w-full h-full transition-transform duration-[1.5s] group-hover:scale-110 opacity-70 group-hover:opacity-100"  
                />  
                <div className="absolute bottom-6 left-6">  
                  <span className="text-[10px] tracking-[0.3em] uppercase bg-black/40 backdrop-blur-md px-3 py-1 border border-white/10">  
                    {sanctuary.location}  
                  </span>  
                </div>  
              </div>  
              <h2 className="text-3xl mb-2 tracking-tight font-light">{sanctuary.name}</h2>  
              <p className="text-gray-500 text-sm italic font-light italic">{sanctuary.tagline}</p>  
            </Link>  
          ))}  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
