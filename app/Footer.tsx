import Link from 'next/link'

export default function Footer() {  
  const currentYear = new Date().getFullYear()

  return (  
    <footer className="bg-white border-t border-slate-100 mt-20">  
      <div className="max-w-7xl mx-auto px-6 py-12">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">  
            
          {/* Brand Section */}  
          <div className="space-y-4">  
            <h2 className="text-xl font-serif tracking-tight text-slate-900">  
              NexVoyage Collective  
            </h2>  
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">  
              The Guardian Layer for the modern explorer. Curating sanctuaries   
              for the high-net-worth traveler since 2026.  
            </p>  
          </div>

          {/* Quick Links */}  
          <div className="flex flex-col space-y-3">  
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">  
              Experience  
            </h3>  
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">  
              The Sanctuaries  
            </Link>  
            <Link href="/sanctuary/metropolitan-penthouse" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">  
              Urban Retreats  
            </Link>  
            <Link href="/sanctuary/floating-sanctuary" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">  
              Maritime Solitude  
            </Link>  
          </div>

          {/* Legal Section */}  
          <div className="flex flex-col space-y-3">  
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">  
              Compliance  
            </h3>  
            <Link href="/legal/privacy-policy" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">  
              Privacy Policy  
            </Link>  
            <Link href="/legal/terms-and-conditions" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">  
              Terms & Conditions  
            </Link>  
          </div>  
        </div>

        {/* Bottom Bar */}  
        <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">  
          <p className="text-xs text-slate-400">  
            &copy; {currentYear} NexVoyage Collective. All rights reserved.  
          </p>  
          <p className="text-xs text-slate-300 italic">  
            Designed for the ROI of Reset.  
          </p>  
        </div>  
      </div>  
    </footer>  
  )  
}  
