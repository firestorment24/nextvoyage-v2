import type { Metadata } from "next";  
import { Playfair_Display, JetBrains_Mono } from "next/font/google";  
import "./globals.css";  
import Navigation from "@/components/Navigation";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", display: "swap" });  
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {  
title: "NexVoyage Collective | Private Orchestration",  
description: "Bespoke travel orchestration for the selective traveler.",  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {  
return (  
  <html lang="en" className="bg-[#0a0a0a]">  
    <body className={`${serif.variable} ${mono.variable} antialiased bg-[#0a0a0a] text-stone-200`}>  
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] mix-blend-overlay">  
        <svg className="w-full h-full">  
          <filter id="noiseFilter">  
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />  
          </filter>  
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />  
        </svg>  
      </div>

      <Navigation />

      <main className="relative z-10 min-h-screen">  
        {children}  
      </main>

      <footer className="relative z-10 py-20 px-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-stone-500 font-mono">  
        <div>© 2026 NexVoyage Collective // Private Implementation</div>  
        <div className="flex gap-8">  
          <a href="/mandate" className="hover:text-stone-300 transition-colors">The Mandate</a>  
          <a href="/privacy" className="hover:text-stone-300 transition-colors">Privacy</a>  
        </div>  
      </footer>  
    </body>  
  </html>  
);  
}  
