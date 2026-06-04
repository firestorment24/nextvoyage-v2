import Navigation from '../Navigation';  
import Footer from '../Footer';  
import { SANCTUARIES_DATA } from '../../data/sanctuaries';  
import Link from 'next/link';

export default function SanctuariesPage() {  
  return (  
    <main className="min-h-screen bg-[#F9F7F2] text-[#2C2C2C]">  
      <Navigation />  
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">  
        <h1 className="text-6xl font-serif mb-12 italic">The Sanctuaries</h1>  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
          {SANCTUARIES_DATA.map((sanctuary) => (  
            <Link key={sanctuary.slug} href={`/sanctuaries/${sanctuary.slug}`} className="group block">  
              <div className="aspect-[16/9] bg-neutral-200 mb-4 overflow-hidden">  
                <div className="w-full h-full bg-neutral-300 group-hover:scale-105 transition-transform duration-700" />  
              </div>  
              <h3 className="text-2xl font-serif">{sanctuary.name}</h3>  
              <p className="text-sm uppercase tracking-widest text-gray-500">{sanctuary.location}</p>  
            </Link>  
          ))}  
        </div>  
      </section>  
      <Footer />  
    </main>  
  );  
}  
