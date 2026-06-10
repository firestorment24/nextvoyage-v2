import { PROPERTIES_DATA } from '@/lib/properties'  
import Link from 'next/link'  
import Image from 'next/image'

export default function SanctuariesPage() {  
  return (  
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-6 lg:px-12">  
      <header className="max-w-7xl mx-auto mb-16">  
        <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">  
          The Sanctuary Collection  
        </h1>  
        <p className="text-gray-500 text-lg max-w-2xl">  
          A curated portfolio of high-security retreats, designed for those who value total discretion and absolute comfort.  
        </p>  
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
        {PROPERTIES_DATA.map((property) => (  
          <div key={property.id} className="group flex flex-col space-y-4">  
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900 border border-zinc-800">  
              <Image  
                src={property.image}  
                alt={property.name}  
                fill  
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"  
              />  
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] tracking-widest uppercase">  
                {property.location}  
              </div>  
            </div>  
              
            <div className="flex flex-col space-y-2">  
              <div className="flex justify-between items-end">  
                <h2 className="text-xl font-medium tracking-tight">{property.name}</h2>  
                <span className="text-xs text-zinc-600 tracking-widest">{property.priceLevel}</span>  
              </div>  
              <p className="text-sm text-zinc-400 line-clamp-2">  
                {property.highlight}  
              </p>  
              <Link   
                href={`/reserve?property=${property.id}`}  
                className="text-xs tracking-[0.2em] uppercase pt-2 border-b border-zinc-800 pb-1 w-fit transition-colors hover:border-white hover:text-white text-zinc-500"  
              >  
                Reserve Sanctuary  
              </Link>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  )  
}  
