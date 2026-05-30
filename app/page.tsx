"use client";  
import Navigation from './Navigation';  
import Link from 'next/link';

const SANCTUARIES = [  
  { slug: 'metropolitan', title: 'Metropolitan', location: 'URBAN CENTERS' },  
  { slug: 'floating', title: 'Floating', location: 'OPEN WATERS' },  
  { slug: 'island', title: 'Island', location: 'REMOTE ARCHIPELAGOS' },  
  { slug: 'alpine', title: 'Alpine', location: 'HIGH ALTITUDES' },  
  { slug: 'stadium', title: 'Stadium', location: 'ELITE ARENAS' },  
  { slug: 'cinematic', title: 'Cinematic', location: 'MASTERPIECE SETS' },  
  { slug: 'fortress', title: 'Fortress', location: 'HISTORIC STRONGHOLDS' },  
  { slug: 'safari', title: 'Safari', location: 'WILD SAVANNAS' },  
  { slug: 'oasis', title: 'Oasis', location: 'ARID HIDDEN GEMS' },  
];

export default function HomePage() {  
  return (  
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">  
      <Navigation />

      {/* Hero Section */}  
      <section className="h-screen flex flex-col items-center justify-center px-6 text-center">  
        <h1 className="text-7xl md:text-9xl font-light tracking-tighter mb-8 animate-fade-in">  
          NEXTVOYAGE<br />COLLECTIVE  
        </h1>  
        <p className="text-sm md:text-base tracking-[0.3em] text-white/40 uppercase">  
          Curating the Unreachable  
        </p>  
      </section>

      {/* Philosophy Section */}  
      <section className="max-w-4xl mx-auto px-6 py-32 text-center border-t border-white/10">  
        <h2 className="text-xs tracking-[0.4em] text-white/30 uppercase mb-12">The Philosophy</h2>  
        <p className="text-2xl md:text-4xl font-light leading-tight text-white/80">  
          We do not just book travel. We engineer sanctuaries. For those who have seen everything, we find the things that haven't been seen.  
        </p>  
      </section>

      {/* 9-Sanctuary Grid */}  
      <section className="px-4 py-24 border-t border-white/10">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">  
          {SANCTUARIES.map((item) => (  
            <Link   
              key={item.slug}   
              href={`/sanctuary/${item.slug}`}  
              className="group relative aspect-square bg-black flex flex-col items-center justify-center p-12 transition-all duration-700 hover:bg-neutral-900"  
            >  
              <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase mb-4 transition-transform duration-500 group-hover:-translate-y-2">  
                {item.location}  
              </span>  
              <h3 className="text-3xl md:text-4xl font-light tracking-tighter transition-all duration-500 group-hover:tracking-widest">  
                {item.title.toUpperCase()}  
              </h3>  
              <div className="absolute bottom-12 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-[-10px]">  
                <span className="text-[10px] tracking-widest uppercase border-b border-white/20 pb-1">  
                  Explore Sanctuary  
                </span>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Footer */}  
      <footer className="py-24 px-6 border-t border-white/10 flex flex-col items-center">  
        <div className="flex gap-12 text-[10px] tracking-[0.3em] text-white/30 uppercase mb-12">  
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>  
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>  
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>  
        </div>  
        <p className="text-[10px] tracking-widest text-white/20">© 2026 NEXTVOYAGE COLLECTIVE</p>  
      </footer>  
    </main>  
  );  
}  
