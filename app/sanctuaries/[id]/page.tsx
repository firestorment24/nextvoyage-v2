import { sanctuaries as rawSanctuaries } from '../../../data/sanctuaries'  
import { properties as rawProperties } from '../../../data/properties'  
import Link from 'next/link'  
import Image from 'next/image'

// Synchronized interfaces to match the data files  
interface Sanctuary {  
  id: string;  
  name: string;  
  heroImage: string;      // Fixed from 'image'  
  categoryDescription: string; // Fixed from 'description'  
}

interface Property {  
  id: string;  
  name: string;  
  location: string;  
  image: string;  
  sanctuaryId: string;  
}

// Cast both datasets to ensure type safety  
const sanctuaries = (rawSanctuaries as unknown) as Sanctuary[]  
const properties = (rawProperties as unknown) as Property[]

export async function generateStaticParams() {  
  return sanctuaries.map((s) => ({  
    id: s.id,  
  }))  
}

export default async function SanctuaryPage({ params }: { params: Promise<{ id: string }> }) {  
  const { id } = await params  
  const sanctuary = sanctuaries.find((s) => s.id === id)

  if (!sanctuary) {  
    return (  
      <div className="min-h-screen flex items-center justify-center bg-white">  
        <div className="text-center">  
          <h1 className="text-2xl font-light mb-4 text-gray-900">Sanctuary Not Found</h1>  
          <Link href="/sanctuaries" className="text-sm uppercase tracking-widest text-gold">Return to Collection</Link>  
        </div>  
      </div>  
    )  
  }

  // Filter properties that belong to this specific sanctuary  
  const relatedProperties = properties.filter((p) => p.sanctuaryId === id)

  return (  
    <main className="min-h-screen bg-white">  
      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full">  
        <Image  
          src={sanctuary.heroImage}  
          alt={sanctuary.name}  
          fill  
          className="object-cover"  
          priority  
        />  
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">  
          <div className="text-center">  
            <h1 className="text-white text-5xl md:text-8xl font-light tracking-[0.2em] uppercase">  
              {sanctuary.name}  
            </h1>  
          </div>  
        </div>  
      </section>

      {/* Overview */}  
      <section className="max-w-4xl mx-auto py-24 px-6 text-center">  
        <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-10">The Experience</p>  
        <h2 className="text-3xl md:text-5xl font-extralight text-gray-900 leading-tight">  
          {sanctuary.categoryDescription}  
        </h2>  
      </section>

      {/* Dynamic Grid of Properties */}  
      <section className="max-w-7xl mx-auto pb-32 px-6">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">  
          {relatedProperties.map((property) => (  
            <Link key={property.id} href={`/properties/${property.id}`} className="group">  
              <div className="relative aspect-[3/4] overflow-hidden mb-8">  
                <Image  
                  src={property.image}  
                  alt={property.name}  
                  fill  
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"  
                />  
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />  
              </div>  
              <div className="space-y-2">  
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">{property.location}</p>  
                <h3 className="text-2xl font-light text-gray-900">{property.name}</h3>  
                <div className="h-px w-0 group-hover:w-full bg-gray-200 transition-all duration-700" />  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Final CTA */}  
      <section className="border-t border-gray-100 py-32 text-center">  
        <h3 className="text-2xl font-light mb-10 tracking-wide">Ready to explore {sanctuary.name}?</h3>  
        <Link   
          href="/reserve"  
          className="inline-block px-16 py-5 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-gray-800 transition-all duration-300"  
        >  
          Inquire Now  
        </Link>  
      </section>  
    </main>  
  )  
}  
