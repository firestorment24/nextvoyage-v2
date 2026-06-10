import { properties as rawProperties } from '../../../data/properties'  
import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import Image from 'next/image'  
import { EliteAmenities } from '../../../components/EliteAmenities'

// Define the Property interface to match your data structure  
interface Property {  
  id: string;  
  name: string;  
  location: string;  
  image: string;  
  priceLevel: string;  
  exclusiveOffer: string;  
  highlight: string;  
  description: string;  
  amenities: string[];  
}

// Cast the raw data to our typed interface  
const properties = (rawProperties as unknown) as Property[]

export async function generateStaticParams() {  
  return properties.map((p) => ({  
    id: p.id,  
  }))  
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {  
  const { id } = await params  
  const property = properties.find((p) => p.id === id)

  if (!property) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-white">  
      {/* Hero Section */}  
      <section className="relative h-[70vh] w-full overflow-hidden">  
        <Image  
          src={property.image}  
          alt={property.name}  
          fill  
          className="object-cover"  
          priority  
        />  
        <div className="absolute inset-0 bg-black/10" />  
      </section>

      {/* Property Intro */}  
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">  
        <div className="lg:col-span-8">  
          <div className="space-y-4 mb-12">  
            <p className="text-xs uppercase tracking-[0.4em] text-gold">{property.location}</p>  
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900">  
              {property.name}  
            </h1>  
          </div>  
            
          <div className="prose prose-lg text-gray-600 font-light leading-relaxed max-w-2xl">  
            <p className="text-xl text-gray-900 mb-8 italic">"{property.highlight}"</p>  
            <p>{property.description}</p>  
          </div>  
        </div>

        {/* Exclusivity Ledger */}  
        <div className="lg:col-span-4 bg-gray-50 p-10 h-fit border border-gray-100">  
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8 border-b border-gray-200 pb-4">  
            Membership Benefits  
          </p>  
            
          <div className="space-y-8 mb-12">  
            <div>  
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Exclusive For You</p>  
              <p className="text-lg font-light text-gray-900">{property.exclusiveOffer}</p>  
            </div>  
            <div>  
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Est. Investment</p>  
              <p className="text-lg font-light text-gray-900">{property.priceLevel}</p>  
            </div>  
          </div>

          <Link   
            href={`/reserve?property=${encodeURIComponent(property.name)}`}  
            className="block w-full text-center py-4 bg-black text-white text-[10px] uppercase tracking-[0.4em] hover:bg-gray-800 transition-colors"  
          >  
            Inquire Privately  
          </Link>  
        </div>  
      </section>

      {/* Amenities Section */}  
      <section className="border-t border-gray-100">  
        <EliteAmenities amenities={property.amenities} />  
      </section>

      {/* Visual Break */}  
      <section className="py-24 max-w-7xl mx-auto px-6">  
        <div className="relative aspect-video w-full overflow-hidden">  
          <Image  
            src={property.image} // Reusing image or a secondary one if available  
            alt="Interior detail"  
            fill  
            className="object-cover"  
          />  
        </div>  
      </section>  
    </main>  
  )  
}  
