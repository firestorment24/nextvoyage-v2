import Link from 'next/link';

export default function Home() {  
  return (  
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">  
      {/* Cinematic Background Image */}  
      <div   
        className="absolute inset-0 bg-cover bg-center opacity-60 scale-105 transition-transform duration-1000"  
        style={{ backgroundImage: `url('https://cdn.marblism.com/kMqxTAATCR-.webp')` }}  
      />  
        
      {/* Gradient Overlay for Depth */}  
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />

      {/* Hero Content */}  
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">  
        <h2 className="text-[10px] uppercase tracking-[0.8em] text-[#d4af37] mb-6 animate-pulse">  
          NexVoyage Collective  
        </h2>  
          
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-100 tracking-tighter mb-12 max-w-4xl leading-tight">  
          The Engine of <br />  
          <span className="italic font-light">Exceptional</span> Travel.  
        </h1>

        {/* Pillar Navigation Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl mt-12">  
            
          {/* Pillar 1: The Manifest */}  
          <Link href="/manifest" className="group flex flex-col items-center">  
            <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500 group-hover:text-[#d4af37] transition-colors duration-500">I. Discovery</span>  
            <h3 className="font-serif text-xl mt-2 group-hover:tracking-widest transition-all duration-700">The Manifest</h3>  
            <div className="w-0 group-hover:w-12 h-[1px] bg-[#d4af37] mt-4 transition-all duration-500" />  
          </Link>

          {/* Pillar 2: The Mandate */}  
          <Link href="/mandate" className="group flex flex-col items-center">  
            <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500 group-hover:text-[#d4af37] transition-colors duration-500">II. Philosophy</span>  
            <h3 className="font-serif text-xl mt-2 group-hover:tracking-widest transition-all duration-700">The Mandate</h3>  
            <div className="w-0 group-hover:w-12 h-[1px] bg-[#d4af37] mt-4 transition-all duration-500" />  
          </Link>

          {/* Pillar 3: The Reserve */}  
          <Link href="/reserve" className="group flex flex-col items-center">  
            <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500 group-hover:text-[#d4af37] transition-colors duration-500">III. Arrival</span>  
            <h3 className="font-serif text-xl mt-2 group-hover:tracking-widest transition-all duration-700">The Reserve</h3>  
            <div className="w-0 group-hover:w-12 h-[1px] bg-[#d4af37] mt-4 transition-all duration-500" />  
          </Link>

        </div>  
      </div>

      {/* Decorative Corner Element */}  
      <div className="fixed bottom-12 right-12 text-[#d4af37]/20 font-serif text-6xl select-none pointer-events-none">  
        NV  
      </div>  
    </div>  
  );  
}  
