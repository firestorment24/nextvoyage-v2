import './globals.css';  
import Link from 'next/link';

export const metadata = {  
  title: 'NexVoyage Collective | Bespoke Sanctuary Travel',  
  description: 'Quiet luxury and secure travel for the discerning traveler.',  
};

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode;  
}) {  
  return (  
    <html lang="en">  
      <body className="bg-[#F5F5F0] antialiased">  
        {/* NAVIGATION */}  
        <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-[#F5F5F0]/80 backdrop-blur-md border-b border-neutral-200/50">  
          <Link href="/" className="text-xl font-serif tracking-[0.2em] text-[#2C2C2C] hover:opacity-70 transition-opacity">  
            NEXVOYAGE <span className="font-light">COLLECTIVE</span>  
          </Link>  
            
          <div className="flex items-center gap-8">  
            <Link href="/concierge" className="text-xs uppercase tracking-widest px-6 py-2 border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-all duration-300">  
              Inquire  
            </Link>  
          </div>  
        </nav>

        {children}

        {/* FOOTER */}  
        <footer className="bg-[#2C2C2C] text-[#F5F5F0] py-20 px-8">  
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-700 pt-12">  
            <div>  
              <h3 className="font-serif text-2xl mb-4 tracking-tight">NexVoyage Collective</h3>  
              <p className="text-neutral-400 text-sm font-sans max-w-xs leading-relaxed">  
                Curating high-security, high-discretion travel experiences for the world's most discerning individuals.  
              </p>  
            </div>  
              
            <div className="flex flex-col gap-3 text-sm font-sans uppercase tracking-widest text-neutral-400">  
              <Link href="/" className="hover:text-white transition-colors">The Sanctuaries</Link>  
              <Link href="/concierge" className="hover:text-white transition-colors">The Concierge</Link>  
              <Link href="/safety" className="hover:text-white transition-colors">Safety Commitment</Link>  
            </div>

            <div className="flex flex-col gap-3 text-sm font-sans text-neutral-400">  
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>  
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>  
              <Link href="/consent" className="hover:text-white transition-colors">Consent Guidelines</Link>  
              <p className="mt-8 text-xs opacity-50">© 2026 NEXVOYAGE COLLECTIVE. ALL RIGHTS RESERVED.</p>  
            </div>  
          </div>  
        </footer>  
      </body>  
    </html>  
  );  
}  
