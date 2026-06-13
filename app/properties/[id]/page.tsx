import React from 'react'  
import { notFound } from 'next/navigation'  
import Link from 'next/link'  
import Image from 'next/image'  
import { PROPERTY_DATA as properties } from '../../../data/properties'
import { PROPERTY_DATA as properties } from '../../data/properties'; 

// We define a local interface to ensure all fields are recognized by the build  
interface PropertyDetail {  
  id: string  
  name: string  
  location: string  
  image: string  
  highlight: string  
  description: string  
  exclusiveOffer: string | React.ReactNode  
  priceLevel: string | React.ReactNode  
}

interface PageProps {  
  params: Promise<{ id: string }>  
}

export async function generateStaticParams() {  
  return (properties as any[]).map((property) => ({  
    id: property.id,  
  }))  
}

export default async function PropertyPage({ params }: PageProps) {  
  const { id } = await params  
    
  // Cast to any first to bypass the restricted type from the data file  
  const property = (properties as any[]).find((p) => p.id === id) as PropertyDetail

  if (!property) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gold-50 pt-20">  
      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden">  
        <Image  
          src={property.image}  
          alt={property.name}  
          fill  
          priority  
          className="object-cover"  
          sizes="100vw"  
        />  
        <div className="absolute inset-0 bg-black/10" />  
      </section>

      {/* Intro Section */}  
      <section className="max-w-screen-xl mx-auto px-6 py-24 md:py-32">  
        <div className="max-w-3xl">  
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">  
            {property.location}  
          </p>  
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">  
            {property.name}  
          </h1>  
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-12">  
            {property.highlight}  
          </p>  
          <div className="prose prose-lg prose-gray font-light leading-relaxed">  
            <p>{property.description}</p>  
          </div>  
        </div>  
      </section>

      {/* Exclusivity Ledger */}  
      <section className="bg-gray-50 py-20">  
        <div className="max-w-screen-xl mx-auto px-6">  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">  
            <div>  
              <h2 className="text-2xl font-light tracking-tight mb-4">Off-Market Exclusivity</h2>  
              <p className="text-gray-600 font-light mb-8">  
                Through the NexVoyage Collective, this property includes curated benefits   
                secured via our direct relationship with the estate management.  
              </p>  
              <div className="space-y-4">  
                <div className="flex justify-between border-b border-gray-200 pb-2">  
                  <span className="text-gray-500 text-sm uppercase tracking-widest">Offer</span>  
                  <span className="font-medium text-gray-900">{property.exclusiveOffer}</span>  
                </div>  
                <div className="flex justify-between border-b border-gray-200 pb-2">  
                  <span className="text-gray-500 text-sm uppercase tracking-widest">Tier</span>  
                  <span className="font-medium text-gray-900">{property.priceLevel}</span>  
                </div>  
              </div>  
            </div>  
            <div className="flex flex-col items-center md:items-end justify-center">  
              <Link  
                href={`/reserve?property=${encodeURIComponent(property.name)}`}  
                className="inline-block bg-gray-900 text-white px-12 py-5 text-sm uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors duration-300"  
              >  
                Inquire for Availability  
              </Link>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Amenities Section */}  
      <section className="border-t border-gray-100">  
        <EliteAmenities />  
      </section>

      {/* Visual Break */}  
      <section className="h-[60vh] relative">  
        <Image  
          src={property.image}  
          alt="Details"  
          fill  
          className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"  
          sizes="100vw"  
        />  
      </section>  
    </main>  
  )  
}  
