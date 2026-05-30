import './globals.css';  
import Link from 'next/link';

export const metadata = {  
title: 'NexVoyage Collective | Quiet Luxury Travel',  
description: 'Bespoke sanctuaries for high networth travelers.',  
};

// --- INLINE COMPONENTS (No external files needed) ---

function Navigation() {  
return (  
  <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-white/80 backdrop-blur-md">  
    <Link href="/" className="text-xs uppercase tracking-[0.4em] font-semibold text-neutral-900">  
      NexVoyage Collective  
    </Link>  
    <div className="flex gap-8 items-center">  
      <Link href="/sanctuaries" className="text-[10px] uppercase tracking-widest text-neutral-500 hover:text-black transition-colors">  
        Sanctuaries  
      </Link>  
      <Link href="/concierge" className="text-[10px] uppercase tracking-widest px-4 py-2 border border-neutral-200 hover:border-black transition-all">  
        Inquire  
      </Link>  
    </div>  
  </nav>  
);  
}

function Footer() {  
return (  
  <footer className="w-full bg-white border-t border-neutral-100 px-6 py-20 mt-20">  
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">  
      <div className="space-y-2">  
        <p className="text-[11px] uppercase tracking-[0.3em] font-medium">NexVoyage Collective</p>  
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

// --- MAIN LAYOUT ---

export default function RootLayout({ children }: { children: React.ReactNode }) {  
return (  
  <html lang="en">  
    <body className="antialiased bg-white text-neutral-900">  
      <Navigation />  
      <div className="pt-24 min-h-screen">  
        {children}  
      </div>  
      <Footer />  
    </body>  
  </html>  
);  
}  
