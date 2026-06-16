// components/Footer.tsx  
import Link from 'next/link';

export default function Footer() {  
  return (  
    <footer className="bg-black text-white py-20 px-6 border-t border-white/10">  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">  
        <div className="space-y-6">  
          <h3 className="text-xs uppercase tracking-[0.2em] text-white/40">Navigation</h3>  
          <nav className="flex flex-col gap-4">  
            <Link href="/archive" className="text-sm hover:text-white/60 transition-colors">Sanctuaries</Link>  
            <Link href="/perspective" className="text-sm hover:text-white/60 transition-colors">Perspective</Link>  
            <Link href="/invitation" className="text-sm hover:text-white/60 transition-colors">Private Intake</Link>  
          </nav>  
        </div>

        <div className="space-y-8 max-w-sm">  
          <p className="text-xl font-light leading-relaxed">  
            Access to the collective is by invitation only. We prioritize privacy and precision in every journey.  
          </p>  
          {/* This is the button that now links to /invitation */}  
          <Link   
            href="/invitation"   
            className="inline-block bg-white text-black px-8 py-4 text-xs uppercase tracking-[0.3em] hover:bg-white/90 transition-all"  
          >  
            Request Access  
          </Link>  
        </div>  
      </div>  
        
      <div className="max-w-7xl mx-auto mt-32 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/30">  
        <p>© {new Date().getFullYear()} NexVoyage Collective</p>  
        <div className="flex gap-8">  
          <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy</Link>  
          <Link href="/legal/terms" className="hover:text-white transition-colors">Terms</Link>  
        </div>  
      </div>  
    </footer>  
  );  
}  
