import { PROPERTY_DATA } from '@/data/properties';  
import { notFound } from 'next/navigation';  
import Link from 'next/link';

// Fixed interface to include the missing fields  
interface Property {  
  id: string;  
  name: string;  
  location: string;  
  image: string;  
  priceLevel: string;  
  exclusiveOffer: string;  
  highlight: string; // This was the culprit  
  description: string;  
  amenities: string[];  
}

export default function PropertyDetail({ params }: { params: { id: string } }) {  
  const property = (PROPERTY_DATA as Property[]).find((p) => p.id === params.id);

  if (!property) {  
    notFound();  
  }

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans selection:bg-[#B8A164]/30">  
      {/* Navigation */}  
      <nav className="fixed top-0 w-full z-50 border-b border-[#B8A164]/10 bg-[#0A0A0A]/80 backdrop-blur-md">  
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">  
          <Link href="/archive" className="text-[10px] tracking-[0.4em] uppercase opacity-50 hover:opacity-100 transition-opacity">  
            ← Back to Ledger  
          </Link>  
          <div className="text-[10px] tracking-[0.5em] uppercase font-bold text-[#B8A164]">  
            NexVoyage / Detail  
          </div>  
          <div className="w-20" /> {/* Spacer */}  
        </div>  
      </nav>

      <div className="flex flex-col lg:flex-row min-h-screen pt-16">  
        {/* Left: Immersive Visual (Technical Spec Style) */}  
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-[calc(100vh-64px)] sticky top-16 bg-zinc-900 overflow-hidden border-r border-[#B8A164]/10">  
          <img   
            src={property.image}   
            alt={property.name}  
            className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"  
          />  
          <div className="absolute bottom-8 left-8">  
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">{property.name}</h1>  
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#B8A164]">{property.location}</p>  
          </div>  
        </div>

        {/* Right: Technical Documentation / The Vault */}  
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 overflow-y-auto">  
          <div className="max-w-lg">  
            <div className="mb-16">  
              <h3 className="text-[#B8A164] text-[10px] tracking-[0.3em] uppercase mb-4 opacity-50">Property Highlight</h3>  
              <p className="text-lg md:text-xl font-serif leading-relaxed text-zinc-300 italic">  
                "{property.highlight}"  
              </p>  
            </div>

            <div className="grid grid-cols-2 gap-12 mb-16 border-y border-[#B8A164]/10 py-12">  
              <div>  
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#B8A164] mb-2">Category</h4>  
                <p className="text-sm font-medium uppercase tracking-wider">{property.priceLevel}</p>  
              </div>  
              <div>  
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#B8A164] mb-2">Benefit</h4>  
                <p className="text-sm font-medium uppercase tracking-wider text-white">{property.exclusiveOffer}</p>  
              </div>  
            </div>

            <div className="mb-16">  
              <h3 className="text-[#B8A164] text-[10px] tracking-[0.3em] uppercase mb-6 opacity-50">Operational Dossier</h3>  
              <p className="text-sm leading-relaxed text-zinc-400 font-light mb-8">  
                {property.description}  
              </p>  
            </div>

            <div>  
              <h3 className="text-[#B8A164] text-[10px] tracking-[0.3em] uppercase mb-6 opacity-50">Technical Specifications</h3>  
              <ul className="space-y-4">  
                {property.amenities.map((item, i) => (  
                  <li key={i} className="flex items-center gap-4 text-[11px] tracking-[0.1em] uppercase text-zinc-300">  
                    <span className="w-1 h-1 bg-[#B8A164] rounded-full" />  
                    {item}  
                  </li>  
                ))}  
              </ul>  
            </div>

            <div className="mt-24">  
              <button className="w-full py-4 border border-[#B8A164] text-[#B8A164] text-[10px] tracking-[0.5em] uppercase hover:bg-[#B8A164] hover:text-[#0A0A0A] transition-all duration-500">  
                Initiate Inquiry  
              </button>  
            </div>  
          </div>  
        </div>  
      </div>  
    </main>  
  );  
}  
