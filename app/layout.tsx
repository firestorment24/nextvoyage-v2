import type { Metadata } from "next";  
import { Inter, Cormorant_Garamond } from "next/font/google";  
import "./globals.css";  
import Navigation from "./Navigation";  
import Footer from "./Footer";

// Load fonts  
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
  description: "Bespoke travel for high-net-worth individuals seeking silence and architectural calm.",  
};

export default function RootLayout({  
  children,  
}: Readonly<{  
  children: React.ReactNode;  
}>) {  
  return (  
    <html lang="en">  
      <body className={`${inter.variable} ${cormorant.variable} antialiased font-sans bg-white text-black`}>  
        <Navigation />  
        {/* The pt-20 ensures content doesn't hide under the fixed navbar */}  
        <div className="pt-20">  
          {children}  
        </div>  
        <Footer />  
      </body>  
    </html>  
  );  
}  
