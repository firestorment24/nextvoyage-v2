import Link from 'next/link';

export default function Footer() {  
return (  
  <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-12">  
    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">  
      {/* Brand Column */}  
      <div className="col-span-1 md:col-span-2">  
        <div className="flex items-center gap-2 mb-8">  
          <span className="text-xl tracking-tighter uppercase font-bold text-white">NexVoyage</span>  
          <span className="opacity-20 text-xl">/</span>  
          <span className="text-xl tracking-tighter uppercase opacity-60 font-light text-white">Collective</span>  
        </div>  
        <p className="text-neutral-500 text-sm max-w-sm leading-relaxed italic">  
          Defining the architecture of elite travel. A private engine for the next generation of high-net-worth departures.  
        </p>  
      </div>

      {/* Navigation */}  
      <div>  
        <h4 className="text-[10px] uppercase tracking-[0.4em] text-white opacity-40 mb-8">Directory</h4>  
        <ul className="space-y-4 text-sm">  
          <li><Link href="/" className="hover:text-white text-neutral-400 transition-colors">Home</Link></li>  
          <li><Link href="/sanctuary" className="hover:text-white text-neutral-400 transition-colors">Sanctuaries</Link></li>  
          <li><Link href="/perspective" className="hover:text-white text-neutral-400 transition-colors">Perspective</Link></li>  
          <li><Link href="/reserve" className="hover:text-white text-neutral-400 transition-colors">Private Intake</Link></li>  
        </ul>  
      </div>

      {/* Corporate */}  
      <div>  
        <h4 className="text-[10px] uppercase tracking-[0.4em] text-white opacity-40 mb-8">Intelligence</h4>  
        <ul className="space-y-4 text-sm">  
          <li><Link href="/legal" className="hover:text-white text-neutral-400 transition-colors">Legal & Privacy</Link></li>  
          <li><Link href="/legal" className="hover:text-white text-neutral-400 transition-colors">Vetting Standards</Link></li>  
          <li className="text-neutral-600 cursor-not-allowed">Partner Portal</li>  
        </ul>  
      </div>  
    </div>

    {/* Bottom Bar */}  
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-8">  
      <div className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">  
        © 2026 NexVoyage Collective. All Rights Reserved.  
      </div>  
      <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-neutral-600">  
        <span>New York</span>  
        <span>London</span>  
        <span>Zurich</span>  
      </div>  
    </div>  
  </footer>  
);  
}  
