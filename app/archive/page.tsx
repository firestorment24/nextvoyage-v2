import Link from "next/link";  
import Image from "next/image";  
import { PROPERTY_DATA } from "@/lib/data/sanctuaries";

export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-black">  
      {/* ─── HERO ─── */}  
      <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">  
        <Image  
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"  
          alt="The Archive"  
          fill  
          className="object-cover opacity-50 grayscale"  
          priority  
        />  
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />  
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">  
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-wide">  
            The Archive  
          </h1>  
          <p className="mt-4 font-sans text-sm md:text-base text-white/80 max-w-xl tracking-wider uppercase">  
            Elite Ledger &mdash; 18 Sanctuaries  
          </p>  
        </div>  
      </section>

      {/* ─── DOSSIER GRID ─── */}  
      <section className="max-w-7xl mx-auto px-6 pb-24 -mt-20 relative z-10">  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">  
          {PROPERTY_DATA.map((property) => (  
            <Link  
              key={property.id}  
              href={`/archive/${property.id}`}  
              className="group block relative overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-[#C5A059]/50 transition-all duration-500"  
            >  
              {/* Image */}  
              <div className="relative w-full aspect-[4/5] overflow-hidden">  
                <Image  
                  src={property.image || property.images?.[0] || "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80"}  
                  alt={property.name}  
                  fill  
                  className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale group-hover:opacity-60"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />  
              </div>

              {/* Text overlay */}  
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">  
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#C5A059]">  
                  {property.intel?.category || property.collection || "Sanctuary"}  
                </span>  
                <h2 className="font-serif text-xl md:text-2xl text-white mt-1 leading-tight">  
                  {property.name}  
                </h2>  
                <p className="font-sans text-sm text-white/70 mt-1 line-clamp-2">  
                  {property.location}  
                </p>  
              </div>

              {/* Bottom bar */}  
              <div className="px-5 py-4 border-t border-neutral-800">  
                <span className="font-sans text-xs tracking-wider uppercase text-white/50 group-hover:text-[#C5A059] transition-colors">  
                  View Dossier &rarr;  
                </span>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* ─── FOOTER ─── */}  
      <footer className="border-t border-neutral-900 py-8 text-center">  
        <p className="font-sans text-xs tracking-widest uppercase text-white/40">  
          NexVoyage Collective &copy; {new Date().getFullYear()}  
        </p>  
      </footer>  
    </main>  
  );  
}  
