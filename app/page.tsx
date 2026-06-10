import Image from 'next/image'  
import Link from 'next/link'  
import Hero from '@/components/Hero'  
import { SANCTUARY_DATA } from '@/data/sanctuaries'

export default function Home() {  
  return (  
    <main className="min-h-screen bg-white">  
      {/* Main Hero Section */}  
      <Hero   
        title="NexVoyage Collective"  
        subtitle="Exclusive Sanctuaries for the Discerning Traveler"  
      />

      {/* Sanctuaries Grid */}  
      <section className="max-w-7xl mx-auto px-6 py-16">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {SANCTUARY_DATA.map((sanctuary) => (  
            <Link   
              href={`/sanctuaries/${sanctuary.id}`}   
              key={sanctuary.id}  
              className="group cursor-pointer"  
            >  
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">  
                <Image  
                  src={sanctuary.heroImage}  
                  alt={sanctuary.name}  
                  fill  
                  className="object-cover transition-transform duration-500 group-hover:scale-105"  
                />  
              </div>  
              <div className="space-y-1">  
                <p className="text-xs uppercase tracking-widest text-gray-500">  
                  {sanctuary.location}  
                </p>  
                <h2 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors">  
                  {sanctuary.name}  
                </h2>  
                <p className="text-sm text-gray-600 italic">  
                  {sanctuary.tagline}  
                </p>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>  
    </main>  
  )  
}  
