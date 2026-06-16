/**  
 * app/journal/page.tsx  
 */  
import Link from 'next/link'  
import { DESTINATIONS_DATA } from '@/lib/journal-data'

// Standardized slug generator  
const getSlug = (location: string) =>   
  location.toLowerCase()  
    .replace(/\s+/g, '-')  
    .replace(/[().]/g, '') // Remove parentheses and dots  
    .replace(/-+/g, '-')   // Remove double hyphens

export default function JournalPage() {  
  return (  
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] pt-32 pb-20 px-6">  
      <div className="max-w-7xl mx-auto">  
        <header className="mb-20 text-center">  
          <h1 className="text-5xl md:text-7xl font-light font-serif mb-6 tracking-tight text-[#C5A059]">  
            The Journal  
          </h1>  
          <p className="text-xl text-[#888] max-w-2xl mx-auto font-light leading-relaxed">  
            Tactical intelligence and seasonal reports from the NexVoyage Collective.  
          </p>  
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">  
          {DESTINATIONS_DATA.map((dest) => (  
            <Link   
              key={dest.id}   
              href={`/journal/${getSlug(dest.location)}`}  
              className="group block"  
            >  
              <div className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-6">  
                <img  
                  src={dest.heroImage}  
                  alt={dest.location}  
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />  
                <div className="absolute bottom-6 left-6 right-6">  
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] mb-2">  
                    {dest.coordinates}  
                  </p>  
                  <h3 className="text-2xl font-serif font-light tracking-wide">  
                    {dest.location}  
                  </h3>  
                </div>  
              </div>  
              <div className="space-y-2">  
                <h4 className="text-[#C5A059] font-serif italic text-lg leading-snug">  
                  {dest.orchestration}  
                </h4>  
                <p className="text-sm text-[#888] leading-relaxed line-clamp-2 font-light">  
                  {dest.summary}  
                </p>  
                <div className="pt-4 flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#E5E5E5] group-hover:text-[#C5A059] transition-colors">  
                  <span>Read Narrative</span>  
                  <span className="h-px w-8 bg-[#C5A059]" />  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </div>  
  )  
}  
