import Link from 'next/link';

const Navigation = () => {  
  return (  
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800/50 px-6 py-4 flex justify-between items-center">  
      <div className="flex items-center gap-8">  
        <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-100 uppercase">  
          NexVoyage <span className="text-zinc-500 font-light italic">Collective</span>  
        </Link>  
          
        <div className="hidden md:flex gap-6 text-[10px] uppercase tracking-[0.2em] text-zinc-400">  
          <Link href="/sanctuaries" className="hover:text-amber-500 transition-colors">Sanctuary Vault</Link>  
          <Link href="/journal" className="hover:text-amber-500 transition-colors">Intelligence Reports</Link>  
        </div>  
      </div>

      <div>  
        <Link   
          href="/invitation"   
          className="text-[10px] uppercase tracking-[0.3em] bg-zinc-100 text-black px-5 py-2 hover:bg-amber-600 hover:text-white transition-all"  
        >  
          Request Invitation  
        </Link>  
      </div>  
    </nav>  
  );  
};

export default Navigation;  
