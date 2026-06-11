import { Cormorant_Garamond, Inter } from 'next/font/google'  
import Link from 'next/link'

const cormorant = Cormorant_Garamond({   
  subsets: ['latin'],   
  weight: ['300', '400', '600', '700'],  
  variable: '--font-cormorant'  
})

const inter = Inter({   
  subsets: ['latin'],  
  variable: '--font-inter'  
})

export default function HomePage() {  
  return (  
    <main className={`${inter.variable} ${cormorant.variable} font-sans bg-black text-white min-h-screen selection:bg-neutral-800`}>  
        
      {/* Hero Section - The Ledger Entry */}  
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden">  
        {/* Subtle Background Text */}  
        <div className="absolute top-20 left-10 opacity-[0.03] select-none pointer-events-none">  
          <span className="font-serif text-[20vw] leading-none">NV</span>  
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">  
          <p className="uppercase tracking-[0.5em] text-[10px] md:text-xs text-neutral-500 font-bold mb-4">  
            NexVoyage Collective / Master Registry  
          </p>  
            
          <h1 className="font-serif text-6xl md:text-[10rem] font-light leading-[0.9] tracking-tighter">  
            The Art of <br />  
            <span className="italic text-neutral-400">Withdrawal</span>  
          </h1>

          <div className="h-20 w-[1px] bg-neutral-800 mx-auto my-12"></div>

          <p className="text-neutral-400 font-light text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-serif italic">  
            &ldquo;We do not just sell destinations; we curate the atmospheric return on your most valuable asset: time.&rdquo;  
          </p>

          <div className="pt-16 flex flex-col items-center space-y-8">  
            <Link   
              href="/sanctuaries"  
              className="group flex flex-col items-center space-y-4"  
            >  
              <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 group-hover:text-white transition-colors duration-500">  
                Enter The Collection  
              </span>  
              <div className="w-12 h-[1px] bg-neutral-700 group-hover:w-24 group-hover:bg-white transition-all duration-700"></div>  
            </Link>  
          </div>  
        </div>

        {/* Bottom Status Bar */}  
        <div className="absolute bottom-10 w-full px-12 hidden md:flex justify-between items-end border-t border-neutral-900 pt-8 opacity-40">  
          <div className="space-y-1">  
            <p className="text-[9px] uppercase tracking-widest text-neutral-500">Service Model</p>  
            <p className="font-serif text-sm italic">Ultra-High Networth Only</p>  
          </div>  
          <div className="text-center space-y-1">  
            <p className="text-[9px] uppercase tracking-widest text-neutral-500">Current Status</p>  
            <p className="font-serif text-sm italic">Accepting Inquiries</p>  
          </div>  
          <div className="text-right space-y-1">  
            <p className="text-[9px] uppercase tracking-widest text-neutral-500">Location</p>  
            <p className="font-serif text-sm italic">Global Operations</p>  
          </div>  
        </div>  
      </section>

      {/* Philosophy Section - Minimalist & Punchy */}  
      <section className="py-40 bg-[#050505] border-t border-neutral-900">  
        <div className="max-w-4xl mx-auto px-6">  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">  
            <div className="space-y-8">  
              <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight">  
                Privacy is the <br />  
                <span className="italic text-neutral-500">Last Luxury.</span>  
              </h2>  
              <p className="text-neutral-500 leading-relaxed font-light">  
                In an age of total visibility, we offer the opposite. Our sanctuaries are engineered for absolute discretion, ensuring your presence remains a secret and your peace remains undisturbed.  
              </p>  
            </div>  
            <div className="border border-neutral-800 p-8 space-y-6 bg-black shadow-2xl">  
              <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 font-bold border-b border-neutral-900 pb-2">The Mandate</p>  
              <ul className="space-y-4 font-serif text-lg text-neutral-300">  
                <li>01. Zero Digital Footprint</li>  
                <li>02. Bespoke Extraction</li>  
                <li>03. Atmospheric ROI</li>  
              </ul>  
            </div>  
          </div>  
        </div>  
      </section>  
    </main>  
  )  
}  
