import React from 'react';  
import { notFound } from 'next/navigation';  
import { properties } from '../../../data/properties';  
import { EliteAmenities } from '../../../components/EliteAmenities';

// Local interface to ensure TypeScript recognizes the 'image' field  
interface Property {  
  id: string;  
  name: string;  
  location: string;  
  image: string;  
  description?: string;  
  exclusiveOffer?: string;  
}

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {  
  const { id } = params;  
    
  // Cast the imported data to our local Property interface to fix the build error  
  const propertyList = properties as unknown as Property[];  
  const property = propertyList.find((p) => p.id === id);

  if (!property) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-white">  
      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden">  
        {property.image && (  
          <img  
            src={property.image}  
            alt={property.name}  
            className="h-full w-full object-cover"  
          />  
        )}  
        <div className="absolute inset-0 bg-black/30" />  
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">  
          <h1 className="text-5xl md:text-7xl font-serif mb-4 drop-shadow-lg">  
            {property.name}  
          </h1>  
          <p className="text-xl md:text-2xl font-light tracking-widest uppercase">  
            {property.location}  
          </p>  
        </div>  
      </section>

      {/* Property Details */}  
      <section className="max-w-7xl mx-auto px-6 py-24">  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">  
          <div>  
            <h2 className="text-3xl font-serif mb-8 text-neutral-900">The Experience</h2>  
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">  
              {property.description || "Experience unparalleled luxury in one of our most exclusive properties. This sanctuary offers a perfect blend of modern comfort and timeless elegance, curated specifically for the discerning traveler."}  
            </p>  
              
            {property.exclusiveOffer && (  
              <div className="bg-neutral-50 p-8 border border-neutral-100 rounded-sm">  
                <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-2">NexVoyage Collective Benefit</h3>  
                <p className="text-xl text-neutral-800 font-medium italic">  
                  "{property.exclusiveOffer}"  
                </p>  
              </div>  
            )}  
          </div>

          <div>  
            {/* Using the named export as verified in memory */}  
            <EliteAmenities />  
              
            <div className="mt-12 text-center">  
              <a   
                href={`/reserve?property=${property.id}`}  
                className="inline-block bg-neutral-900 text-white px-12 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-lg"  
              >  
                Inquire for Availability  
              </a>  
            </div>  
          </div>  
        </div>  
      </section>  
    </main>  
  );  
}  
