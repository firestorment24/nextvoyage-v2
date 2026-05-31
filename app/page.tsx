import Link from 'next/link'

export default function HomePage() {  
  return (  
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">  
      {/* Background "Architecture" Line */}  
      <div className="absolute inset-0 flex justify-center pointer-events-none">  
        <div className="w-[1px] h-full bg-zinc-100" />  
      </div>

      <div className="relative z-10 max-w-4xl">  
        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 mb-8 block animate-in fade-in slide-in-from-bottom-4 duration-1000">  
          NexVoyage Collective  
        </span>  
          
        <h1 className="text-5xl md:text-8xl font-serif leading-tight mb-12 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">  
          The ROI of <span className="italic">Reset.</span>  
        </h1>  
          
        <p className="text-zinc-500 max-w-md mx-auto mb-16 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">  
          Bespoke spatial studies and travel sequences designed for those who have seen everything, but seek silence.  
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">  
          <Link href="/archive" className="btn-primary">  
            Enter The Archive  
          </Link>  
          <Link href="/reserve" className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-black transition-colors border-b border-transparent hover:border-black pb-1">  
            Request Access  
          </Link>  
        </div>  
      </div>

      {/* Editorial Footer Note */}  
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.2em] text-zinc-300">  
        Volume 01 — Edition 2026  
      </div>  
    </main>  
  )  
}  
