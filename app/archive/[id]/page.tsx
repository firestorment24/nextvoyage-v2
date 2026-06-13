// Corrected Asset Detail View  
import { PROPERTY_DATA } from '@/data/properties';

export default async function PropertyDetail({ params }: { params: Promise<{ id: string }> }) {  
  const { id } = await params;  
  const property = PROPERTY_DATA.find(p => p.id === id);

  if (!property) {  
    return (  
      <div className="h-screen bg-[#1A1A1A] flex items-center justify-center text-[#B8A164] uppercase tracking-widest">  
        Asset Not Found in Ledger  
      </div>  
    );  
  }

  return (  
    <main className="flex flex-col md:flex-row h-screen bg-[#1A1A1A] text-white overflow-hidden">  
        
      {/* LEFT SIDE: THE SHADOW (Visual Immersion) */}  
      <section className="w-full md:w-3/5 relative border-b md:border-b-0 md:border-r border-[#B8A164]/30 h-1/2 md:h-full">  
        <div   
          className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-1000 hover:grayscale-0"  
          style={{ backgroundImage: `url(${property.image})` }}  
        />  
        <div className="absolute inset-0 bg-black/40" />  
          
        {/* Brass Asset Frame */}  
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 p-6 md:p-8 border border-[#B8A164] bg-[#1A1A1A]/90 backdrop-blur-md max-w-sm">  
          <p className="text-[#B8A164] text-[10px] tracking-[0.4em] uppercase mb-2">Ref No: {property.id.toUpperCase()}</p>  
          <h1 className="text-3xl md:text-5xl font-serif leading-tight">{property.name}</h1>  
          <p className="text-xs opacity-60 mt-3 uppercase tracking-widest">{property.location}</p>  
        </div>  
      </section>

      {/* RIGHT SIDE: THE BRASS (Technical Ledger) */}  
      <section className="w-full md:w-2/5 bg-[#1A1A1A] p-8 md:p-16 flex flex-col justify-between overflow-y-auto h-1/2 md:h-full">  
          
        <div className="space-y-10 md:space-y-16">  
          {/* Section 1: Philosophy */}  
          <div>  
            <h3 className="text-[#B8A164] text-[10px] tracking-[0.3em] uppercase mb-4 opacity-80">The Narrative</h3>  
            <p className="text-lg md:text-xl font-serif leading-relaxed text-zinc-300">  
              "{property.highlight}"  
            </p>  
          </div>

          {/* Section 2: Technical Specifications */}  
          <div>  
            <h3 className="text-[#B8A164] text-[10px] tracking-[0.3em] uppercase mb-6 opacity-80 border-b border-[#B8A164]/20 pb-2">Technical Specs</h3>  
            <div className="grid grid-cols-2 gap-y-6">  
              <div>  
                <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Status</p>  
                <p className="text-sm font-bold text-[#B8A164] tracking-widest">VERIFIED</p>  
              </div>  
              <div>  
                <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Inventory</p>  
                <p className="text-sm">High-Yield Asset</p>  
              </div>  
              <div>  
                <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Region</p>  
                <p className="text-sm uppercase tracking-wider">{property.location.split(',')[1] || 'Global'}</p>  
              </div>  
              <div>  
                <p className="text-[10px] text-zinc-500 uppercase tracking-tighter">Archive Date</p>  
                <p className="text-sm tracking-tighter">06.12.2026</p>  
              </div>  
            </div>  
          </div>

          {/* Section 3: The Protocol (Perks) */}  
          <div className="p-6 bg-[#B8A164]/5 border-l-2 border-[#B8A164]">  
            <h3 className="text-[#B8A164] text-[10px] tracking-[0.3em] uppercase mb-3 font-bold underline decoration-1 underline-offset-4">Guardian Protocol</h3>  
            <p className="text-sm leading-relaxed text-zinc-200">  
              {property.exclusiveOffer}  
            </p>  
          </div>  
        </div>

        {/* Action Button */}  
        <div className="mt-12">  
          <button className="w-full py-5 bg-[#B8A164] text-black hover:bg-white hover:text-black transition-all duration-500 font-bold tracking-[0.2em] uppercase text-xs shadow-lg">  
            Initiate Reserve Flow  
          </button>  
          <p className="text-center text-[9px] text-zinc-600 mt-6 uppercase tracking-widest leading-loose">  
            Authentication Required <br/> NexVoyage Collective Internal Protocol  
          </p>  
        </div>  
      </section>

    </main>  
  );  
}  
