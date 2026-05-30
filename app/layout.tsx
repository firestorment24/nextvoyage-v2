import './globals.css'  
import Navigation from './Navigation'  
import Footer from './Footer'

export const metadata = {  
  title: 'NexVoyage Collective | Curating the Unreachable',  
  description: 'Bespoke travel sanctuaries and elite concierge services for high-net-worth travelers.',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en" className="scroll-smooth">  
      <body className="antialiased font-serif selection:bg-stone-100 text-stone-900 bg-white">  
        <Navigation />  
        <main className="min-h-screen">  
          {children}  
        </main>  
        <Footer />  
      </body>  
    </html>  
  )  
}  
