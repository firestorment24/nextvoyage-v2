import Link from 'next/link'  
import { DESTINATIONS_DATA } from '@/lib/journal-data'

interface Destination {  
  id: string  
  location: string  
  coordinates: string  
  summary: string  
  heroImage: string // Updated to match lib/journal-data.ts  
  sanctuary: {  
    id: string  
    name: string  
    description: string  
  }  
  orchestration: string  
}

export default function JournalPage() {  
  // Standardized slug helper to match detail page routing  
  const getSlug = (location: string) => {  
    return location  
      .toLowerCase()  
      .replace(/\s+/g, '-')  
      .replace(/[()]/g, '')  
      .replace(/--+/g, '-')  
  }

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] selection:bg-[#d4af37] selection:text-black">  
      {/* Editorial Header */}  
      <header className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto">  
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#d4af37]/20 pb-12">  
          <div>  
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/60 block mb-4">  
              Volume 01 // The Master Ledger  
            </span>  
            <h1 className="text-6xl md:text-8xl font-serif leading-tight">  
              The Journal  
            </h1>  
          </div>  
          <div className="max-w-sm">  
            <p className="font-serif italic text-lg text-[#d4af37]/80 leading-relaxed">  
              &quot;Tactical intelligence and seasonal reports from the NexVoyage Collective.&quot;  
            </p>  
          </div>  
        </div>  
      </header>

      {/* Magazine Grid */}  
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">  
          {(DESTINATIONS_DATA as Destination[]).map((item) => (  
            <Link   
              key={item.id}   
              href={`/journal/${getSlug(item.location)}`}  
              className="group block"  
            >  
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#1A1A1A]">    
                <img    
                  src={item.heroImage} // Changed from imageUrl to heroImage    
                  alt={item.location}    
                  className="object-cover w-full h-full transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"    
                />    
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />  
                <div className="absolute bottom-6 left-6 right-6">  
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d4af37]">  
                    {item.coordinates}  
                  </span>  
                </div>  
              </div>

              <div className="space-y-4">  
                <h3 className="text-3xl font-serif group-hover:text-[#d4af37] transition-colors duration-300">  
                  {item.location}  
                </h3>  
                <p className="text-sm text-[#E5E5E5]/60 leading-relaxed font-serif line-clamp-3">  
                  {item.summary}  
                </p>  
                <div className="pt-4 flex items-center justify-between border-t border-[#d4af37]/10">  
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#d4af37]/40">  
                    {item.orchestration}  
                  </span>  
                  <span className="font-mono text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">  
                    Read Report →  
                  </span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Footer Nav */}  
      <footer className="px-6 md:px-12 py-20 border-t border-[#d4af37]/10 max-w-7xl mx-auto flex justify-between items-center">  
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/40">  
          End of Ledger // Page 01 of 27  
        </span>  
        <Link href="/invitation" className="font-mono text-[10px] uppercase tracking-[0.3em] hover:text-[#d4af37] transition-colors">  
          Request Access  
        </Link>  
      </footer>  
    </main>  
  )  
}  
