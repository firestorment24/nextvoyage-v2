import Image from 'next/image'  
import Link from 'next/link' // Added this missing import  
import { notFound } from 'next/navigation'  
import Hero from '@/components/Hero'  
import PropertyBuckets from '@/components/PropertyBuckets'  
import { SANCTUARY_DATA } from '@/data/sanctuaries'

// Defining the interface locally for stability  
interface Sanctuary {  
  id: string;  
  name: string;  
  heroImage: string;  
  loc: string;  
  tag: string;  
  atmosphere?: string;  
  highlights?: string[];  
  propertyCount?: number;  
  buckets?: any;  
}

export default function SanctuaryPage({ params }: { params: { id: string } }) {  
  const sanctuary = (SANCTUARY_DATA as Sanctuary[]).find((s) => s.id === params.id)

  if (!sanctuary) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-white">  
      <Hero   
        title={sanctuary.name}  
        subtitle={sanctuary.loc}  
        heroImage={sanctuary.heroImage}  
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">  
        {/* Intro Section */}  
        <section className="text-center space-y-4">  
          <h2 className="text-3xl font-serif text-gray-900">{sanctuary.tag}</h2>  
          {sanctuary.atmosphere && (  
            <p className="text-lg text-gray-600 leading-relaxed">  
              {sanctuary.atmosphere}  
            </p>  
          )}  
        </section>

        {/* Highlights */}  
        {sanctuary.highlights && (  
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b py-12">  
            {sanctuary.highlights.map((highlight, index) => (  
              <div key={index} className="flex items-start space-x-3">  
                <span className="text-blue-500 mt-1">✦</span>  
                <p className="text-gray-700">{highlight}</p>  
              </div>  
            ))}  
          </section>  
        )}

        {/* Property Count & Booking CTA */}  
        <section className="text-center space-y-6">  
          <p className="text-gray-500 italic">  
            Currently featuring {sanctuary.propertyCount || 0} exclusive properties in this collection.  
          </p>  
          <Link   
            href={`/reserve?sanctuary=${sanctuary.id}`}  
            className="inline-block bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition-colors"  
          >  
            Request a Curated Quote  
          </Link>  
        </section>  
          
        {/* Dynamic Property Buckets */}  
        {sanctuary.buckets && (  
          <PropertyBuckets buckets={sanctuary.buckets} />  
        )}  
      </div>  
    </main>  
  )  
}  
