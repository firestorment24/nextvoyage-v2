import type { Metadata } from "next";  
import { Inter, Playfair_Display } from "next/font/google";  
import "./globals.css";

// Loading luxury fonts  
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });  
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {  
  title: "NexVoyage Collective | The Elite Ledger",  
  description: "A private engine for high-net-worth travel and sanctuary curation.",  
};

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode;  
}) {  
  return (  
    <html lang="en" className="bg-[#0a0a0a] text-stone-200">  
      <body className={`${sans.variable} ${serif.variable} font-sans antialiased`}>  
        {/* Minimalist Top Navigation - Persistent across pillars */}  
        <header className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference">  
          <div className="font-serif text-xl tracking-[0.2em] text-[#d4af37] uppercase">  
            NexVoyage  
          </div>  
          <nav className="hidden md:flex space-x-8 text-[10px] uppercase tracking-[0.3em] font-light">  
            <a href="/" className="hover:text-[#d4af37] transition-colors">Home</a>  
            <a href="/manifest" className="hover:text-[#d4af37] transition-colors">The Manifest</a>  
            <a href="/mandate" className="hover:text-[#d4af37] transition-colors">The Mandate</a>  
            <a href="/reserve" className="hover:text-[#d4af37] transition-colors">The Reserve</a>  
          </nav>  
        </header>

        <main className="min-h-screen pt-24">  
          {children}  
        </main>

        <footer className="p-12 text-center border-t border-stone-900 mt-20">  
          <p className="text-[10px] uppercase tracking-[0.5em] text-stone-500">  
            By Invitation Only — NexVoyage Collective  
          </p>  
        </footer>  
      </body>  
    </html>  
  );  
}  
