import './globals.css';  
import Navigation from './components/Navigation';  
import Footer from './components/Footer';

export const metadata = {  
  title: 'NexVoyage Collective | Quiet Luxury Travel',  
  description: 'Bespoke sanctuaries for high networth travelers.',  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (  
    <html lang="en">  
      <body className="antialiased bg-white text-neutral-900">  
        <Navigation />  
        <div className="pt-24 min-h-screen">  
          {children}  
        </div>  
        <Footer />  
      </body>  
    </html>  
  );  
}  
