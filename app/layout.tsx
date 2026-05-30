import './globals.css';  
import { Inter } from 'next/font/google';  
import Navigation from './Navigation'; // Assumes Navigation.tsx is in the app folder  
import Footer from './Footer';         // Assumes Footer.tsx is in the app folder

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (  
    <html lang="en">  
      <body className={inter.className}>  
        <Navigation />  
        <main className="min-h-screen pt-20">{children}</main>  
        <Footer />  
      </body>  
    </html>  
  );  
}  
