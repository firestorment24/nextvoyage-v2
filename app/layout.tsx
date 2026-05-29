import './globals.css';  
import Navigation from '@/components/Navigation';

export const metadata = {  
  title: 'NexVoyage Collective | Refined Exploration',  
  description: 'Quiet Luxury travel for high-net-worth individuals.',  
};

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode;  
}) {  
  return (  
    <html lang="en">  
      <body className="bg-black text-zinc-300 antialiased selection:bg-zinc-800">  
        {/* This is the missing piece */}  
        <Navigation />  
          
        <main>  
          {children}  
        </main>  
      </body>  
    </html>  
  );  
}  
