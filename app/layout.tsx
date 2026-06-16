import type { Metadata } from "next";  
import { Playfair_Display, JetBrains_Mono } from "next/font/google";  
import "./globals.css";  
import Navigation from "@/components/Navigation"; // Import the new Nav

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });  
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (  
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>  
      <body className="bg-[#0a0a0a] text-[#d4af37] antialiased selection:bg-[#d4af37] selection:text-black min-h-screen flex flex-col">  
          
        {/* FILM GRAIN TEXTURE */}  
        <div   
          className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] mix-blend-overlay"  
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}  
        ></div>

        {/* GLOBAL NAVIGATION */}  
        <Navigation />

        {/* TOP CINEMATIC GRADIENT */}  
        <div className="fixed top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none z-50"></div>  
          
        {/* MAIN CONTENT (Added top padding to clear the Nav) */}  
        <main className="flex-grow relative z-10 pt-24 md:pt-32">  
          {children}  
        </main>

        <footer className="relative z-10 p-12 border-t border-[#d4af37]/5 text-center mt-20">  
          <p className="font-mono text-[9px] uppercase tracking-[0.5em] opacity-20">  
            © 2026 NexVoyage Collective // Private Implementation  
          </p>  
        </footer>

        {/* AMBIENCE */}  
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">  
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#d4af37] blur-[180px] rounded-full opacity-[0.03]"></div>  
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#d4af37] blur-[180px] rounded-full opacity-[0.03]"></div>  
        </div>  
      </body>  
    </html>  
  );  
}  
