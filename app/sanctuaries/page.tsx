import Navigation from '../components/Navigation';  
import Footer from '../components/Footer';  
import { SANCTUARIES_DATA } from '../../data/sanctuaries';   
import Link from 'next/link';

export default function SanctuariesIndex() {  
  return (  
    <main className="bg-[#0a0a0a] text-white min-h-screen">  
      <Navigation />  
      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto">  
        <h1 className="text-6xl mb-12 tracking-tighter">The Sanctuaries</h1>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">  
          {SANCTUARIES_DATA.map((s) => (  
            <Link key={s.slug} href={`/sanctuaries/${s.slug}`} className="group block">  
              <div className="aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">  
                <img src={s.coverImage} className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity" />  
              </div>  
              <h2 className="text-2xl font-light">{s.name}</h2>  
              <p className="text-gray-500 italic text-sm">{s.location}</p>  
            </Link>  
          ))}  
        </div>  
      </section>  
      <Footer />  
    </main>  
  );  
}  
