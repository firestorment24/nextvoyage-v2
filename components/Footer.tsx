import Link from 'next/link';

const Footer = () => {  
  return (  
    <footer className="bg-[#0a0a0a] border-t border-zinc-900 pt-20 pb-10 px-6 mt-20">  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">  
        <div className="col-span-2">  
          <h2 className="text-zinc-100 font-bold uppercase tracking-widest text-sm mb-6 italic">NexVoyage Collective</h2>  
          <p className="text-zinc-500 text-xs leading-relaxed max-w-sm font-light">  
            A private registry of unreachable sanctuaries and tactical luxury architecture.   
            Access is by invitation only. Members are vetted for high-stakes compatibility.  
          </p>  
        </div>

        <div>  
          <h3 className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-6">Directory</h3>  
          <ul className="space-y-3 text-xs text-zinc-400 font-light">  
            <li><Link href="/sanctuaries" className="hover:text-amber-500">The Vault</Link></li>  
            <li><Link href="/journal" className="hover:text-amber-500">Intelligence Reports</Link></li>  
            <li><Link href="/invitation" className="hover:text-amber-500 text-zinc-100 italic">The Invitation</Link></li>  
          </ul>  
        </div>

        <div>  
          <h3 className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-6">Internal</h3>  
          <ul className="space-y-3 text-xs text-zinc-400 font-light">  
            <li><Link href="#" className="hover:text-amber-500">Vetting Standards</Link></li>  
            <li><Link href="#" className="hover:text-amber-500">Privacy Architecture</Link></li>  
            <li><Link href="#" className="hover:text-amber-500">Partner Portal</Link></li>  
          </ul>  
        </div>  
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-zinc-900 pt-8 text-[10px] text-zinc-600 uppercase tracking-widest">  
        <div>© 2026 NexVoyage Collective — All Rights Reserved</div>  
        <div className="mt-4 md:mt-0 flex gap-6 italic">  
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
