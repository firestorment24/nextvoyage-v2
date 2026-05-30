import './globals.css'  
import Navigation from './Navigation'  
import Footer from './Footer'

export const metadata = {  
  title: 'NexVoyage Collective | Curating the Unreachable',  
  description: 'Bespoke travel sanctuaries for high-net-worth travelers.',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body className="antialiased font-serif selection:bg-stone-100">  
        <Navigation />  
        <main className="min-h-screen">{children}</main>  
        <Footer />  
      </body>  
    </html>  
  )  
}  
