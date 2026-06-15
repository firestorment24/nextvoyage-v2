import './globals.css';  
import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';

export const metadata = {  
  title: 'NexVoyage Collective | Bespoke Travel for High Net Worth Individuals',  
  description: 'Curated luxury travel experiences for the discerning traveler.',  
};

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode;  
}) {  
  return (  
    <html lang="en">  
      <head>  
        {/* This small script pushes the fixed navigation down so the phone bar is visible */}  
        <style dangerouslySetInnerHTML={{ __html: `  
          nav, header { top: 32px !important; transition: top 0.3s ease; }  
          @media (max-width: 768px) { nav, header { top: 36px !important; } }  
        ` }} />  
      </head>  
      <body className="bg-[#0a0a0a] text-stone-200 antialiased font-serif">  
          
        {/* Global Contact Bar - Now Fixed and on Top */}  
        <div className="fixed top-0 left-0 right-0 h-8 md:h-9 bg-[#1c1c1c] border-b border-[#2a2a2a] flex items-center justify-center z-[100] text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#c5a059]">  
          Direct Concierge: <a href="tel:8135358059" className="ml-2 hover:text-white transition-colors underline decoration-[#c5a059]/30 underline-offset-4">813-535-8059</a>  
        </div>  
          
        {/* Padding-top here ensures the rest of the site doesn't get hidden under the bars */}  
        <div className="pt-8 md:pt-9">  
          <Navigation />  
          <main className="min-h-screen">{children}</main>  
          <Footer />  
        </div>  
          
        {/* Global Floating Call Button (Mobile Only) */}  
        <a   
          href="tel:8135358059"  
          className="fixed bottom-6 right-6 md:hidden bg-[#c5a059] text-black p-4 rounded-full shadow-2xl z-[110] active:scale-95 transition-transform"  
        >  
          <span className="sr-only">Call Concierge</span>  
          <span className="text-xl">📞</span>  
        </a>  
      </body>  
    </html>  
  );  
}  
