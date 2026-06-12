import './globals.css';  
import Navigation from '@/components/Navigation';

export const metadata = {  
  title: 'NexVoyage Collective | The Website Engine',  
  description: 'High-performance travel advisory and sanctuary curation.',  
};

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode;  
}) {  
  return (  
    <html lang="en">  
      <body className="bg-[#0a0a0a] text-stone-200 antialiased selection:bg-[#d4af37] selection:text-black">  
        {/* Global Navigation Hub - Now visible on all pages */}  
        <Navigation />  
          
        <main>  
          {children}  
        </main>  
      </body>  
    </html>  
  );  
}  
