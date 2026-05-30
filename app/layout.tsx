import './globals.css'  
import Navigation from './Navigation'  
import Footer from './Footer'

export const metadata = {  
  title: 'NexVoyage Collective',  
  description: 'Curating the Unreachable',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body className="bg-black text-white antialiased font-sans">  
        <Navigation />  
        <main className="min-h-screen pt-20">  
          {children}  
        </main>  
        <Footer />  
      </body>  
    </html>  
  )  
}  
