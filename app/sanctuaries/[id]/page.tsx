import { notFound } from 'next/navigation'  
import Image from 'next/image'  
import Link from 'next/link'  
import { sanctuaries } from '../../../data/sanctuaries'  
import { properties } from '../../../data/properties'  
import Navigation from '../../../components/Navigation'  
import Footer from '../../../components/Footer'

// Local interface to handle the dynamic property casting  
interface Property {  
  id: string;  
  name: string;  
  location: string;  
  image: string;  
  sanctuaryId: string;  
  priceLevel: string;  
}

export default function SanctuaryDetailPage({ params }: { params: { id: string } }) {  
  const sanctuary = sanctuaries.find((s) => s.id === params.id)

  if (!sanctuary) {  
    notFound()  
  }

  // Filter properties belonging to this specific sanctuary  
  const relatedProperties = (properties as unknown as Property[]).filter(  
    (p) => p.sanctuaryId === sanctuary.id  
  )

  return (  
    <main className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-light">  
      <Navigation />

      {/* Hero Section */}  
      <section className="relative h-[70vh] w-full">  
        <Image  
          src={sanctuary.heroImage}  
          alt={sanctuary.name}  
          fill  
          className="object-cover"  
          priority  
        />  
        <div className="absolute inset-0 bg-black/30" />  
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">  
          <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-tight">  
            {sanctuary.name}  
          </h1>  
          <p className="text-xl md:text-2xl max-w-2xl font-light italic opacity-90">  
            {sanctuary.atmosphere}  
          </p>  
        </div>  
      </section>

      {/* The Brief */}  
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">  
        <h2 className="text-sm uppercase tracking-[0.3em] mb-8 text-[#8c8c8c]">  
          The Brief  
        </h2>  
        <p className="text-2xl md:text-3xl leading-relaxed font-serif text-[#2c2c2c]">  
          {sanctuary.categoryDescription}  
        </p>  
      </section>

      {/* The Collection */}  
      <section className="max-w-7xl mx-auto px-6 py-12">  
        <div className="flex justify-between items-end mb-12">  
          <div>  
            <h3 className="text-sm uppercase tracking-[0.3em] text-[#8c8c8c] mb-2">  
              The Collection  
            </h3>  
            <h2 className="text-4xl font-serif">Refined Dwellings</h2>  
          </div>  
          <p className="text-[#8c8c8c] italic">{relatedProperties.length} Sanctuaries Found</p>  
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">  
          {relatedProperties.map((property) => (  
            <Link   
              key={property.id}   
              href={`/properties/${property.id}`}  
              className="group block overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-500"  
            >  
              <div className="relative aspect-[4/5] overflow-hidden">  
                <Image  
                  src={property.image}  
                  alt={property.name}  
                  fill  
                  className="object-cover transition-transform duration-700 group-hover:scale-105"  
                />  
              </div>  
              <div className="p-8">  
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8c8c8c] mb-2">  
                  {property.location}  
                </p>  
                <h4 className="text-xl font-serif mb-4 group-hover:text-[#c5a059] transition-colors">  
                  {property.name}  
                </h4>  
                <div className="flex justify-between items-center pt-4 border-t border-[#f0f0f0]">  
                  <span className="text-xs tracking-widest text-[#8c8c8c]">EXPLORE</span>  
                  <span className="text-xs font-medium">{property.priceLevel}</span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      {/* Begin Your Manifest */}  
      <section className="bg-[#1a1a1a] text-white py-24 text-center">  
        <div className="max-w-2xl mx-auto px-6">  
          <h2 className="text-3xl md:text-4xl font-serif mb-8">  
            Begin Your Manifest  
          </h2>  
          <Link  
            href="/reserve"  
            className="inline-block border border-white/30 px-12 py-5 text-sm uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500"  
          >  
            Request Private Access  
          </Link>  
        </div>  
      </section>

      <Footer />  
    </main>  
  )  
}  
