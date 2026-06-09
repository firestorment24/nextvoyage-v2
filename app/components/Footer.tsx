import Link from 'next/link'

export default function Footer() {  
return (  
<footer className="bg-[#0A0A0A] border-t border-white/5 pt-32 pb-16 px-8">  
  <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">  
      
    {/* Brand Section */}  
    <div className="lg:col-span-6">  
      <h2 className="text-4xl font-serif mb-8 tracking-tighter">NexVoyage</h2>  
      <p className="text-sm opacity-40 max-w-sm leading-relaxed mb-12">  
        Architecting sanctuaries for the global soul. Confident. Discrete. Authoritative.  
      </p>  
      <div className="flex gap-6 text-[10px] uppercase tracking-widest opacity-40">  
        <a href="#" className="hover:opacity-100">Instagram</a>  
        <a href="#" className="hover:opacity-100">LinkedIn</a>  
      </div>  
    </div>

    {/* Navigation Columns */}  
    <div className="lg:col-span-3">  
      <p className="text-[10px] uppercase tracking-[0.3em] mb-10 opacity-30">Exploration</p>  
      <ul className="space-y-4 text-sm opacity-60">  
        <li><Link href="/sanctuaries" className="hover:text-white transition-all">The Collection</Link></li>  
        <li><Link href="/journal" className="hover:text-white transition-all">The Journal</Link></li>  
        <li><Link href="/concierge" className="hover:text-white transition-all">Concierge Flow</Link></li>  
      </ul>  
    </div>

    <div className="lg:col-span-3">  
      <p className="text-[10px] uppercase tracking-[0.3em] mb-10 opacity-30">Legal</p>  
      <ul className="space-y-4 text-sm opacity-60">  
        <li><Link href="/legal/privacy" className="hover:text-white transition-all text-neutral-400">Privacy Policy</Link></li>  
        <li><Link href="/legal/terms" className="hover:text-white transition-all text-neutral-400">Terms of Service</Link></li>  
      </ul>  
    </div>  
  </div>

  <div className="max-w-[1600px] mx-auto mt-32 pt-8 border-t border-white/5 flex justify-between items-center text-[9px] uppercase tracking-[0.4em] opacity-20">  
    <p>© 2026 NexVoyage Collective. All Rights Reserved.</p>  
    <p>By Appointment Only.</p>  
  </div>  
</footer>  
)  
}  
