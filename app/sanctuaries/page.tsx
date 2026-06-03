import Navigation from '../components/Navigation';  
import Footer from '../components/Footer';  
import { SANCTUARIES_DATA } from '../../data/sanctuaries'; // Going up two levels to root  
import Link from 'next/link';

export default function SanctuariesIndex() {  
  return (  
    <main className="bg-[#0a0a0a] text-white min-h-screen font-light selection:bg-white/20">  
      <Navigation />  
        
      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto">  
        <header className="mb-24 max-w-3xl border-l border-white/10 pl-10">  
          <h1 className="text-6xl md:text-8xl mb-6 tracking-tighter font-extralight">  
            The Sanctuaries  
          </h1>  
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed uppercase tracking-[0.2em] font-light">  
            A Global Collection of Private Travel Assets  
          </p>  
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">  
          {SANCTUARIES_DATA.map((sanctuary) => (  
            <Link   
              key={sanctuary.slug}   
              href={`/sanctuaries/${sanctuary.slug}`}  
              className="group flex flex-col space-y-6"  
            >  
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 shadow-2xl">  
                <img   
                  src={sanctuary.coverImage}   
                  alt={sanctuary.name}  
                  className="object-cover w-full h-full transition-transform duration-[1500ms] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />  
                <div className="absolute bottom-8 left-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">  
                  <span className="text-[10px] tracking-[0.4em] uppercase bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2">  
                    Explore Asset  
                  </span>  
                </div>  
              </div>

              <div className="space-y-2">  
                <div className="flex justify-between items-end">  
                  <h2 className="text-3xl tracking-tight font-light">{sanctuary.name}</h2>  
                  <span className="text-[11px] tracking-widest text-gray-500 uppercase pb-1">  
                    {sanctuary.location}  
                  </span>  
                </div>  
                <p className="text-gray-500 text-sm italic font-light serif">  
                  {sanctuary.tagline}  
                </p>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      <Footer />  
    </main>  
  );  
}  
