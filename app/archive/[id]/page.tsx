// app/archive/[id]/page.tsx  
import { PROPERTY_DATA } from '@/lib/data/sanctuaries';  
import { notFound } from 'next/navigation';

export default async function PropertyDetailPage({ params }: { params: { id: string } }) {  
  const property = PROPERTY_DATA.find(p => p.id === params.id);

  if (!property) return notFound();

  return (  
    <div className="bg-black text-white min-h-screen flex flex-col md:flex-row pt-20">  
      {/* Visual Section */}  
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 bg-neutral-900 overflow-hidden">  
        <img   
          src={property.image}   
          alt={property.name}   
          className="w-full h-full object-cover animate-in fade-in duration-1000"  
        />  
        <div className="absolute bottom-8 left-8">  
            <span className="text-[10px] font-mono tracking-tighter bg-white text-black px-2 py-1">SERIAL: {property.serial}</span>  
        </div>  
      </div>

      {/* Narrative Section */}  
      <div className="w-full md:w-1/2 px-8 md:px-20 py-20 bg-black flex flex-col justify-center">  
        <div className="max-w-md space-y-12">  
          <header className="space-y-4">  
            <h1 className="text-5xl md:text-6xl font-light tracking-tight">{property.name}</h1>  
            <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">{property.location}</p>  
          </header>

          <div className="space-y-6">  
            <p className="text-xl text-neutral-300 font-light leading-relaxed italic">  
              "{property.highlight}"  
            </p>  
            <p className="text-neutral-400 leading-loose text-lg font-light">  
              {property.description}  
            </p>  
          </div>

          <div className="pt-12 border-t border-neutral-800">  
            <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 mb-6">Technical Specifications</h3>  
            <ul className="grid grid-cols-1 gap-4">  
              {property.specs.map((spec, i) => (  
                <li key={i} className="text-sm font-light tracking-wide flex items-center gap-3">  
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50"></span>  
                  {spec}  
                </li>  
              ))}  
            </ul>  
          </div>

          <div className="pt-16">  
            <button className="w-full border border-neutral-700 py-4 text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">  
              Initialize Strategic Vetting  
            </button>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
}  
