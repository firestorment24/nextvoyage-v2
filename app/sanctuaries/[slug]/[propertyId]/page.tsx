import { notFound } from 'next/navigation';  
import Image from 'next/image';  
import Link from 'next/link';  
import { properties } from '@/data/properties';

interface PageProps {  
  params: {  
    slug: string;  
    propertyId: string;  
  };  
}

export async function generateStaticParams() {  
  return properties.map((p) => ({  
    slug: p.sanctuarySlug,  
    propertyId: p.id,  
  }));  
}

export default function PropertyPage({ params }: PageProps) {  
  const property = properties.find((p) => p.id === params.propertyId);

  if (!property) notFound();

  return (  
    <main className="min-h-screen bg-white">  
      {/* Visual Header */}  
      <section className="relative h-[70vh]">  
        <Image   
          src={property.image}   
          alt={property.name}   
          fill   
          className="object-cover"  
        />  
        <div className="absolute inset-0 bg-black/20" />  
        <div className="absolute bottom-0 left-0 w-full p-12 text-white">  
          <div className="max-w-7xl mx-auto">  
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-70 mb-4 block">  
              {property.location}  
            </span>  
            <h1 className="text-6xl font-light tracking-tighter">{property.name}</h1>  
          </div>  
        </div>  
      </section>

      {/* The Ledger: High-End Details */}  
      <section className="py-24 px-6 max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">  
            
          {/* Left: Narrative */}  
          <div className="lg:col-span-7">  
            <p className="text-sm tracking-[0.3em] uppercase text-neutral-400 mb-8">  
              The Experience  
            </p>  
            <p className="text-3xl font-light leading-snug text-neutral-900 mb-12 italic">  
              "{property.highlight}"  
            </p>  
            <p className="text-xl text-neutral-500 font-light leading-relaxed">  
              {property.description}  
            </p>  
          </div>

          {/* Right: The Reserve Benefits (Sidebar) */}  
          <div className="lg:col-span-5 border-l border-neutral-100 pl-12">  
            <div className="bg-neutral-50 p-10">  
              <h2 className="text-[10px] tracking-[0.3em] uppercase font-bold text-neutral-900 mb-10">  
                Member Benefits  
              </h2>  
                
              <div className="space-y-8">  
                <div>  
                  <span className="text-[10px] text-neutral-400 uppercase block mb-1">Exclusive Offer</span>  
                  <p className="text-lg text-neutral-900 font-medium">{property.exclusiveOffer}</p>  
                </div>  
                  
                <div>  
                  <span className="text-[10px] text-neutral-400 uppercase block mb-1">Amenities</span>  
                  <ul className="space-y-2 mt-3">  
                    {property.amenities.map((item, i) => (  
                      <li key={i} className="text-sm text-neutral-600 flex items-center">  
                        <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-3" />  
                        {item}  
                      </li>  
                    ))}  
                  </ul>  
                </div>

                <div className="pt-8">  
                  <Link   
                    href="/reserve"  
                    className="block w-full bg-neutral-900 text-white text-center py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-neutral-800 transition-colors"  
                  >  
                    Inquire for Dates  
                  </Link>  
                </div>  
              </div>  
            </div>  
          </div>

        </div>  
      </section>  
    </main>  
  );  
}  
