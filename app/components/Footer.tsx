// components/Footer.tsx  
import Link from 'next/link';

export default function Footer() {  
  return (  
    <footer className="w-full bg-white border-t border-neutral-100 px-6 py-12 mt-20">  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">  
        <div className="space-y-2">  
          <p className="text-[11px] uppercase tracking-[0.3em] font-medium text-neutral-900">NexVoyage Collective</p>  
          <p className="text-[10px] text-neutral-400">© {new Date().getFullYear()} — Quiet Luxury Travel</p>  
        </div>  
        <nav className="flex gap-6 text-[10px] uppercase tracking-[0.2em] text-neutral-400">  
          <Link href="/legal/privacy" className="hover:text-black transition-colors">Privacy</Link>  
          <Link href="/legal/terms" className="hover:text-black transition-colors">Terms</Link>  
          <Link href="/legal/safety" className="hover:text-black transition-colors">Safety</Link>  
          <Link href="/legal/consent" className="hover:text-black transition-colors">Consent</Link>  
        </nav>  
      </div>  
    </footer>  
  );  
}  
