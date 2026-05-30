import Link from 'next/link'

export default function Footer() {  
  return (  
    <footer className="bg-[#0A0A0A] text-white/70 py-16 px-6 border-t border-white/5">  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">  
        <div className="col-span-1 md:col-span-2">  
          <h3 className="text-white font-light text-2xl tracking-widest mb-6">NEXVOYAGE</h3>  
          <p className="max-w-sm font-light leading-relaxed">  
            Crafting digital sanctuaries for the modern explorer. Part of the NexVoyage Collective.  
          </p>  
        </div>  
          
        <div>  
          <h4 className="text-white text-sm uppercase tracking-widest mb-6">Concierge</h4>  
          <ul className="space-y-4 text-sm font-light">  
            <li><Link href="/concierge" className="hover:text-white transition-colors">Start Your Journey</Link></li>  
            <li><Link href="/#sanctuaries" className="hover:text-white transition-colors">The Pillars</Link></li>  
          </ul>  
        </div>

        <div>  
          <h4 className="text-white text-sm uppercase tracking-widest mb-6">Legal</h4>  
          <ul className="space-y-4 text-sm font-light">  
            <li><Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>  
            <li><Link href="/legal/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>  
          </ul>  
        </div>  
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light tracking-widest">  
        <p>© {new Date().getFullYear()} NEXVOYAGE COLLECTIVE. ALL RIGHTS RESERVED.</p>  
        <p>DESIGNED FOR THE 1%</p>  
      </div>  
    </footer>  
  )  
}  
