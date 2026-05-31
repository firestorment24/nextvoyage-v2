import Link from 'next/link'

export default function HomePage() {  
  return (  
    <main className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">  
      {/* Cinematic Hero Image (The Metropolitan Sanctuary Vibe) */}  
      <div className="absolute inset-0 z-0 h-[85vh] md:h-screen">  
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a] z-10" />  
        <img   
          src="https://images.unsplash.com/photo-1542640244-7e672d6cef21?q=80&w=2070&auto=format&fit=crop"   
          alt="Quiet Luxury Architecture"  
          className="w-full h-full object-cover grayscale opacity-50 contrast-125"  
        />  
      </div>

      <section className="relative z-20 pt-[30vh] px-6 max-w-7xl mx-auto flex flex-col items-start">  
        <div className="overflow-hidden">  
          <span className="text-[10px] uppercase tracking-[0.8em] text-zinc-500 mb-8 block animate-in fade-in slide-in-from-bottom-full duration-1000">  
            NexVoyage Collective  
          </span>  
        </div>  
          
        <h1 className="text-6xl md:text-[9rem] font-serif leading-[0.85] tracking-tighter mb-12 animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-300">  
          Curating the <br />  
          <span className="italic pl-12 md:pl-40 text-zinc-400">Unreachable.</span>  
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end w-full">  
          <div className="md:col-span-5 md:col-start-7">  
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-12 animate-in fade-in duration-1000 delay-700">  
              In an age of hyper-accessibility, we specialize in the opposite.   
              Bespoke travel sequences for those who seek the luxury of silence and architectural calm.  
            </p>  
              
            <div className="flex items-center gap-10 animate-in fade-in duration-1000 delay-1000">  
              <Link href="/archive" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-medium border border-white/20 px-8 py-5 hover:bg-white hover:text-black transition-all duration-500">  
                Enter The Archive  
                <span className="w-10 h-[1px] bg-white group-hover:bg-black transition-all" />  
              </Link>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Narrative Section - The ROI of Reset */}  
      <section className="relative z-20 py-60 px-6 max-w-5xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">  
          <div className="aspect-[4/5] bg-zinc-900 overflow-hidden group">  
             <img   
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"   
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[3000ms]"  
              alt="The Reset"  
            />  
          </div>  
          <div>  
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">The ROI of <span className="italic">Reset.</span></h2>  
            <p className="text-zinc-500 leading-relaxed font-light mb-10 italic border-l border-zinc-800 pl-8">  
              "The most profitable investment an executive can make is a week of absolute nothing."  
            </p>  
            <p className="text-zinc-400 leading-relaxed font-light mb-8">  
              We provide the framework for the recovery of perspective. Silence, heat, water, and shade.  
            </p>  
            <Link href="/perspective" className="text-[9px] uppercase tracking-[0.5em] border-b border-zinc-700 pb-2 hover:text-white transition-colors">  
              The Perspective Journal →  
            </Link>  
          </div>  
        </div>  
      </section>  
    </main>  
  )  
}  
