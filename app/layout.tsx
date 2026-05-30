import './globals.css';  
import Navigation from './Navigation';  
import Footer from './Footer';   
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
