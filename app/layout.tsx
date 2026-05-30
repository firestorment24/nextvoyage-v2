import './globals.css'  
import Navigation from './Navigation'

export const metadata = {  
  title: 'NexVoyage Collective',  
  description: 'Bespoke travel for high net worth individuals',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body className="bg-black text-white antialiased">  
        <Navigation />  
        <main>{children}</main>  
      </body>  
    </html>  
  )  
}  
import Footer from '../components/Footer'; // Adjust path as needed

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (  
    <html lang="en">  
      <body className="antialiased selection:bg-neutral-100">  
        {/* Navigation Component here */}  
          
        <main>{children}</main>  
          
        <Footer />  
      </body>  
    </html>  
  );  
}  
