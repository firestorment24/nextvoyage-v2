import Link from 'next/link';

export default function Footer() {  
  return (  
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 mt-20">  
      <div className="max-w-7xl mx-auto px-6">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">  
          <div>  
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">NexVoyage Collective</h3>  
            <p className="text-slate-500 leading-relaxed max-w-xs">  
              The Guardian Layer for the world's most discerning travelers. Ensuring the ROI of Reset through elite access and zero-friction logistics.  
            </p>  
          </div>  
          <div>  
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">Sanctuaries</h3>  
            <ul className="space-y-4 text-slate-600">  
              <li><Link href="/sanctuary/metropolitan" className="hover:text-black transition">Metropolitan</Link></li>  
              <li><Link href="/sanctuary/floating" className="hover:text-black transition">Floating</Link></li>  
              <li><Link href="/sanctuary/alpine" className="hover:text-black transition">Alpine</Link></li>  
            </ul>  
          </div>  
          <div>  
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6">Legal & Security</h3>  
            <ul className="space-y-4 text-slate-600">  
              <li><Link href="/legal/privacy-policy" className="hover:text-black transition">Privacy Policy</Link></li>  
              <li><Link href="/legal/terms" className="hover:text-black transition">Terms & Conditions</Link></li>  
              <li><Link href="/legal/safety" className="hover:text-black transition">Impact & Safety</Link></li>  
            </ul>  
          </div>  
        </div>  
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 uppercase tracking-widest">  
          <p>© 2026 NexVoyage Collective. All Rights Reserved.</p>  
          <p className="mt-4 md:mt-0">Veterans & First Responders: 50% Off Booking Fees</p>  
        </div>  
      </div>  
    </footer>  
  );  
}  
