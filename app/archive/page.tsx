import { properties } from '@/data/properties'  
import { getPropertyImages } from '@/lib/data/property-images'  
import Image from 'next/image'  
import Link from 'next/link'

export default function ArchivePage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white font-sans">  
      <div className="max-w-7xl mx-auto px-6 py-24">  
        {/* Header */}  
        <div className="mb-16">  
          <p className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm font-light mb-4">  
            Registry of Significance  
          </p>  
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight">  
            The Archive  
          </h1>  
          <div className="w-12 h-[1px] bg-[#D4AF37] mt-6" />  
        </div>

        {/* Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">  
          {properties.map((property) => {  
            const images = getPropertyImages(property.id)  
            const imageUrl = images?.hero || property.image || '/placeholder.jpg'

            return (  
              <Link  
                key={property.id}  
                href={`/archive/property/${property.id}`}  
                className="group block"  
              >  
                <div className="relative aspect-[4/3] overflow-hidden mb-5">  
                  <Image  
                    src={imageUrl}  
                    alt={property.name}  
                    fill  
                    className="object-cover transition-transform duration-700 group-hover:scale-105"  
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"  
                  />  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />  
                </div>

                <p className="text-[#D4AF37] text-xs tracking-[0.15em] uppercase mb-2">  
                  {property.collection}  
                </p>

                <h2 className="font-serif text-2xl text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-1">  
                  {property.name}  
                </h2>

                <p className="text-sm text-zinc-400 mb-3">  
                  {property.location}  
                </p>

                <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">  
                  {property.description}  
                </p>  
              </Link>  
            )  
          })}  
        </div>  
      </div>  
    </main>  
  )  
}  
