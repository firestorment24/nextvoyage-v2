import { notFound } from 'next/navigation';  
import Image from 'next/image';  
import Link from 'next/link';  
import { PROPERTY_DATA, Property } from '../../../data/properties';  
import { EliteAmenities } from '../../../components/EliteAmenities';  
import Navigation from '../../../components/Navigation';  
import Footer from '../../../components/Footer';

interface PropertyDetail extends Property {  
  // Ensuring consistency with the PROPERTY_DATA manifest  
}

export async function generateStaticParams() {  
  return PROPERTY_DATA.map((property) => ({  
    id: property.id,  
  }));  
}

export default async function PropertyPage({ params }: { params: { id: string } }) {  
  const { id } = params;  
  const property = PROPERTY_DATA.find((p) => p.id === id);

  if (!property) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-black text-white selection:bg-[#d4af37]/30">  
      <Navigation />  
        
      {/* Cinematic Hero Section */}  
      <section className="relative h-[70vh] w-full overflow-hidden">  
        <Image  
          src={property.image}  
          alt={property.name}  
          fill  
          priority  
          className="object-cover brightness-75"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />  
        <div className="absolute bottom-12 left-8 md:left-16 max-w-4xl">  
          <p className="text-[#d4af37] font-mono tracking-[0.2em] uppercase text-sm mb-4">  
            {property.id} // {property.intel.category}  
          </p>  
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-2">  
            {property.name}  
          </h1>  
          <p className="text-xl md:text-2xl text-zinc-400 font-light italic">  
            {property.location}  
          </p>  
        </div>  
      </section>

      {/* Intel / Dossier Section */}  
      <section className="py-24 px-8 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-zinc-900">  
        <div className="lg:col-span-8">  
          <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">  
            Strategic Positioning  
          </h2>  
          <p className="text-2xl md:text-3xl leading-relaxed font-light text-zinc-200">  
            {property.intel.positioning}  
          </p>  
        </div>  
          
        <div className="lg:col-span-4 space-y-12">  
          <div>  
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">  
              Exclusive Member Benefits  
            </h2>  
            <ul className="space-y-4">  
              {property.intel.memberBenefits.map((benefit, index) => (  
                <li key={index} className="flex items-start gap-3 text-zinc-400">  
                  <span className="text-[#d4af37] mt-1">✦</span>  
                  {benefit}  
                </li>  
              ))}  
            </ul>  
          </div>  
            
          <Link   
            href={`/reserve?property=${property.id}`}  
            className="inline-block w-full text-center py-5 px-8 bg-[#d4af37] text-black font-bold tracking-widest uppercase text-sm hover:bg-white transition-colors"  
          >  
            Initiate Booking Request  
          </Link>  
        </div>  
      </section>

      {/* The Global Standard Anchor */}  
      <section className="bg-zinc-950">  
        <EliteAmenities />  
      </section>

      <Footer />  
    </main>  
  );  
}  
