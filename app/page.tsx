import Link from 'next/link';

export default function HomePage() {  
  return (  
    <main className="bg-black text-white selection:bg-zinc-800 antialiased">  
        
      {/* SECTION 1: THE ENTRY */}  
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center border-b border-zinc-900">  
        <h1 className="text-sm uppercase tracking-[0.5em] text-zinc-500 mb-8 font-light">  
          NexVoyage Collective  
        </h1>  
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-12 max-w-4xl leading-tight">  
          Curating the <span className="italic font-serif">Unreachable</span>.  
        </h2>  
        <Link   
          href="/sanctuaries"   
          className="text-[10px] uppercase tracking-[0.3em] border border-zinc-800 px-10 py-4 hover:bg-white hover:text-black transition-all"  
        >  
          Enter The Vault  
        </Link>  
      </section>

      {/* SECTION 2: THE QUOTE (Restored & Enhanced) */}  
      <section className="py-40 px-6 md:px-20 max-w-5xl mx-auto text-center border-b border-zinc-900">  
        <h3 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-16">The Directive</h3>  
        <blockquote className="text-2xl md:text-4xl font-light italic leading-relaxed text-zinc-200 mb-12 font-serif">  
          "Travel is no longer an escape; it is a strategic investment in atmosphere, privacy, and the preservation of focus."  
        </blockquote>  
        <p className="text-zinc-500 text-sm tracking-widest uppercase">— NexVoyage Collective</p>  
      </section>

      {/* SECTION 3: THE COLLECTIVE ARCHITECTURE */}  
      <section className="py-40 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20">  
        <div className="space-y-12">  
          <h2 className="text-3xl font-light tracking-tighter uppercase">Quiet Luxury <br />Architecture</h2>  
          <p className="text-zinc-400 text-sm leading-relaxed max-w-md font-light">  
            We curate a private registry of nine sanctuary archetypes. Each environment is vetted for high-stakes compatibility, ensuring that your sanctuary provides a tangible return on atmosphere.  
          </p>  
          <div className="pt-4">  
            <Link href="/invitation" className="text-[10px] uppercase tracking-[0.2em] text-zinc-100 border-b border-zinc-800 pb-2 hover:text-amber-500 hover:border-amber-500 transition-all">  
              Request Vetting  
            </Link>  
          </div>  
        </div>  
        <div className="flex items-center justify-center">  
           <div className="w-full aspect-video bg-zinc-900/50 border border-zinc-800 flex items-center justify-center italic text-zinc-600 text-xs tracking-widest">  
             [ Registry_Visual_Restricted ]  
           </div>  
        </div>  
      </section>

    </main>  
  );  
}  
