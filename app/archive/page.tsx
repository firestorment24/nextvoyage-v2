import { PROPERTY_DATA } from '@/data/properties'  
import Image from 'next/image'  
import Link from 'next/link'

export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-black text-white">  
      <div className="max-w-7xl mx-auto px-6 py-20">  
        <div className="border-b border-[#C5A059]/30 pb-8 mb-16">  
          <p className="text-[#C5A059]/60 font-inter text-sm tracking-[0.2em] uppercase mb-2">  
            Registry of Significance  
          </p>  
          <h1 className="font-cormorant text-5xl md:text-7xl text-[#C5A059]">  
            The Archive  
          </h1>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {PROPERTY_DATA.map((property) => (  
            <Link  
              key={property.id}  
              href={`/archive/property/${property.id}`}  
              className="group relative aspect-[4/5] bg-[#0A0A0A] overflow-hidden border border-white/5 rounded-sm transition-all duration-500 hover:border-[#C5A059]/50"  
            >  
              <Image  
                src={property.image}  
                alt={property.name}  
                fill  
                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"  
              />  
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />  
              <div className="absolute bottom-0 left-0 right-0 p-6">  
                <p className="text-[#C5A059]/70 font-inter text-xs tracking-[0.2em] uppercase mb-1">  
                  {property.intel.category}  
                </p>  
                <h2 className="font-cormorant text-2xl text-white mb-1">  
                  {property.name}  
                </h2>  
                <p className="font-inter text-sm text-white/60">  
                  {property.location}  
                </p>  
                <p className="font-inter text-xs text-white/40 mt-3 line-clamp-2">  
                  {property.intel.positioning}  
                </p>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </main>  
  )  
}  
