import Image from 'next/image'    
import { PROPERTY_DATA as properties } from '../../../data/properties'  
import { EliteAmenities } from '../../../components/EliteAmenities'  
import Link from 'next/link'

interface PropertyDetail {  
  id: string  
  name: string  
  location: string  
  image: string  
  highlight: string  
  exclusiveOffer?: string  
  priceLevel: string  
  category: string  
}

export async function generateStaticParams() {  
  return properties.map((property) => ({  
    id: property.id,  
  }))  
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {  
  const { id } = await params  
  const property = properties.find((p) => p.id === id) as PropertyDetail | undefined

  if (!property) {  
    return (  
      <div className="min-h-screen flex items-center justify-center bg-white text-black">  
        <div className="text-center">  
          <h1 className="text-4xl font-light mb-4">Property Not Found</h1>  
          <Link href="/archive" className="text-sm uppercase tracking-widest hover:opacity-50 transition-opacity">  
            Return to Index  
          </Link>  
        </div>  
      </div>  
    )  
  }

  return (  
    <main className="min-h-screen bg-white pt-20">  
      {/* Hero Section */}  
      <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">  
          {/* Visuals */}  
          <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">  
            <Image  
              src={property.image}  
              alt={property.name}  
              fill  
              className="object-cover"  
              priority  
            />  
          </div>

          {/* Intel */}  
          <div className="flex flex-col h-full justify-center">  
            <div className="mb-8">  
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2 block">  
                {property.location} // {property.category}  
              </span>  
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6">  
                {property.name}  
              </h1>  
              <p className="text-lg text-gray-600 leading-relaxed font-light italic">  
                "{property.highlight}"  
              </p>  
            </div>

            <div className="space-y-8 border-t border-gray-100 pt-8">  
              {property.exclusiveOffer && (  
                <div>  
                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Member Benefit</h3>  
                  <p className="text-sm font-medium text-black uppercase tracking-wider">  
                    {property.exclusiveOffer}  
                  </p>  
                </div>  
              )}

              <div>  
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2">Positioning</h3>  
                <p className="text-sm text-black">{property.priceLevel}</p>  
              </div>

              <div className="pt-4">  
                <Link   
                  href={`/reserve?property=${property.id}`}  
                  className="inline-block bg-black text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gray-900 transition-colors"  
                >  
                  Request Private Intake  
                </Link>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Amenities Section */}  
      <section className="border-t border-gray-100">  
        <EliteAmenities />  
      </section>

      {/* Back to Index Footer */}  
      <section className="py-20 text-center">  
        <Link href="/archive" className="text-[10px] uppercase tracking-[0.4em] text-gray-400 hover:text-black transition-colors">  
          [ Back to Mission Profile Index ]  
        </Link>  
      </section>  
    </main>  
  )  
}  
