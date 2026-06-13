import { notFound } from 'next/navigation';  
import Image from 'next/image';  
import Link from 'next/link';  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries';

export default function PropertyDossier({ params }: { params: { id: string, propertyId: string } }) {  
  const property = PROPERTY_DATA.find((p) => p.id === params.propertyId);

  if (!property) return notFound();

  return (  
    <main className="min-h-screen bg-black text-white pt-24 pb-12 px-6 lg:px-12">  
      {/* Navigation / Breadcrumb */}  
      <nav className="mb-12 flex items-center space-x-4 text-xs uppercase tracking-[0.2em] text-zinc-500 font-inter">  
        <Link href="/archive" className="hover:text-[#D4AF37] transition-colors">Archive</Link>  
        <span>/</span>  
        <Link href={`/archive/${params.id}`} className="hover:text-[#D4AF37] transition-colors">Sanctuary</Link>  
        <span>/</span>  
        <span className="text-[#D4AF37]">{property.serial}</span>  
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">  
          
        {/* Left Column: Narrative & Technical Specs */}  
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between">  
          <div>  
            <h2 className="text-[#D4AF37] font-inter text-sm uppercase tracking-[0.4em] mb-4">  
              {property.serial}  
            </h2>  
            <h1 className="text-4xl lg:text-6xl font-cormorant mb-8 leading-tight">  
              {property.name}  
            </h1>  
              
            <div className="space-y-6 mb-12">  
              <p className="text-xl font-cormorant text-zinc-300 leading-relaxed italic">  
                "{property.highlight}"  
              </p>  
              <p className="text-zinc-400 font-inter text-sm leading-relaxed max-w-md">  
                {property.description}  
              </p>  
            </div>  
          </div>

          {/* Technical Spec Grid */}  
          <div className="border-t border-zinc-800 pt-8 mt-auto">  
            <h3 className="text-[#D4AF37] font-inter text-[10px] uppercase tracking-[0.3em] mb-6">  
              Technical Specifications  
            </h3>  
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">  
              {Object.entries(property.specs).map(([key, value]) => (  
                <div key={key}>  
                  <p className="text-zinc-600 font-inter text-[9px] uppercase tracking-widest mb-1">{key}</p>  
                  <p className="text-white font-inter text-xs uppercase tracking-wider">{value}</p>  
                </div>  
              ))}  
              <div>  
                <p className="text-zinc-600 font-inter text-[9px] uppercase tracking-widest mb-1">Status</p>  
                <p className="text-[#D4AF37] font-inter text-xs uppercase tracking-wider">Acquired / Private</p>  
              </div>  
            </div>  
          </div>  
        </div>

        {/* Right Column: Imagery */}  
        <div className="lg:col-span-7 order-1 lg:order-2">  
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-1000">  
            <Image  
              src={property.image}  
              alt={property.name}  
              fill  
              className="object-cover"  
              priority  
            />  
            {/* Architectural overlay effect */}  
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />  
            <div className="absolute bottom-6 right-6 font-inter text-[10px] text-zinc-500 uppercase tracking-widest vertical-rl rotate-180">  
              {property.location} // Secure Digital Asset  
            </div>  
          </div>  
        </div>

      </div>  
    </main>  
  );  
}  
