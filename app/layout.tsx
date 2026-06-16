import type { Metadata } from "next";  
import { Playfair_Display, JetBrains_Mono } from "next/font/google";  
import "./globals.css";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });  
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {  
  title: "NexVoyage Collective | Private Orchestration",  
  description: "Bespoke travel orchestration for the selective traveler.",  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (  
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>  
      <body className="bg-[#0a0a0a] text-[#d4af37] antialiased selection:bg-[#d4af37] selection:text-black">  
          
        {/* THE SOUL: Tactile Film Grain (Z-Index reduced to 0 so it stays behind UI) */}  
        <div   
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.04] mix-blend-overlay"  
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}  
        ></div>

        {/* GLOBAL HEADER */}  
        <header className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-8 py-8 md:px-16">  
          <a href="/" className="font-serif text-2xl italic tracking-tighter hover:opacity-70 transition-opacity">  
            NexVoyage  
          </a>

          {/* BRASS NAVIGATION TRIGGER */}  
          <div className="flex items-center gap-8">  
            <nav className="hidden md:flex gap-10 font-mono text-[9px] uppercase tracking-[0.4em] opacity-40">  
              <a href="/journal" className="hover:opacity-100 transition-opacity">Journal</a>  
              <a href="/invitation" className="hover:opacity-100 transition-opacity">Terminal</a>  
            </nav>  
              
            {/* The Actual Toggle Button */}  
            <button   
              className="p-2 border border-[#d4af37]/20 hover:border-[#d4af37] transition-colors group"  
              onClick={() => {  
                // If your theme uses a global 'menu-open' class, this will trigger it  
                document.body.classList.toggle('menu-active');  
              }}  
            >  
              <div className="space-y-1.5 w-6">  
                <div className="h-[1px] w-full bg-[#d4af37]"></div>  
                <div className="h-[1px] w-full bg-[#d4af37] translate-x-1 group-hover:translate-x-0 transition-transform"></div>  
                <div className="h-[1px] w-full bg-[#d4af37]"></div>  
              </div>  
            </button>  
          </div>  
        </header>

        {/* MAIN VIEWPORT */}  
        <main className="relative z-10 pt-32 min-h-screen">  
          {children}  
        </main>

        {/* Cinematic Backdrop */}  
        <div className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-b from-[#0c0c0c] to-[#0a0a0a]"></div>  
      </body>  
    </html>  
  );  
}  
