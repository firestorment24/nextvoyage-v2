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
        
      {/* Hero Section: The Art of Withdrawal */}  
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 relative overflow-hidden">  
        {/* Subtle Background Watermark */}  
        <div className="absolute top-20 left-10 opacity-[0.02] select-none pointer-events-none">  
          <span className="font-serif text-[25vw] leading-none">NV</span>  
        </div>

        <div className="max-w-6xl mx-auto text-center space-y-12 relative z-10">  
          <p className="uppercase tracking-[0.6em] text-[10px] md:text-xs text-neutral-600 font-bold mb-4">  
            NexVoyage Collective / Registry Entry No. 001  
          </p>  
            
          <h1 className="font-serif text-7xl md:text-[11rem] font-light leading-[0.85] tracking-tighter">  
            The Art of <br />  
            <span className="italic text-neutral-500">Withdrawal</span>  
          </h1>

          <div className="h-24 w-[1px] bg-gradient-to-b from-neutral-800 to-transparent mx-auto my-14"></div>

          <p className="text-neutral-400 font-light text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-serif italic px-4">  
            &ldquo;In an age of total visibility, the greatest luxury is the ability to disappear.&rdquo;  
          </p>

          <div className="pt-20 flex flex-col items-center space-y-8">  
            <Link   
              href="/sanctuaries"  
              className="group flex flex-col items-center space-y-6"  
            >  
              <span className="text-[11px] uppercase tracking-[0.5em] text-neutral-500 group-hover:text-white transition-all duration-700">  
                Access The Collection  
              </span>  
              <div className="w-16 h-[1px] bg-neutral-800 group-hover:w-40 group-hover:bg-neutral-400 transition-all duration-1000"></div>  
            </Link>  
          </div>  
        </div>

        {/* Floating Metadata Labels */}  
        <div className="absolute top-1/2 left-8 -translate-y-1/2 hidden lg:block vertical-text space-y-10 opacity-20">  
          <p className="text-[9px] uppercase tracking-[0.4em] font-mono text-neutral-500 -rotate-90">Precision Operations</p>  
          <p className="text-[9px] uppercase tracking-[0.4em] font-mono text-neutral-500 -rotate-90">Global Reach</p>  
        </div>  
      </section>

      {/* Philosophy Section: The Mandate */}  
      <section className="py-52 bg-[#030303] border-y border-neutral-900">  
        <div className="max-w-6xl mx-auto px-6">  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">  
            <div className="space-y-12">  
              <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-700 font-bold">The Mandate</p>  
              <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1.1]">  
                Atmospheric <br />  
                <span className="italic text-neutral-500 text-4xl md:text-6xl">Return on Investment</span>  
              </h2>  
              <p className="text-neutral-500 leading-relaxed font-light text-lg max-w-md">  
                We do not track miles; we track the quality of silence. Our engineering team designs environments where your pulse slows and your perspective clears.  
              </p>  
              <div className="pt-8">  
                <Link href="/philosophy" className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 hover:text-white transition-colors border-b border-neutral-900 pb-1">  
                  View Our Metrics  
                </Link>  
              </div>  
            </div>

            {/* The Manifest Card */}  
            <div className="border border-neutral-800 p-12 md:p-16 space-y-10 bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">  
               <div className="absolute top-0 right-0 p-6 opacity-5 font-mono text-[80px] leading-none select-none">ROI</div>  
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-bold border-b border-neutral-900 pb-4">Service Protocol 09.2</p>  
                
              <div className="space-y-12">  
                {[  
                  { num: '01', title: 'Zero Footprint', desc: 'Total digital and physical extraction from global tracking.' },  
                  { num: '02', title: 'Bespoke Extraction', desc: 'Secure transit from boardroom to sanctuary in < 6 hours.' },  
                  { num: '03', title: 'Sovereign Peace', desc: 'Environments optimized for recovery, focus, and clarity.' }  
                ].map((item) => (  
                  <div key={item.num} className="flex space-x-8">  
                    <span className="font-serif text-neutral-700 italic">{item.num}</span>  
                    <div className="space-y-2">  
                      <h4 className="font-serif text-2xl text-neutral-200">{item.title}</h4>  
                      <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>  
                    </div>  
                  </div>  
                ))}  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Call to Action: The Invitation */}  
      <section className="py-60 px-6 relative overflow-hidden">  
        <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">  
          <h3 className="font-serif text-4xl md:text-6xl font-light leading-tight text-neutral-400">  
            Membership is by <br />  
            <span className="italic text-white">Private Referral Only</span>  
          </h3>  
          <p className="text-neutral-600 tracking-[0.3em] text-[10px] uppercase font-bold">  
            Currently accepting four new dossiers for the 2026 Season  
          </p>  
          <div className="pt-12">  
            <Link   
              href="/inquire"   
              className="inline-block border border-neutral-800 px-12 py-5 text-[11px] uppercase tracking-[0.5em] text-neutral-400 hover:text-white hover:border-neutral-500 transition-all duration-500 hover:bg-[#080808]"  
            >  
              Begin Inquiry  
            </Link>  
          </div>  
        </div>  
      </section>

      {/* Footer Branding */}  
      <footer className="py-12 border-t border-neutral-900 px-12 flex justify-between items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">  
        <p className="text-[9px] uppercase tracking-widest">© 2026 NexVoyage Collective</p>  
        <p className="text-[9px] uppercase tracking-widest font-serif italic text-right">London / Tokyo / NYC / Zurich</p>  
      </footer>  
    </main>  
  )  
}  
