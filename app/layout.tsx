import './globals.css'  
import Navigation from './Navigation'  
import Footer from './Footer'

export const metadata = {  
  title: 'NexVoyage Collective | Curating the Unreachable',  
  description: 'Bespoke travel sanctuaries for high-net-worth travelers.',  
}

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (  
    <html lang="en" className="scroll-smooth">  
      <body className="bg-[#0A0A0A] antialiased text-white selection:bg-white selection:text-black">  
        <Navigation />  
        <main>{children}</main>  
        <Footer />  
      </body>  
    </html>  
  )  
}  
