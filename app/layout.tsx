import './globals.css';  
import { Navigation } from './components/Navigation';  
import { Footer } from './components/Footer';

export const metadata = {  
  title: 'NexVoyage Collective | Curating the Unreachable',  
  description: 'Private travel architecture for high-net-worth individuals.',  
};

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode;  
}) {  
  return (  
    <html lang="en">  
      <body className="bg-black text-stone-200 antialiased font-sans">  
        {/* Urgent Contact Bar */}  
        <div className="bg-stone-900 border-b border-stone-800 py-2 text-center text-xs tracking-[0.2em] uppercase text-stone-500">  
          Concierge Direct: <a href="tel:8135358059" className="text-stone-300 hover:text-white transition-colors">813-535-8059</a>  
        </div>  
          
        <Navigation />  
        <main>{children}</main>  
          
        <footer className="border-t border-stone-800 bg-black py-12 px-6">  
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">  
            <div className="text-center md:text-left">  
              <h3 className="font-serif text-2xl text-stone-100">NexVoyage Collective</h3>  
              <p className="text-stone-500 text-sm mt-2">The Terminal for Bespoke Travel.</p>  
            </div>  
            <div className="text-center">  
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Speak with an Architect</p>  
              <a href="tel:8135358059" className="text-xl font-serif text-stone-300 hover:text-white transition-colors">813-535-8059</a>  
            </div>  
            <div className="text-stone-600 text-xs">  
              © 2026 NexVoyage Collective. All Rights Reserved.  
            </div>  
          </div>  
        </footer>  
      </body>  
    </html>  
  );  
}  
