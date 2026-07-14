import './globals.css';  
import Navigation from '@/components/Navigation';  
import DiscoveryCallCTA from '@/components/DiscoveryCallCTA';

export const metadata = {  
  title: 'NexVoyage Collective',  
  description: 'Luxury Travel Redefined',  
};

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode;  
}) {  
  return (  
    <html lang="en">  
      <body className="bg-[#0A0A0A] font-sans antialiased">  
        <Navigation />  
        {children}  
        <DiscoveryCallCTA />  
      </body>  
    </html>  
  );  
}  
