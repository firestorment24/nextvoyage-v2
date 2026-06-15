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
      <body className="bg-[#0a0a0a] text-stone-200 antialiased font-serif">  
        {/* Urgent Contact Bar */}  
        <div className="bg-[#1c1c1c] border-b border-[#2a2a2a] py-2 text-center text-xs tracking-[0.2em] uppercase text-[#c5a059]">  
          Direct Concierge: <a href="tel:8135358059" className="hover:text-white transition-colors">813-535-8059</a>  
        </div>  
          
        <Navigation />  
        <main className="min-h-screen">{children}</main>  
        <Footer />  
          
        {/* Global Floating Call Button (Mobile) */}  
        <a   
          href="tel:8135358059"  
          className="fixed bottom-6 right-6 md:hidden bg-[#c5a059] text-black p-4 rounded-full shadow-2xl z-50"  
        >  
          <span className="sr-only">Call Concierge</span>  
          📞  
        </a>  
      </body>  
    </html>  
  );  
}  
