import './globals.css';  
import Navigation from '@/components/Navigation';

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
        {/* This ensures the Nav is at the top of EVERY page */}  
        <Navigation />  
          
        {/* This is where all your page content renders */}  
        {children}  
      </body>  
    </html>  
  );  
}  
