import type { Metadata } from "next";  
import { Inter, Cormorant_Garamond } from "next/font/google";  
import "./globals.css";  
import Navigation from "./Navigation";  
import Footer from "./Footer";  
import Cursor from "./components/Cursor";

// Load premium editorial fonts  
const inter = Inter({   
subsets: ["latin"],   
variable: "--font-inter"   
});

const cormorant = Cormorant_Garamond({   
subsets: ["latin"],   
weight: ["300", "400", "500", "600"],  
style: ["normal", "italic"],  
variable: "--font-cormorant"   
});

export const metadata: Metadata = {  
title: "NexVoyage Collective | The ROI of Reset",  
description: "Bespoke travel sequences and spatial studies for the discerning traveler.",  
};

export default function RootLayout({  
children,  
}: Readonly<{  
children: React.ReactNode;  
}>) {  
return (  
  <html lang="en" className="scroll-smooth">  
    <body className={`${inter.variable} ${cormorant.variable} antialiased font-sans bg-white text-black min-h-screen flex flex-col`}>  
      {/* Interactive Luxury Layer */}  
      <Cursor />

      {/* Global Navigation */}  
      <Navigation />

      {/* Main Content Area */}  
      <main className="flex-grow">  
        {children}  
      </main>

      {/* Global Footer */}  
      <Footer />  
    </body>  
  </html>  
);  
}  
