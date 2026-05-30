import './globals.css';  
import Navigation from './Navigation'; // Corrected path  
import Footer from './Footer'; // Assuming Footer is also in the app folder  
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {  
  title: 'NexVoyage Collective | Quiet Luxury Travel',  
  description: 'The Metropolitan & Floating Sanctuary Engine.',  
};

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode;  
}) {  
  return (  
    <html lang="en">  
      <body className={`${inter.className} bg-white text-slate-900`}>  
        <Navigation />  
        <main>{children}</main>  
        <Footer />  
      </body>  
    </html>  
  );  
}  
