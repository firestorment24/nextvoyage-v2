import Link from 'next/link';

const Navigation = () => {  
  return (  
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-900 px-6 py-5 flex justify-between items-center font-sans">  
      <div className="flex items-center gap-10">  
        <Link href="/" className="text-lg font-medium tracking-tight text-white uppercase">  
          NexVoyage <span className="text-zinc-500 font-light">Collective</span>  
        </Link>  
          
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] text-zinc-400">  
          <Link href="/sanctuaries" className="hover:text-white transition-colors">Sanctuaries</Link>  
          <Link href="/journal" className="hover:text-white transition-colors">Perspective</Link>  
        </div>  
      </div>

      <div>  
        <Link   
          href="/invitation"   
          className="text-[11px] uppercase tracking-[0.2em] border border-zinc-800 px-6 py-2.5 hover:bg-white hover:text-black transition-all"  
        >  
          Private Intake  
        </Link>  
      </div>  
    </nav>  
  );  
};

export default Navigation;  
