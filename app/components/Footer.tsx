export default function Footer() {  
  return (  
    <footer className="bg-black py-24 border-t border-white/5 relative overflow-hidden">  
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />  
      <div className="container mx-auto px-6 relative z-10">  
        <div className="grid md:grid-cols-4 gap-16 mb-24">  
          <div className="col-span-2">  
            <h4 className="font-serif text-2xl italic mb-8">NexVoyage Collective</h4>  
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-neutral-500 max-w-xs leading-loose">  
              Curating the unreachable. Private travel sanctuaries for the discerning global elite.  
            </p>  
          </div>  
          <div>  
            <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-white mb-6 underline">Inquiry</p>  
            <p className="font-sans text-[11px] text-neutral-400">concierge@nexvoyage.com</p>  
          </div>  
          <div>  
            <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-white mb-6 underline">Legal</p>  
            <a href="/legal" className="block font-sans text-[11px] text-neutral-400 hover:text-white mb-2 transition-all">Vetting Standard</a>  
            <a href="/legal" className="block font-sans text-[11px] text-neutral-400 hover:text-white transition-all">Privacy</a>  
          </div>  
        </div>  
        <div className="flex justify-between items-end pt-12 border-t border-white/5">  
          <p className="font-sans text-[9px] uppercase tracking-[0.5em] text-neutral-700">© 2026 Collective Intelligence</p>  
          <div className="h-[1px] w-24 bg-white/10" />  
        </div>  
      </div>  
    </footer>  
  );  
}  
