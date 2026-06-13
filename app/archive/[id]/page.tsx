// Core Logic for the Asset Detail View  
import { PROPERTIES_DATA } from '@/data/properties';  
import { Typography, Grid, Box, Button } from '@/components/ui'; // High-end UI primitives

export default function PropertyDetail({ params }) {  
  const property = PROPERTIES_DATA.find(p => p.id === params.id);

  if (!property) return <NotFound />;

  return (  
    <main className="flex h-screen bg-[#1A1A1A] text-white font-sans overflow-hidden">  
        
      {/* LEFT SIDE: THE SHADOW (Visual Immersion) */}  
      <section className="w-3/5 relative border-r border-[#B8A164]/30">  
        <div   
          className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-700 hover:grayscale-0"  
          style={{ backgroundImage: `url(${property.image})` }}  
        />  
        <div className="absolute inset-0 bg-black/40" /> {/* Ambient overlay */}  
          
        {/* Floating Brass Label */}  
        <div className="absolute bottom-12 left-12 p-8 border border-[#B8A164] bg-[#1A1A1A]/80 backdrop-blur-md">  
          <p className="text-[#B8A164] text-xs tracking-widest uppercase mb-2">Asset ID: {property.id.toUpperCase()}</p>  
          <h1 className="text-4xl font-serif leading-tight">{property.name}</h1>  
          <p className="text-sm opacity-70 mt-2 italic">{property.location}</p>  
        </div>  
      </section>

      {/* RIGHT SIDE: THE BRASS (Technical Ledger) */}  
      <section className="w-2/5 bg-[#1A1A1A] p-16 flex flex-col justify-between border-l border-[#B8A164]/20">  
          
        <div className="space-y-12">  
          {/* Section 1: Philosophy & Atmosphere */}  
          <div>  
            <h3 className="text-[#B8A164] text-[10px] tracking-[0.3em] uppercase mb-6 font-bold">The Narrative</h3>  
            <p className="text-lg font-serif leading-relaxed text-zinc-300">  
              {property.highlight}  
            </p>  
          </div>

          {/* Section 2: Technical Specifications */}  
          <div>  
            <h3 className="text-[#B8A164] text-[10px] tracking-[0.3em] uppercase mb-6 font-bold">Technical Specs</h3>  
            <div className="grid grid-cols-2 gap-y-4 border-t border-[#B8A164]/20 pt-6">  
              <div>  
                <p className="text-[10px] text-zinc-500 uppercase">Tier</p>  
                <p className="text-sm font-medium">Ultra-Luxe (V)</p>  
              </div>  
              <div>  
                <p className="text-[10px] text-zinc-500 uppercase">Inventory</p>  
                <p className="text-sm font-medium">Penthouse / Suites</p>  
              </div>  
              <div>  
                <p className="text-[10px] text-zinc-500 uppercase">Climate</p>  
                <p className="text-sm font-medium">{property.sanctuarySlug === 'alpine' ? 'Sub-Zero' : 'Temperate'}</p>  
              </div>  
              <div>  
                <p className="text-[10px] text-zinc-500 uppercase">Status</p>  
                <p className="text-sm text-[#B8A164] font-bold">VERIFIED ACCESS</p>  
              </div>  
            </div>  
          </div>

          {/* Section 3: The Elite Ledger (Exclusive Offer) */}  
          <div className="p-6 bg-[#B8A164]/5 border border-[#B8A164]/30">  
            <h3 className="text-[#B8A164] text-[10px] tracking-[0.3em] uppercase mb-4 font-bold">NexVoyage Protocol</h3>  
            <p className="text-sm leading-relaxed text-zinc-200">  
              <span className="text-[#B8A164]">EXCLUSIVE:</span> {property.exclusiveOffer}  
            </p>  
          </div>  
        </div>

        {/* Call to Action */}  
        <div className="mt-auto pt-12">  
          <Button className="w-full h-16 bg-[#B8A164] text-black hover:bg-white transition-colors duration-300 font-bold tracking-widest uppercase text-xs">  
            Initiate Reserve Flow  
          </Button>  
          <p className="text-center text-[10px] text-zinc-600 mt-4 uppercase tracking-tighter">  
            *Subject to availability and NexVoyage collective verification.  
          </p>  
        </div>  
      </section>

    </main>  
  );  
}  
