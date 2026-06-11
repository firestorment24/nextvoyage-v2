import Link from 'next/link';

const Footer = () => {  
  return (  
    <footer className="bg-black border-t border-zinc-900 pt-24 pb-12 px-6 mt-20 font-sans">  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">  
        <div className="col-span-2">  
          <h2 className="text-white font-medium uppercase tracking-widest text-xs mb-8">NexVoyage Collective</h2>  
          <p className="text-zinc-500 text-xs leading-relaxed max-w-xs font-light">  
            Bespoke sanctuaries and private travel architecture for high-net-worth individuals.  
          </p>  
        </div>

        <div>  
          <h3 className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] mb-8 font-bold">Navigation</h3>  
          <ul className="space-y-4 text-[11px] text-zinc-400 uppercase tracking-widest font-light">  
            <li><Link href="/sanctuaries" className="hover:text-white transition-colors">Sanctuaries</Link></li>  
            <li><Link href="/journal" className="hover:text-white transition-colors">Perspective</Link></li>  
            <li><Link href="/invitation" className="hover:text-white transition-colors">Private Intake</Link></li>  
          </ul>  
        </div>

        <div>  
          <h3 className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] mb-8 font-bold">Corporate</h3>  
          <ul className="space-y-4 text-[11px] text-zinc-400 uppercase tracking-widest font-light">  
            <li><Link href="#" className="hover:text-white transition-colors">Legal & Privacy</Link></li>  
            <li><Link href="#" className="hover:text-white transition-colors">Vetting Standards</Link></li>  
            <li><Link href="#" className="hover:text-white transition-colors">Partner Portal</Link></li>  
          </ul>  
        </div>  
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-10 text-[10px] text-zinc-600 uppercase tracking-[0.3em]">  
        <div>© 2026 NexVoyage Collective // EST. 2026</div>  
        <div className="mt-6 md:mt-0 flex gap-8">  
          <span>LDN</span>  
          <span>NYC</span>  
          <span>TYO</span>  
          <span>DXB</span>  
        </div>  
      </div>  
    </footer>  
  );  
};

export default Footer; 
