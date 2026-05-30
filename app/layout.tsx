import './globals.css';  
import Navigation from '../components/Navigation'; // Adjusted for the components folder  
import Link from 'next/link';

export const metadata = {  
  title: 'NexVoyage Collective | Quiet Luxury',  
  description: 'The Guardian Layer for the 0.1%.',  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (  
    <html lang="en">  
      <body className="bg-white text-black antialiased">  
        <Navigation />  
        <div className="pt-16">{children}</div>  
        <footer className="py-20 border-t border-gray-50 text-center">  
          <div className="flex justify-center space-x-8 text-[9px] tracking-[0.3em] uppercase text-gray-300 mb-6">  
            <Link href="/legal/privacy">Privacy</Link>  
            <Link href="/legal/terms">Terms</Link>  
            <Link href="/legal/impact">Impact</Link>  
          </div>  
          <p className="text-[9px] tracking-[0.5em] text-gray-200">© 2026 NEXVOYAGE COLLECTIVE</p>  
        </footer>  
      </body>  
    </html>  
  );  
}  
