import Link from 'next/link';  
import Image from 'next/image';

export default function HomePage() {  
  return (  
    <main className="bg-black text-zinc-100 min-h-screen">  
        
      {/* 1. THE THRESHOLD (Hero) */}  
      <section className="relative h-screen flex items-center px-6 md:px-20 overflow-hidden border-b border-zinc-900">  
        <div className="absolute inset-0 z-0 opacity-40">  
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />  
          {/* Visual: Something cinematic like a shadowed mountain range or private jet interior */}  
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1540339832862-4745a9805ad0?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center grayscale" />  
        </div>

        <div className="relative z-20 max-w-4xl">  
          <p className="text-amber-600 text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">Registry Entry: Global</p>  
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">  
            Curating the <br />  
            <span className="text-zinc-500 font-light italic">Unreachable.</span>  
          </h1>  
          <p className="text-zinc-400 text-sm md:text-lg max-w-xl font-light leading-relaxed mb-10">  
            NexVoyage Collective is a private architecture for high-stakes travel.   
            We engineer sanctuaries that prioritize atmosphere as a tangible return on investment.  
          </p>  
          <div className="flex gap-6">  
            <Link href="/sanctuaries" className="text-[10px] uppercase tracking-[0.2em] bg-zinc-100 text-black px-8 py-3 hover:bg-amber-600 hover:text-white transition-all">  
              Enter the Vault  
            </Link>  
          </div>  
        </div>

        <div className="absolute bottom-10 left-6 md:left-20 flex gap-12 text-[10px] text-zinc-600 uppercase tracking-widest font-mono">  
          <div>Status: Active</div>  
          <div>Vetting: Required</div>  
        </div>  
      </section>

      {/* 2. THE DIRECTIVE (Manifesto) */}  
      <section className="py-32 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">  
        <div>  
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-8">Atmosphere as <br />an Asset Class</h2>  
          <div className="space-y-6 text-zinc-400 text-sm font-light leading-relaxed">  
            <p>  
              We don’t book trips. We design environments. For the high-net-worth individual, travel is no longer about leisure—it is about the strategic preservation of focus, privacy, and inspiration.  
            </p>  
            <p>  
              The Collective manages a restricted registry of nine sanctuary archetypes, each vetted against our strict standards for "Brass & Shadow" atmosphere.  
            </p>  
          </div>  
        </div>  
        <div className="border border-zinc-800 p-1 bg-[#0a0a0a]">  
          <div className="aspect-[4/5] bg-zinc-900 flex items-center justify-center relative grayscale">  
             <Image   
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670&auto=format&fit=crop"   
                alt="Sanctuary Aesthetic"   
                fill   
                className="object-cover opacity-50"  
             />  
             <div className="absolute bottom-4 left-4 text-[9px] uppercase tracking-widest text-zinc-500 font-mono">  
               Ref: Sanctuary_Registry_01  
             </div>  
          </div>  
        </div>  
      </section>

      {/* 3. THE HUD (Teaser Links) */}  
      <section className="py-20 border-t border-zinc-900 bg-[#050505]">  
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-1px bg-zinc-900 border border-zinc-900">  
            
          <Link href="/sanctuaries" className="bg-black p-12 hover:bg-zinc-950 transition-all group">  
            <span className="text-amber-600 text-[10px] font-mono mb-4 block">01 / VAULT</span>  
            <h3 className="text-xl uppercase font-bold mb-4 group-hover:text-amber-500">The Sanctuary Registry</h3>  
            <p className="text-xs text-zinc-500 font-light">Explore our curated archetypes of silence and power.</p>  
          </Link>

          <Link href="/journal" className="bg-black p-12 hover:bg-zinc-950 transition-all group border-l border-zinc-900">  
            <span className="text-amber-600 text-[10px] font-mono mb-4 block">02 / JOURNAL</span>  
            <h3 className="text-xl uppercase font-bold mb-4 group-hover:text-amber-500">Intelligence Reports</h3>  
            <p className="text-xs text-zinc-500 font-light">Seasonal briefings on the state of global luxury architecture.</p>  
          </Link>

          <Link href="/invitation" className="bg-black p-12 hover:bg-zinc-950 transition-all group border-l border-zinc-900">  
            <span className="text-amber-600 text-[10px] font-mono mb-4 block">03 / ACCESS</span>  
            <h3 className="text-xl uppercase font-bold mb-4 group-hover:text-amber-500">The Invitation</h3>  
            <p className="text-xs text-zinc-500 font-light">Begin the vetting process for private collective access.</p>  
          </Link>

        </div>  
      </section>

    </main>  
  );  
}  
