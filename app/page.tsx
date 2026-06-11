import Link from 'next/link';

export default function HomePage() {  
  return (  
    <main className="bg-black text-white antialiased font-sans">  
        
      {/* HERO SECTION */}  
      <section className="h-screen flex flex-col justify-center items-center px-6 text-center">  
        <h1 className="text-[11px] uppercase tracking-[0.6em] text-zinc-500 mb-10 font-medium">  
          NexVoyage Collective  
        </h1>  
        <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-16 max-w-3xl leading-[1.1]">  
          Curating the <span className="text-zinc-400">Unreachable</span>.  
        </h2>  
        <Link   
          href="/sanctuaries"   
          className="text-[10px] uppercase tracking-[0.4em] border border-zinc-800 px-12 py-4 hover:bg-white hover:text-black transition-all"  
        >  
          Enter The Vault  
        </Link>  
      </section>

      {/* MANIFESTO SECTION */}  
      <section className="py-48 px-6 md:px-20 max-w-4xl mx-auto text-center border-y border-zinc-900">  
        <blockquote className="text-2xl md:text-3xl font-light tracking-tight leading-relaxed text-zinc-300 mb-10">  
          "Travel is no longer an escape; it is a strategic investment in atmosphere, privacy, and the preservation of focus."  
        </blockquote>  
        <div className="w-12 h-[1px] bg-zinc-800 mx-auto mb-10" />  
        <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase font-bold">NexVoyage / The Directive</p>  
      </section>

      {/* FEATURE SECTION */}  
      <section className="py-48 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">  
        <div className="space-y-10">  
          <h2 className="text-2xl font-light uppercase tracking-tighter">Quiet Luxury Architecture</h2>  
          <p className="text-zinc-500 text-sm leading-relaxed max-w-md font-light">  
            We curate a private registry of nine sanctuary archetypes. Each environment is vetted for high-stakes compatibility, ensuring that your sanctuary provides a tangible return on atmosphere.  
          </p>  
          <div className="pt-6">  
            <Link href="/invitation" className="text-[10px] uppercase tracking-[0.3em] text-white border-b border-zinc-800 pb-3 hover:border-white transition-all">  
              Request Private Intake  
            </Link>  
          </div>  
        </div>  
        <div className="aspect-square bg-zinc-950 border border-zinc-900 flex items-center justify-center relative">  
           <span className="text-zinc-800 text-[10px] uppercase tracking-[0.5em] rotate-90">Restricted Visual</span>  
        </div>  
      </section>

    </main>  
  );  
}  
