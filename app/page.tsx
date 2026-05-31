import Link from 'next/link'

export default function HomePage() {  
  return (  
    <main className="relative min-h-screen bg-white overflow-hidden">  
      {/* Background Image Container - This is the "Anchor" */}  
      <div className="absolute inset-0 z-0 overflow-hidden">  
        <div className="absolute inset-0 bg-black/5 z-10" /> {/* Subtle overlay */}  
        <img   
          src="https://images.unsplash.com/photo-1449156001437-3a16d1daae39?q=80&w=2070&auto=format&fit=crop"   
          alt="Luxury Architecture"  
          className="w-full h-full object-cover opacity-80 scale-105"  
        />  
      </div>

      {/* Content Layer */}  
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 text-center">  
        <div className="max-w-4xl bg-white/40 backdrop-blur-sm p-12 md:p-20 border border-white/20">  
          <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-600 mb-8 block font-medium">  
            NexVoyage Collective  
          </span>  
            
          <h1 className="text-6xl md:text-[7rem] font-serif leading-[0.9] mb-10 tracking-tighter text-black">  
            The ROI of <br /><span className="italic ml-8">Reset.</span>  
          </h1>  
            
          <p className="text-zinc-800 max-w-sm mx-auto mb-12 font-light leading-relaxed text-sm md:text-base">  
            Bespoke spatial studies and travel sequences for those who seek the luxury of silence.  
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10">  
            <Link href="/archive" className="btn-primary shadow-2xl">  
              Enter The Archive  
            </Link>  
            <Link href="/reserve" className="text-[10px] uppercase tracking-[0.4em] text-black font-semibold hover:italic transition-all">  
              Request Access →  
            </Link>  
          </div>  
        </div>  
      </div>

      {/* Vertical Side Label */}  
      <div className="absolute bottom-20 left-10 hidden md:block">  
        <span className="text-[9px] uppercase tracking-[0.5em] text-zinc-400 [writing-mode:vertical-lr] rotate-180">  
          Curated Excursions 2026  
        </span>  
      </div>  
    </main>  
  )  
}  
